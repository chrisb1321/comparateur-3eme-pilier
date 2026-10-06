export const SITE = {
  name: "Comparateur 3ème pilier",
  legalName: "Comparateur 3ème pilier",
  domain: "comparateur-3eme-pilier.ch",
  canonicalHost: "https://comparateur-3eme-pilier.ch",
  locale: "fr-CH",
  language: "fr",
  email: "info@comparateur-3eme-pilier.ch",
  description:
    "Comparez le 3e pilier en Suisse : 3a ou 3b, en banque ou en assurance. Montant maximum 2027 : 7’373 CHF avec LPP, 36’864 CHF sans. En 2026 : 7’258 / 36’288 CHF. Comparatif sans honoraires.",
  updated: "2026-09-20",
  foundingDate: "2021-10-04",
} as const;

export const ADVISOR_NAME = "Christophe Bouin";

export const CTA_CALLBACK = "Comparer mes options";

export const CTA_MENU = "Comparer mes options";

export function canonical(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${SITE.canonicalHost}/`;
  return `${SITE.canonicalHost}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

export const CANTONS = [
  "Genève",
  "Vaud",
  "Valais",
  "Fribourg",
  "Neuchâtel",
  "Jura",
  "Berne",
  "Tessin",
  "Zurich",
  "Autre canton",
  "Frontalier (domicile UE)",
] as const;
