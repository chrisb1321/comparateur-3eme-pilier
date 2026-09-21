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

/** Backend live de commission-sfa.vercel.app (projet public, clé anon dans le bundle). */
export const CRM_SUPABASE_DEFAULT = "https://xgzjlkrbqpvjrfdmiuxq.supabase.co";
export const CRM_SITE_LEAD_FUNCTION = "public-site-lead";

function env(name: string): string {
  return (process.env[name] ?? "").trim();
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

export async function notifyCrm(lead: LeadPayload): Promise<boolean> {
  const token = env("CRM_INGEST_TOKEN");
  if (!token) {
    console.error("lead-crm: CRM_INGEST_TOKEN manquant — pas d’écriture dans Commission SFA.");
    return false;
  }
  const base = (env("CRM_SUPABASE_URL") || CRM_SUPABASE_DEFAULT).replace(/\/$/, "");
  const functionName = env("CRM_INGEST_FUNCTION") || CRM_SITE_LEAD_FUNCTION;
  const row = toProspectRow(lead);

  try {
    const response = await fetch(`${base}/functions/v1/${functionName}`, {
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
      console.error("lead-crm-function", functionName, response.status, text.slice(0, 240));
      return false;
    }
    console.info("lead-crm-function", functionName, response.status, json?.action ?? "ok");
    return true;
  } catch (error) {
    console.error("lead-crm", error);
    return false;
  }
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

/** Secondaire. Le CRM Commission SFA est le chemin principal. */
export async function notifyEmail(lead: LeadPayload): Promise<boolean> {
  const to = env("LEAD_NOTIFY_EMAIL");
  if (!to) return false;
  const from = env("LEAD_FROM_EMAIL");
  if (!from) {
    console.error("lead-email: LEAD_FROM_EMAIL manquant.");
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
        console.error("lead-resend-status", response.status);
        return false;
      }
      return true;
    } catch (error) {
      console.error("lead-resend", error);
      return false;
    }
  }
  const host = env("SMTP_HOST");
  if (!host) {
    console.error("lead-email: ni RESEND_API_KEY ni SMTP_HOST.");
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
    return true;
  } catch (error) {
    console.error("lead-smtp", error);
    return false;
  }
}
