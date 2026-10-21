"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/components/prototypes/use-in-view";
import { useReducedMotion } from "@/components/prototypes/use-reduced-motion";

export type Cursor = { x: number; y: number; on: boolean; down: boolean };

const RESTING: Cursor = { x: 50, y: 95, on: false, down: false };

/**
 * Autoplays a board demo: a fake cursor moves to each target in `sequence`,
 * presses it and calls `press`, then `reset` restarts the loop. It runs only
 * while the board is on screen, stops for good once the visitor touches the
 * board, and never runs with reduced motion.
 */
export function useDemoLoop(
  press: (index: number) => void,
  reset: () => void,
  sequence: number[],
) {
  const root = useRef<HTMLDivElement>(null);
  const targets = useRef<Array<HTMLElement | null>>([]);
  const [cursor, setCursor] = useState<Cursor>(RESTING);
  const [touched, setTouched] = useState(false);
  const inView = useInView(root);
  const reducedMotion = useReducedMotion();

  // The latest callbacks, read by the running loop without restarting it.
  const actions = useRef({ press, reset });
  useEffect(() => {
    actions.current = { press, reset };
  });

  useEffect(() => {
    if (touched || !inView || reducedMotion) return;
    let alive = true;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) =>
      timers.push(window.setTimeout(() => alive && fn(), ms));

    // Cursor position over a target, as a percentage of the board.
    const pointAt = (index: number) => {
      const board = root.current?.querySelector(".dl-board");
      const target = targets.current[index];
      if (!board || !target) return null;
      const b = board.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      return {
        x: ((t.left + t.width * 0.65 - b.left) / b.width) * 100,
        y: ((t.top + t.height * 0.55 - b.top) / b.height) * 100,
      };
    };

    const run = () => {
      actions.current.reset();
      setCursor(RESTING);
      let time = 600;
      for (const index of sequence) {
        at(time, () => {
          const point = pointAt(index);
          if (point) setCursor({ ...point, on: true, down: false });
        });
        at(time + 1300, () => setCursor((c) => ({ ...c, down: true })));
        at(time + 1450, () => {
          setCursor((c) => ({ ...c, down: false }));
          actions.current.press(index);
        });
        time += 2600;
      }
      at(time + 800, () => setCursor((c) => ({ ...c, on: false })));
      at(time + 2400, run);
    };
    run();

    return () => {
      alive = false;
      timers.forEach((id) => window.clearTimeout(id));
    };
    // `sequence` is a fixed list per board.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, inView, reducedMotion]);

  const touch = () => {
    if (touched) return;
    setTouched(true);
    setCursor((c) => ({ ...c, on: false }));
  };

  return { root, targets, cursor, touched, touch };
}
