import { chf } from "@/lib/figures";
import { cn } from "@/lib/utils";

/** Chiffres CHF en lining tabular, police dédiée — jamais l’oldstyle de Cormorant. */
export function Amount({
  value,
  className,
}: {
  value: number | string;
  className?: string;
}) {
  const n = typeof value === "number" ? value : Number(String(value).replace(/[^\d.-]/g, ""));
  return <span className={cn("font-figures tabular-nums lining-nums", className)}>{chf(n)}</span>;
}
