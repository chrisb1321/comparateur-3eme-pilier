"use server";

import { redirect } from "next/navigation";
import {
  deliveryQuery,
  leadIntakeConfigured,
  notifyCrm,
  notifyEmail,
  parseAttributionFromForm,
  type LeadDelivery,
  type LeadPayload,
} from "@/lib/lead-delivery";
import { appendJournalLine } from "@/lib/lead-journal";

export type LeadState = { error?: string } | null;

function str(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

const SAVINGS = new Set([
  "100",
  "150",
  "200",
  "250",
  "300",
  "350",
  "400",
  "450",
  "500",
  "550",
  "A définir",
]);

function isBirthDate(value: string): boolean {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return false;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  const today = new Date();
  return (
    year >= 1900 &&
    date <= today &&
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  if (str(form, "website")) {
    redirect("/page-remerciement/?journal=0&crm=0&email=0");
  }

  const intent = str(form, "intent") || "comparateur";
  const fullName = str(form, "fullName");
  let firstName = str(form, "firstName");
  let lastName = str(form, "lastName");
  const email = str(form, "email");
  const phone = str(form, "phone");
  const canton = str(form, "canton");
  const situation = str(form, "situation");
  const birthDate = str(form, "birthDate");
  const monthlySavings = str(form, "monthlySavings");
  let message = str(form, "message");
  const consent = str(form, "consent");

  if (fullName) {
    const parts = fullName.split(/\s+/).filter(Boolean);
    firstName = parts[0] ?? "";
    lastName = parts.slice(1).join(" ") || firstName;
  }

  if (!firstName || !lastName) {
    return { error: "Indiquez votre nom et votre prénom." };
  }
  if (intent === "comparateur" && !isBirthDate(birthDate)) {
    return { error: "Indiquez votre date de naissance au format JJ/MM/AAAA." };
  }
  if (intent === "comparateur" && !SAVINGS.has(monthlySavings)) {
    return { error: "Indiquez combien vous souhaitez épargner par mois." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Indiquez une adresse e-mail valable." };
  }
  if (phone.length < 8) {
    return { error: "Indiquez un numéro de téléphone joignable." };
  }
  if (intent === "contact" && message.length < 8) {
    return { error: "Décrivez votre demande en quelques mots." };
  }
  if (consent !== "oui") {
    return { error: "Le consentement est nécessaire pour transmettre votre demande." };
  }

  const remarque = [
    birthDate ? `Date de naissance : ${birthDate}` : "",
    monthlySavings ? `Épargne mensuelle souhaitée : ${monthlySavings}` : "",
    fullName ? `Nom indiqué : ${fullName}` : "",
    message,
  ]
    .filter(Boolean)
    .join("\n");
  message = remarque;

  const payload: LeadPayload = {
    receivedAt: new Date().toISOString(),
    intent,
    firstName,
    lastName,
    email,
    phone,
    canton,
    situation,
    message,
    consent: "oui",
    attribution: parseAttributionFromForm(form),
  };

  const journal = await appendJournalLine(payload);
  const crmResult = await notifyCrm(payload);
  const mailed = await notifyEmail(payload);
  const delivery: LeadDelivery = { journal, crm: crmResult.ok, email: mailed };

  if (journal) {
    await appendJournalLine({
      receivedAt: new Date().toISOString(),
      event: "delivery",
      intent,
      notify: delivery,
      ingest: {
        crmConfigured: crmResult.configured,
        crmAttempts: crmResult.attempts,
        crmReason: crmResult.ok ? undefined : crmResult.reason,
      },
    });
  }

  console.info("lead-submit", {
    intent,
    journal,
    crm: crmResult.ok,
    crmConfigured: crmResult.configured,
    crmAttempts: crmResult.attempts,
    email: mailed,
  });

  if (!journal && !crmResult.ok) {
    if (!leadIntakeConfigured()) {
      return {
        error:
          "Le service de transmission n’est pas configuré sur ce serveur. Écrivez-nous à info@comparateur-3eme-pilier.ch avec votre numéro.",
      };
    }
    return {
      error:
        "La transmission a échoué. Réessayez dans quelques minutes ou écrivez-nous à info@comparateur-3eme-pilier.ch.",
    };
  }

  redirect(deliveryQuery(delivery));
}
