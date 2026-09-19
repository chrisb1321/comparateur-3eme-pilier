import type { Metadata } from "next";
import Link from "next/link";
import { Blocks } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { SourcesList } from "@/components/sources-list";
import { getPosts, getRelated } from "@/content";
import type { EditorialDoc } from "@/content/types";
import { canonical, SITE } from "@/lib/site";

export function docMetadata(doc: EditorialDoc): Metadata {
  const url = canonical(`/${doc.slug}/`);
  return {
    title: doc.metaTitle,
    description: doc.description,
    alternates: { canonical: url },
    openGraph: {
      title: doc.metaTitle,
      description: doc.description,
      url,
      locale: "fr_CH",
      type: "article",
      siteName: SITE.name,
    },
  };
}

export function EditorialView({ doc }: { doc: EditorialDoc }) {
  const related = getRelated(doc);
  const posts = doc.slug === "actualite-3eme-pilier" ? getPosts() : [];
  const showComparateur = doc.slug === "formulaire-3eme-pilier";
  const showContact = doc.slug === "nous-contacter";

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
      <p className="text-xs font-medium uppercase tracking-wide text-primary">
        {doc.kind === "post" ? "Article · prévoyance" : "Guide"}
      </p>
      <h1 className="font-heading mt-2 text-3xl tracking-tight md:text-4xl">{doc.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Publié le {formatDate(doc.published)} · mis à jour le {formatDate(doc.updated)}
      </p>
      <p className="mt-6 text-lg leading-relaxed">{doc.intro}</p>
      <div className="mt-8">
        <Blocks blocks={doc.blocks} />
      </div>
      {posts.length ? (
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-border p-4">
              <Link href={`/${post.slug}/`} className="font-semibold text-primary hover:underline">
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">{formatDate(post.published)}</p>
              <p className="mt-2 text-sm leading-relaxed">{post.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {showComparateur ? (
        <div className="mt-10">
          <LeadForm intent="comparateur" />
        </div>
      ) : null}
      {showContact ? (
        <div className="mt-10">
          <LeadForm intent="contact" />
        </div>
      ) : null}
      {doc.faqs?.length ? <FaqList items={doc.faqs} /> : null}
      {related.length ? (
        <aside className="mt-10">
          <h2 className="text-lg font-semibold">À lire aussi</h2>
          <ul className="mt-3 space-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/${item.slug}/`} className="text-primary hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
      {doc.slug !== "page-remerciement" && !showComparateur && !showContact ? <CtaBand /> : null}
      <SourcesList />
      {doc.faqs?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: doc.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      ) : null}
    </article>
  );
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
