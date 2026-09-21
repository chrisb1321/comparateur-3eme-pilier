import type { Metadata } from "next";
import Link from "next/link";
import { SourcesList } from "@/components/sources-list";
import { CtaBand } from "@/components/cta-band";
import { Frame } from "@/components/frame";
import { getPosts } from "@/content";
import { coverFor, IMAGES } from "@/lib/media";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catégorie prévoyance",
  description:
    "Tous les articles de la catégorie prévoyance : série 2026–2027 et archives. URL WordPress conservée.",
  alternates: { canonical: canonical("/category/prevoyance/") },
};

export default function CategoryPage() {
  const posts = getPosts();
  return (
    <div>
      <div className="relative min-h-[36vh]">
        <Frame image={IMAGES.lavaux} fill className="absolute inset-0 min-h-[36vh] rounded-none" rounded={false} sizes="100vw" priority />
        <div className="absolute inset-0 bg-primary/55" />
        <div className="relative mx-auto flex min-h-[36vh] max-w-3xl flex-col justify-end px-4 py-12 text-primary-foreground md:px-6">
          <p className="kicker">Catégorie</p>
          <h1 className="font-heading mt-2 text-5xl">Prévoyance</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed">
          Les articles de la catégorie prévoyance : série 3×/semaine et archives WordPress.
          Même slug, même catégorie <code>/category/prevoyance/</code>.
        </p>
        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="grid gap-4 border-t border-accent/25 pt-6 sm:grid-cols-[9rem_1fr]">
                <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="180px" />
              <div>
                <Link href={`/${post.slug}/`} className="font-heading text-2xl text-primary hover:underline">
                  {post.title}
                </Link>
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
