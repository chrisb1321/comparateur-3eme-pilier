"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV } from "@/lib/nav";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" size="icon" className="rounded-none lg:hidden" aria-label="Ouvrir le menu" />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 rounded-none">
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1 px-4" aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="border-b border-accent/20 py-3 font-heading text-xl">
              {item.label}
            </Link>
          ))}
          <Link href="/nous-contacter/" className="border-b border-accent/20 py-3 font-heading text-xl">
            Nous contacter
          </Link>
          <Link href="/a-propos/" className="py-3 font-heading text-xl">
            À propos
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
