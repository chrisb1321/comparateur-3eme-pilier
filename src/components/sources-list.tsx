import { NOTE_2027, NOTE_2027_EN, REVIEW_LABEL, SOURCES } from "@/lib/figures";

const EN_LABELS: Record<string, { label: string; note: string }> = {
  "ofas-3a": {
    label: "FSIO — The third pillar (article 7 OPP 3)",
    note: "Small and large contributions. Pillar 3a buy-backs concern gaps from 2025. The first buy-back is possible in 2026.",
  },
  "ofas-amounts-2026": {
    label: "FSIO — Amounts valid on 1 January 2026",
    note: `OASI pensions, BVG thresholds and 2026 pillar 3a ceilings. Last editorial check: ${REVIEW_LABEL}.`,
  },
  "cf-3a-2027": {
    label: "Federal Council — pillar 3a deduction from 1 January 2027",
    note: "Press release of 2 October 2026: 7,373 francs with a 2nd pillar, 36,864 francs at most without one. The 20% rate is unchanged.",
  },
  "ofas-cotisation": {
    label: "FSIO — Your third-pillar contribution",
    note: "Maximum with a 2nd pillar, or 20% of income inside the limit without one. The credit counts on 31 December for the tax year.",
  },
  "afc-circ-18a": {
    label: "FTA — Circular 18a (taxation of pillar 3a)",
    note: "Tax on capital at withdrawal, staggering, transfer to the 2nd pillar.",
  },
  "afc-3b": {
    label: "FTA — Pillar 3b life policies that can be surrendered",
    note: "Flexible provision is not one single tax story. A policy follows the contract and the canton.",
  },
  "ofas-beneficiaires": {
    label: "FSIO — OPP 3 change (beneficiaries)",
    note: "The FSIO announced a wider choice of pillar 3a beneficiaries from 1 June 2027. The applicable detail is on that page, not in a ceiling figure.",
  },
  "avs-ai": {
    label: "OASI/disability information centre",
    note: "Pensions, the 13th old-age pension, reference age and the transitional generation.",
  },
};

export function SourcesList({ locale = "fr" }: { locale?: "fr" | "en" }) {
  return (
    <section className="mt-12 border-t border-[#DCE6ED] pt-8">
      <p className="kicker">{locale === "en" ? "Official sources" : "Sources officielles"}</p>
      <h2 className="sr-only">{locale === "en" ? "Official sources" : "Sources officielles"}</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {SOURCES.map((source) => {
          const english = EN_LABELS[source.id];
          return (
            <li key={source.id}>
              <a
                href={source.href}
                className="font-medium text-primary underline-offset-4 hover:underline"
                rel="noopener noreferrer"
              >
                {locale === "en" && english ? english.label : source.label}
              </a>
              <span className="text-muted-foreground"> — {locale === "en" && english ? english.note : source.note}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        {locale === "en" ? (
          <>
            Editorial review on {REVIEW_LABEL}. Pillar 3a ceilings cited for 2026, from the FSIO table. {NOTE_2027_EN}.
            Cantonal pillar 3b amounts can change from one tax notice to the next. This is not personal advice.
          </>
        ) : (
          <>
            Revue éditoriale du {REVIEW_LABEL}. Plafonds 3a cités pour 2026, d’après le tableau OFAS. {NOTE_2027}. Les
            montants cantonaux 3b peuvent changer d’une notice fiscale à l’autre. Ceci n’est pas un conseil
            personnalisé.
          </>
        )}
      </p>
    </section>
  );
}
