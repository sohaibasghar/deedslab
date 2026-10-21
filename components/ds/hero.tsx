import type { ReactNode } from "react";
import { Facts, type Fact } from "@/components/ds/facts";
import { highlight } from "@/components/ds/highlight";
import { cx } from "@/lib/cx";

type HeroProps = {
  label?: ReactNode;
  /** Wrap words in `[[ ]]` to highlight them. */
  title: ReactNode;
  lead?: ReactNode;
  /** A short paragraph under the lead, for pages that need more than one line of intro. */
  body?: ReactNode;
  actions?: ReactNode;
  facts?: Fact[];
  aside?: ReactNode;
  /** Sets the title across the full width, above the split. */
  wideTitle?: boolean;
  className?: string;
};

export function Hero({
  label,
  title,
  lead,
  body,
  actions,
  facts,
  aside,
  wideTitle,
  className,
}: HeroProps) {
  const long =
    typeof title === "string" && title.replace(/[[\]]/g, "").length > 34;
  const heading = (
    <h1
      className={cx(
        "h1 dl-hero__title",
        wideTitle && "dl-hero__title--wide",
        long && "dl-hero__title--long",
      )}
    >
      {highlight(title)}
    </h1>
  );
  const content = (
    <div className="dl-stack dl-stack--lg">
      <div className="dl-stack">
        {label && !wideTitle ? <p className="label dl-muted">{label}</p> : null}
        {wideTitle ? null : heading}
        {lead ? <p className="body-l dl-muted dl-measure">{lead}</p> : null}
        {body ? <p className="body dl-muted dl-measure">{body}</p> : null}
      </div>
      {actions ? <div className="dl-actions">{actions}</div> : null}
      {facts ? <Facts items={facts} /> : null}
    </div>
  );
  return (
    <section className={cx("dl-hero", className)}>
      <div className="dl-container">
        {wideTitle ? (
          <div className="dl-stack dl-hero__head">
            {label ? <p className="label dl-muted">{label}</p> : null}
            {heading}
          </div>
        ) : null}
        {aside ? (
          <div className="dl-split dl-split--center">
            {content}
            <div>{aside}</div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
