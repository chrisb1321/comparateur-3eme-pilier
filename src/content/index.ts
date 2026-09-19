import { PAGES } from "./pages";
import { POSTS } from "./posts";
import type { EditorialDoc } from "./types";

const ALL: EditorialDoc[] = [...PAGES, ...POSTS];

export function getBySlug(slug: string): EditorialDoc | undefined {
  return ALL.find((doc) => doc.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL.map((doc) => doc.slug);
}

export function getPosts(): EditorialDoc[] {
  return [...POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
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
