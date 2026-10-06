import { canonical, SITE } from "@/lib/site";

/**
 * Faits publiés sur le site (à propos et mentions, relevés le 3 octobre 2026).
 * Portrait, diplômes, années d’expérience, adresse, UID et statut FINMA
 * sont absents du dépôt : ne pas les inventer.
 */
export const AUTHOR = {
  name: "Christophe Bouin",
  role: "Responsable du contenu et du comparatif",
  href: "/christophe-bouin/",
  email: SITE.email,
} as const;

export const AUTHOR_GAPS = [
  "Portrait vérifié",
  "Qualifications et années d’expérience",
  "Statut d’intermédiaire et éventuelle inscription FINMA",
  "TODO — Diplôme AFA annoncé sur le site historique — non vérifié. Ne plus l’afficher tant qu’une preuve n’est pas au dossier.",
] as const;

export const LEGAL = {
  LEGAL_ENTITY_NAME: "TODO — raison sociale non établie dans le dépôt",
  LEGAL_ADDRESS: "TODO — adresse non établie dans le dépôt",
  LEGAL_UID: "TODO — UID non établi dans le dépôt. Ne pas en inventer.",
  LEGAL_RESPONSIBLE_PERSON: AUTHOR.name,
  LEGAL_INTERMEDIARY_STATUS:
    "TODO — aucun statut d’intermédiaire ni inscription FINMA n’est documenté. Ne pas en affirmer.",
  LEGAL_REGISTER_URL: "TODO — URL de registre non établie dans le dépôt",
  LEGAL_CONTACT: SITE.email,
  LEGAL_COMPENSATION_DISCLOSURE:
    "TODO — le comparatif est présenté comme gratuit et sans engagement. La rémunération éventuelle par des partenaires n’est pas documentée : validation humaine requise.",
} as const;

export const AUTHOR_PERSON_LD = {
  "@type": "Person",
  "@id": `${SITE.canonicalHost}/#christophe-bouin`,
  name: AUTHOR.name,
  jobTitle: AUTHOR.role,
  url: canonical(AUTHOR.href),
  email: AUTHOR.email,
  worksFor: { "@id": `${SITE.canonicalHost}/#organization` },
};
