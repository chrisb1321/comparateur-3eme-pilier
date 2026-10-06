import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Frame } from "@/components/frame";
import { SourcesList } from "@/components/sources-list";
import { getPosts } from "@/content";
import { getEnglishDoc } from "@/content/en";
import { coverFor } from "@/lib/media";
import { canonical } from "@/lib/site";

const fr = canonical("/category/prevoyance/");
const en = canonical("/en/category/prevoyance/");

export const metadata: Metadata = {
  title: { absolute: "Provision category" },
  description: "Every guide in the provision category, in English, on the same slugs.",
  alternates: {
    canonical: en,
    languages: { "fr-CH": fr, en, "x-default": fr },
  },
};

export default function EnglishCategoryPage() {
  const posts = getPosts();
  return (
    <div lang="en">
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <p className="kicker">Category</p>
          <h1 className="font-heading">Provision</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-lg leading-relaxed">
          Guides in this category keep their original slugs. The English page is the same slug under /en/.
        </p>
        <ul className="mt-10 space-y-8">
          {posts.map((post) => {
            const item = getEnglishDoc(post.slug) ?? post;
            return (
              <li key={post.slug} className="surface-card grid gap-4 overflow-hidden p-4 sm:grid-cols-[9rem_1fr]">
                <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="180px" />
                <div>
                  <Link href={`/en/${post.slug}/`} className="text-2xl font-semibold text-[#174462] hover:text-[#23597C]">
                    {item.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <CtaBand
          title="Request a comparison"
          text="The form is in French. It is free and does not commit you."
          cta="Open the French form"
        />
        <SourcesList locale="en" />
      </div>
    </div>
  );
}
