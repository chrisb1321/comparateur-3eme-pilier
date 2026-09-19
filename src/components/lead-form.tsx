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

const fieldClass = "h-12 rounded-none border-input bg-background/80 text-base md:text-sm";

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
      className={cn(
        "space-y-4 p-6 md:p-7",
        tone === "overlay"
          ? "paper-card border border-accent/30"
          : "border border-accent/25 bg-card/90",
      )}
      noValidate
    >
      <header className="space-y-1">
        <p className="kicker">{isContact ? "Écrire" : "Comparatif 2026–2027"}</p>
        <h2 className="font-heading text-2xl text-primary">
          {isContact ? "Une question, un entretien" : "Décrivez votre situation"}
        </h2>
        {idle ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {isContact
              ? "Tous les champs sauf le message sont utiles. Nous rappelons de préférence par téléphone."
              : "Formulaire vide : commencez par le canton et un numéro joignable. Sans honoraires."}
          </p>
        ) : null}
      </header>
      <input type="hidden" name="intent" value={intent} />
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={isContact ? "Canton (facultatif)" : "Canton / résidence"} htmlFor={`${intent}-canton`}>
          <select
            id={`${intent}-canton`}
            name="canton"
            required={!isContact}
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
        <Field label="Situation" htmlFor={`${intent}-status`}>
          <select
            id={`${intent}-status`}
            name="status"
            className={cn(fieldClass, "w-full px-2.5")}
            defaultValue="salarie"
          >
            <option value="salarie">Salarié·e</option>
            <option value="independant">Indépendant·e</option>
            <option value="frontalier">Frontalier·ère</option>
            <option value="autre">Autre</option>
          </select>
        </Field>
      </div>
      {!isContact ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Affiliation 2e pilier (LPP)" htmlFor={`${intent}-lpp`}>
              <select
                id={`${intent}-lpp`}
                name="lpp"
                className={cn(fieldClass, "w-full px-2.5")}
                defaultValue="oui"
              >
                <option value="oui">Oui</option>
                <option value="non">Non</option>
                <option value="incertain">Je ne sais pas</option>
              </select>
            </Field>
            <Field label="Objectif principal" htmlFor={`${intent}-goal`}>
              <select
                id={`${intent}-goal`}
                name="goal"
                className={cn(fieldClass, "w-full px-2.5")}
                defaultValue="fiscal"
              >
                <option value="fiscal">Déduction fiscale 2026–2027</option>
                <option value="retraite">Compléter la retraite</option>
                <option value="famille">Protéger la famille</option>
                <option value="logement">Logement / hypothèque</option>
                <option value="frontalier">Situation frontalière</option>
              </select>
            </Field>
          </div>
          <Field label="Budget annuel estimé (CHF)" htmlFor={`${intent}-budget`}>
            <Input id={`${intent}-budget`} name="budget" inputMode="decimal" className={fieldClass} placeholder="ex. 7258" />
          </Field>
        </>
      ) : null}
      <Field label={isContact ? "Votre demande" : "Précisions (facultatif)"} htmlFor={`${intent}-message`}>
        <Textarea
          id={`${intent}-message`}
          name="message"
          rows={4}
          className="min-h-24 rounded-none text-base md:text-sm"
          placeholder={isContact ? "Décrivez votre besoin en quelques lignes." : "Ex. frontalier Genève, TOU, deux enfants…"}
        />
      </Field>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" name="consent" value="oui" required className="mt-1 size-4 accent-primary" />
        <span>
          J’accepte que mes données soient utilisées pour me recontacter et transmises au partenaire
          chargé d’établir le comparatif, conformément à la{" "}
          <Link href="/page-de-confidentialitee/" className="underline decoration-accent underline-offset-4">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {state?.error ? (
        <p
          role="alert"
          className="border border-destructive/30 bg-destructive/8 px-3 py-3 text-sm text-destructive"
        >
          {state.error}
        </p>
      ) : null}
      {pending ? (
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Envoi en cours — ne fermez pas la page.
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full rounded-none px-6 text-[0.72rem] uppercase tracking-[0.2em] sm:w-auto"
      >
        {pending ? "Envoi…" : isContact ? "Envoyer la demande" : "Recevoir mon comparatif"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Sans honoraires, sans engagement. Réponse de préférence par téléphone.
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
      <Label htmlFor={htmlFor} className="text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
