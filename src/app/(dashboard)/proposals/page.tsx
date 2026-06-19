import { listProposalsQuery } from "@/modules/proposal/server/proposal.queries";
import { t } from "@/shared/i18n";
import { formatDate } from "@/shared/lib/format";
import Link from "next/link";

export const dynamic = "force-dynamic";

const statusLabels: Record<string, string> = {
  draft: t.list.status.draft,
  generating: t.list.status.generating,
  review: t.list.status.review,
  reviewed: t.list.status.reviewed,
  exported: t.list.status.exported,
};

export default async function ProposalsListPage() {
  const proposals = await listProposalsQuery();

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
            <Link
              key={p.id}
              href={`/proposals/${p.id}`}
              className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition-colors hover:bg-gray-50"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {p.projectName || t.list.untitled}
                </p>
                <p className="text-xs text-gray-500">
                  {p.clientName} · {formatDate(p.createdAt.toISOString())}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  p.status === "exported"
                    ? "bg-green-50 text-green-700"
                    : p.status === "review" || p.status === "reviewed"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-gray-50 text-gray-600"
                }`}
              >
                {statusLabels[p.status] ?? p.status}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
