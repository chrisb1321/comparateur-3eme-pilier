import { PAGES } from "./pages";
import { POSTS } from "./posts";
import { loadMdxArticles } from "./mdx-articles";
import type { EditorialDoc } from "./types";

/** Slugs qui ne sont plus des pages : une 301 les remplace. Ils ne doivent pas être dans le sitemap. */
const RETIRED_SLUGS = new Set(["rachat-lpp-vers-3a-2026", "constituer-une-epargne-enfant"]);

function visible(docs: EditorialDoc[]): EditorialDoc[] {
  return docs.filter((doc) => !RETIRED_SLUGS.has(doc.slug));
}

function allDocs(): EditorialDoc[] {
  return visible([...PAGES, ...POSTS, ...loadMdxArticles()]);
}

export function getBySlug(slug: string): EditorialDoc | undefined {
  return allDocs().find((doc) => doc.slug === slug);
}

export function getAllSlugs(): string[] {
  return allDocs().map((doc) => doc.slug);
}

export function getPosts(): EditorialDoc[] {
  return visible([...POSTS, ...loadMdxArticles().filter((doc) => doc.kind === "post")]).sort((a, b) =>
    a.published < b.published ? 1 : -1,
  );
}

export function getSeriesPosts(): EditorialDoc[] {
  return getPosts().filter((doc) => doc.series);
}

export function getPages(): EditorialDoc[] {
  return visible([...PAGES, ...loadMdxArticles().filter((doc) => doc.kind === "page")]);
}

export function getRelated(doc: EditorialDoc): EditorialDoc[] {
  const slugs = [...(doc.related ?? [])];
  if (doc.series && !slugs.includes("actualite-3eme-pilier")) {
    slugs.push("actualite-3eme-pilier");
  }
  const seen = new Set<string>();
  const related: EditorialDoc[] = [];
  for (const raw of slugs) {
    const slug = raw.split("/").filter(Boolean).pop() as string;
    if (!slug || slug === doc.slug || seen.has(slug)) continue;
    const item = getBySlug(slug);
    if (!item) continue;
    seen.add(slug);
    related.push(item);
  }
  return related;
}

export { PAGES, POSTS };
