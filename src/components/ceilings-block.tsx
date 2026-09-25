import { Amount } from "@/components/amount";
import { CEILING_NOTE, YEARS } from "@/lib/figures";
import { cn } from "@/lib/utils";

export function CeilingsBlock({
  tone = "hero",
}: {
  tone?: "hero" | "paper";
}) {
  const y26 = YEARS[2026];
  const y27 = YEARS[2027];
  const hero = tone === "hero";

  return (
    <figure
      data-testid="chiffres-alignes"
      className={cn(
        "overflow-hidden rounded-[20px]",
        hero ? "border border-white/18 bg-white/6 text-white" : "border border-[#DCE6ED] bg-white",
      )}
    >
      <figcaption
        className={cn(
          "px-5 pt-5 text-[13px] font-semibold tracking-[0.14em] uppercase",
          hero ? "text-[#7FE3D3]" : "text-[#23597C]",
        )}
      >
        Plafonds 3a · art. 7 OPP 3
      </figcaption>
      <table className="mt-2 w-full border-collapse font-figures tabular-nums lining-nums text-left">
        <thead>
          <tr className={hero ? "text-primary-foreground/70" : "text-muted-foreground"}>
            <th className="px-4 pb-2 pt-1 text-[0.62rem] font-medium uppercase tracking-[0.16em]">Situation</th>
            <th className="px-3 pb-2 pt-1 text-right text-[0.62rem] font-medium uppercase tracking-[0.16em]">
              2026
            </th>
            <th className="px-4 pb-2 pt-1 text-right text-[0.62rem] font-medium uppercase tracking-[0.16em]">
              2027
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={hero ? "border-t border-accent/25" : "border-t border-border"}>
            <th
              scope="row"
              className={cn(
                "px-4 py-3 text-left text-xs font-normal tracking-wide",
                hero ? "text-primary-foreground/85" : "text-foreground",
              )}
            >
              Avec 2e pilier
            </th>
            <td className={cn("px-3 py-3 text-right text-2xl md:text-3xl", hero && "text-primary-foreground")}>
              <Amount value={y26.pillar3aWithLpp} />
            </td>
            <td className={cn("px-4 py-3 text-right text-2xl md:text-3xl", hero && "text-primary-foreground")}>
              <Amount value={y27.pillar3aWithLpp} />
            </td>
          </tr>
          <tr className={hero ? "border-t border-accent/25" : "border-t border-border"}>
            <th
              scope="row"
              className={cn(
                "px-4 py-3 text-left text-xs font-normal tracking-wide",
                hero ? "text-primary-foreground/85" : "text-foreground",
              )}
            >
              Sans 2e pilier
            </th>
            <td className={cn("px-3 py-3 text-right text-2xl md:text-3xl", hero && "text-primary-foreground")}>
              <Amount value={y26.pillar3aWithoutLpp} />
            </td>
            <td className={cn("px-4 py-3 text-right text-2xl md:text-3xl", hero && "text-primary-foreground")}>
              <Amount value={y27.pillar3aWithoutLpp} />
            </td>
          </tr>
        </tbody>
      </table>
      <p
        className={cn(
          "border-t px-4 py-3 text-[0.7rem] leading-relaxed",
          hero ? "border-accent/25 text-primary-foreground/70" : "border-border text-muted-foreground",
        )}
      >
        {CEILING_NOTE} Grande cotisation : 20 % du revenu d’activité, dans cette limite.
      </p>
    </figure>
  );
}
