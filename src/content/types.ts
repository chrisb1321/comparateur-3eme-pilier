export type FaqItem = {
  question: string;
  answer: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "callout"; title: string; text: string };

export type EditorialDoc = {
  kind: "page" | "post";
  slug: string;
  wpId?: number;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  intro: string;
  blocks: Block[];
  faqs?: FaqItem[];
  related?: string[];
  category?: string;
  body?: string;
  cover?: string;
  series?: boolean;
  weekId?: string;
  draft?: boolean;
};

