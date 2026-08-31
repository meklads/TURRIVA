import { ImageResponse } from "next/og";
import { TurrivaFaviconMark } from "@/shared/lib/turriva-favicon-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<TurrivaFaviconMark size={180} />, {
    width: 180,
    height: 180,
  });
}
