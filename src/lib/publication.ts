export function calendarDay(iso: string): string {
  return iso.slice(0, 10);
}

/** Jour civil à Zurich. Un article est public dès sa date, sans cutoff figé. */
export function zurichToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Zurich",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isPublicPostDate(published: string, now = new Date()): boolean {
  return calendarDay(published) <= zurichToday(now);
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
