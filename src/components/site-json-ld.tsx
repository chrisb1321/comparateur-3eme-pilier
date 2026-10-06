import { JsonLd } from "@/components/json-ld";
import { ORGANIZATION_LD, WEBSITE_LD } from "@/lib/schema";

export function SiteJsonLd() {
  return <JsonLd data={[ORGANIZATION_LD, WEBSITE_LD]} />;
}
