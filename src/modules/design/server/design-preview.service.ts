import sharp from "sharp";
import { loadImageBuffer } from "./design-image.utils";

/** Max longest edge for free preview exports — HD unlock comes in a later tier. */
const PREVIEW_MAX_PX = 960;
const JPEG_QUALITY = 72;

function escapeSvg(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}

function watermarkSvg(width: number, height: number, label: string): Buffer {
  const safe = escapeSvg(label);
  const centerX = width / 2;
  const centerY = height / 2;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <pattern id="wm" width="300" height="140" patternTransform="rotate(-22)" patternUnits="userSpaceOnUse">
      <text x="12" y="72" fill="rgba(255,255,255,0.3)" font-size="22" font-family="Arial,sans-serif" font-weight="700">${safe}</text>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#wm)"/>
  <rect x="${centerX - 150}" y="${centerY - 30}" width="300" height="60" rx="10" fill="rgba(15,23,42,0.62)"/>
  <text x="${centerX}" y="${centerY + 8}" text-anchor="middle" fill="#ffffff" font-size="20" font-family="Arial,sans-serif" font-weight="700">${safe}</text>
</svg>`;
  return Buffer.from(svg, "utf-8");
}

/**
 * Low-resolution, watermarked preview — what B2C/B2B free tiers receive.
 * Uses ASCII watermark text for reliable sharp/librsvg rendering.
 */
export async function buildWatermarkedPreviewFromBuffer(input: Buffer): Promise<Buffer> {
  const watermarkText = "RUWAQ PREVIEW";

  const resizedBuffer = await sharp(input)
    .rotate()
    .resize({
      width: PREVIEW_MAX_PX,
      height: PREVIEW_MAX_PX,
      fit: "inside",
      withoutEnlargement: true,
    })
    .toBuffer();

  const meta = await sharp(resizedBuffer).metadata();
  const outW = meta.width ?? PREVIEW_MAX_PX;
  const outH = meta.height ?? PREVIEW_MAX_PX;

  return sharp(resizedBuffer)
    .composite([{ input: watermarkSvg(outW, outH, watermarkText), top: 0, left: 0, blend: "over" }])
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
}

export async function buildWatermarkedPreview(
  sourceUrl: string,
  _watermarkLabel?: string
): Promise<Buffer> {
  const input = await loadImageBuffer(sourceUrl);
  return buildWatermarkedPreviewFromBuffer(input);
}
