import { SOURCES } from "@/lib/figures";

export function SourcesList() {
  return (
    <section className="mt-12 border-t border-accent/25 pt-8">
      <p className="kicker">Sources officielles</p>
      <h2 className="sr-only">Sources officielles</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {SOURCES.map((source) => (
          <li key={source.id}>
            <a
              href={source.href}
              className="font-medium text-primary underline-offset-4 hover:underline"
              rel="noopener noreferrer"
            >
              {source.label}
            </a>
            <span className="text-muted-foreground"> — {source.note}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        Revue éditoriale du 19 septembre 2026. Les montants cantonaux 3b peuvent changer d’une
        notice fiscale à l’autre : vérifiez l’année en cours. Ceci n’est pas un conseil
        personnalisé.
      </p>
    </section>
  );
}
