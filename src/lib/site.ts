export const SITE = {
  name: "Comparateur 3ème pilier",
  legalName: "Comparateur 3ème pilier",
  domain: "comparateur-3eme-pilier.ch",
  canonicalHost: "https://comparateur-3eme-pilier.ch",
  locale: "fr-CH",
  language: "fr",
  email: "info@comparateur-3eme-pilier.ch",
  description:
    "Comparez les solutions de 3e pilier adaptées à votre situation. Comparatif gratuit et sans engagement. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
  updated: "2026-09-20",
  foundingDate: "2021-10-04",
} as const;

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
