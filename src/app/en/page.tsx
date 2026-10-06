import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { SourcesList } from "@/components/sources-list";
import { chf, FIGURES, NOTE_2027_EN, REVIEW_LABEL, YEAR_SPAN } from "@/lib/figures";
import { IMAGES } from "@/lib/media";
import { canonical, SITE } from "@/lib/site";
import type { FaqItem } from "@/content/types";

const fr = canonical("/");
const en = canonical("/en/");

export const metadata: Metadata = {
  title: {
    absolute: "Swiss pillar 3 comparison 2026 | 3a, 3b, bank or insurance",
  },
  description:
    "Compare Swiss pillar 3 options: pillar 3a or pillar 3b, bank or insurance, fees, flexibility and cover. The comparison is free and does not commit you.",
  alternates: {
    canonical: en,
    languages: { "fr-CH": fr, en, "x-default": fr },
  },
  openGraph: {
    title: "Swiss pillar 3 comparison 2026 | 3a, 3b, bank or insurance",
    description:
      "Compare Swiss pillar 3 options: pillar 3a or pillar 3b, bank or insurance, fees, flexibility and cover. The comparison is free and does not commit you.",
    url: en,
    locale: "en",
  },
};

const PILLARS = [
  {
    href: "/en/1er-pilier-avs-ai-apg/",
    title: "1st pillar, OASI/AVS",
    image: IMAGES.avs,
    text: `Pay-as-you-go. 2026 pension: ${chf(FIGURES.avsMinMonthly)} to ${chf(FIGURES.avsMaxMonthly)} a month. A 13th pension starts in December 2026.`,
  },
  {
    href: "/en/2eme-pilier-lpp/",
    title: "2nd pillar, BVG/LPP",
    image: IMAGES.lpp,
    text: `Funded pension. Entry threshold ${chf(FIGURES.lppEntry)}. That threshold decides whether the large pillar 3a contribution is open.`,
  },
  {
    href: "/en/3eme-pilier-suisse/",
    title: "3rd pillar, 3a / 3b",
    image: IMAGES.mixte,
    text: `Individual provision. 2026 pillar 3a ceiling: ${chf(FIGURES.pillar3aWithLpp)} or ${chf(FIGURES.pillar3aWithoutLpp)}.`,
  },
];

const HOME_FAQS_EN: FaqItem[] = [
  {
    question: "What is the maximum pillar 3a contribution in 2026?",
    answer: `In 2026 the small contribution, for someone affiliated to a 2nd-pillar scheme, is ${chf(FIGURES.pillar3aWithLpp)} a year. Without a 2nd pillar, the large contribution is 20% of earned income, capped at ${chf(FIGURES.pillar3aWithoutLpp)}. The cap applies to all pillar 3a accounts together. Source: FSIO/OFAS table of 1 January 2026, checked on ${REVIEW_LABEL}. ${NOTE_2027_EN}.`,
  },
  {
    question: "Has the FSIO already published the 2027 pillar 3a ceilings?",
    answer: `Yes. ${NOTE_2027_EN}. The calculator on this site still applies the 2026 ceilings. The 2026 ceiling is not copied onto 2027.`,
  },
  {
    question: "Can missing pillar 3a years be bought back?",
    answer: `Yes, from tax year ${FIGURES.buybackFirstYear}. The first buyback covers a gap from ${FIGURES.buybackGapFrom}, up to the small contribution (${chf(FIGURES.buybackMax)}), on top of the ordinary contribution of the buyback year. You need Swiss OASI/AVS income in the gap year and in the buyback year, and you must already have paid the ordinary maximum for the current year. Source: FSIO/OFAS.`,
  },
  {
    question: "How do pillar 3a and pillar 3b differ?",
    answer:
      "Pillar 3a is tied pension provision. It is deductible from income in every canton, and the capital stays locked except for the legal reasons (retirement, home ownership, leaving Switzerland, self-employment, disability). Pillar 3b is unrestricted. Beneficiaries and withdrawals are more flexible. There is no federal deduction, and only a limited one in some cantons, notably Geneva and Fribourg, inside the life-insurance premium envelope.",
  },
  {
    question: "Bank or insurance: which one?",
    answer:
      "The pillar 3a tax rule is the same either way. A bank account is more flexible (free payments, a simpler exit) and carries no insurance cover. An insurance policy often ties a savings capital to death cover, and sometimes to a waiver of premium if you become disabled. It tends to fit a long horizon. The right choice depends on budget, family and time — not on a single ranking.",
  },
  {
    question: "Can a cross-border worker open a third pillar?",
    answer:
      "Yes for pillar 3a, if the Swiss income is subject to OASI/AVS. Pillar 3b is open more widely. The tax benefit depends on the canton, the permit and any subsequent ordinary assessment. Leaving Switzerland for good is a reason for an early pillar 3a withdrawal.",
  },
  {
    question: "Is the comparison free?",
    answer:
      "Yes. The comparison and the conversation with the adviser are free and without commitment. You describe your situation, then you remain free to take out nothing.",
  },
];

