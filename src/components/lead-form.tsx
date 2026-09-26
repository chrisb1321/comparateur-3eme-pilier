"use client";

import { useActionState, type ReactNode } from "react";
import Link from "next/link";
import { submitLead, type LeadState } from "@/app/actions/leads";
import { ADVISOR_NAME, CANTONS, CTA_CALLBACK } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AttributionFields } from "@/components/attribution-fields";

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
          <p className="kicker mb-0">{isContact ? "Écrire" : ADVISOR_NAME}</p>
          <span className="text-[13px] text-[#4A6275]">Une étape</span>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <i className="h-1 flex-1 rounded-sm bg-[#23597C]" />
        </div>
        {isContact ? null : (
          <>
            <h2 className="font-heading text-[1.65rem] leading-tight font-semibold text-[#10324A]">
              Un échange clair avant toute décision
            </h2>
            <p className="text-sm leading-relaxed text-[#4A6275]">
              Le comparatif et l’échange avec le conseiller sont sans honoraires pour vous. Le formulaire ne vous engage à aucune souscription. Votre demande sert à organiser un rappel et, avec votre accord, à la transmettre à {ADVISOR_NAME}, qui la traite.
            </p>
          </>
        )}
        <h2 className="font-heading text-2xl font-semibold text-[#10324A]">
          {isContact ? "Une question, un rappel" : "Parlons de votre 3e pilier"}
        </h2>
        {idle ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isContact
              ? "Quatre champs. Prochaine étape : un rappel sous deux jours ouvrés, de préférence par téléphone."
              : `Expliquez-nous brièvement votre situation. ${ADVISOR_NAME} vous rappelle sous deux jours ouvrés pour faire le point sur les solutions à envisager.`}
          </p>
        ) : null}
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
      <Field label={isContact ? "Votre demande" : "Ce que vous souhaitez comparer"} htmlFor={`${intent}-message`}>
        <Textarea
          id={`${intent}-message`}
          name="message"
          rows={isContact ? 4 : 3}
          required={isContact}
          className="min-h-20 rounded-[10px] border-[#C9D8E2] bg-[#F7FAFC] text-base text-[#10324A] focus-visible:border-[#23597C] focus-visible:ring-2 focus-visible:ring-[#23597C]/40 md:text-base"
          placeholder={
            isContact
              ? "Décrivez le besoin. Un conseiller vous rappelle sous deux jours ouvrés."
              : "3a ou 3b, banque ou assurance, 3e pilier déjà en place…"
          }
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" name="consent" value="oui" required className="mt-1 size-4 accent-primary" />
        <span>
          J’accepte d’être recontacté au sujet de ma demande et que les informations fournies soient transmises à {ADVISOR_NAME}, chargé du comparatif.{" "}
          <Link href="/page-de-confidentialitee/" className="underline decoration-accent underline-offset-4">
            Politique de confidentialité
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
        className="h-auto min-h-[52px] w-full rounded-xl border-0 bg-gradient-to-r from-[#BFF3EA] to-[#4FDCC7] px-6 py-3 text-center text-base leading-snug font-semibold tracking-normal whitespace-normal text-[#062B40] normal-case hover:brightness-95"
      >
        {pending ? "Envoi…" : isContact ? "Demander un rappel" : CTA_CALLBACK}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {isContact
          ? "Aucun e-mail de confirmation n’est envoyé. Un conseiller vous rappelle sous deux jours ouvrés si la demande est enregistrée."
          : "Sans honoraires · Sans engagement · Aucun paiement demandé dans ce formulaire"}
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
