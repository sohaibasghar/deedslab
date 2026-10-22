import { getArticle, getArticles } from "@/lib/insights";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Deeds Lab guide";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug);
  return renderOgImage({
    title: article?.title ?? "Guides for founders",
    subtitle: article
      ? `${article.author} · ${article.minutes} min read`
      : undefined,
  });
}
