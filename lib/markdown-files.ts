import { readFileSync } from "node:fs";

export type FrontMatter = Record<string, string>;

/**
 * Splits a markdown file into its `key: value` front matter and body.
 * The content files use only flat string values, so no YAML parser is needed.
 */
export function readMarkdownFile(path: string): {
  data: FrontMatter;
  body: string;
} {
  const source = readFileSync(path, "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: source };
  const data: FrontMatter = {};
  for (const line of match[1].split("\n")) {
    const at = line.indexOf(":");
    if (at < 1) continue;
    const value = line.slice(at + 1).trim();
    data[line.slice(0, at).trim()] = value.replace(/^"(.*)"$/, "$1");
  }
  return { data, body: source.slice(match[0].length) };
}

/** Words in a markdown body divided by 220 a minute, rounded up. */
export function readingMinutes(body: string) {
  const words = body
    .replace(/[#>*_`|\-[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

/** "2026-10-22" as "22 October 2026". */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
