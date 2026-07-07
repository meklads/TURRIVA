import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

/** Max longest edge for free preview exports — HD unlock comes in a later tier. */
const PREVIEW_MAX_PX = 960;
const JPEG_QUALITY = 72;

async function loadImageBuffer(sourceUrl: string): Promise<Buffer> {
  if (sourceUrl.startsWith("/uploads/")) {
    return readFile(path.join(process.cwd(), "public", sourceUrl));
  }

  if (sourceUrl.startsWith("http://") || sourceUrl.startsWith("https://")) {
    const res = await fetch(sourceUrl);
    if (!res.ok) throw new Error("FETCH_IMAGE_FAILED");
    return Buffer.from(await res.arrayBuffer());
  }

  throw new Error("INVALID_IMAGE_URL");
}

function escapeSvg(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function watermarkSvg(width: number, height: number, label: string): Buffer {
  const safe = escapeSvg(label);
  const centerX = width / 2;
  const centerY = height / 2;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <pattern id="wm" width="300" height="140" patternTransform="rotate(-22)" patternUnits="userSpaceOnUse">
        <text x="12" y="72" fill="rgba(255,255,255,0.3)" font-size="22" font-family="Arial,sans-serif" font-weight="700">${safe}</text>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#wm)"/>
    <rect x="${centerX - 150}" y="${centerY - 30}" width="300" height="60" rx="10" fill="rgba(15,23,42,0.62)"/>
    <text x="${centerX}" y="${centerY + 8}" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial,sans-serif" font-weight="700">${safe}</text>
  </svg>`);
}

/**
 * Low-resolution, watermarked preview — what B2C/B2B free tiers receive.
 */
export async function buildWatermarkedPreview(
  sourceUrl: string,
  watermarkLabel: string
): Promise<Buffer> {
  const input = await loadImageBuffer(sourceUrl);

  const resized = sharp(input).resize({
    width: PREVIEW_MAX_PX,
    height: PREVIEW_MAX_PX,
    fit: "inside",
    withoutEnlargement: true,
  });

  const meta = await resized.metadata();
  const outW = meta.width ?? PREVIEW_MAX_PX;
  const outH = meta.height ?? PREVIEW_MAX_PX;

  return resized
    .composite([{ input: watermarkSvg(outW, outH, watermarkLabel), blend: "over" }])
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
}
