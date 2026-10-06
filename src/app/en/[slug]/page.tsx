import { notFound } from "next/navigation";
import { EditorialView, docMetadata } from "@/components/editorial-view";
import { getAllSlugs } from "@/content";
import { getEnglishDoc, missingEnglish } from "@/content/en";

type Params = { slug: string };

export function generateStaticParams() {
  const slugs = getAllSlugs().filter((slug) => !slug.includes("/"));
  const missing = missingEnglish(slugs);
  if (missing.length) {
    throw new Error(`Pages anglaises manquantes : ${missing.join(", ")}`);
  }
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getEnglishDoc(slug);
  if (!doc) return {};
  return docMetadata(doc, "en");
}

export default async function EnglishSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getEnglishDoc(slug);
  if (!doc) notFound();
  return <EditorialView doc={doc} locale="en" />;
}
