import { NextRequest, NextResponse } from "next/server";
import { saveLeadAttachment } from "@/shared/lib/lead-attachment";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "missing_file" }, { status: 400 });
    }

    const url = await saveLeadAttachment(file);
    return NextResponse.json({ url, name: file.name });
  } catch (error) {
    const message = error instanceof Error ? error.message : "upload_failed";
    if (message === "FILE_TOO_LARGE") {
      return NextResponse.json({ error: "file_too_large" }, { status: 413 });
    }
    if (message === "UNSUPPORTED_TYPE") {
      return NextResponse.json({ error: "unsupported_type" }, { status: 400 });
    }
    logServerError("lead attachment", error);
    return NextResponse.json({ error: "upload_failed" }, { status: 500 });
  }
}
