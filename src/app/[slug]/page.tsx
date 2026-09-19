import { notFound } from "next/navigation";
import { EditorialView, docMetadata } from "@/components/editorial-view";
import { getAllSlugs, getBySlug } from "@/content";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllSlugs()
    .filter((slug) => !slug.includes("/"))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getBySlug(slug);
  if (!doc) return {};
  return docMetadata(doc);
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = getBySlug(slug);
  if (!doc) notFound();
  return <EditorialView doc={doc} />;
}
