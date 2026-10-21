import type { Cursor } from "@/components/prototypes/use-demo-loop";
import { cx } from "@/lib/cx";

/** The fake pointer that plays a demo. */
export function DemoCursor({ cursor }: { cursor: Cursor }) {
  return (
    <span
      className={cx(
        "dl-proto__cursor dl-live__cursor",
        cursor.on && "is-on",
        cursor.down && "is-down",
      )}
      style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
    />
  );
}
