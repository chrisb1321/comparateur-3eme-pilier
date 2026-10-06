# Mise en œuvre SEO — socle P0

Phase limitée au socle : audit, deux URL restaurées, sept guides réécrits, plafonds 2026 centralisés, FAQ d’accueil, redirection épargne enfant, contrôle qui casse le build. Pas de nouveaux articles, pas de pages villes, pas de calculateur dédié.

Audit de départ : `internal/seo-audit-baseline.md` (commit avant toute modification de route).

## Fichiers modifiés

- `src/lib/figures.ts` — seule source des plafonds 2026. 2027 n’a plus de montant.
- `src/lib/editorial.ts` — responsable et champs légaux, avec TODO explicites.
- `src/lib/schema.ts` — fil d’Ariane aligné sur les rubriques, auteur Person, graphe sans `@context` répété.
- `src/lib/redirects.ts`, `src/lib/wp-ids.ts`, `src/content/index.ts` — 301 et retrait du sitemap.
- `scripts/preserved-production-urls.txt` — les 44 URL du sitemap public du 3 octobre 2026. Le build échoue si l’une d’elles n’est ni une 200, ni une seule 301 vers une 200.
- `src/content/socle-pages.ts` — pages restaurées et guides réécrits.
- `src/content/pages.ts`, `src/content/posts.ts`, `src/content/faqs.ts`, articles MDX concernés.
- `src/components/editorial-view.tsx`, `blocks.tsx`, `ceilings-block.tsx`, `ceiling-simulator.tsx`, `sources-list.tsx`.
- `src/app/page.tsx`, `src/app/robots.ts`, `src/components/site-header.tsx`, `src/components/site-footer.tsx`.
- `public/llms.txt`, `scripts/qa-seo.mjs`, `package.json`.
- `internal/qa-seo-report.md` — dernier passage du script, sans erreur.

## URLs modifiées

Restaurées en HTTP 200, slug inchangé :

- `/ouvrir-un-3eme-pilier/` — H1 : « Ouvrir un 3e pilier en Suisse : conditions et démarches ».
- `/3eme-pilier-logement/` — H1 : « Utiliser son 3e pilier pour acheter un logement en Suisse ».
- `/3eme-pilier-suisse/` — hub prévoyance individuelle, pas une copie de l’accueil. Title : « 3e pilier Suisse : 3a, 3b, banque ou assurance ». H1 : « 3e pilier Suisse : prévoyance individuelle ». Canonical auto-référent. Chiffres 2026 centralisés. 2027 : « Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB ». Liens vers les clusters déjà en ligne (3a/3b, 3b, banque ou assurance, déductions, plafonds, ouvrir, logement, 1er et 2e piliers, frontalier, indépendant, épargne enfant, exemple).
- `/exemple-de-comparatif/` — title et H1 : « Exemple de comparatif ». Exemple pédagogique fictif et anonymisé, repris de la page live. Aucun établissement, aucun frais réel, aucun rendement, aucun partenaire.

Réécrites sur le même gabarit (fil d’Ariane, réponse directe, En bref, sources, auteur) :

- `/1er-pilier-avs-ai-apg/`
- `/2eme-pilier-lpp/`
- `/epargne-enfant/`
- `/3eme-pilier-b-prevoyance-libre/`
- `/assurance-deces/` (hub)
- `/risque-pur-deces/` (page enfant, non fusionnée)
- `/liberation-du-paiement-des-primes/`

Mises au même régime de chiffres et de canonical, sans nouvelle URL : accueil, déductions, 3a/3b, banque ou assurance, articles de la série qui citaient un plafond 2027, à propos, mentions légales.

Accueil : title `Comparateur 3e pilier Suisse 2026 | 3a, 3b, banque ou assurance`. H1 demandé. Bloc En bref. Lien « Voir notre méthodologie » vers `/methode-sources-ofas-afc/` (la page `/methodologie-comparatif/` n’est pas créée dans cette phase).

## Redirections ajoutées

