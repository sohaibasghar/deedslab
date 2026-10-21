import type { ReactNode } from "react";
import { Icon } from "@/components/ds/icon";
import { cx } from "@/lib/cx";

export type FaqItem = { q: string; a: ReactNode; open?: boolean };

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Questions as disclosure widgets. With `anchors`, each gets an id from its question so it can be linked to. */
export function Faq({
  items,
  anchors,
  className,
}: {
  items: FaqItem[];
  anchors?: boolean;
  className?: string;
}) {
  return (
    <div className={cx("dl-faq", className)}>
      {items.map((item) => (
        <details
          key={item.q}
          id={anchors ? slugify(item.q) : undefined}
          className="dl-faq__item"
          open={item.open}
        >
          <summary className="dl-faq__q">
            <span className="h5">{item.q}</span>
            <span className="dl-faq__icon" aria-hidden="true">
              <Icon name="plus" size={22} />
            </span>
          </summary>
          <div className="body dl-faq__a">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
