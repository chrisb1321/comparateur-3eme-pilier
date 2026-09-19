import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { SourcesList } from "@/components/sources-list";
import { HOME_FAQS, METHOD_NOTE } from "@/content/faqs";
import { chf, FIGURES } from "@/lib/figures";
import { canonical, SITE } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Comparateur 3ème pilier 2026 : comparez et déduisez",
  description:
    "Comparez les 3e piliers 3a et 3b en Suisse. Plafonds 2026 OFAS : CHF 7’258 / 36’288. Comparatif gratuit, sans honoraires, sans Typeform.",
  alternates: { canonical: canonical("/") },
};

const PILLARS = [
  {
    href: "/1er-pilier-avs-ai-apg/",
    title: "1er pilier AVS",
    text: `Répartition. Rente 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} / mois. 13e rente dès décembre 2026.`,
  },
  {
    href: "/2eme-pilier-lpp/",
    title: "2e pilier LPP",
    text: `Capitalisation. Seuil d’entrée ${chf(FIGURES.lppEntry)}. C’est ce seuil qui ouvre — ou non — la grande cotisation 3a.`,
  },
  {
    href: "/3eme-pilier-a-ou-b/",
    title: "3e pilier 3a / 3b",
    text: `Prévoyance individuelle. Plafond 3a 2026 : ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}.`,
  },
];

const REASONS = [
  "Optimiser l’impôt de l’année",
  "Combler le trou de retraite",
  "Protéger conjoint et enfants",
  "Financer un logement (règles EPL)",
  "Épargner pour un enfant (via 3b)",
  "Préparer une activité indépendante",
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              Suisse romande · Genève · frontaliers
            </p>
            <h1 className="font-heading mt-3 text-4xl tracking-tight md:text-5xl">
              Comparateur 3ème pilier 2026
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/90">
              Comparez 3a et 3b, banque et assurance, sans honoraires et sans engagement. Les
              plafonds de cette page sont ceux de l’OFAS — plus les chiffres 2024 encore en ligne
              sur le WordPress.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <dt className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Avec 2e pilier
                </dt>
                <dd className="mt-1 font-heading text-2xl">{chf(FIGURES.pillar3aWithLpp)}</dd>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 p-4">
                <dt className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Sans 2e pilier
                </dt>
                <dd className="mt-1 font-heading text-2xl">{chf(FIGURES.pillar3aWithoutLpp)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-primary-foreground/70">
              Art. 7 OPP 3 · OFAS · valable année fiscale 2026. Grande cotisation : 20 % du revenu
              d’activité, dans cette limite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/formulaire-3eme-pilier/"
                className={cn(
                  buttonVariants(),
                  "h-11 px-5 bg-accent text-accent-foreground hover:bg-accent/90",
                )}
              >
                Demander un comparatif
              </Link>
              <Link
                href="/deductions-fiscales-3eme-pilier/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 px-5 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
                )}
              >
                Voir les plafonds 2026
              </Link>
            </div>
          </div>
          <LeadForm intent="comparateur" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-heading text-3xl tracking-tight">Les trois piliers suisses</h2>
        <p className="mt-3 max-w-3xl text-foreground/90 leading-relaxed">
          Le système de retraite suisse combine répartition (AVS), capitalisation (LPP) et
          prévoyance individuelle (3e pilier). L’âge de référence AVS est 65 ans ; les femmes de la
          génération transitoire AVS 21 suivent un relèvement progressif. Les textes WordPress
          citaient encore « 64 ans pour les femmes » : c’est périmé pour 2026.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40"
            >
              <h3 className="font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-heading text-3xl tracking-tight">Pourquoi un 3e pilier</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason) => (
              <li key={reason} className="rounded-xl border border-border bg-card px-4 py-3 text-sm">
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/90">
            La déduction fiscale encourage l’effort ; elle ne justifie pas de vider votre trésorerie.
            Un spécialiste indépendant peut lire vos certificats LPP et vos 3a déjà ouverts — 30
            minutes, sans engagement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-heading text-3xl tracking-tight">Banque ou assurance, 3a ou 3b</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-6">
            <h3 className="font-semibold">3a lié (OPP 3)</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Déductible dans tous les cantons, jusqu’aux plafonds 2026. Capital bloqué sauf motifs
              légaux. Ordre des bénéficiaires fixé. Existe en banque et en assurance.
            </p>
            <Link href="/3eme-pilier-a-ou-b/" className="mt-3 inline-block text-sm text-primary hover:underline">
              Détail 3a / 3b
            </Link>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="font-semibold">3b libre</h3>
            <p className="mt-2 text-sm leading-relaxed">
              Retrait et bénéficiaires plus souples. Pas de plafond OFAS. Déduction limitée, surtout
              Genève et Fribourg, et seulement pour certaines polices d’assurance-vie.
            </p>
            <Link
              href="/3eme-pilier-banque-assurance/"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Banque vs assurance
            </Link>
          </div>
        </div>
        <aside className="mt-8 rounded-xl border border-primary/15 bg-primary/5 p-4 text-sm leading-relaxed">
          <strong>Rachat 3a dès 2026.</strong> Les lacunes depuis 2025 peuvent être rachetées, dans
          la limite de {chf(FIGURES.buybackMax)}, en plus de la cotisation ordinaire, sous conditions
          OFAS. Les années antérieures à 2025 restent perdues.
        </aside>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-14">
        <FaqList items={HOME_FAQS} />
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{METHOD_NOTE}</p>
        <p className="mt-4 text-sm">
          Service : {SITE.name}. Contact :{" "}
          <a className="text-primary underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . Partenaire conseil diplômé AFA pour la lecture des offres.
        </p>
        <SourcesList />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </div>
  );
}