- `301 /constituer-une-epargne-enfant/` → `/epargne-enfant/`
- `301 /montant-maximum-3e-pilier-2026-2027/` → `/plafonds-3a-2026-2027/`
- L’ancien `?p=2738` pointe directement vers `/epargne-enfant/` (une seule redirection).
- Les 301 déjà présentes sont conservées, dont `/rachat-lpp-vers-3a-2026/` → `/rachat-2e-pilier-avec-3a/`. Ce slug n’est plus dans le sitemap.

Le fond utile de l’ancienne page épargne enfant est repris dans `/epargne-enfant/` : pas de 3a sans revenu AVS, compte au nom de l’enfant, épargne du parent, police sur la tête du parent, livret plus souple pour un horizon d’études, mixte longue peu justifiée si le seul but est un livret. L’assurance n’est plus présentée comme un choix automatique, ni le capital comme garanti hors clause.

`/montant-maximum-3e-pilier-2026-2027/` et `/plafonds-3a-2026-2027/` traitent le même sujet. La page plafonds est la plus complète : les deux plafonds 2026, la règle des 20 %, l’historique, le 31 décembre, le couple. La page live « montant maximum » ne donnait que la petite cotisation 2026 et constatait, au 28 septembre 2026, que le plafond 2027 n’était pas publié, sans date confirmée. Ce constat est repris sur la page plafonds, sans montant 2027 et sans fenêtre de publication inventée. L’ancienne URL répond par une seule 301. Elle ne passe pas en 404.

## Chiffres

2026, vérifiés le 19 septembre 2026 (date du dépôt, pas la date du build) :

- avec 2e pilier : 7'258 CHF
- sans 2e pilier : 20 % du revenu d’activité, maximum 36'288 CHF

Les montants 6'883 / 34'416 (jusqu’en 2022) et 7'056 / 35'280 (2023–2024) restent dans les tableaux historiques. Les plafonds 3a 2027, vérifiés le 6 octobre 2026, sont en fin de document.

## Bugs corrigés

- Les deux URL ci-dessus répondaient 404 dans ce dépôt alors qu’elles sont en 200 sur le site public.
- Le build ne voyait pas un lien interne cassé. `npm run build` lance désormais `scripts/qa-seo.mjs` avant Next.
- L’accueil public contient « sans gratuit », « immédiatemen t » et « un de nos conseiller ». Le dépôt sert : « gratuits et sans engagement », « immédiatement », « l’un de nos conseillers ».
- Les plafonds 2027 n’affichent plus 7'258 et 36'288.
- Canonical d’accueil sans suffixe de marque en double. `OAI-SearchBot` est autorisé. Le sitemap ne liste pas la 301 épargne enfant.

## Données structurées

Graphe par page éditoriale : Organization, BreadcrumbList, WebPage ou Article, FAQPage si les questions sont visibles. L’auteur visible et le JSON-LD sont Christophe Bouin, responsable du contenu et du comparatif, URL `/a-propos/`. Pas d’AggregateRating. Pas de portrait dans le schéma.

## Pages non créées

État de la phase précédente. La section « Suite du 3 octobre 2026 » dit ce qui a été ajouté ensuite.

- `/christophe-bouin/`
- `/methodologie-comparatif/`
- `/calculateur-plafond-3a/`
- Sujets nouveaux (transfert, plusieurs 3a, retrait échelonné, etc.) : seulement évoqués dans les guides existants quand le sujet y était déjà.
- Pages villes.

Les trois URL du sitemap public qui manquaient au dépôt sont maintenant couvertes : hub et exemple en 200, montant maximum en 301 vers plafonds. `scripts/preserved-production-urls.txt` fige les 44 chemins du sitemap du 3 octobre 2026.

## Guides déjà en ligne, alignés le 3 octobre 2026

Aucune URL nouvelle. Les treize guides ci-dessous passent par le même gabarit que le socle (fil d’Ariane, signature, sources, CTA). Ils n’avaient pas l’encart En bref, ni un lien de corps vers `/3eme-pilier-suisse/`. C’est ce qui a été ajouté. Le corps déjà juste n’a pas été réécrit.

