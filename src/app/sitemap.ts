import type { MetadataRoute } from "next";
import { getPages, getPosts } from "@/content";
import { SITE, canonical } from "@/lib/site";

const MONEY_PAGES = new Set([
  "deductions-fiscales-3eme-pilier",
  "3eme-pilier-a-ou-b",
  "3eme-pilier-b-prevoyance-libre",
  "3eme-pilier-banque-assurance",
  "3eme-pilier-geneve",
  "frontalier-suisse",
  "1er-pilier-avs-ai-apg",
  "2eme-pilier-lpp",
  "formulaire-3eme-pilier",
  "choisir-son-3eme-pilier",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const newestPost = posts[0]?.updated ?? SITE.updated;
  const pages = getPages();

  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE.canonicalHost}/`,
    lastModified: newestPost,
    changeFrequency: "weekly",
    priority: 1,
  };

  const hub: MetadataRoute.Sitemap[number] = {
    url: canonical("/actualite-3eme-pilier/"),
    lastModified: newestPost,
    changeFrequency: "weekly",
    priority: 0.9,
  };

  const category: MetadataRoute.Sitemap[number] = {
    url: canonical("/category/prevoyance/"),
    lastModified: newestPost,
    changeFrequency: "weekly",
    priority: 0.6,
  };

  const pageEntries = pages
    .filter((page) => page.slug !== "actualite-3eme-pilier")
    .map((page) => ({
      url: canonical(`/${page.slug}/`),
      lastModified: page.updated,
      changeFrequency: (MONEY_PAGES.has(page.slug) ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: MONEY_PAGES.has(page.slug) ? 0.9 : 0.7,
    }));

  const postEntries = posts.map((post) => ({
    url: canonical(`/${post.slug}/`),
    lastModified: post.updated,
    changeFrequency: (post.series ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: post.series ? 0.85 : 0.65,
  }));

  return [home, hub, category, ...pageEntries, ...postEntries];
}
