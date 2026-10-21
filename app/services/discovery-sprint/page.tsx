import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { DISCOVERY_SPRINT } from "@/content/services";
import { serviceJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/ds/hero";
import { Button } from "@/components/ds/button";
import { CALENDLY_URL } from "@/components/site/nav";
import { Spec } from "@/components/ds/spec";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Figure } from "@/components/ds/figure";
import { Steps } from "@/components/ds/steps";
import { Media } from "@/components/ds/media";
import { Prototype } from "@/components/prototypes/prototype";
import { TextLink } from "@/components/ds/text-link";
import { Faq } from "@/components/ds/faq";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "Discovery Sprint",
  description:
    "The Discovery Sprint is Deeds Lab's fixed-price first step for founders without a technical team. In 2–3 weeks we turn your written idea into a scoped specification, a clickable prototype and an investor deck, and you own all three.",
  path: "/services/discovery-sprint",
});

const SCOPE_LINES = [
  {
    key: "for",
    value: "founders with no technical team",
  },
  {
    key: "input",
    value: "a written idea",
  },
  {
    key: "time",
    value: "2–3 weeks",
  },
  {
    key: "deliverables",
    list: ["scoped specification", "clickable prototype", "investor deck"],
  },
  {
    key: "you_own",
    value: "everything, from day one",
  },
  {
    key: "next",
    value: "the build, if you want it",
  },
];

export default function DiscoverySprintPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Services", path: "/services" },
          { name: "Discovery Sprint", path: "/services/discovery-sprint" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd(DISCOVERY_SPRINT, String(metadata.description))}
      />
      <Hero
        label="Discovery Sprint"
        title="Your idea, turned into something you can [[show]]."
        lead="The Discovery Sprint is Deeds Lab's fixed-price first step for founders without a technical team. In 2–3 weeks we turn your written idea into a scoped specification, a clickable prototype and an investor deck, and you own all three."
        actions={
          <Button href={CALENDLY_URL} size="lg">
            Book a 20-minute call
          </Button>
        }
        aside={
          <Spec
            file="discovery-sprint.yaml"
            tone="raised"
            lines={SCOPE_LINES}
          />
        }
      />
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="What you [[leave with]]." />
          <div className="dl-cols-2">
            <article className="dl-card">
              <Figure name="cut" />
              <h3 className="h5">A scoped specification.</h3>
              <p className="body dl-muted">
                Who uses the product, what each of them needs to do, every
                screen, the data behind it, and what version one deliberately
                leaves out. Written so any engineering team can quote from it,
                including one that isn't us.
              </p>
            </article>
            <article className="dl-card">
              <Figure name="phone" />
              <h3 className="h5">A clickable prototype.</h3>
              <p className="body dl-muted">
                Every key screen designed in Figma and linked so it behaves like
                the product. Investors and early users can tap through it before
                a line of code exists. It's what you put on the table in the
                meeting.
              </p>
            </article>
            <article className="dl-card">
              <Figure name="easel" />
              <h3 className="h5">An investor deck.</h3>
              <p className="body dl-muted">
                The problem, the product, who pays, the plan and the ask, built
                around the prototype so the story and the screens agree.
              </p>
            </article>
            <article className="dl-card">
              <Figure name="abacus" />
              <h3 className="h5">A build estimate.</h3>
              <p className="body dl-muted">
                A price range, a timeline and what moves them, from real scoping
                rather than a guess. Use it with us or take it anywhere.
              </p>
            </article>
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title="Three weeks, [[week by week]]." />
          <Steps
            steps={[
              {
                title: "Before we start",
                body: "One or two conversations to agree what the product is and fix the price. Nothing starts until you've agreed both.",
              },
              {
                title: "The specification",
                meta: "Week 1",
                body: "Users, journeys, features ranked by priority, and the first screens in rough. You review it at the end of the week.",
              },
              {
                title: "The prototype",
                meta: "Week 2",
                body: "The key screens designed and linked into a clickable prototype. You try it, and we change whatever doesn't hold up.",
              },
              {
                title: "The deck and the estimate",
                meta: "Week 3",
                body: "The story written around the prototype, the deck designed, the build priced. Then a handover call.",
              },
            ]}
          />
          <p className="caption">A simpler idea can finish in 2 weeks.</p>
          <Media ratio="16 / 10">
            <Prototype variant="draft" />
          </Media>
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse dl-split--center">
          <Media ratio="4 / 3">
            <Prototype variant="platform" />
          </Media>
          <div className="dl-stack dl-stack--lg">
            <Intro title="What it did for [[one founder]]." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                A UK construction technology founder came to us with a written
                idea. Three weeks later he had a prototype investors could click
                through and a deck built around it. He raised the funding, then
                commissioned the full build.
              </p>
              <p className="body">
                <TextLink href="/work/construction-platform">
                  Read the case study →
                </TextLink>
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--reverse dl-split--center">
          <Figure name="fork" />
          <div className="dl-stack dl-stack--lg">
            <Intro title="What the sprint [[won't]] do." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                It won't get you funded on its own, and it won't give you
                software you can launch: the prototype is a design that behaves
                like the product, not the product. What it does is make your
                idea concrete enough for investors to argue with, and give
                whoever builds it a specification they can price.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse">
          <Intro title="Questions about the [[sprint]]." />
          <Faq
            items={[
              {
                q: "What do I need before we start?",
                a: "A written description of the idea. A page or two is enough. Notes, a voice memo or an old deck all help, and none of it needs to be polished.",
              },
              {
                q: "Is the prototype real software?",
                a: "No. It's a clickable design: every key screen, linked so it behaves like the product. That's why it takes weeks rather than months, and why it's quick to change.",
              },
              {
                q: "Can I take the specification to another developer?",
                a: "Yes. You own it, and it's written so any competent team can quote from it.",
              },
              {
                q: "What if I don't want the build?",
                a: "You keep the specification, the prototype and the deck, and you owe nothing more.",
              },
              {
                q: "How do I pay?",
                a: "Half when we start and half at handover.",
              },
            ]}
          />
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
