import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { HOME_FAQS } from "@/content/faqs";
import { ProcessSteps } from "@/components/trust-strip";
import { CEILING_NOTE, chf, FIGURES } from "@/lib/figures";
import { IMAGES } from "@/lib/media";
import { canonical, CTA_CALLBACK, SITE } from "@/lib/site";

const PAGE_TITLE = "Comparateur 3e pilier suisse | Comparez 3a, 3b, banque et assurance";
const PAGE_DESCRIPTION = SITE.description;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: canonical("/") },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: canonical("/"),
  },
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
    text: "Prévoyance individuelle, en banque ou en assurance. Le plafond 3a 2026 est dans la FAQ.",
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
              3a ou 3b · banque ou assurance
            </p>
            <h1 className="font-heading mb-6 text-[64px] leading-[1.06] text-white max-[1100px]:mb-4 max-[1100px]:text-[42px]">
              Quel <em>3e pilier</em> choisir ? Comparez vos options avant de vous engager.
            </h1>
            <p className="mb-9 max-w-[560px] text-xl leading-normal text-white/85 max-[1100px]:mb-6 max-[1100px]:text-[17px]">
              Comparez 3a ou 3b, en banque ou en assurance : frais, souplesse et garanties.
            </p>
            <div className="mb-6 flex gap-3.5 max-[1100px]:flex-col">
              <a href="#comparatif" className="btn-pill whitespace-normal text-center leading-snug max-[1100px]:w-full">
                {CTA_CALLBACK}
                <Arrow />
              </a>
              <a href="#parcours" className="btn-ghost whitespace-normal text-center leading-snug max-[1100px]:w-full">
                Comment se passe le comparatif ?
              </a>
            </div>
          </div>
          <div id="comparatif" className="w-full max-w-[480px] shrink-0 scroll-mt-36 max-[1100px]:max-w-none">
            <LeadForm intent="comparateur" tone="overlay" />
          </div>
        </div>
      </section>

      <section id="parcours" className="bg-[#F5F8FA] scroll-mt-36">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-12 py-24 max-[1100px]:gap-6 max-[1100px]:px-4 max-[1100px]:py-14">
          <div className="max-w-3xl">
            <p className="kicker">Parcours</p>
            <h2 className="font-heading text-[56px] leading-[1.05] text-[#10324A] max-[1100px]:text-[40px]">
              Trois étapes pour <em>comparer</em>
            </h2>
          </div>
          <ProcessSteps />
          <a href="#comparatif" className="btn-pill self-center whitespace-normal text-center leading-snug max-[1100px]:w-full">
            {CTA_CALLBACK}
            <Arrow />
          </a>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-12 max-[1100px]:px-4">
        <FaqList items={HOME_FAQS} ctaHref="#comparatif" />
      </div>

      <section id="rappel" className="navy-band on-navy scroll-mt-36">
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 px-12 py-24 max-[1100px]:px-4 max-[1100px]:py-14">
          <p className="kicker">Dernier appel</p>
          <h2 className="font-heading max-w-3xl text-[56px] leading-[1.05] text-white max-[1100px]:text-[40px]">
            Un échange clair avant <em>toute décision</em>
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white/85">
            Comparez 3a ou 3b, en banque ou en assurance : frais, souplesse et garanties.
          </p>
          <a href="#comparatif" className="btn-pill whitespace-normal text-center leading-snug max-[1100px]:w-full">
            {CTA_CALLBACK}
            <Arrow />
          </a>
        </div>
      </section>

      <section id="qui" className="bg-[#F5F8FA] scroll-mt-36">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-12 py-24 max-[1100px]:gap-4 max-[1100px]:px-4 max-[1100px]:py-14">
          <div className="flex items-center gap-20 max-[1100px]:flex-col-reverse max-[1100px]:items-stretch max-[1100px]:gap-4">
            <div className="relative h-[600px] w-[540px] shrink-0 overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(16,50,74,0.45)] max-[1100px]:h-[420px] max-[1100px]:w-full max-[1100px]:rounded-[22px]">
              <Frame image={IMAGES.conseiller} fill className="absolute inset-0 rounded-none" rounded={false} sizes="540px" />
              <div className="absolute right-5 bottom-5 left-5 rounded-[18px] bg-[#174462]/90 p-5 text-white">
                <b className="mb-1 block text-[17px] font-semibold">Comparatif</b>
                <span className="text-[15px] leading-snug text-white/85">Frais, souplesse et garanties, en banque ou en assurance.</span>
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
                Le comparatif examine les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Ce n’est pas l’ensemble du marché suisse.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Sans honoraires"].map((badge) => (
                  <span key={badge} className="rounded-full border border-[#DCE6ED] bg-white px-4 py-2.5 text-[15px] font-semibold text-[#174462]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Humain", text: "Les options sont expliquées, pas un palmarès automatique." },
              { title: "Indépendant", text: "Banque ou assurance : les deux supports sont lus." },
              { title: "Transparent", text: "Le plafond 2026 cité vient de l’OFAS. Pas d’honoraires." },
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
              <p className="text-[28px] leading-tight font-semibold">Même plafond OFAS en 2026</p>
              <p className="text-sm text-[#4A6275]">Le montant, avec ou sans 2e pilier, est dans la FAQ.</p>
              <ul className="flex flex-col gap-2.5 text-base leading-snug">
                <li>Déductible dans tous les cantons, dans la limite publiée pour 2026.</li>
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
              <p className="text-[28px] leading-tight font-semibold">Pas de plafond OFAS</p>
              <p className="text-sm text-white/80">Déduction limitée, surtout Genève et Fribourg.</p>
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
          <p className="flex items-start gap-3.5 rounded-[14px] border border-dashed border-[#BFF3EA]/50 px-[22px] py-[18px] text-base leading-snug text-white/90">
            <strong className="text-white">Rachat 3a dès 2026.</strong>
            Les lacunes depuis 2025 peuvent être rachetées, dans la limite de la petite cotisation 2026, en plus de la cotisation ordinaire, sous conditions OFAS. Aucun montant 2027 n’est présenté comme officiel.
          </p>
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
          <div className="mt-10">
            <p className="text-sm leading-relaxed text-[#4A6275]">
              Service : {SITE.name}. Contact :{" "}
              <a className="font-semibold text-[#174462] underline underline-offset-4" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
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
