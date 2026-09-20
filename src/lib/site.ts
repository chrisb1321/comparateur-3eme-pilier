export const SITE = {
  name: "Comparateur 3ème pilier",
  legalName: "Comparateur 3ème pilier",
  domain: "comparateur-3eme-pilier.ch",
  canonicalHost: "https://comparateur-3eme-pilier.ch",
  locale: "fr-CH",
  language: "fr",
  email: "info@comparateur-3eme-pilier.ch",
  description:
    "Comparez les offres de 3e pilier 3a et 3b en Suisse romande. Plafonds 2026 et 2027 (OFAS / OPP 3), banque ou assurance, frontaliers. Comparatif gratuit, sans honoraires.",
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
