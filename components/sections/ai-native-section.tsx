import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Figure } from "@/components/ds/figure";
import { AiTools } from "@/components/sections/ai-tools";

type AiNativeSectionProps = {
  /** Pass `false` to leave out the AI tools showcase. */
  stack?: boolean;
  /** Follows the light/dark theme; pick the tone that contrasts with its neighbours. */
  tone?: "default" | "sunken";
};

export function AiNativeSection({
  stack: dlS = true,
  tone = "sunken",
}: AiNativeSectionProps) {
  return (
    <Section tone={tone}>
      <div className="dl-stack dl-stack--lg">
        <p className="label dl-muted">AI-native · AI-first</p>
        <Intro title="Built [[AI-first]], from the first commit." />
        <p className="body-l dl-muted dl-measure">
          We're an AI-native studio. AI runs through how we work and what we
          ship, so products reach users faster and get smarter after launch.
        </p>
        <div className="dl-cols-3">
          <article className="dl-card">
            <Figure name="overlap" />
            <h3 className="h5">AI in how we build.</h3>
            <p className="body dl-muted">
              Agents scope, write, test and review code alongside our engineers,
              so you see a working build in days, not weeks.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="keys" />
            <h3 className="h5">AI in what we build.</h3>
            <p className="body dl-muted">
              Assistants, automation, search and prediction designed into the
              product from day one, not bolted on later.
            </p>
          </article>
          <article className="dl-card">
            <Figure name="steps" />
            <h3 className="h5">Engineers own every line.</h3>
            <p className="body dl-muted">
              AI speeds us up. People decide what ships: every change is
              reviewed, tested and yours from the first commit.
            </p>
          </article>
        </div>
        {dlS ? <AiTools /> : null}
      </div>
    </Section>
  );
}
