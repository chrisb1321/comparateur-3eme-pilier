import type { Metadata } from "next";
import Link from "next/link";
import { CeilingSimulator } from "@/components/ceiling-simulator";
import { CeilingsBlock } from "@/components/ceilings-block";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { SourcesList } from "@/components/sources-list";
import { HOME_FAQS, METHOD_NOTE } from "@/content/faqs";
import { ProcessSteps } from "@/components/trust-strip";
import { CEILING_NOTE, chf, FIGURES, YEAR_SPAN } from "@/lib/figures";
import { IMAGES } from "@/lib/media";
import { canonical, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Comparateur 3ème pilier ${YEAR_SPAN} : comparez et déduisez`,
  description:
    "Comparez les solutions de 3e pilier adaptées à votre situation. Comparatif gratuit et sans engagement. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
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
    text: `Prévoyance individuelle. Plafond 3a 2026 : ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}.`,
  },
];

const REASONS = [
  {
    n: "01",
    title: "Pourquoi un 3e pilier ?",
    text: "Optimiser l’impôt de l’année, combler un trou de retraite, protéger conjoint et enfants.",
  },
  {
    n: "02",
    title: "Dans quels cas ?",
    text: "Financer un logement selon les règles EPL, épargner pour un enfant via le 3b, préparer une activité indépendante.",
  },
  {
    n: "03",
    title: "Quelle limite ?",
    text: "La déduction fiscale encourage l’effort. Elle ne justifie pas de vider votre trésorerie.",
  },
];

function Arrow({ stroke = "#062B40" }: { stroke?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div>
      <section data-testid="conversion-accueil" className="navy-band on-navy">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="980,0 1440,0 1440,420" fill="#fff" fillOpacity=".04" />
          <polygon points="1160,0 1440,0 1440,230" fill="#fff" fillOpacity=".04" />
          <polygon points="0,900 0,560 520,900" fill="#fff" fillOpacity=".03" />
          <polygon points="760,900 1440,560 1440,900" fill="#fff" fillOpacity=".035" />
          <line x1="620" y1="900" x2="1440" y2="470" stroke="#fff" strokeOpacity=".07" />
        </svg>
        <div className="relative mx-auto flex w-full max-w-[1440px] items-start justify-between gap-16 px-12 pt-10 pb-16 max-[1100px]:flex-col max-[1100px]:gap-8 max-[1100px]:px-4 max-[1100px]:pt-6 max-[1100px]:pb-10">
          <div className="max-w-[700px] flex-1">
            <p className="mb-[18px] text-xl text-white/85 max-[1100px]:mb-3 max-[1100px]:text-base">
              Suisse romande · Genève · frontaliers
            </p>
            <h1 className="font-heading mb-6 text-[64px] leading-[1.06] text-white max-[1100px]:mb-4 max-[1100px]:text-[42px]">
              Comparez les solutions de <em>3e pilier</em> adaptées à votre situation
            </h1>
            <p className="mb-9 max-w-[560px] text-xl leading-normal text-white/85 max-[1100px]:mb-6 max-[1100px]:text-[17px]">
              3a ou 3b, banque ou assurance : décrivez votre projet en deux minutes. Un conseiller vous rappelle sous deux jours ouvrés pour examiner les solutions accessibles, leurs frais et leurs garanties. Comparatif gratuit et sans engagement.
            </p>
            <div className="mb-12 flex gap-3.5 max-[1100px]:mb-7 max-[1100px]:flex-col">
              <a href="#comparatif" className="btn-pill">
                Demander mon comparatif gratuit
                <Arrow />
              </a>
              <a href="/exemple-de-comparatif/" className="btn-ghost">
                Voir un exemple de comparatif
              </a>
            </div>
            <div className="grid grid-cols-3 overflow-hidden rounded-[20px] border border-white/18 bg-white/6">
              <Stat value={chf(FIGURES.pillar3aWithLpp)} label="Plafond 3a avec 2e pilier" />
              <Stat value={chf(FIGURES.pillar3aWithoutLpp)} label="Plafond 3a sans 2e pilier" border />
              <Stat value="Gratuit" label="Sans honoraires, sans engagement" border />
            </div>
          </div>
          <div id="comparatif" className="w-full max-w-[480px] shrink-0 scroll-mt-36 max-[1100px]:max-w-none">
            <LeadForm intent="comparateur" tone="overlay" />
          </div>
        </div>
      </section>

      <section id="parcours" className="bg-[#F5F8FA] scroll-mt-36">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-12 py-24 max-[1100px]:gap-6 max-[1100px]:px-4 max-[1100px]:py-14">
          <div className="flex items-end justify-between gap-16 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-4">
            <div>
              <p className="kicker">Parcours</p>
              <h2 className="font-heading text-[56px] leading-[1.05] text-[#10324A] max-[1100px]:text-[40px]">
                Lire, estimer, puis <em>demander</em>
              </h2>
            </div>
            <p className="m-0 max-w-[420px] text-lg leading-relaxed text-[#4A6275]">
              Trois étapes : comprendre votre plafond 3a 2026, décrire votre projet, puis un rappel sous deux jours ouvrés. Aucun e-mail de confirmation n’est envoyé.
            </p>
          </div>
          <ProcessSteps />
          <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <CeilingSimulator />
            <CeilingsBlock tone="paper" />
          </div>
          <Link href="/deductions-fiscales-3eme-pilier/" className="btn-pill self-center max-[1100px]:w-full">
            Détail des plafonds 2026
            <Arrow />
          </Link>
        </div>
      </section>

      <section id="offres" className="navy-band on-navy scroll-mt-36">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="980,0 1440,0 1440,320" fill="#fff" fillOpacity=".04" />
        </svg>
        <div className="relative mx-auto w-full max-w-[1440px] px-12 py-24 max-[1100px]:px-4 max-[1100px]:py-14">
          <p className="kicker">Supports</p>
          <h2 className="font-heading mb-10 text-[56px] leading-[1.05] text-white max-[1100px]:mb-5 max-[1100px]:text-[40px]">
            Banque ou assurance, <em>3a ou 3b</em>
          </h2>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-[20px] bg-white p-7 text-[#10324A]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-semibold tracking-[0.12em] text-[#23597C] uppercase">3a lié · OPP 3</p>
                <span className="rounded-full bg-[#E8F7F4] px-3 py-1 text-[13px] font-semibold text-[#1F5E55]">Déductible</span>
              </div>
              <p className="text-[40px] leading-none font-semibold max-[1100px]:text-[32px]">{chf(FIGURES.pillar3aWithLpp)}</p>
              <p className="text-sm text-[#4A6275]">Plafond 2026 avec 2e pilier. Sans 2e pilier : {chf(FIGURES.pillar3aWithoutLpp)}.</p>
              <ul className="flex flex-col gap-2.5 text-base leading-snug">
                <li>Déductible dans tous les cantons, jusqu’aux plafonds 2026.</li>
                <li>Capital bloqué sauf motifs légaux. Ordre des bénéficiaires fixé.</li>
                <li>Existe en banque et en assurance.</li>
              </ul>
              <Link href="/3eme-pilier-a-ou-b/" className="text-sm font-semibold text-[#23597C] underline underline-offset-4">
                Détail 3a / 3b
              </Link>
            </article>
            <article className="flex flex-col gap-4 rounded-[20px] border border-white/16 bg-white/6 p-7 text-white">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-semibold tracking-[0.12em] text-[#7FE3D3] uppercase">3b libre</p>
                <span className="rounded-full bg-[rgba(191,243,234,0.16)] px-3 py-1 text-[13px] font-semibold text-[#BFF3EA]">Souple</span>
              </div>
              <p className="text-[40px] leading-none font-semibold max-[1100px]:text-[32px]">Libre</p>
              <p className="text-sm text-white/80">Pas de plafond OFAS. Déduction limitée, surtout Genève et Fribourg.</p>
              <ul className="flex flex-col gap-2.5 text-base leading-snug text-white/90">
                <li>Retrait et bénéficiaires plus souples.</li>
                <li>Déduction surtout pour certaines polices d’assurance-vie.</li>
                <li>Utile pour l’épargne d’un enfant, sans revenu 3a.</li>
              </ul>
              <Link href="/3eme-pilier-banque-assurance/" className="text-sm font-semibold text-[#BFF3EA] underline underline-offset-4">
                Banque vs assurance
              </Link>
            </article>
          </div>
          <p className="mb-8 flex items-start gap-3.5 rounded-[14px] border border-dashed border-[#BFF3EA]/50 px-[22px] py-[18px] text-base leading-snug text-white/90">
            <strong className="text-white">Rachat 3a dès 2026.</strong>
            Les lacunes depuis 2025 peuvent être rachetées, dans la limite de {chf(FIGURES.buybackMax)}, en plus de la cotisation ordinaire, sous conditions OFAS.
          </p>
        </div>
      </section>

      <section id="plafonds" className="bg-white scroll-mt-36">
        <div className="mx-auto flex w-full max-w-[1440px] items-start justify-between gap-20 px-12 py-24 max-[1100px]:flex-col max-[1100px]:gap-4 max-[1100px]:px-4 max-[1100px]:py-14">
          <div className="w-full max-w-[600px] shrink-0">
            <p className="kicker">Plafonds 3a</p>
            <p className="text-[128px] leading-[0.95] font-semibold tracking-[-0.03em] text-[#174462] max-[1100px]:text-[88px]">
              {FIGURES.pillar3aWithLpp.toLocaleString("fr-CH")}
            </p>
            <p className="mt-2 mb-5 text-[44px] leading-none text-[#1F7F72] italic max-[1100px]:text-[30px]">francs par an</p>
            <p className="mb-8 max-w-[520px] text-[22px] leading-snug text-[#10324A] max-[1100px]:text-lg">
              Petite cotisation 2026 avec 2e pilier, art. 7 OPP 3. La grande cotisation 2026 monte à {chf(FIGURES.pillar3aWithoutLpp)}.
            </p>
            <div className="mb-4 flex items-center gap-4 rounded-2xl border border-[#DCE6ED] bg-[#F5F8FA] px-[22px] py-[18px]">
              <b className="text-[32px] font-semibold whitespace-nowrap text-[#174462] max-[1100px]:text-[26px]">{chf(FIGURES.pillar3aWithoutLpp)}</b>
              <span className="text-base leading-snug text-[#4A6275]">sans 2e pilier, 20 % du revenu d’activité, dans cette limite.</span>
            </div>
            <p className="mb-8 text-[13px] text-[#6B8293]">{CEILING_NOTE}.</p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {REASONS.map((item, index) => (
              <article
                key={item.n}
                className={`flex gap-[18px] rounded-[20px] border p-7 max-[1100px]:flex-col max-[1100px]:gap-2 max-[1100px]:p-5 ${
                  index === 2 ? "border-[#174462] bg-[#174462] text-white" : "border-[#DCE6ED] bg-[#F5F8FA] text-[#10324A]"
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full text-base font-semibold ${
                    index === 2 ? "bg-[#BFF3EA] text-[#062B40]" : "bg-[#174462] text-[#BFF3EA]"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className={`mb-2 text-[22px] font-semibold max-[1100px]:text-xl ${index === 2 ? "text-white" : "text-[#10324A]"}`}>{item.title}</h3>
                  <p className={`text-base leading-relaxed ${index === 2 ? "text-white/85" : "text-[#4A6275]"}`}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="qui" className="bg-[#F5F8FA] scroll-mt-36">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-12 py-24 max-[1100px]:gap-4 max-[1100px]:px-4 max-[1100px]:py-14">
          <div className="flex items-center gap-20 max-[1100px]:flex-col-reverse max-[1100px]:items-stretch max-[1100px]:gap-4">
            <div className="relative h-[600px] w-[540px] shrink-0 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(16,50,74,0.45)] max-[1100px]:h-[420px] max-[1100px]:w-full max-[1100px]:rounded-[22px]">
              <Frame image={IMAGES.conseiller} fill className="absolute inset-0 rounded-none" rounded={false} sizes="540px" />
              <p className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-[#174462]/80 px-3.5 py-2 text-sm font-semibold text-white">
                Genève · Léman
              </p>
              <div className="absolute right-5 bottom-5 left-5 rounded-[18px] bg-[#174462]/90 p-5 text-white">
                <b className="mb-1 block text-[17px] font-semibold">Un comparatif, pas un mandat</b>
                <span className="text-[15px] leading-snug text-white/85">Le conseiller examine les solutions accessibles dans le cadre du service, pas l’ensemble du marché suisse.</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="kicker">Méthode</p>
              <h2 className="font-heading mb-7 text-[56px] leading-[1.05] text-[#10324A] max-[1100px]:mb-3 max-[1100px]:text-[38px]">
                Un conseil pour <em>votre situation</em>
              </h2>
              <p className="mb-4 text-[19px] leading-relaxed text-[#10324A]">
                « Un rachat 3a dès 2026 n’efface pas les années perdues avant 2025. On verse d’abord le maximum de l’année, ensuite seulement la lacune. »
              </p>
              <p className="mb-7 text-[19px] leading-relaxed text-[#4A6275]">
                Un conseiller examine les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Ce n’est pas l’ensemble du marché suisse.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Gratuit", "Sans engagement", "Suisse romande"].map((badge) => (
                  <span key={badge} className="rounded-full border border-[#DCE6ED] bg-white px-4 py-2.5 text-[15px] font-semibold text-[#174462]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Humain", text: "Un rappel téléphonique, pas un e-mail automatique." },
              { title: "Indépendant", text: "Banque ou assurance : les deux supports sont lus." },
              { title: "Transparent", text: "Plafonds OFAS affichés, frais de conseil à zéro." },
            ].map((item) => (
              <article key={item.title} className="flex items-center gap-4 rounded-[18px] border border-[#DCE6ED] bg-white p-6 max-[1100px]:p-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF4F8] text-lg font-semibold text-[#174462]">
                  {item.title.slice(0, 1)}
                </span>
                <div>
                  <b className="mb-1 block text-lg">{item.title}</b>
                  <span className="text-[15px] text-[#4A6275]">{item.text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-12 py-24 max-[1100px]:px-4 max-[1100px]:py-14">
          <p className="kicker">Architecture suisse</p>
          <h2 className="font-heading max-w-3xl text-[56px] leading-[1.05] text-[#10324A] max-[1100px]:text-[40px]">
            Les trois <em>piliers</em> suisses
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4A6275]">
            Le système de retraite suisse combine répartition (AVS), capitalisation (LPP) et prévoyance individuelle (3e pilier). L’âge de référence AVS est 65 ans ; les femmes de la génération transitoire AVS 21 suivent un relèvement progressif.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Link key={pillar.href} href={pillar.href} className="surface-card group block overflow-hidden">
                <Frame image={pillar.image} className="aspect-[4/3] rounded-none" rounded={false} sizes="(min-width: 768px) 30vw, 100vw" />
                <div className="p-6">
                  <h3 className="text-[28px] font-semibold text-[#10324A] group-hover:text-[#23597C]">{pillar.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#4A6275]">{pillar.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { href: "/3eme-pilier-geneve/", image: IMAGES.geneve, title: "Genève", text: "ICC, LIPP, frontaliers." },
              { href: "/frontalier-suisse/", image: IMAGES.frontalier, title: "Frontaliers", text: "AVS, source, TOU." },
              { href: "/epargne-enfant/", image: IMAGES.enfant, title: "Épargne enfant", text: "Pas de 3a sans revenu." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="surface-card group block overflow-hidden">
                <Frame image={item.image} className="aspect-[16/10] rounded-none" rounded={false} />
                <div className="p-5">
                  <p className="text-2xl font-semibold group-hover:text-[#23597C]">{item.title}</p>
                  <p className="text-[15px] text-[#4A6275]">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-12 max-[1100px]:px-4">
        <FaqList items={HOME_FAQS} />
        <p className="mt-10 text-sm leading-relaxed text-[#4A6275]">{METHOD_NOTE}</p>
        <p className="mt-4 text-sm">
          Service : {SITE.name}. Contact :{" "}
          <a className="font-semibold text-[#174462] underline underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
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
            name: "Plafonds 3e pilier 3a 2026 (Suisse)",
            description: CEILING_NOTE,
            creator: { "@type": "Organization", name: SITE.name },
            license: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
            temporalCoverage: "2026",
            variableMeasured: [
              {
                "@type": "PropertyValue",
                name: "Petite cotisation 3a 2026 (avec 2e pilier)",
                value: FIGURES.pillar3aWithLpp,
                unitText: "CHF",
              },
              {
                "@type": "PropertyValue",
                name: "Grande cotisation 3a 2026 (sans 2e pilier, max.)",
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

function Stat({ value, label, border = false }: { value: string; label: string; border?: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 px-6 py-6 max-[1100px]:px-2.5 max-[1100px]:py-4 ${border ? "border-l border-white/15" : ""}`}>
      <b className="text-[40px] leading-none font-semibold max-[1100px]:text-2xl">{value}</b>
      <span className="text-[15px] leading-snug text-white/80 max-[1100px]:text-xs">{label}</span>
    </div>
  );
}
