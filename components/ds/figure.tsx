"use client";

import { useEffect, useRef } from "react";

export type FigureName =
  | "cut"
  | "phone"
  | "easel"
  | "abacus"
  | "fork"
  | "steps"
  | "keys"
  | "overlap"
  | "track"
  | "zones"
  | "draft"
  | "site"
  | "exploded"
  | "chat";

/**
 * A Hairline line drawing. The engine is loaded on demand so it stays out of
 * the initial bundle; the box keeps its 5:4 size while it loads.
 */
export function Figure({
  name,
  className,
}: {
  name: FigureName;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = ref.current;
    if (!stage) return;
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    import("@/lib/hairline/mount").then(({ mountFigure }) => {
      if (!cancelled) cleanup = mountFigure(stage, name);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [name]);

  return (
    <div
      ref={ref}
      className={className ? `dl-figure ${className}` : "dl-figure"}
      data-hairline={name}
      aria-hidden="true"
    />
  );
}
