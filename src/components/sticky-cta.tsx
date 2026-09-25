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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#174462] p-3 md:hidden"
    >
      <Link
        href="/formulaire-3eme-pilier/"
        className="btn-pill w-full"
      >
        Demander un comparatif
      </Link>
    </div>
  );
}
