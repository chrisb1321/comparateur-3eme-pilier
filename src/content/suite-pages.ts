import type { EditorialDoc } from "./types";
import { AUTHOR, LEGAL } from "@/lib/editorial";
import { CEILING_NOTE, FIGURES, NOTE_2027, chf } from "@/lib/figures";

const UPDATED = "2026-10-03";
const petit = chf(FIGURES.pillar3aWithLpp);
const grand = chf(FIGURES.pillar3aWithoutLpp);
const PILIER = { name: "3e pilier", href: "/3eme-pilier-suisse/" };
const FISCALITE = { name: "Fiscalité", href: "/deductions-fiscales-3eme-pilier/" };

export const SUITE_PAGES: EditorialDoc[] = [
  {
    kind: "page",
    slug: "christophe-bouin",
    title: "Christophe Bouin",
    metaTitle: "Christophe Bouin, responsable du contenu et du comparatif",
    description:
      "Nom et fonction déjà établis. Portrait, bio, années d’expérience, qualifications et inscriptions ne sont pas établis.",
    published: UPDATED,
    updated: UPDATED,
    parents: [],
    label: "Auteur",
    intro:
      `${AUTHOR.name} est le ${AUTHOR.role.toLowerCase()} du site. C’est le seul fait d’identité publié. Le contact est ${AUTHOR.email}. Cette page ne contient pas de biographie, de portrait, d’années d’expérience ni de qualification : ces éléments ne sont pas dans le dépôt.`,
    brief: [
      `${AUTHOR.name}, ${AUTHOR.role.toLowerCase()}.`,
      `Contact : ${AUTHOR.email}.`,
      "Portrait, bio, expérience, qualifications et inscriptions : non établis.",
      "Aucun diplôme n’est affiché.",
    ],
    related: ["a-propos", "mentions-legales", "methodologie-comparatif"],
    blocks: [
      { type: "h2", text: "Ce qui est établi" },
      {
        type: "ul",
        items: [
          `Nom : ${AUTHOR.name}.`,
          `Fonction : ${AUTHOR.role}.`,
          `Contact : ${AUTHOR.email}.`,
          "Page du service : [à propos](/a-propos/).",
        ],
      },
      { type: "h2", text: "Ce qui n’est pas établi" },
      {
        type: "p",
        text: "Les lignes suivantes sont des manques, pas des titres. Rien n’est inventé pour les remplir.",
      },
      {
        type: "ul",
        items: [
          "Portrait : non établi.",
          "Bio détaillée : non établie.",
          "Années d’expérience : non établies.",
          "Qualifications : non établies.",
          "Inscription d’intermédiaire : non établie.",
          LEGAL.LEGAL_INTERMEDIARY_STATUS,
          "TODO — Diplôme AFA annoncé sur le site historique — non vérifié. Ne plus l’afficher tant qu’une preuve n’est pas au dossier.",
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "methodologie-comparatif",
    title: "Méthodologie du comparatif",
    metaTitle: "Méthodologie du comparatif 3e pilier : ce qui est lu, et ce qui ne l’est pas",
    description:
      "Ce que le comparatif examine parmi les solutions accessibles : frais, souplesse, valeur de rachat, garanties, horizon. Pas l’exhaustivité du marché.",
    published: UPDATED,
    updated: UPDATED,
    parents: [],
    intro:
      "Le comparatif lit une situation, puis les solutions accessibles dans le cadre du service. Il ne prétend pas couvrir tous les établissements de Suisse : cette exhaustivité n’est pas établie. Il ne classe pas, ne promet pas un rendement, et ne désigne pas un gagnant entre la banque et l’assurance.",
    brief: [
      "Périmètre : solutions accessibles au service, pas le marché entier.",
      "Critères : frais, souplesse, valeur de rachat, garanties, horizon.",
      "Un rendement n’est garanti que si le contrat le dit. Aucun taux probable n’est publié ici.",
      "La rémunération des partenaires n’est pas documentée.",
      "Les chiffres officiels se lisent sur la méthode des sources, pas ici.",
    ],
    related: ["methode-sources-ofas-afc", "choisir-son-3eme-pilier", "3eme-pilier-suisse", "a-propos"],
    faqs: [
      {
        question: "Le comparatif voit-il toutes les offres suisses ?",
        answer:
          "Non. Le dépôt dit que le conseiller examine les solutions accessibles dans le cadre du service, pas l’ensemble du marché. Aucune liste exhaustive n’est publiée.",
      },
      {
        question: "Comment le service est-il rémunéré ?",
        answer: LEGAL.LEGAL_COMPENSATION_DISCLOSURE,
      },
    ],
    blocks: [
      { type: "h2", text: "Ce qui est comparé" },
      {
        type: "ul",
        items: [
          "Les frais, sans barème inventé : ils se lisent sur les documents de l’offre.",
          "La flexibilité des versements : libres, ou primes prévues au contrat.",
          "La valeur de rachat si l’on s’arrête, surtout les premières années d’une police.",
          "Les garanties : capital décès, incapacité, libération des primes, seulement si le contrat les prévoit.",
          "L’horizon : court ou jusqu’à l’âge de référence.",
        ],
      },
      { type: "h2", text: "Établissements accessibles" },
      {
        type: "p",
        text: "Le service part des solutions auxquelles il a accès pour la situation décrite. Le site ne publie pas de liste de partenaires ni de part de marché. Dire « toutes les banques et toutes les assurances » serait faux au regard du dépôt.",
      },
      { type: "h2", text: "Rendement garanti et rendement hypothétique" },
      {
        type: "p",
        text: "Un capital ou un taux n’est garanti que si le contrat le prévoit, et le chiffre est celui du contrat, pas celui de cette page. Un rendement hypothétique, une performance passée ou un taux « probable » ne sont pas utilisés pour conclure. Le [calculateur de plafond](/calculateur-plafond-3a/) divise au plus le plafond ; il ne projette pas un capital.",
      },
      { type: "h2", text: "Ce qui exclut une offre de la lecture" },
      {
        type: "ul",
        items: [
          "Pas de document sur les frais, la valeur de rachat ou les garanties.",
          "Une promesse de rendement sans clause.",
          "Un 3a proposé à une personne sans revenu soumis à l’AVS.",
          "Un classement publicitaire repris comme s’il était une mesure.",
        ],
      },
      { type: "h2", text: "Rémunération" },
      {
        type: "p",
        text: `${LEGAL.LEGAL_COMPENSATION_DISCLOSURE} Le comparatif reste présenté comme gratuit et sans engagement. Vous n’êtes pas obligé de souscrire.`,
      },
      { type: "h2", text: "Limites" },
      {
        type: "ul",
        items: [
          "Pas un conseil fiscal personnalisé ni un remplacement de la fiduciaire.",
          "Pas une inscription d’intermédiaire affichée : aucune n’est documentée.",
          "Pas un diplôme affiché.",
          "Les plafonds 2026 viennent du tableau OFAS. " + NOTE_2027 + ".",
        ],
      },
      {
        type: "p",
        text: "D’où viennent les chiffres officiels : [méthode des sources OFAS et AFC](/methode-sources-ofas-afc/). Le cadre du produit est le [3e pilier Suisse](/3eme-pilier-suisse/). La personne responsable du contenu est [Christophe Bouin](/christophe-bouin/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "calculateur-plafond-3a",
    title: "Calculateur du plafond 3a 2026",
    metaTitle: "Calculateur plafond 3a 2026 : 7'258 CHF ou 20 % du revenu",
    description:
      "Avec 2e pilier : 7'258 CHF. Sans : 20 % du revenu AVS, au maximum 36'288 CHF. Information générale, source OFAS.",
    published: UPDATED,
    updated: UPDATED,
    parents: [PILIER, FISCALITE],
    intro:
      `Deux cas en 2026, et seulement ceux-là. Avec une institution du 2e pilier, le plafond est ${petit}. Sans institution, c’est 20 % du revenu soumis à l’AVS, au maximum ${grand}. ${NOTE_2027}. Le calcul ci-dessous est une information générale, pas votre impôt.`,
    brief: [
      `LPP oui : ${petit}, quel que soit le revenu.`,
      `LPP non : 20 % du revenu annuel AVS, plafonné à ${grand}.`,
      "Source : tableau OFAS au 1er janvier 2026.",
      "La division mensuelle est une hypothèse de partage, pas un conseil.",
      "Aucun capital n’est projeté avec un taux.",
    ],
    related: ["deductions-fiscales-3eme-pilier", "plafonds-3a-2026-2027", "3eme-pilier-suisse", "3eme-pilier-independant"],
    faqs: [
      {
        question: "Le calculateur tient-il compte du canton ?",
        answer:
          "Non. Le plafond 3a est fédéral. L’économie d’impôt cantonale n’est pas estimée.",
      },
      {
        question: "Puis-je voir un capital à 65 ans ?",
        answer:
          "Non. Aucun taux n’est présenté comme probable. La seule projection affichée est le plafond divisé par douze, nommé comme hypothèse.",
      },
    ],
    blocks: [
      { type: "h2", text: "Comment lire le résultat" },
      {
        type: "p",
        text: `${CEILING_NOTE} Le détail écrit est sur les [plafonds 3a](/plafonds-3a-2026-2027/) et les [déductions](/deductions-fiscales-3eme-pilier/). Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).`,
      },
    ],
  },
  {
    kind: "page",
    slug: "transfert-3a",
    title: "Transférer un 3a",
    metaTitle: "Transférer un 3a en Suisse : ce n’est pas un retrait",
    description:
      "Un transfert de 3a vers une autre fondation ou une autre police reste dans la prévoyance liée. Ce n’est pas un versement imposable.",
    published: UPDATED,
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "Transférer un 3a, c’est déplacer l’avoir vers une autre fondation bancaire ou une autre police, sans vous le verser. Tant que l’argent reste dans la prévoyance liée, ce n’est pas un retrait et ce n’est pas le moment de l’impôt sur le capital. Le plafond de l’année ne se reconstitue pas parce que vous changez d’établissement.",
    brief: [
      "Le transfert n’est pas un retrait : vous ne touchez pas le capital.",
      "Demandez le formulaire à l’établissement qui reçoit l’argent.",
      "Avant de bouger une police, lisez la valeur de rachat.",
      "Le plafond annuel reste global, même avec plusieurs relations.",
      NOTE_2027,
    ],
    related: ["ouvrir-un-3eme-pilier", "valeur-de-rachat-3a", "3eme-pilier-banque-assurance", "3eme-pilier-suisse"],
    faqs: [
      {
        question: "Le transfert déclenche-t-il l’impôt ?",
        answer:
          "Pas s’il reste dans la prévoyance liée, d’une fondation ou d’une police 3a vers une autre. Un versement sur votre compte privé, lui, est un retrait.",
      },
      {
        question: "Puis-je transférer seulement une partie ?",
        answer:
          "Cela dépend de la fondation ou du contrat. Cette page ne publie pas une règle unique : demandez-la par écrit à l’établissement qui détient l’avoir.",
      },
    ],
    blocks: [
      { type: "h2", text: "Ce que le dépôt permet de dire" },
      {
        type: "p",
        text: "Un avoir 3a se transfère en principe vers une autre fondation bancaire ou une autre police, sans imposition, tant qu’il reste dans la prévoyance liée. Le formulaire se demande à l’établissement qui reçoit l’argent. Comparez les frais, les titres et la [valeur de rachat](/valeur-de-rachat-3a/) avant de bouger une police.",
      },
      { type: "h2", text: "Ce qu’il ne faut pas confondre" },
      {
        type: "ul",
        items: [
          "Transfert et retrait : le second vous verse le capital et ouvre l’impôt.",
          "Transfert et nouveau plafond : changer d’établissement ne donne pas un second plafond.",
          "Transfert et [rachat de lacune](/rachat-lacunes-3a-2026/) : le rachat est un versement nouveau, pas un déplacement d’avoir.",
        ],
      },
      {
        type: "p",
        text: "Ouvrir la relation de départ : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/). Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/). Banque ou assurance : [le comparatif de support](/3eme-pilier-banque-assurance/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "retrait-echelonne-3a",
    title: "Retrait échelonné du 3a",
    metaTitle: "Retrait échelonné du 3a : plusieurs relations, pas un second plafond",
    description:
      "Plusieurs comptes 3a ne multiplient pas le plafond. Les clôturer à des dates différentes peut séparer l’impôt sur le capital. Aucun taux cantonal n’est estimé.",
    published: UPDATED,
    updated: UPDATED,
    parents: [PILIER, FISCALITE],
    intro:
      "Échelonner un retrait 3a, c’est ne pas verser toutes les relations la même année. Le plafond annuel reste unique : plusieurs comptes ne permettent pas de déduire davantage. Chaque relation versée est imposée sur son montant, à part. Cette page ne donne pas un taux d’impôt ni une économie chiffrée.",
    brief: [
      `Plafond 2026 global : ${petit} avec 2e pilier, ou 20 % jusqu’à ${grand} sans.`,
      "Plusieurs relations : oui. Plusieurs plafonds : non.",
      "L’idée est de clôturer des relations différentes sur des années différentes.",
      "L’impôt exact dépend du canton et du montant. Il n’est pas calculé ici.",
      NOTE_2027,
    ],
    related: ["ouvrir-un-3eme-pilier", "deductions-fiscales-3eme-pilier", "3eme-pilier-a-impot-retrait", "3eme-pilier-suisse"],
    faqs: [
      {
        question: "Deux comptes doublent-ils la déduction ?",
        answer: `Non. Le plafond ${petit} ou ${grand} est global pour l’année. Le nombre de relations ne le multiplie pas.`,
      },
      {
        question: "Peut-on retirer une partie d’un seul compte ?",
        answer:
          "Pas comme une règle unique. Certaines fondations l’admettent, d’autres non. L’échelonnement décrit ici repose sur des relations distinctes, pas sur une promesse de retrait partiel.",
      },
    ],
    blocks: [
      { type: "h2", text: "Pourquoi plusieurs relations" },
      {
        type: "p",
        text: "Au dénouement, le capital 3a est imposé séparément du revenu. La circulaire AFC sur le pilier 3a traite cette imposition, y compris l’échelonnement. Clôturer une relation une année et une autre plus tard sépare les montants. Nous ne publions pas le barème cantonal : il changerait le résultat.",
      },
      { type: "h2", text: "Ce qui reste vrai en 2026" },
      {
        type: "p",
        text: `Vous pouvez ouvrir plusieurs 3a. La déduction de l’année ne dépasse pas ${petit} si vous avez un 2e pilier, ou 20 % du revenu jusqu’à ${grand} sinon. ${NOTE_2027}. Le détail du plafond est sur les [déductions](/deductions-fiscales-3eme-pilier/).`,
      },
      {
        type: "p",
        text: "Le geste d’ouverture est sur [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/). Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/). L’imposition au retrait, sans taux inventé : [impôt au retrait du 3a](/3eme-pilier-a-impot-retrait/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "valeur-de-rachat-3a",
    title: "Valeur de rachat d’une assurance 3a",
    metaTitle: "Valeur de rachat 3a : la lire sur la table, pas l’inventer",
    description:
      "La valeur de rachat est ce que la police verse si vous l’arrêtez. Elle est souvent inférieure aux primes au début. Aucun pourcentage n’est publié.",
    published: UPDATED,
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "La valeur de rachat est la somme qu’une police 3a verse si le contrat s’arrête avant le terme. Ce n’est pas le capital annoncé à l’échéance, ni la somme des primes. Les premières années, elle est en général plus basse que les primes déjà payées. Le chiffre se lit sur la table du contrat. Cette page n’en publie aucun.",
    brief: [
      "Compte ou titres : vous voyez l’avoir. Police : vous voyez la valeur de rachat.",
      "Pas de pourcentage type. Pas de rendement.",
      "La banque, pour un logement, regarde cette valeur, pas le capital projeté.",
      "S’arrêter se décide avec la table en main.",
    ],
    related: ["frais-3a-banque-assurance", "arret-primes-assurance-3a", "3eme-pilier-banque-assurance", "3eme-pilier-logement"],
    faqs: [
      {
        question: "La valeur de rachat est-elle garantie sur ce site ?",
        answer:
          "Non. Seul le contrat peut annoncer un montant. Nous ne substituons pas un pourcentage pédagogique à cette table.",
      },
      {
        question: "Un compte 3a a-t-il une valeur de rachat ?",
        answer:
          "Non au sens d’une police. L’avoir du compte ou des titres est ce qui est là, frais de tenue à part. La valeur de rachat est le vocabulaire de l’assurance.",
      },
    ],
    blocks: [
      { type: "h2", text: "Où la lire" },
      {
        type: "p",
        text: "La table de valeurs de rachat est dans l’offre ou dans le contrat, année par année. Sans cette table, comparer une police n’est pas possible. Les [frais](/frais-3a-banque-assurance/) disent quoi demander. Ils ne remplacent pas la table.",
      },
      { type: "h2", text: "Ce qu’elle n’est pas" },
      {
        type: "ul",
        items: [
          "Pas le capital décès.",
          "Pas la somme des primes versées.",
          "Pas un rendement. Aucun taux n’est ajouté ici.",
        ],
      },
      {
        type: "p",
        text: "Si vous cessez de payer : [arrêter les primes](/arret-primes-assurance-3a/). Pour un achat : [logement, retrait ou nantissement](/3eme-pilier-logement/). Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "arret-primes-assurance-3a",
    title: "Arrêter de payer une assurance 3a",
    metaTitle: "Arrêter les primes d’une assurance 3a : rachat, réduction, pas un conseil",
    description:
      "Arrêter une police 3a dépend du contrat : valeur de rachat, mise en réduction, ou maintien si une libération des primes s’applique. Aucun barème.",
    published: UPDATED,
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "Arrêter de payer une assurance 3a n’a pas une seule issue. Selon le contrat, la police est rachetée à sa valeur de rachat, réduite, ou maintenue si une libération des primes couvre une incapacité. Un compte 3a, lui, se met en pause : vous cessez de verser et l’avoir reste. Cette page ne choisit pas pour vous et ne publie pas de frais.",
    brief: [
      "Banque : pause possible. L’avoir du compte ou des titres reste.",
      "Assurance : l’arrêt se lit sur la valeur de rachat et les conditions du contrat.",
      "La libération des primes est une incapacité couverte, pas un choix d’arrêter.",
      "Aucun pourcentage de perte n’est donné ici.",
    ],
    related: ["valeur-de-rachat-3a", "frais-3a-banque-assurance", "liberation-du-paiement-des-primes", "3eme-pilier-banque-assurance"],
    faqs: [
      {
        question: "Suis-je obligé de racheter la police si j’arrête ?",
        answer:
          "Pas d’après une règle unique publiée ici. Le contrat peut prévoir le rachat, une réduction, ou d’autres issues. Demandez l’écrit à l’assureur avant de décider.",
      },
      {
        question: "La libération des primes veut-elle dire que je peux arrêter ?",
        answer:
          "Non. C’est une garantie en cas d’incapacité, si elle est au contrat. Ce n’est pas l’équivalent d’une pause volontaire.",
      },
    ],
    blocks: [
      { type: "h2", text: "Compte et police" },
      {
        type: "p",
        text: "Sur un compte ou des titres, cesser de verser laisse l’avoir en place, sous réserve des frais de tenue du contrat. Sur une police, cesser les primes touche la couverture et la [valeur de rachat](/valeur-de-rachat-3a/). Les premières années, cette valeur est en général inférieure aux primes versées. Le montant est celui de la table, pas un pourcentage de cette page.",
      },
      { type: "h2", text: "Ce qu’il faut demander" },
      {
        type: "ul",
        items: [
          "La valeur de rachat à la date prévue d’arrêt.",
          "Si une réduction sans rachat existe.",
          "Ce que deviennent le capital décès et l’incapacité.",
          "Les frais prélevés au rachat.",
        ],
      },
      {
        type: "p",
        text: "La [libération du paiement des primes](/liberation-du-paiement-des-primes/) est un autre sujet. Les frais généraux : [frais 3a](/frais-3a-banque-assurance/). Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).",
      },
    ],
  },
];
