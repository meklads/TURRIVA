import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";
import {
  asObjectList,
  asStringList,
  buildProposalExportHtml,
} from "@/modules/proposal/server/proposal-export-html";
import type { Locale } from "@/shared/i18n/locale";
import { localeToBcp47 } from "@/shared/i18n/locale";
import { getProposalIdByShareToken } from "@/modules/proposal/server/proposal.service";

export const dynamic = "force-dynamic";

async function buildExportResponse(proposalId: string) {
  const proposal = await db.proposal.findUnique({
    where: { id: proposalId },
  });

  if (!proposal) return null;

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
    introduction: proposal.introduction,
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

  return { html, projectName: proposal.projectName };
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { token: string } }
) {
  try {
    const proposalId = await getProposalIdByShareToken(params.token);
    if (!proposalId) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const result = await buildExportResponse(proposalId);
    if (!result) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return new NextResponse(result.html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Share export error:", error);
    return NextResponse.json({ error: "Failed to load proposal" }, { status: 500 });
  }
}
