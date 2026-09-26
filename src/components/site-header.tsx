"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/lib/nav";
import { CTA_MENU } from "@/lib/site";

const PRIMARY = [
  { href: "/#parcours", label: "Comment ça marche" },
  { href: "/3eme-pilier-a-ou-b/", label: "3a ou 3b" },
  { href: "/deductions-fiscales-3eme-pilier/", label: "Déductions" },
  { href: "/#faq", label: "FAQ" },
] as const;

function SwissMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#DA291C" />
      <rect x="13" y="6" width="6" height="20" fill="#fff" />
      <rect x="6" y="13" width="20" height="6" fill="#fff" />
    </svg>
  );
}

export function BrandLockup({ size = 26 }: { size?: number }) {
  return (
    <>
      <SwissMark size={size} />
      Comparateur <span className="text-[#7FE3D3]">3e pilier</span>
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const extra = NAV.filter((item) => !PRIMARY.some((link) => link.href === item.href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#174462] text-white transition-shadow ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(3,22,38,0.6)]" : ""
      }`}
    >
      <div className="flex h-9 items-center justify-center gap-2 bg-[#3FD9C4] px-4 text-center text-sm font-medium text-[#062B40] max-[1100px]:h-8 max-[1100px]:text-[13px]">
        <b className="font-semibold">Sans honoraires</b>
        <span className="max-[1100px]:hidden">· rappel sous deux jours ouvrés · aucune obligation de souscrire</span>
      </div>
      <nav
        className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between gap-8 px-12 max-[1100px]:h-16 max-[1100px]:px-4"
        aria-label="Principal"
      >
        <Link href="/" className="flex items-center gap-2.5 text-xl font-semibold whitespace-nowrap text-white max-[1100px]:text-[17px]" onClick={() => setOpen(false)}>
          <BrandLockup />
        </Link>
        <div className="hidden items-center gap-8 min-[1101px]:flex">
          {PRIMARY.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] font-semibold text-white/90 hover:text-[#BFF3EA]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2.5 min-[1101px]:flex">
          <Link
            href="/nous-contacter/"
            className="inline-flex min-h-11 items-center rounded-full border border-white/45 px-[18px] text-[15px] font-semibold text-white hover:text-[#BFF3EA]"
          >
            Contact
          </Link>
          <Link
            href="/formulaire-3eme-pilier/"
            className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-[#BFF3EA] to-[#4FDCC7] px-5 text-[15px] font-semibold text-[#062B40] hover:brightness-95"
          >
            {CTA_MENU}
          </Link>
        </div>
        <button
          type="button"
          className="hidden size-11 items-center justify-center rounded-full border border-white/45 max-[1100px]:flex"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>
      {open ? (
        <div className="flex max-h-[calc(100vh-96px)] flex-col overflow-auto border-t border-white/12 px-4 pt-2 pb-6 min-[1101px]:hidden">
          {[...PRIMARY, ...extra].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[60px] items-center justify-between border-b border-white/12 text-xl text-white"
            >
              {item.label}
              <span className="text-[#7FE3D3]">→</span>
            </Link>
          ))}
          <Link
            href="/formulaire-3eme-pilier/"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex min-h-[54px] items-center justify-center rounded-full bg-gradient-to-r from-[#BFF3EA] to-[#4FDCC7] text-[17px] font-semibold text-[#062B40]"
          >
            {CTA_MENU}
          </Link>
          <Link
            href="/nous-contacter/"
            onClick={() => setOpen(false)}
            className="mt-2.5 inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/45 text-[17px] font-semibold text-white"
          >
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
}
