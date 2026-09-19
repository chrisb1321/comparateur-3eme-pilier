import { JsonLd } from "@/components/json-ld";
import { SITE, canonical } from "@/lib/site";

export function SiteJsonLd() {
  return (
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE.name,
          legalName: SITE.legalName,
          url: canonical("/"),
          email: SITE.email,
          foundingDate: SITE.foundingDate,
          areaServed: { "@type": "Country", name: "Switzerland" },
          availableLanguage: "fr",
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: canonical("/"),
          inLanguage: "fr-CH",
          publisher: { "@type": "Organization", name: SITE.name },
        },
      ]}
    />
  );
}
