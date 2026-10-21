import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type SpecLine = { key: string; value?: ReactNode; list?: ReactNode[] };

type SpecProps = {
  file?: string;
  meta?: string;
  lines: SpecLine[];
  tone?: "sunken" | "raised" | "ink";
  className?: string;
};

/** A spec file rendered as a key/value listing, like a scope.yaml. */
export function Spec({
  file = "scope.yaml",
  meta,
  lines,
  tone = "sunken",
  className,
}: SpecProps) {
  return (
    <figure
      className={cx("dl-spec", `dl-spec--${tone}`, className)}
      data-theme={tone === "ink" ? "ink" : undefined}
    >
      <figcaption className="dl-spec__bar">
        <span className="mono-s">{file}</span>
        {meta ? <span className="mono-s">{meta}</span> : null}
      </figcaption>
      <dl className="mono dl-spec__body">
        {lines.map((line) => (
          <div key={line.key} className="dl-spec__row">
            <dt>{line.key}:</dt>
            <dd>
              {line.list ? (
                <ul>
                  {line.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                line.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
