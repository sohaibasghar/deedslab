import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Steps } from "@/components/ds/steps";
import { TextLink } from "@/components/ds/text-link";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "How we work",
  description:
    "Every project runs the same way: a 20-minute call, scoping, a fixed-price Discovery Sprint, then the build if you want it. You talk to the people doing the work at every step, and you see something real every week.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "How we work", path: "/how-we-work" }])}
      />
      <Hero
        title="How we build an [[MVP]], from first call to launch."
        lead="Every project runs the same way: a 20-minute call, scoping, a fixed-price Discovery Sprint, then the build if you want it. You talk to the people doing the work at every step, and you see something real every week."
        aside={<Figure name="steps" />}
      />
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title="Four steps, [[no mystery]]." />
          <Steps
            steps={[
              {
                title: "A 20-minute call",
                meta: "Week 0",
                body: "You tell us what you're building; we ask who it's for, who pays and what's driving the timing. You leave with a straight answer on whether we can help, and if we can't, where else to look.",
              },
              {
                title: "Scoping",
                meta: "Weeks 0–1",
                body: "One or two longer conversations to agree what the product is and what version one leaves out. You get a written scope and a fixed price, and nothing starts until you've agreed both.",
              },
              {
                title: "The sprint",
                meta: "Weeks 1–3",
                body: "The specification, the clickable prototype and the investor deck, one a week. You review each at the end of its week.",
              },
              {
                title: "The build, if you want it",
                meta: "Weeks 4–16",
                body: "Milestones with fixed prices, a working build every week on a link you can click, and a weekly call with Sohaib.",
              },
            ]}
          />
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--reverse dl-split--center">
          <Figure name="track" />
          <div className="dl-stack dl-stack--lg">
            <Intro title="What a [[normal week]] looks like." />
            <ul className="body dl-bullets dl-measure">
              <li>One call, 30–45 minutes, with the people doing the work.</li>
              <li>
                A short written update: what's done, what's next, what we need
                from you.
              </li>
              <li>
                One shared channel for questions in between, answered within a
                working day.
              </li>
              <li>
                From the second week of a build, a working version you can
                click.
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <div className="dl-split dl-split--center">
            <div className="dl-stack dl-stack--lg">
              <Intro title="Lahore and the UK, in [[practice]]." />
              <div className="dl-stack dl-measure">
                <p className="body-l">
                  Pakistan is 5 hours ahead of the UK in winter and 4 hours in
                  summer, so our afternoon is your morning. Calls run between
                  9:00 and 17:00 UK time, and the written update lands before
                  your working day starts.
                </p>
              </div>
            </div>
            <Figure name="zones" />
          </div>
          <div className="dl-cols-3">
            <div className="dl-stack">
              <h2 className="h3">What we'll need from you.</h2>
              <p className="body">
                An hour or two a week: the call, a few decisions, and quick
                answers when we're stuck. The founders who get the most from us
                are the ones who say "that's wrong" early.
              </p>
            </div>
            <div className="dl-stack">
              <h2 className="h3">The tools you'll see.</h2>
              <p className="body">
                Figma for the designs and the prototype, a repository in your
                company's account for the code, a private link for every build,
                and whichever of Slack, Teams or email you already use.
              </p>
            </div>
            <div className="dl-stack">
              <h2 className="h3">After launch.</h2>
              <p className="body">
                You get the keys: the code, the hosting, the domains, the
                documentation and a recorded walkthrough. Then you choose: we
                stay on for improvements month by month, or we hand over to your
                own team and stay reachable for their questions.
              </p>
            </div>
          </div>
          <p className="body">
            <TextLink href="/faq">All questions →</TextLink>
          </p>
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
