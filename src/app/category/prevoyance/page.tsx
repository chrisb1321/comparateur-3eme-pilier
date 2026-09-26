import type { Metadata } from "next";
import Link from "next/link";
import { SourcesList } from "@/components/sources-list";
import { CtaBand } from "@/components/cta-band";
import { Frame } from "@/components/frame";
import { getPosts } from "@/content";
import { formatEditorialDate } from "@/lib/publication";
import { coverFor } from "@/lib/media";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catégorie prévoyance",
  description:
    "Articles de prévoyance publiés au 26 septembre 2026 ou avant.",
  alternates: { canonical: canonical("/category/prevoyance/") },
};

export default function CategoryPage() {
  const posts = getPosts();
  return (
    <div>
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <p className="kicker">Catégorie</p>
          <h1 className="font-heading">Prévoyance</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed">
          Articles dont la date est le 26 septembre 2026 ou avant.
        </p>
        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="surface-card grid gap-4 overflow-hidden p-4 sm:grid-cols-[9rem_1fr]">
                <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="180px" />
              <div>
                <Link href={`/${post.slug}/`} className="text-2xl font-semibold text-[#174462] hover:text-[#23597C]">
                  {post.title}
                </Link>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {formatEditorialDate(post.published)}
                </p>
                <p className="mt-2 text-sm leading-relaxed">{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <CtaBand />
        <SourcesList />
      </div>
    </div>
  );
}
