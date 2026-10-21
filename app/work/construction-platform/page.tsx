import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Media } from "@/components/ds/media";
import { Prototype } from "@/components/prototypes/prototype";
import { Intro } from "@/components/ds/intro";
import { Steps } from "@/components/ds/steps";
import { Facts } from "@/components/ds/facts";
import { TextLink } from "@/components/ds/text-link";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "Case study: a funded construction platform",
  description:
    "A UK construction technology founder had his platform written down and nothing to show investors. In 3 weeks we turned it into a specification, a clickable prototype and an investor deck. He raised funding on them, then commissioned the full build.",
  path: "/work/construction-platform",
});

export default function ConstructionPlatformPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Projects", path: "/projects" },
          {
            name: "Construction platform case study",
            path: "/work/construction-platform",
          },
        ])}
      />
      <Hero
        label="Deeds Lab project · Construction technology · UK"
        title="From a written idea to a [[funded]] construction platform."
        lead="A UK construction technology founder had his platform written down and nothing to show investors. In 3 weeks we turned it into a specification, a clickable prototype and an investor deck. He raised funding on them, then commissioned the full build."
        facts={[
          {
            label: "Client",
            value: "A UK construction technology company",
          },
          {
            label: "Engagement",
            value: "Discovery Sprint, then MVP Development",
          },
          {
            label: "Sprint",
            value: "3 weeks",
          },
          {
            label: "Build",
            value: (
              <>
                <span className="dl-hl">Full</span>
                {" web application"}
              </>
            ),
          },
          {
            label: "Outcome",
            value: "Funding raised",
          },
        ]}
        aside={<Figure name="cut" />}
      />
      <Section>
        <Media ratio="16 / 9">
          <Prototype variant="platform" />
        </Media>
      </Section>
      <Section>
        <div className="dl-split dl-split--center">
          <div className="dl-stack dl-stack--lg">
            <Intro title="Where he [[started]]." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                He had the platform written down as a document. No designs, no
                prototype, no technical co-founder, and no way to show an
                investor what he meant. Investors kept asking the same question:
                what does it look like?
              </p>
            </div>
          </div>
          <Figure name="draft" />
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="Three weeks from document to [[prototype]]." />
          <Steps
            steps={[
              {
                title: "Week 1",
                body: "We scoped the platform with him: who uses it, what each of them needs to do, and what could wait for version two.",
              },
              {
                title: "Week 2",
                body: "We designed the key screens and linked them into a prototype investors could click through.",
              },
              {
                title: "Week 3",
                body: "We wrote the deck around the prototype, so every claim in the story had a screen behind it.",
              },
            ]}
          />
          <Media ratio="16 / 10">
            <Prototype variant="platform" />
          </Media>
          <Media ratio="16 / 10">
            <Prototype variant="draft" />
          </Media>
        </div>
      </Section>
      <Section>
        <div className="dl-cols-2">
          <div className="dl-stack">
            <h2 className="h3">The pitch.</h2>
            <p className="body">
              He presented the prototype and the deck. It was approved, and he
              got the funding.
            </p>
          </div>
          <div className="dl-stack">
            <h2 className="h3">Then we built it.</h2>
            <p className="body">
              After the round he commissioned the build: the full web
              application.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <p className="h4 dl-muted">"[Quote, with name and role]"</p>
          <p className="h3 dl-pull">
            The prototype didn't just show the product. It's the reason the
            product got funded.
          </p>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Facts
            items={[
              {
                label: "Scoping, prototype and deck",
                value: "Adil",
              },
              {
                label: "Engineering",
                value: "Sohaib Asghar",
              },
            ]}
          />
          <div className="dl-stack dl-stack--sm">
            <p className="label">Next</p>
            <p className="body">
              <TextLink href="/services/discovery-sprint">
                Discovery Sprint →
              </TextLink>
            </p>
          </div>
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