Complétés sans changer le fond (En bref, lien vers le hub, liens de corps) :

- `/3eme-pilier-a-ou-b/`
- `/3eme-pilier-banque-assurance/` — l’intro précise que ni la banque ni l’assurance n’est le bon support pour tout le monde.
- `/deductions-fiscales-3eme-pilier/`
- `/plafonds-3a-2026-2027/` — canonical du 301 « montant maximum ». Le H1 garde « 2026 et 2027 » parce que la page dit que 2027 n’est pas chiffré. Le title meta reste sur 2026.
- `/3eme-pilier-independant/`
- `/frontalier-suisse/`
- `/3eme-pilier-geneve/`
- `/3eme-pilier-canton-vaud/` — le title meta ne dit plus « 2026–2027 ». Le H1 reste « 3e pilier dans le canton de Vaud ».

Réécrits parce que le corps était trop court, ou promettait un diplôme non établi :

- `/choisir-son-3eme-pilier/` — la mention « diplôme AFA » est retirée. Le site ne l’établit pas. Pas de palmarès, pas de rendement.
- `/assurance-vie-en-suisse/` — quatre lectures (risque pur, mixte, 3a, 3b). Aucun capital garanti annoncé.
- `/3eme-pilier-mixte/` — l’assurance n’est pas recommandée par défaut. Aucun rendement.
- `/libre-passage-lpp/` — ce n’est pas un 3a. Le délai avant l’institution supplétive n’est pas chiffré.
- `/analyse-de-prevoyance/` — ordre AVS, LPP, 3a déjà ouverts, besoin de décès, puis seulement le support.

Chaque page touchée a au moins trois liens entrants dans le corps d’autres pages. Les chiffres 2026 passent par `src/lib/figures.ts`. 2027 reste « Au 1er janvier 2027, le Conseil fédéral fixe 7 373 CHF avec un 2e pilier et 36 864 CHF au maximum sans 2e pilier. Le taux de 20 % n’est pas modifié. Communiqué du 2 octobre 2026 : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB ». `scripts/preserved-production-urls.txt` passe toujours (44 URL, 43 en 200, une 301).

`npm run build` réussi à nouveau (Next.js 16.3.5, 64 pages, QA sans erreur). Aucune URL ajoutée au sitemap.

## Mention « diplômé AFA » retirée

La page choix et `src/lib/editorial.ts` disaient déjà qu’aucun diplôme ni registre n’est établi. L’accueil, le footer, le bandeau de confiance, le formulaire, l’encart FAQ, l’intro du formulaire, les mentions dans `pages.ts` et la FAQ de `methode-sources-ofas-afc.mdx` affirmaient encore un conseiller ou un partenaire « diplômé AFA ».

Cette mention venait du site historique. Elle n’est pas une preuve. Elle n’est plus affichée. La formule publique est : un conseiller du service rappelle, sans diplôme ni registre affiché, parce que ces éléments ne sont pas établis ici. Le comparatif reste sans honoraires et sans engagement.

`AUTHOR_GAPS` dans `src/lib/editorial.ts` porte le TODO : « Diplôme AFA annoncé sur le site historique — non vérifié. Ne plus l’afficher tant qu’une preuve n’est pas au dossier. » Aucun numéro de diplôme, aucun nom d’école. Plafonds, URL et maillage inchangés.

## TODO — validation humaine

- `LEGAL_ENTITY_NAME`, `LEGAL_ADDRESS`, `LEGAL_UID` : non établis. Aucun UID inventé.
- `LEGAL_INTERMEDIARY_STATUS`, `LEGAL_REGISTER_URL` : aucune inscription FINMA affirmée.
- `LEGAL_COMPENSATION_DISCLOSURE` : le comparatif est gratuit et sans engagement ; la rémunération éventuelle des partenaires n’est pas documentée.
- Portrait, qualifications et années d’expérience de Christophe Bouin : absents du dépôt.
- Diplôme AFA annoncé sur le site historique — non vérifié. Ne plus l’afficher tant qu’une preuve n’est pas au dossier.
- Page auteur et méthodologie : publiées dans la suite du 3 octobre 2026, avec les manques encore marqués TODO. Portrait, bio, qualifications, rémunération des partenaires et diplôme AFA restent non établis.
- Les trois URL publiques citées plus haut sont couvertes (200 ou une 301). Le TODO qui restait sur ce point est clos.

