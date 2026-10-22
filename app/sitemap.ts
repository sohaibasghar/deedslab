import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
};

// Every indexable page. /removed is left out on purpose (it is noindex).
const PAGES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/services/discovery-sprint",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/mvp-development",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/ai-prototype-to-product",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/work/construction-platform",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/how-we-work", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/compare", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
  }));
  const articles = getArticles().map((article) => ({
    url: absoluteUrl(`/insights/${article.slug}`),
    lastModified: article.updated,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
