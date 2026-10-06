"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { BrandLockup } from "@/components/site-header";
import { isEnglishPath } from "@/components/locale-shell";

const GROUPS = [
  {
    title: "Comparer",
    links: [
      { href: "/formulaire-3eme-pilier/", label: "Formulaire comparatif" },
      { href: "/ouvrir-un-3eme-pilier/", label: "Ouvrir un 3e pilier" },
      { href: "/nous-contacter/", label: "Nous contacter" },
      { href: "/choisir-son-3eme-pilier/", label: "Comment choisir" },
      { href: "/analyse-de-prevoyance/", label: "Analyse de prévoyance" },
    ],
  },
  {
    title: "3e pilier",
    links: [
      { href: "/3eme-pilier-suisse/", label: "3e pilier Suisse" },
      { href: "/3eme-pilier-a-ou-b/", label: "3a ou 3b" },
      { href: "/exemple-de-comparatif/", label: "Exemple de comparatif" },
      { href: "/3eme-pilier-b-prevoyance-libre/", label: "Prévoyance libre 3b" },
      { href: "/3eme-pilier-banque-assurance/", label: "Banque ou assurance" },
      { href: "/3eme-pilier-logement/", label: "Logement" },
      { href: "/deductions-fiscales-3eme-pilier/", label: "Déductions 2026" },
      { href: "/3eme-pilier-mixte/", label: "Pilier mixte" },
    ],
  },
  {
    title: "Publics",
    links: [
      { href: "/frontalier-suisse/", label: "Frontaliers" },
      { href: "/3eme-pilier-geneve/", label: "Genève" },
      { href: "/epargne-enfant/", label: "Épargne enfant" },
      { href: "/assurance-vie-en-suisse/", label: "Assurance-vie" },
      { href: "/actualite-3eme-pilier/", label: "Actualités" },
      { href: "/methodologie-comparatif/", label: "Voir notre méthodologie" },
      { href: "/methode-sources-ofas-afc/", label: "Méthode OFAS / AFC" },
    ],
  },
  {
    title: "Piliers suisses",
    links: [
      { href: "/1er-pilier-avs-ai-apg/", label: "1er pilier AVS" },
      { href: "/2eme-pilier-lpp/", label: "2e pilier LPP" },
      { href: "/libre-passage-lpp/", label: "Libre passage" },
      { href: "/a-propos/", label: "À propos" },
      { href: "/mentions-legales/", label: "Mentions légales" },
      { href: "/page-de-confidentialitee/", label: "Confidentialité" },
    ],
  },
];

const EN_GROUPS = [
  {
    title: "Compare",
    links: [
      { href: "/en/formulaire-3eme-pilier/", label: "Comparison form" },
      { href: "/en/ouvrir-un-3eme-pilier/", label: "Open a third pillar" },
      { href: "/en/nous-contacter/", label: "Contact" },
      { href: "/en/choisir-son-3eme-pilier/", label: "How to choose" },
      { href: "/en/analyse-de-prevoyance/", label: "Pension review" },
    ],
  },
  {
    title: "Third pillar",
    links: [
      { href: "/en/3eme-pilier-suisse/", label: "Swiss third pillar" },
      { href: "/en/3eme-pilier-a-ou-b/", label: "Pillar 3a or 3b" },
      { href: "/en/exemple-de-comparatif/", label: "Sample comparison" },
      { href: "/en/3eme-pilier-b-prevoyance-libre/", label: "Flexible pillar 3b" },
      { href: "/en/3eme-pilier-banque-assurance/", label: "Bank or insurance" },
      { href: "/en/deductions-fiscales-3eme-pilier/", label: "2026 deductions" },
      { href: "/en/3eme-pilier-logement/", label: "Home ownership" },
      { href: "/en/3eme-pilier-mixte/", label: "Endowment policy" },
    ],
  },
  {
    title: "Readers",
    links: [
      { href: "/en/frontalier-suisse/", label: "Cross-border workers" },
      { href: "/en/3eme-pilier-geneve/", label: "Geneva" },
      { href: "/en/epargne-enfant/", label: "Saving for a child" },
      { href: "/en/assurance-vie-en-suisse/", label: "Life insurance" },
      { href: "/en/actualite-3eme-pilier/", label: "Guides" },
      { href: "/en/methodologie-comparatif/", label: "See our methodology" },
      { href: "/en/methode-sources-ofas-afc/", label: "FSIO / FTA sources" },
    ],
  },
  {
    title: "Swiss pillars",
    links: [
      { href: "/en/1er-pilier-avs-ai-apg/", label: "1st pillar, OASI" },
      { href: "/en/2eme-pilier-lpp/", label: "2nd pillar, BVG" },
      { href: "/en/libre-passage-lpp/", label: "Vested benefits" },
      { href: "/en/a-propos/", label: "About" },
      { href: "/en/mentions-legales/", label: "Legal notice" },
      { href: "/en/page-de-confidentialitee/", label: "Privacy" },
    ],
  },
];

