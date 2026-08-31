"use client";

import { useState } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
};

export function LuxuryPortfolioGate({ messages, locale }: Props) {
  const p = messages.pages.portfolio;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorKey(null);

    try {
      const res = await fetch("/api/portfolio/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, locale }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorKey(data.error ?? "server_error");
        setStatus("error");
        return;
      }

      window.location.reload();
    } catch {
      setErrorKey("server_error");
      setStatus("error");
    }
  }

  const errorMessage =
    errorKey === "personal_email"
      ? p.formErrorPersonal
      : errorKey === "invalid_email" || errorKey === "invalid_input"
        ? p.formErrorInvalid
        : p.formError;

  return (
    <section className="lux-section lux-section--linen">
      <div className="lux-container max-w-xl">
        <div className="rounded-2xl border border-lux-sand bg-white p-8 shadow-lux-card sm:p-10">
          <p className="lux-eyebrow">{p.gateEyebrow}</p>
          <h2 className="lux-display mt-4 text-2xl sm:text-3xl">{p.gateTitle}</h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{p.gateIntro}</p>
          <p className="mt-3 text-sm text-lux-ink-muted">{p.gateNote}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {p.formName}
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="lux-input"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {p.formCompany}
              </label>
              <input
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="lux-input"
                autoComplete="organization"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {p.formWorkEmail}
              </label>
              <input
                required
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="lux-input"
                autoComplete="work email"
                placeholder={p.formWorkEmailPlaceholder}
              />
            </div>

            {status === "error" && errorMessage && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{errorMessage}</p>
            )}

            <button type="submit" disabled={status === "loading"} className="lux-btn-primary w-full sm:w-auto">
              {status === "loading" ? "…" : p.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
