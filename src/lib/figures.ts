/** Chiffres officiels. 2026 : tableau OFAS. 2027 : communiqué du Conseil fédéral du 2 octobre 2026, pour le 3a seulement. */

export const REVIEW_DATE = "2026-10-06";
export const REVIEW_LABEL = "6 octobre 2026";

/** Année du calculateur et des plafonds « en cours » de versement. */
export const YEAR_SPAN = "2026";
export const YEAR_SPAN_WORDS = "2026";

export const COUNCIL_3A_2027_URL = "https://www.admin.ch/fr/newnsb/BqB41FVYi5FB";

/** Art. 7 OPP 3, tableau OFAS au 1er janvier 2026. */
const PILLAR_3A_2026 = {
  pillar3aWithLpp: 7258,
  pillar3aWithoutLpp: 36288,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7258,
} as const;

/** Conseil fédéral, 2 octobre 2026. Entrée en vigueur le 1er janvier 2027. Le taux de 20 % n’est pas modifié. */
const PILLAR_3A_NEXT = {
  pillar3aWithLpp: 7373,
  pillar3aWithoutLpp: 36864,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7373,
} as const;

/** Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF, 6 novembre 2025). */
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

export const NOTE_2027 = `Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : ${COUNCIL_3A_2027_URL}`;

export const NOTE_2027_EN = `From 1 January 2027 the Federal Council sets 7,373 francs with a 2nd pillar and 36,864 francs at most without one. The 20% rate is unchanged. Press release of 2 October 2026: ${COUNCIL_3A_2027_URL}`;

export const YEARS = {
  2026: {
    year: 2026,
    ofasTablePublished: true as const,
    status:
      "Tableau OFAS « Montants valables au 1er janvier 2026 » (PDF, 6 novembre 2025).",
    ...PILLAR_3A_2026,
    ...AVS_LPP_2026,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
  2027: {
    year: 2027,
    ofasTablePublished: false as const,
    status: NOTE_2027,
    ...PILLAR_3A_NEXT,
    buybackFirstYear: 2026,
    buybackGapFrom: 2025,
  },
} as const;

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

export const CEILING_NOTE = `Plafonds 3a 2026 (vérifiés le ${REVIEW_LABEL}) : ${new Intl.NumberFormat("fr-CH").format(PILLAR_3A_2026.pillar3aWithLpp)} CHF avec une institution du 2e pilier, et 20 % du revenu d’activité jusqu’à ${new Intl.NumberFormat("fr-CH").format(PILLAR_3A_2026.pillar3aWithoutLpp)} CHF sans. Source : OFAS, tableau au 1er janvier 2026, art. 7 OPP 3.`;

/** Série historique. 2026 reste l’année du calculateur. 2027 est le plafond publié pour l’année suivante. */
export const PILLAR_3A_HISTORY = [
  {
    period: "2027",
    withLpp: PILLAR_3A_NEXT.pillar3aWithLpp,
    withoutLpp: PILLAR_3A_NEXT.pillar3aWithoutLpp,
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
  { period: "2023–2024", withLpp: 7056, withoutLpp: 35280, note: "Historique OFAS / OPP 3" },
  { period: "Jusqu’en 2022", withLpp: 6883, withoutLpp: 34416, note: "Historique OFAS / OPP 3" },
] as const;

export const SOURCES = [
  {
    id: "ofas-3a",
    label: "OFAS — Le troisième pilier (art. 7 OPP 3)",
    href: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
    note: "Petite cotisation et grande cotisation. Les rachats 3a concernent les lacunes dès 2025, premier rachat possible en 2026.",
  },
  {
    id: "ofas-amounts-2026",
    label: "OFAS — Montants valables au 1er janvier 2026",
    href: "https://www.bsv.admin.ch/dam/fr/sd-web/sAgdISSXenMT/f_Betr%C3%A4ge%202026.pdf",
    note: `Rentes AVS, seuils LPP et plafonds 3a 2026. Dernière vérification éditoriale : ${REVIEW_LABEL}.`,
  },
  {
    id: "cf-3a-2027",
    label: "Conseil fédéral — déduction 3a au 1er janvier 2027",
    href: COUNCIL_3A_2027_URL,
    note: "Communiqué du 2 octobre 2026 : 7 373 CHF avec un 2e pilier, 36 864 CHF au maximum sans. Le taux de 20 % n’est pas modifié.",
  },
  {
    id: "ofas-cotisation",
    label: "OFAS — Votre cotisation au 3e pilier",
    href: "https://www.bsv.admin.ch/fr/votre-cotisation-au-3e-pilier",
    note: "Maximum avec 2e pilier, ou 20 % du revenu dans la limite sans 2e pilier. Le crédit compte au 31 décembre pour l’année fiscale.",
  },
  {
    id: "afc-circ-18a",
    label: "AFC — Circulaire 18a (imposition du pilier 3a)",
    href: "https://www.estv.admin.ch/dam/fr/sd-web/yQgKmvu80LEr/dbst-ks-2025-1-018a-dv-fr.pdf",
    note: "Imposition du capital au retrait, échelonnement, transfert vers le 2e pilier.",
  },
  {
    id: "afc-3b",
    label: "AFC — Assurances de capitaux susceptibles de rachat du pilier 3b",
    href: "https://www.estv.admin.ch/fr/assurances-de-capitaux-susceptibles-de-rachat-du-pilier-3b",
    note: "La prévoyance libre ne se résume pas à une seule fiscalité. Le sort d’une police se lit au contrat et au canton.",
  },
  {
    id: "ofas-beneficiaires",
    label: "OFAS — Adaptation de l’OPP 3 (bénéficiaires)",
    href: "https://www.bsv.admin.ch/fr/newnsb/fFBgrSAIiYiGRg9YfWRfM",
    note: "L’OFAS a annoncé un élargissement des désignations de bénéficiaires 3a à partir du 1er juin 2027. Le détail applicable se lit sur cette page, pas dans un chiffre de plafond.",
  },
  {
    id: "avs-ai",
    label: "Centre d’information AVS/AI",
    href: "https://www.ahv-iv.ch/fr/",
    note: "Rentes, 13e rente de vieillesse, âge de référence et génération transitoire.",
  },
] as const;

/** 20 % déjà décrit par pillar3aWithoutLppRate. Pas un nouveau barème. */
export const PILLAR_3A_WITHOUT_LPP_RATE = 0.2;

/**
 * Plafond 3a 2026. Avec 2e pilier : petite cotisation.
 * Sans : 20 % du revenu AVS, dans la limite de la grande cotisation.
 * Arrondi au franc le plus proche, jamais au-dessus du plafond.
 * Les montants 2027 n’entrent pas dans cette formule.
 */
export function pillar3aCeiling2026(withLpp: boolean, avsIncomeChf: number): number {
  if (withLpp) return PILLAR_3A_2026.pillar3aWithLpp;
  if (!Number.isFinite(avsIncomeChf) || avsIncomeChf <= 0) return 0;
  const raw = Math.round(avsIncomeChf * PILLAR_3A_WITHOUT_LPP_RATE);
  return Math.min(raw, PILLAR_3A_2026.pillar3aWithoutLpp);
}

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
