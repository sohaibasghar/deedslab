import type { ComponentProps, ReactNode } from "react";
import { Anchor } from "@/components/ds/anchor";
import { cx } from "@/lib/cx";

type ButtonProps = Omit<ComponentProps<"button">, "children"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  /** Renders a link styled as a button; http(s) links open in a new tab. */
  href?: string;
  loading?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  loading,
  className,
  children,
  type,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cx(
    "dl-btn",
    "label",
    `dl-btn--${variant}`,
    size === "lg" && "dl-btn--lg",
    loading && "is-loading",
    className,
  );
  const content = (
    <>
      {loading ? <span className="dl-btn__spinner" aria-hidden="true" /> : null}
      <span className="dl-btn__label">{children}</span>
    </>
  );
  if (href) {
    const external = /^https?:/.test(href)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Anchor href={href} className={classes} {...external}>
        {content}
      </Anchor>
    );
  }
  return (
    <button
      type={type || "button"}
      className={classes}
      disabled={!!(disabled || loading)}
      aria-busy={loading ? true : undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
