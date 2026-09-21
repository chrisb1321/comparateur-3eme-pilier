import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { CeilingSimulator } from "@/components/ceiling-simulator";
import { CeilingsBlock } from "@/components/ceilings-block";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { SourcesList } from "@/components/sources-list";
import { HOME_FAQS, METHOD_NOTE } from "@/content/faqs";
import { Amount } from "@/components/amount";
import { ProcessSteps, TrustStrip } from "@/components/trust-strip";
import { chf, FIGURES, YEAR_SPAN, YEAR_SPAN_WORDS } from "@/lib/figures";
import { IMAGES } from "@/lib/media";
import { canonical, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Comparateur 3ème pilier ${YEAR_SPAN} : comparez et déduisez`,
  description:
    `Comparez les 3e piliers 3a et 3b en Suisse. Plafonds ${YEAR_SPAN_WORDS} (OFAS / OPP 3) : CHF 7’258 / 36’288. Comparatif gratuit, sans honoraires, sans Typeform.`,
  alternates: { canonical: canonical("/") },
};

const PILLARS = [
  {
    href: "/1er-pilier-avs-ai-apg/",
    title: "1er pilier AVS",
    image: IMAGES.avs,
    text: `Répartition. Rente 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} / mois. 13e rente dès décembre 2026.`,
  },
  {
    href: "/2eme-pilier-lpp/",
    title: "2e pilier LPP",
    image: IMAGES.lpp,
    text: `Capitalisation. Seuil d’entrée ${chf(FIGURES.lppEntry)}. C’est ce seuil qui ouvre — ou non — la grande cotisation 3a.`,
  },
  {
    href: "/3eme-pilier-a-ou-b/",
    title: "3e pilier 3a / 3b",
    image: IMAGES.mixte,
    text: `Prévoyance individuelle. Plafond 3a ${YEAR_SPAN_WORDS} : ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}.`,
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
      <section data-testid="conversion-accueil" className="relative min-h-[92vh] overflow-hidden text-primary-foreground">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/72 to-primary/35" />
        <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-24 lg:items-center">
          <div>
            <p className="kicker">Suisse romande · Genève · frontaliers</p>
            <h1 className="font-heading mt-4 max-w-xl text-[2.6rem] leading-[1.05] md:text-6xl">
              Un comparatif 3e pilier, sans honoraires
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/88 md:text-lg">
              Banque ou assurance, 3a ou 3b : un conseiller partenaire diplômé AFA lit votre
              situation. Les plafonds ci-dessous sont ceux de l’OFAS pour 2026 — et, pour 2027, les
              montants encore en vigueur. Pas une estimation, pas un Typeform.
            </p>
            <TrustStrip tone="hero" />
            <CeilingsBlock tone="hero" />
            <p className="mt-6">
              <Link
                href="/deductions-fiscales-3eme-pilier/"
                className="text-sm text-primary-foreground/80 underline decoration-accent underline-offset-4 hover:text-primary-foreground"
              >
                Détail des plafonds {YEAR_SPAN}
              </Link>
            </p>
          </div>
          <LeadForm intent="comparateur" tone="overlay" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <p className="kicker">Parcours</p>
        <h2 className="font-heading mt-3 max-w-2xl text-4xl">Lire, estimer, puis demander le comparatif</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Trois étapes : comprendre votre plafond 3a, remplir le formulaire, recevoir un rappel sous deux jours ouvrés.
          Pas d’e-mail automatique, pas de Typeform.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ProcessSteps />
          <CeilingSimulator />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="kicker">Architecture suisse</p>
        <h2 className="font-heading mt-3 max-w-2xl text-4xl md:text-5xl">Les trois piliers suisses</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/85">
          Le système de retraite suisse combine répartition (AVS), capitalisation (LPP) et
          prévoyance individuelle (3e pilier). L’âge de référence AVS est 65 ans ; les femmes de la
          génération transitoire AVS 21 suivent un relèvement progressif. Les textes WordPress
          citaient encore « 64 ans pour les femmes » : c’est périmé pour {YEAR_SPAN_WORDS}.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link key={pillar.href} href={pillar.href} className="group block">
              <Frame image={pillar.image} className="aspect-[4/3]" sizes="(min-width: 768px) 30vw, 100vw" />
              <h3 className="font-heading mt-4 text-2xl group-hover:text-primary">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.couple.src} alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-background/88" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <p className="kicker">Intentions</p>
            <h2 className="font-heading mt-3 text-4xl">Pourquoi un 3e pilier</h2>
            <p className="mt-5 text-base leading-relaxed">
              La déduction fiscale encourage l’effort ; elle ne justifie pas de vider votre trésorerie.
              Un spécialiste indépendant peut lire vos certificats LPP et vos 3a déjà ouverts — 30
              minutes, sans engagement.
            </p>
            <Frame image={IMAGES.couple} className="mt-8 aspect-[4/3]" caption="Quais de Genève" />
          </div>
          <ol className="space-y-0 border-t border-accent/30">
            {REASONS.map((reason, index) => (
              <li
                key={reason}
                className="flex gap-4 border-b border-accent/20 py-5 text-base"
              >
                <span className="font-figures w-10 text-2xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {reason}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="kicker">Supports</p>
        <h2 className="font-heading mt-3 text-4xl md:text-5xl">Banque ou assurance, 3a ou 3b</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <article>
            <Frame image={IMAGES.pillar3a} className="aspect-[4/3]" caption="3a — prévoyance liée" />
            <h3 className="font-heading mt-5 text-3xl">3a lié (OPP 3)</h3>
            <p className="mt-3 text-base leading-relaxed">
              Déductible dans tous les cantons, jusqu’aux plafonds {YEAR_SPAN_WORDS}. Capital bloqué sauf motifs
              légaux. Ordre des bénéficiaires fixé. Existe en banque et en assurance.
            </p>
            <Link href="/3eme-pilier-a-ou-b/" className="mt-4 inline-block text-sm tracking-wide text-primary underline decoration-accent underline-offset-4">
              Détail 3a / 3b
            </Link>
          </article>
          <article>
            <Frame image={IMAGES.pillar3b} className="aspect-[4/3]" caption="3b — prévoyance libre" />
            <h3 className="font-heading mt-5 text-3xl">3b libre</h3>
            <p className="mt-3 text-base leading-relaxed">
              Retrait et bénéficiaires plus souples. Pas de plafond OFAS. Déduction limitée, surtout
              Genève et Fribourg, et seulement pour certaines polices d’assurance-vie.
            </p>
            <Link
              href="/3eme-pilier-banque-assurance/"
              className="mt-4 inline-block text-sm tracking-wide text-primary underline decoration-accent underline-offset-4"
            >
              Banque vs assurance
            </Link>
          </article>
        </div>
        <div className="mt-12 grid gap-8 border border-accent/25 bg-card p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <Frame image={IMAGES.conseiller} className="aspect-[3/4] max-h-[22rem]" sizes="280px" />
          <aside className="flex flex-col justify-center">
            <p className="font-heading text-2xl italic leading-snug md:text-3xl">
              « Un rachat 3a dès 2026 n’efface pas les années perdues avant 2025. On verse d’abord
              le maximum de l’année, ensuite seulement la lacune. »
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              <strong>Rachat 3a dès 2026.</strong> Les lacunes depuis 2025 peuvent être rachetées,
              dans la limite de <Amount value={FIGURES.buybackMax} />, en plus de la cotisation ordinaire, sous
              conditions OFAS.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-accent/20 bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
          {[
            { href: "/3eme-pilier-geneve/", image: IMAGES.geneve, title: "Genève", text: "ICC, LIPP, frontaliers." },
            { href: "/frontalier-suisse/", image: IMAGES.frontalier, title: "Frontaliers", text: "AVS, source, TOU." },
            { href: "/epargne-enfant/", image: IMAGES.enfant, title: "Épargne enfant", text: "Pas de 3a sans revenu." },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <Frame image={item.image} className="aspect-[16/10]" />
              <p className="font-heading mt-3 text-2xl group-hover:text-primary">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <CtaBand />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <FaqList items={HOME_FAQS} />
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">{METHOD_NOTE}</p>
        <p className="mt-4 text-sm">
          Service : {SITE.name}. Contact :{" "}
          <a className="text-primary underline decoration-accent underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . Partenaire conseil diplômé AFA pour la lecture des offres.
        </p>
        <SourcesList />
      </div>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: `Plafonds 3e pilier 3a ${YEAR_SPAN} (Suisse)`,
            description: `Déductions maximales du pilier 3a selon l’art. 7 OPP 3. 2026 : tableau OFAS du 1.1.2026. 2027 : mêmes montants encore en vigueur ; tableau OFAS non publié au 19.09.2026.`,
            creator: { "@type": "Organization", name: SITE.name },
            license: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
            temporalCoverage: "2025/2027",
            variableMeasured: [
              {
                "@type": "PropertyValue",
                name: "Petite cotisation 3a 2026 et 2027 (avec 2e pilier)",
                value: FIGURES.pillar3aWithLpp,
                unitText: "CHF",
              },
              {
                "@type": "PropertyValue",
                name: "Grande cotisation 3a 2026 et 2027 (sans 2e pilier, max.)",
                value: FIGURES.pillar3aWithoutLpp,
                unitText: "CHF",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
