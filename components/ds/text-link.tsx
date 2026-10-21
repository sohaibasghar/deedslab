import type { ComponentProps } from "react";
import { Anchor } from "@/components/ds/anchor";
import { cx } from "@/lib/cx";

export function TextLink({
  external,
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { href: string; external?: boolean }) {
  const target = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Anchor className={cx("dl-link", className)} {...target} {...rest}>
      {children}
      {external ? <span className="dl-sr"> (opens in a new tab)</span> : null}
    </Anchor>
  );
}
