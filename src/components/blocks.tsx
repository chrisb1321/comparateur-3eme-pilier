import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/content/types";

/** Liens markdown, y compris au milieu d’une phrase. */
export function RichText({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const label = match[1];
    const href = match[2];
    const className = "font-semibold text-[#174462] underline decoration-[#3FD9C4] underline-offset-4";
    nodes.push(
      href.startsWith("/") ? (
        <Link key={index} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a key={index} href={href} className={className} rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    last = match.index + match[0].length;
    index += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  if (nodes.length === 0) return text;
  return nodes;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="text-base leading-relaxed text-foreground/90">
                <RichText text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                id={block.id}
                className="font-heading mt-12 scroll-mt-36 text-3xl leading-tight text-[#10324A] md:text-4xl"
              >
                <RichText text={block.text} />
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-8 text-lg font-semibold text-foreground">
                <RichText text={block.text} />
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-foreground/90">
                {block.items.map((item, itemIndex) => (
                  <li key={`${index}-${itemIndex}`} className="leading-relaxed">
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-5 text-foreground/90">
                {block.items.map((item, itemIndex) => (
                  <li key={`${index}-${itemIndex}`} className="leading-relaxed">
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <figure key={index} className="my-6 overflow-x-auto">
                <table className="w-full min-w-[28rem] border-collapse font-figures text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#DCE6ED] bg-[#F5F8FA]">
                      {block.headers.map((header) => (
                        <th key={header} className="px-3 py-2 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${index}-${rowIndex}`} className="border-b border-border/80">
                        {row.map((cell, cellIndex) => (
                          <td key={`${index}-${rowIndex}-${cellIndex}`} className="px-3 py-2 align-top">
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {block.caption ? (
                  <figcaption className="mt-2 text-xs text-muted-foreground">{block.caption}</figcaption>
                ) : null}
              </figure>
            );
          case "callout":
            return (
              <aside key={index} className="rounded-[18px] border border-[#DCE6ED] bg-white px-5 py-4">
                <p className="text-sm font-semibold text-primary">
                  <RichText text={block.title} />
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