## Validation

```bash
npm run qa:seo
npm run build
npm start
```

Build de production : réussi (Next.js 16.3.5, 64 pages statiques). QA : 0 erreur (`internal/qa-seo-report.md`). 44 URL historiques engagées : 43 en 200, une seule 301 vers une 200.

Crawl local `http://127.0.0.1:43127` le 3 octobre 2026, après ce correctif :

- sitemap : 59 URL, toutes en 200. Les deux nouvelles pages y figurent. La 301 « montant maximum » n’y figure pas.
- `/3eme-pilier-suisse/` : 200. Title « 3e pilier Suisse : 3a, 3b, banque ou assurance ». H1 « 3e pilier Suisse : prévoyance individuelle ». Canonical `https://comparateur-3eme-pilier.ch/3eme-pilier-suisse/`.
- `/exemple-de-comparatif/` : 200. Title et H1 « Exemple de comparatif ». Canonical auto-référent. Exemple fictif, sans établissement ni offre.
- `/montant-maximum-3e-pilier-2026-2027/` : 301 vers `/plafonds-3a-2026-2027/` (200). Pas de montant 2027 sur la page cible.
- `/ouvrir-un-3eme-pilier/` et `/3eme-pilier-logement/` : 200, canonical auto-référent apex
- `/constituer-une-epargne-enfant/` : 301 vers `/epargne-enfant/`
- liens internes du hub et de l’exemple : aucun 404
- `/robots.txt` : 200, `OAI-SearchBot` autorisé, sitemap déclaré
- accueil : H1 demandé, les trois fautes absentes

Lighthouse et les Core Web Vitals n’ont pas été mesurés : l’outil n’est pas disponible dans cet environnement. Le formulaire comparatif est toujours rendu côté serveur (labels, champs, consentement, lien confidentialité). Le contenu des guides ne dépend pas de ce formulaire.

## Suite du 3 octobre 2026

Cette section ne reprend que cette phase. Le socle, les trois URL du sitemap public, l’alignement des treize guides et le retrait de la mention « diplômé AFA » ne sont pas refaits. Aucun chiffre fiscal, aucune performance, aucun partenaire, aucun UID, aucune inscription FINMA et aucun diplôme ne sont inventés. `scripts/preserved-production-urls.txt` n’est pas allongé : 44 URL, 43 en 200, une seule 301.

### Auteur

`/christophe-bouin/` répond en 200, canonical `https://comparateur-3eme-pilier.ch/christophe-bouin/`. Le visible se limite au nom, à la fonction et au contact déjà dans `src/lib/editorial.ts`, plus le lien vers `/a-propos/`. Portrait, bio, années d’expérience, qualifications et inscriptions sont des TODO affichés comme non établis. Le diplôme AFA n’est pas réaffiché comme un titre : la constante dit qu’il n’est pas vérifié.

`<AuthorBox />` signe les guides. Le JSON-LD Person de cette page reprend le nom, la fonction, l’URL et l’e-mail. Pas d’image, pas de diplôme. « Rédigé ou vérifié par Christophe Bouin » pointe vers `/christophe-bouin/`. `/author/christophe-bouin/` fait une seule 301 vers cette page. `/author/quelque-chose/` continue vers l’accueil.

### Méthodologie

`/methodologie-comparatif/` répond en 200. `/methode-sources-ofas-afc/` reste en 200. Chacune lie l’autre, sans recopier les paragraphes OFAS. La nouvelle page dit ce qui est lu (frais, souplesse, valeur de rachat, garanties, horizon, exclusions) et que le marché entier n’est pas couvert. La rémunération des partenaires reste le TODO déjà écrit. L’accueil et le footer « Voir notre méthodologie » pointent vers cette page. Le lien « Méthode OFAS / AFC » reste.

