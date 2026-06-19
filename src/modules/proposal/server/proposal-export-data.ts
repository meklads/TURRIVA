import { db } from "@/shared/lib/db";
import type { CommercialMode } from "@/shared/types";
import type { Locale } from "@/shared/i18n/locale";
import { localeToBcp47 } from "@/shared/i18n/locale";
import {
  asObjectList,
  asStringList,
  buildProposalExportHtml,
} from "./proposal-export-html";

export async function buildProposalExportHtmlForId(proposalId: string) {
  const proposal = await db.proposal.findUnique({ where: { id: proposalId } });
  if (!proposal) return null;

  const company = proposal.userId
    ? await db.companyProfile.findUnique({
        where: { userId: proposal.userId },
      })
    : null;

  const locale: Locale = proposal.locale === "en" ? "en" : "ar";
  const commercialMode: CommercialMode =
    proposal.commercialMode === "estimate_only" ? "estimate_only" : "fixed_price";

  const validityDate = new Date();
  validityDate.setDate(validityDate.getDate() + 30);

  const html = buildProposalExportHtml(locale, {
    projectName: proposal.projectName,
    clientName: proposal.clientName,
    companyName: company?.companyName ?? undefined,
    crNumber: company?.crNumber ?? undefined,
    vatNumber: company?.vatNumber ?? undefined,
    companyPhone: company?.phone ?? undefined,
    companyEmail: company?.email ?? undefined,
    proposalNumber: proposal.proposalNumber,
    introduction: proposal.introduction,
    date: new Date().toLocaleDateString(localeToBcp47(locale), {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    validityDate: validityDate.toLocaleDateString(localeToBcp47(locale), {
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
    commercialMode,
  });

  return { html, projectName: proposal.projectName };
}
