import Link from "next/link";
import { listProposalsQuery } from "@/modules/proposal/server/proposal.queries";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { formatDate } from "@/shared/lib/format";
import { ProposalListActions } from "@/modules/proposal/components/proposal-list-actions";
import { AppPageHero } from "@/shared/components/app-page-hero";

export const dynamic = "force-dynamic";

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
          <div className="space-y-3">
            {proposals.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-ruwaq-cream bg-white px-5 py-4 shadow-ruwaq transition-shadow hover:shadow-ruwaq-lg"
              >
                <Link href={`/proposals/${p.id}`} className="min-w-0 flex-1">
                  <p className="font-semibold text-ruwaq-navy">
                    {p.projectName || t.list.untitled}
                  </p>
                  <p className="mt-0.5 text-xs text-ruwaq-navy-soft">
                    {p.clientName} · {formatDate(p.createdAt.toISOString(), locale)}
                  </p>
                </Link>
                <ProposalListActions proposalId={p.id} />
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    p.status === "exported"
                      ? "bg-green-50 text-green-700"
                      : p.status === "review" || p.status === "reviewed"
                        ? "bg-ruwaq-cream-bg text-ruwaq-navy"
                        : "bg-gray-50 text-gray-600"
                  }`}
                >
                  {statusLabels[p.status] ?? p.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
