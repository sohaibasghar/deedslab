"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/components/prototypes/use-in-view";
import { useReducedMotion } from "@/components/prototypes/use-reduced-motion";
import type { Cursor } from "@/components/prototypes/use-demo-loop";
import { DemoCursor } from "@/components/prototypes/demo-cursor";
import { cx } from "@/lib/cx";

const DEMO_LINK = "https://deedslab.co/demo/riverside-block-c";

/** Vertical centre of each row, as a percentage of the app frame. */
const ROW_Y = [26.5, 42.5, 58.5, 74.5];

const LIVE_KINDS = {
  platform: {
    title: "Riverside, Block C",
    share: "Share with investors",
    done: "approved",
    toast: "Approved · client notified",
    names: [
      "Site survey",
      "Pour level 3",
      "Steel delivery",
      "Safety inspection",
    ],
    ok: "Approved",
    wait: "Pending",
  },
  bookings: {
    title: "Today, Studio 2",
    share: "Share rota",
    done: "confirmed",
    toast: "Confirmed · guest messaged",
    names: [
      "09:00 Haircut",
      "10:30 Colour",
      "12:00 Consultation",
      "14:00 Treatment",
    ],
    ok: "Confirmed",
    wait: "Awaiting",
  },
  stock: {
    title: "Warehouse, Lahore",
    share: "Share report",
    done: "received",
    toast: "Received · stock updated",
    names: ["Order #1042", "Order #1043", "Order #1044", "Order #1045"],
    ok: "Received",
    wait: "In transit",
  },
};

export type LiveKind = keyof typeof LIVE_KINDS;

const START_CURSOR: Cursor = { x: 60, y: 92, on: false, down: false };
const FLASH_MS = 2600;

/**
 * A small working app: approve rows, watch progress update, copy a share link.
 * It plays itself while on screen until the visitor taps it.
 */
export function LivePrototype({ kind = "platform" }: { kind?: LiveKind }) {
  const copy = LIVE_KINDS[kind];
  const initialRows = () =>
    copy.names.map((name, i) => ({ name, approved: i === 0 }));

  const [rows, setRows] = useState(initialRows);
  const [toast, setToast] = useState("");
  const [shared, setShared] = useState(false);
  const [cursor, setCursor] = useState(START_CURSOR);
  const [touched, setTouched] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const inView = useInView(rootRef);
  const reducedMotion = useReducedMotion();

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };
  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const setRow = (index: number, approved?: boolean) =>
    setRows((list) =>
      list.map((row, i) =>
        i === index ? { ...row, approved: approved ?? !row.approved } : row,
      ),
    );

  const flashToast = () => {
    setToast(copy.toast);
    later(() => setToast(""), FLASH_MS);
  };

  const share = () => {
    try {
      navigator.clipboard?.writeText(DEMO_LINK).catch(() => undefined);
    } catch {}
    setShared(true);
    later(() => setShared(false), FLASH_MS);
  };

  useEffect(() => {
    if (touched || !inView || reducedMotion) return;
    let alive = true;
    const at = (ms: number, fn: () => void) => later(() => alive && fn(), ms);
    const press = () => setCursor((c) => ({ ...c, down: true }));
    const release = () => setCursor((c) => ({ ...c, down: false }));

    const run = () => {
      if (!alive) return;
      setRows(initialRows());
      setToast("");
      setShared(false);
      setCursor(START_CURSOR);
      at(500, () => setCursor({ x: 86, y: ROW_Y[1], on: true, down: false }));
      at(1700, press);
      at(1850, () => {
        release();
        setRow(1, true);
        flashToast();
      });
      at(3600, () => setCursor((c) => ({ ...c, y: ROW_Y[2] })));
      at(4600, press);
      at(4750, () => {
        release();
        setRow(2, true);
        flashToast();
      });
      at(6400, () => setCursor((c) => ({ ...c, x: 83, y: 9 })));
      at(7500, press);
      at(7650, () => {
        release();
        share();
      });
      at(10200, () => setCursor((c) => ({ ...c, on: false })));
      at(11200, run);
    };
    run();

    return () => {
      alive = false;
      clearTimers();
    };
    // The timeline restarts only when visibility, touch or motion preference change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, inView, reducedMotion]);

  // The first touch stops the autoplay and hands the app to the visitor.
  const touch = () => {
    if (touched) return;
    clearTimers();
    setTouched(true);
    setCursor((c) => ({ ...c, on: false, down: false }));
    setToast("");
    setShared(false);
  };

  const approvedCount = rows.filter((row) => row.approved).length;
  const percent = Math.round((approvedCount / rows.length) * 100);
  const still = reducedMotion && !touched;

  return (
    <div
      ref={rootRef}
      className="dl-proto dl-proto--live"
      role="group"
      aria-label={`Interactive demo: ${copy.title}`}
    >
      <div className="dl-proto__stage">
        <div className="dl-proto__app" onPointerDown={touch}>
          <span className="dl-proto__side">
            <i />
            <i />
            <i />
            <i />
          </span>
          <b className="dl-proto__proj">{copy.title}</b>
          <button
            type="button"
            className={cx("dl-live__share", shared && "is-done")}
            onClick={() => {
              touch();
              share();
            }}
          >
            {shared ? "Link copied ✓" : copy.share}
          </button>
          {rows.map((row, i) => (
            <span
              key={row.name}
              className={cx(
                "dl-live__row",
                row.approved && "is-ok",
                cursor.on && !touched && cursor.y === ROW_Y[i] && "is-hover",
              )}
              style={{ top: `${ROW_Y[i] - 6.5}%` }}
            >
              <u />
              <span>{row.name}</span>
              <button
                type="button"
                className={cx(
                  "dl-proto__chip dl-live__chip",
                  row.approved ? "dl-proto__chip--ok" : "dl-proto__chip--wait",
                )}
                onClick={() => {
                  touch();
                  setRow(i, !row.approved);
                  if (!row.approved) flashToast();
                }}
                aria-pressed={row.approved}
              >
                {row.approved ? copy.ok : copy.wait}
              </button>
            </span>
          ))}
          <span className={cx("dl-live__pct", !!toast && "is-toast")}>
            {toast ||
              `${approvedCount} of ${rows.length} ${copy.done} · ${percent}% complete`}
          </span>
          <span className="dl-proto__progress">
            <span
              className="dl-live__fill"
              style={{ width: `${still ? 50 : percent}%` }}
            />
          </span>
          {touched ? null : (
            <span className="dl-live__hint">
              Autoplay · tap anything to try it
            </span>
          )}
          <DemoCursor cursor={cursor} />
        </div>
      </div>
    </div>
  );
}
