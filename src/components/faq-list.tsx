import type { FaqItem } from "@/content/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-heading text-2xl tracking-tight">
        Questions fréquentes
      </h2>
      <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
        {items.map((item) => (
          <details key={item.question} className="group px-4 py-3">
            <summary className="cursor-pointer list-none text-base font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span className="mt-0.5 text-muted-foreground group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
