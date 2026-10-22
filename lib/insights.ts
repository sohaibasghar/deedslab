import { readdirSync } from "node:fs";
import { join } from "node:path";
import {
  formatDate,
  readingMinutes,
  readMarkdownFile,
} from "@/lib/markdown-files";

export type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  role: string;
  published: string;
  updated: string;
  keywords: string[];
  minutes: number;
  /** The opening paragraph, shown as the page's lead. */
  lead: string;
  /** Everything after the lead. */
  body: string;
};

const DIR = join(process.cwd(), "content/insights");

function load(file: string): Article {
  const { data, body } = readMarkdownFile(join(DIR, file));
  const text = body.trim();
  const split = text.indexOf("\n\n");
  return {
    slug: data.slug,
    title: data.title,
    description: data.description,
    author: data.author,
    role: data.role,
    published: data.published,
    updated: data.updated,
    keywords: (data.keywords ?? "")
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    minutes: readingMinutes(text),
    lead: split > 0 ? text.slice(0, split) : text,
    body: split > 0 ? text.slice(split + 2) : "",
  };
}

// Read once at module scope: the files don't change between requests, so the
// pages that use them prerender as static HTML.
const ARTICLES: Article[] = readdirSync(DIR)
  .filter((file) => file.endsWith(".md"))
  .map(load)
  .sort(
    (a, b) =>
      b.updated.localeCompare(a.updated) || a.title.localeCompare(b.title),
  );

export const getArticles = () => ARTICLES;

export const getArticle = (slug: string) =>
  ARTICLES.find((article) => article.slug === slug);

/** Up to `count` other articles, starting after this one so each page links to a different set. */
export function relatedArticles(slug: string, count = 3) {
  const index = ARTICLES.findIndex((article) => article.slug === slug);
  return [...ARTICLES.slice(index + 1), ...ARTICLES.slice(0, index)].slice(
    0,
    count,
  );
}

export const byline = (article: Article) =>
  `${article.author}, ${article.role} · ${article.minutes} min read · Updated ${formatDate(article.updated)}`;
