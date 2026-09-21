"use server";

import { redirect } from "next/navigation";
import {
  crmIngestConfigured,
  deliveryQuery,
  notifyCrm,
  notifyEmail,
  type LeadDelivery,
  type LeadPayload,
} from "@/lib/lead-delivery";
import { appendJournalLine } from "@/lib/lead-journal";

export type LeadState = { error?: string } | null;

function str(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  if (str(form, "website")) {
    redirect("/page-remerciement/?journal=0&crm=0&email=0");
  }

  const intent = str(form, "intent") || "comparateur";
  const firstName = str(form, "firstName");
  const lastName = str(form, "lastName");
  const email = str(form, "email");
  const phone = str(form, "phone");
  const canton = str(form, "canton");
  const situation = str(form, "situation");
  const message = str(form, "message");
  const consent = str(form, "consent");

  if (!firstName || !lastName) {
    return { error: "Indiquez votre prénom et votre nom." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Indiquez une adresse e-mail valable." };
  }
  if (phone.length < 8) {
    return { error: "Indiquez un numéro de téléphone joignable." };
  }
  if (intent === "comparateur" && !canton) {
    return { error: "Choisissez un canton ou « frontalier »." };
  }
  if (intent === "contact" && message.length < 8) {
    return { error: "Décrivez votre demande en quelques mots." };
  }
  if (consent !== "oui") {
    return { error: "Le consentement est nécessaire pour transmettre votre demande." };
  }

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
    if (!crmIngestConfigured()) {
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
