import { readFile } from "fs/promises";
import path from "path";

export async function loadImageBuffer(sourceUrl: string): Promise<Buffer> {
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
