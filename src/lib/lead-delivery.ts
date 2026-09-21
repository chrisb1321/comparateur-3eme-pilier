export type LeadPayload = {
  receivedAt: string;
  intent: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  canton: string;
  situation: string;
  message: string;
};

export type LeadDelivery = {
  journal: boolean;
  crm: boolean;
  email: boolean;
};

export type CrmIngestResult = {
  ok: boolean;
  configured: boolean;
  attempts: number;
  status?: number;
  action?: string;
  reason?: "missing_token" | "http_error" | "bad_body" | "network" | "timeout";
};

/** Backend live de commission-sfa.vercel.app (projet public, clé anon dans le bundle). */
export const CRM_SUPABASE_DEFAULT = "https://xgzjlkrbqpvjrfdmiuxq.supabase.co";
export const CRM_SITE_LEAD_FUNCTION = "public-site-lead";

const CRM_MAX_ATTEMPTS = 3;
const CRM_RETRY_DELAY_MS = 600;

function env(name: string): string {
  return (process.env[name] ?? "").trim();
}

export function crmIngestConfigured(): boolean {
  return Boolean(env("CRM_INGEST_TOKEN"));
}

export function deliveryQuery(delivery: LeadDelivery): string {
  const params = new URLSearchParams({
    journal: delivery.journal ? "1" : "0",
    crm: delivery.crm ? "1" : "0",
    email: delivery.email ? "1" : "0",
  });
  return `/page-remerciement/?${params.toString()}`;
}

export function parseDelivery(search: {
  journal?: string | string[];
  crm?: string | string[];
  email?: string | string[];
}): LeadDelivery {
  const flag = (value: string | string[] | undefined) =>
    (Array.isArray(value) ? value[0] : value) === "1";
  return {
    journal: flag(search.journal),
    crm: flag(search.crm),
    email: flag(search.email),
  };
}

