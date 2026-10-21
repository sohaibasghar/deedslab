import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocument } from "@/components/sections/legal-document";
import { LEGAL_LAST_UPDATED, TERMS } from "@/content/legal";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: TERMS.title,
  description: TERMS.summary,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: TERMS.title, path: "/terms" }])}
      />
      <Hero
        title={TERMS.title}
        lead={TERMS.summary}
        body={`Last updated: ${LEGAL_LAST_UPDATED}`}
      />
      <Section>
        <LegalDocument document={TERMS} />
      </Section>
    </>
  );
}
