import { readFile } from "fs/promises";
import path from "path";

function appOrigin(): string {
  return (process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL ?? "http://localhost:3000").replace(
    /\/$/,
    ""
  );
}

export async function loadImageBuffer(sourceUrl: string): Promise<Buffer> {
  if (sourceUrl.startsWith("/uploads/")) {
    return readFile(path.join(process.cwd(), "public", sourceUrl));
  }

  if (sourceUrl.startsWith("http://") || sourceUrl.startsWith("https://")) {
    const res = await fetch(sourceUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("FETCH_IMAGE_FAILED");
    return Buffer.from(await res.arrayBuffer());
  }

  if (sourceUrl.startsWith("/")) {
    const res = await fetch(`${appOrigin()}${sourceUrl}`, { cache: "no-store" });
    if (!res.ok) throw new Error("FETCH_IMAGE_FAILED");
    return Buffer.from(await res.arrayBuffer());
  }

  throw new Error("INVALID_IMAGE_URL");
}
