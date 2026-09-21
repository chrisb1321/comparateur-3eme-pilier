import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans, Source_Sans_3 } from "next/font/google";
import { AttributionBoot } from "@/components/attribution-boot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { StickyCta } from "@/components/sticky-cta";
import { YEAR_SPAN } from "@/lib/figures";
import { SITE, canonical } from "@/lib/site";
import { IMAGES } from "@/lib/media";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const figures = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
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
    <html lang="fr-CH" className={`${sans.variable} ${serif.variable} ${figures.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 md:pb-0">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Aller au contenu
        </a>
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
