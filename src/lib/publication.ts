/** Jour éditorial : un article daté après cette date n’est pas public. */
export const PUBLICATION_CUTOFF = "2026-09-26";

export function calendarDay(iso: string): string {
  return iso.slice(0, 10);
}

export function isPublicPostDate(published: string): boolean {
  return calendarDay(published) <= PUBLICATION_CUTOFF;
}

/** Même jour calendaire que `calendarDay`, fuseau Zurich, midi pour éviter le décalage. */
export function formatEditorialDate(iso: string): string {
  const day = calendarDay(iso);
  return new Intl.DateTimeFormat("fr-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Zurich",
  }).format(new Date(`${day}T12:00:00+02:00`));
}
