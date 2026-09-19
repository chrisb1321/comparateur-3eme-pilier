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
          <Button variant="outline" size="icon" className="lg:hidden" aria-label="Ouvrir le menu" />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-3 px-4" aria-label="Mobile">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-base py-1">
              {item.label}
            </Link>
          ))}
          <Link href="/nous-contacter/" className="text-base py-1">
            Nous contacter
          </Link>
          <Link href="/a-propos/" className="text-base py-1">
            À propos
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
