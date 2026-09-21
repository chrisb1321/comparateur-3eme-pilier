import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DEFAULT_JOURNAL = "/tmp/comparateur-3eme-pilier-leads.jsonl";

/** Chemin du journal local (Vercel : disque /tmp, pas data/). */
export function journalPath(): string {
  const configured = (process.env.LEAD_JOURNAL_PATH ?? "").trim();
  return configured || DEFAULT_JOURNAL;
}

export async function appendJournalLine(payload: unknown): Promise<boolean> {
  const file = journalPath();
  try {
    await mkdir(path.dirname(file), { recursive: true });
    await appendFile(file, `${JSON.stringify(payload)}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("lead-journal", { path: file, error: String(error) });
    return false;
  }
}
