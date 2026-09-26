import Link from "next/link";

export function CtaBand({
  title = "Recevoir un comparatif 3e pilier",
  text = "Sans honoraires, sans engagement, plafonds OFAS 2026. Un seul formulaire — plus de Typeform.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="navy-band on-navy mt-16 rounded-[28px]">
      <div className="flex flex-col items-start justify-between gap-6 px-8 py-12 md:flex-row md:items-center md:px-10">
        <div>
          <p className="kicker">Comparatif</p>
          <h2 className="font-heading text-4xl leading-[1.05] text-white md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-xl text-base text-white/85">{text}</p>
        </div>
        <Link href="/formulaire-3eme-pilier/" className="btn-pill shrink-0">
          Demander un comparatif
        </Link>
      </div>
    </section>
  );
}
