import type { FaqItem } from "./types";

const OFAS_AMOUNTS_2026 =
  "https://www.bsv.admin.ch/dam/fr/sd-web/sAgdISSXenMT/f_Betr%C3%A4ge%202026.pdf";

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Le comparatif est-il gratuit ?",
    answer:
      "Oui. Le comparatif et l’échange avec le conseiller sont sans honoraires. Vous restez libre de ne rien souscrire.",
  },
  {
    question: "Le résultat est-il immédiat ?",
    answer: "Non. Christophe Bouin vous rappelle sous deux jours ouvrés.",
  },
  {
    question: "Banque ou assurance : que compare-t-on ?",
    answer:
      "La souplesse des versements, les frais, les conditions, l’horizon, et les prestations en cas de décès ou d’incapacité.",
  },
  {
    question: "Quel est le plafond 3a en 2026 ?",
    answer: `7’258 CHF avec un 2e pilier. Sans affiliation au 2e pilier, 20 % du revenu d’activité jusqu’à 36’288 CHF. Source OFAS, montants 2026 : ${OFAS_AMOUNTS_2026}`,
  },
  {
    question: "J’ai déjà un 3e pilier. Puis-je quand même comparer ?",
    answer:
      "Oui. Indiquez-le dans le formulaire, dans « Ce que vous souhaitez comparer ».",
  },
];

export const METHOD_NOTE =
  "Méthode : nous recoupons les textes officiels (OFAS, OPP 3, AFC) et les notices cantonales. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Les déductions 3b sont cantonales et partagent souvent l’enveloppe des primes d’assurance : un chiffre « maximum » n’est pas un crédit d’impôt automatique. Dernière revue éditoriale : 19 septembre 2026. Ceci n’est pas un conseil personnalisé.";
