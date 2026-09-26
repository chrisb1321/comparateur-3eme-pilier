import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-hero on-navy min-h-[50vh]">
      <div className="page-hero-in">
        <p className="kicker">Erreur</p>
        <h1 className="font-heading">Page introuvable</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
          Cette URL n’existe pas sur le nouveau site. Les anciennes adresses WordPress encore utiles
          sont redirigées en 301.
        </p>
        <Link href="/" className="btn-pill mt-8">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
