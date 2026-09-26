import Link from "next/link";
import { SITE } from "@/lib/site";
import { BrandLockup } from "@/components/site-header";

const GROUPS = [
  {
    title: "Comparer",
    links: [
      { href: "/formulaire-3eme-pilier/", label: "Formulaire comparatif" },
      { href: "/nous-contacter/", label: "Nous contacter" },
      { href: "/choisir-son-3eme-pilier/", label: "Comment choisir" },
      { href: "/analyse-de-prevoyance/", label: "Analyse de prévoyance" },
    ],
  },
  {
    title: "3e pilier",
    links: [
      { href: "/3eme-pilier-a-ou-b/", label: "3a ou 3b" },
      { href: "/3eme-pilier-b-prevoyance-libre/", label: "Prévoyance libre 3b" },
      { href: "/3eme-pilier-banque-assurance/", label: "Banque ou assurance" },
      { href: "/deductions-fiscales-3eme-pilier/", label: "Déductions 2026–2027" },
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
      { href: "/exemple-de-comparatif/", label: "Exemple de comparatif" },
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

export function SiteFooter() {
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
              Suisse romande · 3a et 3b
            </p>
            <h2 className="font-heading mb-5 text-5xl leading-[1.04] text-white uppercase max-[1100px]:text-[42px]">
              Demander mon <em>comparatif</em>
            </h2>
            <p className="mb-7 text-[19px] leading-relaxed text-white/85">
              Comparatif gratuit et sans engagement. Un conseiller vous rappelle sous deux jours ouvrés.
            </p>
          </div>
          <Link href="/formulaire-3eme-pilier/" className="btn-pill shrink-0 max-[1100px]:w-full">
            Demander mon comparatif gratuit
            <Arrow />
          </Link>
        </div>
        <div className="h-px bg-white/16" />
        <div className="flex justify-between gap-16 pt-10 max-[1100px]:flex-col max-[1100px]:gap-8">
          <div className="flex max-w-md flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-xl font-semibold text-white">
              <BrandLockup size={28} />
            </Link>
            <p className="text-base leading-relaxed text-white/75">
              Information générale pour la Suisse romande. Pas un mandat LSFin. Revue éditoriale du {SITE.updated}.
            </p>
            <span className="self-start rounded-full bg-[#3FD9C4] px-3 py-1.5 text-[13px] font-semibold text-[#062B40]">
              Comparatif gratuit · Plafonds OFAS
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-4 max-[1100px]:gap-x-6">
            {GROUPS.map((group) => (
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
            <Link href="/page-de-confidentialitee/" className="hover:text-[#BFF3EA]">Confidentialité</Link>
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
