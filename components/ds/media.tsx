import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type Annotation = {
  x: number;
  y: number;
  label: string;
  side?: "left" | "right";
};

type MediaProps = {
  children: ReactNode;
  ratio?: string;
  annotations?: Annotation[];
  caption?: ReactNode;
  className?: string;
};

const CORNERS = ["tl", "tr", "bl", "br"] as const;

/** A framed well for a screenshot or live prototype, with optional pinned notes. */
export function Media({
  children,
  ratio = "16 / 10",
  annotations = [],
  caption,
  className,
}: MediaProps) {
  return (
    <figure className={cx("dl-media", className)}>
      <div className="dl-media__frame" style={{ aspectRatio: ratio }}>
        {CORNERS.map((corner) => (
          <span
            key={corner}
            className={`dl-media__corner dl-media__corner--${corner}`}
            aria-hidden="true"
          />
        ))}
        <div className="dl-media__well">{children}</div>
        {annotations.map((note, i) => (
          <span
            key={i}
            className={cx(
              "dl-note",
              "mono-s",
              note.side === "left" && "dl-note--left",
            )}
            style={{ left: `${note.x}%`, top: `${note.y}%` }}
            aria-hidden="true"
          >
            <span className="dl-note__dot" />
            <span className="dl-note__text">{note.label}</span>
          </span>
        ))}
      </div>
      {caption ? (
        <figcaption className="caption dl-media__caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
