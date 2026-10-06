# Audit SEO de référence — avant modification des routes

Date de l’audit : 3 octobre 2026.  
Périmètre : dépôt Git `comparateur-3eme-pilier` (commit `89c3cef` sur `main`) et contrôle HTTP du site public `https://comparateur-3eme-pilier.ch/`.  
Aucune route ni aucun contenu n’a été modifié avant ce document.

## 1. Framework et architecture

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, MDX (`next-mdx-remote`).
- Rendu des pages éditoriales en statique (`generateStaticParams` dans `src/app/[slug]/page.tsx`).
- `trailingSlash: true`. Canonique prévu : `https://comparateur-3eme-pilier.ch` (`src/lib/site.ts`).
- Contenu : `src/content/pages.ts` (pages), `src/content/posts.ts` (archives), `content/articles/*.mdx` (série).
- Chiffres : `src/lib/figures.ts` (module central, mais recopié aussi en dur dans plusieurs MDX).
- Redirections de chemin : `src/lib/redirects.ts` + `next.config.ts`. Anciens `?p=` / `?page_id=` : `src/middleware.ts` + `src/lib/wp-ids.ts`.
- `www` → apex en 301 dans le middleware. Pas de redirection `http` → `https` dans le code (attendue au niveau de l’hébergeur).
- En-tête et pied de page uniques (`SiteHeader`, `SiteFooter`) via `src/app/layout.tsx`. Pas de second template header/footer dans le dépôt.
- Formulaires : server actions (`src/app/actions/leads.ts`), pas un outil tiers. Ne pas les casser.
- Le README indique que WordPress n’est pas la cible de coupure. Le HTML public observé le 3 octobre 2026 est pourtant du Next.js (`/_next/static`), **en avance** sur ce commit Git.

## 2. Routes du dépôt (HTTP attendu si ce commit est servi)

Toutes les pages de contenu répondent en 200 sur `/{slug}/`, canonical auto-référent absolu via `docMetadata`. La homepage est `src/app/page.tsx`. Autres routes applicatives :

| Route | Rôle |
| --- | --- |
| `/` | Accueil |
| `/category/prevoyance/` | Catégorie |
| `/sitemap.xml` | Sitemap généré |
| `/robots.txt` | Robots généré |
| `/llms.txt` | Fichier statique, pas un levier SEO |
| `/{slug}/` | Page ou article connu |
| toute autre URL | `not-found.tsx` (404) |

### Pages (`src/content/pages.ts`)

`3eme-pilier-a-ou-b`, `3eme-pilier-b-prevoyance-libre`, `3eme-pilier-banque-assurance`, `3eme-pilier-mixte`, `choisir-son-3eme-pilier`, `deductions-fiscales-3eme-pilier`, `frontalier-suisse`, `3eme-pilier-geneve`, `assurance-vie-en-suisse`, `assurance-deces`, `risque-pur-deces`, `epargne-enfant`, `analyse-de-prevoyance`, `liberation-du-paiement-des-primes`, `1er-pilier-avs-ai-apg`, `2eme-pilier-lpp`, `libre-passage-lpp`, `compte-de-libre-passage-lpp`, `formulaire-3eme-pilier`, `nous-contacter`, `page-de-confidentialitee`, `page-remerciement`, `declaration-impot-gratuite`, `actualite-3eme-pilier`, `mentions-legales`, `a-propos`.

### Articles (`posts.ts` + MDX publiés)

Archives : `choisir-entre-3eme-pilier-bancaire-ou-en-assurance`, `taxation-ordinaire-ulterieure`, `3eme-pilier-a-impot-retrait`, `quel-montant-deductible-3eme-pilier-2022`, `a-quoi-sert-le-deuxieme-pilier`, `ouvrir-un-3eme-pilier-pour-un-frontalier`, `quand-commencer-le-3eme-pilier`, `pourquoi-souscrire-au-3eme-pilier`, `constituer-une-epargne-enfant`, `choisir-les-beneficiaires`.

