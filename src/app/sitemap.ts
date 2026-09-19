import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/content";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const extras = ["/", "/category/prevoyance/"];
  const paths = [
    ...extras,
    ...getAllSlugs().map((slug) => `/${slug}/`),
  ];
  const unique = [...new Set(paths)];
  return unique.map((path) => ({
    url: path === "/" ? `${SITE.canonicalHost}/` : `${SITE.canonicalHost}${path}`,
    lastModified: SITE.updated,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
