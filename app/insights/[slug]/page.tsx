import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "@/components/content/markdown";
import { ArticleCard } from "@/components/ds/article-card";
import { Hero } from "@/components/ds/hero";
import { Intro } from "@/components/ds/intro";
import { Section } from "@/components/ds/section";
import { JsonLd } from "@/components/seo/json-ld";
import { ClosingCta } from "@/components/sections/closing-cta";
import {
  byline,
  getArticle,
  getArticles,
  relatedArticles,
} from "@/lib/insights";
import { breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl, SITE } from "@/lib/site";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const path = `/insights/${article.slug}`;
  const title = `${article.title} | ${SITE.name}`;
  return {
    title: { absolute: title },
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      siteName: SITE.name,
      locale: SITE.locale,
      url: path,
      title,
      description: article.description,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  // The slug is URL data, so it's read inside <Suspense> to keep navigation instant.
  return (
    <Suspense fallback={<section className="dl-hero" aria-busy="true" />}>
      <Article params={params} />
    </Suspense>
  );
}

async function Article({
  params,
}: {
  params: PageProps<"/insights/[slug]">["params"];
}) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const path = `/insights/${article.slug}`;
  const [jobTitle] = article.role.split(",");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          keywords: article.keywords.join(", "),
          author: {
            "@type": "Person",
            name: article.author,
            jobTitle: jobTitle.trim(),
          },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            logo: absoluteUrl("/icon.svg"),
          },
          datePublished: article.published,
          dateModified: article.updated,
          mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
          image: absoluteUrl(`${path}/opengraph-image`),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Insights", path: "/insights" },
          { name: article.title, path },
        ])}
      />
      <Hero title={article.title} lead={article.lead} body={byline(article)} />
      <Section>
        <article className="dl-prose dl-md">
          <Markdown>{article.body}</Markdown>
        </article>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="More [[guides]]." />
          <div className="dl-cols-3">
            {relatedArticles(article.slug).map((other) => (
              <ArticleCard
                key={other.slug}
                title={other.title}
                href={`/insights/${other.slug}`}
                summary={other.description}
                meta={`${other.author} · ${other.minutes} min read`}
              />
            ))}
          </div>
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