Série MDX : `3a-impot-cantonal-geneve-2026`, `depart-suisse-retrait-3a`, `frais-3a-banque-assurance`, `3b-deduction-fribourg`, `tableau-ofas-montants-avs-lpp-3a`, `3eme-pilier-independant`, `retrait-3a-vs-3b-2026`, `choisir-support-3a-2026`, `rachat-2e-pilier-avec-3a`, `methode-sources-ofas-afc`, `plafonds-3a-2026-2027`, `retraite-avs-21-femmes-3a`, `rachat-lacunes-3a-2026`, `combiner-3a-et-3b-2026`, `frontalier-avs-3a-conditions`, `versement-3a-avant-31-decembre-2026`, `tou-impot-source-3a`, `3eme-pilier-canton-vaud`.

`content/articles/rachat-lpp-vers-3a-2026.mdx` existe mais une 301 l’envoie vers `/rachat-2e-pilier-avec-3a/`. S’il reste publiable, le sitemap et la page statique peuvent coexister avec la redirection (la redirection gagne à l’exécution). À traiter pour éviter une URL sitemap qui ne renvoie pas 200.

Brouillon exclu : `content/articles/_template.mdx`.

## 3. Statut HTTP du site public (3 octobre 2026)

Contrôle par `curl -I`, sans charge anormale. Le site public n’est **pas** le rendu de ce commit.

| URL | Public | Dépôt `89c3cef` |
| --- | --- | --- |
| `/` | 200 | 200, mais H1 et FAQ différents |
| `/ouvrir-un-3eme-pilier/` | 200 | **absent → 404** |
| `/3eme-pilier-logement/` | 200 | **absent → 404** |
| `/3eme-pilier-suisse/` | 200 | **absent** |
| `/montant-maximum-3e-pilier-2026-2027/` | 200 | **absent** (intention proche de `/plafonds-3a-2026-2027/`) |
| `/exemple-de-comparatif/` | dans le sitemap public | **absent** |
| `/epargne-enfant/` | 200 | 200, contenu court |
| `/constituer-une-epargne-enfant/` | 200, canonical déjà vers `/epargne-enfant/` | 200 article distinct, **pas de 301** |
| `/1er-pilier-avs-ai-apg/` `/2eme-pilier-lpp/` `/3eme-pilier-b-prevoyance-libre/` `/assurance-deces/` `/risque-pur-deces/` `/liberation-du-paiement-des-primes/` | 200 | 200, même gabarit Next, textes courts |
| `/christophe-bouin/` `/methodologie-comparatif/` `/calculateur-plafond-3a/` | 404 | absents (hors phase : pas de création) |
| `/robots.txt` `/sitemap.xml` `/llms.txt` `/a-propos/` `/mentions-legales/` | 200 | présents |

Sitemap public : 44 URL. Cinq URL du sitemap public ne sont pas dans le dépôt : `/ouvrir-un-3eme-pilier/`, `/3eme-pilier-logement/`, `/3eme-pilier-suisse/`, `/montant-maximum-3e-pilier-2026-2027/`, `/exemple-de-comparatif/`.

Les deux premières sont des restaurations de cette phase. Les trois autres ne sont pas créées ici (pas de nouvelle URL). Les déployer depuis ce dépôt sans 301 les ferait passer en 404 : risque noté, pas traité dans cette phase.

## 4. Titles, meta, canonicals, H1, données structurées

### Dépôt

- Title de page : `metaTitle`, avec gabarit layout `%s | Comparateur 3ème pilier` (risque de suffixe en double si le title contient déjà la marque).
- Title d’accueil actuel : `Comparateur 3ème pilier 2026–2027 : comparez et déduisez`.
- H1 d’accueil actuel : « Un comparatif 3e pilier, sans honoraires ».
- Canonical : absolu, auto-référent, apex, slash final. Un seul `alternates.canonical` par page.
- JSON-LD : Organization + WebSite globaux ; par page BreadcrumbList + Article ou WebPage + FAQPage si FAQ. Auteur schéma = organisation « Rédaction », pas une personne. Pas d’AggregateRating.
- Fil d’Ariane visible : absent. Le JSON-LD met tout le monde sous « Guides » ou « Actualités », y compris des pages qui ne sont pas des filles de `/deductions-fiscales-3eme-pilier/`.
- `robots.txt` du dépôt : `*` et plusieurs crawlers IA en Allow, sitemap déclaré. **OAI-SearchBot n’est pas nommé** (le `*` l’autorise quand même).
- Sitemap : pages et articles non brouillon. `lastmod` = champ `updated`, pas la date de build. La 301 `/rachat-lpp-vers-3a-2026/` peut encore être listée si le MDX est chargé.

