import { chf, FIGURES, pillar3aTableRows, YEAR_SPAN, YEAR_SPAN_WORDS, CEILING_NOTE } from "@/lib/figures";
import type { EditorialDoc } from "./types";

const UPDATED = "2026-09-19";
const METHOD_INLINE =
  "Méthode : textes officiels OFAS (OPP 3, tableau 2026) et AFC, notices cantonales pour le 3b. Pour 2027, nous citons l’ordonnance encore en vigueur — pas un plafond inventé. Nous ne copions pas un palmarès publicitaire. Dernière revue : 19 septembre 2026.";

export const PAGES: EditorialDoc[] = [
  {
    kind: "page",
    slug: "3eme-pilier-a-ou-b",
    wpId: 2060,
    title: `3e pilier A ou B : comment choisir en ${YEAR_SPAN}`,
    metaTitle: `3e pilier A ou B (${YEAR_SPAN}) : fiscalité, retraits, bénéficiaires`,
    description:
      `Différences 3a / 3b en ${YEAR_SPAN_WORDS} : plafonds OFAS / OPP 3, retraits, bénéficiaires, Genève et Fribourg. Comparatif gratuit, sans honoraires.`,
    published: "2021-11-04",
    updated: UPDATED,
    intro:
      "Le 3e pilier suisse existe en deux enveloppes. Le 3a (prévoyance liée) est encouragé fiscalement dans toute la Suisse. Le 3b (prévoyance libre) sert surtout la souplesse : bénéficiaires, durée, accès à l’épargne. Le bon choix n’est pas un classement, c’est un emboîtement avec vos 1er et 2e piliers.",
    related: ["3eme-pilier-b-prevoyance-libre", "deductions-fiscales-3eme-pilier", "3eme-pilier-banque-assurance"],
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
        caption: `Plafonds 3a ${YEAR_SPAN_WORDS} (OFAS / art. 7 OPP 3) — valables Confédération, cantons et communes. ${CEILING_NOTE}`,
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
        text: `Les anciens plafonds 7’056 / 35’280 (2023–2024) ou 34’416 (jusqu’en 2022) ne s’appliquent plus. En ${YEAR_SPAN_WORDS} : ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}. ${CEILING_NOTE}`,
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
    intro:
      "La prévoyance libre (3b) recouvre l’épargne et l’assurance-vie hors OPP 3. Elle ne remplace pas le 3a lorsque vous avez un revenu AVS : elle le complète, ou elle sert quand le 3a n’est pas accessible.",
    related: ["3eme-pilier-a-ou-b", "3eme-pilier-geneve", "epargne-enfant"],
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
    metaTitle: `3e pilier banque ou assurance (${YEAR_SPAN}) : frais, garanties, horizon`,
    description:
      "Même déduction 3a, supports différents. Banque : flexibilité. Assurance : garanties, décès, libération des primes. Comment départager.",
    published: "2021-10-31",
    updated: UPDATED,
    intro:
      `La déduction 3a ${YEAR_SPAN_WORDS} est identique que l’argent soit versé à une fondation bancaire ou à un assureur. Ce qui change : les frais, les garanties, la discipline d’épargne et ce qui reste si vous arrêtez au bout de trois ans.`,
    related: [
      "choisir-entre-3eme-pilier-bancaire-ou-en-assurance",
      "liberation-du-paiement-des-primes",
      "choisir-son-3eme-pilier",
    ],
    faqs: [
      {
        question: "Les 100’000 CHF de garantie s’appliquent-ils au 3a bancaire ?",
        answer:
          "Les dépôts bancaires suisses sont garantis jusqu’à 100’000 CHF par client et par banque (esisuisse). Les comptes de prévoyance 3a auprès d’une fondation bancaire relèvent du régime de la fondation : lisez le prospectus. Les titres 3a ne sont pas un dépôt à vue.",
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
    metaTitle: "3e pilier mixte : épargne et risque dans la même police",
    description:
      "Une police mixte combine constitution de capital et couverture décès. Intérêt, limites, et quand séparer les deux contrats.",
    published: "2022-03-17",
    updated: UPDATED,
    intro:
      "On appelle souvent « mixte » une assurance-vie qui verse un capital à l’échéance si vous êtes en vie, et un capital (parfois le même, parfois un autre) en cas de décès. C’est un outil, pas un produit obligatoire du 3a.",
    related: ["assurance-vie-en-suisse", "risque-pur-deces", "3eme-pilier-banque-assurance"],
    blocks: [
      {
        type: "p",
        text: "L’intérêt : un seul contrat pour épargner et protéger. La limite : vous payez le risque et l’épargne dans la même prime, avec une transparence des frais parfois médiocre. Si le besoin décès est élevé et l’épargne faible, un risque pur (temporaire décès) plus un 3a bancaire est souvent plus lisible. Si l’horizon est long et que vous voulez une discipline de primes, le mixte peut coller.",
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
    metaTitle: `Choisir son 3e pilier en ${YEAR_SPAN} : méthode, pas un palmarès`,
    description:
      "Grille de choix 3a/3b, banque/assurance, montant, canton et famille. Comparatif indépendant, sans honoraires.",
    published: "2023-06-01",
    updated: UPDATED,
    intro:
      "Choisir un 3e pilier, ce n’est pas « le meilleur taux du moment ». C’est aligner un plafond fiscal, un horizon, un risque famille et un support (compte, titres, police) que vous tiendrez réellement.",
    related: ["analyse-de-prevoyance", "3eme-pilier-a-ou-b", "formulaire-3eme-pilier"],
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
        text: "Nous demandons votre situation, puis un partenaire conseil (diplôme AFA annoncé sur le site historique) sélectionne un nombre limité d’offres. Le service reste sans honoraires pour vous : vous n’êtes pas obligé de souscrire. Un entretien d’environ 30 minutes peut suivre pour lire les garanties, pas pour « signer le jour même ».",
      },
      {
        type: "p",
        text: METHOD_INLINE,
      },
    ],
  },
  {
    kind: "page",
    slug: "deductions-fiscales-3eme-pilier",
    wpId: 1918,
    title: `Déductions fiscales du 3e pilier en ${YEAR_SPAN}`,
    metaTitle: `Déductions 3e pilier ${YEAR_SPAN} : plafonds OFAS 7’258 / 36’288`,
    description:
      `Plafonds 3a ${YEAR_SPAN_WORDS} (OFAS 2026, OPP 3 encore en vigueur pour 2027), rachat dès 2026, 3b Genève/Fribourg, imposition au retrait. Sources AFC et OFAS.`,
    published: "2021-11-12",
    updated: UPDATED,
    intro: `La Confédération encourage le 3a par la déduction du revenu (impôt fédéral, cantonal et communal). En ${YEAR_SPAN_WORDS}, les plafonds sont ${chf(FIGURES.pillar3aWithLpp)} (avec 2e pilier) et ${chf(FIGURES.pillar3aWithoutLpp)} (sans 2e pilier, 20 % du revenu d’activité). ${CEILING_NOTE}`,
    related: ["quel-montant-deductible-3eme-pilier-2022", "3eme-pilier-a-impot-retrait", "3eme-pilier-a-ou-b"],
    faqs: [
      {
        question: "Faut-il verser avant le 31 décembre ?",
        answer:
          "Oui : c’est la date de valeur au crédit du compte ou de la police 3a qui compte, pas la date d’ordre. Un virement trop tardif bascule sur l’année suivante.",
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
        text: `Les lacunes depuis 2025 peuvent être rachetées à partir de 2026 (y compris en 2027), dans la limite de la petite cotisation (${chf(FIGURES.buybackMax)}), en plus du versement ordinaire de l’année, si vous aviez un revenu AVS l’année de la lacune et l’année du rachat, et que le maximum ordinaire de l’année en cours est déjà versé. Source OFAS, « Rachats dans le pilier 3a ».`,
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
      "Un frontalier qui cotise à l’AVS suisse peut en principe alimenter un 3a. L’intérêt fiscal dépend du lieu d’imposition (impôt à la source, taxation ordinaire, TOU) et du droit interne de l’État de résidence. Ce n’est pas automatique « comme un résident genevois ».",
    related: ["ouvrir-un-3eme-pilier-pour-un-frontalier", "taxation-ordinaire-ulterieure", "3eme-pilier-geneve"],
    faqs: [
      {
        question: "Que se passe-t-il si je quitte la Suisse ?",
        answer:
          "Le départ définitif est un motif de versement anticipé du 3a. Les règles varient selon que vous restez dans l’UE/AELE ou non, et selon le 2e pilier. Anticipez l’impôt de sortie avec un conseiller et l’autorité fiscale.",
      },
    ],
    blocks: [
      { type: "h2", text: "Conditions 3a" },
      {
        type: "p",
        text: "Revenu d’activité lucrative soumis à l’AVS suisse. Les frontaliers dans ce cas sont expressément visés par l’OFAS. Sans cotisations AVS suisses, le 3a n’est en principe pas ouvert ; le 3b peut l’être.",
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
      `Landing Genève : plafonds 3a ${YEAR_SPAN_WORDS}, enveloppe LIPP des primes d’assurance-vie, frontaliers. Remplace l’ancienne URL qui menait à une image.`,
    published: "2022-07-01",
    updated: UPDATED,
    intro:
      "Genève concentre une part importante des recherches « 3e pilier » en Suisse romande : résidents imposés à l’ICC, frontaliers, indépendants. Cette page recréée en 2026 remplace une ancienne landing dont la redirection WordPress aboutissait à un fichier JPEG.",
    related: ["frontalier-suisse", "3eme-pilier-a-ou-b", "deductions-fiscales-3eme-pilier"],
    blocks: [
      { type: "h2", text: "3a : les mêmes plafonds qu’ailleurs" },
      {
        type: "p",
        text: `À Genève comme dans les autres cantons, le 3a ${YEAR_SPAN_WORDS} déduit jusqu’à ${chf(FIGURES.pillar3aWithLpp)} (avec LPP) ou ${chf(FIGURES.pillar3aWithoutLpp)} (sans LPP, 20 % du revenu). L’économie d’impôt dépend du barème ICC + IFD, pas d’un « bonus genevois » sur le plafond fédéral. ${CEILING_NOTE}`,
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
        text: "Accès 3a si AVS suisse. L’effet fiscal passe souvent par l’impôt à la source et, le cas échéant, la TOU. Voir les pages frontalier et TOU.",
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-vie-en-suisse",
    wpId: 3182,
    title: "Assurance-vie en Suisse",
    metaTitle: `Assurance-vie en Suisse (${YEAR_SPAN}) : 3a, 3b, mixte, risque pur`,
    description:
      "Assurance-vie suisse : rôle dans le 3a et le 3b, capital décès, épargne, fiscalité. Landing historique à conserver.",
    published: "2022-03-18",
    updated: UPDATED,
    intro:
      "En Suisse, « assurance-vie » recouvre des polices très différentes : risque pur, mixte, 3a lié, 3b libre. Cette page existait déjà en 2022 et recevait des liens depuis d’autres funnels. Elle reste à cette URL.",
    related: ["3eme-pilier-mixte", "risque-pur-deces", "assurance-deces"],
    blocks: [
      {
        type: "p",
        text: "Une police liée 3a offre la déduction OPP 3 mais verrouille les sorties. Une police 3b offre la liberté de bénéficiaires et de durée, avec une fiscalité à juger canton par canton. Une temporaire décès ne constitue pas d’épargne : elle paie un capital si le risque se réalise pendant la durée. Comparer « l’assurance-vie » sans ce tri n’a pas de sens.",
      },
      {
        type: "h2",
        text: "Ce que nous regardons dans une offre",
      },
      {
        type: "ul",
        items: [
          "Capital garanti vs lié à des fonds.",
          "Table de valeurs de rachat.",
          "Coût du risque (décès / invalidité / libération).",
          "Frais d’acquisition et de gestion.",
          "Clause bénéficiaire et rachat possible.",
        ],
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-deces",
    wpId: 3202,
    title: "Assurance décès",
    metaTitle: "Assurance décès en Suisse : risque pur, 3a et famille",
    description:
      "Capital décès : police temporaire, 3a mixte ou 3b. Comment dimensionner la couverture sans confondre épargne et risque.",
    published: "2022-03-18",
    updated: UPDATED,
    intro:
      "L’assurance décès verse un capital aux bénéficiaires si vous décédez pendant la durée du contrat. Elle peut être autonome (risque pur) ou intégrée à un 3e pilier. Ce n’est pas un substitut du 3a fiscal.",
    related: ["risque-pur-deces", "choisir-les-beneficiaires", "3eme-pilier-mixte"],
    blocks: [
      {
        type: "p",
        text: "Dimensionnez le capital par rapport aux dettes (hypothèque), au niveau de vie du ménage et aux rentes de survivants AVS/LPP déjà acquises. Un 3a bancaire ne paie que l’avoir : si la famille a besoin d’un million et que le compte pèse 40’000 CHF, le trou n’est pas « de l’épargne mal choisie », c’est un manque de risque pur.",
      },
    ],
  },
  {
    kind: "page",
    slug: "risque-pur-deces",
    wpId: 1892,
    title: "Risque pur décès",
    metaTitle: "Risque pur décès : temporaire, capital, 3e pilier",
    description:
      "Le risque pur n’épargne pas : il paie un capital en cas de décès. Souvent moins cher qu’un mixte pour une grosse couverture.",
    published: "2021-11-12",
    updated: UPDATED,
    intro:
      "Une temporaire décès (risque pur) n’a pas de valeur de rachat, ou une valeur négligeable. Toute la prime paie le risque. C’est souvent la façon la plus efficace de couvrir une hypothèque ou des enfants en bas âge, à côté d’un 3a bancaire.",
    related: ["assurance-deces", "3eme-pilier-mixte"],
    blocks: [
      {
        type: "p",
        text: "Comparez le capital, la durée (constante ou dégressive), les exclusions, la clause d’invalidité éventuelle et le questionnaire de santé. Une police refusée ou surprime peut valoir mieux qu’un mixte « accepté » illisible.",
      },
    ],
  },
  {
    kind: "page",
    slug: "epargne-enfant",
    wpId: 1967,
    title: "Épargne enfant",
    metaTitle: "Épargne enfant en Suisse : 3b, assurance, compte",
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
    metaTitle: "Analyse de prévoyance : 1er, 2e et 3e piliers",
    description:
      "Lire un certificat LPP, estimer l’AVS, mesurer le trou de retraite et le besoin décès avant de choisir un 3e pilier.",
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
    metaTitle: "Libération des primes : invalidité et 3e pilier assurance",
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
    metaTitle: `1er pilier ${YEAR_SPAN} : rentes AVS, 13e rente, âge de référence`,
    description:
      "AVS 2026 : rentes min./max. (tableau OFAS 1.1.2026). 2027 : tableau non publié au 19.09.2026. 13e rente dès décembre 2026, âge de référence 65 ans.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Le 1er pilier (AVS/AI/APG) est l’assurance sociale de base. Selon le tableau OFAS au 1er janvier 2026, une rente de vieillesse complète se situe entre ${chf(FIGURES.avsMinMonthly)} et ${chf(FIGURES.avsMaxMonthly)} par mois. La somme des deux rentes d’un couple marié est plafonnée à ${chf(FIGURES.avsCoupleMaxMonthly)}. Au 19 septembre 2026, le tableau OFAS 2027 n’est pas publié : ces montants restent ceux en vigueur jusqu’à une éventuelle décision du Conseil fédéral (annonce usuelle en octobre).`,
    related: ["2eme-pilier-lpp", "analyse-de-prevoyance"],
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
        text: "Les textes WordPress citaient encore « 65 ans / 64 ans ». C’est périmé pour 2026–2027. Nous indiquons l’âge de référence et la transition AVS 21.",
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
      "LPP 2026 (tableau OFAS 1.1.2026) : seuil d’entrée, déduction de coordination, salaire coordonné. 2027 : mêmes montants encore en vigueur, tableau OFAS non publié au 19.09.2026. Lien avec le plafond 3a.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Le 2e pilier (LPP) capitalise un avoir salarial. Selon le tableau OFAS au 1er janvier 2026, le seuil d’entrée obligatoire est ${chf(FIGURES.lppEntry)} de salaire annuel, la déduction de coordination ${chf(FIGURES.lppCoordination)}, la limite supérieure ${chf(FIGURES.lppSalaryCap)}. Au 19 septembre 2026, le tableau 2027 n’est pas publié : ces montants restent ceux en vigueur.`,
    related: ["a-quoi-sert-le-deuxieme-pilier", "libre-passage-lpp", "compte-de-libre-passage-lpp"],
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
    metaTitle: "Libre passage LPP : changement d’employeur, compte, police",
    description:
      "Quand l’avoir de 2e pilier sort de la caisse : compte ou police de libre passage, délais, 3e pilier. Guide 2026–2027.",
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
      "Compte vs police de libre passage, frais, titres, regroupement d’avoirs. À ne pas confondre avec un 3a.",
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
    metaTitle: "Comparatif 3e pilier : formulaire sans Typeform",
    description:
      "Demandez un comparatif 3a/3b en HTML, sans Typeform. Sans honoraires, sans engagement. Réponse par téléphone ou e-mail.",
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "Remplace les anciens tunnels Typeform. Décrivez votre situation : nous transmettons la demande à un conseiller partenaire. Maximum d’offres utiles, pas un catalogue de 40 polices.",
    related: ["nous-contacter", "page-remerciement", "choisir-son-3eme-pilier"],
    blocks: [
      {
        type: "p",
        text: "Champs essentiels : canton, statut, affiliation LPP, objectif (fiscal, retraite, famille, logement), budget annuel, coordonnées. Un champ libre pour le contexte (frontalier, TOU, enfant, hypothèque).",
      },
    ],
  },
  {
    kind: "page",
    slug: "nous-contacter",
    wpId: 1265,
    title: "Nous contacter",
    metaTitle: "Nous contacter — Comparateur 3ème pilier",
    description:
      "Contactez Comparateur 3ème pilier : demande d’information ou entretien. Sans honoraires. Réponse de préférence par téléphone.",
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "Une minute pour décrire le besoin, vos coordonnées, puis validation. Nous privilégions le téléphone, plus rapide qu’un fil de mails. Le service reste sans honoraires : vous choisissez ensuite de poursuivre ou non.",
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
        text: `Écrivez-nous aussi à ${"info@comparateur-3eme-pilier.ch"}. Pas d’iframe obligatoire, pas de Typeform.`,
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
      "Politique de confidentialité (LPD). Le slug historique page-de-confidentialitee est conservé. Alias 301 depuis l’orthographe correcte.",
    published: "2021-10-30",
    updated: UPDATED,
    intro:
      "Cette page reste à l’URL historique /page-de-confidentialitee/ (faute d’orthographe conservée pour les backlinks). L’orthographe correcte /page-de-confidentialite/ redirige ici en 301.",
    related: ["mentions-legales", "nous-contacter"],
    blocks: [
      { type: "h2", text: "1. Responsable" },
      {
        type: "p",
        text: "Le site comparateur-3eme-pilier.ch collecte des données de contact lorsque vous utilisez les formulaires. Contact : info@comparateur-3eme-pilier.ch. L’éditeur historique du WordPress n’est pas un titre de propriété SWITCH : voir mentions légales.",
      },
      { type: "h2", text: "2. Données collectées" },
      {
        type: "p",
        text: "Identité, civilité, e-mail, téléphone, canton, situation professionnelle, éléments de prévoyance que vous saisissez, message, date et heure, métadonnées techniques minimales (par exemple adresse IP dans les journaux serveur). Pas de champ carte bancaire.",
      },
      { type: "h2", text: "3. Finalités" },
      {
        type: "ul",
        items: [
          "Répondre à une demande de contact ou de comparatif.",
          "Transmettre le dossier à un partenaire conseil pour établir des offres (au plus quelques offres, pas une revente de fichier).",
          "Tenir une preuve de consentement et un journal des leads.",
          "Améliorer le site (statistiques agrégées, si un outil d’audience est activé).",
        ],
      },
      { type: "h2", text: "4. Bases (LPD)" },
      {
        type: "p",
        text: "Loi fédérale sur la protection des données. Traitement pour l’exécution de votre demande et notre intérêt à gérer le service. Le consentement est demandé pour la transmission au partenaire et pour un éventuel suivi commercial. Vous pouvez le refuser en n’envoyant pas le formulaire.",
      },
      { type: "h2", text: "5. Destinataires" },
      {
        type: "p",
        text: "Équipe du site, hébergeur, et le partenaire chargé de produire le comparatif. Nous ne revendons pas les données. Les offres sont gratuites pour l’utilisateur : le partenaire ne doit pas exiger d’honoraires en échange de la remise des offres.",
      },
      { type: "h2", text: "6. Conservation" },
      {
        type: "p",
        text: "Les demandes sont conservées le temps du traitement puis archivées de façon limitée pour les obligations comptables et de preuve (en pratique jusqu’à 10 ans pour les pièces ayant une portée juridique, sinon suppression plus tôt).",
      },
      { type: "h2", text: "7. Droits" },
      {
        type: "p",
        text: "Accès, rectification, destruction, remise, opposition. Exercice : info@comparateur-3eme-pilier.ch ou le formulaire de contact. Autorité : Préposé fédéral à la protection des données (PFPDT).",
      },
      { type: "h2", text: "8. Cookies et mesures" },
      {
        type: "p",
        text: "Le site reconstruit n’embarque pas Google Analytics ni GTM par défaut. Si un outil d’audience est ajouté plus tard, cette page sera mise à jour. Les cookies strictement nécessaires au fonctionnement (session) peuvent être posés.",
      },
      { type: "h2", text: "9. Sécurité" },
      {
        type: "p",
        text: "Transport HTTPS, accès restreint aux journaux de leads, champs anti-robot. Aucune sécurité n’est absolue.",
      },
    ],
  },
  {
    kind: "page",
    slug: "page-remerciement",
    wpId: 1301,
    title: "Merci pour votre demande",
    metaTitle: "Demande bien reçue — Comparateur 3ème pilier",
    description: "Votre demande de comparatif ou de contact a bien été enregistrée.",
    published: "2023-05-05",
    updated: UPDATED,
    intro:
      "Merci. Un conseiller revient vers vous, de préférence par téléphone. En attendant, vous pouvez lire les plafonds 2026–2027 ou la différence 3a / 3b.",
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
    metaTitle: "Actualités 3e pilier — articles prévoyance",
    description:
      "Tous les articles : plafonds, frontaliers, banque ou assurance, TOU, bénéficiaires. Hub recréé (l’ancien WordPress n’affichait plus la liste).",
    published: "2023-11-05",
    updated: UPDATED,
    intro:
      "Le hub WordPress était presque vide. Ici, tous les articles republient leurs slugs d’origine, mis à jour pour 2026–2027.",
    related: ["category/prevoyance"],
    blocks: [],
  },
  {
    kind: "page",
    slug: "mentions-legales",
    title: "Mentions légales",
    metaTitle: "Mentions légales — Comparateur 3ème pilier",
    description:
      "Mentions légales du site comparateur-3eme-pilier.ch. Page créée à la reconstruction (404 sur le WordPress live).",
    published: UPDATED,
    updated: UPDATED,
    intro:
      "Cette page n’existait pas sur le WordPress (404). Elle est créée pour l’E-E-A-T et les obligations d’information. Les éléments d’identité SWITCH nominatifs ne sont pas publics : nous n’inventons pas un titulaire.",
    related: ["page-de-confidentialitee", "a-propos"],
    blocks: [
      { type: "h2", text: "Éditeur" },
      {
        type: "p",
        text: "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Contact : info@comparateur-3eme-pilier.ch. Domaine enregistré le 4 octobre 2021 auprès d’Infomaniak Network SA (RDAP SWITCH, statut actif).",
      },
      { type: "h2", text: "Hébergement de cette version" },
      {
        type: "p",
        text: "Application Next.js. L’origine WordPress historique reste en ligne tant que la bascule DNS n’est pas faite. Ne pas considérer cette instance de prévisualisation comme l’origine de production Infomaniak / Cloudflare.",
      },
      { type: "h2", text: "Nature du service" },
      {
        type: "p",
        text: "Mise en relation et comparatif d’offres de prévoyance individuelle. Information générale, pas un conseil en placement personnalisé au sens d’un mandat LSFin signé sur ce site. Un partenaire diplômé AFA peut prendre le relais après le formulaire.",
      },
      { type: "h2", text: "Propriété intellectuelle" },
      {
        type: "p",
        text: "Les textes de cette reconstruction sont originaux (2026). Les URL et l’intention des landings WordPress sont reprises pour la continuité SEO.",
      },
    ],
  },
  {
    kind: "page",
    slug: "a-propos",
    title: "À propos",
    metaTitle: "À propos — Comparateur 3ème pilier",
    description:
      "Qui édite le comparateur, méthode éditoriale, dates de revue, limites du service. Page créée en 2026.",
    published: UPDATED,
    updated: UPDATED,
    intro:
      "Comparateur 3ème pilier est un site francophone d’information et de génération de demandes de comparatif pour la Suisse romande, les frontaliers et Genève. Il n’est pas un agrégateur de tarifs en temps réel.",
    related: ["analyse-de-prevoyance", "mentions-legales"],
    blocks: [
      { type: "h2", text: "Méthode" },
      {
        type: "p",
        text: METHOD_INLINE,
      },
      { type: "h2", text: "Ce que nous ne faisons pas" },
      {
        type: "ul",
        items: [
          "Remplacer votre fiduciaire ou votre caisse de pension.",
          "Garantir un rendement.",
          "Prétendre être le titulaire SWITCH tant que le RDAP n’est pas nominatif public.",
        ],
      },
      { type: "h2", text: "Revue" },
      {
        type: "p",
        text: "Dernière revue des plafonds et des rentes : 19 septembre 2026. Prochaine vérification naturelle : communiqué OFAS des montants au 1er janvier 2027 (généralement l’automne).",
      },
    ],
  },
];
