import type { Redirect } from "next/dist/lib/load-custom-routes";

/** 301 métier : Wayback 200 / chaînes JPEG-404 corrigées. */
export const PATH_REDIRECTS: Redirect[] = [
  {
    source: "/3eme-pilier-prevoyance-libre",
    destination: "/3eme-pilier-b-prevoyance-libre/",
    permanent: true,
  },
  {
    source: "/page-de-confidentialite",
    destination: "/page-de-confidentialitee/",
    permanent: true,
  },
  {
    source: "/politique-de-confidentialite",
    destination: "/page-de-confidentialitee/",
    permanent: true,
  },
  {
    source: "/3eme-pilier-b-geneve",
    destination: "/3eme-pilier-geneve/",
    permanent: true,
  },
  {
    source: "/frontaliers-suisse",
    destination: "/frontalier-suisse/",
    permanent: true,
  },
  {
    source: "/impot-source-3eme-pilier",
    destination: "/frontalier-suisse/",
    permanent: true,
  },
  {
    source: "/banque-ou-assurance",
    destination: "/3eme-pilier-banque-assurance/",
    permanent: true,
  },
  {
    source: "/le-choix-3a-3b",
    destination: "/3eme-pilier-a-ou-b/",
    permanent: true,
  },
  {
    source: "/infomations-3eme-pilier-a",
    destination: "/3eme-pilier-a-ou-b/",
    permanent: true,
  },
  {
    source: "/depart-de-suisse",
    destination: "/frontalier-suisse/",
    permanent: true,
  },
  {
    source: "/changement-employeur-libre-passage-lpp",
    destination: "/libre-passage-lpp/",
    permanent: true,
  },
  {
    source: "/comparatif-2023",
    destination: "/",
    permanent: true,
  },
  {
    source: "/last-minute-2022",
    destination: "/",
    permanent: true,
  },
  {
    source: "/geneve",
    destination: "/3eme-pilier-geneve/",
    permanent: true,
  },
  {
    source: "/canton-vaud",
    destination: "/",
    permanent: true,
  },
  {
    source: "/category/impots",
    destination: "/deductions-fiscales-3eme-pilier/",
    permanent: true,
  },
  {
    source: "/23-2",
    destination: "/",
    permanent: true,
  },
  {
    source: "/blog",
    destination: "/actualite-3eme-pilier/",
    permanent: true,
  },
  {
    source: "/author/:slug",
    destination: "/",
    permanent: true,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
    destination: "/:slug/",
    permanent: true,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})",
    destination: "/actualite-3eme-pilier/",
    permanent: true,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})",
    destination: "/actualite-3eme-pilier/",
    permanent: true,
  },
];
