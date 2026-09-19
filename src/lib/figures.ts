/** Chiffres officiels OFAS / AFC. Ne pas anticiper une hausse 2027 non publiée. */

export const REVIEW_DATE = "2026-09-19";
export const REVIEW_LABEL = "19 septembre 2026";
export const YEAR_SPAN = "2026–2027";
export const YEAR_SPAN_WORDS = "2026 et 2027";

/** Art. 7 OPP 3, « dès 2025 » — encore le droit en vigueur au 19.09.2026. */
const OPP3_IN_FORCE = {
  pillar3aWithLpp: 7258,
  pillar3aWithoutLpp: 36288,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7258,
} as const;

/** Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF 06.11.2025). Inchangés vs 1.1.2025. */
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

export const YEARS = {
  2026: {
    year: 2026,
    ofasTablePublished: true as const,
    status:
      "Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF, 6 novembre 2025).",
    ...OPP3_IN_FORCE,
    ...AVS_LPP_2026,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
  2027: {
    year: 2027,
    ofasTablePublished: false as const,
    status:
      "Pas de tableau OFAS au 1.1.2027 au 19 septembre 2026. Plafonds 3a encore ceux de l’art. 7 OPP 3 (« dès 2025 »), identiques à 2026. Annonce usuelle en octobre, avec l’éventuelle adaptation des rentes AVS.",
    ...OPP3_IN_FORCE,
    ...AVS_LPP_2026,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
} as const;

export const FIGURES = {
  year: 2026,
  currentYear: 2026,
  nextYear: 2027,
  ...OPP3_IN_FORCE,
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
  "2026 : tableau OFAS du 1er janvier 2026. 2027 : mêmes plafonds encore en vigueur (art. 7 OPP 3, « dès 2025 ») ; le tableau OFAS des montants au 1.1.2027 n’était pas publié au 19 septembre 2026 (annonce usuelle en octobre).";

export const PILLAR_3A_HISTORY = [
  {
    period: "2027",
    withLpp: OPP3_IN_FORCE.pillar3aWithLpp,
    withoutLpp: OPP3_IN_FORCE.pillar3aWithoutLpp,
    note: "OPP 3 en vigueur ; tableau OFAS 2027 non publié au 19.09.2026",
  },
  {
    period: "2026",
    withLpp: OPP3_IN_FORCE.pillar3aWithLpp,
    withoutLpp: OPP3_IN_FORCE.pillar3aWithoutLpp,
    note: "OFAS, montants au 1.1.2026",
  },
  {
    period: "2025",
    withLpp: OPP3_IN_FORCE.pillar3aWithLpp,
    withoutLpp: OPP3_IN_FORCE.pillar3aWithoutLpp,
    note: "OFAS, dès 2025",
  },
  { period: "2023–2024", withLpp: 7056, withoutLpp: 35280, note: "OFAS / OPP 3" },
  { period: "Jusqu’en 2022", withLpp: 6883, withoutLpp: 34416, note: "OFAS / OPP 3" },
] as const;

export const SOURCES = [
  {
    id: "ofas-3a",
    label: "OFAS — Le troisième pilier (art. 7 OPP 3)",
    href: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
    note: "Petite cotisation CHF 7’258 et grande cotisation CHF 36’288 dès 2025, encore en vigueur pour 2026 et, au 19.09.2026, pour 2027. Rachats 3a dès l’année fiscale 2026 (lacune 2025).",
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
    note: "Maximum 7’258 francs (affilié 2e pilier) ou 20 % du revenu, max. 36’288 francs (sans 2e pilier). Crédit au 31 décembre pour l’année fiscale.",
  },
  {
    id: "afc-circ-18",
    label: "AFC — Circulaire n° 18 (imposition du pilier 3a)",
    href: "https://www.estv.admin.ch",
    note: "Personnes autorisées, déductibilité fédérale et cantonale des cotisations 3a, imposition du capital au retrait.",
  },
  {
    id: "avs-13",
    label: "Centre d’information AVS/AI — 13e rente AVS",
    href: "https://www.ahv-iv.ch/fr/Assurances-sociales/Assurance-vieillesse-et-survivants-AVS/13e-rente-AVS",
    note: "Premier versement de la 13e rente de vieillesse en décembre 2026.",
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
