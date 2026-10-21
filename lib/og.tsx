import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const INK = "#191c1d";
const TEXT = "#f2f2f2";
const MUTED = "#9ba3a8";
const ACCENT = "#71cf94";

const MARK_PATH =
  "M93.76,0c36.48,0,68.1,13.12,93.98,39.01,14.45,14.45,24.95,30.75,31.36,48.65,6.44-17.91,16.95-34.22,31.38-48.65C276.36,13.12,307.97,0,344.46,0h93.77v112.62h-40.83V40.78h-52.94c-25.28,0-47.09,9.09-64.81,27.04-17.75,17.92-26.75,39.86-26.75,65.22s9,47.52,26.74,65.35c17.74,17.82,39.54,26.86,64.82,26.86h52.94v-71.84h40.83v112.67h-93.77c-36.43,0-68.05-13.12-93.97-39-14.43-14.43-24.95-30.74-31.39-48.65-6.41,17.89-16.91,34.2-31.36,48.65-25.93,25.88-57.55,39.01-93.98,39.01H0v-112.67h40.83v71.84h52.93c25.28,0,47.09-9.04,64.83-26.86,17.74-17.83,26.74-39.82,26.74-65.35s-9-47.29-26.75-65.21c-17.72-17.95-39.53-27.04-64.82-27.04h-52.93v71.84H0V0h93.76Z";

const fonts = Promise.all([
  readFile(join(process.cwd(), "assets/fonts/AlbertSans-Light.ttf")),
  readFile(join(process.cwd(), "assets/fonts/AlbertSans-Medium.ttf")),
]);

/** The Deeds Lab mark, sized by width. */
export function OgMark({
  width,
  color = ACCENT,
}: {
  width: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={Math.round((width * 266.06) / 438.22)}
      viewBox="0 0 438.22 266.06"
    >
      <path d={MARK_PATH} fill={color} />
    </svg>
  );
}

/**
 * A 1200×630 share card: mark and name, the page's title with its `[[highlight]]`
 * in green, and a short line underneath.
 */
export async function renderOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const [light, medium] = await fonts;
  // Lay the title out word by word so lines break cleanly; a word can mix
  // highlighted and plain text (e.g. "ready" + ".").
  const words: { text: string; hi: boolean }[][] = [[]];
  title.split(/\[\[(.+?)\]\]/g).forEach((part, i) => {
    part.split(" ").forEach((chunk, j) => {
      if (j > 0) words.push([]);
      if (chunk) words[words.length - 1].push({ text: chunk, hi: i % 2 === 1 });
    });
  });
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: INK,
        color: TEXT,
        fontFamily: "Albert Sans",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <OgMark width={64} />
        <span style={{ fontSize: 34, fontWeight: 500 }}>{SITE.name}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: title.length > 48 ? 64 : 80,
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {words
            .filter((word) => word.length)
            .map((word, i) => (
              <span key={i} style={{ display: "flex", marginRight: "0.25em" }}>
                {word.map((piece, j) => (
                  <span key={j} style={{ color: piece.hi ? ACCENT : TEXT }}>
                    {piece.text}
                  </span>
                ))}
              </span>
            ))}
        </div>
        {subtitle ? (
          <div style={{ fontSize: 30, color: MUTED, maxWidth: 960 }}>
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "Albert Sans", data: light, weight: 300, style: "normal" },
        { name: "Albert Sans", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
