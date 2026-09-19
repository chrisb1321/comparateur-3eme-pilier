import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl">Page introuvable</h1>
      <p className="mt-3 text-muted-foreground">
        Cette URL n’existe pas sur le nouveau site. Les anciennes adresses WordPress encore utiles
        sont redirigées en 301.
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-6 inline-flex h-11 px-5")}>
        Retour à l’accueil
      </Link>
    </div>
  );
}
