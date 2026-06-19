import Link from "next/link";
import { listProposalsQuery } from "@/modules/proposal/server/proposal.queries";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { formatDate } from "@/shared/lib/format";
import { ProposalListActions } from "@/modules/proposal/components/proposal-list-actions";

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
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">{t.list.title}</h1>
        <Link
          href="/proposals/new"
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
        >
          {t.list.new}
        </Link>
      </div>

      {proposals.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 p-12 text-center">
          <p className="text-gray-500">{t.list.empty}</p>
          <Link
            href="/proposals/new"
            className="mt-2 inline-block text-sm font-medium text-brand-500 hover:text-brand-600"
          >
            {t.list.emptyCta}
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {proposals.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
            >
              <Link href={`/proposals/${p.id}`} className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {p.projectName || t.list.untitled}
                </p>
                <p className="text-xs text-gray-500">
                  {p.clientName} · {formatDate(p.createdAt.toISOString(), locale)}
                </p>
              </Link>
              <ProposalListActions proposalId={p.id} />
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  p.status === "exported"
                    ? "bg-green-50 text-green-700"
                    : p.status === "review" || p.status === "reviewed"
                      ? "bg-blue-50 text-blue-700"
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
  );
}
