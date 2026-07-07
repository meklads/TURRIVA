"use client";

import { useEffect, useState } from "react";
import type { DesignMessages } from "@/shared/i18n/messages/design";
import type { ConsultationInterest } from "@/modules/design/lib/consultation-interest";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
  open: boolean;
  onClose: () => void;
  initialInterest?: ConsultationInterest;
  generationId?: string | null;
};

export function DesignConsultationModal({
  messages,
  locale,
  open,
  onClose,
  initialInterest = "execution",
  generationId = null,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState<ConsultationInterest>("execution");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setInterest(initialInterest);
      setSuccess(false);
    }
  }, [open, initialInterest]);

  if (!open) return null;

  const c = messages.consultation;

  const subtitle =
    interest === "bespoke"
      ? c.bespokeSubtitle
      : interest === "both"
        ? c.bothSubtitle
        : c.executionContactSubtitle;

  const modalTitle =
    interest === "bespoke"
      ? messages.bespoke.cta
      : interest === "both"
        ? c.interestBoth
        : c.executionContactTitle;

  const submitLabel =
    interest === "bespoke" ? messages.bespoke.cta : c.executionContactCta;

  const submit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          locale,
          interest,
          generationId: generationId ?? undefined,
        }),
      });
      if (res.ok) setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const interestOptions: { id: ConsultationInterest; label: string }[] = [
    { id: "execution", label: c.interestExecution },
    { id: "bespoke", label: c.interestBespoke },
    { id: "both", label: c.interestBoth },
  ];

  return (
    <div className="design-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="design-modal" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <>
            <h2>{c.success}</h2>
            <p className="mt-2 text-sm text-gray-600">{c.successFollowUp}</p>
            <button type="button" className="design-btn design-btn-primary w-full mt-4" onClick={onClose}>
              OK
            </button>
          </>
        ) : (
          <>
            <span className="design-hero-badge">{c.freeBadge}</span>
            <h2 className="mt-3">{modalTitle}</h2>
            <p>{subtitle}</p>
            <div className="mt-4 space-y-3 text-start">
              <label className="block text-xs font-semibold text-gray-600">{c.interestLabel}</label>
              <div className="design-interest-pills">
                {interestOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`design-interest-pill${interest === option.id ? " design-interest-pill--active" : ""}`}
                    onClick={() => setInterest(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <input
                className="design-select w-full"
                placeholder={c.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="design-select w-full"
                placeholder={c.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                dir="ltr"
              />
              <textarea
                className="design-select w-full min-h-[5rem] resize-none"
                placeholder={c.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="design-modal-actions">
              <button
                type="button"
                className="design-btn design-btn-execution w-full"
                disabled={loading || !name.trim() || !phone.trim()}
                onClick={submit}
              >
                {loading ? "…" : submitLabel}
              </button>
              <button type="button" className="design-modal-skip" onClick={onClose}>
                {messages.welcome.skip}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
