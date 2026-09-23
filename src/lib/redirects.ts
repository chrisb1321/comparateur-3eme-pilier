import type { Redirect } from "next/dist/lib/load-custom-routes";

/** 301 métier : Wayback 200 / chaînes JPEG-404 corrigées. */
export const PATH_REDIRECTS: Redirect[] = [
  {
    source: "/3eme-pilier-prevoyance-libre",
    destination: "/3eme-pilier-b-prevoyance-libre/",
    statusCode: 301,
  },
  {
    source: "/page-de-confidentialite",
    destination: "/page-de-confidentialitee/",
    statusCode: 301,
  },
  {
    source: "/politique-de-confidentialite",
    destination: "/page-de-confidentialitee/",
    statusCode: 301,
  },
  {
    source: "/3eme-pilier-b-geneve",
    destination: "/3eme-pilier-geneve/",
    statusCode: 301,
  },
  {
    source: "/frontaliers-suisse",
    destination: "/frontalier-suisse/",
    statusCode: 301,
  },
  {
    source: "/impot-source-3eme-pilier",
    destination: "/frontalier-suisse/",
    statusCode: 301,
  },
  {
    source: "/banque-ou-assurance",
    destination: "/3eme-pilier-banque-assurance/",
    statusCode: 301,
  },
  {
    source: "/le-choix-3a-3b",
    destination: "/3eme-pilier-a-ou-b/",
    statusCode: 301,
  },
  {
    source: "/infomations-3eme-pilier-a",
    destination: "/3eme-pilier-a-ou-b/",
    statusCode: 301,
  },
  {
    source: "/depart-de-suisse",
    destination: "/frontalier-suisse/",
    statusCode: 301,
  },
  {
    source: "/changement-employeur-libre-passage-lpp",
    destination: "/libre-passage-lpp/",
    statusCode: 301,
  },
  {
    source: "/comparatif-2023",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/last-minute-2022",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/geneve",
    destination: "/3eme-pilier-geneve/",
    statusCode: 301,
  },
  {
    source: "/canton-vaud",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/category/impots",
    destination: "/deductions-fiscales-3eme-pilier/",
    statusCode: 301,
  },
  {
    source: "/23-2",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/rachat-lpp-vers-3a-2026",
    destination: "/rachat-2e-pilier-avec-3a/",
    statusCode: 301,
  },
  {
    source: "/blog",
    destination: "/actualite-3eme-pilier/",
    statusCode: 301,
  },
  {
    source: "/author/:slug",
    destination: "/",
    statusCode: 301,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
    destination: "/:slug/",
    statusCode: 301,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})",
    destination: "/actualite-3eme-pilier/",
    statusCode: 301,
  },
  {
    source: "/:year(\\d{4})/:month(\\d{2})",
    destination: "/actualite-3eme-pilier/",
    statusCode: 301,
  },
];
