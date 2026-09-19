/** Chiffres officiels 2026. Sources OFAS / AFC, cités dans l’UI. */

export const FIGURES = {
  year: 2026,
  pillar3aWithLpp: 7258,
  pillar3aWithoutLpp: 36288,
  pillar3aWithoutLppRate: "20 %",
  buybackMax: 7258,
  buybackFirstYear: 2026,
  buybackGapFrom: 2025,
  avsMinMonthly: 1260,
  avsMaxMonthly: 2520,
  avsCoupleMaxMonthly: 3780,
  lppEntry: 22680,
  lppCoordination: 26460,
  lppSalaryCap: 90720,
  lppCoordinatedMin: 3780,
  lppCoordinatedMax: 64260,
  depositGuarantee: 100000,
  ge3bSingle: 2232,
  ge3bMarried: 3348,
  ge3bPerChild: 913,
  fr3bSingle: 750,
  fr3bMarried: 1500,
  lifdSingle: 1700,
  lifdMarried: 3500,
} as const;

export const SOURCES = [
  {
    id: "ofas-3a",
    label: "OFAS — Le troisième pilier (art. 7 OPP 3)",
    href: "https://www.bsv.admin.ch/fr/le-troisieme-pilier",
    note: "Petite cotisation CHF 7’258 et grande cotisation CHF 36’288 dès 2025, valables en 2026. Rachats 3a dès l’année fiscale 2026 (lacune 2025).",
  },
  {
    id: "ofas-amounts-2026",
    label: "OFAS — Montants valables au 1er janvier 2026",
    href: "https://www.bsv.admin.ch/dam/fr/sd-web/sAgdISSXenMT/f_Betr%C3%A4ge%202026.pdf",
    note: "Rentes AVS min. 1’260 / max. 2’520 CHF par mois ; LPP seuil 22’680, déduction de coordination 26’460, limite supérieure 90’720.",
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
