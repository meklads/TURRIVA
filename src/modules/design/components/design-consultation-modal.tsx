"use client";

import { useEffect, useState } from "react";
import type { DesignMessages } from "@/shared/i18n/messages/design";
import type { DesignCity } from "@/modules/design/lib/city";
import { citySupportsExecution } from "@/modules/design/lib/city";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
  open: boolean;
  onClose: () => void;
  initialCity?: DesignCity | null;
  generationId?: string | null;
};

export function DesignConsultationModal({
  messages,
  locale,
  open,
  onClose,
  initialCity = null,
  generationId = null,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState<DesignCity | "">("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setCity(initialCity ?? "");
      setSuccess(false);
    }
  }, [open, initialCity]);

  if (!open) return null;

  const c = messages.consultation;
  const subtitle =
    city && citySupportsExecution(city)
      ? c.executionAvailableSubtitle
      : city === "other"
        ? c.executionWaitlistSubtitle
        : c.subtitle;

  const submit = async () => {
    if (!name.trim() || !phone.trim() || !city) return;
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
          city,
          generationId: generationId ?? undefined,
        }),
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
            <h2>{c.success}</h2>
            <button type="button" className="design-btn design-btn-primary w-full mt-4" onClick={onClose}>
              OK
            </button>
          </>
        ) : (
          <>
            <span className="design-hero-badge">{c.freeBadge}</span>
            <h2 className="mt-3">{c.title}</h2>
            <p>{subtitle}</p>
            <div className="mt-4 space-y-3 text-start">
              <label className="block text-xs font-semibold text-gray-600">{c.city}</label>
              <select
                className="design-select w-full"
                value={city}
                onChange={(e) => setCity(e.target.value as DesignCity)}
              >
                <option value="">{locale === "ar" ? "اختر المدينة" : "Select city"}</option>
                <option value="jeddah">{messages.studio.cityJeddah}</option>
                <option value="makkah">{messages.studio.cityMakkah}</option>
                <option value="other">{messages.studio.cityOther}</option>
              </select>
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
                disabled={loading || !city}
                onClick={submit}
              >
                {loading ? "…" : c.submit}
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
