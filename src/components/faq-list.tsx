import type { FaqItem } from "@/content/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <p className="kicker">Questions</p>
      <h2 id="faq-heading" className="font-heading mt-2 text-3xl tracking-tight">
        Questions fréquentes
      </h2>
      <div className="mt-6 divide-y divide-accent/25 border-y border-accent/25">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="cursor-pointer list-none font-heading text-xl text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span className="mt-1 text-accent transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/90">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
