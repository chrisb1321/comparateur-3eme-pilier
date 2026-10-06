import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { AttributionBoot } from "@/components/attribution-boot";
import { SkipLink } from "@/components/locale-shell";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { StickyCta } from "@/components/sticky-cta";
import { YEAR_SPAN } from "@/lib/figures";
import { SITE, canonical } from "@/lib/site";
import { IMAGES } from "@/lib/media";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonicalHost),
  title: {
    default: `Comparateur 3ème pilier ${YEAR_SPAN} — plafonds 7’258 / 36’288`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: canonical("/"),
    siteName: SITE.name,
    title: `Comparateur 3ème pilier ${YEAR_SPAN}`,
    description: SITE.description,
    images: [{ url: IMAGES.hero.src, width: IMAGES.hero.width, height: IMAGES.hero.height, alt: IMAGES.hero.alt }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-CH" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background pt-[96px] pb-20 text-foreground min-[1101px]:pt-[124px] md:pb-0">
        <SkipLink />
        <AttributionBoot />
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyCta />
        <SiteJsonLd />
      </body>
    </html>
  );
}
