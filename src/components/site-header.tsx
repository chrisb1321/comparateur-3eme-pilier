import Link from "next/link";
import { SITE } from "@/lib/site";
import { NAV } from "@/lib/nav";
import { MobileNav } from "@/components/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-baseline gap-2 font-heading text-lg tracking-tight">
          <span className="text-primary">Comparateur</span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
            3ème pilier
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/nous-contacter/"
            className="hidden text-sm text-foreground/80 hover:text-primary sm:inline"
          >
            Contact
          </Link>
          <Link
            href="/formulaire-3eme-pilier/"
            className={cn(buttonVariants(), "h-10 px-4")}
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
