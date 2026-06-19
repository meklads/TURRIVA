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

interface Props {
  proposal: Proposal;
  companyName?: string | null;
  isGuest?: boolean;
}

export function ProposalReviewClient({ proposal: initial, companyName, isGuest }: Props) {
  const [proposal, setProposal] = useState(initial);
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const formattedDate = new Date(proposal.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    { id: "scopeItems", label: "Scope of Work" },
    { id: "commercialTerms", label: "Commercial Terms" },
    { id: "assumptions", label: "Assumptions" },
    { id: "exclusions", label: "Exclusions" },
  ] as const;

  const reviewed = (proposal.reviewedSections ?? []) as string[];
  const allReviewed = sections.every((s) => reviewed.includes(s.id));

  const handleEdit = useCallback(
    async (field: string, value: unknown) => {
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
    [proposal.id]
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
      status: result.reviewedSections.length === sections.length ? "reviewed" : "review",
    }));
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const result = await exportPdfAction(proposal.id);
      if (!result?.url) {
        throw new Error("Export failed");
      }
      setExported(true);
      window.open(result.url, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback: open export route directly
      window.open(`/api/proposals/${proposal.id}/export/pdf`, "_blank", "noopener,noreferrer");
    }
    setExporting(false);
  };

  const handleRegenerate = async () => {
    if (!confirm("Regenerate the entire proposal? Your edits will be replaced.")) {
      return;
    }
    setRegenerating(true);
    try {
      await generateWithAI(proposal.id);
      window.location.reload();
    } catch {
      alert("Regeneration failed. Please try again.");
      setRegenerating(false);
    }
  };

  const confidence = proposal.confidence as unknown as Record<string, string> | null;

  return (
    <div className="mx-auto max-w-3xl">
      {isGuest && (
        <div className="mb-4 rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          <Link href="/login" className="font-medium underline">
            Sign in
          </Link>{" "}
          to save this proposal to your account.
        </div>
      )}
      {/* Top bar */}
      <div className="sticky top-14 z-40 -mx-4 mb-6 border-b border-gray-100 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/proposals/new"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              ← New proposal
            </Link>
            <span className="text-sm text-gray-500">
              {exported ? "✅ Exported" : allReviewed ? "Reviewed" : `${reviewed.length}/${sections.length} reviewed`}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRegenerate}
              disabled={regenerating}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {regenerating ? "Regenerating..." : "🔄 Regenerate"}
            </button>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              {exporting ? "Generating..." : "📄 Download PDF"}
            </button>
          </div>
        </div>
      </div>

      {/* Proposal Title */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-gray-900 outline-none"
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleEdit("projectName", e.currentTarget.textContent)}
        >
          {proposal.projectName}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Prepared for:{" "}
          <span
            className="text-gray-700 outline-none"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => handleEdit("clientName", e.currentTarget.textContent)}
          >
            {proposal.clientName}
          </span>
        </p>
        {companyName && (
          <p className="mt-1 text-sm text-gray-500">
            Prepared by: <span className="text-gray-700">{companyName}</span>
          </p>
        )}
        <p className="mt-1 text-xs text-gray-400">Date: {formattedDate}</p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {/* Scope of Work */}
        <SectionWrapper
          id="scopeItems"
          label="Scope of Work"
          confidence={confidence?.scopeItems}
          reviewed={reviewed.includes("scopeItems")}
          onMarkReviewed={() => handleMarkReviewed("scopeItems")}
        >
          {(proposal.scopeItems ?? []).map((item: any, i: number) => (
            <ScopeItemCard
              key={item.id}
              index={i}
              item={item}
              onUpdate={(field, value) =>
                handleEdit(`scopeItems[${i}].${field}`, value)
              }
              onRemove={() => handleRemoveItem("scopeItems", item.id)}
            />
          ))}
          <button
            onClick={() => handleAddItem("scopeItems")}
            className="mt-2 text-sm text-brand-500 hover:text-brand-600"
          >
            + Add item
          </button>
        </SectionWrapper>

        {/* Commercial Terms */}
        <SectionWrapper
          id="commercialTerms"
          label="Commercial Terms"
          confidence={confidence?.commercialTerms}
          reviewed={reviewed.includes("commercialTerms")}
          onMarkReviewed={() => handleMarkReviewed("commercialTerms")}
        >
          {proposal.commercialTerms && (
            <div className="space-y-3">
              <div className="text-lg font-semibold">
                Total: SAR{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="outline-none"
                  onBlur={(e) => {
                    const val = parseInt(e.currentTarget.textContent?.replace(/,/g, "") ?? "0");
                    handleEdit("budget", val);
                  }}
                >
                  {proposal.budget?.toLocaleString() ?? "0"}
                </span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-gray-500">
                    <th className="pb-2 font-medium">Milestone</th>
                    <th className="pb-2 text-center font-medium">%</th>
                    <th className="pb-2 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {(proposal.commercialTerms as any)?.paymentSchedule?.map(
                    (m: any, i: number) => (
                      <tr key={i} className="border-b">
                        <td className="py-2">
                          <span
                            contentEditable
                            suppressContentEditableWarning
                            className="outline-none"
                            onBlur={(e) =>
                              handleEdit(
                                `commercialTerms.paymentSchedule[${i}].label`,
                                e.currentTarget.textContent
                              )
                            }
                          >
                            {m.label}
                          </span>
                        </td>
                        <td className="py-2 text-center">
                          <span
                            contentEditable
                            suppressContentEditableWarning
                            className="inline-block w-12 text-center outline-none"
                            onBlur={(e) =>
                              handleEdit(
                                `commercialTerms.paymentSchedule[${i}].percentage`,
                                parseInt(e.currentTarget.textContent ?? "0")
                              )
                            }
                          >
                            {m.percentage}
                          </span>
                          %
                        </td>
                        <td className="py-2 text-right">
                          SAR {m.amount?.toLocaleString() ?? "—"}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </SectionWrapper>

        {/* Timeline */}
        {proposal.timeline && (
          <SectionWrapper
            id="timeline"
            label="Timeline"
            confidence={confidence?.timeline}
            reviewed={false}
            onMarkReviewed={() => {}}
            hideReview
          >
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                Duration:{" "}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className="outline-none"
                  onBlur={(e) =>
                    handleEdit("timeline.duration", e.currentTarget.textContent)
                  }
                >
                  {proposal.timeline.duration}
                </span>
              </p>
              {(proposal.timeline.milestones ?? []).length > 0 && (
                <ul className="mt-2 space-y-1">
                  {proposal.timeline.milestones.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-gray-400">•</span>
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        className="outline-none"
                        onBlur={(e) =>
                          handleEdit(
                            `timeline.milestones[${i}].name`,
                            e.currentTarget.textContent
                          )
                        }
                      >
                        {m.name}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </SectionWrapper>
        )}

        {/* Deliverables */}
        {(proposal.deliverables ?? []).length > 0 && (
          <SectionWrapper
            id="deliverables"
            label="Deliverables"
            confidence={confidence?.deliverables}
            reviewed={false}
            onMarkReviewed={() => {}}
            hideReview
          >
            <ul className="space-y-2">
              {proposal.deliverables.map((item, i) => (
                <li key={item.id} className="group flex items-start gap-2">
                  <span className="mt-0.5 text-gray-400">•</span>
                  <div className="flex-1">
                    <input
                      defaultValue={item.name}
                      onBlur={(e) =>
                        handleEdit(`deliverables[${i}].name`, e.target.value)
                      }
                      className="block w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
                    />
                    <input
                      defaultValue={item.description}
                      onBlur={(e) =>
                        handleEdit(
                          `deliverables[${i}].description`,
                          e.target.value
                        )
                      }
                      className="block w-full bg-transparent text-xs text-gray-600 outline-none"
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveItem("deliverables", item.id)}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
                  </button>
                </li>
              ))}
            </ul>
          </SectionWrapper>
        )}

        {/* Assumptions */}
        <SectionWrapper
          id="assumptions"
          label="Assumptions"
          confidence={confidence?.assumptions}
          reviewed={reviewed.includes("assumptions")}
          onMarkReviewed={() => handleMarkReviewed("assumptions")}
        >
          <p className="mb-2 text-xs italic text-gray-400">
            ℹ️ AI-generated draft. Review before sending to client.
          </p>
          {proposal.assumptions.length > 0 ? (
            <ul className="space-y-2">
              {proposal.assumptions.map((item: any, i: number) => (
                <EditableListItem
                  key={i}
                  value={typeof item === "string" ? item : item.text}
                  index={i}
                  section="assumptions"
                  onUpdate={(val) => {
                    // For simple string arrays, we rebuild the array
                    const newArr = [...proposal.assumptions];
                    newArr[i] = val;
                    handleEdit("assumptions", newArr);
                  }}
                  onRemove={() => {
                    const newArr = (proposal.assumptions as string[]).filter((_: any, idx: number) => idx !== i);
                    handleEdit("assumptions", newArr);
                  }}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">No assumptions added.</p>
          )}
          <button
            onClick={() => {
              const newArr = [...proposal.assumptions, ""];
              handleEdit("assumptions", newArr);
            }}
            className="mt-2 text-sm text-brand-500 hover:text-brand-600"
          >
            + Add assumption
          </button>
        </SectionWrapper>

        {/* Exclusions */}
        <SectionWrapper
          id="exclusions"
          label="Exclusions"
          confidence={confidence?.exclusions}
          reviewed={reviewed.includes("exclusions")}
          onMarkReviewed={() => handleMarkReviewed("exclusions")}
        >
          <p className="mb-2 text-xs italic text-gray-400">
            ℹ️ AI-generated draft. Review before sending to client.
          </p>
          {proposal.exclusions.length > 0 ? (
            <ul className="space-y-2">
              {proposal.exclusions.map((item: any, i: number) => (
                <EditableListItem
                  key={i}
                  value={typeof item === "string" ? item : item.text}
                  index={i}
                  section="exclusions"
                  onUpdate={(val) => {
                    const newArr = [...proposal.exclusions];
                    newArr[i] = val;
                    handleEdit("exclusions", newArr);
                  }}
                  onRemove={() => {
                    const newArr = (proposal.exclusions as string[]).filter((_: any, idx: number) => idx !== i);
                    handleEdit("exclusions", newArr);
                  }}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">No exclusions added.</p>
          )}
          <button
            onClick={() => {
              const newArr = [...proposal.exclusions, ""];
              handleEdit("exclusions", newArr);
            }}
            className="mt-2 text-sm text-brand-500 hover:text-brand-600"
          >
            + Add exclusion
          </button>
        </SectionWrapper>
      </div>

      {/* Bottom bar */}
      <div className="sticky bottom-0 -mx-4 mt-8 border-t border-gray-100 bg-white px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {reviewed.length}/{sections.length} sections reviewed
          </span>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
          >
            {exporting ? "Generating PDF..." : "📄 Download PDF"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───

function SectionWrapper({
  id,
  label,
  confidence,
  reviewed,
  onMarkReviewed,
  hideReview,
  children,
}: {
  id: string;
  label: string;
  confidence?: string;
  reviewed: boolean;
  onMarkReviewed: () => void;
  hideReview?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        reviewed ? "border-green-200 bg-green-50/30" : "border-gray-100 bg-white"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-semibold text-gray-900">{label}</h2>
          {confidence === "always_warn" && !reviewed && (
            <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
              review
            </span>
          )}
          {confidence === "medium" && !reviewed && (
            <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
              review
            </span>
          )}
          {confidence === "low" && (
            <span className="rounded bg-yellow-50 px-2 py-0.5 text-xs text-yellow-700">
              ⚠️ AI estimated
            </span>
          )}
        </div>
        {!hideReview && (
          !reviewed ? (
            <button
              onClick={onMarkReviewed}
              className="rounded px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100"
            >
              Mark reviewed
            </button>
          ) : (
            <span className="text-xs font-medium text-green-600">✅ Reviewed</span>
          )
        )}
      </div>
      {children}
    </div>
  );
}

function ScopeItemCard({
  index,
  item,
  onUpdate,
  onRemove,
}: {
  index: number;
  item: any;
  onUpdate: (field: string, value: unknown) => void;
  onRemove: () => void;
}) {
  return (
    <div className="group relative mb-3 rounded-md border border-gray-100 p-3 hover:border-gray-200">
      <div className="flex items-start gap-2">
        <span className="mt-1 text-xs font-medium text-gray-400">{index + 1}.</span>
        <div className="flex-1">
          <input
            defaultValue={item.title}
            onBlur={(e) => onUpdate("title", e.target.value)}
            className="mb-1 block w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
            placeholder="Item title"
          />
          <textarea
            defaultValue={item.description}
            onBlur={(e) => onUpdate("description", e.target.value)}
            className="block w-full resize-none bg-transparent text-xs text-gray-600 outline-none"
            placeholder="Description"
            rows={2}
          />
        </div>
        <button
          onClick={onRemove}
          className="opacity-0 transition-opacity group-hover:opacity-100"
        >
          <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
        </button>
      </div>
    </div>
  );
}

function EditableListItem({
  value,
  index,
  section,
  onUpdate,
  onRemove,
}: {
  value: string;
  index: number;
  section: string;
  onUpdate: (val: string) => void;
  onRemove: () => void;
}) {
  return (
    <li className="group flex items-start gap-2">
      <span className="mt-0.5 text-gray-400">•</span>
      <input
        defaultValue={value}
        onBlur={(e) => onUpdate(e.target.value)}
        className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
      />
      <button
        onClick={onRemove}
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        <span className="text-xs text-gray-400 hover:text-red-500">✕</span>
      </button>
    </li>
  );
}
