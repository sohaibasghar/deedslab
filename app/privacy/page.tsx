import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocument } from "@/components/sections/legal-document";
import { LEGAL_LAST_UPDATED, PRIVACY_POLICY } from "@/content/legal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: PRIVACY_POLICY.title,
  description: PRIVACY_POLICY.summary,
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
        lead={PRIVACY_POLICY.summary}
        body={`Last updated: ${LEGAL_LAST_UPDATED}`}
      />
      <Section>
        <LegalDocument document={PRIVACY_POLICY} />
      </Section>
    </>
  );
}
