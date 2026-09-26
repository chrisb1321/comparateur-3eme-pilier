import type { Block } from "@/content/types";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return (
              <p key={index} className="text-base leading-relaxed text-foreground/90">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={index}
                className="font-heading mt-12 text-3xl leading-tight text-[#10324A] md:text-4xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className="mt-8 text-lg font-semibold text-foreground">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc space-y-2 pl-5 text-foreground/90">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal space-y-2 pl-5 text-foreground/90">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
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
                    {block.rows.map((row) => (
                      <tr key={row.join("-")} className="border-b border-border/80">
                        {row.map((cell) => (
                          <td key={cell} className="px-3 py-2 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {block.caption ? (
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="rounded-[18px] border border-[#DCE6ED] bg-white px-5 py-4"
              >
                <p className="text-sm font-semibold text-primary">{block.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/90">{block.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
