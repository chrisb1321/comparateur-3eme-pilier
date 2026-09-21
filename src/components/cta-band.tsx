import Link from "next/link";
import { IMAGES } from "@/lib/media";
import { Frame } from "@/components/frame";

export function CtaBand({
  title = "Recevoir un comparatif 3e pilier",
  text = "Sans honoraires, sans engagement, plafonds OFAS 2026. Un seul formulaire — plus de Typeform.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative mt-16 overflow-hidden">
      <Frame
        image={IMAGES.alpes}
        fill
        className="absolute inset-0 min-h-[16rem] rounded-none"
        sizes="100vw"
        rounded={false}
      />
      <div className="absolute inset-0 bg-primary/78" />
      <div className="relative flex flex-col items-start justify-between gap-6 px-6 py-12 text-primary-foreground md:flex-row md:items-center md:px-10">
        <div>
          <p className="kicker text-accent">Action unique</p>
          <h2 className="font-heading mt-2 text-3xl tracking-tight">{title}</h2>
          <p className="mt-2 max-w-xl text-sm text-primary-foreground/85">{text}</p>
        </div>
        <Link
          href="/formulaire-3eme-pilier/"
          className="inline-flex h-12 shrink-0 items-center bg-accent px-6 text-[0.72rem] uppercase tracking-[0.2em] text-accent-foreground hover:bg-accent/90"
        >
          Demander un comparatif
        </Link>
      </div>
    </section>
  );
}
