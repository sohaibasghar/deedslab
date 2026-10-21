import { ImageResponse } from "next/og";
import { OgMark } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the mark on ink. */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#191c1d",
      }}
    >
      <OgMark width={124} />
    </div>,
    size,
  );
}
