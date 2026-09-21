# Comparateur 3ème pilier

Reconstruction Next.js (App Router, SSR/SSG) du site live [comparateur-3eme-pilier.ch](https://comparateur-3eme-pilier.ch). WordPress n’est **pas** éteint : ce dépôt est la cible de bascule, pas une coupure.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm start
```

## Stack

- Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- HTML francophone au premier octet (`trailingSlash: true`)
- Formulaires contact + comparateur en **server actions** (pas Typeform, Systeme.io, Jotform)
- Canonique apex `https://comparateur-3eme-pilier.ch` ; `www` → apex en 301

## Leads

Chemin principal : **Commission SFA**, Edge Function `public-site-lead` (`CRM_INGEST_FUNCTION`). Copier `.env.example` vers `.env.local` et coller `CRM_INGEST_TOKEN` (même valeur que `SITE_LEAD_INGEST_SECRET` sur l’Edge — **pas** la `service_role`). Sans ce jeton, l’ingest refuse ; une copie reste dans `/tmp/comparateur-3eme-pilier-leads.jsonl` (configurable via `LEAD_JOURNAL_PATH`).

La page merci n’affirme une transmission au conseiller que si l’Edge a répondu 2xx `{ ok: true }`. Retries (3 tentatives), logs sans secrets. Pas de Typeform. Pas de confirmation magique dans la boîte du visiteur.

Détail : store `docs/conversion-et-bascule.md`.

## URL livrées

Toutes les pages et articles listés dans le contexte projet, plus `/mentions-legales/`, `/a-propos/`, `/3eme-pilier-geneve/`, `/category/prevoyance/`. Le slug fautif `/page-de-confidentialitee/` est conservé.

Table 301 : voir `src/lib/redirects.ts` et `src/middleware.ts` (`?p=` / `?page_id=`).

## Contenu fiscal 2026–2027

Plafonds 3a (art. 7 OPP 3) : CHF 7’258 (avec 2e pilier) et CHF 36’288 (sans 2e pilier, 20 % du revenu).

- **2026** : tableau officiel OFAS « Montants valables au 1er janvier 2026 » (PDF, 6.11.2025).
- **2027** : au 19 septembre 2026, pas de tableau OFAS publié. Les mêmes plafonds restent ceux de l’ordonnance en vigueur (« dès 2025 »). Aucune hausse n’est inventée.

Sources citées en pied de page (OFAS, AFC, AVS/AI).

## Série SEO (3 articles / semaine)

Pas de CMS. Fichiers MDX dans `content/articles/`. Hub : `/actualite-3eme-pilier/`.

```bash
npm run seo:week
```

Crée 3 brouillons (`draft: true`) pour la prochaine semaine du calendrier `content/editorial-calendar.json`. Rédiger, relire les sources, passer `draft: false`, ouvrir une **PR brouillon**. Prompt agent : `content/articles/AGENT-SEMAINE.md`. Cadence : lundi / mercredi / vendredi, pas quotidien.

Semaines 1 à 5 (15 articles) sont publiées. AEO/GEO : FAQ HTML + `FAQPage` sur les pages d’argent, schémas Organization / WebSite / Article, `public/llms.txt`, maillage hub ↔ guides.

## Indexation

- Sitemap : `/sitemap.xml` (pages d’argent en weekly / priorité 0.9)
- Robots : `/robots.txt` (crawlers IA autorisés)
- `llms.txt` : `/llms.txt`

