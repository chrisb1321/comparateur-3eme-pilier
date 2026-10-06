"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function isEnglishPath(path: string): boolean {
  return path === "/en" || path.startsWith("/en/");
}

/** Skip link and document language. Does not wrap the page, so the LCP heading stays in the server HTML. */
export function SkipLink() {
  const path = usePathname() || "/";
  const english = isEnglishPath(path);

  useEffect(() => {
    document.documentElement.lang = english ? "en" : "fr-CH";
  }, [english]);

  return (
    <a
      href="#contenu"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
    >
      {english ? "Skip to content" : "Aller au contenu"}
    </a>
  );
}
