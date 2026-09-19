#!/usr/bin/env node
/**
 * Prépare la prochaine semaine SEO (3 MDX en draft).
 * Ne publie rien : draft: true jusqu’à relecture humaine + PR brouillon.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const calendar = JSON.parse(
  fs.readFileSync(path.join(root, "content/editorial-calendar.json"), "utf8"),
);
const articlesDir = path.join(root, "content/articles");
const template = fs.readFileSync(path.join(articlesDir, "_template.mdx"), "utf8");

function existingSlugs() {
  return new Set(
    fs
      .readdirSync(articlesDir)
      .filter((name) => name.endsWith(".mdx") && !name.startsWith("_"))
      .map((name) => name.replace(/\.mdx$/, "")),
  );
}

const have = existingSlugs();
const week = calendar.weeks.find(
  (item) => item.status !== "shipped" && item.slots.some((slot) => !have.has(slot.slug)),
);

if (!week) {
  console.log("Aucune semaine à préparer : tout le calendrier a déjà un fichier MDX.");
  process.exit(0);
}

const created = [];
for (const slot of week.slots) {
  const file = path.join(articlesDir, `${slot.slug}.mdx`);
  if (fs.existsSync(file)) {
    console.log("Déjà présent :", slot.slug);
    continue;
  }
  const body = `---
slug: ${slot.slug}
title: ${JSON.stringify(slot.title)}
metaTitle: ${JSON.stringify(slot.title)}
description: ${JSON.stringify(slot.brief)}
published: "${slot.date}"
updated: "${slot.date}"
intro: ${JSON.stringify(slot.brief)}
cover: ${slot.cover}
series: true
weekId: "${week.id}"
draft: true
category: prevoyance
related:
  - deductions-fiscales-3eme-pilier
faqs:
  - question: "À rédiger"
    answer: "Reprendre src/lib/figures.ts. Ne pas inventer le plafond 2027."
---

${slot.brief}

Rédiger ici le copy français (YMYL). Chiffres : \`<Amount value={7258} />\`.

Sources obligatoires : OFAS (art. 7 OPP 3, PDF montants) et/ou AFC circulaire n° 18.

<Callout title="Brouillon">
Ce fichier a été généré par \`npm run seo:week\`. Tant que \`draft: true\`, il n’apparaît ni au hub ni au sitemap.
</Callout>
`;
  fs.writeFileSync(file, body, "utf8");
  created.push(slot.slug);
}

const branch = `cursor/seo-semaine-${week.slots[0].date}-be07`;
console.log(JSON.stringify({ week: week.id, label: week.label, created, branch, template: "content/articles/_template.mdx" }, null, 2));
console.log("\nSuite : rédiger les 3 MDX, draft: false après relecture, commit, PR brouillon.");
void template;
