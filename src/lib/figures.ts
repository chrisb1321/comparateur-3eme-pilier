/** Chiffres officiels OFAS / AFC / Conseil fédéral. */

export const REVIEW_DATE = "2026-10-06";
export const REVIEW_LABEL = "6 octobre 2026";
export const YEAR_SPAN = "2026–2027";
export const YEAR_SPAN_WORDS = "2026 et 2027";

/** Art. 7 OPP 3, tableau OFAS au 1.1.2026. Inchangés vs 1.1.2025. */
const PILLAR_3A_2026 = {
  pillar3aWithLpp: 7258,
  pillar3aWithoutLpp: 36288,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7258,
} as const;

/**
 * Conseil fédéral, 2 octobre 2026 (OFAS) ; AFC, 5 octobre 2026.
 * En vigueur pour les versements crédités dès le 1er janvier 2027.
 */
const PILLAR_3A_2027 = {
  pillar3aWithLpp: 7373,
  pillar3aWithoutLpp: 36864,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7373,
} as const;

/** Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF 06.11.2025). */
const AVS_LPP_2026 = {
  avsMinMonthly: 1260,
  avsMaxMonthly: 2520,
  avsCoupleMaxMonthly: 3780,
  lppEntry: 22680,
  lppCoordination: 26460,
  lppSalaryCap: 90720,
  lppCoordinatedMin: 3780,
  lppCoordinatedMax: 64260,
} as const;

/**
 * Adaptation des rentes AVS/AI au 1.1.2027 (Conseil fédéral, 2 octobre 2026).
 * Couple : 150 % de la rente maximale. Plafond LPP : 3 × rente AVS maximale annuelle.
 */
const AVS_LPP_2027 = {
  avsMinMonthly: 1280,
  avsMaxMonthly: 2560,
  avsCoupleMaxMonthly: 3840,
  lppEntry: 23040,
  lppCoordination: 26880,
  lppSalaryCap: 92160,
  lppCoordinatedMin: 3840,
  lppCoordinatedMax: 65280,
} as const;

