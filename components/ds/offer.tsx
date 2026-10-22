import type { ReactNode } from "react";
import { Button } from "@/components/ds/button";
import { Facts } from "@/components/ds/facts";
import { Icon } from "@/components/ds/icon";
import { Tag } from "@/components/ds/tag";
import { cx } from "@/lib/cx";

export type LinkAction = { label: ReactNode; href: string };

type OfferProps = {
  name: ReactNode;
  duration: ReactNode;
  /** Label for the duration fact, e.g. "Billing" for an ongoing engagement. */
  durationLabel?: string;
  summary?: ReactNode;
  includes?: ReactNode[];
  note?: ReactNode;
  tag?: ReactNode;
  cta?: LinkAction;
  ctaVariant?: "primary" | "secondary";
  id?: string;
  className?: string;
};

export function Offer({
  name,
  duration,
  durationLabel = "Time",
  summary,
  includes,
  note,
  tag,
  cta,
  ctaVariant = "primary",
  id,
  className,
}: OfferProps) {
  return (
    <article id={id} className={cx("dl-offer", className)}>
      <header className="dl-offer__head">
        <div className="dl-offer__tagrow">
          {tag ? <Tag tone="accent">{tag}</Tag> : null}
        </div>
        <h3 className="h4 dl-offer__name">{name}</h3>
        {summary ? <p className="body-s dl-offer__summary">{summary}</p> : null}
      </header>
      <Facts
        className="dl-offer__facts"
        items={[{ label: durationLabel, value: duration }]}
      />
      {includes ? (
        <ul className="body-s dl-offer__list">
          {includes.map((item, i) => (
            <li key={i}>
              <Icon name="check" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {note ? <p className="caption dl-offer__note">{note}</p> : null}
      {cta ? (
        <Button href={cta.href} variant={ctaVariant} className="dl-offer__cta">
          {cta.label}
        </Button>
      ) : null}
    </article>
  );
}
