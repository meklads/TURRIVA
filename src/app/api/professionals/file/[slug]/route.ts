import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { getProfessionalResource } from "@/modules/luxury/lib/professionals-content";
import {
  getProfessionalsContentDir,
  verifyProfessionalsAccessFromRequest,
} from "@/modules/luxury/server/professionals-access";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const email = verifyProfessionalsAccessFromRequest(req);
    if (!email) {
      return NextResponse.json({ error: "access_required" }, { status: 401 });
    }

    const { slug } = await params;
    const resource = getProfessionalResource(slug);
    if (!resource) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    const filePath = path.join(getProfessionalsContentDir(), resource.filename);
    const content = await readFile(filePath, "utf8");

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="${resource.filename}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    logServerError("professionals file", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
