import type { ReactNode } from "react";
import { Icon } from "@/components/ds/icon";
import { cx } from "@/lib/cx";

/** A cell value: `true` and `false` render as a tick and a dash. */
export type CompareValue = ReactNode | boolean;
export type CompareRow = { label: ReactNode; values: CompareValue[] };

function Cell({ value }: { value: CompareValue }) {
  if (value === true) {
    return (
      <span className="dl-yes">
        <Icon name="check" size={18} />
        <span className="dl-sr">Yes</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="dl-no">
        <Icon name="dash" size={18} />
        <span className="dl-sr">No</span>
      </span>
    );
  }
  return <>{value}</>;
}

type CompareTableProps = {
  caption: string;
  columns: ReactNode[];
  rows: CompareRow[];
  /** Index of the column to emphasise. */
  highlight?: number;
  className?: string;
};

export function CompareTable({
  caption,
  columns,
  rows,
  highlight = 0,
  className,
}: CompareTableProps) {
  return (
    <div
      className={cx("dl-compare", className)}
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table>
        <caption className="dl-sr">{caption}</caption>
        <thead>
          <tr>
            <td />
            {columns.map((column, i) => (
              <th
                key={i}
                scope="col"
                className={cx("label", i === highlight && "is-hi")}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              <th scope="row" className="body-s dl-compare__rowhead">
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className={cx("body-s", i === highlight && "is-hi")}
                >
                  <Cell value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
