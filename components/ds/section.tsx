import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type SectionProps = {
  tone?: "default" | "sunken" | "ink";
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  tone = "default",
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        "dl-section",
        tone === "sunken" && "dl-section--sunken",
        className,
      )}
      data-theme={tone === "ink" ? "ink" : undefined}
    >
      <div className="dl-container">{children}</div>
    </section>
  );
}
