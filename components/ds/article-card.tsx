import type { ReactNode } from "react";
import { Anchor } from "@/components/ds/anchor";
import { cx } from "@/lib/cx";

type ArticleCardProps = {
  title: ReactNode;
  /** Leave out until the article is published; the card then shows without a link. */
  href?: string;
  summary?: ReactNode;
  meta?: ReactNode;
  className?: string;
};

export function ArticleCard({
  title,
  href,
  summary,
  meta,
  className,
}: ArticleCardProps) {
  return (
    <article className={cx("dl-card", "dl-article", className)}>
      <h3 className="h5 dl-article__title">
        {href ? (
          <Anchor href={href} className="dl-article__link">
            {title}
          </Anchor>
        ) : (
          title
        )}
      </h3>
      {summary ? <p className="body-s dl-muted">{summary}</p> : null}
      {meta ? <p className="caption dl-muted">{meta}</p> : null}
    </article>
  );
}
