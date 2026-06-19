import { getProposalQuery } from "@/modules/proposal/server/proposal.actions";
import { ProposalReviewClient } from "@/modules/proposal/components/proposal-review-client";
import { getSession } from "@/modules/auth/server/session";
import { db } from "@/shared/lib/db";
import { notFound } from "next/navigation";

export default async function ProposalReviewPage({
  params,
}: {
  params: { id: string };
}) {
  const proposal = await getProposalQuery(params.id);
  if (!proposal) notFound();

  const session = await getSession();
  let companyName: string | null = null;
  if (session?.user?.id) {
    const profile = await db.companyProfile.findUnique({
      where: { userId: session.user.id },
      select: { companyName: true },
    });
    companyName = profile?.companyName || session.user.name || null;
  }

  return (
    <ProposalReviewClient
      proposal={proposal}
      companyName={companyName}
      isGuest={!proposal.userId}
    />
  );
}
