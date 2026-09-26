export const SITE = {
  name: "Comparateur 3ème pilier",
  legalName: "Comparateur 3ème pilier",
  domain: "comparateur-3eme-pilier.ch",
  canonicalHost: "https://comparateur-3eme-pilier.ch",
  locale: "fr-CH",
  language: "fr",
  email: "info@comparateur-3eme-pilier.ch",
  description:
    "Comparez les solutions de 3e pilier selon votre situation : 3a ou 3b, banque ou assurance. Échange gratuit avec Christophe Bouin, sans engagement.",
  updated: "2026-09-20",
  foundingDate: "2021-10-04",
} as const;

export const ADVISOR_NAME = "Christophe Bouin";

export const CTA_CALLBACK = "Être rappelé pour comparer mes options";

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
