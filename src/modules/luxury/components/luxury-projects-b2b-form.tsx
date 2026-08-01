"use client";

import { useState } from "react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";

type Props = {
  messages: LuxuryMessages;
  locale: Locale;
};

export function LuxuryProjectsB2bForm({ messages: t, locale }: Props) {
  const p = t.pages.projects;
  const c = t.pages.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [units, setUnits] = useState("");
  const [products, setProducts] = useState<string[]>([]);
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
          phone,
          email: email || undefined,
          message: [
            `Company: ${company}`,
            `Units/area: ${units}`,
            `Products: ${products.join(", ")}`,
            message,
          ]
            .filter(Boolean)
            .join("\n"),
          locale,
          source: "b2b_projects",
          interest: "bespoke",
          projectType: "developer",
        }),
      });
      if (!res.ok) throw new Error("fail");
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
      <input
        required
        placeholder={c.formName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="lux-input"
      />
      <input
        type="email"
        required
        dir="ltr"
        placeholder={p.formEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="lux-input"
      />
      <input
        required
        dir="ltr"
        placeholder={c.formPhone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="lux-input"
      />
      <input
        required
        placeholder={p.formCompany}
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="lux-input"
      />
      <input
        placeholder={p.formUnits}
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        className="lux-input"
      />
      <fieldset>
        <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          {p.formProducts}
        </legend>
        <div className="flex flex-wrap gap-2">
          {p.productOptions.map((opt) => (
            <label key={opt.value} className="lux-chip-check">
              <input
                type="checkbox"
                checked={products.includes(opt.value)}
                onChange={(e) =>
                  setProducts((prev) =>
                    e.target.checked ? [...prev, opt.value] : prev.filter((v) => v !== opt.value)
                  )
                }
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>
      <textarea
        rows={4}
        placeholder={c.formMessage}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="lux-input min-h-[7rem]"
      />
      {status === "error" && <p className="text-sm text-red-700">{c.formError}</p>}
      <button type="submit" disabled={status === "loading"} className="lux-btn-primary w-full sm:w-auto">
        {status === "loading" ? "…" : p.formSubmit}
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
