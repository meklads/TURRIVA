import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { isCloudStorageConfigured, uploadPublicObject } from "@/shared/lib/storage";

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Map([
  ["image/png", "png"],
  ["image/jpeg", "jpg"],
  ["image/webp", "webp"],
]);

export async function saveDesignImage(
  file: File,
  prefix: string
): Promise<string> {
  if (file.size > MAX_BYTES) throw new Error("FILE_TOO_LARGE");

  const ext = ALLOWED_TYPES.get(file.type);
  if (!ext) throw new Error("UNSUPPORTED_TYPE");

  const filename = `${prefix}-${Date.now()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  if (isCloudStorageConfigured()) {
    return uploadPublicObject(`designs/${filename}`, buffer, file.type);
  }

  const dir = path.join(process.cwd(), "public", "uploads", "designs");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), buffer);
  return `/uploads/designs/${filename}`;
}
