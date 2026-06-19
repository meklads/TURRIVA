"use server";

import {
  createProposal as createProposalSvc,
  getProposal,
  updateProposalField,
  addProposalItem,
  removeProposalItem,
  markSectionReviewed,
  listUserProposals,
} from "./proposal.service";
import { generateProposalContent } from "./proposal-ai.service";
import { exportProposalAsPdf } from "./proposal-pdf.service";
import type { CreateProposalInput } from "@/shared/types";
import { getSession } from "@/modules/auth/server/session";

// SA1
export async function createProposalAction(input: CreateProposalInput) {
  return createProposalSvc(input);
}

// SA2
export async function generateWithAI(proposalId: string) {
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
  return exportProposalAsPdf(proposalId);
}

// Query (not server action, but exported for server components)
export async function getProposalQuery(id: string) {
  return getProposal(id);
}

export async function listProposalsQuery() {
  const session = await getSession();
  if (!session?.user?.id) return [];
  return listUserProposals(session.user.id);
}

export async function claimProposalAction(proposalId: string) {
  const session = await getSession();
  if (!session?.user?.id) return { success: false };
  const { claimProposal } = await import("./proposal.service");
  return claimProposal(proposalId, session.user.id);
}
