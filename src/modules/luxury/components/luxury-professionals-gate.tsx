"use client";

import { useState } from "react";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import type { Locale } from "@/shared/i18n/locale";
import type { ProfessionalsPageCopy } from "@/shared/i18n/messages/luxury-seo-pages";

type Props = {
  locale: Locale;
  copy: ProfessionalsPageCopy;
};

export function LuxuryProfessionalsGate({ locale, copy }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorKey(null);

    try {
      const res = await fetch("/api/professionals/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, role: role || undefined, locale }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorKey(data.error ?? "server_error");
        setStatus("error");
        return;
      }

      trackMarketingEvent("Professionals Unlock", { locale });
      window.location.reload();
    } catch {
      setErrorKey("server_error");
      setStatus("error");
    }
  }

  const errorMessage =
    errorKey === "personal_email"
      ? copy.formErrorPersonal
      : errorKey === "invalid_email" || errorKey === "invalid_input"
        ? copy.formErrorInvalid
        : copy.formError;

  return (
    <section className="lux-section lux-section--white">
      <div className="lux-container max-w-xl">
        <div className="rounded-2xl border border-lux-sand bg-white p-8 shadow-lux-card sm:p-10">
          <p className="lux-eyebrow">{copy.gateEyebrow}</p>
          <h2 className="lux-display mt-4 text-2xl sm:text-3xl">{copy.gateTitle}</h2>
          <p className="lux-body mt-4 text-lux-ink-soft">{copy.gateIntro}</p>
          <p className="mt-3 text-sm text-lux-ink-muted">{copy.gateNote}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={copy.formName} className="lux-input" autoComplete="name" />
            <input required value={company} onChange={(e) => setCompany(e.target.value)} placeholder={copy.formCompany} className="lux-input" autoComplete="organization" />
            <input
              required
              type="email"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.formEmail}
              className="lux-input"
              autoComplete="email"
            />
            <input value={role} onChange={(e) => setRole(e.target.value)} placeholder={copy.formRole} className="lux-input" />

            {status === "error" && <p className="lux-funnel__error">{errorMessage}</p>}

            <button type="submit" disabled={status === "loading"} className="lux-btn-primary w-full justify-center">
              {status === "loading" ? copy.formLoading : copy.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