### Site public (extrait)

- H1 d’accueil : « Quel 3e pilier choisir ? Comparez vos options avant de vous engager. » Canonical accueil correct.
- Trois fautes visibles dans la FAQ d’accueil, **absentes du dépôt** : « sans gratuit », « immédiatemen t », « un de nos conseiller ».
- `/ouvrir-un-3eme-pilier/` H1 public : « Ouvrir un 3e pilier en 2026 » (la restauration visera le H1 demandé).
- `/3eme-pilier-logement/` H1 public : « 3e pilier et logement : retrait ou nantissement ».
- `/constituer-une-epargne-enfant/` : canonical public déjà `https://comparateur-3eme-pilier.ch/epargne-enfant/`.
- `/a-propos/` et `/mentions-legales/` publics nomment Christophe Bouin comme responsable du contenu et du comparatif. Le dépôt ne le nomme pas. Aucune adresse, UID, ni inscription FINMA n’est publiée : ne pas les inventer.

## 5. Liens internes cassés (dépôt)

Les liens de navigation du dépôt pointent vers des slugs qui existent. Il n’y a pas, dans ce commit, de lien vers `/ouvrir-un-3eme-pilier/` ni `/3eme-pilier-logement/` : ces URL sont orphelines côté Git parce qu’elles n’existent pas.

Liens internes vers une page qui doit cesser d’être une URL indexable :

- `epargne-enfant` → `constituer-une-epargne-enfant` (`pages.ts`)
- `constituer-une-epargne-enfant` → `epargne-enfant` (`posts.ts`)
- `wp-ids` `2738` → `/constituer-une-epargne-enfant/` (chaîne si l’on ajoute ensuite une 301)

Pas de crawler de build aujourd’hui : un lien 404 ne casse pas `next build`.

## 6. Orphelines, doublons, contenus anciens

- `/epargne-enfant/` et `/constituer-une-epargne-enfant/` se recoupent (pas de 3a sans revenu AVS ; compte, police 3b, épargne du parent). Doublon à trancher par 301 vers `/epargne-enfant/`.
- `/assurance-deces/` et `/risque-pur-deces/` sont courtes et distinctes. Ne pas les fusionner. La page risque pur n’est pas présentée comme enfant de l’assurance décès dans le fil d’Ariane.
- `/rachat-lpp-vers-3a-2026/` et `/rachat-2e-pilier-avec-3a/` : redirection déjà en place, contenu MDX encore présent.
- `/declaration-impot-gratuite/` : offre 2022 explicitement expirée. **Historique à conserver.**
- `/quel-montant-deductible-3eme-pilier-2022/` : slug historique, corps déjà partiellement mis à jour. **Conserver le slug.**
- `/page-de-confidentialitee/` : faute conservée, avec 301 depuis l’orthographe correcte. **Conserver.**
- Pages stratégiques trop courtes pour le niveau visé : 1er pilier, 2e pilier, épargne enfant, 3b, assurance décès, risque pur, libération des primes, et plusieurs guides (mixte, analyse, libre passage, assurance-vie).
- Pas de pages villes Lausanne / Nyon / Vevey / Montreux dans le dépôt. Ne pas en créer.
- `/canton-vaud/` redirige vers `/` alors que `/3eme-pilier-canton-vaud/` existe. Redirection historique : ne pas la supprimer dans cette phase ; ne pas l’inverser sans décision séparée.

## 7. URL historiques à ne pas supprimer sans 301

Toutes les entrées de `src/lib/redirects.ts` et de `src/lib/wp-ids.ts`, plus les slugs WordPress encore servis en 200. En particulier : `/quel-montant-deductible-3eme-pilier-2022/`, `/declaration-impot-gratuite/`, `/page-de-confidentialitee/`, `/constituer-une-epargne-enfant/` (devient une 301, pas une suppression), `/ouvrir-un-3eme-pilier-pour-un-frontalier/`, `/comparatif-2023/`, `/last-minute-2022/`.

## 8. Occurrences chiffrées demandées

