import { chf } from "@/lib/figures";
import { cn } from "@/lib/utils";

/** Chiffres CHF en lining tabular, police dédiée — jamais l’oldstyle de Cormorant. */
export function Amount({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return <span className={cn("font-figures tabular-nums lining-nums", className)}>{chf(value)}</span>;
}
