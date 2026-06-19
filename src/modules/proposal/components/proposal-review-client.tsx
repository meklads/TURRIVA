"use client";

import { useState, useCallback } from "react";
import type { Proposal } from "@/shared/types";
import {
  updateFieldAction,
  addItemAction,
  removeItemAction,
  markReviewedAction,
  exportPdfAction,
  generateWithAI,
} from "@/modules/proposal/server/proposal.actions";
import Link from "next/link";
import { useLocale, useT } from "@/shared/i18n/context";
import { validateLocaleText } from "@/shared/i18n/locale";
import { formatDate, formatSar } from "@/shared/lib/format";

interface Props {
  proposal: Proposal;
  companyName?: string | null;
  isGuest?: boolean;
}

export function ProposalReviewClient({
  proposal: initial,
  companyName,
  isGuest,
}: Props) {
  const t = useT();
  const uiLocale = useLocale();
  const contentLocale = initial.locale ?? "ar";
  const canEdit = uiLocale === contentLocale;

  const [proposal, setProposal] = useState(initial);
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const sections = [
    { id: "scopeItems", label: t.review.sections.scopeItems },
    { id: "commercialTerms", label: t.review.sections.commercialTerms },
    { id: "assumptions", label: t.review.sections.assumptions },
    { id: "exclusions", label: t.review.sections.exclusions },
  ] as const;

  const reviewed = (proposal.reviewedSections ?? []) as string[];
  const allReviewed = sections.every((s) => reviewed.includes(s.id));
  const confidence = proposal.confidence as unknown as Record<string, string> | null;

  const handleEdit = useCallback(
    async (field: string, value: unknown) => {
      if (!canEdit) return;
      if (typeof value === "string") {
        const localeError = validateLocaleText(value, contentLocale);
        if (localeError) {
          alert(t.form.errors[localeError]);
          return;
        }
      }
      setProposal((prev) => {
        const updated = { ...prev };
        const parts = field.split(".");
        let obj: any = updated;
        for (let i = 0; i < parts.length - 1; i++) {
          obj = obj[parts[i]!];
        }
        obj[parts[parts.length - 1]!] = value;
        return updated;
      });
      await updateFieldAction(proposal.id, field, value);
    },
    [proposal.id, canEdit, contentLocale, t.form.errors]
  );

  const handleAddItem = async (section: string) => {
    const item: any = { id: crypto.randomUUID(), title: "", description: "" };
    const result = await addItemAction(proposal.id, section, item);
    setProposal((prev) => ({
      ...prev,
      [section as keyof typeof prev]: [
        ...(prev[section as keyof typeof prev] as any[]),
        { ...item, id: result.id },
      ],
    }));
  };

  const handleRemoveItem = async (section: string, itemId: string) => {
    await removeItemAction(proposal.id, section, itemId);
    setProposal((prev) => ({
      ...prev,
      [section as keyof typeof prev]: (
        prev[section as keyof typeof prev] as any[]
      ).filter((i: any) => i.id !== itemId),
    }));
  };

  const handleMarkReviewed = async (section: string) => {
    const result = await markReviewedAction(proposal.id, section);
    setProposal((prev) => ({
      ...prev,
      reviewedSections: result.reviewedSections,
      status:
        result.reviewedSections.length === sections.length ? "reviewed" : "review",
    }));
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const result = await exportPdfAction(proposal.id);
      if (result?.url) {
        setExported(true);
        window.open(result.url, "_blank", "noopener,noreferrer");
      } else {
        window.open(
          `/api/proposals/${proposal.id}/export/pdf`,
          "_blank",
          "noopener,noreferrer"
        );
      }
    } catch {
      window.open(
        `/api/proposals/${proposal.id}/export/pdf`,
        "_blank",
        "noopener,noreferrer"
      );
    }
    setExporting(false);
  };

  const handleRegenerate = async () => {
    if (!confirm(t.review.regenerateConfirm)) return;
    setRegenerating(true);
    try {
      await generateWithAI(proposal.id);
      window.location.reload();
    } catch {
      alert(t.review.regenerateFailed);
      setRegenerating(false);
    }
  };

  const statusLabel = exported
    ? t.review.exported
    : allReviewed
      ? t.review.allReviewed
      : t.review.reviewedCount(reviewed.length, sections.length);

  return (
    <div className="mx-auto max-w-3xl pb-24">
      {!canEdit && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {t.review.localeMismatch}
        </div>
      )}
      {isGuest && (
        <div className="mb-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          <Link href="/login" className="font-semibold underline">
            {t.review.guestLink}
          </Link>{" "}
          {t.review.guestBanner}
        </div>
      )}

      {/* Top bar */}
      <div className="sticky top-14 z-40 -mx-4 mb-6 border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="/proposals/new"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {t.review.backToNew}
            </Link>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs text-amber-800">
              {t.review.draftBadge}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRegenerate}
              disabled={regenerating}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {regenerating ? t.review.regenerating : t.review.regenerate}
            </button>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              {exporting ? t.review.exporting : t.review.downloadPdf}
            </button>
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">{statusLabel}</p>
      </div>

      {/* Title */}
      <div className="mb-8 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
        <h1
          className="text-2xl font-bold text-gray-900 outline-none"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleEdit("projectName", e.currentTarget.textContent)}
        >
          {proposal.projectName}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {t.review.preparedFor}{" "}
          <span
            className="font-medium text-gray-800 outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit("clientName", e.currentTarget.textContent)}
          >
            {proposal.clientName}
          </span>
        </p>
        {companyName && (
          <p className="mt-1 text-sm text-gray-500">
            {t.review.preparedBy}{" "}
            <span className="font-medium text-gray-800">{companyName}</span>
          </p>
        )}
        <p className="mt-1 text-xs text-gray-400">
          {t.review.date} {formatDate(proposal.createdAt, contentLocale)}
        </p>
      </div>

      <div className="space-y-6">
        {/* Scope */}
        <SectionWrapper
          label={t.review.sections.scopeItems}
          confidence={confidence?.scopeItems}
          reviewed={reviewed.includes("scopeItems")}
          onMarkReviewed={() => handleMarkReviewed("scopeItems")}
          canEdit={canEdit}
        >
          {(proposal.scopeItems ?? []).map((item: any, i: number) => (
            <ScopeItemCard
              key={item.id}
              index={i}
              item={item}
              canEdit={canEdit}
              onUpdate={(field, value) =>
                handleEdit(`scopeItems[${i}].${field}`, value)
              }
              onRemove={() => handleRemoveItem("scopeItems", item.id)}
            />
          ))}
          {canEdit && (
          <button
            onClick={() => handleAddItem("scopeItems")}
            className="mt-2 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            {t.review.addItem}
          </button>
          )}
        </SectionWrapper>

        {/* Commercial */}
        <SectionWrapper
          label={t.review.sections.commercialTerms}
          confidence={confidence?.commercialTerms}
          reviewed={reviewed.includes("commercialTerms")}
          onMarkReviewed={() => handleMarkReviewed("commercialTerms")}
          canEdit={canEdit}
        >
          {proposal.commercialTerms && (
            <div className="space-y-4">
              <div className="text-lg font-semibold tabular-nums">
                {t.review.total}{" "}
                <span
                  contentEditable={canEdit}
                  suppressContentEditableWarning
                  className="break-all outline-none"
                  onBlur={(e) => {
                    if (!canEdit) return;
                    const val = parseInt(
                      e.currentTarget.textContent?.replace(/[^\d]/g, "") ?? "0",
                      10
                    );
                    handleEdit("budget", val);
                  }}
                >
                  {formatSar(proposal.budget, contentLocale)} {t.review.currency}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[280px] text-sm">
                  <thead>
                    <tr className="border-b text-gray-500">
                      <th className="pb-2 text-start font-medium">
                        {t.review.milestone}
                      </th>
                      <th className="pb-2 text-center font-medium">
                        {t.review.percentage}
                      </th>
                      <th className="pb-2 text-end font-medium">
                        {t.review.amount}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(proposal.commercialTerms as any)?.paymentSchedule?.map(
                      (m: any, i: number) => (
                        <tr key={i} className="border-b border-gray-50">
                          <td className="py-2">
                            <span
                              contentEditable={canEdit}
                              suppressContentEditableWarning
                              className="inline-edit-input"
                              onBlur={(e) => {
                                if (!canEdit) return;
                                handleEdit(
                                  `commercialTerms.paymentSchedule[${i}].label`,
                                  e.currentTarget.textContent
                                );
                              }}
                            >
                              {m.label}
                            </span>
                          </td>
                          <td className="py-2 text-center tabular-nums">
                            <span
                              contentEditable={canEdit}
                              suppressContentEditableWarning
                              className="inline-block w-10 text-center outline-none focus:bg-gray-50"
                              onBlur={(e) => {
                                if (!canEdit) return;
                                handleEdit(
                                  `commercialTerms.paymentSchedule[${i}].percentage`,
                                  parseInt(e.currentTarget.textContent ?? "0", 10)
                                );
                              }}
                            >
                              {m.percentage}
                            </span>
                            %
                          </td>
                          <td className="py-2 text-end tabular-nums text-gray-700">
                            {formatSar(m.amount, contentLocale)} {t.review.currency}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </SectionWrapper>

        {/* Timeline */}
        {proposal.timeline && (
          <SectionWrapper
            label={t.review.sections.timeline}
            confidence={confidence?.timeline}
            reviewed={false}
            onMarkReviewed={() => {}}
            hideReview
            canEdit={canEdit}
          >
            <p className="text-sm text-gray-700">
              {t.review.duration}{" "}
              <span
                contentEditable={canEdit}
                suppressContentEditableWarning
                className="inline-edit-input font-medium"
                onBlur={(e) => {
                  if (!canEdit) return;
                  handleEdit("timeline.duration", e.currentTarget.textContent);
                }}
              >
                {proposal.timeline.duration}
              </span>
            </p>
            {(proposal.timeline.milestones ?? []).length > 0 && (
              <ul className="mt-3 space-y-2">
                {proposal.timeline.milestones.map((m, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-gray-400">•</span>
                    <span
                      contentEditable={canEdit}
                      suppressContentEditableWarning
                      className="inline-edit-input flex-1"
                      onBlur={(e) => {
                        if (!canEdit) return;
                        handleEdit(
                          `timeline.milestones[${i}].name`,
                          e.currentTarget.textContent
                        );
                      }}
                    >
                      {m.name}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </SectionWrapper>
        )}

        {/* Deliverables */}
        {(proposal.deliverables ?? []).length > 0 && (
          <SectionWrapper
            label={t.review.sections.deliverables}
            confidence={confidence?.deliverables}
            reviewed={false}
            onMarkReviewed={() => {}}
            hideReview
            canEdit={canEdit}
          >
            <ul className="space-y-3">
              {proposal.deliverables.map((item, i) => (
                <li key={item.id} className="group flex gap-2">
                  <span className="mt-2 text-gray-400">•</span>
                  <div className="flex-1">
                    <input
                      defaultValue={item.name}
                      onBlur={(e) =>
                        handleEdit(`deliverables[${i}].name`, e.target.value)
                      }
                      readOnly={!canEdit}
                      className="inline-edit-input text-sm font-medium"
                    />
                    <input
                      defaultValue={item.description}
                      onBlur={(e) =>
                        handleEdit(
                          `deliverables[${i}].description`,
                          e.target.value
                        )
                      }
                      readOnly={!canEdit}
                      className="inline-edit-input mt-1 text-xs text-gray-600"
                    />
                  </div>
                  {canEdit && (
                  <button
                    onClick={() => handleRemoveItem("deliverables", item.id)}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label="remove"
                  >
                    <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
                  </button>
                  )}
                </li>
              ))}
            </ul>
          </SectionWrapper>
        )}

        {/* Assumptions */}
        <SectionWrapper
          label={t.review.sections.assumptions}
          confidence={confidence?.assumptions}
          reviewed={reviewed.includes("assumptions")}
          onMarkReviewed={() => handleMarkReviewed("assumptions")}
          canEdit={canEdit}
        >
          <p className="mb-3 text-xs text-amber-700">{t.review.aiDraftHint}</p>
          {proposal.assumptions.length > 0 ? (
            <ul className="space-y-2">
              {proposal.assumptions.map((item: any, i: number) => (
                <EditableListItem
                  key={i}
                  canEdit={canEdit}
                  value={typeof item === "string" ? item : item.text}
                  onUpdate={(val) => {
                    const newArr = [...proposal.assumptions];
                    newArr[i] = val;
                    handleEdit("assumptions", newArr);
                  }}
                  onRemove={() => {
                    handleEdit(
                      "assumptions",
                      proposal.assumptions.filter((_, idx) => idx !== i)
                    );
                  }}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">{t.review.noAssumptions}</p>
          )}
          {canEdit && (
          <button
            onClick={() => handleEdit("assumptions", [...proposal.assumptions, ""])}
            className="mt-2 text-sm font-medium text-brand-600"
          >
            {t.review.addAssumption}
          </button>
          )}
        </SectionWrapper>

        {/* Exclusions */}
        <SectionWrapper
          label={t.review.sections.exclusions}
          confidence={confidence?.exclusions}
          reviewed={reviewed.includes("exclusions")}
          onMarkReviewed={() => handleMarkReviewed("exclusions")}
          canEdit={canEdit}
        >
          <p className="mb-3 text-xs text-amber-700">{t.review.aiDraftHint}</p>
          {proposal.exclusions.length > 0 ? (
            <ul className="space-y-2">
              {proposal.exclusions.map((item: any, i: number) => (
                <EditableListItem
                  key={i}
                  canEdit={canEdit}
                  value={typeof item === "string" ? item : item.text}
                  onUpdate={(val) => {
                    const newArr = [...proposal.exclusions];
                    newArr[i] = val;
                    handleEdit("exclusions", newArr);
                  }}
                  onRemove={() => {
                    handleEdit(
                      "exclusions",
                      proposal.exclusions.filter((_, idx) => idx !== i)
                    );
                  }}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">{t.review.noExclusions}</p>
          )}
          {canEdit && (
          <button
            onClick={() => handleEdit("exclusions", [...proposal.exclusions, ""])}
            className="mt-2 text-sm font-medium text-brand-600"
          >
            {t.review.addExclusion}
          </button>
          )}
        </SectionWrapper>
      </div>

      {/* Bottom bar */}
      <div className="sticky bottom-0 -mx-4 mt-8 border-t border-gray-100 bg-white/95 px-4 py-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {t.review.reviewedCount(reviewed.length, sections.length)}
          </span>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
          >
            {exporting ? t.review.exporting : t.review.downloadPdf}
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionWrapper({
  label,
  confidence,
  reviewed,
  onMarkReviewed,
  hideReview,
  canEdit = true,
  children,
}: {
  label: string;
  confidence?: string;
  reviewed: boolean;
  onMarkReviewed: () => void;
  hideReview?: boolean;
  canEdit?: boolean;
  children: React.ReactNode;
}) {
  const t = useT();

  return (
    <section
      className={`section-card ${reviewed ? "section-card-reviewed" : ""}`}
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-base font-bold text-gray-900">{label}</h2>
          {(confidence === "always_warn" || confidence === "medium") &&
            !reviewed && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                {t.review.badges.review}
              </span>
            )}
          {confidence === "low" && (
            <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-xs text-yellow-800">
              {t.review.badges.aiEstimated}
            </span>
          )}
        </div>
        {!hideReview &&
          canEdit &&
          (reviewed ? (
            <span className="text-xs font-medium text-green-700">
              {t.review.reviewed}
            </span>
          ) : (
            <button
              onClick={onMarkReviewed}
              className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-50"
            >
              {t.review.markReviewed}
            </button>
          ))}
      </div>
      {children}
    </section>
  );
}

function ScopeItemCard({
  index,
  item,
  onUpdate,
  onRemove,
  canEdit = true,
}: {
  index: number;
  item: any;
  onUpdate: (field: string, value: unknown) => void;
  onRemove: () => void;
  canEdit?: boolean;
}) {
  const t = useT();
  return (
    <div className="group mb-3 rounded-lg border border-gray-100 bg-gray-50/30 p-3 transition-colors hover:border-brand-100 hover:bg-white">
      <div className="flex items-start gap-2">
        <span className="mt-2 text-xs font-bold text-brand-500">{index + 1}</span>
        <div className="flex-1">
          <input
            defaultValue={item.title}
            onBlur={(e) => onUpdate("title", e.target.value)}
            readOnly={!canEdit}
            className="inline-edit-input mb-1 text-sm font-semibold"
            placeholder={t.review.placeholders.itemTitle}
          />
          <textarea
            defaultValue={item.description}
            onBlur={(e) => onUpdate("description", e.target.value)}
            readOnly={!canEdit}
            className="inline-edit-area text-xs text-gray-600"
            placeholder={t.review.placeholders.itemDescription}
            rows={2}
          />
        </div>
        {canEdit && (
        <button
          onClick={onRemove}
          className="opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="remove"
        >
          <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
        </button>
        )}
      </div>
    </div>
  );
}

function EditableListItem({
  value,
  onUpdate,
  onRemove,
  canEdit = true,
}: {
  value: string;
  onUpdate: (val: string) => void;
  onRemove: () => void;
  canEdit?: boolean;
}) {
  return (
    <li className="group flex items-start gap-2">
      <span className="mt-2 text-gray-400">•</span>
      <input
        defaultValue={value}
        onBlur={(e) => onUpdate(e.target.value)}
        readOnly={!canEdit}
        className="inline-edit-input flex-1 text-sm"
      />
      {canEdit && (
      <button
        onClick={onRemove}
        className="opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="remove"
      >
        <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
      </button>
      )}
    </li>
  );
}