export function toProspectRow(lead: LeadPayload): Record<string, unknown> {
  const comparateur = lead.intent === "comparateur";
  const notes = [
    `Source : comparateur-3eme-pilier.ch (${lead.intent})`,
    lead.canton ? `Canton : ${lead.canton}` : null,
    lead.situation ? `Situation : ${lead.situation}` : null,
    lead.message ? `Message : ${lead.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const row: Record<string, unknown> = {
    nom: lead.lastName,
    prenom: lead.firstName,
    email: lead.email,
    telephone: lead.phone,
    produit_interesse: "3eme_pilier",
    source_formulaire: comparateur ? "comparateur-3emepilier" : "site_web",
    notes,
    statut: "nouveau",
    activity_log: [
      {
        timestamp: lead.receivedAt,
        action: comparateur ? "Lead comparateur 3e pilier" : "Lead contact site",
        details: "Ingest depuis comparateur-3eme-pilier.ch",
      },
    ],
  };
  const advisor = env("CRM_DEFAULT_ADVISOR_ID");
  if (advisor) row.advisor_id = advisor;
  return row;
}

/** 201 insert ou 200 update, uniquement si `{ ok: true }`. */
export function crmAccepted(
  status: number,
  body: { ok?: boolean } | null,
): boolean {
  return status >= 200 && status < 300 && body?.ok === true;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function postCrmOnce(
  url: string,
  token: string,
  row: Record<string, unknown>,
): Promise<{ status: number; json: { ok?: boolean; action?: string } | null; reason?: CrmIngestResult["reason"] }> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(row),
      signal: AbortSignal.timeout(8000),
    });
    const text = await response.text().catch(() => "");
    let json: { ok?: boolean; action?: string } | null = null;
    try {
      json = text ? (JSON.parse(text) as { ok?: boolean; action?: string }) : null;
    } catch {
      json = null;
    }
    if (!crmAccepted(response.status, json)) {
      return { status: response.status, json, reason: "bad_body" };
    }
    return { status: response.status, json };
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    const reason: CrmIngestResult["reason"] =
      name === "TimeoutError" || name === "AbortError" ? "timeout" : "network";
    return { status: 0, json: null, reason };
  }
}

export async function notifyCrm(lead: LeadPayload): Promise<CrmIngestResult> {
  const token = env("CRM_INGEST_TOKEN");
  if (!token) {
    console.error("lead-ingest", {
      channel: "crm",
      configured: false,
      reason: "missing_token",
      hint: "Définir CRM_INGEST_TOKEN sur Vercel Production",
    });
    return { ok: false, configured: false, attempts: 0, reason: "missing_token" };
  }

  const base = (env("CRM_SUPABASE_URL") || CRM_SUPABASE_DEFAULT).replace(/\/$/, "");
  const functionName = env("CRM_INGEST_FUNCTION") || CRM_SITE_LEAD_FUNCTION;
  const url = `${base}/functions/v1/${functionName}`;
  const row = toProspectRow(lead);

  let lastStatus = 0;
  let lastAction: string | undefined;
  let lastReason: CrmIngestResult["reason"] = "http_error";

  for (let attempt = 1; attempt <= CRM_MAX_ATTEMPTS; attempt++) {
    const result = await postCrmOnce(url, token, row);
    lastStatus = result.status;
    lastAction = result.json?.action;
    lastReason = result.reason ?? (result.status >= 500 ? "http_error" : "bad_body");

    if (crmAccepted(result.status, result.json)) {
      console.info("lead-ingest", {
        channel: "crm",
        configured: true,
        attempt,
        status: result.status,
        action: lastAction ?? "ok",
      });
      return { ok: true, configured: true, attempts: attempt, status: result.status, action: lastAction };
    }

    const retryable =
      result.reason === "network" ||
      result.reason === "timeout" ||
      result.status === 0 ||
      result.status >= 500;

    console.error("lead-ingest", {
      channel: "crm",
      configured: true,
      attempt,
      status: result.status || "fetch_failed",
      reason: lastReason,
      retryable,
    });

    if (!retryable || attempt === CRM_MAX_ATTEMPTS) break;
    await sleep(CRM_RETRY_DELAY_MS * attempt);
  }

  return {
    ok: false,
    configured: true,
    attempts: CRM_MAX_ATTEMPTS,
    status: lastStatus,
    reason: lastReason,
  };
}

function dossierText(lead: LeadPayload): string {
  return [
    `Intent : ${lead.intent}`,
    `Nom : ${lead.firstName} ${lead.lastName}`,
    `E-mail : ${lead.email}`,
    `Téléphone : ${lead.phone}`,
    `Canton : ${lead.canton || "—"}`,
    `Situation : ${lead.situation || "—"}`,
    `Message : ${lead.message || "—"}`,
    `Reçu : ${lead.receivedAt}`,
  ].join("\n");
}

/** Secondaire. L’ingest Commission SFA est le chemin principal. */
export async function notifyEmail(lead: LeadPayload): Promise<boolean> {
  const to = env("LEAD_NOTIFY_EMAIL");
  if (!to) return false;
  const from = env("LEAD_FROM_EMAIL");
  if (!from) {
    console.error("lead-ingest", { channel: "email", configured: false, reason: "missing_from" });
    return false;
  }
  const fromName = env("LEAD_FROM_NAME") || "Comparateur 3ème pilier";
  const subject = `Lead ${lead.intent} — ${lead.firstName} ${lead.lastName}`;
  const text = dossierText(lead);
  const html = `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;white-space:pre-wrap">${text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")}</pre>`;
  const resendKey = env("RESEND_API_KEY");
  if (resendKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from: `${fromName} <${from}>`, to: [to], subject, text, html }),
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) {
        console.error("lead-ingest", { channel: "email", provider: "resend", status: response.status });
        return false;
      }
      console.info("lead-ingest", { channel: "email", provider: "resend", ok: true });
      return true;
    } catch (error) {
      console.error("lead-ingest", { channel: "email", provider: "resend", error: String(error) });
      return false;
    }
  }
  const host = env("SMTP_HOST");
  if (!host) {
    console.error("lead-ingest", { channel: "email", configured: false, reason: "no_provider" });
    return false;
  }
  try {
    const nodemailer = await import("nodemailer");
    const port = Number(env("SMTP_PORT") || "587");
    const user = env("SMTP_USER");
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: env("SMTP_SECURE") === "true" || port === 465,
      auth: user ? { user, pass: env("SMTP_PASS") } : undefined,
    });
    await transporter.sendMail({ from: `${fromName} <${from}>`, to, subject, text, html });
    console.info("lead-ingest", { channel: "email", provider: "smtp", ok: true });
    return true;
  } catch (error) {
    console.error("lead-ingest", { channel: "email", provider: "smtp", error: String(error) });
    return false;
  }
}
