"use server";

import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";

export type LeadState = { error?: string } | null;

function str(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  if (str(form, "website")) {
    redirect("/page-remerciement/");
  }

  const intent = str(form, "intent") || "comparateur";
  const firstName = str(form, "firstName");
  const lastName = str(form, "lastName");
  const email = str(form, "email");
  const phone = str(form, "phone");
  const canton = str(form, "canton");
  const status = str(form, "status");
  const lpp = str(form, "lpp");
  const goal = str(form, "goal");
  const budget = str(form, "budget");
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
  if (consent !== "oui") {
    return { error: "Le consentement est nécessaire pour transmettre votre demande." };
  }

  const record = {
    receivedAt: new Date().toISOString(),
    intent,
    firstName,
    lastName,
    email,
    phone,
    canton,
    status,
    lpp,
    goal,
    budget,
    message,
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
  } catch (error) {
    console.error("lead-store", error);
    return { error: "L’enregistrement a échoué. Écrivez-nous à info@comparateur-3eme-pilier.ch." };
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (error) {
      console.error("lead-webhook", error);
    }
  }

  console.info("lead", { intent, email, canton });
  redirect("/page-remerciement/");
}
