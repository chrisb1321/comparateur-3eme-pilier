import { chf, FIGURES, pillar3aTableRows, YEAR_SPAN, YEAR_SPAN_WORDS, CEILING_NOTE } from "@/lib/figures";
import type { EditorialDoc } from "./types";

const UPDATED = "2026-09-20";

export const POSTS: EditorialDoc[] = [
  {
    kind: "post",
    slug: "choisir-entre-3eme-pilier-bancaire-ou-en-assurance",
    wpId: 2707,
    title: "Choisir entre 3e pilier bancaire ou en assurance",
    metaTitle: `Banque ou assurance pour son 3e pilier ? (${YEAR_SPAN})`,
    description:
      `Même fiscalité 3a, supports différents. Horizon court : banque. Garanties et discipline : assurance. Article mis à jour ${YEAR_SPAN}.`,
    published: "2023-09-06",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      `Le 3a se souscrit auprès d’une fondation bancaire ou d’un assureur. La déduction ${YEAR_SPAN_WORDS} ne change pas. Ce qui change, c’est ce qu’il reste si vous arrêtez, et ce qui est versé si vous disparaissez.`,
    related: [
      "3eme-pilier-banque-assurance",
      "frais-3a-banque-assurance",
      "liberation-du-paiement-des-primes",
    ],
    faqs: [
      {
        question: "La déduction 3a est-elle plus haute en assurance ?",
        answer: `Non. En ${YEAR_SPAN_WORDS} le plafond OFAS est ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}, quel que soit le prestataire. Ce qui change : frais, valeur de rachat, capital décès.`,
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Les motifs de retrait 3a (logement, départ de Suisse, retraite, indépendance, invalidité) sont les mêmes. Conservez une épargne de précaution hors 3a : le verrou OPP 3 n’est pas un livret.",
      },
      { type: "h2", text: "Banque" },
      {
        type: "p",
        text: "Versements libres jusqu’au plafond. Adapté à un horizon plus court (souvent moins de 8 à 10 ans) et à une capacité d’épargne irrégulière. Pas de capital décès intégré. Les titres 3a font varier le capital : ce n’est pas un dépôt à vue.",
      },
      { type: "h2", text: "Assurance" },
      {
        type: "p",
        text: "Primes, garanties, frais d’acquisition en début de contrat. Une interruption précoce produit souvent une valeur de rachat inférieure aux primes. En contrepartie : capital, décès, parfois libération des primes. Utile si vous voulez cette discipline et cette protection, pas « parce que c’est le 3e pilier ».",
      },
    ],
  },
  {
    kind: "post",
    slug: "taxation-ordinaire-ulterieure",
    wpId: 5881,
    title: "La taxation ordinaire ultérieure (TOU)",
    metaTitle: `TOU et 3e pilier ${YEAR_SPAN} : frontaliers et impôt à la source`,
    description:
      `Quand l’impôt à la source devient une taxation ordinaire, la déduction 3a peut enfin apparaître. Points de vigilance ${YEAR_SPAN}, circulaire AFC n° 18.`,
    published: "2022-10-24",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "La TOU remplace, dans les cas prévus par le canton, le barème à la source par une taxation comparable à celle d’un résident. C’est souvent là que le 3a devient visible sur la déclaration.",
    related: ["frontalier-suisse", "tou-impot-source-3a", "ouvrir-un-3eme-pilier-pour-un-frontalier"],
    faqs: [
      {
        question: "La TOU est-elle automatique pour un frontalier ?",
        answer:
          "Non. Elle dépend du canton, du revenu et du patrimoine suisse. Sans attestation 3a datée, une TOU n’a rien à déduire. Complément : /tou-impot-source-3a/.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Les seuils (revenu, fortune, demandes) varient selon le canton. Conservez l’attestation 3a de l’institution : sans pièce, pas de déduction. Un versement après le 31 décembre ne rattrape pas l’année fiscale, même si la TOU arrive plus tard.",
      },
      {
        type: "callout",
        title: "Pas un conseil fiscal personnalisé",
        text: "La TOU est technique. Faites valider votre cas par un fiduciaire ou l’office cantonal avant d’ouvrir une police longue « pour la TOU ».",
      },
    ],
  },
  {
    kind: "post",
    slug: "3eme-pilier-a-impot-retrait",
    wpId: 5875,
    title: "L’impôt lors du retrait d’un 3e pilier A",
    metaTitle: `Impôt au retrait du 3a ${YEAR_SPAN} : capital, canton, échelonnement`,
    description:
      `Le 3a est déductible à l’entrée et imposé à la sortie, séparément du reste du revenu. Logique ${YEAR_SPAN}, sans HTML cassé.`,
    published: "2022-10-16",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "Pendant la durée, le 3a n’est pas dans la fortune imposable. Au versement, le capital est imposé à part, à un taux réduit qui dépend du canton, du montant et de votre situation de famille. Ce n’est pas « net d’impôt ».",
    related: ["deductions-fiscales-3eme-pilier", "quel-montant-deductible-3eme-pilier-2022", "depart-suisse-retrait-3a"],
    faqs: [
      {
        question: "Le capital 3a est-il net d’impôt à la sortie ?",
        answer:
          "Non. Pendant la durée, le 3a n’est pas dans la fortune imposable. Au versement, le capital est imposé à part, à un taux réduit qui dépend du canton, du montant et de la situation de famille.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Plusieurs comptes 3a permettent d’échelonner les retraits sur plusieurs années fiscales, ce qui peut baisser la progression. L’échelonnement a des limites (âge, motifs, pratiques cantonales). Un retrait unique d’un gros capital coûte souvent plus cher qu’une sortie planifiée.",
      },
      {
        type: "p",
        text: "L’ancienne page WordPress avait fuité un commentaire HTML dans un extrait Google. Cette version est du HTML propre, sans builder.",
      },
    ],
  },
  {
    kind: "post",
    slug: "quel-montant-deductible-3eme-pilier-2022",
    wpId: 3089,
    title: "Le montant du 3e pilier : le plafond de 2022 et celui de 2026",
    metaTitle: "Plafond 3a : 6'883 francs en 2022, montant 2026 à jour",
    description:
      "L’article historique « montant 2022 » est conservé : 6'883 francs alors. Le plafond chiffré actuel est celui de 2026. Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB.",
    published: "2021-12-12",
    updated: UPDATED,
    category: "prevoyance",
    intro: `En 2022, la petite cotisation 3a était de 6'883 francs et la grande de 34'416 francs. Ces montants sont historiques. En 2026 : ${chf(FIGURES.pillar3aWithLpp)} et ${chf(FIGURES.pillar3aWithoutLpp)}. ${CEILING_NOTE}`,
    related: ["deductions-fiscales-3eme-pilier", "plafonds-3a-2026-2027", "rachat-lacunes-3a-2026"],
    faqs: [
      {
        question: "Pourquoi ce slug parle-t-il encore de 2022 ?",
        answer: `Parce que l’URL est indexée. Les 6'883 et 34'416 francs décrivent 2022 : c’est l’histoire. Le plafond chiffré sur cette page pour l’année en cours est celui de 2026. Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB.`,
      },
    ],
    blocks: [
      {
        type: "table",
        caption: `Art. 7 OPP 3, série OFAS. ${CEILING_NOTE}`,
        headers: ["Période", "Avec 2e pilier", "Sans 2e pilier (max.)"],
        rows: pillar3aTableRows(),
      },
      {
        type: "p",
        text: `Depuis 2026 : rachat possible d’une lacune apparue dès 2025, jusqu’à ${chf(FIGURES.buybackMax)}, sous conditions OFAS. La petite cotisation 2027, pour un rachat imputé à 2027, est 7 373 CHF. Détail sur la page déductions fiscales.`,
      },
    ],
  },
  {
    kind: "post",
    slug: "a-quoi-sert-le-deuxieme-pilier",
    wpId: 2829,
    title: "À quoi sert le deuxième pilier ?",
    metaTitle: `À quoi sert le 2e pilier LPP ${YEAR_SPAN} ?`,
    description:
      `Le 2e pilier complète l’AVS par capitalisation. Seuils du tableau OFAS au 1er janvier 2026. Cette page ne recopie pas de seuils 2027.`,
    published: "2021-12-07",
    updated: UPDATED,
    category: "prevoyance",
    intro: `Le 2e pilier (LPP) est alimenté par l’employeur et le salarié. Selon le tableau OFAS au 1er janvier 2026, l’affiliation obligatoire commence à ${chf(FIGURES.lppEntry)} de salaire annuel chez le même employeur. Cette page ne recopie pas de seuils 2027.`,
    related: ["2eme-pilier-lpp", "libre-passage-lpp", "tableau-ofas-montants-avs-lpp-3a"],
    blocks: [
      {
        type: "p",
        text: "Il sert la retraite, l’invalidité et les survivants, dans le cadre du plan de la caisse (obligatoire et surobligatoire). Lire le certificat une fois par an évite de « découvrir » un trou à 58 ans. Le 3a complète ; il ne répare pas un plan LPP mal compris.",
      },
    ],
  },
  {
    kind: "post",
    slug: "ouvrir-un-3eme-pilier-pour-un-frontalier",
    wpId: 2822,
    title: "Ouvrir un 3e pilier pour un frontalier",
    metaTitle: `Frontalier : ouvrir un 3a en ${YEAR_SPAN}`,
    description:
      "Revenu AVS suisse, impôt à la source, TOU, départ. Article frère de la landing frontalier.",
    published: "2021-12-07",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "Oui, un frontalier soumis à l’AVS suisse peut ouvrir un 3a. Le 3b reste possible plus largement, avec une fiscalité à juger dans l’État de résidence autant qu’en Suisse.",
    related: ["frontalier-suisse", "frontalier-avs-3a-conditions", "taxation-ordinaire-ulterieure"],
    faqs: [
      {
        question: "Un frontalier sans AVS suisse peut-il ouvrir un 3a ?",
        answer:
          "En principe non. L’accès 3a suit l’assujettissement AVS (circulaire AFC n° 18). Le 3b peut rester ouvert. Détail : /frontalier-avs-3a-conditions/.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Pièges : croire qu’un achat immobilier en France débloque le 3a (EPL = logement pour propres besoins, cadre suisse), signer une police de 20 ans sans scénario de départ, oublier l’attestation pour la TOU. La landing /frontalier-suisse/ détaille le cadre 2026–2027.",
      },
    ],
  },
  {
    kind: "post",
    slug: "quand-commencer-le-3eme-pilier",
    wpId: 2782,
    title: "Quand commencer son 3e pilier ?",
    metaTitle: `Quand commencer le 3e pilier ${YEAR_SPAN} ? Dès un revenu AVS`,
    description:
      "Chaque année civile sans 3a est une déduction perdue — avec une nuance depuis 2026 : le rachat des lacunes depuis 2025.",
    published: "2021-12-06",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "On peut alimenter un 3a dès qu’on a un revenu d’activité soumis à l’AVS. Plus tôt n’est pas toujours « le maximum légal » : c’est d’abord un montant que vous tiendrez.",
    related: ["pourquoi-souscrire-au-3eme-pilier", "deductions-fiscales-3eme-pilier", "rachat-lacunes-3a-2026"],
    blocks: [
      {
        type: "p",
        text: `Les textes WordPress affirmaient qu’on ne pouvait jamais racheter une année manquante. C’était vrai jusqu’aux lacunes 2024. Dès 2026, un rachat de lacune 2025 est possible (petite cotisation, ${chf(FIGURES.buybackMax)}), sous conditions OFAS. Les années antérieures à 2025 restent perdues. Ne tardez pas pour autant : le rachat n’est pas un droit automatique.`,
      },
    ],
  },
  {
    kind: "post",
    slug: "pourquoi-souscrire-au-3eme-pilier",
    wpId: 2758,
    title: "Pourquoi souscrire au 3e pilier ?",
    metaTitle: `Pourquoi un 3e pilier en ${YEAR_SPAN} ?`,
    description:
      "Trou de retraite, impôt, famille, logement. Les vraies raisons, sans slogan 2024 recyclé.",
    published: "2021-12-06",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "Le 3e pilier existe pour maintenir le niveau de vie lorsque l’AVS et la LPP ne suffisent pas. La déduction est l’incitation, pas le but unique.",
    related: ["choisir-son-3eme-pilier", "analyse-de-prevoyance"],
    blocks: [
      {
        type: "ul",
        items: [
          "Combler l’écart de rentes (surtout après une carrière incomplète ou à temps partiel).",
          `Réduire le revenu imposable, jusqu’à ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}.`,
          "Protéger la famille (police, clause bénéficiaire).",
          "Préparer un logement : [retrait ou nantissement](/3eme-pilier-logement/).",
          "Épargner pour un enfant via le [guide épargne enfant](/epargne-enfant/), pas via un 3a au nom d’un mineur sans revenu.",
        ],
      },
    ],
  },
  {
    kind: "post",
    slug: "choisir-les-beneficiaires",
    wpId: 2719,
    title: "Choisir les bénéficiaires du 3e pilier en cas de décès",
    metaTitle: `Bénéficiaires du 3a et du 3b ${YEAR_SPAN} en cas de décès`,
    description:
      "Ordre légal du 3a vs liberté du 3b. Conjoint, concubin, enfants, associé.",
    published: "2021-12-06",
    updated: UPDATED,
    category: "prevoyance",
    intro:
      "Au décès, le 3a ne se comporte pas comme un compte joint. L’ordre des bénéficiaires est fixé par l’OPP 3. Le 3b est plus libre — c’est parfois sa seule raison d’être. Un communiqué OFAS du 12 juin 2026 annonce plus de souplesse à partir du 1er juin 2027 : cette page cite l’annonce, elle ne rédige pas la future ordonnance.",
    brief: [
      "Le 3a suit l’ordre de l’OPP 3 décrit ci-dessous. On précise un groupe, on n’invente pas un ordre contraire.",
      "Le 3b laisse plus de liberté sur la clause.",
      "Dès le 1er juin 2027, l’OFAS annonce un élargissement. Le texte applicable est le communiqué, pas un résumé inventé.",
    ],
    related: ["3eme-pilier-a-ou-b", "assurance-deces", "3eme-pilier-suisse"],
    faqs: [
      {
        question: "Un concubin est-il automatiquement bénéficiaire du 3a ?",
        answer:
          "Pas au bout de quatre ans. Le rang décrit ici vise une communauté de vie d’au moins cinq ans, ou des enfants communs, dans le groupe prévu. La clause se dépose auprès de la fondation.",
      },
      {
        question: "L’ordre des bénéficiaires change-t-il en 2027 ?",
        answer:
          "Le communiqué OFAS du 12 juin 2026 annonce plus de flexibilité dès le 1er juin 2027, par exemple désigner ses enfants en priorité même en étant marié ou lié par un partenariat enregistré. L’ordre de cette page est celui décrit avant cette date. Le texte de l’ordonnance se lit à la source, pas ici.",
      },
    ],
    blocks: [
      { type: "h2", text: "Ordre 3a (OFAS)" },
      {
        type: "ol",
        items: [
          "Le preneur, s’il survit (prestation vieillesse).",
          "Au décès : conjoint ou partenaire enregistré.",
          "Descendants directs, personnes à l’entretien desquelles le défunt subvenait de façon substantielle, ou personne en communauté de vie d’au moins cinq ans / enfants communs.",
          "Parents, puis frères et sœurs, puis autres héritiers.",
        ],
      },
      {
        type: "p",
        text: "On peut préciser à l’intérieur d’un groupe, pas inventer un ordre contraire. Un concubin de quatre ans n’est pas dans le second rang. Dans ce cas, une police 3b ou un risque pur avec clause nominative est le levier.",
      },
      { type: "h2", text: "Ce que l’OFAS a annoncé pour 2027" },
      {
        type: "p",
        text: "Le communiqué du 12 juin 2026 dit qu’à partir du 1er juin 2027 les assurés du pilier 3a auront plus de flexibilité pour désigner les bénéficiaires. L’exemple écrit par l’OFAS : pouvoir désigner ses enfants comme bénéficiaires prioritaires, y compris dans une famille recomposée, même en étant marié ou lié par un partenariat enregistré. Source : [Adaptations d’ordonnances dans le 2e et 3e piliers](https://www.bsv.admin.ch/fr/newnsb/fFBgrSAIiYiGRg9YfWRfM). Nous ne recopions pas le futur article d’ordonnance. L’ordre de la section précédente reste celui décrit sur cette page avant le 1er juin 2027.",
      },
      {
        type: "p",
        text: "Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).",
      },
    ],
  },
];
