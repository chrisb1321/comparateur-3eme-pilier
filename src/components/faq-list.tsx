import type { FaqItem } from "@/content/types";
import Link from "next/link";
import { CTA_CALLBACK } from "@/lib/site";

export function FaqList({
  items,
  ctaHref = "/formulaire-3eme-pilier/",
}: {
  items: FaqItem[];
  ctaHref?: string;
}) {
  if (!items.length) return null;
  return (
    <section id="faq" className="mt-16 scroll-mt-36" aria-labelledby="faq-heading">
      <div className="grid items-start gap-12 lg:grid-cols-[440px_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-36">
          <p className="kicker">Questions</p>
          <h2 id="faq-heading" className="font-heading mb-5 text-[56px] leading-[1.05] text-[#10324A] max-[1100px]:text-[38px]">
            Vos questions, <em>nos réponses</em>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#4A6275] max-[1100px]:hidden">
            Tout ce qu’on nous demande avant de lancer un comparatif 3e pilier.
          </p>
          <aside className="flex flex-col gap-4 rounded-[22px] bg-[#174462] p-7 text-white">
            <p className="text-xl font-semibold">Une autre question ?</p>
            <p className="text-[15px] text-white/80">Christophe Bouin vous rappelle sous deux jours ouvrés.</p>
            <Link href={ctaHref} className="btn-pill whitespace-normal px-5 text-center leading-snug">
              {CTA_CALLBACK}
            </Link>
          </aside>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details key={item.question} className="group overflow-hidden rounded-[18px] border border-[#DCE6ED] bg-[#F5F8FA] open:border-[#23597C] open:bg-white">
              <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-4 px-[22px] py-[18px] text-[19px] font-semibold text-[#10324A] max-[1100px]:text-[17px] focus-visible:outline-none">
                {item.question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#174462] group-open:bg-[#174462] group-open:text-white">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <div className="px-[22px] pb-[22px]">
                <p className="text-base leading-relaxed text-[#4A6275]">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
