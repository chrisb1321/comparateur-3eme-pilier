#!/usr/bin/env node
/**
 * Échoue si deux articles publiés ou en brouillon partagent le même fichier image.
 * Même résolution que coverFor() : le front-matter MDX l’emporte sur SLUG_COVER.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function loadImages() {
  const media = read("src/lib/media.ts");
  const [imagesBlock, coverBlock] = media.split("const SLUG_COVER");
  if (!coverBlock) throw new Error("SLUG_COVER introuvable dans src/lib/media.ts");

  const images = {};
  for (const match of imagesBlock.matchAll(/(\w+):\s*\{\s*src:\s*"([^"]+)"/g)) {
    images[match[1]] = match[2];
  }
  const slugCover = {};
  for (const match of coverBlock.matchAll(/"([^"]+)":\s*"([^"]+)"/g)) {
    slugCover[match[1]] = match[2];
  }
  if (!images.hero) throw new Error("Image hero introuvable");
  return { images, slugCover };
}

function slugsIn(rel) {
  return [...read(rel).matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function loadAssignments() {
  const { images, slugCover } = loadImages();
  const bySlug = new Map();

  function assign(slug, cover) {
    const key = cover && cover in images ? cover : (slugCover[slug] ?? "hero");
    const src = images[key];
    if (!src) throw new Error(`Couverture inconnue « ${key} » pour ${slug}`);
    bySlug.set(slug, src);
  }

  for (const slug of [...slugsIn("src/content/pages.ts"), ...slugsIn("src/content/posts.ts")]) {
    assign(slug);
  }

  const articlesDir = path.join(root, "content/articles");
  for (const name of fs.readdirSync(articlesDir)) {
    if (!name.endsWith(".mdx") || name.startsWith("_") || name.startsWith("AGENT")) continue;
    const parsed = matter(read(path.join("content/articles", name)));
    const slug = parsed.data.slug;
    if (!slug) continue;
    assign(slug, typeof parsed.data.cover === "string" ? parsed.data.cover : undefined);
  }

  return [...bySlug.entries()].map(([slug, src]) => ({ slug, src }));
}

export function duplicateCovers(assignments) {
  const bySrc = new Map();
  for (const item of assignments) {
    const slugs = bySrc.get(item.src) ?? [];
    slugs.push(item.slug);
    bySrc.set(item.src, slugs);
  }
  return [...bySrc.entries()].filter(([, slugs]) => slugs.length > 1);
}

function report(dupes) {
  const lines = ["Deux articles pointent vers le même fichier image :"];
  for (const [src, slugs] of dupes) {
    lines.push(`  ${src}`);
    for (const slug of slugs) lines.push(`    - ${slug}`);
  }
  return lines.join("\n");
}

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function fileHash(absPath) {
  return crypto.createHash("sha256").update(fs.readFileSync(absPath)).digest("hex");
}

/** Échoue quand deux chemins distincts portent les mêmes octets. */
export function duplicateContents(entries) {
  const byHash = new Map();
  for (const item of entries) {
    const srcs = byHash.get(item.hash) ?? [];
    if (!srcs.includes(item.src)) srcs.push(item.src);
    byHash.set(item.hash, srcs);
  }
  return [...byHash.entries()].filter(([, srcs]) => srcs.length > 1);
}

function imageFiles() {
  const dir = path.join(root, "public/images");
  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .map((name) => ({
      src: `/images/${name}`,
      abs: path.join(dir, name),
    }));
}

function reportContents(dupes, assignments) {
  const slugsBySrc = new Map();
  for (const item of assignments) {
    const slugs = slugsBySrc.get(item.src) ?? [];
    slugs.push(item.slug);
    slugsBySrc.set(item.src, slugs);
  }
  const lines = ["Deux fichiers image ont le même contenu :"];
  for (const [hash, srcs] of dupes) {
    lines.push(`  ${hash}`);
    for (const src of srcs) {
      const slugs = slugsBySrc.get(src);
      lines.push(`    - ${src}${slugs ? ` (${slugs.join(", ")})` : ""}`);
    }
  }
  return lines.join("\n");
}

function assertFailsOnPurpose() {
  const dupes = duplicateCovers([
    { slug: "article-a", src: "/images/exemple.jpg" },
    { slug: "article-b", src: "/images/exemple.jpg" },
  ]);
  if (dupes.length !== 1) {
    throw new Error("Le contrôle n’a pas détecté un doublon de test.");
  }
}

function assertContentFailsOnPurpose() {
  const dupes = duplicateContents([
    { src: "/images/a.jpg", hash: "abc" },
    { src: "/images/b.jpg", hash: "abc" },
  ]);
  if (dupes.length !== 1 || dupes[0][1].length !== 2) {
    throw new Error("Le contrôle n’a pas détecté deux fichiers au même contenu.");
  }
  const samePath = duplicateContents([
    { src: "/images/a.jpg", hash: "abc" },
    { src: "/images/a.jpg", hash: "abc" },
  ]);
  if (samePath.length !== 0) {
    throw new Error("Le même chemin ne doit pas compter comme deux fichiers.");
  }
}

assertFailsOnPurpose();
assertContentFailsOnPurpose();

const assignments = loadAssignments();
const dupes = duplicateCovers(assignments);
if (dupes.length) {
  console.error(report(dupes));
  process.exit(1);
}

for (const item of assignments) {
  const abs = path.join(root, "public", item.src.replace(/^\//, ""));
  if (!fs.existsSync(abs)) {
    console.error(`Fichier image manquant pour ${item.slug} : ${item.src}`);
    process.exit(1);
  }
}

const hashed = imageFiles().map((file) => ({ src: file.src, hash: fileHash(file.abs) }));
const contentDupes = duplicateContents(hashed);
if (contentDupes.length) {
  console.error(reportContents(contentDupes, assignments));
  process.exit(1);
}

const files = new Set(assignments.map((item) => item.src));
console.log(
  `${assignments.length} articles, ${files.size} fichiers image distincts, ${hashed.length} fichiers au contenu unique.`,
);
