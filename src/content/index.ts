import { PAGES } from "./pages";
import { POSTS } from "./posts";
import { loadMdxArticles } from "./mdx-articles";
import type { EditorialDoc } from "./types";

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
  return [...POSTS, ...loadMdxArticles()].sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getSeriesPosts(): EditorialDoc[] {
  return getPosts().filter((doc) => doc.series);
}

export function getPages(): EditorialDoc[] {
  return PAGES;
}

export function getRelated(doc: EditorialDoc): EditorialDoc[] {
  return (doc.related ?? [])
    .map((slug) => getBySlug(slug.split("/").filter(Boolean).pop() as string))
    .filter((item): item is EditorialDoc => Boolean(item));
}

export { PAGES, POSTS };
