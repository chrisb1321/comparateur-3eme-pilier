"use client";

import { useActionState } from "react";
import Link from "next/link";
import { submitLead, type LeadState } from "@/app/actions/leads";
import { CANTONS } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "h-11 text-base md:text-sm";

export function LeadForm({
  intent = "comparateur",
}: {
  intent?: "comparateur" | "contact";
}) {
  const [state, action, pending] = useActionState(submitLead, null as LeadState);
  const isContact = intent === "contact";

  return (
    <form action={action} className="space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <input type="hidden" name="intent" value={intent} />
      <div className="hidden" aria-hidden="true">
        <label>
          Site web
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-firstName`}>Prénom</Label>
          <Input id={`${intent}-firstName`} name="firstName" required className={fieldClass} autoComplete="given-name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-lastName`}>Nom</Label>
          <Input id={`${intent}-lastName`} name="lastName" required className={fieldClass} autoComplete="family-name" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-email`}>E-mail</Label>
          <Input id={`${intent}-email`} name="email" type="email" required className={fieldClass} autoComplete="email" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-phone`}>Téléphone</Label>
          <Input id={`${intent}-phone`} name="phone" type="tel" required className={fieldClass} autoComplete="tel" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-canton`}>{isContact ? "Canton (facultatif)" : "Canton / résidence"}</Label>
          <select
            id={`${intent}-canton`}
            name="canton"
            required={!isContact}
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
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
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${intent}-status`}>Situation</Label>
          <select
            id={`${intent}-status`}
            name="status"
            className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
            defaultValue="salarie"
          >
            <option value="salarie">Salarié·e</option>
            <option value="independant">Indépendant·e</option>
            <option value="frontalier">Frontalier·ère</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      {!isContact ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor={`${intent}-lpp`}>Affiliation 2e pilier (LPP)</Label>
              <select
                id={`${intent}-lpp`}
                name="lpp"
                className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
                defaultValue="oui"
              >
                <option value="oui">Oui</option>
                <option value="non">Non</option>
                <option value="incertain">Je ne sais pas</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor={`${intent}-goal`}>Objectif principal</Label>
              <select
                id={`${intent}-goal`}
                name="goal"
                className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-base md:text-sm"
                defaultValue="fiscal"
              >
                <option value="fiscal">Déduction fiscale 2026</option>
                <option value="retraite">Compléter la retraite</option>
                <option value="famille">Protéger la famille</option>
                <option value="logement">Logement / hypothèque</option>
                <option value="frontalier">Situation frontalière</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor={`${intent}-budget`}>Budget annuel estimé (CHF)</Label>
            <Input id={`${intent}-budget`} name="budget" inputMode="decimal" className={fieldClass} placeholder="ex. 7258" />
          </div>
        </>
      ) : null}
      <div className="space-y-1.5">
        <Label htmlFor={`${intent}-message`}>{isContact ? "Votre demande" : "Précisions (facultatif)"}</Label>
        <Textarea
          id={`${intent}-message`}
          name="message"
          rows={4}
          className="min-h-24 text-base md:text-sm"
          placeholder={isContact ? "Décrivez votre besoin en quelques lignes." : "Ex. frontalier Genève, TOU, deux enfants…"}
        />
      </div>
      <label className="flex items-start gap-2 text-sm leading-relaxed">
        <input type="checkbox" name="consent" value="oui" required className="mt-1 size-4" />
        <span>
          J’accepte que mes données soient utilisées pour me recontacter et transmises au partenaire
          chargé d’établir le comparatif, conformément à la{" "}
          <Link href="/page-de-confidentialitee/" className="underline underline-offset-2">
            politique de confidentialité
          </Link>
          .
        </span>
      </label>
      {state?.error ? (
        <p role="alert" className="text-sm text-destructive">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" disabled={pending} className="h-11 w-full px-5 sm:w-auto">
        {pending ? "Envoi…" : isContact ? "Envoyer la demande" : "Recevoir mon comparatif"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Sans honoraires, sans engagement. Réponse de préférence par téléphone.
      </p>
    </form>
  );
}
