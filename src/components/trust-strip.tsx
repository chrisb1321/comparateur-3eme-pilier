import Link from "next/link";

export function ProcessSteps() {
  const steps = [
    {
      n: "01",
      title: "Vous indiquez votre situation",
      text: "Nom, date de naissance, épargne visée, e-mail et téléphone.",
    },
    {
      n: "02",
      title: "Le comparatif pose les écarts",
      text: "3a ou 3b, banque ou assurance : frais, souplesse et garanties.",
    },
    {
      n: "03",
      title: "Vous choisissez",
      text: "La suite se fait avec un conseiller.",
    },
  ];
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.n}
          className={`flex min-h-0 flex-col gap-3 rounded-[20px] border p-8 max-[1100px]:p-6 ${
            index === 2 ? "border-[#174462] bg-[#174462] text-white" : "border-[#DCE6ED] bg-white text-[#10324A]"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <p className={`text-sm ${index === 2 ? "text-white/70" : "text-[#6B8293]"}`}>{step.n}</p>
            <span className={`flex size-14 items-center justify-center rounded-[14px] text-lg font-semibold ${index === 2 ? "bg-[rgba(191,243,234,0.14)] text-[#7FE3D3]" : "bg-[#EAF4F8] text-[#174462]"}`}>
              {index + 1}
            </span>
          </div>
          <p className={`text-xs font-semibold tracking-[0.12em] uppercase ${index === 2 ? "text-[#7FE3D3]" : "text-[#23597C]"}`}>
            Étape
          </p>
          <h3 className={`text-[28px] font-semibold max-[1100px]:text-2xl ${index === 2 ? "text-white" : "text-[#10324A]"}`}>{step.title}</h3>
          <p className={`text-base leading-relaxed ${index === 2 ? "text-white/85" : "text-[#4A6275]"}`}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProofLine() {
  return (
    <p className="text-sm leading-relaxed text-muted-foreground">
      Lecture neutre, calée sur l’OFAS — pas un palmarès.{" "}
      <Link href="/a-propos/" className="text-primary underline decoration-accent underline-offset-4">
        Méthode et limites
      </Link>
      .
    </p>
  );
}
