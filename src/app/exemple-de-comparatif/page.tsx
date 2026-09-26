import type { Metadata } from "next";
import Link from "next/link";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exemple de comparatif",
  description:
    "Exemple fictif et anonymisé d’un comparatif 3e pilier : frais, souplesse des versements, valeur de rachat, garanties et horizon. Pas une offre réelle.",
  alternates: { canonical: canonical("/exemple-de-comparatif/") },
  robots: { index: true, follow: true },
};

const ROWS = [
  {
    label: "Frais",
    a: "Frais de tenue illustrés, sans pourcentage et sans barème réel.",
    b: "Frais d’acquisition concentrés au début du contrat, sans montant réel.",
    c: "Frais d’acquisition plus étalés dans l’illustration, sans montant réel.",
  },
  {
    label: "Souplesse des versements",
    a: "Versements libres jusqu’au plafond 2026, y compris une pause.",
    b: "Prime prévue au contrat. Une pause peut réduire les garanties illustrées.",
    c: "Prime prévue, avec une souplesse limitée dans l’illustration.",
  },
  {
    label: "Valeur de rachat",
    a: "Pas de valeur de rachat d’assurance. Le capital suit le support choisi dans l’exemple.",
    b: "En cas d’arrêt précoce, la valeur de rachat illustrée est inférieure aux primes.",
    c: "Un arrêt précoce est également pénalisant dans cette illustration.",
  },
  {
    label: "Garanties décès ou incapacité",
    a: "Pas de capital décès intégré dans cet exemple.",
    b: "Capital décès illustré, sans montant d’offre.",
    c: "Capital décès et incapacité illustrés, sans montant d’offre.",
  },
  {
    label: "Horizon",
    a: "Illustration plus lisible si l’horizon est plus court.",
    b: "Illustration plus lisible si l’horizon est long et si la garantie décès est le besoin.",
    c: "Illustration plus lisible si l’horizon est long et si l’incapacité compte.",
  },
] as const;

export default function ExempleComparatifPage() {
  return (
    <article>
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <p className="kicker">Exemple fictif</p>
          <h1 className="font-heading">Exemple de comparatif</h1>
          <p className="page-hero-meta">Aucun établissement, aucun frais et aucune offre réels</p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
        <p id="reponse-directe" className="text-[22px] leading-snug font-medium text-[#10324A]">
          Cet exemple est fictif et anonymisé. Il montre la méthode, pas une proposition que l’on pourrait souscrire.
        </p>
        <p className="mt-6 rounded-[20px] border border-[#DCE6ED] bg-[#F5F8FA] p-6 text-base leading-relaxed text-[#10324A]">
          Situation imaginée : une personne salariée, affiliée au 2e pilier, qui veut verser dans la limite du plafond 2026
          (CHF 7’258) si sa trésorerie le permet, avec un horizon d’une quinzaine d’années. Aucun nom, aucun canton précis,
          aucun établissement.
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="mb-4 text-left text-base font-semibold text-[#10324A]">
              Trois illustrations, clairement fictives
            </caption>
            <thead>
              <tr className="border-b border-[#DCE6ED] text-[#23597C]">
                <th className="py-3 pr-4 font-semibold">Critère</th>
                <th className="px-4 py-3 font-semibold">Illustration A — compte</th>
                <th className="px-4 py-3 font-semibold">Illustration B — assurance</th>
                <th className="py-3 pl-4 font-semibold">Illustration C — assurance</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-[#DCE6ED] align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-[#10324A]">
                    {row.label}
                  </th>
                  <td className="px-4 py-4 text-[#4A6275]">{row.a}</td>
                  <td className="px-4 py-4 text-[#4A6275]">{row.b}</td>
                  <td className="py-4 pl-4 text-[#4A6275]">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <section className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-[#10324A]">Ce que la méthode regarde</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A6275]">
              <li>les frais</li>
              <li>la souplesse des versements</li>
              <li>la valeur de rachat</li>
              <li>les garanties décès ou incapacité</li>
              <li>l’horizon</li>
            </ul>
          </section>
          <section className="surface-card p-6">
            <h2 className="text-2xl font-semibold text-[#10324A]">Ce que le conseiller examine</h2>
            <p className="mt-4 leading-relaxed text-[#4A6275]">
              Un conseiller examine les solutions accessibles dans le cadre du service, pas l’ensemble du marché suisse.
              Les cases ci-dessus ne sont pas des tarifs, pas des noms d’établissements, et pas une offre.
            </p>
          </section>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-[#4A6275]">
          Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Comparatif gratuit et sans engagement.
          Aucun e-mail de confirmation n’est envoyé après le formulaire.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/formulaire-3eme-pilier/" className="btn-pill">
            Comparer mes options
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#174462] px-6 text-[17px] font-semibold text-[#174462]"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </article>
  );
}
