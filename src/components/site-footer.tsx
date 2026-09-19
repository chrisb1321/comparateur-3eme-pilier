import Link from "next/link";
import { SITE } from "@/lib/site";
import { IMAGES } from "@/lib/media";
import { Frame } from "@/components/frame";

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
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_2fr] md:px-6">
        <div>
          <p className="font-heading text-3xl">Comparateur</p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-accent">
            3ème pilier · Genève · Léman
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Information générale pour la Suisse romande. Pas un mandat LSFin. Revue éditoriale du{" "}
            {SITE.updated}.
          </p>
          <div className="mt-6 hidden max-w-xs md:block">
            <Frame image={IMAGES.laiton} sizes="280px" rounded={false} />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-accent">{group.title}</p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline opacity-60" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p>
          <Link href="/page-de-confidentialitee/" className="hover:text-accent">
            Confidentialité
          </Link>
          {" · "}
          <a href={`mailto:${SITE.email}`} className="hover:text-accent">
            {SITE.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
