"use client";

import { useMemo, useState } from "react";
import {
  COUNCIL_3A_2027_URL,
  FIGURES,
  NOTE_2027,
  NOTE_2027_EN,
  PILLAR_3A_WITHOUT_LPP_RATE,
  SOURCES,
  chf,
  pillar3aCeiling2026,
} from "@/lib/figures";

const SOURCE = SOURCES.find((source) => source.id === "ofas-amounts-2026");

export function CeilingCalculator({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const en = locale === "en";
  const [withLpp, setWithLpp] = useState<"oui" | "non">("oui");
  const [income, setIncome] = useState("");

  const parsed = income.trim() === "" ? null : Number(income.replace(/\s/g, "").replace(",", "."));
  const incomeOk = parsed !== null && Number.isFinite(parsed) && parsed >= 0;
  const affiliated = withLpp === "oui";
  const ceiling = incomeOk || affiliated ? pillar3aCeiling2026(affiliated, incomeOk ? parsed : 0) : null;
  const monthly = ceiling === null ? null : ceiling / 12;

  const formula = useMemo(() => {
    if (!affiliated && !incomeOk) {
      return en
        ? "Enter income subject to OASI to calculate the large contribution."
        : "Saisissez un revenu soumis à l’AVS pour calculer la grande cotisation.";
    }
    if (affiliated) {
      return en
        ? `2nd-pillar institution: yes. Fixed ceiling ${chf(FIGURES.pillar3aWithLpp)}. Income does not raise it.`
        : `Institution du 2e pilier : oui. Plafond fixe ${chf(FIGURES.pillar3aWithLpp)}. Le revenu ne l’augmente pas.`;
    }
    return en
      ? `2nd-pillar institution: no. min(income × ${PILLAR_3A_WITHOUT_LPP_RATE * 100}%, ${chf(FIGURES.pillar3aWithoutLpp)}), rounded to the nearest franc.`
      : `Institution du 2e pilier : non. min(revenu × ${PILLAR_3A_WITHOUT_LPP_RATE * 100} %, ${chf(FIGURES.pillar3aWithoutLpp)}), arrondi au franc le plus proche.`;
  }, [affiliated, incomeOk, en]);

  return (
    <form className="mt-10 space-y-6 rounded-[20px] border border-[#DCE6ED] bg-[#F5F8FA] p-6" onSubmit={(event) => event.preventDefault()}>
      <fieldset className="space-y-3">
        <legend className="text-sm font-semibold text-[#10324A]">{en ? "2nd-pillar institution" : "Institution du 2e pilier"}</legend>
        <label className="flex items-center gap-2 text-sm">
          <input type="radio" name="lpp" checked={withLpp === "oui"} onChange={() => setWithLpp("oui")} />
          {en ? "Yes" : "Oui"}
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="radio" name="lpp" checked={withLpp === "non"} onChange={() => setWithLpp("non")} />
          {en ? "No" : "Non"}
        </label>
      </fieldset>
      <label className="block text-sm font-semibold text-[#10324A]">
        {en ? "Annual income subject to OASI (CHF)" : "Revenu annuel soumis à l’AVS (CHF)"}
        <input
          className="mt-2 w-full rounded-xl border border-[#DCE6ED] bg-white px-3 py-2 font-normal"
          inputMode="decimal"
          name="revenu"
          value={income}
          onChange={(event) => setIncome(event.target.value)}
        />
      </label>
      <div className="space-y-2 text-sm leading-relaxed text-[#10324A]">
        <p>
          <span className="font-semibold">{en ? "Year: " : "Année : "}</span>2026
        </p>
        <p>
          <span className="font-semibold">{en ? "Ceiling: " : "Plafond : "}</span>
          {ceiling === null ? "—" : chf(ceiling)}
        </p>
        <p>
          <span className="font-semibold">{en ? "Formula: " : "Formule : "}</span>
          {formula}
        </p>
        <p>
          <span className="font-semibold">{en ? "Source: " : "Source : "}</span>
          {SOURCE ? (
            <a className="font-semibold text-[#174462] underline underline-offset-4" href={SOURCE.href} rel="noopener noreferrer">
              {SOURCE.label}
            </a>
          ) : null}
        </p>
        <p>
          {en ? "2027 ceilings, shown beside this 2026 result and not used in the formula: " : "Plafonds 2027, à côté de ce résultat 2026, hors de la formule : "}
          {en ? NOTE_2027_EN : NOTE_2027}.{" "}
          <a className="font-semibold text-[#174462] underline underline-offset-4" href={COUNCIL_3A_2027_URL} rel="noopener noreferrer">
            {en ? "Federal Council release, 2 October 2026" : "Communiqué du Conseil fédéral, 2 octobre 2026"}
          </a>
          .
        </p>
        <p className="text-[#4A6275]">
          {en
            ? "General information. This is not a tax calculation, a cantonal case, or advice."
            : "Information générale. Ce n’est pas un calcul d’impôt, ni une situation cantonale, ni un conseil."}
        </p>
      </div>
      {ceiling !== null && ceiling > 0 && monthly !== null ? (
        <div className="space-y-2 border-t border-[#DCE6ED] pt-4 text-sm leading-relaxed text-[#10324A]">
          <p className="font-semibold">{en ? "Hypothetical split of the ceiling" : "Division hypothétique du plafond"}</p>
          <p>
            {en
              ? "Hypothesis, named as such: split the calculated ceiling into equal parts. This is not payment advice, not a debit, and not a projected capital."
              : "Hypothèse, nommée comme telle : répartir le plafond calculé en parts égales. Ce n’est pas un conseil de versement, pas un prélèvement, pas un capital projeté."}
          </p>
          <p>{en ? "Hypothetical yearly payment" : "Versement annuel hypothétique"} : {chf(ceiling)}.</p>
          <p>
            {en ? "Hypothetical monthly payment" : "Versement mensuel hypothétique"} : {chf(monthly)} (
            {en ? "ceiling ÷ 12, shown to the franc" : "plafond ÷ 12, affiché au franc"}).{" "}
            {en ? "No rate of return is applied." : "Aucun taux de rendement n’est appliqué."}
          </p>
        </div>
      ) : null}
    </form>
  );
}
