import type { Metadata } from "next";
import { Amount } from "@/components/amount";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Montant maximum du 3e pilier 2026 et 2027",
  description:
    "Pour 2026, la déduction maximale du pilier 3a est de 7 258 CHF. Au 28 septembre 2026, le plafond 2027 n’a pas encore été annoncé.",
  alternates: { canonical: canonical("/montant-maximum-3e-pilier-2026-2027/") },
  robots: { index: true, follow: true },
};

export default function MontantMaximum3ePilierPage() {
  return (
    <article data-testid="plafond-3a-2026-2027">
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <p className="kicker">Pilier 3a</p>
          <h1 className="font-heading">Montant maximum du 3e pilier 2026 et 2027</h1>
          <p className="page-hero-meta">Point de situation au 28 septembre 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="surface-card border-[#1F7F72]/30 p-6 md:p-8" aria-labelledby="plafond-2026">
            <p className="kicker" id="plafond-2026">
              Déduction 2026
            </p>
            <p className="font-figures text-5xl leading-none text-[#10324A] md:text-6xl">
              <Amount value={7258} />
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#10324A]">
              Pour 2026, la déduction maximale est de <Amount value={7258} />.
            </p>
          </section>

          <section className="surface-card p-6 md:p-8" aria-labelledby="plafond-2027">
            <p className="kicker" id="plafond-2027">
              Plafond 2027
            </p>
            <p className="inline-flex rounded-full bg-[#EAF4F8] px-3 py-1 text-sm font-semibold tracking-wide text-[#174462] uppercase">
              Pas encore publié
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#10324A]">
              Au 28 septembre 2026, le plafond déductible du pilier 3a pour 2027 n’a pas encore été annoncé.
            </p>
          </section>
        </div>

        <section className="mt-10" aria-labelledby="publication-2027">
          <h2 id="publication-2027" className="font-heading text-3xl leading-tight text-[#10324A] md:text-4xl">
            Publication attendue cet automne
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#10324A]/90">
            Sa publication est attendue cet automne, probablement en octobre ou novembre 2026. Aucune date précise n’est confirmée.
          </p>
        </section>

        <p className="mt-8 rounded-[20px] border border-[#DCE6ED] bg-white px-5 py-4 text-base leading-relaxed text-[#10324A]/90">
          À titre de repère, l’AFC avait communiqué le plafond 2026 le 17 novembre 2025.
        </p>
      </div>
    </article>
  );
}
