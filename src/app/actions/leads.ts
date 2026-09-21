"use server";

import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import {
  deliveryQuery,
  notifyCrm,
  notifyEmail,
  type LeadDelivery,
  type LeadPayload,
} from "@/lib/lead-delivery";

export type LeadState = { error?: string } | null;

function str(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function journalDir(): string {
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return "/tmp";
  }
  return path.join(process.cwd(), "data");
}

async function appendJournal(line: string): Promise<boolean> {
  try {
    const dir = journalDir();
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), `${line}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("lead-store", error);
    return false;
  }
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

  const journal = await appendJournal(JSON.stringify(payload));
  const [crm, mailed] = await Promise.all([notifyCrm(payload), notifyEmail(payload)]);
  const delivery: LeadDelivery = { journal, crm, email: mailed };

  await appendJournal(
    JSON.stringify({ receivedAt: new Date().toISOString(), event: "delivery", intent, notify: delivery }),
  );

  console.info("lead", { intent, journal, crm, email: mailed });
  redirect(deliveryQuery(delivery));
}
