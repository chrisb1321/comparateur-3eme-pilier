import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SITE, canonical } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonicalHost),
  title: {
    default: "Comparateur 3ème pilier 2026 — plafonds 7’258 / 36’288",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: canonical("/") },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: canonical("/"),
    siteName: SITE.name,
    title: "Comparateur 3ème pilier 2026",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-CH" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <SiteJsonLd />
      </body>
    </html>
  );
}
