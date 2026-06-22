import { getProposalQuery } from "@/modules/proposal/server/proposal.queries";
import { ProposalReviewClient } from "@/modules/proposal/components/proposal-review-client";
import { getSession } from "@/modules/auth/server/session";
import { db } from "@/shared/lib/db";
import { notFound, redirect } from "next/navigation";
import { isCompanyProfileThin } from "@/modules/company/lib/profile-completeness";
import { AppPageHero } from "@/shared/components/app-page-hero";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { bindProposalEditKey } from "@/modules/proposal/server/proposal-edit-access";

export const dynamic = "force-dynamic";

export default async function ProposalReviewPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { key?: string; claim?: string };
}) {
  if (searchParams?.key) {
    const bound = await bindProposalEditKey(params.id, searchParams.key);
    if (bound) {
      const claim = searchParams.claim ? "?claim=1" : "";
      redirect(`/proposals/${params.id}${claim}`);
    }
    notFound();
  }

  const proposal = await getProposalQuery(params.id);
  if (!proposal) notFound();

  const locale = await getLocale();
  const t = getMessages(locale);

  const session = await getSession();
  let companyName: string | null = null;
  let profileThin = false;
  if (session?.user?.id) {
    const profile = await db.companyProfile.findUnique({
      where: { userId: session.user.id },
      select: { companyName: true, crNumber: true, about: true },
    });
    companyName = profile?.companyName || session.user.name || null;
    profileThin = isCompanyProfileThin(profile);
  }

  return (
    <>
      <AppPageHero
        eyebrow={t.review.draftBadge}
        title={proposal.projectName || t.list.untitled}
        subtitle={t.review.pageSubtitle}
      />
      <div className="app-content-area max-w-3xl">
        <ProposalReviewClient
          proposal={proposal}
          companyName={companyName}
          profileThin={profileThin}
          isGuest={!proposal.userId}
        />
      </div>
    </>
  );
}
