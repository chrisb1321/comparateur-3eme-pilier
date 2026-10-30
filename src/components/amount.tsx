import { Cite } from "@/components/cite";
import { chf, type OfficialSourceId } from "@/lib/figures";
import { cn } from "@/lib/utils";

/** Chiffres CHF en lining tabular, police dédiée — jamais l’oldstyle de Cormorant. */
export function Amount({
  value,
  source,
  className,
}: {
  value: number | string;
  /** Texte officiel qui fixe ce montant. Le chiffre devient le lien. */
  source?: OfficialSourceId;
  className?: string;
}) {
  const n = typeof value === "number" ? value : Number(String(value).replace(/[^\d.-]/g, ""));
  const figures = cn("font-figures tabular-nums lining-nums", className);
  if (source) {
    return (
      <Cite id={source} className={figures}>
        {chf(n)}
      </Cite>
    );
  }
  return <span className={figures}>{chf(n)}</span>;
}
