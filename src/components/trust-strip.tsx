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
          ? "mt-2 flex flex-wrap gap-2 text-[13px] font-semibold text-white/85"
          : "flex flex-wrap gap-2 text-[13px] font-semibold"
      }
    >
      {ITEMS.map((item) => (
        <li key={item} className={hero ? "rounded-full bg-white/10 px-3 py-1" : "rounded-full bg-[#E8F7F4] px-3 py-1 text-[#1F5E55]"}>
          {item}
        </li>
      ))}
      <li className={hero ? "rounded-full bg-white/10 px-3 py-1" : "rounded-full bg-[#E8F7F4] px-3 py-1 text-[#1F5E55]"}>
        <Amount value={FIGURES.pillar3aWithLpp} />
        <span aria-hidden> / </span>
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
      text: "Canton, statut, un numéro joignable. Deux minutes.",
    },
    {
      n: "02",
      title: "Un conseiller rappelle",
      text: "Un conseiller vous rappelle sous deux jours ouvrés pour examiner les solutions accessibles dans le cadre du service.",
    },
    {
      n: "03",
      title: "Vous choisissez",
      text: "Un comparatif d’offres utiles. Vous n’êtes pas engagé, aucun honoraire.",
    },
  ];
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.n}
          className={`flex min-h-0 flex-col gap-3 rounded-[20px] border p-8 max-[1100px]:p-6 ${
            index === 2 ? "border-[#174462] bg-[#174462] text-white" : "border-[#DCE6ED] bg-white text-[#10324A]"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <p className={`text-sm ${index === 2 ? "text-white/70" : "text-[#6B8293]"}`}>{step.n}</p>
            <span className={`flex size-14 items-center justify-center rounded-[14px] text-lg font-semibold ${index === 2 ? "bg-[rgba(191,243,234,0.14)] text-[#7FE3D3]" : "bg-[#EAF4F8] text-[#174462]"}`}>
              {index + 1}
            </span>
          </div>
          <p className={`text-xs font-semibold tracking-[0.12em] uppercase ${index === 2 ? "text-[#7FE3D3]" : "text-[#23597C]"}`}>
            Étape
          </p>
          <h3 className={`text-[28px] font-semibold max-[1100px]:text-2xl ${index === 2 ? "text-white" : "text-[#10324A]"}`}>{step.title}</h3>
          <p className={`text-base leading-relaxed ${index === 2 ? "text-white/85" : "text-[#4A6275]"}`}>{step.text}</p>
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
