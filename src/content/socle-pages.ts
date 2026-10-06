import type { EditorialDoc } from "./types";
import { LEGAL } from "@/lib/editorial";
import { CEILING_NOTE, FIGURES, NOTE_2027, REVIEW_LABEL, chf } from "@/lib/figures";

const UPDATED = "2026-10-03";
const petit = chf(FIGURES.pillar3aWithLpp);
const grand = chf(FIGURES.pillar3aWithoutLpp);
const PILIER = { name: "3e pilier", href: "/3eme-pilier-suisse/" };
const PREVOYANCE = { name: "Prévoyance", href: "/analyse-de-prevoyance/" };
const DECES = { name: "Assurance décès", href: "/assurance-deces/" };

export const SOCLE_PAGES: EditorialDoc[] = [
  {
    kind: "page",
    slug: "3eme-pilier-suisse",
    title: "3e pilier Suisse : prévoyance individuelle",
    metaTitle: "3e pilier Suisse : 3a, 3b, banque ou assurance",
    absoluteTitle: true,
    description:
      "Le 3e pilier complète l’AVS et la LPP. 3a lié ou 3b libre, banque ou assurance : plafond 2026, qui peut ouvrir, et ce qu’il faut comparer.",
    published: "2026-09-28",
    updated: UPDATED,
    parents: [],
    intro:
      "Le 3e pilier Suisse est la prévoyance individuelle. Il complète l’AVS (1er pilier) et la prévoyance professionnelle (2e pilier). Il se présente en 3a, lié, et en 3b, libre. Comparer une banque et une assurance sert à départager frais, souplesse et garanties. Ce n’est pas le formulaire de l’accueil : c’est le cadre, avant de choisir un contrat.",
    brief: [
      "Trois piliers : AVS, LPP, puis le volet individuel.",
      `3a 2026 avec 2e pilier : ${petit}. Sans 2e pilier : 20 % du revenu, au maximum ${grand}.`,
      "Le 3b n’a pas de plafond OFAS. La déduction, quand elle existe, est cantonale.",
      "Même déduction 3a en banque ou en assurance. Pas le même contrat.",
      NOTE_2027,
    ],
    related: [
      "3eme-pilier-a-ou-b",
      "3eme-pilier-b-prevoyance-libre",
      "3eme-pilier-banque-assurance",
      "choisir-son-3eme-pilier",
      "deductions-fiscales-3eme-pilier",
      "plafonds-3a-2026-2027",
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "1er-pilier-avs-ai-apg",
      "2eme-pilier-lpp",
      "frontalier-suisse",
      "3eme-pilier-independant",
      "epargne-enfant",
      "exemple-de-comparatif",
    ],
    faqs: [
      {
        question: "Qu’est-ce que le 3e pilier en Suisse ?",
        answer:
          "Le 3e pilier Suisse est la prévoyance individuelle, volontaire. Il complète l’AVS et le 2e pilier. Il comprend le 3a (prévoyance liée) et le 3b (prévoyance libre).",
      },
      {
        question: "Quelle est la différence entre le 3a et le 3b ?",
        answer:
          "Le 3a est encouragé fiscalement et le retrait est encadré. Le 3b n’a pas de plafond OFAS : il sert surtout la souplesse des retraits et des bénéficiaires. Les deux peuvent se combiner.",
      },
      {
        question: "Le plafond 3a 2027 est-il déjà connu ?",
        answer: `Oui. ${NOTE_2027}. Pour un versement 2026, avec une institution du 2e pilier, la déduction maximale reste ${petit}.`,
      },
      {
        question: "Pourquoi comparer une banque et une assurance ?",
        answer:
          "La déduction 3a ne dépend pas du prestataire. Ce qui change, ce sont les frais, la souplesse des versements, l’horizon et les garanties (décès, libération des primes). Le comparatif se demande via le formulaire du site.",
      },
    ],
    blocks: [
      { type: "h2", text: "Ce qu’est le 3e pilier en Suisse" },
      {
        type: "p",
        text: "En Suisse, la retraite repose sur trois piliers. Le [1er pilier](/1er-pilier-avs-ai-apg/) (AVS, AI, APG) est une assurance sociale. Le [2e pilier](/2eme-pilier-lpp/) (LPP) est la prévoyance professionnelle des personnes affiliées à une institution de prévoyance. Le 3e pilier est le volet individuel : une épargne et, selon le contrat, une protection que l’on constitue en plus, auprès d’une banque ou d’un assureur.",
      },
      {
        type: "p",
        text: "Il ne remplace ni la rente AVS ni l’avoir de caisse de pension. Il les complète, dans la limite de ce que le budget permet de verser dans la durée. Le 3a suit l’OPP 3. Le 3b est de la prévoyance libre : pas le même verrou, pas le même traitement fiscal.",
      },
      { type: "h2", text: "3a lié et 3b libre" },
      {
        type: "p",
        text: "Les deux formes s’emboîtent. Le détail est sur [3a ou 3b](/3eme-pilier-a-ou-b/) et sur la [prévoyance libre 3b](/3eme-pilier-b-prevoyance-libre/).",
      },
      {
        type: "ul",
        items: [
          "3a (prévoyance liée) : encouragé fiscalement dans toute la Suisse. Ouvert à une personne qui exerce une activité lucrative dont le revenu est soumis à l’AVS — salariés, indépendants, certains bénéficiaires d’indemnités journalières de chômage et frontaliers dans ce cas. Source : OFAS, circulaire AFC.",
          "3a : le capital est versé au plus tôt cinq ans avant l’âge de référence AVS, au plus tard cinq ans après si l’activité se poursuit. Motifs anticipés : logement pour propre usage, remboursement d’hypothèque, départ définitif de Suisse, activité indépendante, rachat LPP, invalidité entière AI non couverte. L’ordre des bénéficiaires en cas de décès est légal.",
          "3b (prévoyance libre) : pas de condition AVS comparable, pas de plafond OFAS. Utile pour un conjoint sans activité, une épargne enfant ou un bénéficiaire que l’ordre du 3a ne couvre pas. Le retrait est beaucoup plus libre.",
          "3b et impôts : pas la même déduction que le 3a à l’impôt fédéral direct. Dans certains cantons seulement (Genève et Fribourg sont les cas romands les plus cités), des primes d’assurance-vie peuvent entrer dans une enveloppe cantonale. Un compte bancaire 3b n’ouvre pas cette déduction.",
        ],
      },
      { type: "h2", text: "À qui s’adresse le 3e pilier", id: "profils" },
      {
        type: "p",
        text: "Le 3e pilier Suisse s’adresse à qui veut compléter l’AVS et le 2e pilier, ou protéger un proche que le 3a ne vise pas. Le bon point d’entrée dépend du statut, pas d’un produit unique.",
      },
      {
        type: "ul",
        items: [
          `Salarié affilié à une caisse de pension : le 3a complète l’AVS et la LPP, dans la limite de la petite cotisation (${petit} en 2026).`,
          "Indépendant : l’affiliation, ou non, à une institution du 2e pilier change la cotisation 3a admise. Le choix banque ou assurance se lit ensuite.",
          "Frontalier : l’accès au 3a suppose un revenu d’activité en Suisse soumis à l’AVS. Le permis ne suffit pas.",
          "Personne sans revenu soumis à l’AVS (conjoint sans activité, épargne enfant) : le 3a n’est en principe pas ouvert. Le 3b sert alors la souplesse.",
        ],
      },
      {
        type: "p",
        text: "Les pages dédiées : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/), [indépendant](/3eme-pilier-independant/), [frontalier](/frontalier-suisse/), [épargne enfant](/epargne-enfant/), [logement](/3eme-pilier-logement/). Ensuite : [transférer un 3a](/transfert-3a/), [retirer en plusieurs fois](/retrait-echelonne-3a/), [plafond à calculer](/calculateur-plafond-3a/).",
      },
      { type: "h2", text: "Pourquoi comparer une banque et une assurance" },
      {
        type: "p",
        text: "La déduction 3a est la même que le versement aille à une fondation bancaire ou à un assureur. Le plafond ne dépend pas du prestataire. Ce qui change : les frais, la possibilité d’arrêter ou de moduler les versements, et ce qui est versé en cas de décès ou d’incapacité de gain.",
      },
      {
        type: "ul",
        items: [
          "Banque : versements selon la capacité d’épargne, utile si l’horizon est plus court. Pas de capital décès intégré ni de libération des primes : la protection se limite à l’avoir accumulé, sauf police séparée.",
          "Assurance : entre en jeu pour un capital décès, une libération du paiement des primes ou un capital garanti. Une police comporte souvent des frais d’acquisition, visibles si l’on s’arrête tôt.",
          "3b à visée fiscale cantonale (Genève, Fribourg) : le support cité est une assurance-vie, pas un livret.",
        ],
      },
      {
        type: "p",
        text: "La grille de lecture est sur [banque ou assurance](/3eme-pilier-banque-assurance/) et sur [comment choisir](/choisir-son-3eme-pilier/). Un [exemple fictif](/exemple-de-comparatif/) montre la méthode, sans établissement ni offre. Pour faire examiner frais, souplesse et garanties sur une situation réelle : le [formulaire](/formulaire-3eme-pilier/).",
      },
      { type: "h2", text: "Déduction maximale du 3a en 2026" },
      {
        type: "p",
        text: `Pour 2026, la déduction maximale du pilier 3a, pour une personne affiliée à une institution du 2e pilier, est de ${petit}. Sans institution du 2e pilier, la limite est de 20 % du revenu d’activité, au maximum ${grand}. Le détail est sur les [déductions fiscales](/deductions-fiscales-3eme-pilier/) et sur les [plafonds 3a](/plafonds-3a-2026-2027/). ${CEILING_NOTE}`,
      },
      {
        type: "p",
        text: `${NOTE_2027}. Un versement crédité en 2026 utilise le plafond 2026.`,
      },
    ],
  },
  {
    kind: "page",
    slug: "exemple-de-comparatif",
    title: "Exemple de comparatif",
    metaTitle: "Exemple de comparatif",
    absoluteTitle: true,
    description:
      "Exemple fictif et anonymisé d’un comparatif 3e pilier : frais, souplesse des versements, valeur de rachat, garanties et horizon. Pas une offre réelle.",
    published: "2026-09-26",
    updated: UPDATED,
    label: "Exemple fictif",
    parents: [PILIER],
    intro:
      "Cet exemple est fictif et anonymisé. Il montre la méthode, pas une proposition que l’on pourrait souscrire. Aucun établissement, aucun frais réel et aucune offre n’y figurent.",
    brief: [
      "Situation imaginée : salarié affilié au 2e pilier, horizon d’une quinzaine d’années.",
      `Versement envisagé dans la limite du plafond 2026 (${petit}) si la trésorerie le permet.`,
      "Trois illustrations : un compte, deux assurances. Aucun nom, aucun canton, aucun barème.",
      "Le conseiller examine les solutions accessibles, pas l’ensemble du marché suisse.",
      NOTE_2027,
    ],
    related: [
      "3eme-pilier-suisse",
      "3eme-pilier-banque-assurance",
      "choisir-son-3eme-pilier",
      "plafonds-3a-2026-2027",
      "formulaire-3eme-pilier",
    ],
    faqs: [
      {
        question: "Cet exemple est-il une offre ?",
        answer:
          "Non. Les trois colonnes sont des illustrations anonymes. Elles ne nomment aucun établissement, n’affichent aucun pourcentage de frais et ne donnent aucun rendement.",
      },
      {
        question: "Que regarde la méthode ?",
        answer:
          "Les frais, la souplesse des versements, la valeur de rachat, les garanties décès ou incapacité, et l’horizon. Pas un classement, pas une performance passée.",
      },
    ],
    blocks: [
      {
        type: "callout",
        title: "Aucun établissement, aucun frais et aucune offre réels",
        text: "Les cases ci-dessous ne sont pas des tarifs, pas des noms d’établissements, et pas une offre. Elles servent à voir quels critères séparent un compte d’une police.",
      },
      { type: "h2", text: "Situation imaginée" },
      {
        type: "p",
        text: `Une personne salariée, affiliée au 2e pilier, veut verser dans la limite du plafond 2026 (${petit}) si sa trésorerie le permet, avec un horizon d’une quinzaine d’années. Aucun nom, aucun canton précis, aucun établissement. La grande cotisation (${grand}) ne s’applique pas à cette situation, parce qu’un 2e pilier est déjà là.`,
      },
      { type: "h2", text: "Trois illustrations, clairement fictives" },
      {
        type: "table",
        caption: "Illustrations anonymes. Aucun pourcentage, aucun barème, aucun partenaire.",
        headers: ["Critère", "Illustration A — compte", "Illustration B — assurance", "Illustration C — assurance"],
        rows: [
          [
            "Frais",
            "Frais de tenue illustrés, sans pourcentage et sans barème réel.",
            "Frais d’acquisition concentrés au début du contrat, sans montant réel.",
            "Frais d’acquisition plus étalés dans l’illustration, sans montant réel.",
          ],
          [
            "Souplesse des versements",
            "Versements libres jusqu’au plafond 2026, y compris une pause.",
            "Prime prévue au contrat. Une pause peut réduire les garanties illustrées.",
            "Prime prévue, avec une souplesse limitée dans l’illustration.",
          ],
          [
            "Valeur de rachat",
            "Pas de valeur de rachat d’assurance. Le capital suit le support choisi dans l’exemple.",
            "En cas d’arrêt précoce, la valeur de rachat illustrée est inférieure aux primes.",
            "Un arrêt précoce est également pénalisant dans cette illustration.",
          ],
          [
            "Garanties décès ou incapacité",
            "Pas de capital décès intégré dans cet exemple.",
            "Capital décès illustré, sans montant d’offre.",
            "Capital décès et incapacité illustrés, sans montant d’offre.",
          ],
          [
            "Horizon",
            "Illustration plus lisible si l’horizon est plus court.",
            "Illustration plus lisible si l’horizon est long et si la garantie décès est le besoin.",
            "Illustration plus lisible si l’horizon est long et si l’incapacité compte.",
          ],
        ],
      },
      { type: "h2", text: "Ce que la méthode regarde" },
      {
        type: "ul",
        items: [
          "les frais",
          "la souplesse des versements",
          "la valeur de rachat",
          "les garanties décès ou incapacité",
          "l’horizon",
        ],
      },
      { type: "h2", text: "Ce que le conseiller examine" },
      {
        type: "p",
        text: "Un conseiller examine les solutions accessibles dans le cadre du service, pas l’ensemble du marché suisse. Le cadre du 3e pilier est sur le [hub prévoyance individuelle](/3eme-pilier-suisse/). La différence de support est sur [banque ou assurance](/3eme-pilier-banque-assurance/).",
      },
      {
        type: "p",
        text: `Plafonds 2026 : ${petit} avec 2e pilier, ${grand} au maximum sans. ${NOTE_2027}. Comparatif gratuit et sans engagement. Aucun e-mail de confirmation n’est envoyé après le formulaire. Pour une situation réelle, le point d’entrée reste l’[accueil](/).`,
      },
    ],
  },
  {
    kind: "page",
    slug: "ouvrir-un-3eme-pilier",
    title: "Ouvrir un 3e pilier en Suisse : conditions et démarches",
    metaTitle: "Ouvrir un 3e pilier en Suisse : conditions, plafond 2026, démarches",
    description:
      "Qui peut ouvrir un 3a, quel montant verser en 2026, banque ou assurance, documents et délai au 31 décembre. Comparatif sans honoraires.",
    published: "2026-10-03",
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "On ouvre un 3e pilier lié (3a) en Suisse lorsqu’un revenu d’activité est soumis à l’AVS. En 2026, le plafond déductible est celui du tableau OFAS : avec un 2e pilier, ou 20 % du revenu dans la limite sans 2e pilier. Le versement doit être crédité au 31 décembre. Sans revenu AVS, le 3a n’est pas ouvert : la prévoyance libre (3b) reste possible.",
    brief: [
      `Plafond 3a 2026 avec 2e pilier : ${petit}.`,
      `Sans 2e pilier : 20 % du revenu d’activité, au maximum ${grand}.`,
      "Le 3a exige un revenu soumis à l’AVS. Le 3b, non.",
      "Banque ou assurance : même déduction, pas le même contrat.",
      "Le crédit doit arriver au plus tard le 31 décembre de l’année fiscale.",
      NOTE_2027,
    ],
    related: [
      "3eme-pilier-a-ou-b",
      "3eme-pilier-banque-assurance",
      "3eme-pilier-independant",
      "frontalier-suisse",
      "deductions-fiscales-3eme-pilier",
    ],
    faqs: [
      {
        question: "Faut-il déjà avoir un 2e pilier pour ouvrir un 3a ?",
        answer:
          "Non. Le 2e pilier change le plafond, pas le droit d’ouvrir. Avec une institution de prévoyance, c’est la petite cotisation. Sans institution, c’est 20 % du revenu d’activité, dans la limite de la grande cotisation.",
      },
      {
        question: "Peut-on ouvrir plusieurs comptes 3a ?",
        answer: `Oui. Le plafond ${petit} ou ${grand} est global : il ne se multiplie pas par le nombre de comptes. Plusieurs relations servent surtout à échelonner les retraits plus tard.`,
      },
      {
        question: "Jusqu’à quand verser pour l’année fiscale ?",
        answer:
          "Le versement doit être crédité sur le 3a au plus tard le 31 décembre. La date de l’ordre ne suffit pas si l’argent arrive en janvier.",
      },
    ],
    blocks: [
      { type: "h2", text: "Qui peut ouvrir un 3a ?" },
      {
        type: "p",
        text: "Le 3a (prévoyance liée) s’adresse à une personne qui exerce une activité lucrative dont le revenu est soumis à l’AVS en Suisse. L’OFAS vise les salariés, les indépendants, certains bénéficiaires d’indemnités journalières de chômage et les frontaliers dans ce cas. Le permis de séjour ne suffit pas : c’est l’assujettissement AVS qui ouvre le droit.",
      },
      { type: "h2", text: "Faut-il avoir un revenu soumis à l'AVS ?" },
      {
        type: "p",
        text: "Oui pour le 3a. Sans revenu soumis à l’AVS, les documents d’identité n’ouvrent pas une prévoyance liée. Un conjoint sans activité, un enfant ou une personne sans revenu suisse se tourne vers le [3b, prévoyance libre](/3eme-pilier-b-prevoyance-libre/), ou vers le 3a du parent qui, lui, cotise.",
      },
      { type: "h2", text: "3a bancaire ou assurance ?" },
      {
        type: "p",
        text: "La déduction est la même. La [banque](/3eme-pilier-banque-assurance/) laisse des versements libres, un compte ou des titres, et ne prévoit pas de capital décès au-delà de l’avoir. L’assurance fixe souvent des primes, un capital décès et parfois une libération des primes. Les premières années, la valeur de rachat d’une police est en général inférieure aux primes versées. L’horizon et le besoin de protection départagent, pas un classement.",
      },
      {
        type: "table",
        caption: "Même plafond 3a. Le support change la sortie et la protection.",
        headers: ["Critère", "Fondation bancaire", "Police d’assurance"],
        rows: [
          ["Déduction 2026", petit, "Identique"],
          ["Versements", "Libres, jusqu’au plafond", "Primes souvent contractuelles"],
          ["Si vous arrêtez tôt", "Avoir du compte ou des titres", "Valeur de rachat souvent plus basse que les primes"],
          ["Famille", "L’avoir accumulé", "Capital décès, parfois libération des primes"],
        ],
      },
      { type: "h2", text: "Quel montant verser en 2026 ?" },
      {
        type: "p",
        text: `Avec une institution du 2e pilier : ${petit}. Sans institution : 20 % du revenu d’activité lucrative, au maximum ${grand}. Vous n’êtes pas obligé d’atteindre le plafond. ${CEILING_NOTE}`,
      },
      { type: "h2", text: "Quelle différence avec un 3b ?" },
      {
        type: "p",
        text: "Le 3a est déductible dans toute la Suisse et le capital est bloqué, sauf motifs légaux. Le 3b n’a pas de plafond OFAS. Il est plus souple sur les retraits et les bénéficiaires. Sa déduction, quand elle existe, est cantonale et concerne surtout des primes d’assurance-vie. Le détail est sur [3a ou 3b](/3eme-pilier-a-ou-b/).",
      },
      { type: "h2", text: "Quels documents faut-il ?" },
      {
        type: "p",
        text: "L’OFAS n’impose pas une liste unique. En pratique : pièce d’identité, numéro AVS, adresse. Selon le dossier, un permis, une attestation d’activité ou de quoi confirmer l’affiliation au 2e pilier. C’est ce dernier point qui choisit la petite ou la grande cotisation.",
      },
      { type: "h2", text: "Peut-on avoir plusieurs 3a ?" },
      {
        type: "p",
        text: "Oui, auprès de fondations différentes ou de la même. Le plafond annuel reste unique : plusieurs comptes ne le multiplient pas. Ouvrir deux ou trois relations peut faciliter un [retrait échelonné](/retrait-echelonne-3a/) plus tard, parce que chaque relation est imposée séparément au moment où elle est versée. Ce n’est pas une façon de déduire davantage.",
      },
      { type: "h2", text: "Jusqu'à quand verser pour l'année fiscale ?" },
      {
        type: "p",
        text: "Jusqu’au crédit du 31 décembre. Beaucoup d’établissements arrêtent les ordres mi-décembre. Un versement crédité en janvier compte pour l’année suivante, avec le plafond de cette année-là. Le calendrier utile est sur les [déductions fiscales](/deductions-fiscales-3eme-pilier/).",
      },
      { type: "h2", text: "Que faire si je suis indépendant ?" },
      {
        type: "p",
        text: "Vous pouvez ouvrir un 3a si votre revenu est soumis à l’AVS. Sans caisse du 2e pilier, la grande cotisation s’applique. Si vous vous affiliez à une institution LPP, vous basculez sur la petite cotisation. Le cadre est détaillé pour l’[indépendant](/3eme-pilier-independant/).",
      },
      { type: "h2", text: "Que faire si je suis frontalier ?" },
      {
        type: "p",
        text: "Le 3a est possible si le revenu suisse est soumis à l’AVS. L’intérêt fiscal dépend du canton, du permis et, parfois, d’une taxation ordinaire ultérieure. Le [guide frontalier](/frontalier-suisse/) reprend ces conditions. Un achat immobilier hors de Suisse ne débloque pas automatiquement le 3a.",
      },
      { type: "h2", text: "Comment transférer un ancien 3a ?" },
      {
        type: "p",
        text: "Déplacer un avoir vers une autre fondation ou une autre police est un [transfert de 3a](/transfert-3a/). Ce n’est pas un retrait, et le plafond de l’année ne se reconstitue pas. Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-logement",
    title: "Utiliser son 3e pilier pour acheter un logement en Suisse",
    metaTitle: "3e pilier et logement en Suisse : retrait ou nantissement",
    description:
      "Retrait anticipé ou nantissement du 3a pour la résidence principale : impôt, retraite, banque ou assurance, et erreurs à éviter.",
    published: "2026-10-03",
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "Le 3e pilier peut aider à acheter le logement que vous habitez en Suisse, par un retrait anticipé ou par un nantissement. Le retrait sort le capital et déclenche un impôt séparé. Le nantissement laisse l’avoir investi et le donne en garantie à la banque. Une résidence secondaire ou un bien de rendement ne suit pas ce cadre. Le 3a et le 3b n’obéissent pas aux mêmes règles.",
    brief: [
      "Deux voies : retirer le 3a, ou le nantir sans le sortir.",
      "Résidence principale en Suisse uniquement pour le retrait EPL du 3a.",
      "Le retrait est imposé. Le nantissement ne l’est pas tant que le gage n’est pas réalisé.",
      "Une police se lit à la valeur de rachat, pas au capital projeté.",
      "Le capital retiré manque à la retraite.",
    ],
    related: [
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-banque-assurance",
      "3eme-pilier-a-ou-b",
      "deductions-fiscales-3eme-pilier",
      "2eme-pilier-lpp",
    ],
    faqs: [
      {
        question: "Peut-on utiliser son 3a pour une résidence secondaire ?",
        answer:
          "Non pour le retrait anticipé au titre du logement à usage propre. Le bien doit servir de résidence principale à la personne qui retire. Un 3b, lui, dépend du contrat : ce n’est pas le même motif légal.",
      },
      {
        question: "Le nantissement évite-t-il l’impôt ?",
        answer:
          "Au moment où vous donnez le 3a en gage, il n’y a en principe pas d’impôt sur le retrait, parce que le capital ne vous est pas versé. Si la banque réalise le gage, l’imposition du capital peut alors s’appliquer.",
      },
      {
        question: "Banque et assurance se retirent-elles de la même façon ?",
        answer:
          "Le compte ou les titres se retirent à leur valeur. Une police se retire à sa valeur de rachat, souvent inférieure aux primes versées dans les premières années. La banque qui finance le logement regarde cette valeur, pas le capital affiché à l’échéance.",
      },
    ],
    blocks: [
      { type: "h2", text: "Retrait anticipé ou nantissement : de quoi parle-t-on ?" },
      {
        type: "p",
        text: "Le retrait anticipé verse le capital 3a (ou une partie, selon la fondation) pour acheter, construire, rénover le logement que vous occupez, ou pour rembourser le prêt hypothécaire de ce logement. Le nantissement ne verse rien : la fondation ou l’assureur s’engage envers la banque, et l’avoir continue d’exister.",
      },
      {
        type: "table",
        caption: "Comparaison pédagogique. L’impôt exact dépend du canton et du montant : il n’est pas estimé ici.",
        headers: ["", "Retrait", "Nantissement"],
        rows: [
          ["Liquidités nécessaires", "Le capital sort du 3a. Le net reçu est amputé de l’impôt.", "Le capital reste placé. La banque demande souvent d’autres fonds propres."],
          ["Capital restant investi", "Diminue du montant retiré.", "Reste investi, mais il est gagé."],
          ["Impôt", "Impôt sur le capital, séparé du revenu.", "Pas d’impôt au moment du gage. Impôt possible si le gage est réalisé."],
          ["Garantie banque", "L’apport est versé. Cette somme ne garantit plus rien dans le 3a.", "Le 3a ou la police est nanti au profit de la banque."],
          ["Retraite", "L’avoir de vieillesse baisse d’autant.", "L’avoir est conservé, mais bloqué tant que le gage court."],
          ["Souplesse", "Un nouveau retrait logement n’est en principe pas annuel.", "Vous pouvez lever le gage si la banque l’accepte, sans avoir « consommé » le capital."],
        ],
      },
      { type: "h2", text: "Pourquoi seulement la résidence principale ?" },
      {
        type: "p",
        text: "Le retrait anticipé du 3a pour l’immobilier suit l’encouragement à la propriété du logement à usage propre. Vous devez habiter le bien. Une résidence de vacances ou un immeuble de rendement n’entre pas dans ce motif. Le remboursement visé est celui de l’hypothèque de ce logement, pas d’un crédit à la consommation.",
      },
      { type: "h2", text: "Que se passe-t-il pour l’impôt et pour la retraite ?" },
      {
        type: "p",
        text: "Le capital retiré est imposé séparément du revenu, à un barème qui dépend du canton et du montant. Nous ne publions pas un taux unique : ce serait faux d’un canton à l’autre. Ce que l’on peut dire sans chiffre inventé : l’argent qui sort ne capitalise plus jusqu’à la retraite, et la déduction des années futures ne reconstitue pas à elle seule le capital manquant. Le [cadre fiscal du 3a](/deductions-fiscales-3eme-pilier/) rappelle l’imposition à la sortie.",
      },
      { type: "h2", text: "3a et 3b : ce n’est pas le même geste" },
      {
        type: "p",
        text: "Le 3a est lié. Le sortir avant l’âge de référence n’est possible que pour les motifs prévus, dont le logement à usage propre. Le 3b est libre : utiliser une épargne ou racheter une police est un choix de contrat, avec une valeur de rachat et une fiscalité qui ne copient pas le 3a. Voir [3a ou 3b](/3eme-pilier-a-ou-b/).",
      },
      { type: "h2", text: "Banque ou assurance au moment du logement" },
      {
        type: "p",
        text: "Sur un compte ou des titres, vous voyez l’avoir. Sur une assurance, la banque retient la valeur de rachat. Si la police est récente, cette valeur peut être bien plus basse que les primes déjà payées. Nantir ou racheter une police trop tôt est souvent le mauvais moment. Le comparatif [banque ou assurance](/3eme-pilier-banque-assurance/) sert à lire ce point avant l’achat, pas après.",
      },
      { type: "h2", text: "À quelle fréquence un retrait est-il possible ?" },
      {
        type: "p",
        text: "Pour le 2e pilier, un nouveau versement anticipé pour le logement est en principe espacé de cinq ans. Les fondations 3a appliquent généralement un rythme comparable, pas un retrait chaque année. Demandez la règle écrite de votre fondation avant de compter sur un second retrait.",
      },
      { type: "h2", text: "Exemple chiffré, avec les hypothèses écrites" },
      {
        type: "p",
        text: "Hypothèses, pour comprendre le mécanisme et non pour calculer votre impôt : une personne affiliée à une caisse de pension, un seul 3a bancaire de 80'000 francs, un logement principal en Suisse, pas de police. Scénario retrait : les 80'000 francs sortent, l’impôt cantonal réduit le net (montant non estimé ici), la retraite perd ces 80'000 francs et ce qu’ils auraient encore rapporté. Scénario nantissement : les 80'000 francs restent investis, la banque les prend en garantie, aucun impôt de retrait n’est dû à ce stade, et l’avoir continue. Le « moins cher » n’est pas automatique : il dépend du taux hypothécaire, du rendement réel du 3a et de l’impôt de votre canton.",
      },
      { type: "h2", text: "Quelles erreurs éviter ?" },
      {
        type: "ul",
        items: [
          "Compter le capital décès d’une police comme de l’apport : la banque regarde la valeur de rachat.",
          "Retirer pour un bien que vous n’habitez pas.",
          "Oublier l’impôt de sortie et découvrir le net au moment de l’acte.",
          "Vider le 3a alors qu’un nantissement aurait suffi à la banque.",
          "Signer une nouvelle police longue juste avant un projet d’achat à court terme.",
        ],
      },
      {
        type: "p",
        text: "Ouvrir le contrat qui pourra servir plus tard se décide au début : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/). Sur une police, la banque lit la [valeur de rachat](/valeur-de-rachat-3a/), pas le capital projeté. Le cadre : [3e pilier Suisse](/3eme-pilier-suisse/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "1er-pilier-avs-ai-apg",
    wpId: 1986,
    title: "1er pilier AVS, AI et APG",
    metaTitle: "1er pilier AVS 2026 : rentes, 13e rente, âge de référence",
    description:
      "Rente AVS 2026 selon le tableau OFAS, 13e rente dès décembre 2026, AI et APG. Cette page ne recopie pas d’autres montants 2027.",
    published: "2021-11-12",
    updated: UPDATED,
    parents: [PREVOYANCE],
    intro: `Le 1er pilier est la rente de base : AVS pour la vieillesse et les survivants, AI pour l’invalidité, APG pour la perte de gain. En 2026, une rente de vieillesse complète va de ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} par mois. Pour un couple marié, le plafond des deux rentes est ${chf(FIGURES.avsCoupleMaxMonthly)}. ${NOTE_2027}. Cette rente ne remplace en général pas le salaire : c’est pour cela que le 2e et le 3e pilier existent.`,
    brief: [
      `Rente complète 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} par mois.`,
      `Couple marié : ${chf(FIGURES.avsCoupleMaxMonthly)} au plus pour les deux rentes.`,
      "13e rente de vieillesse dès décembre 2026. Pas pour l’AI ni les survivants.",
      "Âge de référence : 65 ans, avec une transition pour certaines femmes (AVS 21).",
      NOTE_2027,
    ],
    related: ["2eme-pilier-lpp", "analyse-de-prevoyance", "tableau-ofas-montants-avs-lpp-3a", "ouvrir-un-3eme-pilier"],
    faqs: [
      {
        question: "La 13e rente AVS augmente-t-elle le plafond du 3a ?",
        answer: `Non. La 13e rente est une prestation AVS. Le plafond 3a 2026 reste ${petit} ou ${grand}. ${NOTE_2027}.`,
      },
      {
        question: "Les rentes AVS 2027 sont-elles déjà connues ?",
        answer: `${NOTE_2027}. Les montants cités sur cette page sont ceux du tableau OFAS au 1er janvier 2026, vérifiés le ${REVIEW_LABEL}.`,
      },
      {
        question: "L’AVS suffit-elle pour maintenir le niveau de vie ?",
        answer:
          "Rarement à elle seule. La rente complète maximale reste très en dessous d’un salaire médian. Le 2e pilier et le 3e pilier couvrent le reste, s’ils ont été alimentés.",
      },
    ],
    blocks: [
      { type: "h2", text: "Que couvre le 1er pilier ?" },
      {
        type: "ul",
        items: [
          "AVS : rente de vieillesse, rentes de survivants (conjoint, orphelin).",
          "AI : rente d’invalidité si la capacité de gain est atteinte de façon durable, après les mesures de réadaptation.",
          "APG : allocation pour perte de gain, notamment service militaire, maternité et autre parent.",
        ],
      },
      {
        type: "p",
        text: "Ce sont des assurances sociales fédérales, financées surtout par répartition. Elles ne sont pas un compte à votre nom.",
      },
      { type: "h2", text: "Quelle rente de vieillesse en 2026 ?" },
      {
        type: "table",
        caption: `Tableau OFAS au 1er janvier 2026. ${NOTE_2027}.`,
        headers: ["Prestation 2026", "Montant mensuel"],
        rows: [
          ["Rente de vieillesse complète, minimum", chf(FIGURES.avsMinMonthly)],
          ["Rente de vieillesse complète, maximum", chf(FIGURES.avsMaxMonthly)],
          ["Plafond des deux rentes d’un couple marié", chf(FIGURES.avsCoupleMaxMonthly)],
        ],
      },
      {
        type: "p",
        text: "Une rente « complète » suppose une durée de cotisation sans lacune, de 21 ans jusqu’à l’âge de référence. Des années manquantes réduisent la rente. Le minimum et le maximum ci-dessus ne sont donc pas automatiques.",
      },
      { type: "h2", text: "À quoi sert la 13e rente ?" },
      {
        type: "p",
        text: "Dès décembre 2026, une 13e rente de vieillesse est versée. Elle correspond à un douzième des rentes de vieillesse de l’année. Elle ne s’applique pas aux rentes de survivants ni à l’AI. Source : Centre d’information AVS/AI. Elle ne change pas le plafond du 3e pilier.",
      },
      { type: "h2", text: "Quel est l’âge de référence ?" },
      {
        type: "p",
        text: "L’âge de référence AVS est 65 ans. Pour les femmes de la génération transitoire, la réforme AVS 21 relève l’âge progressivement. Les anciens textes du site qui disaient « 64 ans pour les femmes » décrivent un droit dépassé : ce n’est pas l’âge à utiliser pour une décision en 2026. Le 3a se retire au plus tôt cinq ans avant cet âge de référence, et au plus tard cinq ans après si vous restez actif.",
      },
      { type: "h2", text: "Quel lien avec le 2e et le 3e pilier ?" },
      {
        type: "p",
        text: "L’AVS pose le plancher. Le [2e pilier](/2eme-pilier-lpp/) capitalise une part du salaire. Le [3e pilier](/ouvrir-un-3eme-pilier/) est individuel : il réduit l’impôt l’année du versement et reconstitue un capital que l’AVS ne verse pas. Une [analyse de prévoyance](/analyse-de-prevoyance/) commence par estimer la rente AVS, pas par choisir une police.",
      },
    ],
  },
  {
    kind: "page",
    slug: "2eme-pilier-lpp",
    wpId: 2010,
    title: "2e pilier LPP",
    metaTitle: "2e pilier LPP 2026 : seuil d’entrée, coordination, lien avec le 3a",
    description:
      "Seuil LPP, déduction de coordination et salaire coordonné selon le tableau OFAS 2026. Ce que cela change pour le plafond 3a.",
    published: "2021-11-12",
    updated: UPDATED,
    parents: [PREVOYANCE],
    intro: `Le 2e pilier est la prévoyance professionnelle : l’employeur et le salarié alimentent une caisse, qui verse une rente ou un capital. En 2026, l’affiliation obligatoire commence à ${chf(FIGURES.lppEntry)} de salaire annuel chez le même employeur. La déduction de coordination est ${chf(FIGURES.lppCoordination)}, la limite supérieure ${chf(FIGURES.lppSalaryCap)}. Être affilié ou non décide aussi si votre 3a est plafonné à ${petit} ou à 20 % du revenu. ${NOTE_2027}.`,
    brief: [
      `Seuil d’entrée 2026 : ${chf(FIGURES.lppEntry)}.`,
      `Déduction de coordination : ${chf(FIGURES.lppCoordination)}.`,
      `Limite supérieure du salaire annuel : ${chf(FIGURES.lppSalaryCap)}.`,
      `Affilié LPP : 3a plafonné à ${petit} en 2026.`,
      `Sans institution du 2e pilier : jusqu’à ${grand}.`,
      NOTE_2027,
    ],
    related: ["1er-pilier-avs-ai-apg", "libre-passage-lpp", "ouvrir-un-3eme-pilier", "a-quoi-sert-le-deuxieme-pilier", "tableau-ofas-montants-avs-lpp-3a"],
    faqs: [
      {
        question: "L’affiliation LPP change-t-elle le plafond 3a ?",
        answer: `Oui. Avec une institution du 2e pilier, la petite cotisation 2026 est ${petit}. Sans institution, c’est 20 % du revenu d’activité, au maximum ${grand}. Un indépendant qui s’affilie volontairement passe sur la petite cotisation.`,
      },
      {
        question: "Les seuils LPP 2027 sont-ils publiés ?",
        answer: `${NOTE_2027}. Le tableau de cette page est celui de l’OFAS au 1er janvier 2026, vérifié le ${REVIEW_LABEL}.`,
      },
      {
        question: "Le 2e pilier et le 3a sont-ils le même argent ?",
        answer:
          "Non. Le 2e pilier est lié à l’emploi et à la caisse. Le 3a est un contrat personnel, banque ou assurance, avec son propre plafond. On peut transférer un 3a vers la caisse dans certains cas, pas les additionner pour déduire deux fois.",
      },
    ],
    blocks: [
      { type: "h2", text: "À quoi sert la LPP ?" },
      {
        type: "p",
        text: "Elle doit, avec l’AVS, permettre de conserver environ le niveau de vie antérieur. Dans les faits, le taux de conversion, les années à temps partiel et les changements d’employeur creusent un écart. Le 3e pilier vient après, pas à la place. Le rôle du certificat de caisse est détaillé dans [à quoi sert le 2e pilier](/a-quoi-sert-le-deuxieme-pilier/).",
      },
      { type: "h2", text: "Quels montants LPP en 2026 ?" },
      {
        type: "table",
        caption: `Tableau OFAS au 1er janvier 2026. ${NOTE_2027}.`,
        headers: ["Paramètre", "Montant 2026"],
        rows: [
          ["Salaire minimal annuel (seuil d’entrée)", chf(FIGURES.lppEntry)],
          ["Déduction de coordination", chf(FIGURES.lppCoordination)],
          ["Salaire coordonné minimal", chf(FIGURES.lppCoordinatedMin)],
          ["Salaire coordonné maximal", chf(FIGURES.lppCoordinatedMax)],
          ["Limite supérieure du salaire annuel", chf(FIGURES.lppSalaryCap)],
        ],
      },
      {
        type: "p",
        text: "Le salaire coordonné est la part sur laquelle la caisse doit prélever des bonifications. Au-dessous du seuil, il n’y a pas d’affiliation obligatoire. Un plan surobligatoire peut couvrir davantage : lisez le certificat, pas seulement la loi.",
      },
      { type: "h2", text: "Pourquoi le seuil ouvre ou ferme la grande cotisation 3a ?" },
      {
        type: "p",
        text: `Dès que vous êtes affilié à une institution de prévoyance du 2e pilier, le 3a 2026 est plafonné à ${petit}. Sans institution, le plafond est 20 % du revenu, au plus ${grand}. Ce n’est pas « plus c’est mieux » : s’affilier volontairement quand on est indépendant réduit le 3a déductible et augmente la prévoyance professionnelle. Le choix se fait sur [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/).`,
      },
      { type: "h2", text: "Que devient l’avoir quand on change d’emploi ?" },
      {
        type: "p",
        text: "Il doit suivre vers la nouvelle caisse, ou vers un compte ou une police de [libre passage](/libre-passage-lpp/) si vous n’avez plus d’employeur. Ce n’est pas un 3a. Le laisser sans instruction finit à l’institution supplétive.",
      },
      { type: "h2", text: "Peut-on retirer le 2e pilier pour un logement ?" },
      {
        type: "p",
        text: "Oui, pour le logement que vous habitez, avec un impôt sur le versement anticipé et, en principe, un intervalle de cinq ans avant un nouveau retrait. Le [3e pilier logement](/3eme-pilier-logement/) compare retrait et nantissement. Les deux enveloppes ne se mélangent pas dans le même formulaire.",
      },
    ],
  },
  {
    kind: "page",
    slug: "epargne-enfant",
    wpId: 1967,
    title: "Épargne enfant en Suisse",
    metaTitle: "Épargne enfant : compte, 3b ou assurance, sans 3a automatique",
    description:
      "Comparer compte au nom de l’enfant, épargne du parent, placements et assurance-vie 3b. Pas de 3a sans revenu AVS, pas de capital « garanti » par défaut.",
    published: "2021-11-04",
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "Un enfant sans activité lucrative ne peut pas ouvrir un 3a : il n’a pas de revenu soumis à l’AVS. Épargner pour lui se décide entre un compte à son nom, l’épargne des parents, des placements, ou une assurance-vie 3b. Aucune de ces voies n’est automatiquement la bonne. Une assurance ne produit pas à elle seule un rendement intéressant, et le capital n’est garanti que si le contrat le dit, noir sur blanc.",
    brief: [
      "Pas de 3a au nom de l’enfant sans revenu AVS.",
      "Le compte au nom de l’enfant lui appartient.",
      "L’épargne des parents reste disponible, mais entre dans leur succession si rien n’est prévu.",
      "Une police 3b peut couvrir le décès du parent. Elle a des frais et une valeur de rachat.",
      "Horizon, propriétaire du capital et liquidité comptent plus que le nom du produit.",
    ],
    related: ["3eme-pilier-b-prevoyance-libre", "assurance-vie-en-suisse", "risque-pur-deces", "liberation-du-paiement-des-primes", "ouvrir-un-3eme-pilier"],
    faqs: [
      {
        question: "Peut-on ouvrir un 3a pour un enfant ?",
        answer:
          "Seulement s’il a lui-même un revenu soumis à l’AVS, par exemple un job d’étudiant déclaré. Un cadeau des parents ne crée pas ce droit.",
      },
      {
        question: "L’assurance-vie est-elle recommandée d’office ?",
        answer:
          "Non. Elle est utile si vous voulez une protection décès ou une libération de primes, et si vous acceptez les frais et le blocage. Pour un livret destiné à des études dans huit ans, un compte est souvent plus simple.",
      },
      {
        question: "Le capital est-il garanti ?",
        answer:
          "Un compte bancaire suit la garantie des dépôts, dans les limites légales, pas un rendement. Une part en titres peut baisser. Une police ne garantit un capital que si les conditions générales le prévoient. Le mot « garanti » sur une brochure ne suffit pas.",
      },
    ],
    blocks: [
      { type: "h2", text: "Quel est le point de départ ?" },
      {
        type: "p",
        text: "L’ancienne page « constituer une épargne enfant » disait déjà l’essentiel, et c’est ce que nous gardons : pas de 3a miniature ; trois familles de solutions (compte au nom de l’enfant, épargne des parents, police) ; la police sur la tête du parent protège le projet s’il décède ; le compte reste le plus souple pour des études à horizon moyen ; une mixte longue est rarement justifiée si le seul but est un livret. Le reste de cette page compare ces voies sans en désigner une d’office.",
      },
      { type: "h2", text: "Comment se comparent les solutions ?" },
      {
        type: "table",
        caption: "Lecture qualitative. Aucun rendement n’est promis.",
        headers: ["", "Compte au nom de l’enfant", "Épargne du parent", "Placements", "Assurance-vie 3b"],
        rows: [
          ["Disponibilité", "Selon le compte. Le représentant légal gère jusqu’à la majorité.", "Libre, c’est l’argent du parent.", "Variable. Une vente peut tomber au mauvais moment.", "Rachat possible, souvent avec une valeur inférieure aux primes au début."],
          ["Propriétaire du capital", "L’enfant.", "Le parent, tant qu’il ne donne pas.", "Celui au nom duquel le dépôt est ouvert.", "Le preneur d’assurance. Le bénéficiaire reçoit au décès, selon la clause."],
          ["Frais", "Faibles sur un compte.", "Faibles.", "Frais de courtage et de fonds, à lire.", "Frais d’acquisition et de risque, souvent lourds les premières années."],
          ["Risque", "Faible sur un compte. Pas de rendement élevé.", "Identique au patrimoine du parent.", "Le capital peut baisser.", "Risque de perte de valeur de rachat. Le capital final n’est pas garanti sans clause."],
          ["Protection décès", "Aucune, hors du solde.", "Aucune, hors succession.", "Le portefeuille entre dans la succession.", "Possible si le parent est assuré et l’enfant bénéficiaire."],
          ["Libération des primes", "Sans objet.", "Sans objet.", "Sans objet.", "Parfois : l’assureur paie les primes si le parent est en incapacité. À lire au contrat. Voir la page dédiée."],
          ["Fiscalité", "La fortune de l’enfant peut être imputée aux parents.", "Fortune et revenus du parent.", "Idem, selon le titulaire.", "Primes parfois déductibles dans une enveloppe cantonale déjà prise par la LAMal. Pas un 3a."],
          ["Horizon qui colle", "Études ou projet à moyen terme.", "Tant que le parent veut garder la main.", "Long, et seulement si une baisse est acceptable.", "Long, et seulement s’il y a un vrai besoin de protection."],
        ],
      },
      { type: "h2", text: "Pourquoi le compte au nom de l’enfant change la donne ?" },
      {
        type: "p",
        text: "L’argent devient le sien. C’est simple et lisible. À la majorité, il en dispose. Les parents ne peuvent plus le « reprendre » comme un projet familial. La fortune de l’enfant est souvent additionnée à celle des parents pour l’impôt, selon le canton. À vérifier sur la notice, pas à estimer ici.",
      },
      { type: "h2", text: "Quand l’épargne reste-t-elle chez le parent ?" },
      {
        type: "p",
        text: "Quand le ménage veut pouvoir s’en servir si un imprévu arrive. Le projet « études » n’est alors qu’une intention. En cas de décès du parent, cet argent entre dans la succession, avec les héritiers légaux. Une clause bénéficiaire sur un 3b ou un [risque pur décès](/risque-pur-deces/) est un autre outil, pas un automatisme.",
      },
      { type: "h2", text: "Que peut faire une assurance-vie 3b, et que ne fait-elle pas ?" },
      {
        type: "p",
        text: "Elle peut verser un capital si le parent décède, et parfois continuer les primes en cas d’incapacité ([libération du paiement des primes](/liberation-du-paiement-des-primes/)). Elle ne bat pas un compte « parce que c’est une assurance ». Les frais se lisent sur la table de valeurs de rachat. Le [3b](/3eme-pilier-b-prevoyance-libre/) n’a pas de plafond OFAS et n’est pas un second 3a. L’[assurance-vie en Suisse](/assurance-vie-en-suisse/) sépare risque pur, mixte et épargne.",
      },
      { type: "h2", text: "Et si l’enfant travaille déjà ?" },
      {
        type: "p",
        text: "Dès qu’un revenu est soumis à l’AVS, un 3a à son nom devient possible, dans la limite de son propre plafond. Ce n’est plus de l’épargne enfant au sens de cette page : c’est [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/) pour une personne active.",
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-b-prevoyance-libre",
    wpId: 2099,
    title: "3e pilier B, la prévoyance libre",
    metaTitle: "3e pilier B : prévoyance libre, sans plafond OFAS",
    description:
      "Le 3b n’est pas un second 3a. Souplesse, bénéficiaires, et déduction cantonale limitée aux primes d’assurance-vie.",
    published: "2021-11-06",
    updated: UPDATED,
    parents: [PILIER],
    intro: `Le 3b est la prévoyance libre. Il n’a pas de plafond OFAS et il n’est pas déductible comme le 3a. En 2026, le 3a déduit ${petit} avec un 2e pilier, ou jusqu’à ${grand} sans. Le 3b sert quand vous voulez choisir le bénéficiaire, garder un accès à l’argent, ou couvrir quelqu’un qui n’a pas de revenu AVS. ${NOTE_2027}.`,
    brief: [
      "Pas de plafond fédéral pour le 3b.",
      "La déduction cantonale, si elle existe, vise des primes d’assurance-vie, pas un livret.",
      "Genève et Fribourg sont les cas romands les plus cités. La notice de l’année fait foi.",
      "Utile pour un enfant, un concubin ou un projet à moyen terme.",
      "On sature en général le 3a avant d’ouvrir un 3b pour l’impôt.",
    ],
    related: ["3eme-pilier-a-ou-b", "epargne-enfant", "3eme-pilier-geneve", "3b-deduction-fribourg", "assurance-vie-en-suisse"],
    faqs: [
      {
        question: "Le 3b a-t-il un plafond OFAS ?",
        answer: `Non. L’OFAS ne fixe que le 3a (${petit} / ${grand} en 2026). ${NOTE_2027}. Une déduction 3b est cantonale, et elle concerne en pratique des primes d’assurance-vie.`,
      },
      {
        question: "Un compte d’épargne est-il un 3b déductible ?",
        answer:
          "On l’appelle parfois 3b parce qu’il est libre. Il n’ouvre pas, à lui seul, la déduction des primes d’assurance-vie à Genève ou à Fribourg.",
      },
      {
        question: "Faut-il un 3b en plus du 3a ?",
        answer:
          "Seulement si le 3a est déjà utilisé et qu’il reste un besoin : souplesse, bénéficiaire hors ordre légal, ou protection d’un enfant. Ce n’est pas une deuxième déduction fédérale.",
      },
    ],
    blocks: [
      { type: "h2", text: "À quoi sert la prévoyance libre ?" },
      {
        type: "ul",
        items: [
          "Désigner un bénéficiaire plus librement qu’en 3a.",
          "Épargner sans le verrou des motifs de retrait du 3a.",
          "Protéger un enfant ou un concubin. Voir [épargne enfant](/epargne-enfant/).",
          "Couvrir un décès avec une police, à côté ou à la place d’un compte.",
        ],
      },
      { type: "h2", text: "Pourquoi ce n’est pas un second 3a ?" },
      {
        type: "p",
        text: `À l’impôt fédéral, les primes 3b n’entrent pas dans le plafond ${petit}. Elles peuvent tomber dans l’enveloppe forfaitaire des primes d’assurances et des intérêts d’épargne, souvent déjà remplie par l’assurance-maladie. Promettre « la même déduction en 3b » est faux. Le cadre du 3a est sur [3a ou 3b](/3eme-pilier-a-ou-b/).`,
      },
      { type: "h2", text: "Que déduisent Genève et Fribourg ?" },
      {
        type: "p",
        text: `Genève (LIPP) et Fribourg (LICD) admettent, dans des limites cantonales, des primes d’assurance-vie. Des ordres de grandeur circulent (par exemple ${chf(FIGURES.fr3bSingle)} / ${chf(FIGURES.fr3bMarried)} à Fribourg pour certaines primes, ${chf(FIGURES.ge3bSingle)} / ${chf(FIGURES.ge3bMarried)} souvent cités à Genève). Ce sont des plafonds de primes, pas un crédit d’impôt automatique, et la notice de l’année l’emporte. Détail : [Genève](/3eme-pilier-geneve/) et [déduction fribourgeoise](/3b-deduction-fribourg/).`,
      },
      { type: "h2", text: "Compte, titres ou police ?" },
      {
        type: "p",
        text: "Un compte libre est liquide et peu chargé en frais. Il ne déduit en principe pas. Une police peut déduire une prime dans le canton et couvrir un décès, au prix de frais et d’une valeur de rachat à lire sur dix ans. Les titres peuvent baisser. Aucun de ces supports n’a un rendement garanti sauf clause contractuelle chiffrée.",
      },
      { type: "h2", text: "Qui ouvre un 3b sans pouvoir ouvrir un 3a ?" },
      {
        type: "p",
        text: "Une personne sans revenu soumis à l’AVS : conjoint au foyer, enfant, parfois un non-résident. Pour celui qui cotise déjà, on verse d’abord le 3a de l’année. [Ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/) rappelle cette condition.",
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-deces",
    wpId: 3202,
    title: "Assurance décès en Suisse",
    metaTitle: "Assurance décès en Suisse : 3a, 3b et capital famille",
    description:
      "Hub assurance décès : à quoi sert un capital, différence entre avoir 3a, police et risque pur, sans confondre épargne et protection.",
    published: "2022-03-18",
    updated: UPDATED,
    parents: [PILIER],
    intro:
      "Une assurance décès verse un capital aux personnes que vous désignez si vous mourrez pendant le contrat. En Suisse, ce capital peut être une police à part, une garantie dans un 3a ou un 3b, ou simplement l’avoir déjà épargné. Ce n’est pas la même chose. Cette page situe les familles de contrats. Le fonctionnement d’une temporaire, capital constant ou décroissant, est sur le guide du risque pur.",
    brief: [
      "L’avoir d’un compte 3a n’est pas un capital décès choisi à l’avance.",
      "Une police peut prévoir un capital défini. Il a un coût.",
      "Le risque pur ne constitue pas d’épargne.",
      "Le 3a impose un ordre de bénéficiaires. Le 3b est plus libre.",
      "On dimensionne le capital avec les dettes et les rentes de survivants déjà acquises.",
    ],
    related: ["risque-pur-deces", "3eme-pilier-mixte", "choisir-les-beneficiaires", "epargne-enfant", "3eme-pilier-banque-assurance"],
    faqs: [
      {
        question: "Un 3a bancaire protège-t-il la famille ?",
        answer:
          "Il transmet l’avoir constitué, selon l’ordre légal des bénéficiaires. Si la famille a besoin de 400'000 francs et que le compte en vaut 30'000, le trou n’est pas comblé par « un meilleur taux ».",
      },
      {
        question: "Faut-il fusionner épargne et décès dans le même contrat ?",
        answer:
          "Pas forcément. Un risque pur à côté d’un 3a bancaire est souvent plus lisible quand le besoin de capital est élevé et l’épargne encore faible. La police mixte a un sens sur un horizon long, si vous acceptez de payer les deux dans la même prime.",
      },
      {
        question: "Qui reçoit l’argent ?",
        answer:
          "En 3a, l’ordre est fixé par l’OPP 3. On précise à l’intérieur d’un rang, on n’invente pas un ordre contraire. En 3b ou en risque pur, la clause bénéficiaire est plus ouverte. Voir choisir les bénéficiaires.",
      },
    ],
    blocks: [
      { type: "h2", text: "Quel capital la famille a-t-elle déjà ?" },
      {
        type: "p",
        text: "Avant de signer, on additionne ce qui existerait sans nouvelle police : rente de survivant AVS, rente de conjoint de la caisse de pension, avoir LPP, 3a déjà ouverts, épargne bancaire. Le capital d’assurance couvre le reste : hypothèque, années où les enfants sont à charge, revenu du conjoint qui s’arrêterait. Ce n’est pas un multiple magique du salaire.",
      },
      { type: "h2", text: "Quelles formes existent ?" },
      {
        type: "ul",
        items: [
          "Compte ou titres 3a : seul l’avoir est versé.",
          "3a en assurance : épargne et décès dans la même prime. Voir [pilier mixte](/3eme-pilier-mixte/).",
          "[Risque pur](/risque-pur-deces/) : temporaire décès, sans valeur d’épargne, capital constant ou décroissant.",
          "3b : police libre, clause bénéficiaire plus souple, pas le plafond OFAS.",
        ],
      },
      { type: "h2", text: "En quoi le risque pur est-il un guide à part ?" },
      {
        type: "p",
        text: "Cette page ne répète pas le mode d’emploi de la temporaire. Le [risque pur décès](/risque-pur-deces/) explique la durée, le capital constant ou décroissant, l’absence de valeur de rachat et le questionnaire de santé. Il est la page enfant de ce hub : on vient ici pour choisir la famille de contrat, on va là-bas pour lire une temporaire.",
      },
      { type: "h2", text: "Que changent les bénéficiaires ?" },
      {
        type: "p",
        text: "Un concubin de moins de cinq ans n’est pas au même rang qu’un conjoint dans un 3a. Si la personne à protéger n’entre pas dans l’ordre légal, une police 3b ou un risque pur avec clause nominative est le levier, pas un compte 3a « bien placé ». Le détail est sur [choisir les bénéficiaires](/choisir-les-beneficiaires/).",
      },
      { type: "h2", text: "Quel lien avec la banque ou l’assurance 3a ?" },
      {
        type: "p",
        text: "Choisir une [banque ou une assurance](/3eme-pilier-banque-assurance/) pour le 3a, c’est aussi choisir si le décès est couvert au-delà de l’avoir. Une famille avec une hypothèque et de jeunes enfants n’a pas le même besoin qu’un célibataire sans dette. Pour un enfant, la question rejoint l’[épargne enfant](/epargne-enfant/), sans conclure qu’une police est toujours préférable.",
      },
    ],
  },
  {
    kind: "page",
    slug: "risque-pur-deces",
    wpId: 1892,
    title: "Risque pur décès : l’assurance temporaire",
    metaTitle: "Risque pur décès : temporaire, capital constant ou décroissant",
    description:
      "Guide de l’assurance temporaire décès en Suisse. Capital constant ou décroissant, sans valeur d’épargne. Page enfant de l’assurance décès.",
    published: "2021-11-12",
    updated: UPDATED,
    parents: [DECES],
    intro:
      "Le risque pur, ou assurance temporaire décès, paie un capital si vous décédez pendant une durée convenue. Il ne constitue pas d’épargne : la prime paie le risque. C’est souvent la façon la plus directe de couvrir une hypothèque ou des enfants en bas âge, à côté d’un 3a bancaire. Le panorama des autres formes de décès est sur la page parente.",
    brief: [
      "Pas de valeur de rachat, ou une valeur négligeable.",
      "Capital constant : la somme assurée ne baisse pas.",
      "Capital décroissant : il suit, par exemple, une hypothèque qui s’amortit.",
      "La santé à la souscription peut mener à une surprime ou à un refus.",
      "Ce n’est pas un 3a et ce n’est pas déductible comme un 3a.",
    ],
    related: ["assurance-deces", "3eme-pilier-mixte", "liberation-du-paiement-des-primes", "epargne-enfant"],
    faqs: [
      {
        question: "Le risque pur est-il un 3e pilier ?",
        answer:
          "Il peut être logé dans un 3a ou un 3b, ou rester une police de risque hors de ces enveloppes. S’il n’y a pas d’épargne reconnue, il ne joue pas le rôle fiscal d’un 3a bancaire. On ne le « déduit » pas au plafond OFAS faute de versement de prévoyance.",
      },
      {
        question: "Constant ou décroissant ?",
        answer:
          "Constant si le besoin reste le même (enfants, revenu à remplacer). Décroissant si la dette baisse chaque année et que vous ne voulez pas assurer un capital devenu trop grand. Le prix suit le capital et la durée.",
      },
      {
        question: "Pourquoi la valeur de rachat est-elle nulle ?",
        answer:
          "Parce que vous n’achetez pas un capital à l’échéance. Si vous êtes en vie au terme, la police s’arrête. C’est le contraire d’une mixte, qui mélange épargne et risque.",
      },
    ],
    blocks: [
      { type: "h2", text: "Comment fonctionne une temporaire décès ?" },
      {
        type: "p",
        text: "Vous choisissez un capital, une durée et les bénéficiaires. Vous payez une prime. Si le décès assuré survient pendant la durée, l’assureur paie. Si vous êtes en vie au terme, il ne reste en principe rien. Cette page est le guide de cette mécanique. Le choix entre avoir 3a, mixte et temporaire se fait d’abord sur [l’assurance décès en Suisse](/assurance-deces/).",
      },
      { type: "h2", text: "Capital constant ou capital décroissant ?" },
      {
        type: "table",
        headers: ["", "Capital constant", "Capital décroissant"],
        rows: [
          ["Montant versé", "Le même tout au long du contrat.", "Il baisse selon un plan, souvent calé sur une dette."],
          ["Usage typique", "Remplacer un revenu, protéger des enfants.", "Couvrir une hypothèque qui s’amortit."],
          ["Prime", "Plus élevée si le capital reste haut.", "Souvent plus basse, parce que le risque diminue."],
          ["Erreur fréquente", "Assurer trop court par rapport aux enfants.", "Croire que le capital de départ est encore dû à la fin."],
        ],
      },
      { type: "h2", text: "Que faut-il lire avant de signer ?" },
      {
        type: "ul",
        items: [
          "Capital, durée, et si la baisse est annuelle ou par paliers.",
          "Délai de carence, exclusions, sports, séjours à l’étranger.",
          "Questionnaire de santé : une surprime ou un refus vaut mieux qu’un contrat illisible « accepté ».",
          "Bénéficiaires nommés, et ce qui se passe en cas de séparation.",
          "Possibilité d’ajouter une rente d’invalidité ou une libération, qui n’est pas incluse d’office.",
        ],
      },
      { type: "h2", text: "En quoi ce n’est pas une mixte ?" },
      {
        type: "p",
        text: "La [police mixte](/3eme-pilier-mixte/) promet en général un capital si vous êtes en vie au terme et un capital si vous décédez avant. Vous payez l’épargne et le risque ensemble. Le risque pur ne fait que le second. Si votre besoin est un gros capital maintenant et peu d’épargne, mélanger les deux rend la prime opaque.",
      },
      { type: "h2", text: "Où le placer par rapport au 3a bancaire ?" },
      {
        type: "p",
        text: "Beaucoup de ménages gardent le 3a en banque pour la déduction et la souplesse, et mettent le décès dans une temporaire à côté. Ce n’est pas une règle. C’est une façon de voir le prix du risque sans le noyer dans des frais d’acquisition. La [libération des primes](/liberation-du-paiement-des-primes/) est une autre garantie, qui concerne l’incapacité, pas le décès.",
      },
    ],
  },
  {
    kind: "page",
    slug: "liberation-du-paiement-des-primes",
    wpId: 1929,
    title: "Libération du paiement des primes",
    metaTitle: "Libération des primes : incapacité et assurance 3e pilier",
    description:
      "Ce que fait vraiment la libération des primes en cas d’incapacité, le délai d’attente, et pourquoi un 3a bancaire ne l’inclut pas.",
    published: "2021-10-31",
    updated: UPDATED,
    parents: [DECES],
    intro:
      "La libération du paiement des primes est une garantie d’assurance. Si vous êtes en incapacité de gain, au-delà d’un délai et d’un degré prévus au contrat, l’assureur paie les primes à votre place. L’épargne du contrat continue. Un compte 3a en banque n’a pas cet équivalent : si vous ne versez plus, le compte s’arrête, sans que personne ne cotise pour vous.",
    brief: [
      "Ce n’est pas une rente d’invalidité, sauf si une rente est prévue en plus.",
      "Le délai d’attente (souvent 3, 6 ou 12 mois) change le prix et l’utilité.",
      "Un degré minimal d’incapacité est exigé. Lisez-le.",
      "Les exclusions (dos, psyché, sports) comptent plus qu’un slogan.",
      "Utile seulement si vous tenez le contrat assez longtemps pour que la garantie existe.",
    ],
    related: ["3eme-pilier-banque-assurance", "risque-pur-deces", "assurance-deces", "2eme-pilier-lpp", "epargne-enfant"],
    faqs: [
      {
        question: "La libération verse-t-elle un revenu ?",
        answer:
          "Non, pas à elle seule. Elle prend en charge les primes du contrat d’assurance. Une rente d’invalidité est une autre garantie, souvent celle de l’AI et de la caisse de pension d’abord.",
      },
      {
        question: "Un 3a bancaire peut-il être « libéré » ?",
        answer:
          "Non. Sans versement, il n’y a simplement pas de nouveau capital. La protection du revenu passe par l’AI, la LPP et, si vous la souscrivez, une assurance d’incapacité séparée.",
      },
      {
        question: "Faut-il la prendre pour un enfant ?",
        answer:
          "Seulement si le parent est l’assuré et que l’objectif est de continuer une police malgré une incapacité. Ce n’est pas une raison suffisante pour préférer une assurance à un compte. Voir épargne enfant.",
      },
    ],
    blocks: [
      { type: "h2", text: "Que paie exactement l’assureur ?" },
      {
        type: "p",
        text: "Les primes du contrat auquel la garantie est attachée, pendant l’incapacité reconnue, jusqu’à la fin prévue (souvent un âge, pas la vie entière). Le capital au terme continue de se constituer comme si vous payiez. Vous ne recevez pas cet argent sur votre compte courant.",
      },
      { type: "h2", text: "Quel délai et quel degré ?" },
      {
        type: "p",
        text: "Le délai d’attente est la période pendant laquelle vous êtes en incapacité sans que la garantie joue. Trois mois coûtent plus cher que douze, et couvrent davantage. Le degré minimal (par exemple 50 % ou 70 %) décide si une incapacité partielle suffit. Ces deux lignes valent plus que le taux affiché en gros sur une offre.",
      },
      { type: "h2", text: "Quelles limites lire deux fois ?" },
      {
        type: "ul",
        items: [
          "Définition de l’incapacité : maladie, accident, ou les deux.",
          "Exclusions : affections du dos, troubles psychiques, sports à risque.",
          "Fin de garantie, souvent avant l’âge de référence AVS.",
          "Délai de carence en début de contrat.",
          "Ce qui se passe si vous changez de profession.",
        ],
      },
      { type: "h2", text: "Où cela se place-t-il face à l’AI et à la LPP ?" },
      {
        type: "p",
        text: "L’AI et le [2e pilier](/2eme-pilier-lpp/) sont les premières rentes d’invalidité. La libération des primes ne les remplace pas. Elle évite seulement qu’une police s’arrête parce que vous ne pouvez plus la payer. Si vous n’avez pas de police, la question ne se pose pas : retour au choix [banque ou assurance](/3eme-pilier-banque-assurance/).",
      },
      { type: "h2", text: "En quoi ce n’est pas une assurance décès ?" },
      {
        type: "p",
        text: "Le décès verse un capital aux bénéficiaires. La libération maintient les primes d’une personne encore en vie mais en incapacité. Les deux peuvent figurer sur la même police. Elles se lisent séparément. Le cadre du décès est sur [assurance décès](/assurance-deces/) et, pour une temporaire sans épargne, sur le [risque pur](/risque-pur-deces/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "a-propos",
    title: "À propos",
    metaTitle: "À propos du comparateur 3e pilier",
    description:
      "Qui publie le comparatif, comment les chiffres sont vérifiés, et ce que le site ne fait pas. Information générale, pas un conseil personnalisé.",
    published: "2026-09-20",
    updated: UPDATED,
    parents: [],
    intro:
      "Le site comparateur-3eme-pilier.ch explique le 3e pilier à partir des textes de l’OFAS et de l’AFC, et recueille des demandes de comparatif. Christophe Bouin en est le responsable du contenu et du comparatif. Le site ne classe pas des produits et ne promet pas un rendement.",
    brief: [
      "Information générale pour la Suisse romande.",
      "Plafonds 3a cités pour 2026, source OFAS.",
      NOTE_2027,
      "Comparatif présenté comme gratuit et sans engagement.",
      "Pas de portrait ni de diplôme publié : ils ne sont pas établis ici.",
    ],
    related: ["methode-sources-ofas-afc", "mentions-legales", "deductions-fiscales-3eme-pilier", "analyse-de-prevoyance"],
    faqs: [
      {
        question: "Le site donne-t-il un conseil personnalisé ?",
        answer:
          "Non. Les pages décrivent des règles générales. Un comparatif demandé via le formulaire est un échange sur votre situation, pas un mandat de gestion signé sur le site.",
      },
      {
        question: "D’où viennent les chiffres ?",
        answer: `Du tableau OFAS au 1er janvier 2026 et de l’art. 7 OPP 3, vérifiés le ${REVIEW_LABEL}. ${NOTE_2027}. La méthode de lecture des sources est sur la page méthode OFAS / AFC.`,
      },
    ],
    blocks: [
      { type: "h2", text: "Qui opère le service ?" },
      {
        type: "p",
        text: `${LEGAL.LEGAL_RESPONSIBLE_PERSON} rédige ou fait vérifier les pages et traite les demandes de comparatif. Contact : ${LEGAL.LEGAL_CONTACT}. La raison sociale, l’adresse et l’UID ne sont pas publiés tant qu’ils ne sont pas établis : voir les [mentions légales](/mentions-legales/).`,
      },
      { type: "h2", text: "Pourquoi le site existe-t-il ?" },
      {
        type: "p",
        text: "Pour permettre de comparer un 3a et un 3b, en banque ou en assurance, avant de s’engager. Le formulaire décrit la situation. Un conseiller partenaire rappelle. Vous restez libre de ne rien signer.",
      },
      { type: "h2", text: "Comment les pages sont-elles mises à jour ?" },
      {
        type: "p",
        text: `Les plafonds 3a 2026 viennent du tableau OFAS (PDF du 6 novembre 2025). ${NOTE_2027}. Dernière vérification le ${REVIEW_LABEL}. Une date de build ne vaut pas une vérification.`,
      },
      { type: "h2", text: "Que compare le service, et que ne compare-t-il pas ?" },
      {
        type: "p",
        text: "Le retour porte sur les solutions accessibles dans le cadre du service : frais, souplesse des versements, valeur de rachat, garanties décès ou incapacité, horizon. Le site ne prétend pas lister tous les établissements de Suisse. La [méthodologie du comparatif](/methodologie-comparatif/) dit ce qui est lu. La [méthode des sources](/methode-sources-ofas-afc/) dit d’où viennent les chiffres. La personne responsable est [Christophe Bouin](/christophe-bouin/).",
      },
      { type: "h2", text: "Quelles sont les limites ?" },
      {
        type: "ul",
        items: [
          "Pas un remplacement de votre fiduciaire ou de votre caisse de pension.",
          "Pas un rendement garanti.",
          "Pas une inscription FINMA affichée : aucune n’est documentée dans le projet.",
          `${LEGAL.LEGAL_COMPENSATION_DISCLOSURE}`,
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "mentions-legales",
    title: "Mentions légales",
    metaTitle: "Mentions légales — Comparateur 3e pilier",
    description:
      "Éditeur, contact et limites du service. Les champs non établis (UID, adresse, FINMA) sont indiqués comme tels.",
    published: "2026-09-20",
    updated: UPDATED,
    parents: [],
    intro:
      "Ces mentions décrivent le site comparateur-3eme-pilier.ch. Seuls les éléments déjà établis sont affirmés. L’adresse, l’UID et un statut d’intermédiaire ne sont pas inventés.",
    brief: [
      "Nom d’usage : Comparateur 3ème pilier.",
      `Responsable du contenu : ${LEGAL.LEGAL_RESPONSIBLE_PERSON}.`,
      `Contact : ${LEGAL.LEGAL_CONTACT}.`,
      "Comparatif présenté comme gratuit et sans engagement.",
      "Raison sociale, adresse, UID et registre : en attente de validation.",
    ],
    related: ["a-propos", "page-de-confidentialitee"],
    blocks: [
      { type: "h2", text: "Identification" },
      {
        type: "ul",
        items: [
          "Nom d’usage : Comparateur 3ème pilier.",
          `Raison sociale : ${LEGAL.LEGAL_ENTITY_NAME}.`,
          `Adresse : ${LEGAL.LEGAL_ADDRESS}.`,
          `IDE / UID : ${LEGAL.LEGAL_UID}.`,
          `Responsable du contenu et du comparatif : ${LEGAL.LEGAL_RESPONSIBLE_PERSON}.`,
          `Contact : ${LEGAL.LEGAL_CONTACT}.`,
        ],
      },
      { type: "h2", text: "Statut et registre" },
      {
        type: "ul",
        items: [
          LEGAL.LEGAL_INTERMEDIARY_STATUS,
          `Registre : ${LEGAL.LEGAL_REGISTER_URL}.`,
        ],
      },
      { type: "h2", text: "Nature du service" },
      {
        type: "p",
        text: "Le site publie une information générale sur le 3e pilier et recueille une demande de comparatif. Ce n’est pas un conseil en placement personnalisé conclu sur cette page. Le détail du rôle de l’éditeur est sur [à propos](/a-propos/).",
      },
      { type: "h2", text: "Rémunération" },
      {
        type: "p",
        text: LEGAL.LEGAL_COMPENSATION_DISCLOSURE,
      },
      { type: "h2", text: "Données et propriété" },
      {
        type: "p",
        text: "Le traitement des demandes est décrit dans la [politique de confidentialité](/page-de-confidentialitee/), dont le slug historique est conservé. Les textes de cette version du site sont rédigés pour le comparateur. Les URL anciennes sont conservées ou redirigées, elles ne sont pas effacées.",
      },
    ],
  },
];
