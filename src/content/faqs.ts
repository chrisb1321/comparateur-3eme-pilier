import { chf, FIGURES } from "@/lib/figures";
import type { FaqItem } from "./types";

export const HOME_FAQS: FaqItem[] = [
  {
    question: "Quel est le montant maximum du 3e pilier A en 2026 ?",
    answer: `En 2026, la petite cotisation (affilié à une institution du 2e pilier) est de ${chf(FIGURES.pillar3aWithLpp)} par an. Sans affiliation au 2e pilier, la grande cotisation atteint 20 % du revenu de l’activité lucrative, plafonnée à ${chf(FIGURES.pillar3aWithoutLpp)}. Ces montants sont fixés par l’OFAS (art. 7 OPP 3) et valent pour l’ensemble des comptes 3a.`,
  },
  {
    question: "Peut-on racheter des années manquantes de 3a ?",
    answer: `Oui, depuis l’année fiscale ${FIGURES.buybackFirstYear}. Le premier rachat possible concerne une lacune de ${FIGURES.buybackGapFrom}, dans la limite de la petite cotisation (${chf(FIGURES.buybackMax)} en 2026), en plus de la cotisation ordinaire de l’année du rachat. Il faut un revenu soumis à l’AVS en Suisse pour l’année de lacune et pour l’année du rachat, et avoir versé le maximum ordinaire de l’année en cours. Source : OFAS.`,
  },
  {
    question: "Quelle est la différence entre le 3a et le 3b ?",
    answer:
      "Le 3a (prévoyance liée) est déductible du revenu dans tous les cantons, mais le capital est bloqué (retraite, logement, départ de Suisse, indépendance, invalidité). Le 3b (prévoyance libre) est plus souple sur les bénéficiaires et les retraits ; la déduction n’existe pas au fédéral et seulement, de façon limitée, dans certains cantons (notamment Genève et Fribourg, enveloppe des primes d’assurance-vie).",
  },
  {
    question: "Banque ou assurance : que choisir ?",
    answer:
      "La fiscalité 3a est identique. La banque est plus flexible (versements libres, sortie plus simple) mais sans garanties d’assurance. L’assurance lie souvent un capital, un décès, parfois une libération des primes ; elle est surtout pertinente sur un horizon long (souvent 8 à 10 ans et plus). Le bon choix dépend de votre budget, de votre famille et de votre horizon — pas d’un classement unique.",
  },
  {
    question: "Un frontalier peut-il ouvrir un 3e pilier ?",
    answer:
      "Oui pour le 3a, si le revenu suisse est soumis à l’AVS. Le 3b est ouvert plus largement. L’intérêt fiscal dépend du canton d’imposition, du permis et d’une éventuelle taxation ordinaire ultérieure (TOU). Le départ définitif de Suisse est un motif de retrait anticipé du 3a.",
  },
  {
    question: "Le comparatif est-il payant ?",
    answer:
      "Non. Le service est annoncé sans honoraires et sans engagement. Vous recevez un comparatif d’offres après avoir décrit votre situation. Vous restez libre de ne rien souscrire.",
  },
];

export const METHOD_NOTE =
  "Méthode : nous recoupons les textes officiels (OFAS, OPP 3, AFC) et les notices cantonales. Les plafonds 3a 2026 sont nationaux. Les déductions 3b sont cantonales et partagent souvent l’enveloppe des primes d’assurance : un chiffre « maximum » n’est pas un crédit d’impôt automatique. Dernière revue éditoriale : 19 septembre 2026. Ceci n’est pas un conseil personnalisé.";
