/**
 * Contrôle statique des liens internes et des signaux SEO.
 * Échoue (code 1) si un lien public est introuvable, si une redirection boucle,
 * ou si un plafond 2027 est chiffré sans confirmation OFAS.
 * Une URL du sitemap de production (scripts/preserved-production-urls.txt)
 * doit être une page 200, ou une seule 301 vers une page 200.
 *
 * Usage : node scripts/qa-seo.mjs
 * Le rapport est écrit dans internal/qa-seo-report.md
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const notes = [];

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

const pagesSrc = read("src/content/pages.ts");
const postsSrc = read("src/content/posts.ts");
const socleSrc = read("src/content/socle-pages.ts");
const suiteSrc = read("src/content/suite-pages.ts");
const redirectsSrc = read("src/lib/redirects.ts");

function slugsFrom(source) {
  return [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

const mdxSlugs = [];
const articlesDir = path.join(root, "content/articles");
for (const name of fs.readdirSync(articlesDir)) {
  if (!name.endsWith(".mdx") || name.startsWith("_") || name.startsWith("AGENT")) continue;
  const raw = fs.readFileSync(path.join(articlesDir, name), "utf8");
  if (/^draft:\s*true/m.test(raw)) continue;
  const slug = raw.match(/^slug:\s*["']?([^"'\n]+)/m);
  if (slug) mdxSlugs.push(slug[1].trim());
}

const retired = new Set(["rachat-lpp-vers-3a-2026", "constituer-une-epargne-enfant"]);
const pageSlugs = new Set(
  [...slugsFrom(pagesSrc), ...slugsFrom(socleSrc), ...slugsFrom(suiteSrc), ...slugsFrom(postsSrc), ...mdxSlugs].filter(
    (slug) => !retired.has(slug) && !slug.includes("votre-slug"),
  ),
);

const routes = new Set(["/", "/category/prevoyance/", "/en/", "/en/category/prevoyance/"]);
for (const slug of pageSlugs) {
  routes.add(`/${slug}/`);
  routes.add(`/en/${slug}/`);
}

const enCatalog = read("src/content/en/catalog-a.ts") + read("src/content/en/catalog-b.ts");
const enKeys = [...enCatalog.matchAll(/^\s{2}"([^"]+)":\s*\{/gm)].map((match) => match[1]);
const enKeySet = new Set(enKeys);
if (enKeys.length !== enKeySet.size) {
  errors.push("catalogue anglais : clé en double");
}
for (const slug of pageSlugs) {
  if (!enKeySet.has(slug)) errors.push(`page anglaise manquante : /en/${slug}/`);
}
for (const key of enKeySet) {
  if (!pageSlugs.has(key)) errors.push(`catalogue anglais : slug inconnu ${key}`);
}

function normalize(urlPath) {
  const clean = urlPath.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  if (clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

const redirectMap = new Map();
for (const match of redirectsSrc.matchAll(/source:\s*"([^"]+)"[\s\S]*?destination:\s*"([^"]+)"/g)) {
  const source = match[1];
  const destination = match[2];
  if (source.includes(":")) continue;
  redirectMap.set(normalize(source), normalize(destination));
}

function resolve(urlPath, seen = new Set()) {
  const normalized = normalize(urlPath);
  if (!normalized) return { ok: false, reason: "chemin illisible" };
  if (seen.has(normalized)) return { ok: false, reason: `boucle de redirection sur ${normalized}` };
  if (redirectMap.has(normalized)) {
    seen.add(normalized);
    const next = redirectMap.get(normalized);
    if (seen.size > 3) return { ok: false, reason: `chaîne de redirection trop longue depuis ${urlPath}` };
    return resolve(next, seen);
  }
  if (routes.has(normalized)) return { ok: true, final: normalized };
  return { ok: false, reason: `404 ${normalized}` };
}

const files = [
  ...walk(path.join(root, "src")).filter((file) => /\.(tsx?|mdx)$/.test(file)),
  ...walk(path.join(root, "content")).filter((file) => file.endsWith(".mdx") && !path.basename(file).startsWith("_")),
];

const hrefRe = /href\s*=\s*["'{]\s*(\/[^"'#\s}]+)/g;
const mdRe = /\]\((\/[^)\s]+)\)/g;
const checked = new Set();

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  for (const re of [hrefRe, mdRe]) {
    re.lastIndex = 0;
    let match;
    while ((match = re.exec(text))) {
      const raw = match[1];
      if (raw.startsWith("//")) continue;
      const ext = path.posix.extname(raw.split("?")[0]);
      if (ext && ext !== ".html") {
        const asset = path.join(root, "public", raw.split("?")[0]);
        if (!fs.existsSync(asset)) errors.push(`${rel} : fichier public manquant ${raw}`);
        continue;
      }
      const key = `${rel} ${raw}`;
      if (checked.has(key)) continue;
      checked.add(key);
      const result = resolve(raw);
      if (!result.ok) errors.push(`${rel} : lien interne ${raw} → ${result.reason}`);
    }
  }
}

for (const [source, destination] of redirectMap) {
  const result = resolve(source);
  if (!result.ok) errors.push(`redirection ${source} → ${destination} : ${result.reason}`);
  const seen = new Set();
  let cursor = source;
  for (let i = 0; i < 6; i += 1) {
    if (seen.has(cursor)) {
      errors.push(`boucle de redirection : ${[...seen, cursor].join(" → ")}`);
      break;
    }
    seen.add(cursor);
    if (!redirectMap.has(cursor)) break;
    cursor = redirectMap.get(cursor);
  }
}

const amountNearYear =
  /2027[^\n]{0,80}(?:7[\s'’,]?258|36[\s'’,]?288|7258|36288)|(?:7[\s'’,]?258|36[\s'’,]?288|7258|36288)[^\n]{0,80}2027/;
const oldAmount = /(?:6[\s'’]?883|6883|7[\s'’]?056|7056|34[\s'’]?416|34416|35[\s'’]?280|35280)/;
const historical =
  /2022|2023|2024|historique|Historique|Jusqu|ne s’appliquent|ne s'appliquent|anciens|périmé|expiré|série OFAS/i;

const scanRoots = ["src", "content", "public/llms.txt"];
for (const rel of scanRoots) {
  const full = path.join(root, rel);
  const targets = fs.statSync(full).isDirectory()
    ? walk(full).filter((file) => /\.(tsx?|mdx|txt|md)$/.test(file))
    : [full];
  for (const file of targets) {
    if (file.endsWith("qa-seo.mjs") || file.includes(`${path.sep}internal${path.sep}`)) continue;
    const lines = fs.readFileSync(file, "utf8").split("\n");
    const fileRel = path.relative(root, file);
    lines.forEach((line, index) => {
      if (amountNearYear.test(line)) {
        errors.push(`${fileRel}:${index + 1} : 2027 collé à un plafond 2026 (7 258 ou 36 288)`);
      }
      if (oldAmount.test(line) && !historical.test(line)) {
        errors.push(`${fileRel}:${index + 1} : ancien plafond présenté sans contexte historique`);
      }
    });
  }
}

const titles = new Map();
const socleSlugSet = new Set(slugsFrom(socleSrc));
for (const source of [pagesSrc, postsSrc, socleSrc, suiteSrc]) {
  const blocks = source.split(/slug:\s*"/).slice(1);
  for (const block of blocks) {
    const slug = block.slice(0, block.indexOf('"'));
    if (retired.has(slug)) continue;
    if (source === pagesSrc && socleSlugSet.has(slug)) continue;
    const title = block.match(/metaTitle:\s*(?:`([^`]*)`|"([^"]*)")/);
    const description = block.match(/description:\s*(?:`([^`]*)`|"([^"]*)"|[\s\S]*?`([^`]*)`)/);
    const h1 = block.match(/title:\s*(?:`([^`]*)`|"([^"]*)")/);
    const meta = title?.[1] || title?.[2] || "";
    const h1Text = h1?.[1] || h1?.[2] || "";
    if (!h1Text.trim()) errors.push(`${slug} : title/H1 vide`);
    if (!meta.trim()) notes.push(`${slug} : metaTitle absent, le title sert de repli`);
    const key = (meta || h1Text).replace(/\$\{[^}]+\}/g, "").trim();
    if (key) {
      if (titles.has(key)) errors.push(`title dupliqué « ${key} » : ${titles.get(key)} et ${slug}`);
      else titles.set(key, slug);
    }
    if (description && !(description[1] || description[2] || description[3] || "").trim()) {
      errors.push(`${slug} : meta description vide`);
    }
  }
}

if (!pageSlugs.has("ouvrir-un-3eme-pilier")) errors.push("slug manquant : ouvrir-un-3eme-pilier");
if (!pageSlugs.has("3eme-pilier-logement")) errors.push("slug manquant : 3eme-pilier-logement");
if (pageSlugs.has("constituer-une-epargne-enfant")) {
  errors.push("constituer-une-epargne-enfant est encore une page au lieu d’une redirection");
}

const preservedFile = "scripts/preserved-production-urls.txt";
const preservedFull = path.join(root, preservedFile);
/** @type {string[]} */
const preserved = [];
let preservedOk = 0;
let preservedRedirects = 0;
if (!fs.existsSync(preservedFull)) {
  errors.push(`liste engagée absente : ${preservedFile}`);
} else {
  const seenPreserved = new Set();
  for (const line of fs.readFileSync(preservedFull, "utf8").split("\n")) {
    const raw = line.trim();
    if (!raw || raw.startsWith("#")) continue;
    const url = normalize(raw);
    if (!url) {
      errors.push(`${preservedFile} : chemin illisible « ${raw} »`);
      continue;
    }
    if (seenPreserved.has(url)) {
      errors.push(`${preservedFile} : URL en double ${url}`);
      continue;
    }
    seenPreserved.add(url);
    preserved.push(url);
    if (routes.has(url) && !redirectMap.has(url)) {
      preservedOk += 1;
      continue;
    }
    if (redirectMap.has(url)) {
      const destination = redirectMap.get(url);
      if (redirectMap.has(destination)) {
        errors.push(`${url} : plus d’une redirection, destination ${destination} redirige encore`);
      } else if (!routes.has(destination)) {
        errors.push(`${url} : 301 vers ${destination}, qui n’est pas une page 200`);
      } else {
        preservedRedirects += 1;
      }
      continue;
    }
    errors.push(`${url} : URL du sitemap de production absente (ni 200, ni 301)`);
  }
  if (preserved.length < 40) {
    errors.push(`${preservedFile} : liste trop courte (${preserved.length} URL)`);
  }
}

const report = [
  "# Rapport QA SEO",
  "",
  `Généré par \`scripts/qa-seo.mjs\`. Pages publiques reconnues : ${pageSlugs.size}. Redirections exactes : ${redirectMap.size}.`,
  "",
  `URLs historiques engagées (\`${preservedFile}\`) : ${preserved.length}. En 200 : ${preservedOk}. En une seule 301 vers une 200 : ${preservedRedirects}.`,
  "",
  "## Résultat",
  "",
  errors.length ? `${errors.length} erreur(s).` : "Aucune erreur bloquante.",
  "",
  ...errors.map((error) => `- ${error}`),
  "",
  notes.length ? "## Notes" : "",
  ...notes.map((note) => `- ${note}`),
  "",
].join("\n");

fs.mkdirSync(path.join(root, "internal"), { recursive: true });
fs.writeFileSync(path.join(root, "internal/qa-seo-report.md"), report);
console.log(report);
if (errors.length) process.exit(1);
