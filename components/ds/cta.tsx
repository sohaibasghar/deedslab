import type { ReactNode } from "react";
import { Mark } from "@/components/ds/brand";
import { Button } from "@/components/ds/button";
import { Figure } from "@/components/ds/figure";
import { highlight } from "@/components/ds/highlight";
import type { LinkAction } from "@/components/ds/offer";
import { TextLink } from "@/components/ds/text-link";
import { cx } from "@/lib/cx";

type CtaProps = {
  /** Wrap words in `[[ ]]` to highlight them. */
  title: ReactNode;
  body?: ReactNode;
  cta?: LinkAction;
  secondary?: LinkAction;
  /** Shown beside the copy; pass `null` for none. */
  aside?: ReactNode;
  id?: string;
  className?: string;
};

const DEFAULT_ASIDE = <Figure name="exploded" />;

/** The ink call-to-action band that closes a page. */
export function Cta({
  title,
  body,
  cta,
  secondary,
  aside = DEFAULT_ASIDE,
  id = "cta",
  className,
}: CtaProps) {
  const titleId = `${id}-title`;
  return (
    <section
      className={cx("dl-cta", className)}
      data-theme="ink"
      aria-labelledby={titleId}
    >
      <div className={cx("dl-cta__inner", !!aside && "dl-cta__inner--aside")}>
        <div className="dl-cta__main">
          <Mark size={48} decorative className="dl-cta__mark" />
          <h2 className="h2 dl-cta__title" id={titleId}>
            {highlight(title)}
          </h2>
          {body ? <p className="body-l dl-cta__body">{body}</p> : null}
          <div className="dl-cta__actions">
            {cta ? (
              <Button href={cta.href} size="lg">
                {cta.label}
              </Button>
            ) : null}
            {secondary ? (
              <TextLink href={secondary.href} className="label">
                {secondary.label}
              </TextLink>
            ) : null}
          </div>
        </div>
        {aside ? <div className="dl-cta__aside">{aside}</div> : null}
      </div>
      <div className="dl-container">
        <hr className="dl-cta__rule" />
      </div>
    </section>
  );
}
