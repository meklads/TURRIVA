import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { isCloudStorageConfigured, uploadPublicObject } from "@/shared/lib/storage";
import { logServerError } from "@/shared/lib/usage-events";

const MAX_BYTES = 8 * 1024 * 1024;

const MIME_TO_EXT = new Map([
  ["image/png", "png"],
  ["image/jpeg", "jpg"],
  ["image/jpg", "jpg"],
  ["image/webp", "webp"],
]);

function sniffImageMime(buffer: Buffer): string | null {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return "image/png";
  }
  if (
    buffer.length >= 12 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return "image/webp";
  }
  return null;
}

async function writeLocalDesignFile(filename: string, buffer: Buffer): Promise<string> {
  const dir = path.join(process.cwd(), "public", "uploads", "designs");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), buffer);
  return `/uploads/designs/${filename}`;
}

export function resolveDesignImageMime(file: File, buffer: Buffer): string {
  const normalizedType =
    file.type === "image/jpg" ? "image/jpeg" : file.type === "application/octet-stream" ? "" : file.type;

  const fromType = MIME_TO_EXT.get(normalizedType);
  if (fromType) return normalizedType;

  const sniffed = sniffImageMime(buffer);
  if (sniffed) return sniffed;

  const lower = file.name.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";

  throw new Error("UNSUPPORTED_TYPE");
}

export function toDataUrl(buffer: Buffer, mime: string): string {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

async function persistDesignBuffer(
  buffer: Buffer,
  mime: string,
  filename: string
): Promise<string | null> {
  if (isCloudStorageConfigured()) {
    try {
      return await uploadPublicObject(`designs/${filename}`, buffer, mime);
    } catch (error) {
      logServerError("design cloud upload", error);
    }
  }

  try {
    return await writeLocalDesignFile(filename, buffer);
  } catch (error) {
    logServerError("design local upload", error);
    return null;
  }
}

export async function saveDesignImageBuffer(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string> {
  if (buffer.length > MAX_BYTES) throw new Error("FILE_TOO_LARGE");

  const ext = MIME_TO_EXT.get(mime);
  if (!ext) throw new Error("UNSUPPORTED_TYPE");

  const filename = `${prefix}-${Date.now()}.${ext}`;
  const url = await persistDesignBuffer(buffer, mime, filename);
  if (!url) throw new Error("STORAGE_FAILED");
  return url;
}

export async function saveDesignImage(file: File, prefix: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const mime = resolveDesignImageMime(file, buffer);
  return saveDesignImageBuffer(buffer, mime, prefix);
}

export async function saveDesignBuffer(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string> {
  const ext = mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
  const filename = `${prefix}-${Date.now()}-preview.${ext}`;
  const url = await persistDesignBuffer(buffer, mime, filename);
  if (!url) throw new Error("STORAGE_FAILED");
  return url;
}

/** Best-effort persist — never throws; returns null if all backends fail. */
export async function trySaveDesignBuffer(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string | null> {
  const ext = mime === "image/png" ? "png" : mime === "image/webp" ? "webp" : "jpg";
  const filename = `${prefix}-${Date.now()}-preview.${ext}`;
  return persistDesignBuffer(buffer, mime, filename);
}

export async function trySaveDesignImageBuffer(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string | null> {
  if (buffer.length > MAX_BYTES) return null;
  const ext = MIME_TO_EXT.get(mime);
  if (!ext) return null;
  const filename = `${prefix}-${Date.now()}.${ext}`;
  return persistDesignBuffer(buffer, mime, filename);
}
