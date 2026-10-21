import { Tag } from "@/components/ds/tag";
import { TextLink } from "@/components/ds/text-link";

export type SuccessStory = {
  tag: string;
  outcome: string;
  client: string;
  summary: string;
  /** What happened, in order. */
  timeline: { when: string; what: string }[];
  link: { label: string; href: string };
};

/** A client's result told as a short timeline, linking to the full case study. */
export function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <article className="dl-card dl-story">
      <div className="dl-story__head">
        <Tag tone="accent">{story.tag}</Tag>
        <p className="caption dl-muted">{story.client}</p>
      </div>
      <p className="h3 dl-story__outcome">{story.outcome}</p>
      <p className="body-s dl-muted">{story.summary}</p>
      <ol className="dl-story__timeline">
        {story.timeline.map((step) => (
          <li key={step.what}>
            <span className="caption dl-story__when">{step.when}</span>
            <span className="body-s">{step.what}</span>
          </li>
        ))}
      </ol>
      <p className="body-s">
        <TextLink href={story.link.href}>{story.link.label}</TextLink>
      </p>
    </article>
  );
}
