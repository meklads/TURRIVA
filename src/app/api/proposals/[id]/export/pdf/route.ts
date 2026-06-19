import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import {
  asciiFilename,
  asObjectList,
  asStringList,
  buildProposalExportHtml,
} from "@/modules/proposal/server/proposal-export-html";
import type { Locale } from "@/shared/i18n/locale";
import { localeToBcp47 } from "@/shared/i18n/locale";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const proposal = await db.proposal.findUnique({
      where: { id: params.id },
    });

    if (!proposal) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let companyName = "";
    if (proposal.userId) {
      const profile = await db.companyProfile.findUnique({
        where: { userId: proposal.userId },
        select: { companyName: true },
      });
      companyName = profile?.companyName ?? "";
    }

    const locale: Locale = proposal.locale === "en" ? "en" : "ar";

    const html = buildProposalExportHtml(locale, {
      projectName: proposal.projectName,
      clientName: proposal.clientName,
      companyName,
      proposalNumber: proposal.proposalNumber,
      date: new Date().toLocaleDateString(localeToBcp47(locale), {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      scopeItems: asObjectList(proposal.scopeItems),
      deliverables: asObjectList(proposal.deliverables),
      timeline:
        proposal.timeline && typeof proposal.timeline === "object"
          ? (proposal.timeline as Record<string, unknown>)
          : null,
      commercialTerms:
        proposal.commercialTerms && typeof proposal.commercialTerms === "object"
          ? (proposal.commercialTerms as Record<string, unknown>)
          : null,
      assumptions: asStringList(proposal.assumptions),
      exclusions: asStringList(proposal.exclusions),
      budget: proposal.budget,
    });

    const fileBase = asciiFilename(proposal.projectName, "proposal");

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `inline; filename="${fileBase}_Proposal.html"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("PDF export error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF", detail: message },
      { status: 500 }
    );
  }
}
