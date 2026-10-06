import Link from "next/link";
import { AUTHOR, AUTHOR_GAPS } from "@/lib/editorial";

/** Même identité que le JSON-LD Person : nom, fonction, URL. Rien de plus. */
export function AuthorBox({
  variant = "compact",
  locale = "fr",
}: {
  variant?: "compact" | "page";
  locale?: "fr" | "en";
}) {
  const href = locale === "en" ? "/en/christophe-bouin/" : AUTHOR.href;
  const role = locale === "en" ? "head of content and of the comparison" : AUTHOR.role.toLowerCase();
  return (
    <aside className="mt-10 rounded-[18px] border border-[#DCE6ED] bg-white px-5 py-4">
      <p className="text-sm leading-relaxed text-[#10324A]">
        {locale === "en" ? "Written or reviewed by" : "Rédigé ou vérifié par"}{" "}
        <Link href={href} className="font-semibold text-[#174462] underline underline-offset-4">
          {AUTHOR.name}
        </Link>
        , {role}.
      </p>
      {variant === "page" ? (
        <>
          <p className="mt-3 text-sm leading-relaxed text-[#10324A]">
            {locale === "en" ? "Contact" : "Contact"} : {AUTHOR.email}.{" "}
            {locale === "en" ? "The service is described on" : "Le service est décrit sur"}{" "}
            <Link href={locale === "en" ? "/en/a-propos/" : "/a-propos/"} className="font-semibold text-[#174462] underline underline-offset-4">
              {locale === "en" ? "about" : "à propos"}
            </Link>
            .
          </p>
          <p className="mt-4 text-sm font-semibold text-[#10324A]">{locale === "en" ? "Not established in the repository" : "Non établi dans le dépôt"}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#4A6275]">
            {(locale === "en"
              ? [
                  "Verified portrait",
                  "Qualifications and years of experience",
                  "Intermediary status and any FINMA registration",
                  "TODO — AFA diploma announced on the historical site — not verified. Do not display it until proof is on file.",
                ]
              : AUTHOR_GAPS
            ).map((gap) => (
              <li key={gap}>{gap}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {locale === "en"
            ? "Portrait, qualifications and intermediary status are not shown: they are not established in the site’s sources. General information, not personal advice."
            : "Portrait, qualifications et statut d’intermédiaire ne sont pas affichés : ils ne sont pas établis dans les sources du site. Information générale, pas un conseil personnalisé."}
        </p>
      )}
    </aside>
  );
}
