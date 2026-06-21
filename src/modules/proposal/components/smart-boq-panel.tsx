"use client";

import { useMemo, useState } from "react";
import type { ProposalBoqLineView, ReviewGateKey, ReviewGates } from "@/shared/types";
import { useT } from "@/shared/i18n/context";
import { formatSar } from "@/shared/lib/format";
import { updateBoqLineAction } from "@/modules/proposal/server/proposal.actions";

function sumBoqAmounts(lines: ReadonlyArray<{ amount: number }>): number {
  return Math.round(lines.reduce((acc, line) => acc + line.amount, 0) * 100) / 100;
}

type Props = {
  proposalId: string;
  budget: number;
  commercialMode: "fixed_price" | "estimate_only";
  variancePercent: number;
  lines: ProposalBoqLineView[];
  contentLocale: "ar" | "en";
  canEdit: boolean;
  commercialGateConfirmed: boolean;
  boqGateConfirmed: boolean;
  onLinesUpdated: (lines: ProposalBoqLineView[], reviewGates: ReviewGates | null) => void;
  onConfirmGate: (gateKey: ReviewGateKey) => Promise<void>;
};

export function SmartBoqPanel({
  proposalId,
  budget,
  commercialMode,
  variancePercent,
  lines: initialLines,
  contentLocale,
  canEdit,
  commercialGateConfirmed,
  boqGateConfirmed,
  onLinesUpdated,
  onConfirmGate,
}: Props) {
  const t = useT();
  const isEstimateOnly = commercialMode === "estimate_only";
  const [lines, setLines] = useState(initialLines);
  const [savingLineId, setSavingLineId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const sum = useMemo(() => sumBoqAmounts(lines), [lines]);
  const sumValid = Math.abs(sum - budget) < 0.02;

  const handleAmountBlur = async (lineId: string, raw: string) => {
    if (!canEdit) return;
    const parsed = parseFloat(raw.replace(/[^\d.]/g, ""));
    if (!Number.isFinite(parsed)) return;

    setSavingLineId(lineId);
    const result = await updateBoqLineAction(proposalId, lineId, parsed);
    setSavingLineId(null);

    if (result.success) {
      setLines(result.lines);
      if (result.reviewGates) {
        onLinesUpdated(result.lines, result.reviewGates);
      }
      setToast(t.review.boq.redistributeToast);
      setTimeout(() => setToast(null), 2500);
    } else {
      alert(result.error ?? t.form.errors.generic);
    }
  };

  if (lines.length === 0) {
    return <p className="text-sm text-gray-400">{t.review.boq.empty}</p>;
  }

  return (
    <div className="mt-6 border-t border-gray-100 pt-5">
      {toast && (
        <p className="mb-3 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-800">
          {toast}
        </p>
      )}

      {isEstimateOnly && (
        <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-900">
          {t.review.boq.estimateDisclaimerTop(variancePercent)}
        </div>
      )}

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-gray-900">{t.review.boq.title}</h3>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            sumValid ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {sumValid ? t.review.boq.budgetLockMatch : t.review.boq.budgetLockMismatch}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] text-sm">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="pb-2 text-start font-medium">{t.review.boq.lineItem}</th>
              <th className="pb-2 text-end font-medium">{t.review.amount}</th>
              <th className="pb-2 text-center font-medium">{t.review.percentage}</th>
              {isEstimateOnly && (
                <th className="pb-2 text-center font-medium">{t.review.boq.estimateBadge}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => {
              const label = contentLocale === "ar" ? line.labelAr : line.labelEn;
              return (
                <tr key={line.id} className="border-b border-gray-50">
                  <td className="py-2 pe-2 text-gray-800">{label}</td>
                  <td className="py-2 text-end tabular-nums">
                    <input
                      type="text"
                      defaultValue={String(Math.round(line.amount))}
                      readOnly={!canEdit}
                      disabled={savingLineId === line.id}
                      onBlur={(e) => handleAmountBlur(line.id, e.target.value)}
                      className="w-24 rounded border border-gray-200 px-2 py-1 text-end outline-none focus:border-brand-400 disabled:opacity-50"
                    />
                  </td>
                  <td className="py-2 text-center tabular-nums text-gray-600">
                    {line.percent.toFixed(1)}%
                  </td>
                  {isEstimateOnly && (
                    <td className="py-2 text-center">
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-900">
                        {t.review.boq.estimateBadge}
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-gray-900">
              <td className="pt-3">{t.review.total}</td>
              <td className="pt-3 text-end tabular-nums">
                {formatSar(sum, contentLocale)} {t.review.currency}
              </td>
              <td className="pt-3 text-center tabular-nums">100%</td>
              {isEstimateOnly && <td />}
            </tr>
          </tfoot>
        </table>
      </div>

      {isEstimateOnly && (
        <p className="mt-3 text-xs leading-relaxed text-amber-800">
          {t.review.boq.estimateDisclaimerBottom(variancePercent)}
        </p>
      )}

      <div className="mt-5 space-y-3 rounded-lg border border-gray-100 bg-gray-50/60 p-4">
        <GateCheckbox
          id="gate-commercial"
          label={t.review.boq.confirmCommercial}
          checked={commercialGateConfirmed}
          disabled={!canEdit || commercialGateConfirmed}
          onConfirm={() => onConfirmGate("commercialTerms")}
        />
        <GateCheckbox
          id="gate-boq"
          label={t.review.boq.confirmBoq}
          checked={boqGateConfirmed}
          disabled={!canEdit || !sumValid || boqGateConfirmed}
          onConfirm={() => onConfirmGate("boqBreakdown")}
        />
      </div>
    </div>
  );
}

function GateCheckbox({
  id,
  label,
  checked,
  disabled,
  onConfirm,
}: {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onConfirm: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-2 text-sm ${
        disabled && !checked ? "opacity-60" : ""
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          if (!checked && !disabled) onConfirm();
        }}
        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
      />
      <span className={checked ? "text-green-800" : "text-gray-700"}>{label}</span>
    </label>
  );
}
