"use client";

import { useState } from "react";
import { DemoCursor } from "@/components/prototypes/demo-cursor";
import { useDemoLoop } from "@/components/prototypes/use-demo-loop";
import { cx } from "@/lib/cx";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const BOOKINGS = [
  { day: 0, top: 8, height: 30, name: "Haircut" },
  { day: 0, top: 50, height: 38, name: "Colour" },
  { day: 1, top: 20, height: 26, name: "Consult" },
  { day: 2, top: 6, height: 38, name: "Treatment" },
  { day: 2, top: 56, height: 26, name: "Haircut" },
  { day: 3, top: 30, height: 34, name: "Colour" },
  { day: 4, top: 12, height: 28, name: "Consult" },
  { day: 4, top: 52, height: 34, name: "Treatment" },
];

const AUTOPLAY = [3, 5, 7];

const initial = () => BOOKINGS.map((_, i) => i === 0);

/** A week of salon bookings; tap a slot to confirm it. */
export function BookingsPrototype() {
  const [confirmed, setConfirmed] = useState(initial);
  const { root, targets, cursor, touched, touch } = useDemoLoop(
    (index) => setConfirmed((list) => list.map((on, i) => i === index || on)),
    () => setConfirmed(initial()),
    AUTOPLAY,
  );
  const count = confirmed.filter(Boolean).length;

  return (
    <div
      ref={root}
      className="dl-proto dl-proto--board"
      role="group"
      aria-label="Interactive demo: weekly bookings"
    >
      <div className="dl-board dl-board--cal" onPointerDown={touch}>
        <div className="dl-board__bar">
          <b>This week, Studio 2</b>
          <span className="dl-board__count">
            {count} of {BOOKINGS.length} confirmed
          </span>
        </div>
        <div className="dl-cal">
          {DAYS.map((day, d) => (
            <div key={day} className="dl-cal__col">
              <span className="dl-cal__day">{day}</span>
              <div className="dl-cal__track">
                {BOOKINGS.map((booking, i) =>
                  booking.day === d ? (
                    <button
                      key={i}
                      type="button"
                      ref={(node) => {
                        targets.current[i] = node;
                      }}
                      className={cx("dl-cal__slot", confirmed[i] && "is-on")}
                      style={{
                        top: `${booking.top}%`,
                        height: `${booking.height}%`,
                      }}
                      aria-pressed={confirmed[i]}
                      onClick={() => {
                        touch();
                        setConfirmed((list) =>
                          list.map((on, j) => (j === i ? !on : on)),
                        );
                      }}
                    >
                      {confirmed[i] ? "✓ " : ""}
                      {booking.name}
                    </button>
                  ) : null,
                )}
              </div>
            </div>
          ))}
        </div>
        {touched ? null : (
          <span className="dl-board__hint">
            Autoplay · tap a booking to try it
          </span>
        )}
        <DemoCursor cursor={cursor} />
      </div>
    </div>
  );
}
