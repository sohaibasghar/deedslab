import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export type TagTone = "neutral" | "accent" | "outline";

export function Tag({
  tone = "neutral",
  children,
  className,
}: {
  tone?: TagTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cx("dl-tag", "caption", `dl-tag--${tone}`, className)}>
      {children}
    </span>
  );
}
