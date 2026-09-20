import type { EditorialDoc, FaqItem } from "@/content/types";
import { SOURCES, YEAR_SPAN } from "@/lib/figures";
import { canonical, SITE } from "@/lib/site";
import type { SiteImage } from "@/lib/media";

export const ORG_ID = `${SITE.canonicalHost}/#organization`;
export const WEBSITE_ID = `${SITE.canonicalHost}/#website`;
export const AUTHOR_ID = `${SITE.canonicalHost}/#redaction`;

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: canonical("/"),
  email: SITE.email,
  foundingDate: SITE.foundingDate,
  areaServed: { "@type": "Country", name: "Switzerland" },
  availableLanguage: ["fr", "fr-CH"],
  knowsAbout: [
    "Pilier 3a",
    "Pilier 3b",
    "OPP 3",
    "Prévoyance Suisse",
    "OFAS",
    "AFC circulaire n° 18",
  ],
  publishingPrinciples: canonical("/methode-sources-ofas-afc/"),
  ethicsPolicy: canonical("/a-propos/"),
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer service",
    availableLanguage: "French",
    areaServed: "CH",
  },
};

export const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE.name,
  url: canonical("/"),
  inLanguage: "fr-CH",
  description: SITE.description,
  publisher: { "@id": ORG_ID },
  about: {
    "@type": "Thing",
    name: `3e pilier suisse ${YEAR_SPAN}`,
  },
};

export const AUTHOR_LD = {
  "@type": "Organization",
  "@id": AUTHOR_ID,
  name: "Rédaction Comparateur 3ème pilier",
  url: canonical("/a-propos/"),
  parentOrganization: { "@id": ORG_ID },
  publishingPrinciples: canonical("/methode-sources-ofas-afc/"),
};

const CITATIONS = SOURCES.map((source) => ({
  "@type": "CreativeWork",
  name: source.label,
  url: source.href,
}));

export function faqPageLd(faqs: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbLd(doc: EditorialDoc): Record<string, unknown> {
  const url = canonical(`/${doc.slug}/`);
  const mid =
    doc.kind === "post"
      ? { name: "Actualités 3e pilier", item: canonical("/actualite-3eme-pilier/") }
      : { name: "Guides", item: canonical("/deductions-fiscales-3eme-pilier/") };

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: mid.name, item: mid.item },
      { "@type": "ListItem", position: 3, name: doc.title, item: url },
    ],
  };
}

export function articleLd(doc: EditorialDoc, cover: SiteImage): Record<string, unknown> {
  const url = canonical(`/${doc.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    description: doc.description,
    datePublished: doc.published,
    dateModified: doc.updated,
    inLanguage: "fr-CH",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE.canonicalHost}${cover.src}`,
    author: AUTHOR_LD,
    publisher: { "@id": ORG_ID },
    citation: CITATIONS,
    about: [
      { "@type": "Thing", name: "Pilier 3a" },
      { "@type": "Thing", name: `Prévoyance suisse ${YEAR_SPAN}` },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#reponse-directe", "h1"],
    },
  };
}

export function webPageLd(doc: EditorialDoc, cover: SiteImage): Record<string, unknown> {
  const url = canonical(`/${doc.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: doc.metaTitle,
    headline: doc.title,
    description: doc.description,
    datePublished: doc.published,
    dateModified: doc.updated,
    inLanguage: "fr-CH",
    isAccessibleForFree: true,
    url,
    image: `${SITE.canonicalHost}${cover.src}`,
    author: AUTHOR_LD,
    publisher: { "@id": ORG_ID },
    citation: CITATIONS,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#reponse-directe", "h1"],
    },
  };
}

export function collectionPageLd(
  doc: EditorialDoc,
  parts: { slug: string; title: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: doc.title,
    description: doc.description,
    url: canonical("/actualite-3eme-pilier/"),
    inLanguage: "fr-CH",
    dateModified: doc.updated,
    isPartOf: { "@id": WEBSITE_ID },
    hasPart: parts.map((part) => ({
      "@type": "Article",
      headline: part.title,
      url: canonical(`/${part.slug}/`),
    })),
  };
}
