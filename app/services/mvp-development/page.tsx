import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { MVP_DEVELOPMENT } from "@/content/services";
import { serviceJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/ds/hero";
import { Button } from "@/components/ds/button";
import { CALENDLY_URL } from "@/components/site/nav";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Steps } from "@/components/ds/steps";
import { Media } from "@/components/ds/media";
import { Prototype } from "@/components/prototypes/prototype";
import { TextLink } from "@/components/ds/text-link";
import { Faq } from "@/components/ds/faq";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata = pageMetadata({
  title: "MVP development",
  description:
    "Deeds Lab designs, builds and launches the first working version of your product in 10–16 weeks. You see a working build every week, and own the code from the first day.",
  path: "/services/mvp-development",
});

export default function MvpDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Services", path: "/services" },
          { name: "MVP development", path: "/services/mvp-development" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd(MVP_DEVELOPMENT, String(metadata.description))}
      />
      <Hero
        label="MVP Development"
        title="[[MVP]] development for founders without a technical team."
        lead="Deeds Lab designs, builds and launches the first working version of your product in 10–16 weeks. You see a working build every week, and own the code from the first day."
        actions={
          <Button href={CALENDLY_URL} size="lg">
            Book a 20-minute call
          </Button>
        }
        facts={[
          {
            label: "Time",
            value: "10–16 weeks",
          },
          {
            label: "You own",
            value: "the code, the designs and the specification",
          },
        ]}
        aside={<Figure name="phone" />}
      />
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="Everything a first version needs, from [[one team]]." />
          <div className="dl-cols-3">
            <article className="dl-card">
              <h3 className="h5">Design</h3>
              <p className="body dl-muted">
                the full interface, built on your prototype if you have one.
              </p>
            </article>
            <article className="dl-card">
              <h3 className="h5">Frontend</h3>
              <p className="body dl-muted">
                the web app your users see, working from phone to desktop.
              </p>
            </article>
            <article className="dl-card">
              <h3 className="h5">Backend</h3>
              <p className="body dl-muted">
                accounts, data, business rules, and the admin your team runs it
                from.
              </p>
            </article>
            <article className="dl-card">
              <h3 className="h5">Integrations</h3>
              <p className="body dl-muted">
                payments, email, maps, and the outside systems your product
                depends on.
              </p>
            </article>
            <article className="dl-card">
              <h3 className="h5">Launch</h3>
              <p className="body dl-muted">
                hosting in your own accounts, analytics, error tracking and
                backups.
              </p>
            </article>
            <article className="dl-card">
              <h3 className="h5">Handover</h3>
              <p className="body dl-muted">
                documentation and a recorded walkthrough, so another engineer
                could pick it up tomorrow.
              </p>
            </article>
          </div>
          <p className="body-s dl-muted">
            We build web applications in TypeScript: React and Next.js at the
            front, Node.js and PostgreSQL behind, hosted in your own cloud
            accounts.
          </p>
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title="You'll see working software [[every week]]." />
          <Steps
            steps={[
              {
                title: "Plan",
                meta: "Week 1",
                body: "We turn the specification into milestones, each with an agreed scope, an estimate and a demo date.",
              },
              {
                title: "Build",
                meta: "Most of the time",
                body: "A new working build on a private link every week, and a call to walk through it. You click the real thing, not a status report.",
              },
              {
                title: "Launch",
                meta: "The last 2 weeks",
                body: "Testing with real users, fixes, then the switch to production.",
              },
              {
                title: "Handover",
                body: "Access to everything, the documentation and a recorded walkthrough of the code.",
              },
            ]}
          />
          <p className="body">
            Sohaib leads the engineering and is on every weekly call. Adil stays
            on for product decisions.
          </p>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--reverse dl-split--center">
          <Figure name="keys" />
          <div className="dl-stack dl-stack--lg">
            <Intro title="[[Yours]] from the first commit." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                The code lives in a repository under your company's account from
                day one, not ours. Hosting, domains and services like payments
                and email sit in your name and bill you directly, so you see the
                real running costs before launch. The contract assigns all the
                intellectual property to you: the code, the designs and the
                specification.
              </p>
              <p className="body">
                Ownership passes to you under the contract once the work is paid
                for. Third-party and open-source components stay under their own
                licences.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-split dl-split--reverse dl-split--center">
          <Figure name="overlap" />
          <div className="dl-stack dl-stack--lg">
            <Intro title="Do you need a [[Discovery Sprint]] first?" />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                Not with us, but you need what a sprint produces. If you arrive
                with a specification and designs that hold up, we quote the
                build from them. If you don't, the sprint is the quickest way to
                get them.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse dl-split--center">
          <Media ratio="4 / 3">
            <Prototype variant="signup" />
          </Media>
          <div className="dl-stack dl-stack--lg">
            <Intro title="One build, [[start to finish]]." />
            <div className="dl-stack dl-measure">
              <p className="body-l">
                The construction platform started as a document. After a 3-week
                Discovery Sprint and a funding round, we built it: the full web
                application.
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
        <div className="dl-split dl-split--center">
          <div className="dl-stack dl-stack--lg">
            <Intro title="When a build with us is the [[wrong call]]." />
            <ul className="body dl-bullets dl-measure">
              <li>
                You already have engineers. Give them a specification instead.
              </li>
              <li>
                You need it live in four weeks. A first version takes 10–16
                weeks, and anyone who promises four weeks is cutting something
                you'll pay for later.
              </li>
              <li>
                The idea hasn't met a customer yet. Test it first with a
                prototype or an AI app builder; on the call we'll tell you
                which.
              </li>
            </ul>
          </div>
          <Figure name="fork" />
        </div>
      </Section>
      <Section>
        <div className="dl-split dl-split--reverse">
          <Intro title="Questions about the [[build]]." />
          <Faq
            items={[
              {
                q: "How long does an MVP take?",
                a: "10–16 weeks for most first versions. The specification sets the scope, and the scope sets the time.",
              },
              {
                q: "Can you build mobile apps?",
                a: "Yes, when the product needs to be in the app stores. Most first versions start as a web app that works well on phones, which is faster to build and easier to change.",
              },
              {
                q: "Can you take over code someone else wrote?",
                a: "Sometimes. We review it first, then tell you whether to keep building on it or start again, and why.",
              },
              {
                q: "What happens after launch?",
                a: "We fix anything we built that breaks in the first 30 days, at no cost. After that you choose: a monthly arrangement for improvements, or a handover to your own team.",
              },
              {
                q: "Do you take equity?",
                a: "No. You pay in cash, the product is yours outright, and our advice isn't tied to your cap table.",
              },
            ]}
          />
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
