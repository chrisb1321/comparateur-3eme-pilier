import { notFound } from "next/navigation";
import { EditorialView, docMetadata } from "@/components/editorial-view";
import { getAllSlugs, getBySlug } from "@/content";
import { parseDelivery } from "@/lib/lead-delivery";

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

export default async function SlugPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const doc = getBySlug(slug);
  if (!doc) notFound();
  const query = await searchParams;
  const delivery = slug === "page-remerciement" ? parseDelivery(query) : undefined;
  return <EditorialView doc={doc} delivery={delivery} />;
}