### Calculateur

`/calculateur-plafond-3a/` : institution du 2e pilier oui ou non, revenu annuel soumis à l’AVS. Les montants passent par `pillar3aCeiling2026` dans `src/lib/figures.ts` (2026 : 7 258 CHF avec LPP ; sans LPP, 20 % du revenu, au plus 36 288 CHF). La page affiche le plafond, la formule, l’année, la source OFAS et l’avertissement « Information générale ». La division annuelle / mensuelle est nommée hypothétique (affichage au franc). Pas de capital projeté, pas de gagnant banque ou assurance.

### Sujets

Nouvelles URL, dans le sitemap généré (66 URL, toutes celles testées en 200, canonical auto-référent), pas dans la liste figée du 3 octobre :

- `/transfert-3a/`
- `/retrait-echelonne-3a/` — aucun taux cantonal
- `/valeur-de-rachat-3a/` — aucun pourcentage
- `/arret-primes-assurance-3a/`

Enrichis sans seconde page : plusieurs comptes sur `/ouvrir-un-3eme-pilier/` ; nantissement ou retrait sur `/3eme-pilier-logement/` ; frais d’assurance sur `frais-3a-banque-assurance.mdx` ; rachat rétroactif sur `rachat-lacunes-3a-2026.mdx` (règles OFAS déjà dans le dépôt, plafond suivant non chiffré) ; bénéficiaires sur `/choisir-les-beneficiaires/`. Le communiqué OFAS du 12 juin 2026 est cité pour l’élargissement annoncé au 1er juin 2027, avec son URL. L’ordre antérieur n’est pas remplacé par une ordonnance réécrite ici. Banque ou assurance : exemple de trois plafonds 2026, chaque hypothèse nommée hypothétique, sans rendement.

Pas de pages villes. Chaque texte touché a une réponse directe, un encart En bref, les sources du gabarit, un lien vers `/3eme-pilier-suisse/`, et une FAQ seulement si les questions sont visibles.

### Navigation

Le header a six liens : Comparer, 3e pilier, Fiscalité, Banque ou assurance, Profils (ancre du hub), Guides. Contact et le bouton Comparer restent à côté.

### Validation de cette phase

`npm run build` réussi (Next.js 16.3.5, 71 pages statiques, QA sans erreur). Crawl local `http://127.0.0.1:43127` : les sept URL nouvelles en 200 avec canonical auto-référent ; les deux pages de méthode en 200 et liées entre elles ; le calculateur affiche le plafond 2026 avec LPP, la source OFAS et la mention « Information générale ». Lighthouse n’était pas lancé sur cette phase. Les scores mesurés ensuite sont dans la section suivante. Aucun score n’a été inventé ici.

## Performance et version anglaise

Le socle français n’est pas réécrit. Le diplôme AFA n’est pas réaffiché. `scripts/preserved-production-urls.txt` ne change pas.

### Mesures Lighthouse

Outil : Lighthouse 12.8.2, lancé avec `npx` (pas ajouté aux dépendances), mobile, throttling simulé, Chrome headless, sur `http://127.0.0.1:43127`. L’audit `interaction-to-next-paint` est absent d’un passage en navigation. Aucun INP n’est donc écrit. Les proxys de laboratoire sont le TBT et le max-potential-fid.

Avant les correctifs de cette phase :

| Page | Score | FCP | LCP simulé | TBT | CLS | max-potential-fid | LCP observé |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 94 | 1,0 s (965 ms) | 2,2 s (2 213 ms) | 250 ms (246 ms) | 0 | 220 ms (217 ms) | 167 ms |
| `/3eme-pilier-suisse/` | 98 | 0,9 s (914 ms) | 2,4 s (2 414 ms) | 20 ms (23 ms) | 0 | 100 ms (96 ms) | 98 ms |

L’élément LCP de l’accueil est le H1. Celui du guide est le paragraphe de réponse directe. Pas de script marketing. Les images passent par `next/image` avec largeur et hauteur.

Après les correctifs (même outil, même profil) :

