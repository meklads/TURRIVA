import { db } from "@/shared/lib/db";
import { asciiFilename } from "./proposal-export-html";

export async function exportProposalAsPdf(proposalId: string) {
  const proposal = await db.proposal.findUnique({ where: { id: proposalId } });
  if (!proposal) throw new Error("Proposal not found");

  const proposalNumber =
    proposal.proposalNumber ??
    `PROP-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;

  try {
    await db.generatedDocument.create({
      data: {
        proposalId,
        type: "pdf",
        fileUrl: null,
        shareToken: null,
      },
    });
  } catch (error) {
    // Non-blocking — export HTML can still proceed
    console.warn("Could not save GeneratedDocument record:", error);
  }

  await db.proposal.update({
    where: { id: proposalId },
    data: {
      status: "exported",
      exportedAt: new Date(),
      proposalNumber,
    },
  });

  const fileBase = asciiFilename(proposal.projectName, "proposal");

  return {
    url: `/api/proposals/${proposalId}/export/pdf`,
    filename: `${fileBase}_Proposal.html`,
    proposalNumber,
  };
}
