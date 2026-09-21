"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN = new Set([
  "/formulaire-3eme-pilier",
  "/formulaire-3eme-pilier/",
  "/nous-contacter",
  "/nous-contacter/",
  "/page-remerciement",
  "/page-remerciement/",
]);

export function StickyCta() {
  const pathname = usePathname();
  if (HIDDEN.has(pathname)) return null;

  return (
    <div
      data-testid="sticky-cta"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-accent/40 bg-background/95 p-3 backdrop-blur-md md:hidden"
    >
      <Link
        href="/formulaire-3eme-pilier/"
        className="flex h-12 items-center justify-center bg-accent text-[0.72rem] uppercase tracking-[0.2em] text-accent-foreground"
      >
        Demander un comparatif
      </Link>
    </div>
  );
}
