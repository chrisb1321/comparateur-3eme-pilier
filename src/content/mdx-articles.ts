import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { EditorialDoc, FaqItem } from "./types";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

type Frontmatter = {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  published: string;
  updated?: string;
  intro: string;
  cover?: string;
  related?: string[];
  faqs?: FaqItem[];
  category?: string;
  series?: boolean;
  weekId?: string;
  draft?: boolean;
};

function isMdxFile(name: string): boolean {
  return name.endsWith(".mdx") && !name.startsWith("_") && !name.startsWith("AGENT");
}

export function loadMdxArticles(options?: { includeDrafts?: boolean }): EditorialDoc[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter(isMdxFile);
  const docs: EditorialDoc[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const parsed = matter(raw);
    const data = parsed.data as Frontmatter;
    if (!data.slug || !data.title) continue;
    if (data.draft && !options?.includeDrafts) continue;

    docs.push({
      kind: "post",
      slug: data.slug,
      title: data.title,
      metaTitle: data.metaTitle ?? data.title,
      description: data.description,
      published: data.published,
      updated: data.updated ?? data.published,
      intro: data.intro,
      blocks: [],
      body: parsed.content.trim(),
      faqs: data.faqs,
      related: data.related,
      category: data.category ?? "prevoyance",
      cover: data.cover,
      series: data.series ?? true,
      weekId: data.weekId,
      draft: data.draft ?? false,
    });
  }

  return docs;
}
