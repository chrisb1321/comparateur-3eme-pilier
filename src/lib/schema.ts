import type { EditorialDoc, FaqItem } from "@/content/types";
import { YEAR_SPAN } from "@/lib/figures";
import { calendarDay } from "@/lib/publication";
import { canonical, SITE } from "@/lib/site";
import type { SiteImage } from "@/lib/media";

export const ORG_ID = `${SITE.canonicalHost}/#organization`;
export const WEBSITE_ID = `${SITE.canonicalHost}/#website`;
export const AUTHOR_ID = `${SITE.canonicalHost}/#redaction`;
export const PERSON_ID = `${SITE.canonicalHost}/#christophe-bouin`;

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
    "AFC circulaire 18a",
  ],
  publishingPrinciples: canonical("/a-propos/"),
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

export const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Christophe Bouin",
  url: canonical("/a-propos/"),
  email: SITE.email,
  jobTitle: "Responsable du comparatif",
  worksFor: { "@id": ORG_ID },
  knowsAbout: ["Pilier 3a", "Pilier 3b", "Prévoyance suisse"],
};

export const AUTHOR_LD = {
  "@type": "Organization",
  "@id": AUTHOR_ID,
  name: "Rédaction Comparateur 3ème pilier",
  url: canonical("/a-propos/"),
  parentOrganization: { "@id": ORG_ID },
  publishingPrinciples: canonical("/a-propos/"),
};

export function howToLd(doc: EditorialDoc): Record<string, unknown> {
  const howTo = doc.howTo;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo?.name ?? doc.title,
    description: doc.description,
    inLanguage: "fr-CH",
    step: (howTo?.steps ?? []).map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

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
  const crumbs: { name: string; item: string }[] = [
    { name: "Accueil", item: canonical("/") },
  ];
  if (doc.kind === "post") {
    crumbs.push({
      name: "Actualités 3e pilier",
      item: canonical("/actualite-3eme-pilier/"),
    });
  }
  crumbs.push({ name: doc.title, item: url });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function articleLd(doc: EditorialDoc, cover: SiteImage): Record<string, unknown> {
  const url = canonical(`/${doc.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    description: doc.description,
    datePublished: calendarDay(doc.published),
    dateModified: calendarDay(doc.updated),
    inLanguage: "fr-CH",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE.canonicalHost}${cover.src}`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
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
    datePublished: calendarDay(doc.published),
    dateModified: calendarDay(doc.updated),
    inLanguage: "fr-CH",
    isAccessibleForFree: true,
    url,
    image: `${SITE.canonicalHost}${cover.src}`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
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
