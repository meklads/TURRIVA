"use client";

import { useState } from "react";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
  open: boolean;
  onClose: () => void;
};

export function DesignConsultationModal({ messages, locale, open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  const submit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, locale }),
      });
      if (res.ok) setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="design-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="design-modal" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <>
            <h2>{messages.consultation.success}</h2>
            <button type="button" className="design-btn design-btn-primary w-full mt-4" onClick={onClose}>
              OK
            </button>
          </>
        ) : (
          <>
            <span className="design-hero-badge">{messages.consultation.freeBadge}</span>
            <h2 className="mt-3">{messages.consultation.title}</h2>
            <p>{messages.consultation.subtitle}</p>
            <div className="mt-4 space-y-3 text-start">
              <input
                className="design-select w-full"
                placeholder={messages.consultation.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="design-select w-full"
                placeholder={messages.consultation.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                dir="ltr"
              />
              <textarea
                className="design-select w-full min-h-[5rem] resize-none"
                placeholder={messages.consultation.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="design-modal-actions">
              <button
                type="button"
                className="design-btn design-btn-execution w-full"
                disabled={loading}
                onClick={submit}
              >
                {loading ? "…" : messages.consultation.submit}
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
