import Link from "next/link";
import { SITE } from "@/lib/site";
import { NAV } from "@/lib/nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-accent/25 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-heading text-[1.35rem] text-primary">Comparateur</span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-accent">
            3ème pilier · Suisse
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8rem] tracking-wide text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/nous-contacter/"
            className="hidden text-[0.8rem] tracking-wide text-foreground/70 hover:text-primary sm:inline"
          >
            Contact
          </Link>
          <Link
            href="/formulaire-3eme-pilier/"
            className="inline-flex h-10 items-center border border-primary bg-primary px-4 text-[0.72rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Comparer
          </Link>
          <MobileNav />
        </div>
      </div>
      <p className="sr-only">{SITE.name}</p>
    </header>
  );
}
