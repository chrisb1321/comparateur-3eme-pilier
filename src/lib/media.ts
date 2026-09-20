export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const IMAGES = {
  hero: {
    src: "/images/hero-leman.jpg",
    alt: "Le Léman au crépuscule, quais de Genève, lumières de tungstène sur l’eau.",
    width: 1280,
    height: 720,
  },
  geneve: {
    src: "/images/geneve-jet.jpg",
    alt: "Le Jet d’eau de Genève et le pont du Mont-Blanc à l’heure bleue.",
    width: 1280,
    height: 720,
  },
  lavaux: {
    src: "/images/lavaux.jpg",
    alt: "Terrasses de Lavaux au-dessus du lac Léman, fin d’automne.",
    width: 1280,
    height: 720,
  },
  vaud: {
    src: "/images/vaud-lausanne.jpg",
    alt: "Lausanne et le lac vus d’une terrasse au crépuscule, canton de Vaud.",
    width: 1280,
    height: 720,
  },
  banque: {
    src: "/images/banque-facade.jpg",
    alt: "Façade de pierre et poignée de laiton, institution de prévoyance à Genève.",
    width: 1152,
    height: 864,
  },
  assurance: {
    src: "/images/assurance-bureau.jpg",
    alt: "Bureau d’assurance : stylo, chemise crème, lumière du nord.",
    width: 1152,
    height: 864,
  },
  pillar3a: {
    src: "/images/pilier-3a.jpg",
    alt: "Coffres de dépôt dans une lumière de bronze : l’épargne liée du 3a.",
    width: 1152,
    height: 864,
  },
  pillar3b: {
    src: "/images/pilier-3b.jpg",
    alt: "Villa au bord du Léman le soir : la prévoyance libre du 3b.",
    width: 1152,
    height: 864,
  },
  conseiller: {
    src: "/images/portrait-conseiller.jpg",
    alt: "Conseiller en prévoyance, portrait éditorial dans une cour genevoise.",
    width: 864,
    height: 1152,
  },
  cliente: {
    src: "/images/portrait-cliente.jpg",
    alt: "Portrait éditorial dans une arcade de Genève.",
    width: 864,
    height: 1152,
  },
  couple: {
    src: "/images/portrait-couple.jpg",
    alt: "Couple sur un quai de Genève, regard vers le lac.",
    width: 1152,
    height: 864,
  },
  frontalier: {
    src: "/images/frontalier.jpg",
    alt: "Quai de gare à Genève à l’aube, trajet de frontalier.",
    width: 1280,
    height: 720,
  },
  enfant: {
    src: "/images/epargne-enfant.jpg",
    alt: "Jouets en bois près d’une fenêtre, lumière du matin, épargne enfant.",
    width: 1152,
    height: 864,
  },
  merci: {
    src: "/images/remerciement-aube.jpg",
    alt: "Aube brumeuse sur le Léman, ponton de bois.",
    width: 1280,
    height: 720,
  },
  mixte: {
    src: "/images/mixte-cle.jpg",
    alt: "Clé de laiton et ruban de soie sur lin, tension entre lié et libre.",
    width: 1152,
    height: 864,
  },
  avs: {
    src: "/images/avs-colonnade.jpg",
    alt: "Colonnade de grès, architecture civile suisse, premier pilier.",
    width: 1152,
    height: 864,
  },
  lpp: {
    src: "/images/lpp-dossiers.jpg",
    alt: "Dossiers crème et lunettes sur chêne, deuxième pilier LPP.",
    width: 1152,
    height: 864,
  },
  alpes: {
    src: "/images/horizon-alpes.jpg",
    alt: "Crête alpine au dernier jour, horizon de long terme.",
    width: 1152,
    height: 864,
  },
  laiton: {
    src: "/images/detail-laiton.jpg",
    alt: "Heurtoir de laiton sur bois vert, détail d’un portail genevois.",
    width: 1152,
    height: 864,
  },
  papier: {
    src: "/images/texture-papier.jpg",
    alt: "Papier vergé crème, fibre visible.",
    width: 1280,
    height: 720,
  },
} as const satisfies Record<string, SiteImage>;

const SLUG_COVER: Record<string, keyof typeof IMAGES> = {
  "3eme-pilier-a-ou-b": "mixte",
  "3eme-pilier-b-prevoyance-libre": "pillar3b",
  "3eme-pilier-banque-assurance": "banque",
  "3eme-pilier-mixte": "mixte",
  "choisir-son-3eme-pilier": "alpes",
  "deductions-fiscales-3eme-pilier": "lpp",
  "frontalier-suisse": "frontalier",
  "3eme-pilier-geneve": "geneve",
  "assurance-vie-en-suisse": "assurance",
  "assurance-deces": "laiton",
  "risque-pur-deces": "laiton",
  "epargne-enfant": "enfant",
  "analyse-de-prevoyance": "conseiller",
  "liberation-du-paiement-des-primes": "assurance",
  "1er-pilier-avs-ai-apg": "avs",
  "2eme-pilier-lpp": "lpp",
  "libre-passage-lpp": "lpp",
  "compte-de-libre-passage-lpp": "lpp",
  "formulaire-3eme-pilier": "hero",
  "nous-contacter": "conseiller",
  "page-de-confidentialitee": "laiton",
  "page-remerciement": "merci",
  "declaration-impot-gratuite": "lpp",
  "actualite-3eme-pilier": "lavaux",
  "mentions-legales": "laiton",
  "a-propos": "conseiller",
  "choisir-entre-3eme-pilier-bancaire-ou-en-assurance": "banque",
  "taxation-ordinaire-ulterieure": "frontalier",
  "3eme-pilier-a-impot-retrait": "pillar3a",
  "quel-montant-deductible-3eme-pilier-2022": "lpp",
  "a-quoi-sert-le-deuxieme-pilier": "lpp",
  "ouvrir-un-3eme-pilier-pour-un-frontalier": "frontalier",
  "quand-commencer-le-3eme-pilier": "alpes",
  "pourquoi-souscrire-au-3eme-pilier": "couple",
  "constituer-une-epargne-enfant": "enfant",
  "plafonds-3a-2026-2027": "lpp",
  "rachat-lacunes-3a-2026": "pillar3a",
  "tableau-ofas-montants-avs-lpp-3a": "avs",
  "3a-impot-cantonal-geneve-2026": "geneve",
  "3b-deduction-fribourg": "vaud",
  "3eme-pilier-canton-vaud": "vaud",
  "frontalier-avs-3a-conditions": "frontalier",
  "tou-impot-source-3a": "frontalier",
  "depart-suisse-retrait-3a": "alpes",
  "combiner-3a-et-3b-2026": "mixte",
  "frais-3a-banque-assurance": "banque",
  "methode-sources-ofas-afc": "conseiller",
};

export function coverFor(slug: string, cover?: string): SiteImage {
  if (cover && cover in IMAGES) {
    return IMAGES[cover as keyof typeof IMAGES];
  }
  const key = SLUG_COVER[slug] ?? "hero";
  return IMAGES[key];
}
