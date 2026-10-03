import { chf, FIGURES, pillar3aTableRows, YEAR_SPAN, YEAR_SPAN_WORDS, CEILING_NOTE } from "@/lib/figures";
import type { EditorialDoc } from "./types";

const UPDATED = "2026-09-20";
const PUBLISHED_CONVERSION = "2026-10-03";
const METHOD_INLINE =
  "Méthode : textes officiels OFAS (tableau 2026) et AFC, notices cantonales pour le 3b. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Dernière revue : 19 septembre 2026.";

export const PAGES: EditorialDoc[] = [
  {
    kind: "page",
    slug: "3eme-pilier-suisse",
    title: "3e pilier Suisse : prévoyance individuelle",
    metaTitle: "3e pilier Suisse : 3a, 3b, banque ou assurance",
    description: `Le 3e pilier Suisse complète l’AVS et le 2e pilier. 3a lié et 3b libre, déduction 2026 de ${chf(FIGURES.pillar3aWithLpp)} pour un affilié au 2e pilier, comparatif banque ou assurance.`,
    published: "2026-09-28",
    updated: "2026-09-28",
    intro:
      "Le 3e pilier Suisse est la prévoyance individuelle. Il complète l’AVS (1er pilier) et la prévoyance professionnelle (2e pilier). Il se présente en 3a, lié, et en 3b, libre. Comparer une banque et une assurance sert à départager frais, souplesse et garanties.",
    related: [
      "3eme-pilier-a-ou-b",
      "3eme-pilier-b-prevoyance-libre",
      "3eme-pilier-banque-assurance",
      "deductions-fiscales-3eme-pilier",
      "1er-pilier-avs-ai-apg",
      "2eme-pilier-lpp",
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
        answer: `Non. Au 28 septembre 2026, le plafond 2027 n’est pas encore annoncé. Pour 2026, la déduction maximale du pilier 3a, pour une personne affiliée à une institution du 2e pilier, est de ${chf(FIGURES.pillar3aWithLpp)}.`,
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
        text: "Il ne remplace ni la rente AVS ni l’avoir de caisse de pension. Il les complète, dans la limite de ce que le budget permet de verser dans la durée. Le 3a suit l’OPP 3 (déductions admises fiscalement au titre de la prévoyance). Le 3b est de la prévoyance libre : pas le même verrou, pas le même traitement fiscal.",
      },
      { type: "h2", text: "3a lié et 3b libre" },
      {
        type: "p",
        text: "Les deux formes s’emboîtent. Le détail est sur les pages [3e pilier A ou B](/3eme-pilier-a-ou-b/) et [prévoyance libre 3b](/3eme-pilier-b-prevoyance-libre/).",
      },
      {
        type: "ul",
        items: [
          "3a (prévoyance liée) : encouragé fiscalement dans toute la Suisse. Ouvert à une personne qui exerce une activité lucrative dont le revenu est soumis à l’AVS — salariés, indépendants, certains chômeurs (indemnités journalières) et frontaliers dans ce cas. Source : OFAS / circulaire AFC n° 18.",
          "3a : le capital est versé au plus tôt cinq ans avant l’âge de référence AVS, au plus tard cinq ans après si l’activité se poursuit. Motifs anticipés : logement pour propre usage, remboursement d’hypothèque, départ définitif de Suisse, activité indépendante, rachat LPP, invalidité entière AI non couverte. L’ordre des bénéficiaires en cas de décès est légal.",
          "3b (prévoyance libre) : pas de condition AVS comparable, pas de plafond OFAS. Utile pour un conjoint sans activité, une épargne enfant ou un bénéficiaire que l’ordre du 3a ne couvre pas. Le retrait est beaucoup plus libre.",
          "3b et impôts : pas la même déduction que le 3a à l’impôt fédéral direct. Dans certains cantons seulement (Genève et Fribourg sont les cas romands les plus cités), des primes d’assurance-vie peuvent entrer dans une enveloppe cantonale. Un compte bancaire 3b n’ouvre pas cette déduction.",
        ],
      },
      { type: "h2", text: "À qui s’adresse le 3e pilier" },
      {
        type: "p",
        text: "Le 3e pilier Suisse s’adresse à qui veut compléter l’AVS et le 2e pilier, ou protéger un proche que le 3a ne vise pas. Le bon point d’entrée dépend du statut, pas d’un produit unique.",
      },
      {
        type: "ul",
        items: [
          "Salarié affilié à une caisse de pension : le 3a complète l’AVS et la LPP, dans la limite de la petite cotisation.",
          "[Indépendant](/3eme-pilier-independant/) : l’affiliation, ou non, à une institution du 2e pilier change la cotisation 3a admise. Le choix banque ou assurance se lit ensuite.",
          "[Frontalier](/frontalier-suisse/) : l’accès au 3a suppose un revenu d’activité en Suisse soumis à l’AVS. Le permis ne suffit pas.",
          "Personne sans revenu soumis à l’AVS (conjoint sans activité, [épargne enfant](/epargne-enfant/)) : le 3a n’est en principe pas ouvert. Le 3b sert alors la souplesse.",
        ],
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
          "3b à visée fiscale cantonale (Genève, Fribourg) : le support cité sur le site est une assurance-vie, pas un livret.",
        ],
      },
      {
        type: "p",
        text: "La grille de lecture est sur [3e pilier en banque ou en assurance](/3eme-pilier-banque-assurance/) et sur [comment choisir son 3e pilier](/choisir-son-3eme-pilier/). Pour faire examiner frais, souplesse et garanties sur votre situation : [demander un comparatif](/formulaire-3eme-pilier/).",
      },
      { type: "h2", text: "Déduction maximale du 3a en 2026" },
      {
        type: "p",
        text: `Pour 2026, la déduction maximale du pilier 3a, pour une personne affiliée à une institution du 2e pilier, est de ${chf(FIGURES.pillar3aWithLpp)}. Sans institution du 2e pilier, une autre limite s’applique : elle est déjà détaillée sur la page [déductions fiscales du 3e pilier](/deductions-fiscales-3eme-pilier/).`,
      },
      {
        type: "p",
        text: "Au 28 septembre 2026, le plafond 2027 n’est pas encore annoncé. La publication est attendue cet automne, probablement en octobre ou novembre 2026. L’AFC a communiqué le plafond 2026 le 17 novembre 2025.",
      },
      {
        type: "callout",
        title: "Pas de montant 2027 officieux",
        text: "Aucun plafond 2027 n’est présenté ici comme décidé. Le chiffre retenu pour 2026 est celui déjà publié sur le site pour la personne affiliée au 2e pilier.",
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-a-ou-b",
    wpId: 2060,
    title: `3e pilier A ou B : comment choisir en ${YEAR_SPAN}`,
    metaTitle: "3e pilier A ou B : fiscalité, retraits, bénéficiaires",
    description:
      `Différences 3a / 3b en ${YEAR_SPAN_WORDS} : plafonds OFAS / OPP 3, retraits, bénéficiaires, Genève et Fribourg. Comparatif gratuit, sans honoraires.`,
    published: "2021-11-04",
    updated: UPDATED,
    intro:
      "Faut-il choisir 3a ou 3b ? Le plus souvent, les deux s’emboîtent. Le 3a (prévoyance liée) est encouragé fiscalement dans toute la Suisse. Le 3b (prévoyance libre) sert surtout la souplesse : bénéficiaires, durée, accès à l’épargne. Ce n’est pas un classement, c’est un emboîtement avec vos 1er et 2e piliers.",
    related: [
      "3eme-pilier-suisse",
      "3eme-pilier-b-prevoyance-libre",
      "deductions-fiscales-3eme-pilier",
      "3eme-pilier-banque-assurance",
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "combiner-3a-et-3b-2026",
      "actualite-3eme-pilier",
    ],
    faqs: [
      {
        question: "Peut-on combiner 3a et 3b ?",
        answer:
          "Oui. Beaucoup de ménages romands saturent d’abord le 3a (déduction nationale), puis complètent en 3b si le budget, la protection famille ou un projet à moyen terme le justifient.",
      },
      {
        question: "Le 3b est-il déductible à Genève ?",
        answer:
          "Pas en tant que « 3b » : la LIPP vise les primes d’assurance-vie, dans une enveloppe commune avec les intérêts d’épargne. Un compte bancaire 3b n’ouvre pas cette déduction. Les montants exacts figurent dans la notice fiscale cantonale de l’année.",
      },
    ],
    blocks: [
      {
        type: "h2",
        text: "Qui peut souscrire ?",
      },
      {
        type: "ul",
        items: [
          "3a : personne exerçant une activité lucrative dont le revenu est soumis à l’AVS en Suisse — salariés, indépendants, certains chômeurs (indemnités journalières) et frontaliers dans ce cas. Source : OFAS / circulaire AFC n° 18.",
          "3b : pas de condition AVS comparable. Utile pour un conjoint sans activité, un enfant (épargne / protection) ou un non-résident qui n’a pas accès au 3a.",
        ],
      },
      {
        type: "h2",
        text: `Déduction fiscale ${YEAR_SPAN}`,
      },
      {
        type: "table",
        caption: `Plafonds 3a 2026 (OFAS / art. 7 OPP 3) — valables Confédération, cantons et communes. ${CEILING_NOTE}.`,
        headers: ["Situation", `Maximum ${YEAR_SPAN}`],
        rows: [
          [`Salarié ou indépendant affilié au 2e pilier (« petite cotisation »)`, chf(FIGURES.pillar3aWithLpp)],
          [
            `Sans institution du 2e pilier (« grande cotisation »)`,
            `${FIGURES.pillar3aWithoutLppRate} du revenu d’activité, max. ${chf(FIGURES.pillar3aWithoutLpp)}`,
          ],
          [
            `Rachat d’une lacune (dès 2026, pour 2025)`,
            `Jusqu’à ${chf(FIGURES.buybackMax)} en plus de la cotisation ordinaire, sous conditions OFAS`,
          ],
        ],
      },
      {
        type: "p",
        text: "Le 3b n’est pas déductible à l’impôt fédéral direct comme le 3a. Au canton, seuls certains régimes (Genève, Fribourg notamment) admettent les primes d’assurance-vie dans une enveloppe déjà largement occupée par la LAMal. Voir la page déductions et la landing Genève.",
      },
      {
        type: "h2",
        text: "Retrait et imposition",
      },
      {
        type: "ul",
        items: [
          "3a : versement au plus tôt cinq ans avant l’âge de référence AVS, au plus tard cinq ans après si vous restez actif. Motifs anticipés : logement pour propre usage, remboursement d’hypothèque, départ définitif de Suisse, activité indépendante, rachat LPP, invalidité entière AI non couverte.",
          "3a au dénouement : imposition séparée du reste du revenu, à un taux réduit (pratique souvent présentée comme le cinquième du barème — le taux effectif dépend du canton et du montant).",
          "3b : retrait beaucoup plus libre. Pendant le contrat, la valeur de rachat entre dans la fortune imposable. Au terme, le capital n’est en principe pas imposé comme un 3a ; les plus-values d’assurance-vie suivent les règles cantonales.",
        ],
      },
      {
        type: "h2",
        text: "Bénéficiaires en cas de décès",
      },
      {
        type: "p",
        text: "Le 3a suit un ordre légal (conjoint ou partenaire enregistré, puis descendants et personnes à charge / communauté de vie, puis parents, frères et sœurs, autres héritiers). Le 3b permet de désigner plus librement un bénéficiaire — y compris un associé ou une personne hors succession. Détail : page « choisir les bénéficiaires ».",
      },
      {
        type: "h2",
        text: "Banque ou assurance, 3a ou 3b",
      },
      {
        type: "p",
        text: "Le 3a existe en fondation bancaire et en police d’assurance. Le 3b « utile fiscalement » à Genève ou Fribourg est une assurance-vie, pas un compte. Pour un horizon court, la banque 3a évite souvent les frais d’acquisition d’une police. Pour un capital décès, une libération de primes ou un capital garanti, l’assurance entre en jeu.",
      },
      {
        type: "callout",
        title: "Chiffres 2023–2024 encore cités ailleurs",
        text: `Les anciens plafonds 7’056 / 35’280 (2023–2024) ou 34’416 (jusqu’en 2022) ne s’appliquent plus. En 2026 : ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}. ${CEILING_NOTE}.`,
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-b-prevoyance-libre",
    wpId: 2099,
    title: "3e pilier B — prévoyance libre",
    metaTitle: `3e pilier B ${YEAR_SPAN} : prévoyance libre, Genève, Fribourg`,
    description:
      `Le 3b n’est pas un second 3a. Souplesse des retraits et des bénéficiaires, déduction limitée à certains cantons. Mode d’emploi ${YEAR_SPAN}.`,
    published: "2021-11-06",
    updated: UPDATED,
    intro: `Le 3b est-il un second plafond OFAS ? Non. En 2026 le 3a déduit ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} (art. 7 OPP 3). ${CEILING_NOTE}. Le 3b n’a pas de maximum fédéral : il sert la souplesse, et, dans certains cantons seulement, une enveloppe de primes d’assurance-vie.`,
    related: [
      "3eme-pilier-a-ou-b",
      "3eme-pilier-geneve",
      "3b-deduction-fribourg",
      "combiner-3a-et-3b-2026",
      "epargne-enfant",
    ],
    faqs: [
      {
        question: "Le 3b a-t-il un plafond OFAS ?",
        answer: `Non. L’OFAS fixe le 3a pour 2026 (${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}). ${CEILING_NOTE}. Une déduction 3b, si elle existe, est cantonale et concerne en pratique des primes d’assurance-vie.`,
      },
      {
        question: "Un compte bancaire 3b déduit-il à Genève ou Fribourg ?",
        answer:
          "En principe non : l’enveloppe vise les primes d’assurance-vie, pas un livret. Vérifiez la notice cantonale de l’année (AFC-GE, administration fiscale fribourgeoise).",
      },
    ],
    blocks: [
      { type: "h2", text: "À quoi sert le 3b" },
      {
        type: "ul",
        items: [
          "Protéger un enfant, un concubin ou un associé hors ordre 3a.",
          "Épargner sans le verrou des motifs de retrait 3a.",
          "Compléter un 3a déjà saturé.",
          "Couvrir un risque (décès, invalidité) avec une police vie.",
        ],
      },
      {
        type: "h2",
        text: "Fiscalité : ne pas promettre un 3a bis",
      },
      {
        type: "p",
        text: `À l’impôt fédéral, les primes 3b ne bénéficient pas du plafond ${chf(FIGURES.pillar3aWithLpp)}. Elles entrent, le cas échéant, dans l’enveloppe forfaitaire des primes d’assurances et intérêts d’épargne (LIFD), souvent déjà saturée par l’assurance-maladie. Genève (LIPP, primes d’assurance-vie) et Fribourg (LICD, ${chf(FIGURES.fr3bSingle)} personne seule / ${chf(FIGURES.fr3bMarried)} couple pour les primes-vie) restent les cas romands les plus cités — à vérifier sur la notice de l’année.`,
      },
      {
        type: "callout",
        title: "Compte bancaire 3b",
        text: "Un compte d’épargne libre n’ouvre pas la déduction « primes d’assurance-vie ». Si l’objectif est fiscal cantonal, le support est une police, pas un livret.",
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-banque-assurance",
    wpId: 1160,
    title: "3e pilier en banque ou en assurance",
    metaTitle: "3e pilier banque ou assurance : frais et garanties",
    description:
      "Même déduction 3a, supports différents. Banque : flexibilité. Assurance : garanties, décès, libération des primes. Comment départager.",
    published: "2021-10-31",
    updated: UPDATED,
    intro:
      "La déduction 3a 2026 est identique que l’argent soit versé à une fondation bancaire ou à un assureur. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Ce qui change : les frais, les garanties, la discipline d’épargne et ce qui reste si vous arrêtez au bout de trois ans.",
    related: [
      "choisir-entre-3eme-pilier-bancaire-ou-en-assurance",
      "liberation-du-paiement-des-primes",
      "frais-3a-banque-assurance",
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "choisir-son-3eme-pilier",
    ],
    faqs: [
      {
        question: "Les 100’000 CHF de garantie s’appliquent-ils au 3a bancaire ?",
        answer:
          "Les dépôts bancaires suisses sont garantis jusqu’à 100’000 CHF par client et par banque (esisuisse). Les comptes de prévoyance 3a auprès d’une fondation bancaire relèvent du régime de la fondation : lisez le prospectus. Les titres 3a ne sont pas un dépôt à vue.",
      },
      {
        question: "L’assurance 3a déduit-elle davantage que la banque ?",
        answer:
          "Non. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Le plafond 2026 ne dépend pas du prestataire.",
      },
    ],
    blocks: [
      { type: "h2", text: "Banque" },
      {
        type: "p",
        text: "Vous versez quand vous le pouvez, jusqu’au plafond. Idéal si votre capacité d’épargne varie, si l’horizon est inférieur à une dizaine d’années, ou si vous voulez arbitrer entre compte et titres. Pas de capital décès intégré, pas de libération des primes : la famille n’est protégée que par l’avoir accumulé (et d’éventuelles polices séparées).",
      },
      { type: "h2", text: "Assurance" },
      {
        type: "p",
        text: "La police fixe souvent un rythme de primes, un capital à l’échéance, un capital décès, parfois une rente d’invalidité et la libération du paiement des primes. Ces garanties ont un coût, surtout les premières années : une résiliation précoce laisse une valeur de rachat inférieure aux primes versées. Un horizon long (souvent 8 à 10 ans et plus) est le filtre le plus honnête.",
      },
      {
        type: "h2",
        text: "Points communs",
      },
      {
        type: "ul",
        items: [
          `Même plafond 3a ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}.`,
          "Mêmes motifs de retrait liés OPP 3.",
          "Même imposition du capital 3a au dénouement.",
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-mixte",
    wpId: 2129,
    title: "3e pilier mixte",
    metaTitle: "3e pilier mixte : épargne et risque dans une police",
    description:
      `Une police mixte combine constitution de capital et couverture décès. Intérêt, limites, et quand séparer les deux contrats (${YEAR_SPAN}).`,
    published: "2022-03-17",
    updated: "2026-10-03",
    intro:
      "On appelle souvent « mixte » une assurance-vie qui verse un capital à l’échéance si vous êtes en vie, et un capital (parfois le même, parfois un autre) en cas de décès. C’est un outil, pas un produit obligatoire du 3a. La déduction fédérale ne suit que si la police est un 3a, dans les limites légales.",
    related: ["assurance-vie-en-suisse", "risque-pur-deces", "3eme-pilier-banque-assurance"],
    blocks: [
      {
        type: "p",
        text: "L’intérêt : un seul contrat pour épargner et protéger. La limite : vous payez le risque et l’épargne dans la même prime, avec une transparence des frais parfois médiocre. Si le besoin décès est élevé et l’épargne faible, un risque pur (temporaire décès) plus un 3a bancaire est souvent plus lisible. Si l’horizon est long et que vous voulez une discipline de primes, le mixte peut coller. La prime n’est déductible au titre du 3a que si la police est une prévoyance liée, dans les limites de l’art. 7 OPP 3. Une mixte 3b n’ouvre pas la déduction fédérale générale du 3a.",
      },
      {
        type: "callout",
        title: "À comparer noir sur blanc",
        text: "Capital à l’échéance, capital décès, valeur de rachat année par année, frais, participation aux excédents. Sans ces quatre lignes, ce n’est pas un comparatif.",
      },
    ],
  },
  {
    kind: "page",
    slug: "choisir-son-3eme-pilier",
    wpId: 6635,
    title: "Comment choisir son 3e pilier",
    metaTitle: "Choisir son 3e pilier : méthode, pas un palmarès",
    description:
      `Grille de choix 3a/3b, banque/assurance, montant, canton et famille en ${YEAR_SPAN}. Comparatif indépendant, sans honoraires.`,
    published: "2023-06-01",
    updated: UPDATED,
    intro:
      "Choisir un 3e pilier, ce n’est pas « le meilleur taux du moment ». C’est aligner un plafond fiscal, un horizon, un risque famille et un support (compte, titres, police) que vous tiendrez réellement.",
    related: [
      "analyse-de-prevoyance",
      "3eme-pilier-a-ou-b",
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "formulaire-3eme-pilier",
    ],
    blocks: [
      { type: "h2", text: "Cinq questions avant le produit" },
      {
        type: "ol",
        items: [
          "Quel trou entre vos rentes AVS/LPP et le budget de retraite visé ?",
          `Pouvez-vous viser le plafond 3a ${chf(FIGURES.pillar3aWithLpp)} sans mettre en péril votre épargne de précaution ?`,
          "Faut-il un capital décès ou une libération de primes, ou seulement de l’épargne ?",
          "Horizon : moins de 8 ans, ou jusqu’à l’âge de référence ?",
          "Canton et statut (salarié, indépendant, frontalier, TOU) : la fiscalité n’est pas la même.",
        ],
      },
      {
        type: "h2",
        text: "Ce que nous comparons",
      },
      {
        type: "p",
        text: "Décrivez votre projet. Un conseiller vous rappelle sous deux jours ouvrés pour examiner les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Comparatif gratuit et sans engagement.",
      },
      {
        type: "p",
        text: METHOD_INLINE,
      },
    ],
  },
  {
    kind: "page",
    slug: "ouvrir-un-3eme-pilier",
    title: "Ouvrir un 3e pilier en 2026",
    metaTitle: "Ouvrir un 3e pilier en 2026 : conditions, plafond, délai",
    description:
      "Ouvrir un 3a en 2026 : revenu soumis à l’AVS, plafonds OFAS 7’258 / 36’288 CHF, crédit au 31 décembre. Banque ou assurance, puis comparatif sans honoraires.",
    published: PUBLISHED_CONVERSION,
    updated: PUBLISHED_CONVERSION,
    lead: "comparateur",
    intro: `On ouvre un 3a en 2026 dès qu’un revenu d’activité est soumis à l’AVS en Suisse. Le plafond déductible est ${chf(FIGURES.pillar3aWithLpp)} avec un 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans (OFAS, art. 7 OPP 3). Le crédit doit tomber au 31 décembre. Sans AVS, seul le 3b reste ouvert.`,
    howTo: {
      name: "Comment ouvrir un 3e pilier en 2026",
      steps: [
        {
          name: "Vérifier l’AVS et le 2e pilier",
          text: `Le 3a est ouvert si le revenu d’activité est soumis à l’AVS en Suisse : salarié, indépendant, certains chômeurs indemnisés, frontalier dans ce cas. Avec une caisse LPP, le plafond 2026 est ${chf(FIGURES.pillar3aWithLpp)}. Sans institution du 2e pilier : 20 % du revenu d’activité, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}. Source : OFAS, art. 7 OPP 3.`,
        },
        {
          name: "Saturer le 3a avant d’ouvrir un 3b",
          text: "Le 3b n’a pas de plafond OFAS et n’est pas déductible à l’impôt fédéral comme le 3a. Il sert la souplesse (bénéficiaires, accès à l’épargne) ou, à Genève et à Fribourg, une enveloppe cantonale de primes d’assurance-vie.",
        },
        {
          name: "Choisir la banque si l’horizon est court",
          text: "Une fondation bancaire accepte des versements libres jusqu’au plafond, en compte ou en titres. Il n’y a pas de capital décès intégré. C’est le support le plus lisible si un logement ou un départ est envisagé avant une dizaine d’années.",
        },
        {
          name: "Choisir l’assurance si la famille doit être protégée",
          text: "La police fixe souvent un rythme de primes, un capital décès et parfois la libération des primes. Les premières années, la valeur de rachat est en général inférieure aux primes versées. L’horizon long est le filtre honnête.",
        },
        {
          name: "Créditer le versement avant le 31 décembre 2026",
          text: "C’est la date de valeur au crédit du compte ou de la police qui compte pour la déduction 2026, pas la date de l’ordre. Beaucoup d’établissements fixent une date limite vers la mi-décembre pour que le crédit tombe encore dans l’année.",
        },
      ],
    },
    related: [
      "3eme-pilier-a-ou-b",
      "3eme-pilier-banque-assurance",
      "deductions-fiscales-3eme-pilier",
      "3eme-pilier-independant",
      "frontalier-suisse",
      "3eme-pilier-logement",
      "rachat-lacunes-3a-2026",
      "quand-commencer-le-3eme-pilier",
    ],
    faqs: [
      {
        question: "Qui peut ouvrir un 3e pilier A en Suisse ?",
        answer: `Toute personne dont le revenu d’activité est soumis à l’AVS en Suisse. Le plafond 2026 est ${chf(FIGURES.pillar3aWithLpp)} avec un 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans. Source : OFAS, art. 7 OPP 3. ${CEILING_NOTE}.`,
      },
      {
        question: "Peut-on ouvrir plusieurs comptes 3a ?",
        answer:
          "Oui. Plusieurs relations 3a sont possibles. Le total versé dans l’année ne doit pas dépasser le plafond OFAS. Plusieurs comptes servent surtout à échelonner les retraits plus tard, ou à n’en mobiliser qu’un pour un logement.",
      },
      {
        question: "Faut-il ouvrir le 3a avant le 31 décembre 2026 ?",
        answer:
          "Le compte ou la police doit exister à temps pour que le versement soit crédité au 31 décembre 2026. Un ordre passé trop tard bascule sur 2027. Beaucoup de banques coupent les versements vers la mi-décembre.",
      },
      {
        question: "Un enfant peut-il ouvrir un 3a ?",
        answer:
          "Non s’il n’a pas de revenu soumis à l’AVS. L’épargne enfant passe par un compte, une police 3b, ou le 3a des parents avec une clause bénéficiaire. Voir la page épargne enfant.",
      },
      {
        question: "Quels documents faut-il pour ouvrir un pilier 3a ?",
        answer:
          "La liste exacte dépend de la fondation ou de l’assureur. On demande en pratique une pièce d’identité, le numéro AVS, l’adresse, et de quoi savoir si un 2e pilier existe. Un permis de séjour est parfois demandé. Ce n’est pas le permis qui ouvre le droit : c’est le revenu soumis à l’AVS.",
      },
      {
        question: "Peut-on ouvrir un 3e pilier en cours d’année ?",
        answer:
          "Oui. L’ouverture peut se faire n’importe quel jour. Seul le versement crédité au 31 décembre compte pour la déduction de l’année. Vous n’êtes pas obligé de verser le plafond.",
      },
      {
        question: "Un frontalier peut-il ouvrir un 3e pilier ?",
        answer:
          "Oui si le revenu d’activité en Suisse est soumis à l’AVS. Le permis ne suffit pas. L’effet fiscal dépend ensuite de l’impôt à la source et, le cas échéant, de la taxation ordinaire ultérieure. Détail : page frontalier.",
      },
      {
        question: "Un indépendant peut-il ouvrir un pilier 3a ?",
        answer: `Oui, avec le même critère que les salariés : le revenu soumis à l’AVS. Sans caisse LPP, le plafond 2026 est 20 % du revenu, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}. Avec une LPP, y compris une affiliation volontaire, c’est ${chf(FIGURES.pillar3aWithLpp)}. Détail : page indépendant.`,
      },
      {
        question: "Peut-on rattraper une année sans versement 3a ?",
        answer:
          "Pas les années anciennes. Depuis 2026, une lacune apparue à partir de 2025 peut être rachetée, dans la limite de la petite cotisation, en plus du versement ordinaire de l’année, sous conditions OFAS. Le premier rachat possible est l’année fiscale 2026.",
      },
      {
        question: "Le comparatif oblige-t-il à souscrire ?",
        answer:
          "Non. Le comparatif est sans honoraires et sans engagement. Un conseiller rappelle sous deux jours ouvrés et examine les solutions accessibles dans le cadre du service : frais, souplesse et garanties.",
      },
    ],
    blocks: [
      { type: "h2", text: "Qui peut ouvrir un 3a ?" },
      {
        type: "p",
        text: "Le 3e pilier A (prévoyance liée) est ouvert à la personne qui exerce une activité lucrative dont le revenu est soumis à l’AVS en Suisse. L’OFAS vise les salariés, les indépendants, certains bénéficiaires d’indemnités journalières de chômage et les frontaliers dans ce cas. Ce n’est pas le permis de séjour qui ouvre le droit : c’est l’assujettissement AVS (circulaire AFC n° 18).",
      },
      {
        type: "table",
        caption: `Plafonds 3a 2026, OFAS / art. 7 OPP 3. ${CEILING_NOTE}.`,
        headers: ["Situation à l’ouverture", `Maximum déductible ${YEAR_SPAN}`],
        rows: [
          ["Revenu AVS et affiliation au 2e pilier", chf(FIGURES.pillar3aWithLpp)],
          [
            "Revenu AVS, sans institution du 2e pilier",
            `${FIGURES.pillar3aWithoutLppRate} du revenu, max. ${chf(FIGURES.pillar3aWithoutLpp)}`,
          ],
          ["Sans revenu soumis à l’AVS", "Pas de 3a. Le 3b reste possible"],
        ],
      },
      { type: "h2", text: "Quels documents faut-il pour ouvrir un 3e pilier ?" },
      {
        type: "p",
        text: "Il n’existe pas une liste unique imposée par l’OFAS. La fondation bancaire ou l’assureur fixe ses pièces. En pratique, préparez une pièce d’identité, votre numéro AVS et votre adresse. Selon le dossier, on vous demande aussi le permis de séjour, une attestation d’activité, ou de quoi confirmer l’affiliation au 2e pilier : c’est ce point qui choisit la petite ou la grande cotisation.",
      },
      {
        type: "ul",
        items: [
          "Pièce d’identité.",
          "Numéro AVS.",
          "Adresse et coordonnées.",
          "Parfois : permis de séjour, informations sur l’activité et sur le 2e pilier.",
        ],
      },
      {
        type: "p",
        text: "Sans revenu soumis à l’AVS, ces documents n’ouvrent pas un 3a. Un [frontalier](/frontalier-suisse/) est éligible seulement si son revenu suisse est soumis à l’AVS. Un [indépendant](/3eme-pilier-independant/) l’est aussi : le plafond dépend de la LPP, pas du statut.",
      },
      { type: "h2", text: "Comment ouvrir un 3e pilier ?" },
      {
        type: "p",
        text: "Cinq vérifications suffisent avant de signer. Le plafond ne choisit pas le contrat : il fixe seulement ce qui est déductible.",
      },
      {
        type: "ol",
        items: [
          `Vérifier l’AVS et le 2e pilier : le 3a est ouvert si le revenu d’activité est soumis à l’AVS en Suisse. Avec une caisse LPP, le plafond 2026 est ${chf(FIGURES.pillar3aWithLpp)}. Sans institution du 2e pilier : 20 % du revenu, max. ${chf(FIGURES.pillar3aWithoutLpp)}. Source : OFAS, art. 7 OPP 3.`,
          "Saturer le 3a avant d’ouvrir un 3b : le 3b n’a pas de plafond OFAS et n’est pas déductible à l’impôt fédéral comme le 3a. Il sert la souplesse, ou une enveloppe cantonale de primes à Genève et à Fribourg.",
          "Choisir la banque si l’horizon est court : versements libres jusqu’au plafond, compte ou titres, pas de capital décès intégré. Lisible si un logement ou un départ est envisagé avant une dizaine d’années.",
          "Choisir l’assurance si la famille doit être protégée : rythme de primes, capital décès, parfois libération des primes. Les premières années, la valeur de rachat est en général inférieure aux primes versées.",
          "Créditer le versement avant le 31 décembre 2026 : c’est la date de valeur au crédit qui compte, pas la date de l’ordre. Beaucoup d’établissements fixent une date limite vers la mi-décembre.",
        ],
      },
      { type: "h2", text: "Banque ou assurance au moment d’ouvrir" },
      {
        type: "table",
        caption: "Même déduction 3a. Le support change les frais, la sortie et la protection.",
        headers: ["Critère", "Fondation bancaire", "Police d’assurance"],
        rows: [
          ["Déduction 2026", chf(FIGURES.pillar3aWithLpp) + " / " + chf(FIGURES.pillar3aWithoutLpp), "Identique"],
          ["Versements", "Libres, jusqu’au plafond", "Primes souvent contractuelles"],
          ["Si vous arrêtez tôt", "L’avoir du compte ou des titres", "Valeur de rachat souvent inférieure aux primes"],
          ["Famille", "L’avoir accumulé, ordre légal des bénéficiaires", "Capital décès, parfois libération des primes"],
          ["Mieux quand", "Horizon court, projet de logement, revenu variable", "Horizon long et besoin de garantie"],
        ],
      },
      {
        type: "p",
        text: "Selon l’OFAS, le plafond 2026 ne dépend pas de la banque ou de l’assureur. Vous n’êtes pas obligé de verser le maximum : le montant suit le budget et l’épargne de précaution. Le comparatif détaillé des supports est sur [banque ou assurance](/3eme-pilier-banque-assurance/).",
      },
      {
        type: "callout",
        title: "Nouveau depuis 2026 : rattraper un versement oublié",
        text: "Une lacune de cotisation 3a apparue à partir de 2025 peut être rachetée dès l’année fiscale 2026, dans la limite de la petite cotisation, en plus du versement ordinaire de l’année, sous conditions OFAS. Les années antérieures à 2025 ne se rattrapent pas. Détail : [rachat de lacunes 3a](/rachat-lacunes-3a-2026/).",
      },
      { type: "h2", text: "Avantages et limites à l’ouverture" },
      { type: "h3", text: "Ce que le 3a apporte" },
      {
        type: "ul",
        items: [
          `Déduction du revenu imposable jusqu’à ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} en 2026, Confédération, cantons et communes.`,
          "Capital bloqué, ce qui protège l’épargne retraite des retraits d’opportunité.",
          "Motifs de sortie connus : retraite, logement pour propre usage, départ de Suisse, indépendance, rachat LPP, invalidité.",
        ],
      },
      { type: "h3", text: "Ce que le 3a ne fait pas" },
      {
        type: "ul",
        items: [
          "Il ne remplace pas une épargne de précaution : l’argent n’est pas un livret.",
          "Il ne garantit pas un rendement. Les titres 3a suivent les marchés ; un compte suit le taux de la fondation.",
          "Il n’ouvre pas un second plafond via le 3b, sauf enveloppes cantonales limitées (Genève, Fribourg) sur des primes d’assurance-vie.",
        ],
      },
      {
        type: "callout",
        title: "Information générale, pas un conseil fiscal",
        text: `${METHOD_INLINE} Le comparatif ci-contre examine les solutions accessibles dans le cadre du service. Vous n’êtes pas engagé.`,
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-logement",
    title: "3e pilier et logement : retrait ou nantissement",
    metaTitle: "3e pilier et achat immobilier : retrait ou nantissement du 3a",
    description:
      "Utiliser un 3a pour un logement à usage propre en Suisse : retrait anticipé ou nantissement, impôt à la sortie, banque ou assurance. Comparatif sans honoraires.",
    published: PUBLISHED_CONVERSION,
    updated: PUBLISHED_CONVERSION,
    lead: "comparateur",
    intro:
      "Un 3a peut financer un logement à usage propre en Suisse, par un retrait anticipé ou par un nantissement. Le retrait est imposé à part, à un taux réduit qui dépend du canton et du montant. Le nantissement ne déclenche pas cet impôt tout de suite, mais l’avoir sert de garantie à la banque. Un achat à l’étranger ne suit pas ce motif.",
    howTo: {
      name: "Comment utiliser un 3a pour un logement en Suisse",
      steps: [
        {
          name: "Qualifier le logement",
          text: "Le motif vise un logement pour propres besoins en Suisse (encouragement à la propriété du logement). Une résidence secondaire et un achat à l’étranger ne suivent pas cette règle. La fondation ou l’assureur contrôle les pièces.",
        },
        {
          name: "Comparer retrait et nantissement",
          text: "Le retrait verse le capital et déclenche l’impôt séparé sur la prestation. Le nantissement laisse l’avoir placé et le donne en garantie : pas d’impôt au moment de la mise en gage.",
        },
        {
          name: "Lire la valeur de rachat si c’est une police",
          text: "Une assurance 3a arrêtée tôt pour un achat peut rendre moins que les primes versées. Une fondation bancaire est plus lisible quand la date d’achat est déjà connue.",
        },
        {
          name: "Choisir quelle relation 3a mobiliser",
          text: "Un compte 3a se retire en pratique en une fois. Plusieurs relations permettent d’en verser une pour le logement et d’en laisser d’autres placées. Le plafond annuel OFAS reste global.",
        },
        {
          name: "Faire chiffrer l’impôt de sortie",
          text: "Le capital 3a retiré est imposé séparément du revenu, à un taux réduit. Le taux effectif dépend du canton et du montant. Il n’existe pas un pourcentage unique pour toute la Suisse. Source : circulaire AFC n° 18a.",
        },
      ],
    },
    related: [
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-banque-assurance",
      "3eme-pilier-a-impot-retrait",
      "retrait-3a-vs-3b-2026",
      "2eme-pilier-lpp",
      "frontalier-suisse",
    ],
    faqs: [
      {
        question: "Peut-on utiliser le 3e pilier pour acheter un logement ?",
        answer:
          "Oui, pour un logement à usage propre en Suisse : retrait anticipé ou nantissement. L’OFAS cite le logement pour propres besoins et le remboursement d’une hypothèque parmi les motifs de versement anticipé du 3a. Un achat à l’étranger ne qualifie pas.",
      },
      {
        question: "Retrait ou nantissement : lequel coûte moins d’impôt ?",
        answer:
          "Le retrait déclenche l’impôt sur le capital, séparé du revenu, à un taux réduit selon le canton et le montant. Le nantissement ne déclenche pas cet impôt au moment de la mise en gage. La banque peut en revanche exiger la garantie, et l’avoir reste engagé.",
      },
      {
        question: "Peut-on ne retirer qu’une partie d’un compte 3a ?",
        answer:
          "En pratique, un compte 3a se verse en une fois. Ouvrir plusieurs relations permet d’en mobiliser une pour l’apport et de conserver les autres. Le total versé chaque année ne dépasse pas le plafond OFAS.",
      },
      {
        question: "Une police 3a est-elle adaptée si l’achat est dans trois ans ?",
        answer:
          "Souvent non. Les premières années, la valeur de rachat d’une assurance est inférieure aux primes. Pour un achat daté, une fondation bancaire évite ce décalage. Le plafond déductible reste le même.",
      },
      {
        question: "Faut-il rembourser un retrait 3a si l’on vend ?",
        answer:
          "L’obligation de remboursement après une vente est une règle du 2e pilier (LPP), pas une copie automatique pour le 3a. Le versement anticipé 3a suit l’OPP 3 et le règlement de la fondation. Faites qualifier la revente avant de compter sur un délai LPP.",
      },
    ],
    blocks: [
      { type: "h2", text: "Retrait ou nantissement du 3a" },
      {
        type: "p",
        text: "Deux mécanismes financent un logement à usage propre. Ils ne produisent ni le même impôt, ni la même dette, ni le même reste placé.",
      },
      {
        type: "table",
        caption: "Logement pour propres besoins en Suisse. Le taux d’impôt au retrait dépend du canton et du montant (circulaire AFC n° 18a).",
        headers: ["Critère", "Retrait anticipé", "Nantissement"],
        rows: [
          ["Avoir 3a", "Versé pour l’achat, les travaux à plus-value ou l’hypothèque", "Reste investi, donné en garantie"],
          ["Impôt immédiat", "Oui : impôt sur le capital, séparé du revenu", "Non au moment de la mise en gage"],
          ["Effet sur le crédit", "Augmente l’apport, peut réduire la dette", "Garantie que la banque peut exiger"],
          ["Suite des versements", "La relation retirée est close", "On peut souvent continuer à cotiser"],
          ["Mieux quand", "L’apport manque et l’avoir est en banque", "Vous voulez garder le placement et éviter l’impôt de sortie"],
        ],
      },
      {
        type: "p",
        text: "L’OFAS liste le logement pour propres besoins et le remboursement d’une hypothèque parmi les motifs de versement anticipé, avec le départ définitif de Suisse, le passage à l’indépendant, le rachat LPP et l’invalidité entière non couverte par l’AI. Chaque motif exige des pièces. Détail des sorties : [retirer un 3a ou un 3b](/retrait-3a-vs-3b-2026/).",
      },
      { type: "h2", text: "Comment utiliser un 3a pour un logement" },
      {
        type: "ol",
        items: [
          "Qualifier le logement : usage propre en Suisse. Une résidence secondaire et un achat à l’étranger ne suivent pas ce motif. La fondation ou l’assureur contrôle les pièces.",
          "Comparer retrait et nantissement : le retrait verse le capital et déclenche l’impôt séparé. Le nantissement laisse l’avoir placé, sans cet impôt au moment de la mise en gage.",
          "Lire la valeur de rachat si c’est une police : une assurance arrêtée tôt peut rendre moins que les primes. Une fondation bancaire est plus lisible quand la date d’achat est connue.",
          "Choisir quelle relation 3a mobiliser : un compte se retire en pratique en une fois. Plusieurs relations permettent d’en verser une et d’en laisser d’autres. Le plafond annuel reste global.",
          "Faire chiffrer l’impôt de sortie : imposition séparée, taux réduit, selon le canton et le montant. Pas de pourcentage unique pour toute la Suisse. Source : circulaire AFC n° 18a.",
        ],
      },
      { type: "h2", text: "Banque ou assurance si l’achat est déjà daté" },
      {
        type: "p",
        text: `La déduction 2026 reste ${chf(FIGURES.pillar3aWithLpp)} avec LPP ou ${chf(FIGURES.pillar3aWithoutLpp)} sans, que l’argent aille en banque ou en assurance. ${CEILING_NOTE}. Ce qui change, c’est ce que vous récupérez si le logement arrive dans trois ou cinq ans. Une police conçue pour dix ans et plus n’est pas un apport immobilier. Voir [banque ou assurance](/3eme-pilier-banque-assurance/).`,
      },
      {
        type: "callout",
        title: "Ne pas confondre 3a et 2e pilier",
        text: "Le retrait EPL du 2e pilier a ses propres planchers, délais et devoirs de remboursement. La circulaire AFC n° 18a (section 6.4) exclut d’utiliser un transfert 3a vers la LPP pour rembourser un retrait EPL du 2e pilier. Les deux enveloppes ne se mélangent pas.",
      },
      { type: "h2", text: "Ce que cette page ne promet pas" },
      {
        type: "ul",
        items: [
          "Pas de taux d’impôt « moyen suisse » : le barème du capital est cantonal.",
          "Pas de rendement garanti sur les titres 3a laissés en nantissement.",
          "Pas d’accès au motif logement pour un bien à l’étranger ou une résidence secondaire.",
          METHOD_INLINE,
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "deductions-fiscales-3eme-pilier",
    wpId: 1918,
    title: `Déductions fiscales du 3e pilier en ${YEAR_SPAN}`,
    metaTitle: "Déductions 3e pilier 2026 : plafonds 7’258 / 36’288",
    description:
      "Plafonds 3a 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Rachat dès 2026, 3b Genève/Fribourg, imposition au retrait. Sources AFC et OFAS.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quel est le plafond 3a déductible en 2026 ? ${chf(FIGURES.pillar3aWithLpp)} si vous êtes affilié au 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} (20 % du revenu d’activité, max.) sinon. Source : tableau OFAS du 1.1.2026. ${CEILING_NOTE}.`,
    related: [
      "3eme-pilier-suisse",
      "3eme-pilier-independant",
      "quel-montant-deductible-3eme-pilier-2022",
      "3eme-pilier-a-impot-retrait",
      "plafonds-3a-2026-2027",
      "3a-impot-cantonal-geneve-2026",
      "3b-deduction-fribourg",
      "ouvrir-un-3eme-pilier",
      "actualite-3eme-pilier",
    ],
    faqs: [
      {
        question: "Faut-il verser avant le 31 décembre ?",
        answer:
          "Oui : c’est la date de valeur au crédit du compte ou de la police 3a qui compte, pas la date d’ordre. Un virement trop tardif bascule sur l’année suivante. Dans la plupart des banques, une date limite est exigée vers le milieu du mois de décembre afin de garantir que le versement soit pris en compte pour la période fiscale.",
      },
      {
        question: `Les plafonds 3a 2027 sont-ils déjà connus ?`,
        answer: "Non. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
      },
      {
        question: "Le 3b double-t-il cette déduction ?",
        answer:
          "Non. Le plafond OFAS ne concerne que le 3a. Genève (LIPP) et Fribourg (LICD) peuvent admettre des primes d’assurance-vie dans une enveloppe cantonale limitée — notice de l’année, pas un second OPP 3.",
      },
    ],
    blocks: [
      { type: "h2", text: `Plafonds 3a ${YEAR_SPAN}` },
      {
        type: "table",
        headers: ["Année", "Avec 2e pilier", "Sans 2e pilier (max.)"],
        rows: pillar3aTableRows(),
        caption: `Série OFAS / OPP 3. ${CEILING_NOTE}`,
      },
      {
        type: "h2",
        text: "Rachat 3a (depuis 2026)",
      },
      {
        type: "p",
        text: `Les lacunes depuis 2025 peuvent être rachetées à partir de 2026, dans la limite de la petite cotisation 2026 (${chf(FIGURES.buybackMax)}), en plus du versement ordinaire de l’année, si vous aviez un revenu AVS l’année de la lacune et l’année du rachat, et que le maximum ordinaire de l’année en cours est déjà versé. Le montant de rachat applicable en 2027 est à confirmer par l’OFAS. Source OFAS, « Rachats dans le pilier 3a ».`,
      },
      {
        type: "h2",
        text: "3b et impôt fédéral",
      },
      {
        type: "p",
        text: `L’enveloppe LIFD des primes d’assurances et intérêts d’épargne (${chf(FIGURES.lifdSingle)} personne seule / ${chf(FIGURES.lifdMarried)} couple, majorée en l’absence de 2e pilier / 3a) n’est pas un « plafond 3b ». Elle est souvent déjà utilisée par la LAMal. Les déductions cantonales 3b (GE, FR) sont documentées sur les pages Genève et 3a ou 3b.`,
      },
      {
        type: "h2",
        text: "Couple",
      },
      {
        type: "p",
        text: `Chaque conjoint actif avec LPP a son propre plafond 3a. Deux salariés affiliés : jusqu’à ${chf(FIGURES.pillar3aWithLpp * 2)} au total, sur deux relations de prévoyance distinctes.`,
      },
    ],
  },
  {
    kind: "page",
    slug: "frontalier-suisse",
    wpId: 4711,
    title: "3e pilier pour frontalier en Suisse",
    metaTitle: `3e pilier frontalier ${YEAR_SPAN} : AVS, TOU, départ de Suisse`,
    description:
      `Frontaliers : accès au 3a si revenu soumis à l’AVS, fiscalité selon le canton, TOU, retrait en cas de départ. Comparatif ${YEAR_SPAN}.`,
    published: "2021-11-04",
    updated: UPDATED,
    intro:
      "Un frontalier peut-il ouvrir un 3a ? Oui, si le revenu d’activité en Suisse est soumis à l’AVS. Ce n’est pas le permis G qui ouvre le droit : c’est l’assujettissement AVS (OFAS, circulaire AFC n° 18). L’intérêt fiscal dépend ensuite de la source, d’une éventuelle TOU, et du droit de l’État de résidence.",
    related: [
      "3eme-pilier-independant",
      "ouvrir-un-3eme-pilier",
      "ouvrir-un-3eme-pilier-pour-un-frontalier",
      "frontalier-avs-3a-conditions",
      "tou-impot-source-3a",
      "depart-suisse-retrait-3a",
      "taxation-ordinaire-ulterieure",
      "3eme-pilier-geneve",
    ],
    faqs: [
      {
        question: "Que se passe-t-il si je quitte la Suisse ?",
        answer:
          "Le départ définitif est un motif de versement anticipé du 3a (OFAS). Les règles varient selon que vous restez dans l’UE/AELE ou non, et selon le 2e pilier. Anticipez l’impôt de sortie. Détail : /depart-suisse-retrait-3a/. L’ancienne URL /depart-de-suisse/ reste en 301 vers cette landing.",
      },
      {
        question: "La déduction 3a apparaît-elle à l’impôt à la source ?",
        answer:
          "Pas dans le barème source. Elle devient concrète surtout si une taxation ordinaire ultérieure (TOU) s’applique. Verser avant le 31 décembre et garder l’attestation. Voir /tou-impot-source-3a/ et /taxation-ordinaire-ulterieure/.",
      },
    ],
    blocks: [
      { type: "h2", text: "Conditions 3a" },
      {
        type: "p",
        text: "Revenu d’activité lucrative soumis à l’AVS suisse. Les frontaliers dans ce cas sont expressément visés par l’OFAS. Sans cotisations AVS suisses, le 3a n’est en principe pas ouvert ; le 3b peut l’être. La démarche d’ouverture, les pièces et le délai au 31 décembre : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/).",
      },
      { type: "h2", text: "Impôt à la source et TOU" },
      {
        type: "p",
        text: "Beaucoup de frontaliers sont imposés à la source. Une taxation ordinaire ultérieure (TOU) peut s’appliquer selon le canton, le revenu et le patrimoine suisse. C’est souvent dans la TOU que la déduction 3a devient concrète — d’où l’intérêt de verser avant la fin de l’année civile et de conserver les attestations. Page dédiée : taxation ordinaire ultérieure.",
      },
      { type: "h2", text: "Banque, assurance, logement" },
      {
        type: "p",
        text: "Les motifs de retrait 3a (logement pour propre usage en Suisse, départ, indépendance) s’appliquent aussi aux frontaliers. Un achat en France n’est pas un « propre usage » suisse au sens EPL. Faites qualifier le projet avant d’ouvrir une police longue.",
      },
    ],
  },
  {
    kind: "page",
    slug: "3eme-pilier-geneve",
    title: "3e pilier à Genève",
    metaTitle: `3e pilier Genève ${YEAR_SPAN} : 3a, 3b, ICC et frontaliers`,
    description:
      "Landing Genève : plafonds 3a 2026, enveloppe LIPP des primes d’assurance-vie, frontaliers. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
    published: "2022-07-01",
    updated: UPDATED,
    intro: `Le plafond 3a à Genève est-il plus élevé qu’ailleurs ? Non. En 2026 c’est le maximum fédéral OFAS / OPP 3 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} sans. ${CEILING_NOTE}. L’ICC change l’économie d’impôt, pas le droit de verser. La LIPP vise des primes d’assurance-vie, pas un « bonus 3b ».`,
    related: [
      "3a-impot-cantonal-geneve-2026",
      "frontalier-suisse",
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-a-ou-b",
      "deductions-fiscales-3eme-pilier",
      "actualite-3eme-pilier",
    ],
    faqs: [
      {
        question: "Genève majore-t-il le plafond 3a ?",
        answer: `Non. Petite cotisation ${chf(FIGURES.pillar3aWithLpp)}, grande cotisation ${chf(FIGURES.pillar3aWithoutLpp)} (20 % du revenu, max.), comme dans toute la Suisse. Source : OFAS, art. 7 OPP 3. L’ICC détermine l’économie, pas un plafond cantonal.`,
      },
      {
        question: "La LIPP remplace-t-elle le 3a ?",
        answer: `Non. L’art. 31 let. d LIPP vise les primes d’assurances sur la vie (et intérêts d’épargne). Ordres de grandeur souvent cités : environ ${chf(FIGURES.ge3bSingle)} personne seule, ${chf(FIGURES.ge3bMarried)} époux, ${chf(FIGURES.ge3bPerChild)} par charge — notice AFC-GE de l’année, pas l’OPP 3.`,
      },
      {
        question: "Un frontalier imposé à Genève peut-il ouvrir un 3a ?",
        answer:
          "Oui si le revenu suisse est soumis à l’AVS (circulaire AFC n° 18). L’effet fiscal passe souvent par la source et, le cas échéant, la TOU. Voir /frontalier-suisse/ et /frontalier-avs-3a-conditions/.",
      },
    ],
    blocks: [
      { type: "h2", text: "3a : les mêmes plafonds qu’ailleurs" },
      {
        type: "p",
        text: `À Genève comme dans les autres cantons, le 3a 2026 déduit jusqu’à ${chf(FIGURES.pillar3aWithLpp)} (avec LPP) ou ${chf(FIGURES.pillar3aWithoutLpp)} (sans LPP, 20 % du revenu). L’économie d’impôt dépend du barème ICC + IFD, pas d’un « bonus genevois » sur le plafond fédéral. ${CEILING_NOTE}.`,
      },
      { type: "h2", text: "3b et LIPP" },
      {
        type: "p",
        text: `L’article 31 let. d LIPP vise les primes d’assurances sur la vie (plus les intérêts d’épargne), pas le mot « 3b ». Ordres de grandeur longtemps publiés pour l’ICC : environ ${chf(FIGURES.ge3bSingle)} (personne seule) et ${chf(FIGURES.ge3bMarried)} (époux), ${chf(FIGURES.ge3bPerChild)} par charge, enveloppe doublée si aucune cotisation au 2e pilier ni au 3a. Vérifiez la notice AFC-GE de l’année : ces montants peuvent être ajustés.`,
      },
      {
        type: "callout",
        title: "Piège fréquent",
        text: "Si l’enveloppe est déjà saturée par d’autres primes, ajouter une police 3b ne crée pas de déduction supplémentaire. Un comparatif utile commence par votre dernière déclaration.",
      },
      { type: "h2", text: "Frontaliers travaillant à Genève" },
      {
        type: "p",
        text: "Accès 3a si AVS suisse. L’effet fiscal passe souvent par l’impôt à la source et, le cas échéant, la TOU. Voir les pages frontalier et TOU. Pour les pièces et le délai : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/).",
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-vie-en-suisse",
    wpId: 3182,
    title: "Assurance-vie en Suisse",
    metaTitle: "Assurance-vie Suisse 2026 : 3a, 3b, risque pur ou mixte",
    description:
      "Assurance-vie en Suisse : comparez pilier 3a, 3b, risque pur et assurance mixte. Fiscalité, frais, valeur de rachat et garanties à vérifier en 2026.",
    published: "2022-03-18",
    updated: "2026-10-03",
    intro:
      "En Suisse, l’assurance-vie peut couvrir uniquement un risque, comme le décès, ou combiner protection et épargne dans un contrat mixte. Elle peut être souscrite dans le cadre du pilier 3a ou du pilier 3b. Pour choisir, comparez les garanties, les frais, la valeur de rachat, la fiscalité et la souplesse du contrat.",
    related: [
      "3eme-pilier-mixte",
      "risque-pur-deces",
      "assurance-deces",
      "3eme-pilier-a-ou-b",
      "3eme-pilier-b-prevoyance-libre",
      "3eme-pilier-banque-assurance",
      "deductions-fiscales-3eme-pilier",
      "choisir-les-beneficiaires",
    ],
    faqs: [
      {
        question: "Toute assurance-vie est-elle déductible en Suisse ?",
        answer: `Non. Seul un 3a reconnu l’est, dans les limites de l’art. 7 OPP 3 : en 2026, ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou ${FIGURES.pillar3aWithoutLppRate} du revenu d’activité, max. ${chf(FIGURES.pillar3aWithoutLpp)}, sans. Le 3b n’a pas de déduction fédérale générale comparable.`,
      },
      {
        question: "Quelle différence entre risque pur et assurance mixte ?",
        answer:
          "Le risque pur paie un capital si le décès survient pendant la durée, sans constituer d’épargne en général. La mixte ajoute un capital si la personne est en vie à l’échéance. À capital décès égal, sa prime est plus lourde : elle finance aussi l’épargne.",
      },
      {
        question: "Faut-il placer l’assurance-vie en 3a ou en 3b ?",
        answer:
          "Le 3a, si la déduction dans le plafond légal compte plus que la disponibilité. Le 3b, s’il faut désigner plus librement un bénéficiaire ou sortir hors des motifs OPP 3. Les deux peuvent coexister. Le 3b ne double pas le plafond 3a.",
      },
      {
        question: "Une assurance-vie a-t-elle une valeur de rachat ?",
        answer:
          "En général non pour un risque pur. En général oui pour une mixte, selon la table du contrat. Les premières années, elle est souvent bien inférieure aux primes. Ce n’est pas la somme des primes versées.",
      },
      {
        question: "Le capital est-il garanti ?",
        answer:
          "Un capital en francs écrit au contrat est dû si les conditions sont remplies. Un contrat lié à des fonds suit la valeur des parts : le capital à l’échéance n’est pas garanti. Une participation aux excédents n’est pas un rendement promis. Le capital décès et l’épargne se lisent sur deux lignes distinctes.",
      },
      {
        question: "Qui reçoit le capital au décès ?",
        answer:
          "En 3a, l’ordre OFAS : conjoint ou partenaire enregistré, puis descendants et personnes à charge ou communauté de vie d’au moins cinq ans, puis parents, frères et sœurs, autres héritiers. On ne l’inverse pas. En 3b, la clause est en général plus libre, dans les limites du contrat et du droit successoral.",
      },
      {
        question: "Le questionnaire de santé peut-il changer la prime ?",
        answer:
          "Oui. L’assureur peut accepter le dossier, appliquer une surprime, exclure un risque ou refuser la couverture. Les réponses engagent. La garantie vaut aux conditions écrites à l’acceptation, pas au jour de l’envoi du formulaire.",
      },
      {
        question: "Quand vaut-il mieux séparer assurance et épargne ?",
        answer:
          "Quand le capital décès nécessaire est élevé et l’épargne encore faible, ou quand l’horizon est court : les frais d’une police se voient si on s’arrête tôt. Un risque pur à côté d’un compte 3a est alors souvent plus lisible. La mixte reste un outil sur un horizon long.",
      },
    ],
    blocks: [
      {
        type: "h2",
        text: "Assurance-vie en Suisse : l’essentiel",
      },
      {
        type: "p",
        text: "Une assurance-vie en Suisse protège des proches par un capital au décès, et parfois par une prestation en cas d’incapacité de gain. Le contrat est un risque pur, qui paie le risque sans constituer d’épargne, ou une assurance mixte, qui réunit risque et épargne dans la même prime. Il se loge dans le 3a, lié, ou dans le 3b, libre. Ce choix change la fiscalité, la disponibilité du capital, les bénéficiaires et, le plus souvent, la valeur de rachat. Une assurance-vie n’est pas déductible dans tous les cas : seul un 3a reconnu l’est, dans les limites légales.",
      },
      {
        type: "h2",
        text: "Qu’est-ce qu’une assurance-vie en Suisse ?",
      },
      {
        type: "p",
        text: "Une assurance-vie est un contrat : une prime, contre une prestation si un événement prévu survient (décès pendant la durée, survie à l’échéance, parfois incapacité de gain). Un [risque pur](/risque-pur-deces/) ne constitue pas d’épargne. Une [assurance mixte](/3eme-pilier-mixte/) ajoute un capital si la personne est en vie au terme. L’[assurance décès](/assurance-deces/) est le capital versé aux proches, seule ou dans une police d’épargne.",
      },
      {
        type: "p",
        text: "Le 3e pilier est le cadre, pas la police. Le [3a](/3eme-pilier-a-ou-b/) est lié : l’[OFAS](https://www.bsv.admin.ch/fr/le-troisieme-pilier) indique que les cotisations à une forme reconnue sont déductibles, et que l’avoir n’est pas libre. Le [3b](/3eme-pilier-b-prevoyance-libre/) est libre. Une police peut être l’un ou l’autre. Un compte 3a en fondation bancaire n’est pas une assurance-vie : il transmet l’avoir, pas un capital fixé d’avance. Voir [banque ou assurance](/3eme-pilier-banque-assurance/). Le risque couvert et le cadre 3a ou 3b se lisent sur le contrat, pas sur le nom commercial.",
      },
      {
        type: "h2",
        text: "Risque pur ou assurance mixte",
      },
      {
        type: "p",
        text: "Le risque pur, souvent une temporaire décès, verse un capital si le décès survient pendant la durée choisie. Si la personne est en vie au terme, il n’y a en général rien à récupérer : la prime a payé le risque. Le capital peut être constant ou dégressif, par exemple pour suivre le solde d’une hypothèque. La durée, les exclusions et une éventuelle rente d’invalidité figurent au contrat.",
      },
      {
        type: "p",
        text: "L’assurance mixte réunit, dans la même prime, un capital si l’assuré est en vie à l’échéance et un capital décès. Les deux montants sont parfois les mêmes, parfois non. Un seul contrat discipline l’épargne. La prime paie le risque, l’épargne et des frais, surtout au début. Si la couverture demandée est élevée et l’épargne faible, un risque pur à côté d’un 3a bancaire est souvent plus clair. La mixte n’est pas un produit obligatoire du 3a.",
      },
      {
        type: "table",
        caption:
          "Lecture qualitative. Le montant de prime et la valeur de rachat se lisent sur la police : il n’existe pas un barème unique en francs.",
        headers: ["Critère", "Risque pur", "Assurance mixte"],
        rows: [
          ["Épargne", "Non, en général", "Oui : capital si l’assuré est en vie à l’échéance"],
          ["Capital décès", "Oui, si le décès survient pendant la durée", "Oui, selon le contrat (même capital ou un autre montant)"],
          ["Valeur de rachat", "En général absente, ou négligeable", "En général prévue ; souvent faible les premières années"],
          ["Niveau de prime", "Souvent plus bas à capital décès égal, car il n’y a pas d’épargne", "Plus élevé : la prime paie le risque et l’épargne"],
          ["Objectif", "Couvrir une période (hypothèque, enfants, revenu du ménage)", "Épargner et protéger dans un seul contrat"],
          ["3a possible", "Oui, si la police est une forme reconnue de prévoyance liée", "Oui, à la même condition"],
          ["3b possible", "Oui", "Oui"],
        ],
      },
      {
        type: "h2",
        text: "Pilier 3a ou pilier 3b",
      },
      {
        type: "p",
        text: "Le 3a est encouragé fiscalement dans des limites légales, parce que le capital est lié. L’OFAS reconnaît deux formes : la police d’assurance et le compte en fondation bancaire. Une sortie anticipée suit un motif de l’[OPP 3](https://www.fedlex.admin.ch/eli/cc/1985/643_643_643/fr) (logement pour ses propres besoins, départ de Suisse, indépendance, rachat LPP, invalidité entière AI non couverte, entre autres). Hors de ces cas, le capital reste bloqué jusqu’à la fenêtre de retraite.",
      },
      {
        type: "p",
        text: "Le 3b n’a pas ce plafond, ni cette déduction fédérale. L’OFAS indique que la prévoyance libre n’ouvre pas les déductions du 3a. Selon le produit et le canton, une déduction plus étroite peut exister (enveloppe des primes d’assurances, ou règle cantonale). Genève et Fribourg sont les cas romands cités ici : [Genève](/3eme-pilier-geneve/), [Fribourg](/3b-deduction-fribourg/). La notice de l’année fait foi. On ne généralise pas.",
      },
      {
        type: "table",
        caption: `Plafonds 3a 2026 : art. 7 OPP 3 et pages OFAS « Le troisième pilier » et « Votre cotisation au 3e pilier ». ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}.`,
        headers: ["Critère", "3a (prévoyance liée)", "3b (prévoyance libre)"],
        rows: [
          [
            "Déduction fiscale",
            `Oui, dans les limites légales. 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier ; ${FIGURES.pillar3aWithoutLppRate} du revenu, max. ${chf(FIGURES.pillar3aWithoutLpp)} sans.`,
            "Pas de déduction fédérale générale comparable au 3a. Selon le produit et le canton, une déduction limitée peut exister.",
          ],
          [
            "Disponibilité",
            "Capital bloqué. Sortie anticipée seulement pour un motif prévu par l’OPP 3.",
            "Plus libre, selon le contrat. Un rachat anticipé peut avoir un coût.",
          ],
          [
            "Bénéficiaires",
            "Ordre légal. Marge de désignation à l’intérieur des rangs.",
            "En général plus de liberté, selon la clause et le droit successoral.",
          ],
          [
            "Plafond",
            `Plafond fédéral 2026 : ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}.`,
            "Pas de plafond OFAS.",
          ],
          [
            "Usage",
            "Épargne liée et, selon la police, couverture décès ou incapacité.",
            "Souplesse, protection d’une personne hors ordre 3a, complément une fois le 3a saturé.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Combien ça coûte, et quels frais comparer",
      },
      {
        type: "p",
        text: "Il n’existe pas un prix unique en francs. La prime dépend du capital, de l’âge, de la durée, de l’état de santé, des garanties ajoutées et du fait que le contrat épargne ou non. Ce qui se compare, ce sont les lignes de frais, pas un taux isolé.",
      },
      {
        type: "p",
        text: "À mettre côte à côte : frais d’acquisition, souvent prélevés au début ; coût du risque (décès, incapacité, [libération des primes](/liberation-du-paiement-des-primes/)) ; frais de gestion ; frais du support si la police est en fonds ; coût ou perte au rachat. Une prime plus basse peut couvrir moins. Une prime plus haute peut payer une garantie, ou des frais peu lisibles. La page [frais 3a](/frais-3a-banque-assurance/) pose ces questions. Elle ne classe pas les compagnies.",
      },
      {
        type: "h2",
        text: "Valeur de rachat",
      },
      {
        type: "p",
        text: "La valeur de rachat est la somme prévue au contrat si on l’arrête avant le terme. Ce n’est pas la somme des primes versées.",
      },
      {
        type: "p",
        text: "Un risque pur n’a en général pas de valeur de rachat, ou une valeur négligeable. Une mixte a en général une table de rachat. Les premières années, cette valeur est souvent très inférieure aux primes, parfois nulle : frais d’acquisition et coût du risque sont prélevés tôt. Seule la table de la police donne le montant. Un contrat particulier peut s’écarter de ce schéma.",
      },
      {
        type: "h2",
        text: "Fonds ou capital garanti",
      },
      {
        type: "p",
        text: "Deux mécaniques coexistent, parfois dans la même offre. Un capital en francs prévu à la police est dû si les conditions sont remplies : survie, décès, échéance. Un contrat lié à des fonds suit la valeur des parts. Le capital à l’échéance n’est alors pas garanti : il peut monter ou baisser. Une participation aux excédents, quand le contrat en prévoit une, n’est pas un rendement promis.",
      },
      {
        type: "p",
        text: "Le capital décès fixé en francs ne suit pas forcément l’épargne en fonds. Les deux lignes se lisent séparément. Cette page n’annonce pas de performance.",
      },
      {
        type: "h2",
        text: "Fiscalité : 3a, 3b, et ce qui ne se généralise pas",
      },
      {
        type: "p",
        text: `Le 3a est déductible du revenu pour l’impôt fédéral direct et les impôts cantonaux et communaux, dans la mesure de l’art. 7 [OPP 3](https://www.fedlex.admin.ch/eli/cc/1985/643_643_643/fr). En 2026, la petite cotisation est de ${chf(FIGURES.pillar3aWithLpp)} pour une personne affiliée à une institution de prévoyance du 2e pilier. La grande cotisation est de ${FIGURES.pillar3aWithoutLppRate} du revenu de l’activité lucrative, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}, pour une personne qui n’y est pas affiliée. Sources : [OFAS — Le troisième pilier](https://www.bsv.admin.ch/fr/le-troisieme-pilier) et [OFAS — Votre cotisation au 3e pilier](https://www.bsv.admin.ch/fr/votre-cotisation-au-3e-pilier). Le versement doit être crédité au 31 décembre pour compter sur l’année.`,
      },
      {
        type: "p",
        text: `Le 2 octobre 2026, le Conseil fédéral a décidé de porter ces plafonds au 1er janvier 2027 à ${chf(7373)} pour les personnes avec un 2e pilier et à ${chf(36864)} pour celles qui n’en ont pas. Source : [communiqué du Conseil fédéral du 2 octobre 2026](https://www.admin.ch/fr/newnsb/BqB41FVYi5FB). Pour un versement imputé à 2026, le plafond reste celui de 2026.`,
      },
      {
        type: "p",
        text: "Le 3b n’ouvre pas cette déduction. Certaines primes peuvent entrer dans l’enveloppe plafonnée des primes d’assurances et des intérêts d’épargne, souvent déjà occupée par l’assurance-maladie. Quelques cantons ajoutent une déduction limitée pour des primes d’assurance-vie : notice de l’année, pas un second plafond 3a. Détail : [déductions fiscales](/deductions-fiscales-3eme-pilier/). Au dénouement, le capital 3a est imposé séparément du reste du revenu. Pour une assurance 3b susceptible de rachat, l’[AFC](https://www.estv.admin.ch/fr/assurances-de-capitaux-susceptibles-de-rachat-du-pilier-3b) indique que le traitement du capital se juge au cas par cas par le canton.",
      },
      {
        type: "h2",
        text: "Qui reçoit le capital au décès",
      },
      {
        type: "p",
        text: "En 3a, l’OFAS fixe un ordre. Au décès : le conjoint survivant ou le partenaire enregistré ; puis les descendants directs ainsi que les personnes à l’entretien desquelles le défunt subvenait de façon substantielle, ou la personne qui avait formé avec lui une communauté de vie ininterrompue d’au moins cinq ans immédiatement avant le décès, ou qui doit subvenir à l’entretien d’un enfant commun ; puis les parents ; puis les frères et sœurs ; puis les autres héritiers. On peut préciser à l’intérieur d’un rang. On n’inverse pas l’ordre. Un concubin de quatre ans n’entre pas dans le second rang. La page [choisir les bénéficiaires](/choisir-les-beneficiaires/) reprend cet ordre.",
      },
      {
        type: "p",
        text: "En 3b, la clause est en général plus libre : un concubin ou un associé peut être désigné, hors de l’ordre 3a. Le texte signé et le droit successoral limitent cette marge. Deux polices n’ouvrent pas la même liberté. On lit qui est nommé avant de compter sur un proche précis.",
      },
      {
        type: "h2",
        text: "Questionnaire de santé",
      },
      {
        type: "p",
        text: "Pour couvrir un décès ou une incapacité, l’assureur évalue le risque. Un questionnaire est fréquent ; des examens peuvent suivre selon le capital et l’âge. Les réponses engagent. L’issue peut être une acceptation, une surprime, une exclusion ou un refus. La couverture vaut aux conditions écrites à l’acceptation, pas au jour de l’envoi du formulaire.",
      },
      {
        type: "h2",
        text: "Quand c’est intéressant, et quand séparer assurance et épargne",
      },
      {
        type: "p",
        text: "Une assurance-vie répond à un capital dont les proches auraient besoin si un revenu disparaît, ou à une incapacité qui empêcherait de payer les primes. La [libération des primes](/liberation-du-paiement-des-primes/) et une rente d’incapacité, quand elles existent, ne sont pas un capital décès. Le contrat sert aussi à épargner sur un horizon long, si le rythme de primes est voulu et les frais acceptés.",
      },
      {
        type: "p",
        text: "Séparer couverture et épargne est souvent plus clair si le besoin décès est élevé et l’avoir encore faible (risque pur + compte 3a), si l’horizon est court (les frais d’acquisition se voient à l’arrêt), ou si le bénéficiaire n’entre pas dans l’ordre 3a (clause 3b ou risque pur nominatif). Le 3b ne devient pas pour autant un second plafond fiscal. Budget, dettes, rentes de survivants AVS/LPP et canton passent avant le nom du contrat. Une [analyse de prévoyance](/analyse-de-prevoyance/) pose ces montants.",
      },
      {
        type: "h2",
        text: "Comment comparer",
      },
      {
        type: "p",
        text: "Le comparatif du site part de la situation. Il est sans honoraires et sans engagement. Il ne classe pas les compagnies. Pour chaque police : capital à l’échéance, capital décès, table de rachat, frais, garanties d’incapacité, clause bénéficiaire, cadre 3a ou 3b. Sans ces lignes, deux primes ne se comparent pas.",
      },
      {
        type: "p",
        text: "La demande passe par le formulaire du site : [recevoir un comparatif](/formulaire-3eme-pilier/). Un rappel peut suivre pour lire les garanties. Souscrire n’est pas une obligation.",
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-deces",
    wpId: 3202,
    title: "Assurance décès et 3e pilier",
    metaTitle: "Assurance décès 3e pilier : compte 3a, police et 3b",
    description:
      "Assurance décès 3e pilier : le compte 3a verse l’avoir constitué, une police peut prévoir un capital défini. Risque pur, 3a et 3b ne se confondent pas. La prime n’est déductible que dans un 3a, dans les limites légales.",
    published: "2022-03-18",
    updated: "2026-10-03",
    intro:
      "Une assurance décès, dans le 3e pilier, est un contrat qui prévoit un capital si la personne assurée décède pendant la durée couverte. Un compte 3a bancaire ne transmet que l’avoir déjà constitué. Le capital, la durée et les bénéficiaires se lisent sur le contrat : il n’existe pas une seule règle pour tous les ménages.",
    related: [
      "3eme-pilier-banque-assurance",
      "3eme-pilier-a-ou-b",
      "assurance-vie-en-suisse",
      "liberation-du-paiement-des-primes",
      "risque-pur-deces",
    ],
    faqs: [
      {
        question: "Quelle différence entre un 3a en banque et une assurance décès ?",
        answer:
          "Un 3a bancaire est un compte d’épargne liée : au décès, les proches reçoivent l’avoir constitué, pas un capital fixé à l’avance. Une assurance décès est un contrat qui prévoit un capital si le décès survient pendant la couverture. Les deux peuvent coexister. Le montant et les conditions se lisent sur le contrat, pas dans une règle unique.",
      },
      {
        question: "Qu’est-ce qu’un risque pur dans le 3e pilier ?",
        answer:
          "Le risque pur est une assurance temporaire : la prime paie le risque de décès, sans constituer une épargne comparable à un compte. S’il n’y a pas de décès pendant la durée, il n’y a en général pas de capital à récupérer. Ce n’est pas une police 3a qui mêle épargne et couverture. La durée, le capital et les exclusions dépendent du contrat.",
      },
      {
        question: "Une police 3a avec capital décès est-elle un 3b ?",
        answer:
          "Non. La police 3a reste de la prévoyance liée : le cadre du 3a s’applique, et un capital décès peut s’y ajouter selon le contrat. Le 3b est de la prévoyance libre, hors de ce cadre lié. On ne les substitue pas l’un à l’autre sans distinguer déduction et blocage d’un côté, souplesse de l’autre.",
      },
      {
        question: "Qui sont les bénéficiaires d’un 3a en cas de décès ?",
        answer:
          "Le 3a suit un ordre légal de bénéficiaires. Une désignation est possible, dans les limites de cet ordre : ce n’est pas une liberté totale. La clause signée dit ce qui est ouvert dans votre contrat. Le 3b laisse en général une marge de désignation plus large, toujours encadrée par le contrat et le droit successoral.",
      },
      {
        question: "La libération des primes remplace-t-elle une assurance décès ?",
        answer:
          "Non. La libération des primes fait continuer le contrat en cas d’incapacité, selon les conditions prévues. Une rente d’incapacité vise un revenu de remplacement, pas un capital versé aux proches au décès. Aucune de ces garanties n’est un capital décès. Le fonctionnement de la libération est détaillé sur la page qui lui est consacrée.",
      },
      {
        question: "La prime d’une assurance décès est-elle toujours déductible ?",
        answer:
          "Non. Dans un 3a reconnu, elle entre dans le plafond légal (art. 7 OPP 3). En 3b, il n’y a pas de déduction fédérale générale comparable au 3a. Une déduction plus étroite peut exister selon le produit et le canton.",
      },
      {
        question: "Quand faut-il une assurance décès en plus d’un compte 3a ?",
        answer:
          "Elle est utile quand les proches auraient besoin d’un capital que l’avoir déjà sur le compte ne couvre pas, par exemple tant que des charges du ménage reposent sur un revenu. Elle l’est moins quand transmettre cet avoir suffit, et qu’un capital défini n’est pas le besoin. Le contrat fixe le capital, la durée et les exclusions : il n’y a pas de seuil unique.",
      },
    ],
    blocks: [
      {
        type: "h2",
        text: "Le compte 3a verse l’avoir, l’assurance décès un capital",
      },
      {
        type: "p",
        text: "Un 3a bancaire ne verse que l’avoir constitué. Une assurance décès couvre un capital défini si le décès a lieu pendant la période assurée.",
      },
      {
        type: "p",
        text: "L’avoir du compte dépend de ce qui a été versé et de ce que le support a produit. Il peut être modeste au début, même si le projet familial est déjà lourd. Le capital d’assurance, lui, est celui que le contrat prévoit : il ne grandit pas tout seul comme un compte, et il n’est dû que si les conditions de la police sont remplies. Comparer les deux sans ce distinguo mélange une épargne et une couverture.",
      },
      {
        type: "h2",
        text: "Risque pur, capital décès en 3a, et 3b",
      },
      {
        type: "p",
        text: "Le risque pur paie un capital sans jouer le rôle d’un compte. Une police 3a peut ajouter un capital décès à une épargne liée. Le 3b est une prévoyance libre, dont le capital dépend du contrat.",
      },
      {
        type: "ul",
        items: [
          "Risque pur : temporaire décès, en principe sans épargne à récupérer si le risque ne se réalise pas. Utile pour couvrir une période, à côté d’un compte.",
          "Capital décès dans une police 3a : la police reste liée. L’épargne et la couverture cohabitent dans le même contrat, avec le blocage et la déduction du 3a. Ce que les proches touchent en plus de l’épargne se lit sur la police, pas sur une promesse générale.",
          "3b : prévoyance libre. Le capital, la durée et la possibilité de racheter le contrat varient. Ce n’est pas un second 3a, et ce n’est pas non plus automatiquement un risque pur. La prime 3b n’est pas déductible comme un 3a : pas de déduction fédérale générale équivalente.",
        ],
      },
      {
        type: "p",
        text: "La prime n’est pas déductible par le seul fait qu’il s’agit d’une assurance décès. Logée dans un 3a reconnu, elle entre dans le plafond de l’art. 7 OPP 3. En 3b, l’effet fiscal, s’il existe, dépend du produit et du canton.",
      },
      {
        type: "p",
        text: "Le choix entre [banque ou assurance](/3eme-pilier-banque-assurance/) et entre [3a ou 3b](/3eme-pilier-a-ou-b/) vient de ce tri. Le mot [assurance-vie en Suisse](/assurance-vie-en-suisse/) recouvre ces formes : il ne désigne pas un seul produit.",
      },
      {
        type: "h2",
        text: "Bénéficiaires : ordre du 3a, marge du 3b",
      },
      {
        type: "p",
        text: "En 3a, les bénéficiaires suivent un ordre légal, avec une marge de désignation limitée. En 3b, la désignation est en général plus large, mais le contrat et le droit successoral décident.",
      },
      {
        type: "p",
        text: "On ne rédige pas ici la liste des rangs comme si elle remplaçait la clause signée. Deux contrats 3a peuvent ne pas ouvrir la même marge. Deux contrats 3b non plus. Avant de compter sur un proche précis, il faut lire qui est désigné, dans quel ordre, et ce que le contrat interdit de changer.",
      },
      {
        type: "h2",
        text: "Rente d’incapacité et libération des primes",
      },
      {
        type: "p",
        text: "Une rente d’incapacité et la libération des primes ne sont pas un capital décès. L’une vise un revenu si le travail s’arrête, l’autre fait continuer le contrat sans que la personne paie les primes.",
      },
      {
        type: "p",
        text: "Ces garanties s’activent, quand elles existent, selon la définition d’incapacité écrite au contrat. Elles ne versent pas aux proches le capital prévu pour un décès. La [libération du paiement des primes](/liberation-du-paiement-des-primes/) se lit à part : délai, degré et exclusions y sont ceux de la police, pas une règle commune à toutes les offres.",
      },
      {
        type: "h2",
        text: "Quand l’assurance décès est utile, et quand le compte suffit",
      },
      {
        type: "p",
        text: "L’assurance décès est utile quand les proches auraient besoin d’un capital que l’avoir du compte ne couvre pas. Le compte suffit quand transmettre cette épargne répond au besoin, sans capital défini en plus.",
      },
      {
        type: "ul",
        items: [
          "Utile : un revenu du ménage disparaîtrait, des charges courent encore, et l’avoir 3a déjà constitué ne les couvre pas. Une temporaire, ou un capital dans une police, peut viser ce trou. Le montant reste celui du contrat.",
          "Le compte peut suffire : l’objectif est de transmettre l’épargne accumulée, pas de garantir un capital plus élevé. Ajouter une assurance parce que « le 3e pilier se fait en assurance » ne répond pas à ce cas.",
          "Les deux ensemble : le compte pour l’épargne liée, une couverture décès séparée ou incluse pour le capital. Ce n’est pas obligatoire. C’est un arbitrage entre prime, souplesse et ce que la clause bénéficiaire permet vraiment.",
        ],
      },
      {
        type: "callout",
        title: "Ce que le contrat décide",
        text: "Capital, durée, exclusions, rente d’incapacité, libération des primes et clause bénéficiaire ne se déduisent pas du mot « 3e pilier ». Deux offres du même nom peuvent couvrir des choses différentes.",
      },
    ],
  },
  {
    kind: "page",
    slug: "risque-pur-deces",
    wpId: 1892,
    title: "Risque pur décès",
    metaTitle: `Risque pur décès ${YEAR_SPAN} : temporaire, capital, 3e pilier`,
    description:
      `Le risque pur n’épargne pas : il paie un capital en cas de décès. La prime n’est déductible que dans un 3a, dans les limites légales (${YEAR_SPAN}).`,
    published: "2021-11-12",
    updated: "2026-10-03",
    intro:
      "Une temporaire décès (risque pur) n’a pas de valeur de rachat, ou une valeur négligeable. Toute la prime paie le risque. C’est souvent la façon la plus efficace de couvrir une hypothèque ou des enfants en bas âge, à côté d’un 3a bancaire.",
    related: ["assurance-deces", "3eme-pilier-mixte", "assurance-vie-en-suisse", "deductions-fiscales-3eme-pilier"],
    faqs: [
      {
        question: "La prime d’un risque pur est-elle déductible ?",
        answer: `Pas dans tous les cas. Dans un 3a reconnu, elle entre dans le plafond 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec une institution du 2e pilier, ou ${FIGURES.pillar3aWithoutLppRate} du revenu de l’activité lucrative, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}, sans (art. 7 OPP 3). En 3b, il n’y a pas de déduction fédérale générale comparable. Une déduction limitée dépend du produit et du canton.`,
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Comparez le capital, la durée (constante ou dégressive), les exclusions, la clause d’invalidité éventuelle et le questionnaire de santé. Une police refusée ou surprime peut valoir mieux qu’un mixte « accepté » illisible.",
      },
      {
        type: "h2",
        text: "La prime n’est pas déductible dans tous les cas",
      },
      {
        type: "p",
        text: `Une temporaire décès peut être conclue en [3a](/3eme-pilier-a-ou-b/) ou en [3b](/3eme-pilier-b-prevoyance-libre/). Le cadre ne rend pas la prime déductible par principe. Dans un 3a reconnu, elle entre dans le plafond de l’art. 7 OPP 3 : en 2026, ${chf(FIGURES.pillar3aWithLpp)} si la personne est affiliée à une institution du 2e pilier, ou ${FIGURES.pillar3aWithoutLppRate} du revenu de l’activité lucrative, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}, sinon. Source : [OFAS — Le troisième pilier](https://www.bsv.admin.ch/fr/le-troisieme-pilier). En 3b, il n’existe pas de déduction fédérale générale comparable au 3a. Une déduction limitée, quand elle existe, dépend du produit et du canton. Cette prime 3a occupe le plafond : elle laisse moins de place à l’épargne liée de la même année. Voir [assurance-vie en Suisse](/assurance-vie-en-suisse/) et [déductions fiscales](/deductions-fiscales-3eme-pilier/).`,
      },
    ],
  },
  {
    kind: "page",
    slug: "epargne-enfant",
    wpId: 1967,
    title: "Épargne enfant",
    metaTitle: "Épargne enfant : 3b ou compte, pas de 3a sans AVS",
    description:
      "Épargne et protection pour un enfant : le 3a de l’enfant n’existe pas sans revenu AVS. Pistes 3b, compte, clause bénéficiaire.",
    published: "2021-11-04",
    updated: UPDATED,
    intro:
      "Un enfant sans activité lucrative ne peut pas ouvrir un 3a. L’épargne enfant passe par un compte, une police 3b, ou le 3a / 3b des parents avec une clause bénéficiaire claire.",
    related: ["constituer-une-epargne-enfant", "3eme-pilier-b-prevoyance-libre"],
    blocks: [
      {
        type: "p",
        text: "Objectifs typiques : études, premier logement, protection si le parent cotisant disparaît. Un compte au nom de l’enfant est simple mais entre dans sa fortune. Une police sur la tête du parent, avec l’enfant bénéficiaire, protège le projet si le parent décède. Évitez de bloquer trop longtemps des sommes dont le ménage aura besoin.",
      },
    ],
  },
  {
    kind: "page",
    slug: "analyse-de-prevoyance",
    wpId: 1909,
    title: "Analyse de prévoyance",
    metaTitle: `Analyse de prévoyance ${YEAR_SPAN} : 1er, 2e et 3e piliers`,
    description:
      `Lire un certificat LPP, estimer l’AVS ${YEAR_SPAN} (tableau OFAS 2026), mesurer le trou de retraite et le besoin décès avant de choisir un 3e pilier.`,
    published: "2021-11-12",
    updated: UPDATED,
    intro:
      "Sans analyse, un comparatif 3e pilier compare des emballages. L’analyse aligne rentes AVS, avoir LPP, dettes, famille et capacité d’épargne.",
    related: ["1er-pilier-avs-ai-apg", "2eme-pilier-lpp", "choisir-son-3eme-pilier"],
    blocks: [
      {
        type: "ol",
        items: [
          `Estimer la rente AVS (tableau OFAS 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} par mois pour une rente complète ; 13e rente dès décembre 2026. Tableau 2027 non publié au 19.09.2026).`,
          "Lire le certificat LPP : salaire assuré, avoir, projection à l’âge de référence, rentes d’invalidité et de survivants.",
          "Lister les 3a déjà ouverts (plusieurs comptes sont possibles, le plafond est global).",
          "Chiffrer le besoin décès / invalidité net des prestations sociales.",
          `Ensuite seulement : banque ou assurance, 3a ou 3b, montant ${YEAR_SPAN}.`,
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "liberation-du-paiement-des-primes",
    wpId: 1929,
    title: "Libération du paiement des primes",
    metaTitle: "Libération des primes : invalidité et 3e pilier",
    description:
      "Si l’assureur prend en charge les primes en cas d’incapacité, le 3a/3b continue sans vous. Garantie à lire avant de signer.",
    published: "2021-10-31",
    updated: UPDATED,
    intro:
      "La libération du paiement des primes est une clause d’assurance : en cas d’incapacité de gain (souvent après un délai d’attente), l’assureur verse les primes à votre place. Le contrat d’épargne continue. Un 3a bancaire n’a pas cet équivalent.",
    related: ["3eme-pilier-banque-assurance", "2eme-pilier-lpp"],
    blocks: [
      {
        type: "p",
        text: "Points de lecture : définition de l’incapacité, délai d’attente (3, 6, 12 mois), degré minimal, fin de garantie, exclusions (dos, psychique, sports). C’est souvent cette ligne, plus que le « taux », qui justifie ou non une police 3a.",
      },
    ],
  },
  {
    kind: "page",
    slug: "1er-pilier-avs-ai-apg",
    wpId: 1986,
    title: "1er pilier AVS / AI / APG",
    metaTitle: "1er pilier AVS 2026 : rentes, 13e rente, âge",
    description:
      "AVS 2026 : rentes min./max. (tableau OFAS 1.1.2026). 2027 : tableau non publié au 19.09.2026. 13e rente dès décembre 2026, âge de référence 65 ans.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quelle est la rente AVS en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, une rente de vieillesse complète se situe entre ${chf(FIGURES.avsMinMonthly)} et ${chf(FIGURES.avsMaxMonthly)} par mois. La somme des deux rentes d’un couple marié est plafonnée à ${chf(FIGURES.avsCoupleMaxMonthly)}. Au 19 septembre 2026, le tableau OFAS 2027 n’est pas publié : ces montants restent ceux en vigueur jusqu’à une éventuelle décision du Conseil fédéral (annonce usuelle en octobre).`,
    related: ["3eme-pilier-suisse", "2eme-pilier-lpp", "tableau-ofas-montants-avs-lpp-3a", "analyse-de-prevoyance"],
    faqs: [
      {
        question: "La 13e rente AVS relève-t-elle le plafond 3a ?",
        answer: `Non. La 13e rente (premier versement décembre 2026) est une prestation AVS. ${CEILING_NOTE}.`,
      },
      {
        question: "Les rentes AVS 2027 sont-elles déjà publiées ?",
        answer:
          "Non, au 19 septembre 2026. Nous citons le tableau OFAS du 1.1.2026. L’annonce usuelle des montants de l’année suivante tombe en octobre. Pas de chiffre inventé.",
      },
    ],
    blocks: [
      {
        type: "h2",
        text: "13e rente AVS",
      },
      {
        type: "p",
        text: "Dès décembre 2026, une 13e rente de vieillesse est versée (un douzième des rentes de vieillesse de l’année). Elle ne s’applique pas aux rentes de survivants ni à l’AI. Source : Centre d’information AVS/AI.",
      },
      {
        type: "h2",
        text: "Âge de référence",
      },
      {
        type: "p",
        text: "L’âge de référence AVS est 65 ans. Pour les femmes, la réforme AVS 21 relève progressivement l’âge (génération transitoire). Le 3a suit cet âge de référence : retrait au plus tôt cinq ans avant, au plus tard cinq ans après en restant actif.",
      },
      {
        type: "callout",
        title: "Ancien slogan du site",
        text: "L’âge de référence AVS est 65 ans. Les femmes de la génération transitoire AVS 21 suivent un relèvement progressif. L’ancienne mention « 64 ans pour les femmes », sans cette transition, ne décrit plus la règle.",
      },
    ],
  },
  {
    kind: "page",
    slug: "2eme-pilier-lpp",
    wpId: 2010,
    title: "2e pilier LPP",
    metaTitle: `2e pilier LPP ${YEAR_SPAN} : seuil 22’680, coordination 26’460`,
    description:
      "LPP 2026 (OFAS) : seuil d’entrée, déduction de coordination et salaire coordonné. Le tableau 2027 n’est pas publié. Lien avec le plafond 3a.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quel est le seuil LPP en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, l’affiliation obligatoire commence à ${chf(FIGURES.lppEntry)} de salaire annuel, la déduction de coordination est ${chf(FIGURES.lppCoordination)}, la limite supérieure ${chf(FIGURES.lppSalaryCap)}. Au 19 septembre 2026, le tableau 2027 n’est pas publié : ces montants restent ceux en vigueur.`,
    related: [
      "3eme-pilier-suisse",
      "3eme-pilier-independant",
      "a-quoi-sert-le-deuxieme-pilier",
      "libre-passage-lpp",
      "tableau-ofas-montants-avs-lpp-3a",
      "compte-de-libre-passage-lpp",
    ],
    faqs: [
      {
        question: "L’affiliation LPP change-t-elle le plafond 3a ?",
        answer: `Oui. Affilié à une institution du 2e pilier : petite cotisation ${chf(FIGURES.pillar3aWithLpp)}. Sans institution : grande cotisation, 20 % du revenu, max. ${chf(FIGURES.pillar3aWithoutLpp)}. Un indépendant qui s’affilie volontairement à une LPP bascule sur la petite cotisation.`,
      },
      {
        question: "Les montants LPP 2027 sont-ils déjà connus ?",
        answer:
          "Non, au 19 septembre 2026. Nous citons le tableau OFAS du 1.1.2026. Pas de hausse inventée pour 2027.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: `Être affilié à une institution de prévoyance du 2e pilier fait basculer votre 3a sur la petite cotisation (${chf(FIGURES.pillar3aWithLpp)}). Un indépendant qui s’affilie volontairement à une LPP perd donc la grande cotisation ${chf(FIGURES.pillar3aWithoutLpp)}. C’est un arbitrage, pas un automatisme « plus c’est mieux ».`,
      },
      {
        type: "table",
        headers: ["Paramètre LPP (tableau OFAS 2026 ; 2027 non publié)", "Montant"],
        rows: [
          ["Salaire minimal annuel (seuil)", chf(FIGURES.lppEntry)],
          ["Déduction de coordination", chf(FIGURES.lppCoordination)],
          ["Salaire coordonné minimal", chf(FIGURES.lppCoordinatedMin)],
          ["Salaire coordonné maximal", chf(FIGURES.lppCoordinatedMax)],
          ["Limite supérieure du salaire annuel", chf(FIGURES.lppSalaryCap)],
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "libre-passage-lpp",
    wpId: 5018,
    title: "Libre passage LPP",
    metaTitle: "Libre passage LPP : changement d’employeur, compte",
    description:
      "Quand l’avoir de 2e pilier quitte la caisse : compte ou police de libre passage, délais de transfert, et ce que cela change pour le 3e pilier.",
    published: "2023-11-05",
    updated: UPDATED,
    intro:
      "Un changement d’employeur, une interruption d’activité ou un départ vers l’indépendance déclenche un libre passage : l’avoir LPP doit quitter la caisse et rejoindre la nouvelle institution, un compte ou une police de libre passage.",
    related: ["compte-de-libre-passage-lpp", "2eme-pilier-lpp"],
    blocks: [
      {
        type: "p",
        text: "Ne laissez pas l’avoir « orphelin » sans instruction : la caisse le verse à l’institution supplétive après le délai légal. Comparez frais, intérêts et titres. Le libre passage n’est pas un 3a : autre enveloppe, autres motifs de retrait (dont le logement et le départ de Suisse, avec des règles propres).",
      },
    ],
  },
  {
    kind: "page",
    slug: "compte-de-libre-passage-lpp",
    wpId: 5981,
    title: "Compte de libre passage LPP",
    metaTitle: "Compte de libre passage : fonctionnement et pièges",
    description:
      "Compte ou police de libre passage : frais, titres et regroupement d’avoirs LPP. Ce n’est pas un compte 3a, ni un livret.",
    published: "2023-10-10",
    updated: UPDATED,
    intro:
      "Le compte de libre passage héberge un avoir LPP en attendant une nouvelle caisse ou un motif de versement. C’est un parking réglementé, pas un livret.",
    related: ["libre-passage-lpp", "2eme-pilier-lpp"],
    blocks: [
      {
        type: "p",
        text: "Deux formes : compte (fondation bancaire) ou police (assureur). Frais de tenue, frais de titres et rendement réel varient beaucoup. Plusieurs comptes sont possibles ; les regrouper n’est pas toujours urgent, mais perdre la trace d’un vieux libre passage l’est. Le 2e pilier central (LPP) peut aider à retrouver des avoirs oubliés.",
      },
    ],
  },
  {
    kind: "page",
    slug: "formulaire-3eme-pilier",
    wpId: 1248,
    title: "Formulaire comparatif 3e pilier",
    metaTitle: "Comparatif 3e pilier : demander un comparatif gratuit",
    description:
      "Demandez un comparatif 3a ou 3b, en banque ou en assurance. Un conseiller rappelle sous deux jours ouvrés. Sans honoraires, sans engagement.",
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "Comparez 3a ou 3b, en banque ou en assurance : frais, souplesse et garanties.",
    related: ["nous-contacter", "page-remerciement", "choisir-son-3eme-pilier"],
    blocks: [
      {
        type: "p",
        text: "Champs : nom et prénom, date de naissance, épargne mensuelle, e-mail, téléphone. Valider le formulaire reconnaît la politique de confidentialité.",
      },
    ],
  },
  {
    kind: "page",
    slug: "nous-contacter",
    wpId: 1265,
    title: "Nous contacter",
    metaTitle: `Nous contacter ${YEAR_SPAN} — Comparateur 3ème pilier`,
    description:
      "Contactez Comparateur 3ème pilier : demande d’information ou entretien. Sans honoraires. Réponse de préférence par téléphone.",
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "Quatre champs et votre demande. Un conseiller vous rappelle sous deux jours ouvrés si la demande est enregistrée. Aucun e-mail de confirmation n’est envoyé.",
    related: ["formulaire-3eme-pilier", "a-propos", "page-de-confidentialitee"],
    blocks: [
      {
        type: "ol",
        items: [
          "Demandez — formulaire ci-dessous ou e-mail.",
          "Recevez — rappel ou message, selon l’urgence indiquée.",
          "Sélectionnez — vous n’êtes pas engagé.",
        ],
      },
      {
        type: "p",
        text: "Écrivez-nous aussi à info@comparateur-3eme-pilier.ch.",
      },
    ],
  },
  {
    kind: "page",
    slug: "page-de-confidentialitee",
    wpId: 1146,
    title: "Politique de confidentialité",
    metaTitle: "Confidentialité — comparateur-3eme-pilier.ch",
    description:
      "Données des formulaires de comparatif et de contact : ce qui est enregistré, pourquoi, et comment écrire à info@comparateur-3eme-pilier.ch.",
    published: "2021-10-30",
    updated: UPDATED,
    intro:
      "Cette page décrit les données que les formulaires de comparateur-3eme-pilier.ch enregistrent vraiment. Contact : info@comparateur-3eme-pilier.ch.",
    related: ["mentions-legales", "nous-contacter"],
    blocks: [
      { type: "h2", text: "1. Contact" },
      {
        type: "p",
        text: "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Contact : info@comparateur-3eme-pilier.ch.",
      },
      { type: "h2", text: "2. Données collectées" },
      {
        type: "p",
        text: "Formulaire de comparatif : nom et prénom, date de naissance, montant d’épargne mensuelle visé, e-mail, téléphone, date et heure de la demande. La validation reconnaît la politique de confidentialité. La date de naissance et l’épargne mensuelle sont jointes à la remarque transmise.",
      },
      {
        type: "p",
        text: "Formulaire de contact : prénom, nom, e-mail, téléphone, message, case de consentement, date et heure de la demande.",
      },
      {
        type: "p",
        text: "Si l’adresse de la page contient ces paramètres, ils sont joints à la demande : page d’arrivée, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid. Ils sont gardés dans le navigateur pour la session, puis envoyés avec le formulaire.",
      },
      { type: "h2", text: "3. Finalité" },
      {
        type: "p",
        text: "Enregistrer la demande et permettre un rappel sous deux jours ouvrés. Le formulaire n’envoie pas d’e-mail de confirmation à la personne qui l’a rempli.",
      },
      { type: "h2", text: "4. Destinataire" },
      {
        type: "p",
        text: "La demande est transmise à Christophe Bouin, qui la traite. Contact pour exercer un droit : info@comparateur-3eme-pilier.ch.",
      },
      { type: "h2", text: "5. Droits" },
      {
        type: "p",
        text: "Pour une demande d’accès, de rectification ou de suppression : info@comparateur-3eme-pilier.ch. Autorité : Préposé fédéral à la protection des données et à la transparence (PFPDT).",
      },
    ],
  },
  {
    kind: "page",
    slug: "page-remerciement",
    wpId: 1301,
    title: "C'est fait ! Merci pour votre temps.",
    metaTitle: "Demande bien reçue — Comparateur 3ème pilier",
    description:
      "C'est fait ! Merci pour votre temps. Aucun e-mail de confirmation n’est envoyé.",
    published: "2023-05-05",
    updated: UPDATED,
    intro:
      "C'est fait ! Merci pour votre temps. Aucun e-mail de confirmation n’est envoyé.",
    related: ["deductions-fiscales-3eme-pilier", "3eme-pilier-a-ou-b"],
    blocks: [
      {
        type: "p",
        text: "Si vous n’avez pas de nouvelles sous deux jours ouvrés, écrivez à info@comparateur-3eme-pilier.ch en rappelant votre numéro.",
      },
    ],
  },
  {
    kind: "page",
    slug: "declaration-impot-gratuite",
    wpId: 2897,
    title: "Déclaration d’impôt : l’offre 2022 n’est plus en cours",
    metaTitle: "Déclaration d’impôt — offre 2022 expirée",
    description:
      "L’ancienne promotion « déclaration 2022 offerte » n’est plus valable. Le comparatif 3e pilier reste sans honoraires.",
    published: "2022-03-15",
    updated: UPDATED,
    intro:
      "Cette URL existait pour une promotion 2021–2022 (« déclaration d’impôt offerte aux nouveaux clients »). Elle n’est plus commercialisée. Nous conservons le slug pour ne pas casser les liens, avec un état des lieux honnête.",
    related: ["formulaire-3eme-pilier", "nous-contacter"],
    blocks: [
      {
        type: "p",
        text: "Le comparatif d’offres 3e pilier reste sans honoraires et sans engagement. Pour une déclaration fiscale, adressez-vous à un fiduciaire ou au service cantonal : nous ne prétendons pas remplacer une fiduciaire.",
      },
    ],
  },
  {
    kind: "page",
    slug: "actualite-3eme-pilier",
    wpId: 2653,
    title: "Actualités du 3e pilier",
    metaTitle: "Actualités du 3e pilier en Suisse",
    description:
      "Articles du 3e pilier : plafonds OFAS 2026, rachat de lacunes, tableau des montants, retrait du 3a et lien avec le 2e pilier.",
    published: "2023-11-05",
    updated: UPDATED,
    intro:
      "Cette liste montre les articles dont la date de publication est atteinte. Un texte daté plus tard n’apparaît pas avant ce jour.",
    related: [
      "plafonds-3a-2026-2027",
      "rachat-lacunes-3a-2026",
      "tableau-ofas-montants-avs-lpp-3a",
      "retrait-3a-vs-3b-2026",
    ],
    blocks: [],
  },
  {
    kind: "page",
    slug: "mentions-legales",
    title: "Mentions légales",
    metaTitle: "Mentions légales — Comparateur 3ème pilier",
    description:
      "Éditeur du site comparateur-3eme-pilier.ch, responsable du comparatif et nature du service. Contact : info@comparateur-3eme-pilier.ch.",
    published: UPDATED,
    updated: "2026-09-28",
    intro:
      "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Responsable du contenu et du comparatif : Christophe Bouin. Contact : info@comparateur-3eme-pilier.ch.",
    related: ["page-de-confidentialitee", "a-propos"],
    blocks: [
      { type: "h2", text: "Éditeur" },
      {
        type: "p",
        text: "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Responsable du contenu et du comparatif : Christophe Bouin. Contact : info@comparateur-3eme-pilier.ch.",
      },
      { type: "h2", text: "Nature du service" },
      {
        type: "p",
        text: "Le site publie une information générale sur le 3e pilier et recueille une demande de comparatif. Un conseiller rappelle sous deux jours ouvrés pour examiner les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Le comparatif est gratuit et sans engagement.",
      },
    ],
  },
  {
    kind: "page",
    slug: "a-propos",
    title: "À propos",
    metaTitle: "À propos — Comparateur 3ème pilier",
    description:
      "Le site comparateur-3eme-pilier.ch informe sur le 3e pilier et recueille des demandes de comparatif. Responsable : Christophe Bouin.",
    published: UPDATED,
    updated: "2026-09-28",
    intro:
      "Le site comparateur-3eme-pilier.ch informe sur le 3e pilier à partir des textes OFAS et AFC, et recueille des demandes de comparatif. Christophe Bouin en est le responsable. Contact : info@comparateur-3eme-pilier.ch.",
    related: ["deductions-fiscales-3eme-pilier", "analyse-de-prevoyance", "mentions-legales", "actualite-3eme-pilier"],
    blocks: [
      { type: "h2", text: "Responsable" },
      {
        type: "p",
        text: "Christophe Bouin rédige et revoit les pages du site. Il traite les demandes de comparatif. Contact : info@comparateur-3eme-pilier.ch.",
      },
      { type: "h2", text: "Méthode" },
      {
        type: "p",
        text: METHOD_INLINE,
      },
      { type: "h2", text: "Ce que le service examine" },
      {
        type: "p",
        text: "Un conseiller examine les solutions accessibles dans le cadre du service : frais, souplesse des versements, valeur de rachat, garanties décès ou incapacité, horizon.",
      },
      { type: "h2", text: "Limites" },
      {
        type: "ul",
        items: [
          "Le site ne remplace pas un fiduciaire ni une caisse de pension.",
          "Le site ne garantit pas un rendement.",
          "Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
        ],
      },
      { type: "h2", text: "Revue" },
      {
        type: "p",
        text: "Dernière revue des plafonds 2026 : 19 septembre 2026. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
      },
    ],
  },
];
