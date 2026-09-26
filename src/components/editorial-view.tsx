import type { Metadata } from "next";
import Link from "next/link";
import { Blocks } from "@/components/blocks";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { Frame } from "@/components/frame";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { MdxBody } from "@/components/mdx-body";
import { CeilingSimulator } from "@/components/ceiling-simulator";
import { ProcessSteps } from "@/components/trust-strip";
import { getPosts, getRelated } from "@/content";
import type { EditorialDoc } from "@/content/types";
import type { LeadDelivery } from "@/lib/lead-delivery";
import { coverFor, IMAGES } from "@/lib/media";
import {
  articleLd,
  breadcrumbLd,
  collectionPageLd,
  faqPageLd,
  webPageLd,
} from "@/lib/schema";
import { calendarDay, formatEditorialDate, isPublicPostDate } from "@/lib/publication";
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
      publishedTime: calendarDay(doc.published),
      modifiedTime: calendarDay(doc.updated),
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.metaTitle,
      description: doc.description,
    },
    robots:
      doc.kind === "post" && !isPublicPostDate(doc.published)
        ? { index: false, follow: false }
        : undefined,
  };
}

export async function EditorialView({
  doc,
  delivery,
}: {
  doc: EditorialDoc;
  delivery?: LeadDelivery;
}) {
  const related = getRelated(doc);
  const posts = doc.slug === "actualite-3eme-pilier" ? getPosts() : [];
  const showComparateur = doc.slug === "formulaire-3eme-pilier";
  const showContact = doc.slug === "nous-contacter";
  const isThanks = doc.slug === "page-remerciement";

  if (isThanks) {
    const transmitted = Boolean(delivery?.crm);
    const journalOk = Boolean(delivery?.journal);
    return (
      <article data-testid="page-merci">
        <div className="page-hero on-navy">
          <div className="page-hero-in">
            <p className="kicker">{journalOk || transmitted ? "Demande enregistrée" : "Demande non confirmée"}</p>
            <h1 className="font-heading">{doc.title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
          <p className="text-lg leading-relaxed" data-testid="lead-crm-status" data-crm={transmitted ? "ok" : "no"}>
            {transmitted
              ? "C'est fait ! Merci pour votre temps. Aucun e-mail de confirmation n’est envoyé."
              : journalOk
                ? "Votre demande est enregistrée sur le site, mais la transmission n’a pas abouti. Écrivez-nous. Aucun e-mail de confirmation n’est envoyé."
                : "Nous n’avons pas de confirmation d’enregistrement. Écrivez à l’adresse ci-dessous en indiquant votre numéro. Aucun e-mail de confirmation n’est envoyé."}
          </p>
          <ol className="mt-10 grid gap-4">
            <li className="surface-card p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#23597C] uppercase">01</p>
              <h2 className="mt-1 text-2xl font-semibold">{transmitted || journalOk ? "Demande enregistrée" : "Enregistrement non confirmé"}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {transmitted
                  ? "La demande est enregistrée. Aucun e-mail de confirmation n’est envoyé."
                  : journalOk
                    ? "Une copie est conservée sur le site. La transmission n’a pas abouti. Aucun e-mail de confirmation n’est envoyé."
                    : "Sans confirmation d’enregistrement, la demande ne part pas. Aucun e-mail de confirmation n’est envoyé."}
              </p>
            </li>
            <li className="surface-card p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#23597C] uppercase">02</p>
              <h2 className="mt-1 text-2xl font-semibold">
                {transmitted ? "Suite avec un conseiller" : "Transmission non confirmée"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {transmitted
                  ? "La suite se fait avec un conseiller. Si rien ne vient, écrivez à "
                  : "Si la transmission n’a pas abouti, écrivez à "}
                <a className="font-semibold text-[#174462] underline underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>{" "}
                en indiquant votre numéro.
              </p>
            </li>
            <li className="surface-card p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#23597C] uppercase">03</p>
              <h2 className="mt-1 text-2xl font-semibold">Vous n’êtes pas engagé</h2>
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
              <p className="kicker">À lire</p>
              <ul className="mt-4 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${item.slug}/`} className="font-semibold text-[#174462] underline underline-offset-4">
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
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <p className="kicker">
            {doc.kind === "post" ? (doc.series ? "Série 3×/semaine · prévoyance" : "Article · prévoyance") : "Guide"}
          </p>
          <h1 className="font-heading">{doc.title}</h1>
          <p className="page-hero-meta">
            Publié le {formatEditorialDate(doc.published)} · mis à jour le {formatEditorialDate(doc.updated)}
          </p>
        </div>
      </div>
      <div className={`mx-auto px-4 py-14 md:px-6 md:py-16 ${showComparateur || showContact ? "max-w-[1100px]" : "max-w-3xl"}`}>
          <p id="reponse-directe" className="text-[22px] leading-snug font-medium text-[#10324A]">
            {doc.intro}
          </p>
        <div className="my-10 h-px bg-[#DCE6ED]" />
        {doc.body ? <MdxBody source={doc.body} /> : <Blocks blocks={doc.blocks} />}
        {posts.length ? (
          <div data-testid="hub-actualites" className="mt-12">
            <p className="kicker">Cadence</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Articles déjà datés : plafonds OFAS, rachat de lacunes, tableau des montants, retrait et lien avec le 2e pilier.
              Les textes prévus après le 26 septembre 2026 ne figurent pas dans cette liste.
            </p>
            <ul className="mt-8 space-y-8">
              {posts.map((post) => (
                <li key={post.slug} className="surface-card grid gap-4 overflow-hidden p-4 sm:grid-cols-[8rem_1fr]">
                  <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="160px" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#23597C] uppercase">
                      {post.series ? "Série 2026–2027" : "Archive"}
                    </p>
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
          </div>
        ) : null}
        {showComparateur ? (
          <div className="mt-12 space-y-10">
            <ProcessSteps />
            <LeadForm intent="comparateur" />
            <CeilingSimulator />
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
                  <Link href={`/${item.slug}/`} className="surface-card group block overflow-hidden">
                    <Frame image={coverFor(item.slug, item.cover)} className="aspect-[16/10] rounded-none" rounded={false} />
                    <span className="block p-4 text-xl font-semibold group-hover:text-[#23597C]">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        {doc.slug !== "page-remerciement" && !showComparateur && !showContact ? <CtaBand /> : null}
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

