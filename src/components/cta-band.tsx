import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Recevez un comparatif 3e pilier 2026",
  text = "Sans honoraires, sans engagement. Formulaire HTML natif — plus de Typeform.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mt-12 rounded-2xl bg-primary px-6 py-8 text-primary-foreground md:px-10">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">{title}</h2>
          <p className="mt-2 max-w-xl text-sm text-primary-foreground/85">{text}</p>
        </div>
        <Link
          href="/formulaire-3eme-pilier/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 px-5 bg-accent text-accent-foreground hover:bg-accent/90",
          )}
        >
          Comparer maintenant
        </Link>
      </div>
    </section>
  );
}
