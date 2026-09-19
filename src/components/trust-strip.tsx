import Link from "next/link";
import { Amount } from "@/components/amount";
import { FIGURES } from "@/lib/figures";

const ITEMS = [
  "Sans honoraires",
  "Sans engagement",
  "Suisse romande",
  "Plafonds OFAS 2026",
] as const;

export function TrustStrip({
  tone = "light",
}: {
  tone?: "light" | "hero";
}) {
  const hero = tone === "hero";
  return (
    <ul
      className={
        hero
          ? "mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/75"
          : "flex flex-wrap gap-x-4 gap-y-2 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground"
      }
    >
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className={hero ? "text-accent" : "text-primary"} aria-hidden>
            ·
          </span>
          {item}
        </li>
      ))}
      <li className="flex items-center gap-2">
        <span className={hero ? "text-accent" : "text-primary"} aria-hidden>
          ·
        </span>
        <Amount value={FIGURES.pillar3aWithLpp} />
        <span aria-hidden>/</span>
        <Amount value={FIGURES.pillar3aWithoutLpp} />
      </li>
    </ul>
  );
}

export function ProcessSteps() {
  const steps = [
    {
      n: "01",
      title: "Vous décrivez la situation",
      text: "Canton, statut, un numéro joignable. Deux minutes, pas un Typeform.",
    },
    {
      n: "02",
      title: "Un conseiller rappelle",
      text: "Partenaire diplômé AFA, sous deux jours ouvrés, de préférence par téléphone.",
    },
    {
      n: "03",
      title: "Vous choisissez",
      text: "Un comparatif d’offres utiles. Vous n’êtes pas engagé, aucun honoraire.",
    },
  ];
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step) => (
        <li key={step.n} className="border-t border-accent/35 pt-4">
          <p className="font-figures text-sm tracking-[0.2em] text-accent">{step.n}</p>
          <h3 className="font-heading mt-2 text-2xl">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProofLine() {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      Lecture neutre, calée sur l’OFAS — pas un palmarès.{" "}
      <Link href="/a-propos/" className="text-primary underline decoration-accent underline-offset-4">
        Méthode et limites
      </Link>
      .
    </p>
  );
}
