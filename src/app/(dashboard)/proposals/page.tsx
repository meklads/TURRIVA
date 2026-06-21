import Link from "next/link";
import { listProposalsQuery } from "@/modules/proposal/server/proposal.queries";
import {
  PROPOSAL_LIST_GROUP_ORDER,
  type ProposalListGroup,
} from "@/modules/proposal/lib/proposal-list.utils";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { formatDate } from "@/shared/lib/format";
import { ProposalListActions } from "@/modules/proposal/components/proposal-list-actions";
import { AppPageHero } from "@/shared/components/app-page-hero";

export const dynamic = "force-dynamic";

function statusBadgeClass(status: string): string {
  if (status === "exported") return "bg-green-50 text-green-700";
  if (status === "review" || status === "reviewed") {
    return "bg-amber-50 text-amber-900";
  }
  if (status === "generating") return "bg-blue-50 text-blue-700";
  return "bg-gray-50 text-gray-600";
}

export default async function ProposalsListPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const proposals = await listProposalsQuery();

  const statusLabels: Record<string, string> = {
    draft: t.list.status.draft,
    generating: t.list.status.generating,
    review: t.list.status.review,
    reviewed: t.list.status.reviewed,
    exported: t.list.status.exported,
  };

  const groupLabels: Record<ProposalListGroup, string> = {
    review: t.list.groups.review,
    draft: t.list.groups.draft,
    published: t.list.groups.published,
  };

  const groupEmpty: Record<ProposalListGroup, string> = {
    review: t.list.groupEmpty.review,
    draft: t.list.groupEmpty.draft,
    published: t.list.groupEmpty.published,
  };

  const grouped = PROPOSAL_LIST_GROUP_ORDER.reduce(
    (acc, group) => {
      acc[group] = proposals.filter((p) => p.group === group);
      return acc;
    },
    {} as Record<ProposalListGroup, typeof proposals>
  );

  return (
    <>
      <AppPageHero
        eyebrow={t.nav.myProposals}
        title={t.list.title}
        subtitle={t.list.subtitle}
      >
        <Link href="/proposals/new" className="btn-ruwaq-primary">
          {t.list.new}
        </Link>
      </AppPageHero>

      <div className="app-content-area max-w-3xl">
        {proposals.length === 0 ? (
          <div className="ruwaq-form-card border-dashed text-center">
            <p className="text-ruwaq-navy-soft">{t.list.empty}</p>
            <Link
              href="/proposals/new"
              className="btn-ruwaq-secondary mt-4 inline-flex"
            >
              {t.list.emptyCta}
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {PROPOSAL_LIST_GROUP_ORDER.map((group) => {
              const items = grouped[group];
              return (
                <section key={group}>
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-ruwaq-navy">
                      {groupLabels[group]}
                    </h2>
                    <span className="text-xs text-ruwaq-navy-soft">
                      {items.length}
                    </span>
                  </div>

                  {items.length === 0 ? (
                    <p className="rounded-2xl border border-dashed border-ruwaq-cream bg-ruwaq-cream-bg/50 px-5 py-4 text-sm text-ruwaq-navy-soft">
                      {groupEmpty[group]}
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {items.map((p) => {
                        const showGateProgress =
                          group === "review" && p.gateProgress.total > 0;
                        const gatesComplete =
                          p.gateProgress.confirmed >= p.gateProgress.total;

                        return (
                          <div
                            key={p.id}
                            className="flex items-center justify-between gap-3 rounded-2xl border border-ruwaq-cream bg-white px-5 py-4 shadow-ruwaq transition-shadow hover:shadow-ruwaq-lg"
                          >
                            <Link
                              href={`/proposals/${p.id}`}
                              className="min-w-0 flex-1"
                            >
                              <p className="font-semibold text-ruwaq-navy">
                                {p.projectName || t.list.untitled}
                              </p>
                              <p className="mt-0.5 text-xs text-ruwaq-navy-soft">
                                {p.clientName} ·{" "}
                                {formatDate(p.createdAt.toISOString(), locale)}
                              </p>
                              {showGateProgress ? (
                                <p
                                  className={`mt-1.5 text-xs font-semibold ${
                                    gatesComplete
                                      ? "text-green-700"
                                      : "text-amber-800"
                                  }`}
                                >
                                  {t.list.gatesProgress(
                                    p.gateProgress.confirmed,
                                    p.gateProgress.total
                                  )}
                                </p>
                              ) : null}
                            </Link>
                            <ProposalListActions proposalId={p.id} />
                            <span
                              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClass(p.status)}`}
                            >
                              {statusLabels[p.status] ?? p.status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
