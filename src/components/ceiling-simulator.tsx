"use client";

import { useState } from "react";
import Link from "next/link";
import { Amount } from "@/components/amount";
import { FIGURES, chf, CEILING_NOTE } from "@/lib/figures";
import { cn } from "@/lib/utils";

type Situation = "salarie-lpp" | "sans-lpp" | "independant" | "frontalier" | "autre";

const OPTIONS: { value: Situation; label: string; hint: string }[] = [
  {
    value: "salarie-lpp",
    label: "Salarié·e avec 2e pilier",
    hint: "Petite cotisation — plafond fixe OFAS.",
  },
  {
    value: "sans-lpp",
    label: "Sans 2e pilier",
    hint: "Grande cotisation — 20 % du revenu, dans la limite.",
  },
  {
    value: "independant",
    label: "Indépendant·e",
    hint: "Souvent sans LPP : vérifier l’affiliation avant de viser le plafond.",
  },
  {
    value: "frontalier",
    label: "Frontalier·ère",
    hint: "3a possible si revenu soumis à l’AVS suisse.",
  },
  {
    value: "autre",
    label: "Je ne sais pas",
    hint: "Un conseiller lit vos certificats LPP au rappel.",
  },
];

function ceilingFor(situation: Situation): { amount: number; label: string; detail: string } {
  if (situation === "sans-lpp" || situation === "independant") {
    return {
      amount: FIGURES.pillar3aWithoutLpp,
      label: "Grande cotisation (max.)",
      detail: `20 % du revenu d’activité, plafonné à ${chf(FIGURES.pillar3aWithoutLpp)} en 2026 et 2027.`,
    };
  }
  return {
    amount: FIGURES.pillar3aWithLpp,
    label: "Petite cotisation",
    detail: `Plafond fixe OFAS : ${chf(FIGURES.pillar3aWithLpp)} en 2026 et 2027 (art. 7 OPP 3).`,
  };
}

export function CeilingSimulator({ tone = "paper" }: { tone?: "paper" | "hero" }) {
  const [situation, setSituation] = useState<Situation>("salarie-lpp");
  const result = ceilingFor(situation);
  const hero = tone === "hero";

  return (
    <section
      data-testid="simulateur-plafonds"
      className={cn(
        "overflow-hidden",
        hero ? "border border-accent/45 bg-primary/55 backdrop-blur-sm" : "border border-accent/25 bg-card",
      )}
    >
      <div className="px-4 pt-4">
        <p className={cn("text-[0.62rem] uppercase tracking-[0.2em]", hero ? "text-accent" : "text-muted-foreground")}>
          Simulateur · plafond 3a
        </p>
        <h2 className={cn("font-heading mt-2 text-2xl", hero ? "text-primary-foreground" : "text-primary")}>
          Quel plafond pour votre situation ?
        </h2>
        <p className={cn("mt-2 text-sm leading-relaxed", hero ? "text-primary-foreground/80" : "text-muted-foreground")}>
          Estimation indicative — pas un conseil fiscal. Les montants 2026 et 2027 sont identiques tant que l’OFAS n’a pas publié un nouveau tableau.
        </p>
      </div>
      <div className="mt-4 grid gap-2 px-4 sm:grid-cols-2">
        {OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setSituation(opt.value)}
            className={cn(
              "border px-3 py-3 text-left transition-colors",
              situation === opt.value
                ? hero
                  ? "border-accent bg-accent/20 text-primary-foreground"
                  : "border-primary bg-primary/5"
                : hero
                  ? "border-accent/25 text-primary-foreground/85 hover:border-accent/50"
                  : "border-border hover:border-accent/40",
            )}
          >
            <span className="block text-sm font-medium">{opt.label}</span>
            <span className={cn("mt-1 block text-xs", hero ? "text-primary-foreground/70" : "text-muted-foreground")}>
              {opt.hint}
            </span>
          </button>
        ))}
      </div>
      <div
        className={cn(
          "mt-4 border-t px-4 py-5",
          hero ? "border-accent/25 bg-primary/40" : "border-border bg-muted/30",
        )}
      >
        <p className={cn("text-[0.62rem] uppercase tracking-[0.16em]", hero ? "text-accent" : "text-muted-foreground")}>
          {result.label}
        </p>
        <p className={cn("mt-2 font-figures text-4xl tabular-nums lining-nums", hero ? "text-primary-foreground" : "text-foreground")}>
          <Amount value={result.amount} />
          <span className="ml-2 text-base font-sans text-muted-foreground">/ an</span>
        </p>
        <p className={cn("mt-3 text-sm leading-relaxed", hero ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {result.detail}
        </p>
        <p className={cn("mt-3 text-xs leading-relaxed", hero ? "text-primary-foreground/65" : "text-muted-foreground")}>
          {CEILING_NOTE}
        </p>
        <Link
          href="/formulaire-3eme-pilier/"
          className={cn(
            "mt-5 inline-flex h-11 items-center px-5 text-[0.7rem] uppercase tracking-[0.18em]",
            hero
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
        >
          Demander un comparatif
        </Link>
      </div>
    </section>
  );
}
