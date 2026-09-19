import type { MetadataRoute } from "next";
import { getPages, getPosts } from "@/content";
import { SITE, canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const newestPost = posts[0]?.updated ?? SITE.updated;
  const pages = getPages();

  const home: MetadataRoute.Sitemap[number] = {
    url: `${SITE.canonicalHost}/`,
    lastModified: SITE.updated,
    changeFrequency: "weekly",
    priority: 1,
  };

  const hub: MetadataRoute.Sitemap[number] = {
    url: canonical("/actualite-3eme-pilier/"),
    lastModified: newestPost,
    changeFrequency: "weekly",
    priority: 0.85,
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
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const postEntries = posts.map((post) => ({
    url: canonical(`/${post.slug}/`),
    lastModified: post.updated,
    changeFrequency: (post.series ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: post.series ? 0.8 : 0.65,
  }));

  return [home, hub, category, ...pageEntries, ...postEntries];
}
