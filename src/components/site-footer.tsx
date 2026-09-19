import Link from "next/link";
import { SITE } from "@/lib/site";

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
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold">{group.title}</p>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — information générale, pas un conseil
            personnalisé. Revue du {SITE.updated}.
          </p>
          <p>
            <Link href="/page-de-confidentialitee/" className="hover:text-primary">
              Confidentialité
            </Link>
            {" · "}
            <a href={`mailto:${SITE.email}`} className="hover:text-primary">
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
