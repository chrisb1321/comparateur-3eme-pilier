"use client";

import { useActionState, type ReactNode } from "react";
import Link from "next/link";
import { submitLead, type LeadState } from "@/app/actions/leads";
import { CANTONS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AttributionFields } from "@/components/attribution-fields";
import { TrustStrip } from "@/components/trust-strip";

const fieldClass =
  "h-[46px] rounded-[10px] border-[#C9D8E2] bg-[#F7FAFC] px-3.5 text-base text-[#10324A] shadow-none focus-visible:border-[#23597C] focus-visible:ring-2 focus-visible:ring-[#23597C]/40 md:text-base";

export function LeadForm({
  intent = "comparateur",
  tone = "paper",
}: {
  intent?: "comparateur" | "contact";
  tone?: "paper" | "overlay";
}) {
  const [state, action, pending] = useActionState(submitLead, null as LeadState);
  const isContact = intent === "contact";
  const idle = !state?.error && !pending;

  return (
    <form
      action={action}
      data-testid={isContact ? "form-contact" : "form-comparateur"}
      className={cn(
        "flex flex-col gap-[18px] rounded-[22px] bg-white p-7 text-[#10324A] shadow-[0_30px_60px_-24px_rgba(3,22,38,0.55)]",
        tone === "overlay" ? "" : "border border-[#DCE6ED]",
      )}
      noValidate
    >
      <header className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <p className="kicker mb-0">{isContact ? "Écrire" : "Comparatif gratuit"}</p>
          <span className="text-[13px] text-[#4A6275]">Une étape</span>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <i className="h-1 flex-1 rounded-sm bg-[#23597C]" />
        </div>
        <h2 className="font-heading text-2xl font-semibold text-[#10324A]">
          {isContact ? "Une question, un rappel" : "Recevoir un comparatif"}
        </h2>
        {idle ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isContact
              ? "Quatre champs. Prochaine étape : un rappel sous deux jours ouvrés, de préférence par téléphone."
              : "Cinq champs. Un conseiller partenaire diplômé AFA lit la situation — sans honoraires, sans Typeform."}
          </p>
        ) : null}
        {isContact ? null : <TrustStrip />}
      </header>
      <input type="hidden" name="intent" value={intent} />
      <AttributionFields />
      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Prénom" htmlFor={`${intent}-firstName`}>
          <Input id={`${intent}-firstName`} name="firstName" required className={fieldClass} autoComplete="given-name" />
        </Field>
        <Field label="Nom" htmlFor={`${intent}-lastName`}>
          <Input id={`${intent}-lastName`} name="lastName" required className={fieldClass} autoComplete="family-name" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" htmlFor={`${intent}-email`}>
          <Input id={`${intent}-email`} name="email" type="email" required className={fieldClass} autoComplete="email" />
        </Field>
        <Field label="Téléphone" htmlFor={`${intent}-phone`}>
          <Input id={`${intent}-phone`} name="phone" type="tel" required className={fieldClass} autoComplete="tel" placeholder="+41 …" />
        </Field>
      </div>
      {!isContact ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Canton / résidence" htmlFor={`${intent}-canton`}>
            <select
              id={`${intent}-canton`}
              name="canton"
              required
              className={cn(fieldClass, "w-full px-2.5")}
              defaultValue=""
            >
              <option value="" disabled>
                Choisir
              </option>
              {CANTONS.map((canton) => (
                <option key={canton} value={canton}>
                  {canton}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Situation" htmlFor={`${intent}-situation`}>
            <select
              id={`${intent}-situation`}
              name="situation"
              className={cn(fieldClass, "w-full px-2.5")}
              defaultValue="salarie-lpp"
            >
              <option value="salarie-lpp">Salarié·e avec 2e pilier</option>
              <option value="sans-lpp">Sans 2e pilier</option>
              <option value="independant">Indépendant·e</option>
              <option value="frontalier">Frontalier·ère</option>
              <option value="autre">Autre / je ne sais pas</option>
            </select>
          </Field>
        </div>
      ) : null}
      <Field label={isContact ? "Votre demande" : "Précision (facultatif)"} htmlFor={`${intent}-message`}>
        <Textarea
          id={`${intent}-message`}
          name="message"
          rows={isContact ? 4 : 3}
          required={isContact}
          className="min-h-20 rounded-[10px] border-[#C9D8E2] bg-[#F7FAFC] text-base text-[#10324A] focus-visible:border-[#23597C] focus-visible:ring-2 focus-visible:ring-[#23597C]/40 md:text-base"
          placeholder={
            isContact
              ? "Décrivez le besoin. Nous rappelons ; pas de confirmation dans votre boîte."
              : "Ex. frontalier Genève, TOU, logement…"
          }
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" name="consent" value="oui" required className="mt-1 size-4 accent-primary" />
        <span>
          J’accepte d’être recontacté et que la demande soit transmise au partenaire du comparatif.{" "}
          <Link href="/page-de-confidentialitee/" className="underline decoration-accent underline-offset-4">
            Confidentialité
          </Link>
          .
        </span>
      </label>
      {state?.error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/8 px-3 py-3 text-sm text-destructive"
        >
          {state.error}
        </p>
      ) : null}
      {pending ? (
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Enregistrement de la demande — ne fermez pas la page.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={pending}
        className="h-[52px] w-full rounded-xl border-0 bg-gradient-to-r from-[#BFF3EA] to-[#4FDCC7] px-6 text-base font-semibold tracking-normal text-[#062B40] normal-case hover:brightness-95"
      >
        {pending ? "Envoi…" : isContact ? "Demander un rappel" : "Recevoir mon comparatif"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {isContact
          ? "Pas de confirmation dans votre boîte. Un humain rappelle si le dossier est transmis."
          : "Rappel sous deux jours ouvrés une fois le dossier transmis au conseiller. Vous n’êtes pas engagé."}
      </p>
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
