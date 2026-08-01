"use client";

import { useState } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
  source?: string;
  defaultProjectType?: string;
  extraFields?: React.ReactNode;
  submitLabel?: string;
};

export function LuxuryLeadForm({
  messages,
  locale,
  source = "marketing_contact",
  defaultProjectType = "villa",
  extraFields,
  submitLabel,
}: Props) {
  const c = messages.pages.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(defaultProjectType);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: phone || email,
          message: [`Email: ${email}`, `Type: ${projectType}`, message].filter(Boolean).join("\n"),
          locale,
          source,
          interest: projectType === "developer" ? "bespoke" : "execution",
          projectType,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="rounded-xl bg-lux-gold-muted/50 px-4 py-3 text-sm text-lux-ink">{c.formSuccess}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {c.formName}
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="lux-input"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {c.formEmail}
        </label>
        <input
          type="email"
          dir="ltr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="lux-input"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {c.formPhone}
        </label>
        <input
          required
          dir="ltr"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="lux-input"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {c.formProjectType}
        </label>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="lux-input"
        >
          {c.projectTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {extraFields}
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {c.formMessage}
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="lux-input min-h-[7rem] resize-y"
        />
      </div>
      {status === "error" && <p className="text-sm text-red-700">{c.formError}</p>}
      <button type="submit" disabled={status === "loading"} className="lux-btn-primary w-full sm:w-auto">
        {status === "loading" ? "…" : submitLabel ?? c.formSubmit}
      </button>
      <p className="text-center text-xs text-lux-ink-muted sm:text-start">
        {locale === "ar" ? "أو راسلنا مباشرة:" : "Or email us directly:"}{" "}
        <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`} className="font-medium text-lux-gold hover:underline">
          {TURRIVA_PUBLIC_EMAIL}
        </a>
      </p>
    </form>
  );
}