Légende : **historique** = laisser tel quel, c’est daté. **à actualiser** = présenté comme un montant encore valable, ou recopié sur 2027 sans tableau OFAS.

| Occurrence | Où | Décision |
| --- | --- | --- |
| 6'883 / 6883, grande cotisation 34'416 / 34416 | `figures.ts` ligne « Jusqu’en 2022 » ; `posts.ts` article 2022 ; `plafonds-3a-2026-2027.mdx` ligne « Jusqu’en 2022 » | **Historique.** Ne pas réécrire le montant. |
| 7'056 / 7056, 35'280 / 35280 | `figures.ts` « 2023–2024 » ; `pages.ts` encart « ne s’appliquent plus » ; MDX plafonds, ligne « 2023–2024 » | **Historique** (le texte dit déjà que ce n’est plus le droit actuel). |
| 7'258 / 7258 et 36'288 / 36288 pour **2026** | module `figures.ts`, pages, MDX | **Actuel 2026**, à garder comme seule source de vérité, plus de copies contradictoires. |
| Les mêmes montants affichés **comme plafonds 2027** | `YEARS[2027]`, `PILLAR_3A_HISTORY`, `CEILING_NOTE`, `CeilingsBlock`, simulateur, FAQ, homepage, `pages.ts`, `posts.ts`, `plafonds-3a-2026-2027.mdx`, `3a-impot-cantonal-geneve-2026.mdx`, `tableau-ofas-montants-avs-lpp-3a.mdx`, `llms.txt`, README | **À actualiser.** Remplacer par « Montant 2027 à confirmer par l'OFAS ». Ne pas inventer un chiffre 2027. |
| 22'050 / 22050, 88'200 / 88200, 2'450 / 2450 | aucune occurrence dans le dépôt | Rien à modifier. Anciens seuils LPP non présents. Les seuils 2026 du module (22'680, 26'460, 90'720, rentes 1'260 / 2'520) viennent du tableau OFAS 2026 déjà cité. Les présenter comme montants **2026**, pas comme montants 2027. |
| Dates 2022, 2023, 2024 dans `published`, slugs, redirects `/comparatif-2023/`, `/last-minute-2022/`, offre déclaration 2022, réforme « jusqu’aux lacunes 2024 » | pages, posts, redirects | **Historique** quand la phrase date un fait passé. Ne pas les effacer. |
| « 64 ans pour les femmes » | rappel explicite que le slogan WordPress est périmé | **Historique** (correction). L’âge de référence cité comme actuel est 65 ans, avec transition AVS 21. |
| Bénéficiaires « dès le 1.6.2027 » | `figures.ts` source OFAS déjà liée | Mention de calendrier déjà dans le dépôt, pas un plafond. Ne pas broder le droit 2027 au-delà de cette source. |

Dernière vérification des plafonds déjà écrite dans le code : **19 septembre 2026**. Ce n’est pas la date du build. Ne pas la remplacer par la date du jour sans une nouvelle lecture OFAS.

## 9. Écarts qui dictent la phase (sans les traiter ici)

1. Restaurer `/ouvrir-un-3eme-pilier/` et `/3eme-pilier-logement/` en 200, slugs inchangés, et créer les liens internes.
2. 301 `/constituer-une-epargne-enfant/` → `/epargne-enfant/` après reprise du fond utile (pas de 3a sans AVS ; compte au nom de l’enfant ; police sur la tête du parent ; livret plus souple pour un horizon d’études ; éviter une mixte longue si le seul but est un livret).
3. Réécrire les sept guides courts listés en phase P0. Ils sont déjà sur le layout Next, mais le contenu est trop mince et parle de 2027 comme si les montants étaient connus.
4. Module 2026 seul : 7'258 CHF avec LPP ; 20 % et 36'288 CHF sans LPP.
5. Corriger la FAQ d’accueil : « gratuit et sans engagement », « immédiatement », « l'un de nos conseillers ».
6. Script de QA qui fait échouer le build sur un lien interne 404, 5xx ou une boucle de redirection.
7. Ne pas créer dans cette phase : articles en série, pages villes, calculateur dédié, `/methodologie-comparatif/`, `/christophe-bouin/`, ni les dix sujets « prioritaires » nouveaux.
