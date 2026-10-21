import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { AI_PROTOTYPE_AUDIT } from "@/content/services";
import { serviceJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/ds/hero";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Faq } from "@/components/ds/faq";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "AI prototype to product",
  description:
    "Lovable, Bolt, Replit and Cursor can get an idea working in days. Before real users, payments or private data arrive, an engineer needs to check what's underneath. The Prototype Audit tells you what to keep, what to fix and what to rebuild, with a price for each.",
  path: "/services/ai-prototype-to-product",
});

const AUDIT_CHECKS = [
  [
    "Who can read what",
    "on Supabase or Firebase backends, missing access rules that let any visitor read other people's data.",
  ],
  ["Secrets", "API keys and passwords sitting in code the browser downloads."],
  ["Payments", "what happens when a payment fails, is refunded or is faked."],
  [
    "Sign-up and login",
    "password resets, email checks, sessions that never expire.",
  ],
  ["Load", "what breaks at 100 users, and what breaks at 10,000."],
  [
    "The code",
    "whether another engineer could understand it and change it safely.",
  ],
  ["Running costs", "what hosting and AI usage will cost as you grow."],
];

export default function AiPrototypePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Services", path: "/services" },
          {
            name: "AI prototype to product",
            path: "/services/ai-prototype-to-product",
          },
        ])}
      />
      <JsonLd
        data={serviceJsonLd(AI_PROTOTYPE_AUDIT, String(metadata.description))}
      />
      <Hero
        label="Prototype Audit"
        title="Built it with AI? Let's make it [[safe]] to launch."
        lead="Lovable, Bolt, Replit and Cursor can get an idea working in days. Before real users, payments or private data arrive, an engineer needs to check what's underneath. The Prototype Audit tells you what to keep, what to fix and what to rebuild, with a price for each."
        facts={[
          {
            label: "Price",
            value: "[price]",
          },
          {
            label: "Time",
            value: <span className="dl-hl">1 week</span>,
          },
          {
            label: "You get",
            value: "a written report and a call",
          },
          {
            label: "After",
            value: "we fix it, or you take the report to anyone",
          },
        ]}
        aside={<Figure name="keys" />}
      />
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="What we [[check]]." />
          <div className="dl-cols-2">
            {AUDIT_CHECKS.map(([e, t]) => (
              <div key={e} className="dl-stack dl-stack--sm">
                <h3 className="h6">{e}</h3>
                <p className="body dl-muted">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse dl-split--center">
          <Figure name="track" />
          <div className="dl-stack dl-stack--lg">
            <Intro title="Fix, rebuild or [[ship]]." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                Sometimes the answer is "it's fine, ship it", and we'll say so.
                More often it's a list of fixes, which we can make as a
                fixed-price project. When the foundations won't hold, the honest
                answer is a rebuild, priced like any MVP.
              </p>
              <p className="body-l">Sohaib does every audit himself.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--reverse">
          <Intro title="Questions about the [[audit]]." />
          <Faq
            items={[
              {
                q: "Will you make me rebuild everything?",
                a: "No. Most AI-built prototypes need fixes, not a rebuild, and we only recommend a rebuild when fixing would cost more.",
              },
              {
                q: "Can I keep editing it in Lovable afterwards?",
                a: "Usually, yes. We'll tell you which parts are safe to keep changing there and which to leave to an engineer.",
              },
            ]}
          />
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
