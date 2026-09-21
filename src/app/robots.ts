import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Anthropic-AI",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.canonicalHost}/sitemap.xml`,
    host: SITE.canonicalHost,
  };
}
