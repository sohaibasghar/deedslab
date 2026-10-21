import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Figure } from "@/components/ds/figure";

export function OfferSection() {
  return (
    <Section>
      <div className="dl-stack dl-stack--lg">
        <Intro title="What we [[offer]]." />
        <div className="dl-cols-4">
          <article className="dl-card">
            <Figure name="draft" />
            <h3 className="h5">UI/UX Design</h3>
            <p className="body dl-muted">
              Research, flows and interfaces people understand the first time
              they use them.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="exploded" />
            <h3 className="h5">Web Development</h3>
            <p className="body dl-muted">
              Fast, reliable web applications, from marketing sites to full SaaS
              platforms.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="phone" />
            <h3 className="h5">App Development</h3>
            <p className="body dl-muted">
              Native-feeling iOS and Android apps built from one codebase.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="chat" />
            <h3 className="h5">ML/AI</h3>
            <p className="body dl-muted">
              AI features that do real work, built on Claude, Gemini and AWS
              Bedrock: assistants, agents, search and automation.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="track" />
            <h3 className="h5">DevOps</h3>
            <p className="body dl-muted">
              Cloud setup, CI/CD and monitoring so releases are routine, not
              risky.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="steps" />
            <h3 className="h5">Quality Assurance</h3>
            <p className="body dl-muted">
              Manual and automated testing that catches problems before your
              users do.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="abacus" />
            <h3 className="h5">E-commerce</h3>
            <p className="body dl-muted">
              Stores and checkout flows built to convert, with payments and
              inventory wired in.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
