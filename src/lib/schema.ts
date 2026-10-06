import type { EditorialDoc, FaqItem } from "@/content/types";
import { AUTHOR_PERSON_LD } from "@/lib/editorial";
import { SOURCES } from "@/lib/figures";
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
    "AFC circulaire 18a",
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
    name: "3e pilier suisse",
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
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

const PILIER = { name: "3e pilier", href: "/3eme-pilier-suisse/" };
const FISCALITE = { name: "Fiscalité", href: "/deductions-fiscales-3eme-pilier/" };
const PREVOYANCE = { name: "Prévoyance", href: "/analyse-de-prevoyance/" };

const CLUSTER: Record<string, { name: string; href: string }[]> = {
  "3eme-pilier-suisse": [],
  "exemple-de-comparatif": [PILIER],
  "deductions-fiscales-3eme-pilier": [PILIER],
  "plafonds-3a-2026-2027": [PILIER, FISCALITE],
  "quel-montant-deductible-3eme-pilier-2022": [PILIER, FISCALITE],
  "3eme-pilier-a-impot-retrait": [PILIER, FISCALITE],
  "versement-3a-avant-31-decembre-2026": [PILIER, FISCALITE],
  "3eme-pilier-banque-assurance": [PILIER],
  "choisir-son-3eme-pilier": [PILIER],
  "choisir-entre-3eme-pilier-bancaire-ou-en-assurance": [PILIER],
  "frais-3a-banque-assurance": [PILIER],
  "choisir-support-3a-2026": [PILIER],
  "3eme-pilier-independant": [PILIER],
  "frontalier-suisse": [PILIER],
  "ouvrir-un-3eme-pilier-pour-un-frontalier": [PILIER],
  "frontalier-avs-3a-conditions": [PILIER],
  "3eme-pilier-geneve": [PILIER],
  "3eme-pilier-canton-vaud": [PILIER],
  "3a-impot-cantonal-geneve-2026": [PILIER],
  "assurance-vie-en-suisse": [PILIER],
  "3eme-pilier-mixte": [PILIER],
  "1er-pilier-avs-ai-apg": [PREVOYANCE],
  "2eme-pilier-lpp": [PREVOYANCE],
  "a-quoi-sert-le-deuxieme-pilier": [PREVOYANCE],
  "libre-passage-lpp": [PREVOYANCE],
  "compte-de-libre-passage-lpp": [PREVOYANCE],
  "analyse-de-prevoyance": [],
  "mentions-legales": [],
  "a-propos": [],
  "page-de-confidentialitee": [],
  "formulaire-3eme-pilier": [],
  "nous-contacter": [],
  "page-remerciement": [],
  "declaration-impot-gratuite": [],
  "actualite-3eme-pilier": [],
};

export function breadcrumbItems(doc: EditorialDoc): { name: string; href: string }[] {
  const mid =
    doc.parents !== undefined
      ? doc.parents
      : doc.slug in CLUSTER
        ? CLUSTER[doc.slug]
        : doc.kind === "post"
          ? [{ name: "Actualités", href: "/actualite-3eme-pilier/" }]
          : [PILIER];
  return [
    { name: "Accueil", href: "/" },
    ...mid,
    { name: doc.title, href: `/${doc.slug}/` },
  ];
}

export function breadcrumbLd(doc: EditorialDoc): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical(`/${doc.slug}/`)}#breadcrumb`,
    itemListElement: breadcrumbItems(doc).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.href),
    })),
  };
}

export function articleLd(doc: EditorialDoc, cover: SiteImage, locale: "fr" | "en" = "fr"): Record<string, unknown> {
  const url = canonical(locale === "en" ? `/en/${doc.slug}/` : `/${doc.slug}/`);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: doc.title,
    description: doc.description,
    datePublished: doc.published,
    dateModified: doc.updated,
    inLanguage: locale === "en" ? "en" : "fr-CH",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE.canonicalHost}${cover.src}`,
    author: AUTHOR_PERSON_LD,
    publisher: { "@id": ORG_ID },
    citation: CITATIONS,
    about: [
      { "@type": "Thing", name: "Pilier 3a" },
      { "@type": "Thing", name: "Prévoyance individuelle en Suisse" },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#reponse-directe", "h1"],
    },
  };
}

export function webPageLd(doc: EditorialDoc, cover: SiteImage, locale: "fr" | "en" = "fr"): Record<string, unknown> {
  const url = canonical(locale === "en" ? `/en/${doc.slug}/` : `/${doc.slug}/`);
  return {
    "@type": "WebPage",
    "@id": url,
    name: doc.metaTitle,
    headline: doc.title,
    description: doc.description,
    datePublished: doc.published,
    dateModified: doc.updated,
    inLanguage: locale === "en" ? "en" : "fr-CH",
    isAccessibleForFree: true,
    url,
    image: `${SITE.canonicalHost}${cover.src}`,
    author: AUTHOR_PERSON_LD,
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
  locale: "fr" | "en" = "fr",
): Record<string, unknown> {
  const prefix = locale === "en" ? "/en" : "";
  return {
    "@type": "CollectionPage",
    name: doc.title,
    description: doc.description,
    url: canonical(`${prefix}/actualite-3eme-pilier/`),
    inLanguage: locale === "en" ? "en" : "fr-CH",
    dateModified: doc.updated,
    isPartOf: { "@id": WEBSITE_ID },
    hasPart: parts.map((part) => ({
      "@type": "Article",
      headline: part.title,
      url: canonical(`${prefix}/${part.slug}/`),
    })),
  };
}
