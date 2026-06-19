import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";

export class ProposalAccessError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProposalAccessError";
  }
}

/** Guest proposals (userId null) are editable by anyone with the link. Owned proposals require the owner. */
export async function assertCanMutateProposal(proposalId: string) {
  const proposal = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { userId: true },
  });
  if (!proposal) {
    throw new ProposalAccessError("Proposal not found");
  }
  if (!proposal.userId) return proposal;

  const session = await getSession();
  if (!session?.user?.id || session.user.id !== proposal.userId) {
    throw new ProposalAccessError("Unauthorized");
  }
  return proposal;
}

export async function assertCanClaimProposal(proposalId: string, userId: string) {
  const proposal = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { userId: true },
  });
  if (!proposal) {
    throw new ProposalAccessError("Proposal not found");
  }
  if (proposal.userId && proposal.userId !== userId) {
    throw new ProposalAccessError("This proposal belongs to another account");
  }
  return proposal;
}
