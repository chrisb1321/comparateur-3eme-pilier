import { chf, FIGURES, pillar3aTableRows, YEAR_SPAN, YEAR_SPAN_WORDS, CEILING_NOTE, NOTE_2027 } from "@/lib/figures";
import type { EditorialDoc } from "./types";
import { SOCLE_PAGES } from "./socle-pages";
import { SUITE_PAGES } from "./suite-pages";

const UPDATED = "2026-09-20";
const METHOD_INLINE =
  "Méthode : textes officiels OFAS (tableau 2026) et AFC, notices cantonales pour le 3b. Les plafonds 2026 viennent du tableau OFAS. Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB. Nous ne copions pas un palmarès publicitaire. Dernière revue : 6 octobre 2026.";

const BASE_PAGES: EditorialDoc[] = [
  {
    kind: "page",
    slug: "3eme-pilier-a-ou-b",
    wpId: 2060,
    title: `3e pilier A ou B : comment choisir en ${YEAR_SPAN}`,
    metaTitle: `3e pilier A ou B (${YEAR_SPAN}) : fiscalité, retraits, bénéficiaires`,
    description:
      `Différences 3a / 3b en ${YEAR_SPAN_WORDS} : plafonds OFAS / OPP 3, retraits, bénéficiaires, Genève et Fribourg. Comparatif gratuit, sans honoraires.`,
    published: "2021-11-04",
    updated: "2026-10-03",
    intro:
      "Faut-il choisir 3a ou 3b ? Le plus souvent, les deux s’emboîtent. Le 3a (prévoyance liée) est encouragé fiscalement dans toute la Suisse. Le 3b (prévoyance libre) sert surtout la souplesse : bénéficiaires, durée, accès à l’épargne. Ce n’est pas un classement, c’est un emboîtement avec vos 1er et 2e piliers.",
    brief: [
      "Le 3a est déductible dans toute la Suisse. Le capital est bloqué, sauf motifs légaux.",
      `Plafond 3a 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans.`,
      "Le 3b n’a pas de plafond OFAS. Le retrait et les bénéficiaires sont plus libres.",
      "À Genève et à Fribourg, une déduction cantonale vise des primes d’assurance-vie, pas un compte.",
      NOTE_2027,
    ],
    related: [
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "3eme-pilier-b-prevoyance-libre",
      "deductions-fiscales-3eme-pilier",
      "3eme-pilier-banque-assurance",
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
        text: "Le 3b n’est pas déductible à l’impôt fédéral direct comme le 3a. Au canton, seuls certains régimes (Genève, Fribourg notamment) admettent les primes d’assurance-vie dans une enveloppe déjà largement occupée par la LAMal. Voir les [déductions fiscales](/deductions-fiscales-3eme-pilier/) et le [3e pilier à Genève](/3eme-pilier-geneve/). Le [canton de Vaud](/3eme-pilier-canton-vaud/) n’ajoute pas de plafond 3a local.",
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
        type: "p",
        text: "Le motif logement du 3a se lit à part : [retrait ou mise en gage du 3a pour un logement](/3eme-pilier-logement/). Le délai de cinq ans de ce versement est l’OPP 3, art. 3 al. 4. Il ne reprend pas le minimum de 20’000 francs, le délai de trois ans ni le remboursement à la vente, qui restent ceux du 2e pilier. La fenêtre de cinq ans autour de l’âge de référence, elle, est l’art. 3 al. 1 : ce n’est pas la même règle.",
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
        text: "Le 3a existe en fondation bancaire et en police d’assurance. Le 3b utile fiscalement à Genève ou à Fribourg est une [assurance-vie](/assurance-vie-en-suisse/), pas un compte. Pour un horizon court, la banque évite souvent les frais d’acquisition d’une police. Le cadre des trois piliers est le [3e pilier Suisse](/3eme-pilier-suisse/). Pour départager le support : [banque ou assurance](/3eme-pilier-banque-assurance/) et [comment choisir](/choisir-son-3eme-pilier/). Un [indépendant](/3eme-pilier-independant/) suit la même règle de plafond, selon qu’il a ou non une LPP. Pour un logement, lisez [utiliser le 3e pilier](/3eme-pilier-logement/). Pour ouvrir le contrat, voir [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/).",
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
    intro: `Le 3b est-il un second plafond OFAS ? Non. En ${YEAR_SPAN_WORDS} le 3a déduit ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} (art. 7 OPP 3). Le 3b n’a pas de maximum fédéral : il sert la souplesse, et, dans certains cantons seulement, une enveloppe de primes d’assurance-vie.`,
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
        answer: `Non. L’OFAS fixe uniquement le 3a (${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)} en ${YEAR_SPAN_WORDS}). Une déduction 3b, si elle existe, est cantonale et concerne en pratique des primes d’assurance-vie.`,
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
    updated: "2026-10-03",
    intro:
      `La déduction 3a ${YEAR_SPAN_WORDS} est identique que l’argent soit versé à une fondation bancaire ou à un assureur. Ce qui change : les frais, les garanties, la discipline d’épargne et ce qui reste si vous arrêtez au bout de trois ans. Ni la banque ni l’assurance n’est le bon support pour tout le monde.`,
    brief: [
      "Même plafond 3a en 2026, en fondation bancaire ou chez un assureur.",
      `Avec 2e pilier : ${chf(FIGURES.pillar3aWithLpp)}. Sans : 20 % du revenu, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}.`,
      "Banque : versements libres, pas de capital décès intégré.",
      "Assurance : primes, décès, parfois libération des primes. La valeur de rachat est souvent basse au début.",
      NOTE_2027,
    ],
    related: [
      "3eme-pilier-logement",
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
        answer: `Non. En ${YEAR_SPAN_WORDS} le plafond OFAS est ${chf(FIGURES.pillar3aWithLpp)} / ${chf(FIGURES.pillar3aWithoutLpp)}, prestataire indifférent. Le détail des frais est sur la page frais du 3a.`,
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
        text: "La police fixe souvent un rythme de primes, un capital à l’échéance, un capital décès, parfois une rente d’invalidité et la libération du paiement des primes. Ces garanties ont un coût, surtout les premières années : une résiliation précoce laisse une valeur de rachat inférieure aux primes versées. Un horizon long est le filtre le plus honnête. Pour un achat, lisez [le 3e pilier et le logement](/3eme-pilier-logement/) avant de signer. Pour les conditions d’ouverture : [ouvrir un 3e pilier](/ouvrir-un-3eme-pilier/).",
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
      {
        type: "p",
        text: "Si un achat est en vue, la valeur de rachat d’une police et l’avoir d’une fondation bancaire ne se lisent pas de la même façon. Le cadre du [versement anticipé et du nantissement du pilier 3a](/3eme-pilier-logement/) est l’OPP 3, art. 3 et 4. La valeur de rachat peut compter dans les fonds propres au sens de la directive ASB, ch. 2.1, au plus à hauteur de cette valeur.",
      },
      {
        type: "p",
        text: "Le cadre est le [3e pilier Suisse](/3eme-pilier-suisse/). Avant de choisir un produit : [comment choisir son 3e pilier](/choisir-son-3eme-pilier/) et une [analyse de prévoyance](/analyse-de-prevoyance/). Une police qui mélange épargne et décès se lit sur le [pilier mixte](/3eme-pilier-mixte/) et sur l’[assurance-vie en Suisse](/assurance-vie-en-suisse/). Ce n’est pas une recommandation automatique de l’assurance.",
      },
      { type: "h2", text: "Exemple chiffré, hypothèses nommées" },
      {
        type: "p",
        text: `Tout ce qui suit est hypothétique. Hypothèse 1 : la personne est affiliée à une institution du 2e pilier. Hypothèse 2 : elle verse le plafond 2026, ${chf(FIGURES.pillar3aWithLpp)}, pendant trois années de suite. Hypothèse 3 : aucun rendement, aucun frais chiffré, aucune performance. Total des versements hypothétiques : ${chf(FIGURES.pillar3aWithLpp * 3)}. En banque, ce total est la somme versée, pas un capital à l’échéance. En assurance, la valeur de rachat de la troisième année n’est pas ce total : elle se lit sur la [table du contrat](/valeur-de-rachat-3a/). Si les primes cessent : [arrêter de payer](/arret-primes-assurance-3a/). Aucun des deux supports n’est déclaré gagnant.`,
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
    updated: "2026-10-03",
    intro:
      "On appelle souvent « mixte » une assurance-vie qui verse un capital si vous êtes en vie au terme, et un capital si vous décédez avant. Les deux montants ne sont pas toujours les mêmes. Ce n’est pas un produit obligatoire du 3a, et ce n’est pas non plus un capital dont le montant serait connu d’avance sur cette page. On paie l’épargne et le risque dans la même prime.",
    brief: [
      "Un seul contrat pour épargner et couvrir un décès. Les frais des deux sont mélangés.",
      "Si le besoin de décès est élevé et l’épargne faible, séparer un risque pur et un 3a bancaire est souvent plus lisible.",
      "Le mixte peut coller à un horizon long et à une discipline de primes. Ce n’est pas un choix automatique.",
      "Sans capital à l’échéance, capital décès, table de rachat et frais, ce n’est pas un comparatif.",
      NOTE_2027,
    ],
    related: ["assurance-vie-en-suisse", "risque-pur-deces", "3eme-pilier-banque-assurance", "3eme-pilier-suisse"],
    faqs: [
      {
        question: "Le 3e pilier mixte est-il obligatoire ?",
        answer:
          "Non. Le 3a peut être une fondation bancaire, sans capital décès intégré. Le mixte est une forme d’assurance, pas la forme du 3e pilier.",
      },
      {
        question: "Le capital du mixte est-il garanti ?",
        answer:
          "Pas sur cette page. Certains contrats annoncent un capital, d’autres le lient à des fonds. Le chiffre se lit sur l’offre, avec la table de valeurs de rachat. Nous n’en publions aucun.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "L’intérêt : un seul contrat pour épargner et protéger. La limite : vous payez le risque et l’épargne dans la même prime, avec une transparence des frais parfois médiocre. Si le besoin décès est élevé et l’épargne faible, un risque pur (temporaire décès) plus un 3a bancaire est souvent plus lisible. Si l’horizon est long et que vous voulez une discipline de primes, le mixte peut coller. L’assurance n’est pas recommandée par défaut.",
      },
      { type: "h2", text: "Quand séparer les deux contrats" },
      {
        type: "p",
        text: "Un [risque pur décès](/risque-pur-deces/) paie un capital si le décès survient pendant la durée. Il ne constitue pas d’épargne. Un 3a en [banque](/3eme-pilier-banque-assurance/) laisse voir l’avoir. Les additionner se lit mieux qu’une prime unique quand vous voulez savoir ce que coûte la protection. Le [3e pilier Suisse](/3eme-pilier-suisse/) rappelle que la déduction 3a ne dépend pas de ce choix.",
      },
      { type: "h2", text: "Ce qu’il faut avoir sous les yeux" },
      {
        type: "ul",
        items: [
          "Capital si vous êtes en vie au terme, et capital en cas de décès.",
          "Valeur de rachat année par année, surtout les premières années.",
          "Frais d’acquisition et participation aux excédents, si le contrat en prévoit.",
          "Ce qui se passe si vous arrêtez les primes.",
        ],
      },
      {
        type: "callout",
        title: "À comparer noir sur blanc",
        text: "Capital à l’échéance, capital décès, valeur de rachat année par année, frais. Sans ces lignes, ce n’est pas un comparatif. Aucun rendement n’est annoncé ici.",
      },
      {
        type: "p",
        text: "L’[assurance-vie en Suisse](/assurance-vie-en-suisse/) range le mixte à côté du risque pur, du 3a et du 3b. Pour savoir si le décès est le vrai besoin, partez d’une [analyse de prévoyance](/analyse-de-prevoyance/), pas du nom du contrat.",
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
    updated: "2026-10-03",
    intro:
      "Choisir un 3e pilier, ce n’est pas le meilleur taux du moment. C’est aligner le plafond fiscal de 2026, un horizon, un besoin de protection et un support — compte, titres ou police — que vous tiendrez vraiment. Le 3a et le 3b ne se remplacent pas. La banque et l’assurance non plus. Cette page pose les questions avant le formulaire, pas un palmarès.",
    brief: [
      "D’abord le trou de rente, le plafond tenable et le besoin de décès. Le produit vient après.",
      `Plafond 3a 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans.`,
      "Aucun rendement, aucun capital type et aucun classement d’établissements ne sont publiés ici.",
      "Le comparatif est sans honoraires. Vous n’êtes pas obligé de souscrire.",
      NOTE_2027,
    ],
    related: ["analyse-de-prevoyance", "3eme-pilier-a-ou-b", "3eme-pilier-banque-assurance", "3eme-pilier-suisse", "formulaire-3eme-pilier"],
    faqs: [
      {
        question: "Faut-il atteindre le plafond 3a ?",
        answer: `Non. ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} est un maximum déductible en 2026, pas un objectif. Le versement tenable est celui qui laisse une réserve.`,
      },
      {
        question: "Le site désigne-t-il le meilleur contrat ?",
        answer:
          "Non. Il n’y a pas de palmarès. Le formulaire décrit la situation. Un conseiller du service rappelle sur les solutions accessibles, pas sur l’ensemble du marché. Aucun diplôme ni registre n’est affiché : ils ne sont pas établis ici.",
      },
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
          "Canton et statut (salarié, indépendant, frontalier, taxation ordinaire ultérieure) : la fiscalité n’est pas la même.",
        ],
      },
      { type: "h2", text: "Où lire la suite, dans l’ordre" },
      {
        type: "p",
        text: "Le cadre est le [3e pilier Suisse](/3eme-pilier-suisse/). [3a ou 3b](/3eme-pilier-a-ou-b/) départage le lié et le libre. [Banque ou assurance](/3eme-pilier-banque-assurance/) départage le support. Les montants sont sur les [déductions fiscales](/deductions-fiscales-3eme-pilier/). L’[analyse de prévoyance](/analyse-de-prevoyance/) vient avant le formulaire, pas après la signature.",
      },
      { type: "h2", text: "Ce que le comparatif fait, et ce qu’il ne fait pas" },
      {
        type: "p",
        text: "Le formulaire décrit la situation. Un conseiller du service rappelle. Vous n’êtes pas obligé de souscrire. Le site ne publie pas de diplôme, de registre, de liste d’établissements ni de rendement : ces éléments ne sont pas établis ici. L’entretien sert à lire frais, souplesse et garanties.",
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
      `Plafonds 3a 2026 (OFAS), rachat dès 2026, 3b Genève et Fribourg, imposition au retrait. ${NOTE_2027}.`,
    published: "2021-11-12",
    updated: "2026-10-03",
    intro: `Quel est le plafond 3a déductible en 2026 ? ${chf(FIGURES.pillar3aWithLpp)} si vous êtes affilié au 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} (20 % du revenu d’activité, max.) sinon. Source : tableau OFAS du 1er janvier 2026. ${NOTE_2027}. Le 3b ne double pas cette déduction.`,
    brief: [
      `Avec 2e pilier : ${chf(FIGURES.pillar3aWithLpp)}. Sans 2e pilier : 20 % du revenu d’activité, au maximum ${chf(FIGURES.pillar3aWithoutLpp)}.`,
      "Le crédit doit arriver au 31 décembre. La date de l’ordre ne suffit pas.",
      "Deux salariés affiliés ont chacun leur plafond, sur deux relations distinctes.",
      "Genève et Fribourg peuvent viser des primes d’assurance-vie. Vaud n’ajoute pas de plafond 3a.",
      NOTE_2027,
    ],
    related: [
      "ouvrir-un-3eme-pilier",
      "3eme-pilier-logement",
      "quel-montant-deductible-3eme-pilier-2022",
      "plafonds-3a-2026-2027",
      "3eme-pilier-a-impot-retrait",
      "3a-impot-cantonal-geneve-2026",
    ],
    faqs: [
      {
        question: "Faut-il verser avant le 31 décembre ?",
        answer:
          "Oui : c’est la date de valeur au crédit du compte ou de la police 3a qui compte, pas la date d’ordre. Un virement trop tardif bascule sur l’année suivante. Source : OFAS, « Votre cotisation au 3e pilier ».",
      },
      {
        question: `Les plafonds 3a 2027 sont-ils déjà connus ?`,
        answer: `Oui. ${NOTE_2027}. Les plafonds 2026 de cette page restent ceux du tableau OFAS au 1er janvier 2026.`,
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
        text: `Les lacunes depuis 2025 peuvent être rachetées à partir de 2026, dans la limite de la petite cotisation (${chf(FIGURES.buybackMax)}), en plus du versement ordinaire de l’année, si vous aviez un revenu AVS l’année de la lacune et l’année du rachat, et que le maximum ordinaire de l’année en cours est déjà versé. Source OFAS. ${NOTE_2027} pour le plafond de l’année suivante.`,
      },
      {
        type: "h2",
        text: "3b et impôt fédéral",
      },
      {
        type: "p",
        text: `L’enveloppe LIFD des primes d’assurances et intérêts d’épargne (${chf(FIGURES.lifdSingle)} personne seule / ${chf(FIGURES.lifdMarried)} couple, majorée en l’absence de 2e pilier / 3a) n’est pas un « plafond 3b ». Elle est souvent déjà utilisée par la LAMal. Les déductions cantonales se lisent pour [Genève](/3eme-pilier-geneve/) et, à l’inverse, pour le [canton de Vaud](/3eme-pilier-canton-vaud/), qui n’écrit pas un second barème 3a. Le cadre national est le [3e pilier Suisse](/3eme-pilier-suisse/) et la page [3a ou 3b](/3eme-pilier-a-ou-b/).`,
      },
      {
        type: "h2",
        text: "Couple",
      },
      {
        type: "p",
        text: `Chaque conjoint actif avec LPP a son propre plafond 3a. Deux salariés affiliés : jusqu’à ${chf(FIGURES.pillar3aWithLpp * 2)} au total, sur deux relations de prévoyance distinctes. Plusieurs relations d’une même personne ne multiplient pas son plafond. Les clôturer à des dates différentes se lit sur le [retrait échelonné](/retrait-echelonne-3a/).`,
      },
      {
        type: "p",
        text: "Pour appliquer la formule 2026 à un revenu : [calculateur du plafond 3a](/calculateur-plafond-3a/). Deux cas seulement, information générale.",
      },
      {
        type: "p",
        text: "La déduction annuelle n’est pas l’impôt dû quand une somme du 3a est versée pour un logement. Cette sortie est imposée à part (LIFD, art. 38), en plus de l’impôt cantonal. Le gage, tant que rien n’est versé, ne déclenche pas cet impôt. Détail, sans montant inventé : [utiliser le 3a pour acquérir un logement](/3eme-pilier-logement/).",
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
    updated: "2026-10-03",
    intro:
      "Un frontalier peut-il ouvrir un 3a ? Oui, si le revenu d’activité en Suisse est soumis à l’AVS. Ce n’est pas le permis G qui ouvre le droit : c’est l’assujettissement AVS (OFAS, circulaire AFC n° 18). L’intérêt fiscal dépend ensuite de la source, d’une éventuelle taxation ordinaire ultérieure, et du droit de l’État de résidence. Le plafond reste le plafond fédéral, pas un barème de frontalier.",
    brief: [
      "Accès au 3a : revenu d’activité en Suisse soumis à l’AVS. Le permis ne suffit pas.",
      `Plafond 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans.`,
      "La déduction devient concrète surtout si une taxation ordinaire ultérieure s’applique.",
      "Un achat hors de Suisse n’est pas un motif de retrait « logement en propre usage » suisse.",
      NOTE_2027,
    ],
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
        text: `Beaucoup de frontaliers sont imposés à la source. Une taxation ordinaire ultérieure peut s’appliquer selon le canton, le revenu et le patrimoine suisse. C’est souvent là que la déduction 3a devient concrète — d’où l’intérêt de verser avant la fin de l’année civile et de conserver les attestations. Le plafond 2026 reste ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}, comme pour un résident. Détail : [taxation ordinaire ultérieure](/taxation-ordinaire-ulterieure/) et [plafonds 3a](/plafonds-3a-2026-2027/). ${NOTE_2027}.`,
      },
      { type: "h2", text: "Banque, assurance, logement" },
      {
        type: "p",
        text: "Les motifs de retrait 3a (logement pour propre usage en Suisse, départ, indépendance) s’appliquent aussi aux frontaliers. Un achat en France n’est pas un « propre usage » suisse. Faites qualifier le projet avant d’ouvrir une police longue. Le cadre est le [3e pilier Suisse](/3eme-pilier-suisse/). Le cas sans caisse LPP rejoint l’[indépendant](/3eme-pilier-independant/). Selon le canton d’imposition : [Genève](/3eme-pilier-geneve/) ou [Vaud](/3eme-pilier-canton-vaud/).",
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
    updated: "2026-10-03",
    intro: `Le plafond 3a à Genève est-il plus élevé qu’ailleurs ? Non. En ${YEAR_SPAN_WORDS} c’est le maximum fédéral OFAS / OPP 3 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} sans. L’ICC change l’économie d’impôt, pas le droit de verser. La LIPP vise des primes d’assurance-vie, pas un « bonus 3b ».`,
    brief: [
      `Plafond 3a 2026 à Genève : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ${chf(FIGURES.pillar3aWithoutLpp)} au maximum sans. Identique au reste de la Suisse.`,
      "L’ICC change l’économie d’un versement. Elle ne crée pas un plafond cantonal.",
      "La LIPP vise des primes d’assurance-vie et des intérêts d’épargne, pas le mot « 3b ».",
      "Un frontalier ouvre un 3a si le revenu suisse est soumis à l’AVS.",
      NOTE_2027,
    ],
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
        text: "Accès 3a si AVS suisse. L’effet fiscal passe souvent par l’impôt à la source et, le cas échéant, la taxation ordinaire ultérieure. Voir le [guide frontalier](/frontalier-suisse/). Le [canton de Vaud](/3eme-pilier-canton-vaud/) applique le même plafond 3a, sans l’enveloppe genevoise des primes-vie. Le cadre national est le [3e pilier Suisse](/3eme-pilier-suisse/).",
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
    updated: "2026-10-03",
    intro:
      "En Suisse, « assurance-vie » recouvre des polices différentes : risque pur, mixte, 3a lié, 3b libre. Elles ne déduisent pas la même chose et ne paient pas le même capital. Une temporaire décès ne constitue pas d’épargne. Une police 3a déduit dans la limite du plafond 2026, puis bloque la sortie. Comparer le mot « assurance-vie » sans ce tri n’a pas de sens.",
    brief: [
      "Risque pur : un capital si le décès survient pendant la durée. Pas d’épargne.",
      "Mixte : épargne et décès dans la même prime. Pas un choix automatique.",
      `3a en assurance : même plafond 2026 qu’en banque (${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)}).`,
      "3b : bénéficiaires plus libres. Déduction cantonale seulement, surtout des primes-vie.",
      NOTE_2027,
    ],
    related: [
      "3eme-pilier-mixte",
      "3eme-pilier-a-ou-b",
      "risque-pur-deces",
      "assurance-deces",
      "3eme-pilier-banque-assurance",
      "3eme-pilier-suisse",
    ],
    faqs: [
      {
        question: "Toute assurance-vie est-elle un 3e pilier déductible ?",
        answer:
          "Non. Seule une forme reconnue de prévoyance liée (3a) entre dans le plafond OFAS. Une temporaire décès ou un 3b suit d’autres règles. Le 3b n’a pas de plafond OFAS.",
      },
      {
        question: "Le capital est-il garanti ?",
        answer:
          "Cela dépend du contrat. Certains annoncent un capital, d’autres le lient à des fonds. Cette page ne publie aucun montant, aucun rendement et aucun nom d’assureur.",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Une police liée 3a offre la déduction OPP 3 mais verrouille les sorties. Une police 3b offre la liberté de bénéficiaires et de durée, avec une fiscalité à juger canton par canton. Une temporaire décès ne constitue pas d’épargne : elle paie un capital si le risque se réalise pendant la durée. Aucune de ces formes n’est recommandée d’office.",
      },
      { type: "h2", text: "Quatre lectures, pas un produit" },
      {
        type: "ul",
        items: [
          "Risque pur : la prime paie le décès pendant une durée. Voir [risque pur décès](/risque-pur-deces/).",
          "Mixte : capital au terme et capital décès, dans la même prime. Voir [3e pilier mixte](/3eme-pilier-mixte/).",
          `3a : déduction 2026 de ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou 20 % du revenu jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans. Même plafond qu’en banque.`,
          "3b : pas de plafond OFAS. Utile pour un bénéficiaire hors ordre du 3a, pas comme second plafond.",
        ],
      },
      { type: "h2", text: "Ce que l’on demande dans une offre" },
      {
        type: "ul",
        items: [
          "Le capital annoncé est-il fixé au contrat, ou lié à des fonds ?",
          "Table de valeurs de rachat, surtout si l’on s’arrête tôt.",
          "Coût du risque : décès, invalidité, libération des primes.",
          "Frais d’acquisition et de gestion.",
          "Clause bénéficiaire, et si le rachat est possible.",
        ],
      },
      {
        type: "p",
        text: "Le cadre du 3e pilier, avant la police, est le [3e pilier Suisse](/3eme-pilier-suisse/). Banque et assurance se départagent sur [banque ou assurance](/3eme-pilier-banque-assurance/). 3a et 3b se départagent sur [3a ou 3b](/3eme-pilier-a-ou-b/).",
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
    updated: "2026-10-03",
    parents: [{ name: "3e pilier", href: "/3eme-pilier-suisse/" }],
    intro:
      "Sans analyse, un comparatif 3e pilier compare des emballages. L’analyse aligne la rente AVS, l’avoir LPP, les dettes, la famille et ce que le budget peut verser. Le produit — banque ou assurance, 3a ou 3b — vient après ce trou, pas avant. Aucun rendement n’est calculé ici.",
    brief: [
      `Rente AVS complète 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} par mois. Couple : ${chf(FIGURES.avsCoupleMaxMonthly)}.`,
      `Seuil d’entrée LPP 2026 : ${chf(FIGURES.lppEntry)}. Être affilié change le plafond 3a.`,
      `Plafond 3a 2026 : ${chf(FIGURES.pillar3aWithLpp)} avec 2e pilier, ou 20 % jusqu’à ${chf(FIGURES.pillar3aWithoutLpp)} sans.`,
      "Le besoin de décès se mesure net des rentes de survivants déjà acquises.",
      NOTE_2027,
    ],
    related: ["1er-pilier-avs-ai-apg", "2eme-pilier-lpp", "choisir-son-3eme-pilier", "3eme-pilier-suisse", "libre-passage-lpp"],
    faqs: [
      {
        question: "L’analyse remplace-t-elle le comparatif ?",
        answer:
          "Non. Elle dit quel trou combler. Le comparatif dit ensuite quels frais, quelle souplesse et quelles garanties correspondent à ce trou. L’un sans l’autre compare des emballages.",
      },
      {
        question: "Faut-il un chiffre de rente 2027 pour commencer ?",
        answer: `Non, pour commencer l’analyse. Cette page garde les rentes du tableau OFAS au 1er janvier 2026 et ne recopie pas d’autres montants 2027. ${NOTE_2027}.`,
      },
    ],
    blocks: [
      { type: "h2", text: "Cinq lectures, dans l’ordre" },
      {
        type: "ol",
        items: [
          `Estimer la rente AVS. Tableau OFAS 2026 : ${chf(FIGURES.avsMinMonthly)} à ${chf(FIGURES.avsMaxMonthly)} par mois pour une rente complète. Couple marié : ${chf(FIGURES.avsCoupleMaxMonthly)}. 13e rente de vieillesse dès décembre 2026.`,
          `Lire le certificat LPP : salaire assuré, avoir, projection, rentes d’invalidité et de survivants. Seuil d’entrée 2026 : ${chf(FIGURES.lppEntry)}.`,
          `Lister les 3a déjà ouverts. Plusieurs relations sont possibles. Le plafond ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} est global.`,
          "Chiffrer le besoin décès ou invalidité, net des prestations sociales déjà acquises.",
          "Ensuite seulement : banque ou assurance, 3a ou 3b, et un montant tenable.",
        ],
      },
      {
        type: "p",
        text: `${NOTE_2027}. L’analyse se fait avec les rentes du tableau OFAS au 1er janvier 2026.`,
      },
      { type: "h2", text: "Où continuer" },
      {
        type: "p",
        text: "Les montants du [1er pilier](/1er-pilier-avs-ai-apg/) et du [2e pilier](/2eme-pilier-lpp/) se lisent avant le 3e. Le cadre individuel est le [3e pilier Suisse](/3eme-pilier-suisse/). La grille de questions est sur [comment choisir](/choisir-son-3eme-pilier/). Un avoir de caisse en attente n’est pas un 3a : c’est le [libre passage](/libre-passage-lpp/).",
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
      "AVS 2026 : rentes min./max. (tableau OFAS 1.1.2026). Cette page ne recopie pas d’autres montants 2027. 13e rente dès décembre 2026, âge de référence 65 ans.",
    published: "2021-11-12",
    updated: UPDATED,
    intro: `Quelle est la rente AVS en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, une rente de vieillesse complète se situe entre ${chf(FIGURES.avsMinMonthly)} et ${chf(FIGURES.avsMaxMonthly)} par mois. La somme des deux rentes d’un couple marié est plafonnée à ${chf(FIGURES.avsCoupleMaxMonthly)}. Cette page cite ce tableau du 1er janvier 2026 et ne recopie pas d’autres montants 2027.`,
    related: ["2eme-pilier-lpp", "tableau-ofas-montants-avs-lpp-3a", "analyse-de-prevoyance"],
    faqs: [
      {
        question: "La 13e rente AVS relève-t-elle le plafond 3a ?",
        answer: `Non. La 13e rente (premier versement décembre 2026) est une prestation AVS. Elle ne fixe pas le plafond 3a. ${NOTE_2027}.`,
      },
      {
        question: "Les rentes AVS 2027 sont-elles déjà publiées ?",
        answer:
          "Cette page cite le tableau OFAS au 1er janvier 2026. Elle ne recopie pas d’autres montants 2027. Les plafonds 3a au 1er janvier 2027 sont ceux du communiqué du Conseil fédéral du 2 octobre 2026 : 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans. https://www.admin.ch/fr/newnsb/BqB41FVYi5FB",
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
      "LPP 2026 (tableau OFAS 1.1.2026) : seuil d’entrée, déduction de coordination, salaire coordonné. Cette page ne recopie pas de seuils 2027. Le plafond 3a 2027 est celui du communiqué du Conseil fédéral.",
    published: "2021-11-12",
    updated: "2026-10-03",
    intro: `Quel est le seuil LPP en ${YEAR_SPAN_WORDS} ? Selon le tableau OFAS au 1er janvier 2026, l’affiliation obligatoire commence à ${chf(FIGURES.lppEntry)} de salaire annuel, la déduction de coordination est ${chf(FIGURES.lppCoordination)}, la limite supérieure ${chf(FIGURES.lppSalaryCap)}. Cette page cite ce tableau du 1er janvier 2026 et ne recopie pas de seuils 2027.`,
    related: [
      "3eme-pilier-logement",
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
          "Cette page cite le tableau OFAS au 1er janvier 2026. Elle ne recopie pas de seuils LPP 2027. Les plafonds 3a 2027 sont 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB",
      },
    ],
    blocks: [
      {
        type: "p",
        text: `Être affilié à une institution de prévoyance du 2e pilier fait basculer votre 3a sur la petite cotisation (${chf(FIGURES.pillar3aWithLpp)}). Un indépendant qui s’affilie volontairement à une LPP perd donc la grande cotisation ${chf(FIGURES.pillar3aWithoutLpp)}. C’est un arbitrage, pas un automatisme « plus c’est mieux ».`,
      },
      {
        type: "table",
        headers: ["Paramètre LPP (tableau OFAS au 1er janvier 2026)", "Montant"],
        rows: [
          ["Salaire minimal annuel (seuil)", chf(FIGURES.lppEntry)],
          ["Déduction de coordination", chf(FIGURES.lppCoordination)],
          ["Salaire coordonné minimal", chf(FIGURES.lppCoordinatedMin)],
          ["Salaire coordonné maximal", chf(FIGURES.lppCoordinatedMax)],
          ["Limite supérieure du salaire annuel", chf(FIGURES.lppSalaryCap)],
        ],
      },
      {
        type: "p",
        text: "Le versement anticipé du 2e pilier pour un logement suit la LPP, art. 30c et 30d, et l’OEPL, art. 5 : minimum de 20’000 francs, cadence de cinq ans à l’art. 5 al. 3, plafond après 50 ans, remboursement à la vente. Ces règles ne s’appliquent pas au 3a. [Ce qui distingue le 3a du versement anticipé LPP](/3eme-pilier-logement/).",
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
    updated: "2026-10-03",
    intro:
      "Un changement d’employeur, une pause ou un passage à l’indépendance sort l’avoir LPP de la caisse. Il doit rejoindre la nouvelle institution, ou un compte ou une police de libre passage. Ce n’est pas un 3e pilier : autre enveloppe, autres règles de sortie. Le laisser sans instruction finit à l’institution supplétive.",
    brief: [
      "L’avoir suit le nouvel employeur, ou attend sur un compte ou une police de libre passage.",
      "Ce n’est pas un 3a. Le plafond 3a ne s’applique pas à cette enveloppe.",
      "Sans instruction, la caisse verse à l’institution supplétive après le délai légal. Le délai exact se lit auprès de la caisse, il n’est pas recopié ici.",
      "Logement et départ de Suisse sont des motifs de versement, avec des règles propres au 2e pilier.",
      "Retrouver un avoir oublié passe par la centrale du 2e pilier, pas par un nouveau 3a.",
    ],
    related: ["compte-de-libre-passage-lpp", "2eme-pilier-lpp", "analyse-de-prevoyance", "3eme-pilier-suisse"],
    faqs: [
      {
        question: "Le libre passage est-il un 3e pilier ?",
        answer:
          "Non. C’est de l’avoir de prévoyance professionnelle en attente. Le verser sur un 3a n’est pas le geste par défaut. Les deux enveloppes ne se mélangent pas.",
      },
      {
        question: "Faut-il une police plutôt qu’un compte ?",
        answer:
          "Pas automatiquement. Le compte et la police de libre passage n’ont pas les mêmes frais ni la même sortie. On compare la tenue, les titres et ce qui reste si l’on arrête. Aucun rendement n’est annoncé ici.",
      },
    ],
    blocks: [
      { type: "h2", text: "Où va l’avoir" },
      {
        type: "p",
        text: "Trois issues : la caisse du nouvel employeur, un compte de libre passage, ou une police de libre passage. Ne laissez pas l’avoir sans instruction : la caisse le verse à l’institution supplétive après le délai qu’elle applique. Ce délai n’est pas chiffré ici, il se confirme auprès de la caisse. Le détail du compte est sur [compte de libre passage](/compte-de-libre-passage-lpp/).",
      },
      { type: "h2", text: "Ce que ce n’est pas" },
      {
        type: "p",
        text: `Le libre passage n’est pas un 3a. Le plafond ${chf(FIGURES.pillar3aWithLpp)} ou ${chf(FIGURES.pillar3aWithoutLpp)} ne s’y applique pas. Les motifs de versement (logement, départ de Suisse) ont leurs propres règles. ${NOTE_2027} ne concerne que le 3a, pas cet avoir.`,
      },
      {
        type: "p",
        text: "Pour situer cet avoir dans l’ensemble : le [2e pilier LPP](/2eme-pilier-lpp/), une [analyse de prévoyance](/analyse-de-prevoyance/), puis le [3e pilier Suisse](/3eme-pilier-suisse/) si un versement individuel est encore la question. On ne recommande pas une police parce que l’avoir a quitté la caisse.",
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
    metaTitle: `Comparatif 3e pilier ${YEAR_SPAN} : 5 champs, sans Typeform`,
    description:
      `Demandez un comparatif 3a/3b en HTML. Sans honoraires, plafonds OFAS ${YEAR_SPAN} (7’258 / 36’288), rappel sous deux jours ouvrés. Pas de Typeform.`,
    published: "2021-11-02",
    updated: UPDATED,
    intro:
      "Un seul formulaire. Pas de Typeform. Un conseiller du service rappelle sous deux jours ouvrés, sans honoraires et sans engagement. Aucun diplôme ni registre n’est affiché : ces éléments ne sont pas établis ici. Pas de confirmation automatique dans votre boîte.",
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
      "Quatre champs et votre demande. Prochaine étape : un rappel sous deux jours ouvrés si le CRM a le dossier. Pas de confirmation dans votre boîte.",
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
    description: "Votre demande est enregistrée. Un conseiller rappelle sous deux jours ouvrés si le dossier a été transmis.",
    published: "2023-05-05",
    updated: UPDATED,
    intro:
      "Merci. Le texte ci-dessous dit seulement ce qui s’est vraiment passé (transmission ou journal local). En attendant : plafonds 2026–2027 ou la différence 3a / 3b.",
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
    metaTitle: "Actualités 3e pilier 2026–2027 — 3 articles par semaine, semaines 1–5",
    description:
      "Série éditoriale : trois articles par semaine (plafonds OFAS, cantons, frontaliers, 3a/3b, versement, retraite). Semaines 1 à 5 publiées. Archives WordPress, mêmes slugs.",
    published: "2023-11-05",
    updated: UPDATED,
    intro:
      "Cadence confirmée : trois textes par semaine, pas un article par jour. Semaines 1 à 5 livrées (OFAS, cantons, frontaliers, supports, versement et retraite). Les guides historiques restent à leurs URL d’origine.",
    related: [
      "plafonds-3a-2026-2027",
      "3a-impot-cantonal-geneve-2026",
      "frontalier-avs-3a-conditions",
      "methode-sources-ofas-afc",
    ],
    blocks: [],
  },
  {
    kind: "page",
    slug: "mentions-legales",
    title: "Mentions légales",
    metaTitle: `Mentions légales ${YEAR_SPAN} — Comparateur 3ème pilier`,
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
        text: "Mise en relation et comparatif d’offres de prévoyance individuelle, sans honoraires et sans engagement. Information générale, pas un conseil en placement personnalisé au sens d’un mandat LSFin signé sur ce site. Un conseiller du service peut rappeler après le formulaire. Aucun diplôme ni registre n’est affiché : ces éléments ne sont pas établis ici.",
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
    metaTitle: `À propos ${YEAR_SPAN} — méthode OFAS / AFC, pas un palmarès`,
    description:
      `Qui édite le comparateur, méthode éditoriale OFAS/AFC, dates de revue ${YEAR_SPAN}, limites du service. Page E-E-A-T créée en 2026.`,
    published: UPDATED,
    updated: UPDATED,
    intro:
      "Qui écrit les plafonds de ce site ? La rédaction du Comparateur 3ème pilier, à partir des textes OFAS et AFC — pas d’un palmarès. Le site informe et génère des demandes de comparatif pour la Suisse romande. Il n’est pas un agrégateur de tarifs en temps réel.",
    related: ["methode-sources-ofas-afc", "analyse-de-prevoyance", "mentions-legales", "actualite-3eme-pilier"],
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
        text: "Dernière revue des plafonds 3a : 6 octobre 2026, sur le communiqué du Conseil fédéral du 2 octobre 2026. Les rentes et seuils cités ici restent ceux du tableau OFAS au 1er janvier 2026.",
      },
    ],
  },
];

const socleSlugs = new Set([...SOCLE_PAGES, ...SUITE_PAGES].map((page) => page.slug));

export const PAGES: EditorialDoc[] = [
  ...BASE_PAGES.filter((page) => !socleSlugs.has(page.slug)),
  ...SOCLE_PAGES,
  ...SUITE_PAGES,
];
