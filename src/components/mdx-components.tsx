import { Amount } from "@/components/amount";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border border-accent/30 bg-card px-4 py-4">
      <p className="text-sm font-semibold text-primary">{title}</p>
      <div className="mt-1 text-sm leading-relaxed text-foreground/90">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  Amount,
  Callout,
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="font-heading mt-12 text-3xl tracking-tight text-foreground" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="mt-8 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc space-y-2 pl-5 text-foreground/90" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal space-y-2 pl-5 text-foreground/90" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="leading-relaxed" {...props} />,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="text-primary underline decoration-accent underline-offset-4" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse font-figures tabular-nums lining-nums text-left text-sm" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="border-b border-border bg-muted/60 px-3 py-2 font-semibold" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => <td className="border-b border-border/80 px-3 py-2 align-top" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold" {...props} />,
};
