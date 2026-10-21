import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { ArticleCard } from "@/components/ds/article-card";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Plain answers to the questions founders ask us before a line of code is written: what it costs, what to build first, and who should build it.",
  path: "/insights",
});

const ARTICLES = [
  [
    "Offshore development without losing control",
    "/insights/offshore-development-without-losing-control",
    "Offshore development works when you talk to the people writing the code, see working software every week, own the repository from the first day and pay by milestone.",
    "Adil",
  ],
  [
    "AI prototype to production: what to fix first",
    "/insights/ai-prototype-to-production",
    "An app built with Lovable, Bolt or Replit can be live in days.",
    "Sohaib",
  ],
  [
    "What investors want to see at pre-seed",
    "/insights/what-investors-want-at-pre-seed",
    "At pre-seed, investors back the founder and the problem first.",
    "Adil",
  ],
  [
    "Fractional CTO, founding engineer or studio?",
    "/insights/fractional-cto-vs-founding-engineer-vs-studio",
    "Hire a fractional CTO when you have engineers who need leading.",
    "Sohaib",
  ],
  [
    "Build an app without a technical co-founder",
    "/insights/build-an-app-without-a-technical-cofounder",
    "There are three ways to build an app without a technical co-founder: hire a studio, hire freelancers and manage them yourself, or build a first version with an AI app builder.",
    "Adil",
  ],
  [
    "How to write a product specification",
    "/insights/product-specification-template",
    "A product specification is the document a developer prices and builds from.",
    "Adil",
  ],
  [
    "Prototype vs MVP: which do you need first?",
    "/insights/prototype-vs-mvp",
    "A prototype shows the product; an MVP is the product.",
    "Adil",
  ],
];

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
          {ARTICLES.map(([title, slug, summary, author]) => (
            <ArticleCard
              key={slug}
              title={title}
              // These guides aren't written yet; add `href={slug}` to each once it's live.
              summary={summary}
              meta={`By ${author} · Coming soon`}
            />
          ))}
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
