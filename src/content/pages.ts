import { chf, FIGURES, pillar3aTableRows, YEAR_SPAN, YEAR_SPAN_WORDS, CEILING_NOTE } from "@/lib/figures";
import type { EditorialDoc } from "./types";

const UPDATED = "2026-09-20";
const METHOD_INLINE =
  "Méthode : textes officiels OFAS (tableau 2026) et AFC, notices cantonales pour le 3b. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Dernière revue : 19 septembre 2026.";

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
      "Faut-il choisir 3a ou 3b ? Le plus souvent, les deux s’emboîtent. Le 3a (prévoyance liée) est encouragé fiscalement dans toute la Suisse. Le 3b (prévoyance libre) sert surtout la souplesse : bénéficiaires, durée, accès à l’épargne. Ce n’est pas un classement, c’est un emboîtement avec vos 1er et 2e piliers.",
    related: [
      "3eme-pilier-b-prevoyance-libre",
      "deductions-fiscales-3eme-pilier",
      "3eme-pilier-banque-assurance",
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
    metaTitle: `3e pilier banque ou assurance (${YEAR_SPAN}) : frais, garanties, horizon`,
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
    metaTitle: `3e pilier mixte ${YEAR_SPAN} : épargne et risque dans la même police`,
    description:
      `Une police mixte combine constitution de capital et couverture décès. Intérêt, limites, et quand séparer les deux contrats (${YEAR_SPAN}).`,
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
      `Grille de choix 3a/3b, banque/assurance, montant, canton et famille en ${YEAR_SPAN}. Comparatif indépendant, sans honoraires.`,
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
        text: "Décrivez votre projet. Un conseiller vous rappelle sous deux jours ouvrés pour examiner les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Ce n’est pas l’ensemble du marché suisse. Comparatif gratuit et sans engagement.",
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
      "Plafonds 3a 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS. Rachat dès 2026, 3b Genève/Fribourg, imposition au retrait. Sources AFC et OFAS.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quel est le plafond 3a déductible en 2026 ? ${chf(FIGURES.pillar3aWithLpp)} si vous êtes affilié au 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} (20 % du revenu d’activité, max.) sinon. Source : tableau OFAS du 1.1.2026. ${CEILING_NOTE}.`,
    related: [
      "quel-montant-deductible-3eme-pilier-2022",
      "3eme-pilier-a-impot-retrait",
      "plafonds-3a-2026-2027",
      "3a-impot-cantonal-geneve-2026",
      "3b-deduction-fribourg",
      "actualite-3eme-pilier",
    ],
    faqs: [
      {
        question: "Faut-il verser avant le 31 décembre ?",
        answer:
          "Oui : c’est la date de valeur au crédit du compte ou de la police 3a qui compte, pas la date d’ordre. Un virement trop tardif bascule sur l’année suivante. Source : OFAS, « Votre cotisation au 3e pilier ».",
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
      "Landing Genève : plafonds 3a 2026, enveloppe LIPP des primes d’assurance-vie, frontaliers. Plafonds 2026 : CHF 7’258 / 36’288. Montants 2027 à confirmer par l’OFAS.",
    published: "2022-07-01",
    updated: UPDATED,
    intro: `Le plafond 3a à Genève est-il plus élevé qu’ailleurs ? Non. En 2026 c’est le maximum fédéral OFAS / OPP 3 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} sans. ${CEILING_NOTE}. L’ICC change l’économie d’impôt, pas le droit de verser. La LIPP vise des primes d’assurance-vie, pas un « bonus 3b ».`,
    related: [
      "3a-impot-cantonal-geneve-2026",
      "frontalier-suisse",
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
        text: "Accès 3a si AVS suisse. L’effet fiscal passe souvent par l’impôt à la source et, le cas échéant, la TOU. Voir les pages frontalier et TOU.",
      },
    ],
  },
  {
    kind: "page",
    slug: "assurance-vie-en-suisse",
    wpId: 3182,
    title: "Assurance-vie en Suisse",
    metaTitle: `Assurance-vie en Suisse ${YEAR_SPAN} : 3a, 3b, mixte, risque pur`,
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
    metaTitle: `Assurance décès ${YEAR_SPAN} : risque pur, 3a et famille`,
    description:
      `Capital décès ${YEAR_SPAN} : police temporaire, 3a mixte ou 3b. Dimensionner la couverture sans confondre épargne et risque.`,
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
    metaTitle: `Risque pur décès ${YEAR_SPAN} : temporaire, capital, 3e pilier`,
    description:
      `Le risque pur n’épargne pas : il paie un capital en cas de décès. Souvent moins cher qu’un mixte pour une grosse couverture (${YEAR_SPAN}).`,
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
    metaTitle: `Épargne enfant ${YEAR_SPAN} : 3b, assurance, compte — pas de 3a sans AVS`,
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
    metaTitle: `Libération des primes ${YEAR_SPAN} : invalidité et 3e pilier assurance`,
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
    intro: `Quelle est la rente AVS en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, une rente de vieillesse complète se situe entre ${chf(FIGURES.avsMinMonthly)} et ${chf(FIGURES.avsMaxMonthly)} par mois. La somme des deux rentes d’un couple marié est plafonnée à ${chf(FIGURES.avsCoupleMaxMonthly)}. Au 19 septembre 2026, le tableau OFAS 2027 n’est pas publié : ces montants restent ceux en vigueur jusqu’à une éventuelle décision du Conseil fédéral (annonce usuelle en octobre).`,
    related: ["2eme-pilier-lpp", "tableau-ofas-montants-avs-lpp-3a", "analyse-de-prevoyance"],
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
      "LPP 2026 (tableau OFAS 1.1.2026) : seuil d’entrée, déduction de coordination, salaire coordonné. 2027 : mêmes montants encore en vigueur, tableau OFAS non publié au 19.09.2026. Lien avec le plafond 3a.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quel est le seuil LPP en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, l’affiliation obligatoire commence à ${chf(FIGURES.lppEntry)} de salaire annuel, la déduction de coordination est ${chf(FIGURES.lppCoordination)}, la limite supérieure ${chf(FIGURES.lppSalaryCap)}. Au 19 septembre 2026, le tableau 2027 n’est pas publié : ces montants restent ceux en vigueur.`,
    related: [
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
    metaTitle: `Libre passage LPP ${YEAR_SPAN} : changement d’employeur, compte, police`,
    description:
      `Quand l’avoir de 2e pilier sort de la caisse : compte ou police de libre passage, délais, 3e pilier. Guide ${YEAR_SPAN}.`,
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
    metaTitle: `Compte de libre passage ${YEAR_SPAN} : fonctionnement et pièges`,
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
    metaTitle: "Comparatif 3e pilier : demander un comparatif gratuit",
    description:
      "Décrivez votre projet en deux minutes. Un conseiller vous rappelle sous deux jours ouvrés. Comparatif gratuit et sans engagement. Aucun e-mail de confirmation n’est envoyé.",
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "3a ou 3b, banque ou assurance : décrivez votre projet. Un conseiller vous rappelle sous deux jours ouvrés pour examiner les solutions accessibles, leurs frais et leurs garanties. Comparatif gratuit et sans engagement. Aucun e-mail de confirmation n’est envoyé.",
    related: ["nous-contacter", "page-remerciement", "choisir-son-3eme-pilier"],
    blocks: [
      {
        type: "p",
        text: "Champs : prénom, nom, e-mail, téléphone, canton, situation. Une précision facultative (frontalier, TOU, logement). Consentement pour le rappel et la transmission au partenaire.",
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
      "Données recueillies par les formulaires de comparateur-3eme-pilier.ch. Contact : info@comparateur-3eme-pilier.ch.",
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
        text: "Formulaire de comparatif : prénom, nom, e-mail, téléphone, canton ou résidence, situation (salarié avec 2e pilier, sans 2e pilier, indépendant, frontalier, autre), précision facultative, case de consentement, date et heure de la demande.",
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
        text: "La demande est transmise au service qui traite les comparatifs de ce site, comme l’indique la case de consentement. Contact pour exercer un droit : info@comparateur-3eme-pilier.ch.",
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
    title: "Merci pour votre demande",
    metaTitle: "Demande bien reçue — Comparateur 3ème pilier",
    description:
      "Votre demande est enregistrée. Un conseiller vous rappelle sous deux jours ouvrés. Aucun e-mail de confirmation n’est envoyé.",
    published: "2023-05-05",
    updated: UPDATED,
    intro:
      "Votre demande est enregistrée. Un conseiller vous rappelle sous deux jours ouvrés. Aucun e-mail de confirmation n’est envoyé.",
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
    metaTitle: "Actualités 3e pilier — articles publiés au 26 septembre 2026",
    description:
      "Articles publiés au 26 septembre 2026 : plafonds 2026, rachat de lacunes, tableau OFAS, retrait 3a et lien avec le 2e pilier.",
    published: "2023-11-05",
    updated: UPDATED,
    intro:
      "Cette liste ne montre que les articles dont la date est le 26 septembre 2026 ou avant. Les textes datés plus tard ne sont pas publiés ici.",
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
      "Mentions du site comparateur-3eme-pilier.ch. Contact : info@comparateur-3eme-pilier.ch.",
    published: UPDATED,
    updated: UPDATED,
    intro:
      "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Contact : info@comparateur-3eme-pilier.ch.",
    related: ["page-de-confidentialitee", "a-propos"],
    blocks: [
      { type: "h2", text: "Éditeur" },
      {
        type: "p",
        text: "Site : comparateur-3eme-pilier.ch. Nom d’usage : Comparateur 3ème pilier. Contact : info@comparateur-3eme-pilier.ch.",
      },
      { type: "h2", text: "Nature du service" },
      {
        type: "p",
        text: "Le site publie une information générale sur le 3e pilier et recueille une demande de comparatif. Un conseiller rappelle sous deux jours ouvrés pour examiner les solutions accessibles dans le cadre du service, leurs frais et leurs garanties. Ce n’est pas l’ensemble du marché suisse. Le comparatif est gratuit et sans engagement.",
      },
    ],
  },
  {
    kind: "page",
    slug: "a-propos",
    title: "À propos",
    metaTitle: "À propos — Comparateur 3ème pilier",
    description:
      "Le site comparateur-3eme-pilier.ch informe sur le 3e pilier et recueille des demandes de comparatif. Contact : info@comparateur-3eme-pilier.ch.",
    published: UPDATED,
    updated: UPDATED,
    intro:
      "Le site comparateur-3eme-pilier.ch informe sur le 3e pilier à partir des textes OFAS et AFC, et recueille des demandes de comparatif. Contact : info@comparateur-3eme-pilier.ch.",
    related: ["deductions-fiscales-3eme-pilier", "analyse-de-prevoyance", "mentions-legales", "actualite-3eme-pilier"],
    blocks: [
      { type: "h2", text: "Méthode" },
      {
        type: "p",
        text: METHOD_INLINE,
      },
      { type: "h2", text: "Ce que le service examine" },
      {
        type: "p",
        text: "Un conseiller examine les solutions accessibles dans le cadre du service : frais, souplesse des versements, valeur de rachat, garanties décès ou incapacité, horizon. Ce n’est pas l’ensemble du marché suisse.",
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
