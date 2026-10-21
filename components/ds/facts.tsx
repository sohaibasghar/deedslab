import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type Fact = { label: ReactNode; value: ReactNode };

export function Facts({
  items,
  className,
}: {
  items: Fact[];
  className?: string;
}) {
  return (
    <dl className={cx("dl-facts", className)}>
      {items.map((fact, i) => (
        <div key={i} className="dl-facts__item">
          <dt className="caption dl-facts__label">{fact.label}</dt>
          <dd className="h5 dl-facts__value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
