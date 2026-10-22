import { Markdown } from "@/components/content/markdown";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { JsonLd } from "@/components/seo/json-ld";
import { PRIVACY_POLICY } from "@/lib/legal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: PRIVACY_POLICY.title,
  description:
    "What Deeds Lab collects when you contact us, book a call or work with us, why, who handles it, how long we keep it and your rights under UK GDPR.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: PRIVACY_POLICY.title, path: "/privacy" },
        ])}
      />
      <Hero
        title={PRIVACY_POLICY.title}
        lead={`Last updated: ${PRIVACY_POLICY.lastUpdated}`}
      />
      <Section>
        <div className="dl-prose dl-md">
          <Markdown>{PRIVACY_POLICY.body}</Markdown>
        </div>
      </Section>
    </>
  );
}
