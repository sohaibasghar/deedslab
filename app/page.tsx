import { Hero } from "@/components/ds/hero";
import {
  TypingText,
  typingDuration,
  type TypingSegment,
} from "@/components/ds/typing-text";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ds/button";
import { CALENDLY_URL } from "@/components/site/nav";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { TextLink } from "@/components/ds/text-link";
import { Media } from "@/components/ds/media";
import { Prototype } from "@/components/prototypes/prototype";
import { OfferSection } from "@/components/sections/offer-section";
import { AiNativeSection } from "@/components/sections/ai-native-section";
import { AiToolsStage } from "@/components/sections/ai-tools";
import { Steps } from "@/components/ds/steps";
import { Person } from "@/components/ds/person";
import { TEAM } from "@/content/team";
import { CompareTable } from "@/components/ds/compare-table";
import { Faq } from "@/components/ds/faq";
import { Cta } from "@/components/ds/cta";

const HERO_TITLE: TypingSegment[] = [
  { text: "From idea to " },
  { text: "Production Ready", highlight: true },
];

export const metadata = pageMetadata({
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero
        label="AI-native product studio for founders without a technical team"
        title={<TypingText segments={HERO_TITLE} />}
        revealAt={typingDuration(HERO_TITLE) + 150}
        lead="AI-first development: we build with AI agents and build AI into your product. A scoped specification, a clickable prototype and an investor deck, in weeks, not months."
        actions={
          <>
            <Button href={CALENDLY_URL} size="lg">
              Book a 20-minute call
            </Button>
            <Button
              href="/work/construction-platform"
              variant="secondary"
              size="lg"
            >
              See how it worked
            </Button>
          </>
        }
        facts={[
          {
            label: "Time",
            value: "2–3 weeks",
          },
          {
            label: "You own",
            value: "Everything, from day one",
          },
        ]}
        aside={
          <div className="dl-hero__tools">
            <AiToolsStage />
          </div>
        }
      />
      <Section tone="sunken">
        <div className="dl-split dl-split--flip dl-split--center">
          <div className="dl-stack dl-stack--lg">
            <Intro title="A founder came to us with a document. He left with [[funding]]." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                He had a construction platform written down, and nothing else.
                No prototype, no technical team, no way to show an investor what
                he meant.
              </p>
              <p className="body-s dl-muted">
                {
                  "In three weeks we scoped it, built a prototype investors could click through and wrote the deck around it. He presented, and he got the funding. Then we built the platform: a "
                }
                <span className="dl-hl">full web application</span>.
              </p>
            </div>
            <p className="body">
              <TextLink href="/work/construction-platform">
                Read the case study →
              </TextLink>
            </p>
          </div>
          <Media ratio="16 / 10">
            <Prototype variant="platform" />
          </Media>
        </div>
      </Section>
      <OfferSection />
      {/* The AI tools are shown in the first section on this page. */}
      <AiNativeSection stack={false} />
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title="Four steps, [[no mystery]]." />
          <Steps
            steps={[
              {
                title: "A 20-minute call",
                meta: "Week 0",
                body: "You explain what you're building. We tell you whether we can help, and if we can't, where else to look.",
              },
              {
                title: "Scoping",
                meta: "Weeks 0–1",
                body: "A proper conversation about what the thing actually is. At the end of it, we agree the scope and an estimate in writing before work starts.",
              },
              {
                title: "The sprint",
                meta: "Weeks 1–3",
                body: "Specification, prototype and deck. You see progress every week.",
              },
              {
                title: "The build, if you want it",
                meta: "Weeks 4–16",
                body: "Milestones, a working build every week, and the people writing the code on your calls.",
              },
            ]}
          />
          <p className="body">
            <TextLink href="/how-we-work">How we work →</TextLink>
          </p>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--center">
          <div className="dl-stack dl-stack--lg">
            <Intro title="What a prototype [[won't]] do." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                It won&apos;t get you funded on its own. Investors back founders
                and insight first, and anyone who says a deck guarantees a round
                is selling something.
              </p>
              <p className="body">
                What a prototype does is stop the conversation being
                hypothetical. It proves you can execute, makes the idea concrete
                enough to argue with, and gets you the second meeting.
              </p>
              <p className="body">
                That&apos;s what we can promise, so that&apos;s what we promise.
              </p>
            </div>
          </div>
          <Figure name="phone" />
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--flip">
          <div className="dl-stack dl-stack--lg">
            <Intro title="Built by the [[people]] you talk to." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                There's no account manager between you and the build: Adil
                scopes your product and runs the sprint, and Sohaib leads the
                engineering. Both are on your calls.
              </p>
              <p className="body">
                A senior team without London overheads means your budget goes
                into the product, not an office.
              </p>
              <p className="caption dl-muted">
                Calls between 9:00 and 17:00 UK time.
              </p>
            </div>
          </div>
          <div className="dl-cols-2">
            {TEAM.map((member) => (
              <Person
                key={member.name}
                photo={member.photo}
                name={member.name}
                role={member.role}
                bio={member.summary}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro
            title="[[Why not]] a freelancer, an agency or an AI app builder?"
            lead="Sometimes one of them is the better choice. Here's the honest comparison."
          />
          <CompareTable
            caption="Deeds Lab compared with a freelancer, a pitch deck agency and an AI app builder"
            columns={[
              "Deeds Lab",
              "Freelancer",
              "Pitch deck agency",
              "AI app builder",
            ]}
            rows={[
              {
                label: "What you get",
                values: [
                  "Specification, clickable prototype and investor deck, then the product",
                  "Usually design or code, rarely both",
                  "A deck, sometimes with mock screens",
                  "A working first draft you assemble yourself",
                ],
              },
              {
                label: "Something investors can click",
                values: [
                  "In 2–3 weeks",
                  "Depends on the person",
                  "No",
                  "In days, if you can steer it",
                ],
              },
              {
                label: "Who scopes the product",
                values: ["We do, with you", "Usually you", "You", "You"],
              },
              {
                label: "Ready for real users and payments",
                values: [
                  "Yes, after the build",
                  "Depends on the person",
                  "No",
                  "Once an engineer has checked it",
                ],
              },
              {
                label: "Best when",
                values: [
                  "You need to raise or launch and have no technical team",
                  "You can scope and manage the work yourself",
                  "The product exists and needs its story told",
                  "You want to test an idea before spending real money",
                ],
              },
            ]}
          />
          <p className="body">
            <TextLink href="/compare">Read the full comparison →</TextLink>
          </p>
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse">
          <div className="dl-stack">
            <Intro title="Questions founders ask [[first]]." />
            <p className="body">
              <TextLink href="/faq">All questions →</TextLink>
            </p>
          </div>
          <Faq
            items={[
              {
                q: "Who owns the code?",
                a: "You do, from day one. The code lives in a repository under your company's account, the designs and the specification are yours, and the contract assigns all the intellectual property to you.",
              },
              {
                q: "Can you guarantee the prototype will help me raise?",
                a: "No, and nobody honest can. A prototype makes the idea concrete and shows you can execute, but investors back founders and markets first. It gets you the second meeting.",
              },
              {
                q: "How quickly can you start?",
                a: "Usually within 1–2 weeks of the first call. You'll get a start date on the call.",
              },
              {
                q: "Do you take equity instead of cash?",
                a: "No. You pay in cash, the product is yours outright, and our advice isn't tied to your cap table.",
              },
            ]}
          />
        </div>
      </Section>
      <Cta
        title="[[Twenty minutes]] will tell you whether this is worth pursuing."
        body="No pitch deck, no pressure. Tell us what you're building and we'll tell you what it would take."
        cta={{
          label: "Book a 20-minute call",
          href: CALENDLY_URL,
        }}
        secondary={{
          label: "Or email contact@deedslab.co",
          href: "mailto:contact@deedslab.co?subject=Deeds%20Lab%20%E2%80%93%2020-minute%20call&body=Hi%20Adil%2C%0A%0AI%27m%20building%20%5Bwhat%5D%20and%20would%20like%20a%2020-minute%20call.%0A%0A%5BYour%20name%2C%20company%5D",
        }}
      />
    </>
  );
}
