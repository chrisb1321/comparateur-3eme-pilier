import { getBySlug } from "@/content";
import type { EditorialDoc } from "@/content/types";
import { EN_A } from "./catalog-a";
import { EN_B } from "./catalog-b";
import type { EnCopy } from "./shared";

export const EN: Record<string, EnCopy> = { ...EN_A, ...EN_B };

const PARENT_LABEL: Record<string, string> = {
  "/3eme-pilier-suisse/": "Third pillar",
  "/deductions-fiscales-3eme-pilier/": "Tax",
  "/actualite-3eme-pilier/": "Guides",
};

function englishParents(fr: EditorialDoc): { name: string; href: string }[] {
  if (fr.parents && fr.parents.length === 0) return [];
  if (fr.parents && fr.parents.length > 0) {
    return fr.parents.map((parent) => ({
      name: PARENT_LABEL[parent.href] ?? parent.name,
      href: parent.href.startsWith("/en/") ? parent.href : `/en${parent.href.startsWith("/") ? parent.href : `/${parent.href}`}`,
    }));
  }
  if (fr.kind === "post") return [{ name: "Guides", href: "/en/actualite-3eme-pilier/" }];
  return [{ name: "Third pillar", href: "/en/3eme-pilier-suisse/" }];
}

export function getEnglishDoc(slug: string): EditorialDoc | undefined {
  const fr = getBySlug(slug);
  const copy = EN[slug];
  if (!fr || !copy) return undefined;
  return {
    ...fr,
    ...copy,
    body: undefined,
    parents: englishParents(fr),
    related: fr.related,
  };
}

export function missingEnglish(slugs: string[]): string[] {
  return slugs.filter((slug) => !EN[slug]);
}