export const YEARS = {
  2026: {
    year: 2026,
    ofasTablePublished: true as const,
    status: "Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF, 6 novembre 2025).",
    ...PILLAR_3A_2026,
    ...AVS_LPP_2026,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
  2027: {
    year: 2027,
    ofasTablePublished: true as const,
    status:
      "Conseil fédéral, 2 octobre 2026 : plafonds 3a 7’373 / 36’864 dès le 1er janvier 2027. Communication AFC du 5 octobre 2026.",
    ...PILLAR_3A_2027,
    ...AVS_LPP_2027,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
} as const;

/** Année fiscale en cours au 6 octobre 2026 : les versements crédités en 2026 suivent encore 2026. */
export const FIGURES = {
  year: 2026,
  currentYear: 2026,
  nextYear: 2027,
  ...PILLAR_3A_2026,
  ...AVS_LPP_2026,
  buybackFirstYear: 2026,
  buybackGapFrom: 2025,
  depositGuarantee: 100000,
  ge3bSingle: 2232,
  ge3bMarried: 3348,
  ge3bPerChild: 913,
  fr3bSingle: 750,
  fr3bMarried: 1500,
  lifdSingle: 1700,
  lifdMarried: 3500,
} as const;

export const CEILING_NOTE =
  "Plafonds 2026 : CHF 7’258 / 36’288 (tableau OFAS au 1.1.2026). Plafonds 2027 : CHF 7’373 / 36’864 (Conseil fédéral, 2 octobre 2026, dès le 1er janvier 2027)";

export const PILLAR_3A_HISTORY = [
  {
    period: "2027",
    withLpp: PILLAR_3A_2027.pillar3aWithLpp,
    withoutLpp: PILLAR_3A_2027.pillar3aWithoutLpp,
    note: "Conseil fédéral, 2 octobre 2026, dès le 1.1.2027",
  },
  {
    period: "2026",
    withLpp: PILLAR_3A_2026.pillar3aWithLpp,
    withoutLpp: PILLAR_3A_2026.pillar3aWithoutLpp,
    note: "OFAS, montants au 1.1.2026",
  },
  {
    period: "2025",
    withLpp: PILLAR_3A_2026.pillar3aWithLpp,
    withoutLpp: PILLAR_3A_2026.pillar3aWithoutLpp,
    note: "OFAS, dès 2025",
  },
  { period: "2023–2024", withLpp: 7056, withoutLpp: 35280, note: "OFAS / OPP 3" },
  { period: "Jusqu’en 2022", withLpp: 6883, withoutLpp: 34416, note: "OFAS / OPP 3" },
] as const;

export const SOURCES = [
  {
    id: "cf-avs-2027",
    label: "Conseil fédéral / OFAS — Adaptation des rentes AVS/AI au 1er janvier 2027",
    href: "https://www.bsv.admin.ch/fr/newnsb/BqB41FVYi5FB",
    note: "Séance du 2 octobre 2026. 3a : 7’373 francs avec 2e pilier, 36’864 francs sans, dès le 1.1.2027. Rente AVS min. 1’280 / max. 2’560. Seuil LPP 23’040, déduction de coordination 26’880.",
  },
  {
    id: "afc-3a-2027",
    label: "AFC — Déductions maximales pilier 3a pour l’année fiscale 2027",
    href: "https://www.estv.admin.ch/fr/newnsb/6ck3kzVxBNQ4",
    note: "Communication du 5 octobre 2026 : 7’373 francs avec 2e pilier, 36’864 francs sans, en vigueur le 1er janvier 2027.",
  },
  {
    id: "ofas-3a",
    label: "OFAS — Le troisième pilier (art. 7 OPP 3)",
    href: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
    note: "Petite et grande cotisation, crédit au 31 décembre, rachats 3a dès l’année fiscale 2026 (lacune 2025). Plafonds 2027 : décision du Conseil fédéral du 2 octobre 2026.",
  },
  {
    id: "ofas-amounts-2026",
    label: "OFAS — Montants valables au 1er janvier 2026",
    href: "https://www.bsv.admin.ch/dam/fr/sd-web/sAgdISSXenMT/f_Betr%C3%A4ge%202026.pdf",
    note: "Rentes AVS min. 1’260 / max. 2’520 CHF par mois ; LPP seuil 22’680, déduction de coordination 26’460, limite supérieure 90’720 ; 3a 7’258 / 36’288. Aucun changement vs 1.1.2025.",
  },
  {
    id: "ofas-cotisation",
    label: "OFAS — Votre cotisation au 3e pilier",
    href: "https://www.bsv.admin.ch/fr/votre-cotisation-au-3e-pilier",
    note: "Maximum selon l’affiliation au 2e pilier, ou 20 % du revenu dans une limite absolue. Crédit au 31 décembre pour l’année fiscale.",
  },
  {
    id: "afc-circ-18a",
    label: "AFC — Circulaire 18a (imposition du pilier 3a, dès 2026)",
    href: "https://www.estv.admin.ch/dam/fr/sd-web/yQgKmvu80LEr/dbst-ks-2025-1-018a-dv-fr.pdf",
    note: "Sections 6.2 (échelonnement), 6.3 (transfert 3a → 2e pilier), 6.4 (exclusions EPL) et 7. Imposition du capital au retrait, virement direct 3a → LPP.",
  },
  {
    id: "afc-3b",
    label: "AFC — Assurances de capitaux susceptibles de rachat du pilier 3b",
    href: "https://www.estv.admin.ch/fr/assurances-de-capitaux-susceptibles-de-rachat-du-pilier-3b",
    note: "Fiscalité des assurances 3b au cas par cas ; ne pas assimiler toutes les formes de prévoyance libre.",
  },
  {
    id: "ofas-beneficiaires",
    label: "OFAS — Adaptation de l’OPP 3 (bénéficiaires, dès 1.6.2027)",
    href: "https://www.bsv.admin.ch/fr/newnsb/fFBgrSAIiYiGRg9YfWRfM",
    note: "Élargissement des possibilités de désignation des bénéficiaires 3a à partir du 1er juin 2027.",
  },
] as const;

export function chf(n: number): string {
  return new Intl.NumberFormat("fr-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0,
  }).format(n);
}

export function pillar3aTableRows(): string[][] {
  return PILLAR_3A_HISTORY.map((row) => [row.period, chf(row.withLpp), chf(row.withoutLpp)]);
}
