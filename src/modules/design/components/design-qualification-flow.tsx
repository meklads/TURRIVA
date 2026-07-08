"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { DesignMessages } from "@/shared/i18n/messages/design";
import type {
  BudgetRange,
  ExecutionScope,
  ProjectType,
  Timeline,
} from "@/modules/design/lib/lead-scoring";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
  open: boolean;
  generationId: string | null;
  onClose: () => void;
  onComplete: (result: { qualified: boolean; bonusCredits: number }) => void;
};

type StepId = "project" | "scope" | "timeline" | "budget" | "contact";

const STEPS: StepId[] = ["project", "scope", "timeline", "budget", "contact"];

export function DesignQualificationFlow({
  messages,
  locale,
  open,
  generationId,
  onClose,
  onComplete,
}: Props) {
  const q = messages.conversion.qualify;
  const isRtl = locale === "ar";

  const [stepIndex, setStepIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [executionScope, setExecutionScope] = useState<ExecutionScope | null>(null);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [budget, setBudget] = useState<BudgetRange | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const step = STEPS[stepIndex];
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const canContinue = useMemo(() => {
    if (step === "project") return Boolean(projectType);
    if (step === "scope") return Boolean(executionScope);
    if (step === "timeline") return Boolean(timeline);
    if (step === "budget") return Boolean(budget);
    if (step === "contact") {
      return name.trim().length >= 2 && phone.trim().length >= 8 && privacyAccepted;
    }
    return false;
  }, [step, projectType, executionScope, timeline, budget, name, phone, privacyAccepted]);

  if (!open) return null;

  const goNext = async () => {
    if (!canContinue) return;
    if (step !== "contact") {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/design/guest/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType,
          executionScope,
          budget,
          timeline,
          name: name.trim(),
          phone: phone.trim(),
          locale,
          generationId,
          privacyAccepted: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.code === "INVALID_PHONE") setError(q.invalidPhone);
        else setError(q.submitError);
        return;
      }
      onComplete({ qualified: Boolean(data.qualified), bonusCredits: data.bonusCredits ?? 0 });
    } catch {
      setError(q.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const renderOptions = <T extends string>(
    options: { id: T; label: string }[],
    selected: T | null,
    onSelect: (id: T) => void
  ) => (
    <div className="design-qualify-options">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`design-qualify-option${selected === opt.id ? " design-qualify-option--active" : ""}`}
          onClick={() => onSelect(opt.id)}
        >
          <span>{opt.label}</span>
          {selected === opt.id && <Check className="h-4 w-4" />}
        </button>
      ))}
    </div>
  );

  const stepTitle =
    step === "project"
      ? q.projectTitle
      : step === "scope"
        ? q.scopeTitle
        : step === "timeline"
          ? q.timelineTitle
          : step === "budget"
            ? q.budgetTitle
            : q.contactTitle;

  const stepSubtitle =
    step === "project"
      ? q.projectSubtitle
      : step === "scope"
        ? q.scopeSubtitle
        : step === "timeline"
          ? q.timelineSubtitle
          : step === "budget"
            ? q.budgetSubtitle
            : q.contactSubtitle;

  return (
    <div className="design-qualify-overlay" role="dialog" aria-modal="true">
      <div className="design-qualify-shell">
        <button type="button" className="design-qualify-close" onClick={onClose} aria-label={q.close}>
          ×
        </button>

        <div className="design-qualify-progress">
          <div className="design-qualify-progress__bar" style={{ width: `${progress}%` }} />
        </div>

        <p className="design-qualify-step-count">
          {q.stepOf.replace("{current}", String(stepIndex + 1)).replace("{total}", String(STEPS.length))}
        </p>

        <h3 className="design-qualify-title">{stepTitle}</h3>
        <p className="design-qualify-subtitle">{stepSubtitle}</p>

        <div className="design-qualify-body">
          {step === "project" &&
            renderOptions(
              [
                { id: "apartment", label: q.projectApartment },
                { id: "villa", label: q.projectVilla },
                { id: "commercial", label: q.projectCommercial },
                { id: "office", label: q.projectOffice },
              ],
              projectType,
              setProjectType
            )}

          {step === "scope" &&
            renderOptions(
              [
                { id: "one_room", label: q.scopeOneRoom },
                { id: "multiple_rooms", label: q.scopeMultiple },
                { id: "full_property", label: q.scopeFull },
              ],
              executionScope,
              setExecutionScope
            )}

          {step === "timeline" &&
            renderOptions(
              [
                { id: "immediate", label: q.timelineImmediate },
                { id: "1_month", label: q.timeline1Month },
                { id: "3_months", label: q.timeline3Months },
                { id: "exploring", label: q.timelineExploring },
              ],
              timeline,
              setTimeline
            )}

          {step === "budget" &&
            renderOptions(
              [
                { id: "under_30k", label: q.budgetUnder30 },
                { id: "30_80k", label: q.budget30_80 },
                { id: "80_200k", label: q.budget80_200 },
                { id: "over_200k", label: q.budgetOver200 },
              ],
              budget,
              setBudget
            )}

          {step === "contact" && (
            <div className="design-qualify-contact">
              <label className="design-qualify-field">
                <span>{q.nameLabel}</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={q.namePlaceholder}
                  autoComplete="name"
                />
              </label>
              <label className="design-qualify-field">
                <span>{q.phoneLabel}</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={q.phonePlaceholder}
                  autoComplete="tel"
                  dir="ltr"
                />
              </label>
              <label className="design-qualify-privacy">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                />
                <span>{q.privacy}</span>
              </label>
            </div>
          )}
        </div>

        {error && <p className="design-qualify-error">{error}</p>}

        <div className="design-qualify-actions">
          {stepIndex > 0 ? (
            <button type="button" className="design-btn design-btn-outline" onClick={goBack} disabled={submitting}>
              {isRtl ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {q.back}
            </button>
          ) : (
            <span />
          )}
          <button
            type="button"
            className="design-btn design-btn-primary"
            disabled={!canContinue || submitting}
            onClick={goNext}
          >
            {submitting ? q.submitting : step === "contact" ? q.finish : q.continue}
            {!submitting && step !== "contact" && (isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />)}
          </button>
        </div>
      </div>
    </div>
  );
}
