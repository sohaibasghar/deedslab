import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { CalendlyBooking } from "@/components/contact/calendly-booking";
import { ContactForm } from "@/components/contact/contact-form";
import { COMPANY } from "@/content/company";
import { CALENDLY_URL } from "@/components/site/nav";
import { SocialLinks } from "@/components/site/social-links";
import { SOCIAL_LINKS } from "@/content/social";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us what you're building. We'll tell you whether we can help, and if we can't, where else to look. You'll talk to Adil, who scopes every project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])}
      />
      <Hero
        title="Book a 20-minute [[call]]."
        lead="Tell us what you're building. We'll tell you whether we can help, and if we can't, where else to look. You'll talk to Adil, who scopes every project."
        facts={[
          {
            label: "Length",
            value: "20 minutes, on video",
          },
          {
            label: "Price",
            value: "Free",
          },
          {
            label: "You leave with",
            value: "a straight answer on fit, price and timing",
          },
        ]}
      />
      <Section>
        <div className="dl-split">
          <div
            className="dl-card"
            style={{ background: "var(--bg-sunken)", minHeight: 480 }}
          >
            <CalendlyBooking url={CALENDLY_URL} />
          </div>
          <p className="h4">No pitch deck, no pressure.</p>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg dl-measure">
          <Intro title="Prefer to [[write]]?" />
          <ContactForm />
        </div>
      </Section>
      <Section>
        <p className="body-s dl-muted">
          {`${COMPANY.email} · `}
          <SocialLinks links={SOCIAL_LINKS} />
          {SOCIAL_LINKS.length ? " · " : null}
          {COMPANY.contactLine}
        </p>
      </Section>
    </>
  );
}
