"use server";

import {
  createProposal as createProposalSvc,
  updateProposalField,
  addProposalItem,
  removeProposalItem,
  markSectionReviewed,
} from "./proposal.service";
import type { CreateProposalInput } from "@/shared/types";
import { getSession } from "@/modules/auth/server/session";

// SA1
export async function createProposalAction(input: CreateProposalInput) {
  return createProposalSvc(input);
}

// SA2
export async function generateWithAI(proposalId: string) {
  const { generateProposalContent } = await import("./proposal-ai.service");
  return generateProposalContent(proposalId);
}

// SA3
export async function regenerateSectionAction(
  proposalId: string,
  section: string
) {
  const { regenerateSection } = await import("./proposal-ai.service");
  return regenerateSection(proposalId, section);
}

// SA4
export async function updateFieldAction(
  proposalId: string,
  field: string,
  value: unknown
) {
  return updateProposalField(proposalId, field, value);
}

// SA5
export async function addItemAction(
  proposalId: string,
  section: string,
  item: Record<string, unknown>
) {
  return addProposalItem(proposalId, section, item);
}

// SA6
export async function removeItemAction(
  proposalId: string,
  section: string,
  itemId: string
) {
  return removeProposalItem(proposalId, section, itemId);
}

// SA7
export async function markReviewedAction(
  proposalId: string,
  section: string
) {
  return markSectionReviewed(proposalId, section);
}

// SA8
export async function exportPdfAction(proposalId: string) {
  const { exportProposalAsPdf } = await import("./proposal-pdf.service");
  return exportProposalAsPdf(proposalId);
}

export async function claimProposalAction(proposalId: string) {
  const session = await getSession();
  if (!session?.user?.id) return { success: false };
  const { claimProposal } = await import("./proposal.service");
  return claimProposal(proposalId, session.user.id);
}
