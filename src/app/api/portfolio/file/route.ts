import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import {
  getPortfolioPdfPath,
  verifyPortfolioAccessFromRequest,
} from "@/modules/luxury/server/portfolio-access";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const email = verifyPortfolioAccessFromRequest(req);
  if (!email) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const pdfPath = getPortfolioPdfPath();
    const buffer = await readFile(pdfPath);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Turriva-Folio-2026.pdf"',
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    logServerError("portfolio file", error);
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
}
