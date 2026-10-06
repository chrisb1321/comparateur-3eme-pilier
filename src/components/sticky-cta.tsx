"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEnglishPath } from "@/components/locale-shell";

const HIDDEN = new Set([
  "/formulaire-3eme-pilier",
  "/formulaire-3eme-pilier/",
  "/nous-contacter",
  "/nous-contacter/",
  "/page-remerciement",
  "/page-remerciement/",
]);

export function StickyCta() {
  const pathname = usePathname() || "/";
  const english = isEnglishPath(pathname);
  const bare = english ? pathname.replace(/^\/en/, "") || "/" : pathname;
  if (HIDDEN.has(bare) || HIDDEN.has(pathname)) return null;

  return (
    <div
      data-testid="sticky-cta"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#174462] p-3 md:hidden"
    >
      <Link
        href={english ? "/en/formulaire-3eme-pilier/" : "/formulaire-3eme-pilier/"}
        className="btn-pill w-full"
      >
        {english ? "Request a comparison" : "Demander un comparatif"}
      </Link>
    </div>
  );
}
