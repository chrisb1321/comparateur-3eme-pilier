import type { Metadata } from "next";
import Link from "next/link";
import { SourcesList } from "@/components/sources-list";
import { CtaBand } from "@/components/cta-band";
import { getPosts } from "@/content";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catégorie prévoyance",
  description:
    "Tous les articles de la catégorie prévoyance : 3a, 3b, LPP, frontaliers, TOU. URL WordPress conservée.",
  alternates: { canonical: canonical("/category/prevoyance/") },
};

export default function CategoryPage() {
  const posts = getPosts();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <p className="text-xs font-medium uppercase tracking-wide text-primary">Catégorie</p>
      <h1 className="font-heading mt-2 text-3xl tracking-tight md:text-4xl">Prévoyance</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Les dix articles historiques du site, mis à jour pour 2026. Même slug, même catégorie
        WordPress <code>/category/prevoyance/</code>.
      </p>
      <ul className="mt-8 space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="rounded-xl border border-border p-4">
            <Link href={`/${post.slug}/`} className="font-semibold text-primary hover:underline">
              {post.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed">{post.description}</p>
          </li>
        ))}
      </ul>
      <CtaBand />
      <SourcesList />
    </div>
  );
}
