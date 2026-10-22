import { Markdown } from "@/components/content/markdown";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { JsonLd } from "@/components/seo/json-ld";
import { WEBSITE_TERMS } from "@/lib/legal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: WEBSITE_TERMS.title,
  description:
    "The terms for using the Deeds Lab website. Client projects are governed by a separate signed agreement.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: WEBSITE_TERMS.title, path: "/terms" }])}
      />
      <Hero
        title={WEBSITE_TERMS.title}
        lead={`Last updated: ${WEBSITE_TERMS.lastUpdated}`}
      />
      <Section>
        <div className="dl-prose dl-md">
          <Markdown>{WEBSITE_TERMS.body}</Markdown>
        </div>
      </Section>
    </>
  );
}
