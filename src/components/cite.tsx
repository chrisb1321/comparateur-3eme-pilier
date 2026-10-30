import type { ReactNode } from "react";
import { officialSource, type OfficialSourceId } from "@/lib/figures";
import { cn } from "@/lib/utils";

/** Lien vers le texte officiel qui porte le chiffre. */
export function Cite({
  id,
  children,
  className,
}: {
  id: OfficialSourceId;
  children: ReactNode;
  className?: string;
}) {
  const item = officialSource(id);
  return (
    <a
      href={item.href}
      title={item.label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-semibold text-[#174462] underline decoration-[#3FD9C4] underline-offset-4",
        className,
      )}
    >
      {children}
    </a>
  );
}
