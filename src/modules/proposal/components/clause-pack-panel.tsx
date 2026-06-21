"use client";

import { useState } from "react";
import type { ProposalClauseSelectionView, ReviewGateKey } from "@/shared/types";
import { useT } from "@/shared/i18n/context";

type Props = {
  contentLocale: "ar" | "en";
  canEdit: boolean;
  packNameAr: string | null;
  packNameEn: string | null;
  packVersion: string | null;
  selections: ProposalClauseSelectionView[];
  clauseGateConfirmed: boolean;
  legalGateConfirmed: boolean;
  onConfirmGate: (gateKey: ReviewGateKey) => Promise<void>;
};

export function ClausePackPanel({
  contentLocale,
  canEdit,
  packNameAr,
  packNameEn,
  packVersion,
  selections,
  clauseGateConfirmed,
  legalGateConfirmed,
  onConfirmGate,
}: Props) {
  const t = useT();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const packName =
    contentLocale === "ar"
      ? packNameAr ?? t.review.clauses.defaultPackName
      : packNameEn ?? t.review.clauses.defaultPackName;

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (selections.length === 0) {
    return (
      <section className="section-card">
        <h2 className="text-base font-bold text-gray-900">{t.review.clauses.title}</h2>
        <p className="mt-2 text-sm text-gray-400">{t.review.clauses.empty}</p>
      </section>
    );
  }

  return (
    <section className="section-card">
      <div className="mb-4">
        <h2 className="text-base font-bold text-gray-900">{t.review.clauses.title}</h2>
        <p className="mt-1 text-xs text-gray-500">
          {packName}
          {packVersion ? ` · v${packVersion}` : ""}
          {" · "}
          {t.review.clauses.approvedCount(selections.length)}
        </p>
      </div>

      <div className="space-y-2">
        {selections.map((clause) => {
          const text =
            contentLocale === "ar" ? clause.renderedTextAr : clause.renderedTextEn;
          const isOpen = expanded[clause.id] ?? clause.isMandatory;

          return (
            <div
              key={clause.id}
              className="rounded-lg border border-gray-100 bg-gray-50/40"
            >
              <button
                type="button"
                onClick={() => toggleExpand(clause.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-start"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    {categoryLabel(clause.category, t)}
                  </span>
                  {clause.isMandatory ? (
                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-800">
                      {t.review.clauses.mandatory}
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
                      {t.review.clauses.recommended}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && text && (
                <div className="border-t border-gray-100 px-3 pb-3 pt-2">
                  <p className="text-sm leading-relaxed text-gray-700">{text}</p>
                  {clause.sourceRef && (
                    <p className="mt-2 text-[10px] text-gray-400">
                      {t.review.clauses.source}: {clause.sourceRef}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 space-y-3 rounded-lg border border-amber-100 bg-amber-50/50 p-4">
        <label className="flex cursor-pointer items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={clauseGateConfirmed}
            disabled={!canEdit || clauseGateConfirmed}
            onChange={() => {
              if (!clauseGateConfirmed) void onConfirmGate("clausePack");
            }}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600"
          />
          <span className={clauseGateConfirmed ? "text-green-800" : "text-gray-800"}>
            {t.review.clauses.confirmClauses}
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-2 text-sm">
          <input
            type="checkbox"
            checked={legalGateConfirmed}
            disabled={!canEdit || legalGateConfirmed}
            onChange={() => {
              if (!legalGateConfirmed) void onConfirmGate("legalDisclaimer");
            }}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600"
          />
          <span className={legalGateConfirmed ? "text-green-800" : "text-gray-800"}>
            {t.review.clauses.legalDisclaimer}
          </span>
        </label>
      </div>
    </section>
  );
}

function categoryLabel(category: string, t: ReturnType<typeof useT>): string {
  const map = t.review.clauses.categories as Record<string, string>;
  return map[category] ?? category;
}
