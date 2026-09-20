import type { Metadata } from "next";
import Link from "next/link";
import { Blocks } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { MdxBody } from "@/components/mdx-body";
import { SourcesList } from "@/components/sources-list";
import { ProcessSteps } from "@/components/trust-strip";
import { getPosts, getRelated } from "@/content";
import type { EditorialDoc } from "@/content/types";
import { coverFor, IMAGES } from "@/lib/media";
import {
  articleLd,
  breadcrumbLd,
  collectionPageLd,
  faqPageLd,
  webPageLd,
} from "@/lib/schema";
import { canonical, SITE } from "@/lib/site";

export function docMetadata(doc: EditorialDoc): Metadata {
  const url = canonical(`/${doc.slug}/`);
  const cover = coverFor(doc.slug, doc.cover);
  return {
    title: doc.metaTitle,
    description: doc.description,
    alternates: { canonical: url },
    authors: [{ name: SITE.name, url: canonical("/a-propos/") }],
    openGraph: {
      title: doc.metaTitle,
      description: doc.description,
      url,
      locale: "fr_CH",
      type: doc.kind === "post" ? "article" : "website",
      siteName: SITE.name,
      publishedTime: doc.published,
      modifiedTime: doc.updated,
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.metaTitle,
      description: doc.description,
    },
  };
}

export async function EditorialView({ doc }: { doc: EditorialDoc }) {
  const related = getRelated(doc);
  const posts = doc.slug === "actualite-3eme-pilier" ? getPosts() : [];
  const showComparateur = doc.slug === "formulaire-3eme-pilier";
  const showContact = doc.slug === "nous-contacter";
  const isThanks = doc.slug === "page-remerciement";
  const cover = coverFor(doc.slug, doc.cover);

  if (isThanks) {
    return (
      <article data-testid="page-merci">
        <div className="relative min-h-[48vh] overflow-hidden">
          <Frame
            image={IMAGES.merci}
            fill
            className="absolute inset-0 min-h-[48vh] rounded-none"
            sizes="100vw"
            rounded={false}
            priority
          />
          <div className="absolute inset-0 bg-primary/55" />
          <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-4 py-16 text-primary-foreground md:px-6">
            <p className="kicker">Demande enregistrée</p>
            <h1 className="font-heading mt-3 text-4xl md:text-6xl">{doc.title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
          <p className="text-lg leading-relaxed">{doc.intro}</p>
          <ol className="mt-10 space-y-6 border-t border-accent/30 pt-8">
            <li>
              <p className="font-figures text-xs tracking-[0.2em] text-accent">01</p>
              <h2 className="font-heading mt-1 text-2xl">Nous avons le dossier</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                La demande est écrite dans le journal des leads. Ce n’est pas un e-mail automatique :
                personne n’a encore reçu de message de confirmation.
              </p>
            </li>
            <li>
              <p className="font-figures text-xs tracking-[0.2em] text-accent">02</p>
              <h2 className="font-heading mt-1 text-2xl">Un humain rappelle</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sous deux jours ouvrés, de préférence par téléphone. Si rien ne vient, écrivez à{" "}
                <a className="text-primary underline decoration-accent underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>{" "}
                en rappelant votre numéro.
              </p>
            </li>
            <li>
              <p className="font-figures text-xs tracking-[0.2em] text-accent">03</p>
              <h2 className="font-heading mt-1 text-2xl">Vous n’êtes pas engagé</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Le comparatif reste sans honoraires. Vous choisissez de poursuivre ou non.
              </p>
            </li>
          </ol>
          <div className="mt-10">
            <Blocks blocks={doc.blocks} />
          </div>
          {related.length ? (
            <div className="mt-12">
              <p className="kicker">En attendant le rappel</p>
              <ul className="mt-4 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${item.slug}/`} className="text-primary underline decoration-accent underline-offset-4">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
          <p className="kicker">
            {doc.kind === "post" ? (doc.series ? "Série 3×/semaine · prévoyance" : "Article · prévoyance") : "Guide"}
          </p>
          <h1 className="font-heading mt-3 text-4xl leading-tight md:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Publié le {formatDate(doc.published)} · mis à jour le {formatDate(doc.updated)}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <p id="reponse-directe" className="font-heading text-2xl italic leading-snug text-foreground/90">
            {doc.intro}
          </p>
        <div className="hairline my-10" />
        {doc.body ? <MdxBody source={doc.body} /> : <Blocks blocks={doc.blocks} />}
        {posts.length ? (
          <div data-testid="hub-actualites" className="mt-12">
            <p className="kicker">Cadence</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Trois articles par semaine (lundi, mercredi, vendredi) — plafonds OFAS, cantons, frontaliers,
              3a/3b, banque ou assurance. Semaines 1 à 4 en ligne. Pas un flux quotidien. Les guides
              WordPress restent à leurs slugs d’origine.
            </p>
            <ul className="mt-8 space-y-8">
              {posts.map((post) => (
                <li key={post.slug} className="grid gap-4 border-t border-accent/20 pt-6 sm:grid-cols-[8rem_1fr]">
                  <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="160px" />
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.18em] text-accent">
                      {post.series ? "Série 2026–2027" : "Archive"}
                    </p>
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
          </div>
        ) : null}
        {showComparateur ? (
          <div className="mt-12 space-y-10">
            <ProcessSteps />
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
                    <Frame image={coverFor(item.slug, item.cover)} className="aspect-[16/10]" />
                    <span className="mt-2 block font-heading text-xl group-hover:text-primary">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        {doc.slug !== "page-remerciement" && !showComparateur && !showContact ? <CtaBand /> : null}
        <SourcesList />
        <ArticleJsonLd doc={doc} />
      </div>
    </article>
  );
}

function ArticleJsonLd({ doc }: { doc: EditorialDoc }) {
  const cover = coverFor(doc.slug, doc.cover);
  const data: Record<string, unknown>[] = [breadcrumbLd(doc)];
  if (doc.kind === "post") {
    data.push(articleLd(doc, cover));
  } else if (doc.slug === "actualite-3eme-pilier") {
    data.push(collectionPageLd(doc, getPosts().map((post) => ({ slug: post.slug, title: post.title }))));
  } else {
    data.push(webPageLd(doc, cover));
  }
  if (doc.faqs?.length) {
    data.push(faqPageLd(doc.faqs));
  }
  return <JsonLd data={data} />;
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