| Page | Score | FCP | LCP simulé | TBT | CLS | max-potential-fid | LCP observé |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 96 | 0,9 s | 2,8 s (2 816 ms) | 20 ms (23 ms) | 0 | 100 ms (95 ms) | 151 ms |
| `/3eme-pilier-suisse/` | 98 | 0,9 s | 2,4 s (2 412 ms) | 20 ms (23 ms) | 0 | 100 ms (96 ms) | 135 ms |

Le guide reste sous 2,5 s de LCP simulé, avec un CLS à 0. L’accueil passe de 250 ms à 20 ms de TBT, le CLS reste à 0, et le LCP observé dans la trace est à 151 ms. Le LCP simulé de l’accueil reste à 2,8 s : le modèle attribue environ 2,3 s de délai de rendu, alors que la trace non throttlée mesure environ 75 ms entre le TTFB et l’affichage du H1. Retirer l’import différé du simulateur, ou revenir au formulaire sans hauteurs minimales, n’a pas fait descendre ce 2,8 s. Le correctif qui enveloppe toute la page dans un composant client a été retiré : il dégradait aussi le guide.

Correctifs gardés dans le code :

- `images.formats` : AVIF et WebP.
- Les images sous la ligne de flottaison restent en lazy-load (`next/image`). L’élément LCP est un texte, pas une image : il n’y a pas de lazy-load à retirer sur une image LCP.
- Instrument Sans : graisses 400, 500 et 600, plus l’italique. `preload` des fichiers réellement émis (deux woff2). Les `strong` utilisent la graisse 600, pour ne pas demander une 700 absente.
- Le formulaire garde ses libellés français. Le paragraphe d’aide et le message d’état ont une hauteur minimale, pour éviter un saut quand l’erreur ou l’attente apparaît.
- Le contenu éditorial reste rendu côté serveur.
- `browserslist` vise Chrome, Edge et Firefox 111+, Safari 16.4+. Lighthouse signale encore environ 13 Kio de JavaScript ancien : ce réglage ne les retire pas.

### Redirections d’hôte

`src/middleware.ts` redirige déjà, en une seule 301, `www.comparateur-3eme-pilier.ch` vers `https://comparateur-3eme-pilier.ch`, chemin compris. Il n’y a pas de `vercel.json`, de `netlify.toml` ni de `headers()` qui forceraient https pour l’apex. Aucune redirection http → https de l’apex n’est ajoutée : rien dans ce dépôt ne l’applique, et un middleware plus large viserait aussi `127.0.0.1`.

### Anglais

Toutes les pages publiques indexables ont une version sous `/en/`. Aucune URL française ne change, n’est traduite, ni ne redirige vers l’anglais. Chaque page anglaise a un canonical absolu auto-référent `https://comparateur-3eme-pilier.ch/en/...`. Le hreflang est `fr-CH` vers le français, `en` vers l’anglais, `x-default` vers le français.

À la date de cette section, les chiffres 2026 étaient 7 258 CHF, 20 % et 36 288 CHF, et le site n’affichait pas encore de montant 2027. Les TODO (raison sociale, UID, statut, rémunération, portrait, qualifications, diplôme AFA) restent des TODO en anglais. Pas de pages villes, pas de nouveau sujet. La mise à jour du 6 octobre 2026 est en fin de document.

Le formulaire et le CRM restent en français. `/en/formulaire-3eme-pilier/`, `/en/nous-contacter/` et l’accueil anglais expliquent cela et lient le formulaire français. L’envoi français n’est pas modifié. Le header affiche « English » ou « Français ».

Le sitemap généré compte 132 URL, dont les 66 anglaises ci-dessous, toutes en 200 au crawl local, canonical égal à l’URL du sitemap. La liste figée du 3 octobre reste à 44 URL.

