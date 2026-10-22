import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { ArticleCard } from "@/components/ds/article-card";
import { ClosingCta } from "@/components/sections/closing-cta";
import { getArticles } from "@/lib/insights";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Plain answers to the questions founders ask us before a line of code is written: what it costs, what to build first, and who should build it.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Insights", path: "/insights" }])}
      />
      <Hero
        title="[[Guides]] for founders without a technical team."
        lead="Plain answers to the questions founders ask us before a line of code is written: what it costs, what to build first, and who should build it."
      />
      <Section tone="sunken">
        <div className="dl-cols-3">
          {getArticles().map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              href={`/insights/${article.slug}`}
              summary={article.description}
              meta={`${article.author} · ${article.minutes} min read`}
            />
          ))}
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
