import type { Block, FaqItem } from "@/content/types";
import { chf, FIGURES, NOTE_2027_EN, REVIEW_LABEL } from "@/lib/figures";

export const PENDING = NOTE_2027_EN;
export const petit = chf(FIGURES.pillar3aWithLpp);
export const grand = chf(FIGURES.pillar3aWithoutLpp);
export const REVIEW = REVIEW_LABEL;

export const HUB =
  "The wider frame is the [Swiss third pillar](/en/3eme-pilier-suisse/).";
export const FORM =
  "The request form stays in French. It asks for a first name, last name, email, phone and canton. It is free and does not commit you. [Open the French form](/formulaire-3eme-pilier/).";

export const TODO_ENTITY = "TODO — legal name is not established in the repository.";
export const TODO_ADDRESS = "TODO — address is not established in the repository.";
export const TODO_UID = "TODO — UID is not established in the repository. Do not invent one.";
export const TODO_STATUS =
  "TODO — no intermediary status and no FINMA registration is documented. Do not claim one.";
export const TODO_REGISTER = "TODO — register URL is not established in the repository.";
export const TODO_PAY =
  "TODO — the comparison is presented as free and without commitment. Any payment by partners is not documented: a human check is required.";
export const TODO_AFA =
  "TODO — AFA diploma announced on the historical site — not verified. Do not display it until proof is on file.";

export type EnCopy = {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  brief?: string[];
  label?: string;
  faqs?: FaqItem[];
  blocks: Block[];
};

export function h2(text: string, id?: string): Block {
  return { type: "h2", text, id };
}
export function p(text: string): Block {
  return { type: "p", text };
}
export function ul(items: string[]): Block {
  return { type: "ul", items };
}
export function ol(items: string[]): Block {
  return { type: "ol", items };
}
