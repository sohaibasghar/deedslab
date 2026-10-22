import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ds/button";
import { CompareTable } from "@/components/ds/compare-table";
import { Figure } from "@/components/ds/figure";
import { Hero } from "@/components/ds/hero";
import { Intro } from "@/components/ds/intro";
import { Offer } from "@/components/ds/offer";
import { Section } from "@/components/ds/section";
import { AiNativeSection } from "@/components/sections/ai-native-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { OfferSection } from "@/components/sections/offer-section";
import { BOOK_CALL } from "@/components/site/nav";
import { SERVICES, SERVICES_PAGE } from "@/content/services";

export const metadata = pageMetadata({
  title: "Services",
  description: SERVICES_PAGE.lead,
  path: "/services",
});

export default function ServicesPage() {
  const { chooser } = SERVICES_PAGE;
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])}
      />
      <Hero
        title={SERVICES_PAGE.title}
        lead={SERVICES_PAGE.lead}
        aside={<Figure name="fork" />}
      />
      <Section tone="sunken">
        <div className="dl-cols-3">
          {SERVICES.map((service, i) => (
            <Offer
              key={service.id}
              {...service}
              // The first offer leads; the rest use the quieter button.
              ctaVariant={i === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Section>
      <AiNativeSection stack={false} tone="default" />
      <OfferSection />
      <Section>
        <div className="dl-split dl-split--center">
          <div className="dl-stack">
            <Intro title={chooser.title} />
            <p className="body-l">{chooser.body}</p>
            <div>
              <Button href={BOOK_CALL.href}>{BOOK_CALL.label}</Button>
            </div>
          </div>
          <CompareTable
            caption={chooser.caption}
            columns={[chooser.column]}
            highlight={-1}
            rows={chooser.rows}
          />
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