export default function EnglishHomePage() {
  return (
    <div>
      <section className="navy-band on-navy">
        <div className="relative mx-auto w-full max-w-[1440px] px-12 pt-10 pb-16 max-[1100px]:px-4 max-[1100px]:pt-6 max-[1100px]:pb-10">
          <p className="mb-[18px] text-xl text-white/85 max-[1100px]:mb-3 max-[1100px]:text-base">
            French-speaking Switzerland · Geneva · cross-border workers
          </p>
          <h1 className="font-heading mb-6 max-w-[18ch] text-[64px] leading-[1.06] text-white max-[1100px]:mb-4 max-[1100px]:text-[42px]">
            Which third pillar should you choose?
          </h1>
          <p className="mb-8 max-w-[640px] text-xl leading-normal text-white/85 max-[1100px]:text-[17px]">
            Compare pillar 3a or pillar 3b, at a bank or with an insurer: fees, flexibility and cover, before you commit.
          </p>
          <aside className="mb-8 max-w-[640px] rounded-[20px] border border-white/18 bg-white/6 px-6 py-5">
            <h2 className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#BFF3EA] uppercase">In brief</h2>
            <ul className="space-y-2 text-[15px] leading-snug text-white/90">
              <li>2026 pillar 3a ceiling with a 2nd pillar: {chf(FIGURES.pillar3aWithLpp)}</li>
              <li>Without a 2nd pillar: 20% of earned income, maximum {chf(FIGURES.pillar3aWithoutLpp)}</li>
              <li>Pillar 3a exists at a bank or with an insurer</li>
              <li>Pillar 3b is unrestricted provision</li>
              <li>The comparison is free and without commitment</li>
              <li>Figures are checked against official sources</li>
            </ul>
            <p className="mt-4 text-sm">
              <Link href="/en/methodologie-comparatif/" className="font-semibold text-[#BFF3EA] underline underline-offset-4">
                Read the method
              </Link>
            </p>
            <p className="mt-2 text-xs text-white/70">
              Figures last checked on {REVIEW_LABEL}. {NOTE_2027_EN}.
            </p>
          </aside>
          <div className="mb-8 max-w-[640px] rounded-[20px] border border-white/18 bg-white/6 px-6 py-5 text-white/90">
            <h2 className="mb-2 text-lg font-semibold text-white">The request form stays in French</h2>
            <p className="text-[15px] leading-relaxed">
              The fields and the follow-up are in French: first name, last name, email, phone and canton. The request is free and does not commit you.
            </p>
            <p className="mt-4">
              <Link href="/formulaire-3eme-pilier/" className="btn-pill">
                Open the French form
              </Link>
            </p>
          </div>
          <div className="grid max-w-[720px] grid-cols-3 overflow-hidden rounded-[20px] border border-white/18 bg-white/6">
            <Stat value={chf(FIGURES.pillar3aWithLpp)} label="2026 ceiling with a 2nd pillar" />
            <Stat value={chf(FIGURES.pillar3aWithoutLpp)} label="2026 ceiling without a 2nd pillar" border />
            <Stat value="Free" label="No fee, no commitment" border />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-12 py-16 max-[1100px]:px-4 max-[1100px]:py-12">
          <p className="kicker">2026 ceilings</p>
          <h2 className="font-heading max-w-3xl text-[48px] leading-[1.05] text-[#10324A] max-[1100px]:text-[36px]">
            The pillar 3a cap is set for {YEAR_SPAN}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4A6275]">
            With a 2nd pillar (BVG/LPP), the small pillar 3a contribution is {chf(FIGURES.pillar3aWithLpp)}. Without a 2nd pillar it is 20% of earned income, and never more than {chf(FIGURES.pillar3aWithoutLpp)}. {NOTE_2027_EN}.
          </p>
          <p className="mt-4 text-sm text-[#6B8293]">
            Source: FSIO/OFAS table of 1 January 2026. Last check: {REVIEW_LABEL}.
          </p>
          <p className="mt-6">
            <Link href="/en/calculateur-plafond-3a/" className="font-semibold text-[#174462] underline underline-offset-4">
              Estimate the 2026 ceiling
            </Link>
            {" · "}
            <Link href="/en/plafonds-3a-2026-2027/" className="font-semibold text-[#174462] underline underline-offset-4">
              Read the ceiling page
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#F5F8FA]">
        <div className="mx-auto w-full max-w-[1440px] px-12 py-16 max-[1100px]:px-4">
          <p className="kicker">Swiss architecture</p>
          <h2 className="font-heading max-w-3xl text-[48px] leading-[1.05] text-[#10324A] max-[1100px]:text-[36px]">
            The three Swiss pillars
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4A6275]">
            Retirement in Switzerland combines pay-as-you-go (OASI/AVS), a funded occupational scheme (BVG/LPP) and individual provision (the third pillar). The OASI reference age is 65. Women in the AVS 21 transitional generation follow a gradual rise. Older pages that still said “64 for women” are out of date.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
              { href: "/en/3eme-pilier-geneve/", image: IMAGES.geneve, title: "Geneva", text: "Cantonal tax, cross-border workers." },
              { href: "/en/frontalier-suisse/", image: IMAGES.frontalier, title: "Cross-border", text: "OASI/AVS, withholding tax, ordinary assessment." },
              { href: "/en/epargne-enfant/", image: IMAGES.enfant, title: "Saving for a child", text: "No pillar 3a without earned income." },
              { href: "/en/ouvrir-un-3eme-pilier/", image: IMAGES.pillar3a, title: "Opening a third pillar", text: "Conditions, 2026 ceiling, timing." },
              { href: "/en/3eme-pilier-logement/", image: IMAGES.banque, title: "Home ownership", text: "Withdrawal or pledge." },
              { href: "/en/3eme-pilier-banque-assurance/", image: IMAGES.assurance, title: "Bank or insurance", text: "Same tax rule, different contract." },
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

      <div className="mx-auto w-full max-w-[1440px] px-12 pb-16 max-[1100px]:px-4">
        <FaqList items={HOME_FAQS_EN} locale="en" />
        <p className="mt-10 text-sm leading-relaxed text-[#4A6275]">
          Method: official texts (FSIO/OFAS, OPP 3, FTA/AFC) and cantonal notices are cross-checked. The pillar 3a amounts cited as current are the 2026 ones. {NOTE_2027_EN}. A pillar 3b deduction is cantonal and often shares the insurance-premium envelope. This is general information, not personal advice. Last editorial review: {REVIEW_LABEL}.
        </p>
        <p className="mt-4 text-sm">
          Service: {SITE.name}. Contact:{" "}
          <a className="font-semibold text-[#174462] underline underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . A service adviser calls back. No diploma and no register are displayed, because those facts are not established here. The comparison stays free and without commitment.
        </p>
        <SourcesList locale="en" />
      </div>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "en",
            mainEntity: HOME_FAQS_EN.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: `Swiss pillar 3a ceilings ${YEAR_SPAN}`,
            description: `Maximum pillar 3a deductions in 2026 under article 7 OPP 3 and the FSIO/OFAS table. ${NOTE_2027_EN}.`,
            inLanguage: "en",
            creator: { "@type": "Organization", name: SITE.name },
            license: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
            temporalCoverage: "2026",
            variableMeasured: [
              {
                "@type": "PropertyValue",
                name: "Small pillar 3a contribution 2026 (with a 2nd pillar)",
                value: FIGURES.pillar3aWithLpp,
                unitText: "CHF",
              },
              {
                "@type": "PropertyValue",
                name: "Large pillar 3a contribution 2026 (without a 2nd pillar, maximum)",
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
      <b className="text-[40px] leading-none font-semibold text-white max-[1100px]:text-2xl">{value}</b>
      <span className="text-[15px] leading-snug text-white/80 max-[1100px]:text-xs">{label}</span>
    </div>
  );
}
