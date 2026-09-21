import Link from "next/link";
import { IMAGES } from "@/lib/media";
import { Frame } from "@/components/frame";

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-4xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
      <Frame image={IMAGES.alpes} className="aspect-[4/3]" />
      <div>
        <p className="kicker">Erreur</p>
        <h1 className="font-heading mt-2 text-4xl">Page introuvable</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Cette URL n’existe pas sur le nouveau site. Les anciennes adresses WordPress encore utiles
          sont redirigées en 301.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center bg-primary px-6 text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
