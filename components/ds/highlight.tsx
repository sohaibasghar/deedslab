import type { ReactNode } from "react";

/** Renders `[[words]]` inside a title string as a highlighted span. */
export function highlight(title: ReactNode): ReactNode {
  if (typeof title !== "string" || !title.includes("[[")) return title;
  return title.split(/\[\[(.+?)\]\]/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="dl-hl">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