- `/en/`
- `/en/category/prevoyance/`
- `/en/1er-pilier-avs-ai-apg/`
- `/en/2eme-pilier-lpp/`
- `/en/3a-impot-cantonal-geneve-2026/`
- `/en/3b-deduction-fribourg/`
- `/en/3eme-pilier-a-impot-retrait/`
- `/en/3eme-pilier-a-ou-b/`
- `/en/3eme-pilier-b-prevoyance-libre/`
- `/en/3eme-pilier-banque-assurance/`
- `/en/3eme-pilier-canton-vaud/`
- `/en/3eme-pilier-geneve/`
- `/en/3eme-pilier-independant/`
- `/en/3eme-pilier-logement/`
- `/en/3eme-pilier-mixte/`
- `/en/3eme-pilier-suisse/`
- `/en/a-propos/`
- `/en/a-quoi-sert-le-deuxieme-pilier/`
- `/en/actualite-3eme-pilier/`
- `/en/analyse-de-prevoyance/`
- `/en/arret-primes-assurance-3a/`
- `/en/assurance-deces/`
- `/en/assurance-vie-en-suisse/`
- `/en/calculateur-plafond-3a/`
- `/en/choisir-entre-3eme-pilier-bancaire-ou-en-assurance/`
- `/en/choisir-les-beneficiaires/`
- `/en/choisir-son-3eme-pilier/`
- `/en/choisir-support-3a-2026/`
- `/en/christophe-bouin/`
- `/en/combiner-3a-et-3b-2026/`
- `/en/compte-de-libre-passage-lpp/`
- `/en/declaration-impot-gratuite/`
- `/en/deductions-fiscales-3eme-pilier/`
- `/en/depart-suisse-retrait-3a/`
- `/en/epargne-enfant/`
- `/en/exemple-de-comparatif/`
- `/en/formulaire-3eme-pilier/`
- `/en/frais-3a-banque-assurance/`
- `/en/frontalier-avs-3a-conditions/`
- `/en/frontalier-suisse/`
- `/en/liberation-du-paiement-des-primes/`
- `/en/libre-passage-lpp/`
- `/en/mentions-legales/`
- `/en/methode-sources-ofas-afc/`
- `/en/methodologie-comparatif/`
- `/en/nous-contacter/`
- `/en/ouvrir-un-3eme-pilier/`
- `/en/ouvrir-un-3eme-pilier-pour-un-frontalier/`
- `/en/page-de-confidentialitee/`
- `/en/page-remerciement/`
- `/en/plafonds-3a-2026-2027/`
- `/en/pourquoi-souscrire-au-3eme-pilier/`
- `/en/quand-commencer-le-3eme-pilier/`
- `/en/quel-montant-deductible-3eme-pilier-2022/`
- `/en/rachat-2e-pilier-avec-3a/`
- `/en/rachat-lacunes-3a-2026/`
- `/en/retrait-3a-vs-3b-2026/`
- `/en/retrait-echelonne-3a/`
- `/en/retraite-avs-21-femmes-3a/`
- `/en/risque-pur-deces/`
- `/en/tableau-ofas-montants-avs-lpp-3a/`
- `/en/taxation-ordinaire-ulterieure/`
- `/en/tou-impot-source-3a/`
- `/en/transfert-3a/`
- `/en/valeur-de-rachat-3a/`
- `/en/versement-3a-avant-31-decembre-2026/`

`npm run build` de cette phase : QA sans erreur (64 pages françaises, 44 URL historiques dont 43 en 200 et une 301), Next.js 16.3.5, 137 pages générées.

## Plafonds 3a 2027, vérifiés le 6 octobre 2026

Le Conseil fédéral, le 2 octobre 2026, a publié les plafonds 3a au 1er janvier 2027. Source : https://www.admin.ch/fr/newnsb/BqB41FVYi5FB.

- avec un 2e pilier : 7 373 CHF
- sans 2e pilier : 36 864 CHF au maximum
- le taux de 20 % n’est pas modifié

Les plafonds 2026 restent 7 258 CHF et 36 288 CHF. Le calculateur continue de calculer 2026. Les rentes AVS, les seuils LPP et les impôts cantonaux cités sur le site restent ceux déjà publiés pour 2026 : ce communiqué n’est pas recopié au-delà des deux plafonds 3a. La date de vérification éditoriale est le 6 octobre 2026, pas la date du build.
