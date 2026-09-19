import type { Metadata } from "next";
import Link from "next/link";
import { Blocks } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { SourcesList } from "@/components/sources-list";
import { getPosts, getRelated } from "@/content";
import type { EditorialDoc } from "@/content/types";
import { coverFor, IMAGES } from "@/lib/media";
import { canonical, SITE } from "@/lib/site";

export function docMetadata(doc: EditorialDoc): Metadata {
  const url = canonical(`/${doc.slug}/`);
  const cover = coverFor(doc.slug);
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
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
  };
}

export function EditorialView({ doc }: { doc: EditorialDoc }) {
  const related = getRelated(doc);
  const posts = doc.slug === "actualite-3eme-pilier" ? getPosts() : [];
  const showComparateur = doc.slug === "formulaire-3eme-pilier";
  const showContact = doc.slug === "nous-contacter";
  const isThanks = doc.slug === "page-remerciement";
  const cover = coverFor(doc.slug);

  if (isThanks) {
    return (
      <article>
        <div className="relative min-h-[52vh] overflow-hidden">
          <Frame
            image={IMAGES.merci}
            fill
            className="absolute inset-0 min-h-[52vh] rounded-none"
            sizes="100vw"
            rounded={false}
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="relative mx-auto flex min-h-[52vh] max-w-3xl flex-col justify-end px-4 py-16 text-primary-foreground md:px-6">
            <p className="kicker">Demande reçue</p>
            <h1 className="font-heading mt-3 text-4xl md:text-6xl">{doc.title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
          <p className="text-lg leading-relaxed">{doc.intro}</p>
          <div className="mt-8">
            <Blocks blocks={doc.blocks} />
          </div>
          {related.length ? (
            <ul className="mt-10 space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}/`} className="text-primary underline decoration-accent underline-offset-4">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article>
      <div className="relative min-h-[42vh] overflow-hidden">
        <Frame
          image={cover}
          fill
          className="absolute inset-0 min-h-[42vh] rounded-none"
          sizes="100vw"
          rounded={false}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-3xl flex-col justify-end px-4 py-12 text-primary-foreground md:px-6">
          <p className="kicker">{doc.kind === "post" ? "Article · prévoyance" : "Guide"}</p>
          <h1 className="font-heading mt-3 text-4xl leading-tight md:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Publié le {formatDate(doc.published)} · mis à jour le {formatDate(doc.updated)}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <p className="font-heading text-2xl italic leading-snug text-foreground/90">{doc.intro}</p>
        <div className="hairline my-10" />
        <Blocks blocks={doc.blocks} />
        {posts.length ? (
          <ul className="mt-12 space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="grid gap-4 border-t border-accent/20 pt-6 sm:grid-cols-[8rem_1fr]">
                <Frame image={coverFor(post.slug)} className="aspect-[4/3]" sizes="160px" />
                <div>
                  <Link href={`/${post.slug}/`} className="font-heading text-2xl text-primary hover:underline">
                    {post.title}
                  </Link>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {formatDate(post.published)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">{post.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
        {showComparateur ? (
          <div className="mt-12">
            <LeadForm intent="comparateur" />
          </div>
        ) : null}
        {showContact ? (
          <div className="mt-12 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <Frame image={IMAGES.conseiller} className="aspect-[3/4] max-h-80" />
            <LeadForm intent="contact" />
          </div>
        ) : null}
        {doc.faqs?.length ? <FaqList items={doc.faqs} /> : null}
        {related.length ? (
          <aside className="mt-14">
            <p className="kicker">À lire aussi</p>
            <ul className="mt-4 grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/${item.slug}/`} className="group block">
                    <Frame image={coverFor(item.slug)} className="aspect-[16/10]" />
                    <span className="mt-2 block font-heading text-xl group-hover:text-primary">{item.title}</span>
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
      </div>
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
