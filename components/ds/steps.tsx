"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cx } from "@/lib/cx";

export type Step = { title: ReactNode; meta?: ReactNode; body: ReactNode };

/**
 * A numbered sequence. With `scroll`, each step reveals as it scrolls into view
 * (driven by the `--r` custom property, 0 → 1); reduced motion shows them all.
 */
export function Steps({
  steps,
  scroll,
  className,
}: {
  steps: Step[];
  scroll?: boolean;
  className?: string;
}) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!scroll || !list) return;
    const items = Array.from(list.children) as HTMLElement[];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.style.setProperty("--r", "1"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const top = list.getBoundingClientRect().top;
      const firstTop = items[0].offsetTop;
      const perRow =
        items.filter((item) => item.offsetTop === firstTop).length || 1;
      items.forEach((item, i) => {
        const y = top + (item.offsetTop - firstTop) + (i % perRow) * 0.14 * vh;
        const progress = Math.min(1, Math.max(0, (0.92 * vh - y) / (0.3 * vh)));
        item.style.setProperty("--r", progress.toFixed(3));
      });
    };
    const schedule = () => {
      frame ||= requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [scroll]);

  return (
    <ol
      ref={listRef}
      className={cx("dl-steps", scroll && "dl-steps--reveal", className)}
    >
      {steps.map((step, i) => (
        <li key={i} className="dl-steps__item">
          <span className="h3 dl-steps__num" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="h5 dl-steps__title">{step.title}</h3>
          {step.meta ? (
            <p className="caption dl-steps__meta">{step.meta}</p>
          ) : null}
          <p className="body-s dl-steps__body">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
