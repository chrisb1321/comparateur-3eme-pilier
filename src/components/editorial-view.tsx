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
import { CeilingSimulator } from "@/components/ceiling-simulator";
import { ProcessSteps } from "@/components/trust-strip";
import { getPosts, getRelated } from "@/content";
import { getEnglishDoc } from "@/content/en";
import type { EditorialDoc } from "@/content/types";
import type { LeadDelivery } from "@/lib/lead-delivery";
import { coverFor, IMAGES } from "@/lib/media";
import { AuthorBox } from "@/components/author-box";
import { CeilingCalculator } from "@/components/ceiling-calculator";
import { AUTHOR, AUTHOR_PERSON_LD } from "@/lib/editorial";
import {
  ORGANIZATION_LD,
  articleLd,
  breadcrumbItems,
  breadcrumbLd,
  collectionPageLd,
  faqPageLd,
  webPageLd,
} from "@/lib/schema";
import { canonical, SITE } from "@/lib/site";

export function docMetadata(doc: EditorialDoc, locale: "fr" | "en" = "fr"): Metadata {
  const frUrl = canonical(`/${doc.slug}/`);
  const enUrl = canonical(`/en/${doc.slug}/`);
  const url = locale === "en" ? enUrl : frUrl;
  const cover = coverFor(doc.slug, doc.cover);
  const authorUrl = locale === "en" ? canonical("/en/christophe-bouin/") : canonical(AUTHOR.href);
  return {
    title: locale === "en" || doc.absoluteTitle ? { absolute: doc.metaTitle } : doc.metaTitle,
    description: doc.description,
    alternates: {
      canonical: url,
      languages: { "fr-CH": frUrl, en: enUrl, "x-default": frUrl },
    },
    authors: [{ name: AUTHOR.name, url: authorUrl }],
    openGraph: {
      title: doc.metaTitle,
      description: doc.description,
      url,
      locale: locale === "en" ? "en" : "fr_CH",
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

export async function EditorialView({
  doc,
  delivery,
  locale = "fr",
}: {
  doc: EditorialDoc;
  delivery?: LeadDelivery;
  locale?: "fr" | "en";
}) {
  const related = locale === "en"
    ? (doc.related ?? []).flatMap((slug) => {
        const item = getEnglishDoc(slug);
        return item ? [item] : [];
      })
    : getRelated(doc);
  const posts = doc.slug === "actualite-3eme-pilier"
    ? getPosts().map((post) => (locale === "en" ? getEnglishDoc(post.slug) ?? post : post))
    : [];
  const showComparateur = doc.slug === "formulaire-3eme-pilier" && locale !== "en";
  const showContact = doc.slug === "nous-contacter" && locale !== "en";
  const isThanks = doc.slug === "page-remerciement";
  const hrefFor = (slug: string) => (locale === "en" ? `/en/${slug}/` : `/${slug}/`);

  if (isThanks && locale !== "en") {
    const transmitted = Boolean(delivery?.crm);
    const journalOk = Boolean(delivery?.journal);
    return (
      <article data-testid="page-merci">
        <div className="page-hero on-navy">
          <div className="page-hero-in">
            <p className="kicker">{transmitted ? "Dossier transmis" : "Demande enregistrée"}</p>
            <h1 className="font-heading">{doc.title}</h1>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
          <p className="text-lg leading-relaxed" data-testid="lead-crm-status" data-crm={transmitted ? "ok" : "no"}>
            {transmitted
              ? "Votre demande est bien arrivée dans notre suivi interne. Un conseiller partenaire rappelle sous deux jours ouvrés, de préférence par téléphone."
              : journalOk
                ? "La demande est enregistrée sur le site, mais elle n’a pas pu être transmise au suivi conseiller. Aucun rappel automatique n’est déclenché. Écrivez-nous si vous n’avez pas de nouvelles."
                : "Nous n’avons pas de confirmation d’enregistrement. Écrivez à l’adresse ci-dessous en rappelant votre numéro."}
          </p>
          <ol className="mt-10 grid gap-4">
            <li className="surface-card p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#23597C] uppercase">01</p>
              <h2 className="mt-1 text-2xl font-semibold">{transmitted ? "Le dossier est chez le conseiller" : "Transmission en attente"}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {transmitted
                  ? "Votre fiche est dans le suivi interne. Aucun e-mail de confirmation n’est envoyé dans votre boîte."
                  : "Nous n’affirmons pas qu’un e-mail a été envoyé, ni qu’un conseiller voit déjà la fiche. Une copie locale existe seulement si l’enregistrement a réussi."}
              </p>
            </li>
            <li className="surface-card p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-[#23597C] uppercase">02</p>
              <h2 className="mt-1 text-2xl font-semibold">Un humain rappelle</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sous deux jours ouvrés, de préférence par téléphone — une fois le dossier transmis. Si rien ne vient, écrivez à{" "}
                <a className="font-semibold text-[#174462] underline underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>{" "}
                en rappelant votre numéro.
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
              <p className="kicker">En attendant le rappel</p>
              <ul className="mt-4 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={hrefFor(item.slug)} className="font-semibold text-[#174462] underline underline-offset-4">
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

  const crumbs = breadcrumbItems(doc);

  return (
    <article>
      <div className="page-hero on-navy">
        <div className="page-hero-in">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">/</span> : null}
                    {last ? (
                      <span className="text-white">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.href} className="underline decoration-white/40 underline-offset-4 hover:text-white">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          <p className="kicker">
            {doc.label ??
              (locale === "en"
                ? doc.kind === "post"
                  ? "Guide"
                  : "Guide"
                : doc.kind === "post"
                  ? doc.series
                    ? "Article · série prévoyance"
                    : "Article · prévoyance"
                  : "Guide")}
          </p>
          {doc.slug === "3eme-pilier-logement" && locale !== "en" ? (
            <nav aria-label="Fil d'Ariane" className="mb-4 text-sm text-white/80">
              <Link href="/" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                Accueil
              </Link>
              <span className="px-2" aria-hidden="true">
                /
              </span>
              <span>3e pilier et achat immobilier</span>
            </nav>
          ) : null}
          <h1 className="font-heading">{doc.title}</h1>
          <p className="page-hero-meta">
            {locale === "en" ? "Published" : "Publié le"} {formatDate(doc.published, locale)} · {locale === "en" ? "updated" : "mis à jour le"} {formatDate(doc.updated, locale)}
            {" · "}
            {locale === "en" ? "Written or reviewed by" : "Rédigé ou vérifié par"}{" "}
            <Link href={locale === "en" ? "/en/christophe-bouin/" : AUTHOR.href} className="underline decoration-white/40 underline-offset-4">
              {AUTHOR.name}
            </Link>
          </p>
        </div>
      </div>
      <div className={`mx-auto px-4 py-14 md:px-6 md:py-16 ${showComparateur || showContact ? "max-w-[1100px]" : "max-w-3xl"}`}>
          <p id="reponse-directe" className="text-[22px] leading-snug font-medium text-[#10324A]">
            {doc.intro}
          </p>
          {doc.brief?.length ? (
            <aside className="mt-8 rounded-[18px] border border-[#DCE6ED] bg-[#F5F8FA] px-5 py-4">
              <h2 className="text-sm font-semibold tracking-[0.14em] text-[#23597C] uppercase">{locale === "en" ? "In brief" : "En bref"}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#10324A]">
                {doc.brief.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          ) : null}
        <div className="my-10 h-px bg-[#DCE6ED]" />
        {doc.body ? <MdxBody source={doc.body} /> : <Blocks blocks={doc.blocks} />}
        {doc.slug === "calculateur-plafond-3a" ? <CeilingCalculator locale={locale} /> : null}
        {posts.length ? (
          <div data-testid="hub-actualites" className="mt-12">
            <p className="kicker">{locale === "en" ? "Pace" : "Cadence"}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {locale === "en"
                ? "Three articles a week, not a daily stream. Historical guides keep their original slugs. English pages use the same slug under /en/."
                : "Trois articles par semaine (lundi, mercredi, vendredi) — plafonds OFAS, cantons, frontaliers, 3a/3b, banque ou assurance, versement, retraite et rachat LPP. Semaines 1 à 6 en ligne. Pas un flux quotidien. Les guides WordPress restent à leurs slugs d’origine."}
            </p>
            <ul className="mt-8 space-y-8">
              {posts.map((post) => (
                <li key={post.slug} className="surface-card grid gap-4 overflow-hidden p-4 sm:grid-cols-[8rem_1fr]">
                  <Frame image={coverFor(post.slug, post.cover)} className="aspect-[4/3]" sizes="160px" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#23597C] uppercase">
                      {post.series ? (locale === "en" ? "2026 series" : "Série 2026–2027") : locale === "en" ? "Archive" : "Archive"}
                    </p>
                    <Link href={hrefFor(post.slug)} className="text-2xl font-semibold text-[#174462] hover:text-[#23597C]">
                      {post.title}
                    </Link>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {formatDate(post.published, locale)}
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
            <CeilingSimulator />
            <LeadForm intent="comparateur" />
          </div>
        ) : null}
        {showContact ? (
          <div className="mt-12 grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <Frame image={IMAGES.conseiller} className="aspect-[3/4] max-h-80" />
            <LeadForm intent="contact" />
          </div>
        ) : null}
        {doc.faqs?.length ? <FaqList items={doc.faqs} locale={locale} /> : null}
        {related.length ? (
          <aside className="mt-14">
            <p className="kicker">À lire aussi</p>
            <ul className="mt-4 grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={hrefFor(item.slug)} className="surface-card group block overflow-hidden">
                    <Frame image={coverFor(item.slug, item.cover)} className="aspect-[16/10] rounded-none" rounded={false} />
                    <span className="block p-4 text-xl font-semibold group-hover:text-[#23597C]">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
        {doc.slug !== "page-remerciement" && !showComparateur && !showContact ? (
          <CtaBand
            title={locale === "en" ? "Request a comparison" : undefined}
            text={locale === "en" ? "The form is in French. It is free and does not commit you." : undefined}
            cta={locale === "en" ? "Open the French form" : undefined}
          />
        ) : null}
        <AuthorBox variant={doc.slug === "christophe-bouin" ? "page" : "compact"} locale={locale} />
        <SourcesList locale={locale} />
        <ArticleJsonLd doc={doc} locale={locale} />
      </div>
    </article>
  );
}

function ArticleJsonLd({ doc, locale }: { doc: EditorialDoc; locale: "fr" | "en" }) {
  const cover = coverFor(doc.slug, doc.cover);
  const person =
    locale === "en"
      ? {
          ...AUTHOR_PERSON_LD,
          jobTitle: "Head of content and of the comparison",
          url: canonical("/en/christophe-bouin/"),
        }
      : AUTHOR_PERSON_LD;
  const graph: Record<string, unknown>[] = [
    stripContext(ORGANIZATION_LD),
    doc.slug === "3eme-pilier-logement" && locale !== "en" ? logementBreadcrumb() : breadcrumbLd(doc),
  ];
  if (doc.slug === "christophe-bouin") {
    const page = webPageLd(doc, cover, locale);
    delete page.image;
    page.author = { "@id": person["@id"] };
    graph.push(page, person);
  } else if (doc.slug === "3eme-pilier-logement") {
    const article = articleLd(doc, cover, locale);
    article.headline = doc.title;
    article.description = doc.intro;
    article.author = person;
    article.citation = LOGEMENT_CITATIONS;
    graph.push(article);
  } else if (doc.kind === "post") {
    graph.push({ ...articleLd(doc, cover, locale), author: person });
  } else if (doc.slug === "actualite-3eme-pilier") {
    graph.push(collectionPageLd(doc, getPosts().map((post) => {
      const item = locale === "en" ? getEnglishDoc(post.slug) : post;
      return { slug: post.slug, title: item?.title ?? post.title };
    }), locale));
  } else {
    graph.push({ ...webPageLd(doc, cover, locale), author: person });
  }
  if (doc.faqs?.length) {
    graph.push(faqPageLd(doc.faqs));
  }
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

const LOGEMENT_CITATIONS = [
  {
    "@type": "CreativeWork",
    name: "OPP 3 (RS 831.461.3), état au 1er janvier 2025",
    url: "https://www.fedlex.admin.ch/eli/cc/1985/1778_1778_1778/fr",
  },
  {
    "@type": "CreativeWork",
    name: "LPP (RS 831.40)",
    url: "https://www.fedlex.admin.ch/eli/cc/1983/797_797_797/fr",
  },
  {
    "@type": "CreativeWork",
    name: "OEPL (RS 831.411)",
    url: "https://www.fedlex.admin.ch/eli/cc/1994/2379_2379_2379/fr",
  },
  {
    "@type": "CreativeWork",
    name: "LIFD (RS 642.11)",
    url: "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr",
  },
  {
    "@type": "CreativeWork",
    name: "Directives ASB sur les financements hypothécaires, décembre 2023",
    url: "https://www.finma.ch/fr/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/selbstregulierung/sbvg_rl_hypofinanzierungen_20231213.pdf",
  },
];

function logementBreadcrumb(): Record<string, unknown> {
  const url = canonical("/3eme-pilier-logement/");
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "3e pilier et achat immobilier", item: url },
    ],
  };
}

function stripContext(node: Record<string, unknown>): Record<string, unknown> {
  const rest = { ...node };
  delete rest["@context"];
  return rest;
}

function formatDate(iso: string, locale: "fr" | "en" = "fr"): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-CH" : "fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
