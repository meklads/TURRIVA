import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomBytes } from "crypto";
import { isCloudStorageConfigured, uploadPublicObject } from "@/shared/lib/storage";
import { logServerError } from "@/shared/lib/usage-events";

const MAX_BYTES = 12 * 1024 * 1024;

const ALLOWED_MIME = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "application/acad",
  "application/x-acad",
  "application/octet-stream",
]);

const EXT_BY_MIME: Record<string, string> = {
  "application/pdf": "pdf",
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

function extFromName(name: string): string | null {
  const lower = name.toLowerCase();
  if (lower.endsWith(".pdf")) return "pdf";
  if (lower.endsWith(".png")) return "png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "jpg";
  if (lower.endsWith(".webp")) return "webp";
  if (lower.endsWith(".dwg")) return "dwg";
  if (lower.endsWith(".dxf")) return "dxf";
  return null;
}

function resolveMime(file: File): string {
  if (file.type && ALLOWED_MIME.has(file.type)) return file.type;
  const ext = extFromName(file.name);
  if (ext === "pdf") return "application/pdf";
  if (ext === "png") return "image/png";
  if (ext === "jpg") return "image/jpeg";
  if (ext === "webp") return "image/webp";
  if (ext === "dwg" || ext === "dxf") return "application/octet-stream";
  throw new Error("UNSUPPORTED_TYPE");
}

async function writeLocalLeadFile(filename: string, buffer: Buffer): Promise<string> {
  const dir = path.join(process.cwd(), "public", "uploads", "leads");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), buffer);
  return `/uploads/leads/${filename}`;
}

export async function saveLeadAttachment(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length > MAX_BYTES) throw new Error("FILE_TOO_LARGE");

  const mime = resolveMime(file);
  const ext = EXT_BY_MIME[mime] ?? extFromName(file.name) ?? "bin";
  const token = randomBytes(8).toString("hex");
  const filename = `brief-${Date.now()}-${token}.${ext}`;

  if (isCloudStorageConfigured()) {
    try {
      return await uploadPublicObject(`leads/${filename}`, buffer, mime);
    } catch (error) {
      logServerError("lead attachment cloud upload", error);
    }
  }

  return writeLocalLeadFile(filename, buffer);
}
