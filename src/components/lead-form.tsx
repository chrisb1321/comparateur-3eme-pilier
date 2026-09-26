"use client";

import { useActionState, useState, type ReactNode } from "react";
import Link from "next/link";
import { submitLead, type LeadState } from "@/app/actions/leads";
import { ADVISOR_NAME } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AttributionFields } from "@/components/attribution-fields";

const fieldClass =
  "h-[46px] rounded-[10px] border-[#C9D8E2] bg-[#F7FAFC] px-3.5 text-base text-[#10324A] shadow-none focus-visible:border-[#23597C] focus-visible:ring-2 focus-visible:ring-[#23597C]/40 md:text-base";

const SAVINGS = ["100", "150", "200", "250", "300", "350", "400", "450", "500", "550", "A définir"] as const;

const buttonClass =
  "h-auto min-h-[52px] w-full rounded-xl border-0 bg-gradient-to-r from-[#BFF3EA] to-[#4FDCC7] px-6 py-3 text-center text-base leading-snug font-semibold tracking-normal whitespace-normal text-[#062B40] normal-case hover:brightness-95";

export function LeadForm({
  intent = "comparateur",
  tone = "paper",
}: {
  intent?: "comparateur" | "contact";
  tone?: "paper" | "overlay";
}) {
  if (intent === "contact") {
    return <ContactForm tone={tone} />;
  }
  return <ComparateurForm tone={tone} />;
}

function ComparateurForm({ tone }: { tone: "paper" | "overlay" }) {
  const [state, action, pending] = useActionState(submitLead, null as LeadState);
  const [step, setStep] = useState(0);
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [localError, setLocalError] = useState("");

  const error = localError || state?.error || "";

  const handleNext = () => {
    const problem = validateStep(step, { fullName, birthDate, monthlySavings, email, phone });
    if (problem) {
      setLocalError(problem);
      return;
    }
    setLocalError("");
    setStep((current) => Math.min(current + 1, 4));
  };

  return (
    <form
      action={action}
      data-testid="form-comparateur"
      className={cn(
        "flex flex-col gap-[18px] rounded-[22px] bg-white p-7 text-[#10324A] shadow-[0_30px_60px_-24px_rgba(3,22,38,0.55)]",
        tone === "overlay" ? "" : "border border-[#DCE6ED]",
      )}
      noValidate
    >
      <input type="hidden" name="intent" value="comparateur" />
      <input type="hidden" name="fullName" value={fullName} />
      <input type="hidden" name="birthDate" value={birthDate} />
      <input type="hidden" name="monthlySavings" value={monthlySavings} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="phone" value={phone} />
      <input type="hidden" name="consent" value="oui" />
      <AttributionFields />
      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <header className="space-y-2">
        <p className="text-sm leading-relaxed text-[#4A6275]">
          {ADVISOR_NAME} traite votre demande. Sans engagement, sous deux jours ouvrés.
        </p>
      </header>
      {step === 0 ? (
        <Step
          title="Enchanté, comment vous appelez-vous ?"
          help="Veuillez s'il vous plaît nous indiquer votre nom et prénom pour établir vos offres comparatives"
        >
          <Label htmlFor="comparateur-fullName" className="sr-only">
            Nom et prénom
          </Label>
          <Input
            id="comparateur-fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            autoComplete="name"
            className={fieldClass}
          />
        </Step>
      ) : null}
      {step === 1 ? (
        <Step title="Votre date de naissance:" help="Nécessaire pour calculer vos offres 3ème pilier">
          <Label htmlFor="comparateur-birthDate" className="sr-only">
            Date de naissance
          </Label>
          <Input
            id="comparateur-birthDate"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
            required
            inputMode="numeric"
            autoComplete="bday"
            placeholder="JJ/MM/AAAA"
            className={fieldClass}
          />
        </Step>
      ) : null}
      {step === 2 ? (
        <Step title="Combien souhaitez-vous épargner par mois pour votre objectif ?">
          <Label htmlFor="comparateur-savings" className="sr-only">
            Épargne mensuelle
          </Label>
          <select
            id="comparateur-savings"
            value={monthlySavings}
            onChange={(event) => setMonthlySavings(event.target.value)}
            required
            className={cn(fieldClass, "w-full px-2.5")}
          >
            <option value="">Choisir</option>
            {SAVINGS.map((amount) => (
              <option key={amount} value={amount}>
                {amount === "A définir" ? amount : `${amount} CHF`}
              </option>
            ))}
          </select>
        </Step>
      ) : null}
      {step === 3 ? (
        <Step title="Votre adresse mail" help="Pour recevoir vos offres comparatives">
          <Label htmlFor="comparateur-email" className="sr-only">
            Adresse e-mail
          </Label>
          <Input
            id="comparateur-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            className={fieldClass}
          />
        </Step>
      ) : null}
      {step === 4 ? (
        <Step
          title="Votre numéro de téléphone"
          help="Nécessaire pour l'établissement des offres. Formulaire 100% confidentiel."
        >
          <p className="text-sm leading-relaxed text-[#4A6275]">
            En validant ce formulaire vous reconnaissez avoir pris connaissance de notre{" "}
            <Link href="/page-de-confidentialitee/" className="underline decoration-accent underline-offset-4">
              politique de confidentialité
            </Link>
            .
          </p>
          <Label htmlFor="comparateur-phone" className="sr-only">
            Téléphone
          </Label>
          <Input
            id="comparateur-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            autoComplete="tel"
            placeholder="+41"
            className={fieldClass}
          />
        </Step>
      ) : null}
      {error ? (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/8 px-3 py-3 text-sm text-destructive">
          {error}
        </p>
      ) : null}
      {pending ? (
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Enregistrement de la demande — ne fermez pas la page.
        </p>
      ) : null}
      <div className="flex flex-col gap-3">
        {step < 4 ? (
          <Button type="button" onClick={handleNext} className={buttonClass}>
            Ok
          </Button>
        ) : (
          <Button type="submit" disabled={pending} className={buttonClass}>
            {pending ? "Envoi…" : "Envoyer"}
          </Button>
        )}
        {step > 0 ? (
          <button
            type="button"
            onClick={() => {
              setLocalError("");
              setStep((current) => current - 1);
            }}
            className="text-sm font-semibold text-[#174462] underline underline-offset-4"
          >
            Retour
          </button>
        ) : null}
      </div>
    </form>
  );
}

