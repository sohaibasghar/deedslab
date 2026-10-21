import type { ReactNode } from "react";
import { highlight } from "@/components/ds/highlight";
import { cx } from "@/lib/cx";

type IntroProps = {
  /** Wrap words in `[[ ]]` to highlight them. */
  title: ReactNode;
  lead?: ReactNode;
  label?: ReactNode;
  level?: 2 | 3;
  align?: "left" | "center";
  className?: string;
};

export function Intro({
  title,
  lead,
  label,
  level = 2,
  align = "left",
  className,
}: IntroProps) {
  const Heading = level === 3 ? "h3" : "h2";
  return (
    <div
      className={cx(
        "dl-intro",
        align === "center" && "dl-intro--center",
        className,
      )}
    >
      {label ? <p className="label dl-intro__label">{label}</p> : null}
      <Heading className={cx(Heading, "dl-intro__title")}>
        {highlight(title)}
      </Heading>
      {lead ? <p className="body-l dl-intro__lead">{lead}</p> : null}
    </div>
  );
}
