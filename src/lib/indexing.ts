/**
 * Pages utiles après un formulaire ou pour d’anciens liens,
 * sans intention de recherche à indexer.
 */
export const NOINDEX_SLUGS = new Set([
  "page-remerciement",
  "declaration-impot-gratuite",
]);

/**
 * Archives qui visent la même intention qu’un guide déjà indexé.
 * Le canonical pointe vers le guide, et le sitemap ne liste que le guide.
 */
export const CANONICAL_ALIASES: Record<string, string> = {
  "choisir-entre-3eme-pilier-bancaire-ou-en-assurance": "3eme-pilier-banque-assurance",
  "ouvrir-un-3eme-pilier-pour-un-frontalier": "frontalier-suisse",
  "constituer-une-epargne-enfant": "epargne-enfant",
  "a-quoi-sert-le-deuxieme-pilier": "2eme-pilier-lpp",
  "quel-montant-deductible-3eme-pilier-2022": "plafonds-3a-2026-2027",
};

/** Anciennes URL : la cible dédiée remplace le repli dès sa date de publication. */
export const SCHEDULED_REDIRECTS = [
  {
    from: "/canton-vaud",
    to: "/3eme-pilier-canton-vaud/",
    published: "2026-10-03",
    fallback: "/",
  },
  {
    from: "/depart-de-suisse",
    to: "/depart-suisse-retrait-3a/",
    published: "2026-10-10",
    fallback: "/frontalier-suisse/",
  },
] as const;
