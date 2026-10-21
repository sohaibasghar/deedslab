import Link from "next/link";
import type { ComponentProps } from "react";

const isInternal = (href: string) =>
  href.startsWith("/") && !href.startsWith("//");

/**
 * An `<a>` that routes internal paths through next/link and leaves
 * external, mailto and fragment links as plain anchors.
 */
export function Anchor({
  href,
  ...rest
}: ComponentProps<"a"> & { href: string }) {
  if (isInternal(href)) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