export function SiteFooter() {
  const english = isEnglishPath(usePathname() || "/");
  const groups = english ? EN_GROUPS : GROUPS;
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#174462] to-[#0E3A57] text-white">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="1000,0 1440,0 1440,380" fill="#fff" fillOpacity=".04" />
        <polygon points="0,560 0,260 380,560" fill="#fff" fillOpacity=".03" />
      </svg>
      <div className="relative mx-auto w-full max-w-[1440px] px-12 pt-[72px] pb-8 max-[1100px]:px-4 max-[1100px]:pt-14">
        <div className="flex items-center justify-between gap-16 pb-16 max-[1100px]:flex-col max-[1100px]:items-stretch max-[1100px]:gap-6 max-[1100px]:pb-8">
          <div className="on-navy max-w-xl">
            <p className="mb-6 inline-flex rounded-full border border-white/60 px-4 py-2 text-[15px]">
              {english ? "French-speaking Switzerland · pillar 3a and 3b" : "Suisse romande · 3a et 3b"}
            </p>
            <h2 className="font-heading mb-5 text-5xl leading-[1.04] text-white uppercase max-[1100px]:text-[42px]">
              {english ? <>Request a <em>comparison</em></> : <>Recevoir un <em>comparatif</em></>}
            </h2>
            <p className="mb-7 text-[19px] leading-relaxed text-white/85">
              {english
                ? "Free, and without commitment. A service adviser calls back. No diploma or register is displayed: those facts are not established here."
                : "Sans honoraires, sans engagement. Un conseiller du service rappelle. Aucun diplôme ni registre n’est affiché : ces éléments ne sont pas établis ici."}
            </p>
          </div>
          <Link href={english ? "/en/formulaire-3eme-pilier/" : "/formulaire-3eme-pilier/"} className="btn-pill shrink-0 max-[1100px]:w-full">
            {english ? "Open the form" : "Demander un comparatif"}
            <Arrow />
          </Link>
        </div>
        <div className="h-px bg-white/16" />
        <div className="flex justify-between gap-16 pt-10 max-[1100px]:flex-col max-[1100px]:gap-8">
          <div className="flex max-w-md flex-col gap-4">
            <Link href={english ? "/en/" : "/"} className="flex items-center gap-2.5 text-xl font-semibold text-white">
              <BrandLockup size={28} />
            </Link>
            <p className="text-base leading-relaxed text-white/75">
              {english
                ? `General information for French-speaking Switzerland. Not a FinSA mandate. Editorial review on ${SITE.updated}.`
                : `Information générale pour la Suisse romande. Pas un mandat LSFin. Revue éditoriale du ${SITE.updated}.`}
            </p>
            <span className="self-start rounded-full bg-[#3FD9C4] px-3 py-1.5 text-[13px] font-semibold text-[#062B40]">
              {english ? "Free comparison · FSIO ceilings" : "Comparatif gratuit · Plafonds OFAS"}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-4 max-[1100px]:gap-x-6">
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <strong className="text-[13px] font-semibold tracking-[0.12em] text-[#7FE3D3] uppercase">
                  {group.title}
                </strong>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base text-white/85 hover:text-[#BFF3EA] max-[1100px]:text-[15px]">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <span className="mt-14 block text-[108px] leading-none font-semibold tracking-[-0.03em] whitespace-nowrap text-white/10 max-[1100px]:mt-8 max-[1100px]:text-[54px] max-[1100px]:whitespace-normal" aria-hidden="true">
          Comparateur <em className="font-normal text-[rgba(95,224,204,0.3)]">3e pilier</em>
        </span>
        <div className="flex justify-between pt-8 text-sm text-white/60 max-[1100px]:flex-col max-[1100px]:gap-1.5 max-[1100px]:text-[13px]">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>
            <Link href={english ? "/en/page-de-confidentialitee/" : "/page-de-confidentialitee/"} className="hover:text-[#BFF3EA]">
              {english ? "Privacy" : "Confidentialité"}
            </Link>
            {" · "}
            <a href="/llms.txt" className="hover:text-[#BFF3EA]">llms.txt</a>
            {" · "}
            <a href={`mailto:${SITE.email}`} className="hover:text-[#BFF3EA]">{SITE.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#062B40" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
