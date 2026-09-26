import {
  attributionToIntakeFields,
  defaultAttribution,
  parseAttributionFromForm,
  type AttributionSnapshot,
} from "@/lib/attribution";
import {
  LEAD_INTAKE_DEFAULT_URL,
  PRODUIT_INTERESSE,
  SOURCE_FORMULAIRE,
} from "@/lib/lead-intake-config";

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
  consent: "oui";
  attribution?: AttributionSnapshot;
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
  reason?: "missing_secret" | "http_error" | "bad_body" | "network" | "timeout";
};

const CRM_MAX_ATTEMPTS = 3;
const CRM_RETRY_DELAY_MS = 600;

const SITUATION_LABELS: Record<string, string> = {
  "salarie-lpp": "Salarié·e avec 2e pilier",
  "sans-lpp": "Sans 2e pilier",
  independant: "Indépendant·e",
  frontalier: "Frontalier·ère",
  autre: "Autre / je ne sais pas",
};

function env(name: string): string {
  return (process.env[name] ?? "").trim();
}

function resolveLeadIntakeUrl(): string {
  return env("SFA_LEAD_INTAKE_URL") || LEAD_INTAKE_DEFAULT_URL;
}

export function leadIntakeConfigured(): boolean {
  return Boolean(env("SFA_LEAD_INTAKE_SECRET"));
}

/** @deprecated Préférer leadIntakeConfigured */
export const crmIngestConfigured = leadIntakeConfigured;

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

export function toLeadIntakeBody(lead: LeadPayload): Record<string, unknown> {
  const attr = lead.attribution ?? defaultAttribution();
  const situationLabel = lead.situation
    ? SITUATION_LABELS[lead.situation] ?? lead.situation
    : undefined;

  return {
    prenom: lead.firstName,
    nom: lead.lastName,
    email: lead.email.toLowerCase(),
    telephone: lead.phone,
    produit_interesse: PRODUIT_INTERESSE,
    source_formulaire: SOURCE_FORMULAIRE,
    source: `comparateur-3eme-pilier.ch (${lead.intent})`,
    canton: lead.canton || undefined,
    situation: lead.situation || undefined,
    situation_professionnelle: situationLabel,
    remarque: [lead.message, "Consentement accepté : rappel et transmission à Christophe Bouin."]
      .filter(Boolean)
      .join("\n\n"),
    consentement: lead.consent,
    ...attributionToIntakeFields(attr),
  };
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

async function postLeadIntakeOnce(
  url: string,
  secret: string,
  body: Record<string, unknown>,
): Promise<{
  status: number;
  json: { ok?: boolean; action?: string } | null;
  reason?: CrmIngestResult["reason"];
}> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-intake-secret": secret,
      },
      body: JSON.stringify(body),
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
      const reason: CrmIngestResult["reason"] =
        response.status === 401 ? "http_error" : response.status >= 500 ? "http_error" : "bad_body";
      return { status: response.status, json, reason };
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
  const secret = env("SFA_LEAD_INTAKE_SECRET");
  if (!secret) {
    console.error("lead-ingest", {
      channel: "crm",
      configured: false,
      reason: "missing_secret",
      hint: "Définir SFA_LEAD_INTAKE_SECRET sur Vercel Production",
    });
    return { ok: false, configured: false, attempts: 0, reason: "missing_secret" };
  }

  const url = resolveLeadIntakeUrl();
  const body = toLeadIntakeBody(lead);

  let lastStatus = 0;
  let lastAction: string | undefined;
  let lastReason: CrmIngestResult["reason"] = "http_error";

  for (let attempt = 1; attempt <= CRM_MAX_ATTEMPTS; attempt++) {
    const result = await postLeadIntakeOnce(url, secret, body);
    lastStatus = result.status;
    lastAction = result.json?.action;
    lastReason = result.reason ?? (result.status >= 500 ? "http_error" : "bad_body");

    if (crmAccepted(result.status, result.json)) {
      console.info("lead-ingest", {
        channel: "crm",
        endpoint: "lead-intake",
        configured: true,
        attempt,
        status: result.status,
        action: lastAction ?? "ok",
      });
      return {
        ok: true,
        configured: true,
        attempts: attempt,
        status: result.status,
        action: lastAction,
      };
    }

    const retryable =
      result.reason === "network" ||
      result.reason === "timeout" ||
      result.status === 0 ||
      result.status >= 500;

    console.error("lead-ingest", {
      channel: "crm",
      endpoint: "lead-intake",
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

export { parseAttributionFromForm };

function dossierText(lead: LeadPayload): string {
  return [
    `Intent : ${lead.intent}`,
    `Nom : ${lead.firstName} ${lead.lastName}`,
    `E-mail : ${lead.email}`,
    `Téléphone : ${lead.phone}`,
    `Canton : ${lead.canton || "—"}`,
    `Situation : ${lead.situation || "—"}`,
    `Message : ${lead.message || "—"}`,
    `Consentement : ${lead.consent} — rappel et transmission à Christophe Bouin`,
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
