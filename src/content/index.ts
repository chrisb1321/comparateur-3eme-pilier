import { isPublicPostDate } from "@/lib/publication";
import { PAGES } from "./pages";
import { POSTS } from "./posts";
import { loadMdxArticles } from "./mdx-articles";
import type { EditorialDoc } from "./types";

function isListed(doc: EditorialDoc): boolean {
  if (doc.kind !== "post") return true;
  return isPublicPostDate(doc.published);
}

function allDocs(): EditorialDoc[] {
  return [...PAGES, ...POSTS, ...loadMdxArticles()];
}

export function getBySlug(slug: string): EditorialDoc | undefined {
  return allDocs().find((doc) => doc.slug === slug);
}

export function getAllSlugs(): string[] {
  return allDocs().map((doc) => doc.slug);
}

export function getPosts(): EditorialDoc[] {
  return [...POSTS, ...loadMdxArticles().filter((doc) => doc.kind === "post")]
    .filter(isListed)
    .sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getSeriesPosts(): EditorialDoc[] {
  return getPosts().filter((doc) => doc.series);
}

export function getPages(): EditorialDoc[] {
  return [...PAGES, ...loadMdxArticles().filter((doc) => doc.kind === "page")];
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
    if (!item || !isListed(item)) continue;
    seen.add(slug);
    related.push(item);
  }
  return related;
}

export { PAGES, POSTS };
