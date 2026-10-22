import { join } from "node:path";
import { readMarkdownFile } from "@/lib/markdown-files";

export type LegalPage = { title: string; lastUpdated: string; body: string };

/**
 * A legal draft from content/legal, ready to publish: the H1 and "Last updated"
 * line are shown by the page hero, and the drafting notes are left out — the
 * "Drafting sources" section and any line starting "[Solicitor".
 */
function load(file: string): LegalPage {
  const { data, body } = readMarkdownFile(
    join(process.cwd(), "content/legal", file),
  );
  const published = body
    .split(/^-{3,}\s*\n+#+\s*Drafting sources/m)[0]
    .split("\n")
    .filter(
      (line) =>
        !line.startsWith("# ") &&
        !line.startsWith("Last updated:") &&
        !line.startsWith("[Solicitor"),
    )
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { title: data.title, lastUpdated: data.last_updated, body: published };
}

// Read once at module scope so the pages prerender as static HTML.
export const PRIVACY_POLICY = load("privacy-policy.md");
export const WEBSITE_TERMS = load("website-terms.md");

export const LEGAL_LAST_UPDATED = "22 October 2026";
