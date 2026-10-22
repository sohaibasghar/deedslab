import type { CSSProperties } from "react";

export type TypingSegment = { text: string; highlight?: boolean };

const DEFAULT_SPEED = 60;
const DEFAULT_DELAY = 300;

/** Milliseconds until the text has finished typing, from page load. */
export function typingDuration(
  segments: TypingSegment[],
  speed = DEFAULT_SPEED,
  delay = DEFAULT_DELAY,
) {
  return (
    delay +
    segments.reduce((sum, segment) => sum + segment.text.length, 0) * speed
  );
}

type TypingTextProps = {
  segments: TypingSegment[];
  /** Milliseconds per character. */
  speed?: number;
  /** Milliseconds before the first character. */
  delay?: number;
};

/**
 * Text that types itself out, CSS only. Every character is laid out from the
 * start and revealed in turn, so nothing reflows. Screen readers and search
 * engines get the plain text. With reduced motion the text simply shows.
 */
export function TypingText({
  segments,
  speed = DEFAULT_SPEED,
  delay = DEFAULT_DELAY,
}: TypingTextProps) {
  let index = 0;

  const char = (ch: string) => {
    const i = index++;
    return (
      <span
        key={i}
        className="dl-type__char"
        style={{ "--i": i } as CSSProperties}
      >
        {ch}
      </span>
    );
  };

  return (
    <span
      className="dl-type"
      style={
        {
          "--type-speed": `${speed}ms`,
          "--type-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      <span className="dl-sr">
        {segments.map((segment) => segment.text).join("")}
      </span>
      <span aria-hidden="true">
        {segments.map((segment, s) => {
          // Words stay unbroken so the line wraps exactly as plain text would.
          const parts = segment.text.split(/( )/).map((part, p) =>
            part === " " ? (
              char(" ")
            ) : part ? (
              <span key={`w${p}`} className="dl-type__word">
                {[...part].map(char)}
              </span>
            ) : null,
          );
          return segment.highlight ? (
            <span key={s} className="dl-hl">
              {parts}
            </span>
          ) : (
            <span key={s}>{parts}</span>
          );
        })}
      </span>
    </span>
  );
}