function Step({
  title,
  help,
  children,
}: {
  title: string;
  help?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="font-heading text-2xl leading-tight font-semibold text-[#10324A]">{title}</h2>
      {help ? <p className="text-sm leading-relaxed text-[#4A6275]">{help}</p> : null}
      {children}
    </div>
  );
}

function validateStep(
  step: number,
  values: { fullName: string; birthDate: string; monthlySavings: string; email: string; phone: string },
): string {
  if (step === 0 && values.fullName.trim().length < 2) {
    return "Indiquez votre nom et votre prénom.";
  }
  if (step === 1 && !/^(\d{2})\/(\d{2})\/(\d{4})$/.test(values.birthDate.trim())) {
    return "Indiquez votre date de naissance au format JJ/MM/AAAA.";
  }
  if (step === 2 && !values.monthlySavings) {
    return "Indiquez combien vous souhaitez épargner par mois.";
  }
  if (step === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    return "Indiquez une adresse e-mail valable.";
  }
  if (step === 4 && values.phone.trim().length < 8) {
    return "Indiquez un numéro de téléphone joignable.";
  }
  return "";
}

function ContactForm({ tone }: { tone: "paper" | "overlay" }) {
  const [state, action, pending] = useActionState(submitLead, null as LeadState);
  const idle = !state?.error && !pending;

  return (
    <form
      action={action}
      data-testid="form-contact"
      className={cn(
        "flex flex-col gap-[18px] rounded-[22px] bg-white p-7 text-[#10324A] shadow-[0_30px_60px_-24px_rgba(3,22,38,0.55)]",
        tone === "overlay" ? "" : "border border-[#DCE6ED]",
      )}
      noValidate
    >
      <header className="space-y-2">
        <h2 className="font-heading text-2xl font-semibold text-[#10324A]">Une question</h2>
        {idle ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quatre champs. Aucun e-mail de confirmation n’est envoyé.
          </p>
        ) : null}
      </header>
      <input type="hidden" name="intent" value="contact" />
      <AttributionFields />
      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom" htmlFor="contact-firstName">
          <Input id="contact-firstName" name="firstName" required className={fieldClass} autoComplete="given-name" />
        </Field>
        <Field label="Nom" htmlFor="contact-lastName">
          <Input id="contact-lastName" name="lastName" required className={fieldClass} autoComplete="family-name" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" htmlFor="contact-email">
          <Input id="contact-email" name="email" type="email" required className={fieldClass} autoComplete="email" />
        </Field>
        <Field label="Téléphone" htmlFor="contact-phone">
          <Input id="contact-phone" name="phone" type="tel" required className={fieldClass} autoComplete="tel" placeholder="+41 …" />
        </Field>
      </div>
      <Field label="Votre demande" htmlFor="contact-message">
        <Textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="min-h-20 rounded-[10px] border-[#C9D8E2] bg-[#F7FAFC] text-base text-[#10324A] focus-visible:border-[#23597C] focus-visible:ring-2 focus-visible:ring-[#23597C]/40 md:text-base"
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" name="consent" value="oui" required className="mt-1 size-4 accent-primary" />
        <span>
          J’accepte que les informations fournies soient transmises à {ADVISOR_NAME}, chargé du comparatif.{" "}
          <Link href="/page-de-confidentialitee/" className="underline decoration-accent underline-offset-4">
            Politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {state?.error ? (
        <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/8 px-3 py-3 text-sm text-destructive">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Envoi…" : "Envoyer"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-[13px] font-semibold tracking-normal text-[#23597C] normal-case">
        {label}
      </Label>
      {children}
    </div>
  );
}
