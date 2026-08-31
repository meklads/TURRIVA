import { ImageResponse } from "next/og";
import { TurrivaFaviconMark } from "@/shared/lib/turriva-favicon-mark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<TurrivaFaviconMark size={32} />, {
    width: 32,
    height: 32,
  });
}
