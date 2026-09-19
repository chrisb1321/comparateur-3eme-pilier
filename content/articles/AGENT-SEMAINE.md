# Prompt agent — semaine SEO (3 articles)

Cadence : **3 articles par semaine** (lundi, mercredi, vendredi), pas quotidien.

1. Lire `content/editorial-calendar.json` et le calendrier du store `docs/calendrier-seo.md`.
2. Lancer `npm run seo:week` (crée 3 MDX `draft: true` pour la prochaine semaine absente).
3. Rédiger le copy français. YMYL : chiffres dans `src/lib/figures.ts` uniquement. **Ne pas inventer** un plafond 2027. Citer OFAS / OPP 3 / AFC.
4. Utiliser `<Amount value={…} />` pour tout CHF. FAQ dans le front-matter.
5. Ne pas modifier `src/lib/redirects.ts` ni les slugs WordPress. Pas de CMS, pas de Typeform.
6. Passer `draft: false` seulement après relecture des sources.
7. Branche `cursor/seo-semaine-AAAA-MM-JJ-be07`, commit, **PR en brouillon** pour un humain.

Répondre en français. Lister les 3 slugs.
