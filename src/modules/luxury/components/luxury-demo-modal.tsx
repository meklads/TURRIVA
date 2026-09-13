"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { getConversionCopy, type DemoProjectType, type DemoTimeline } from "../lib/conversion-copy";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import type { DemoPrefill } from "./luxury-conversion-provider";

type Props = {
  locale: Locale;
  open: boolean;
  onClose: () => void;
  prefill?: DemoPrefill;
};

export function LuxuryDemoModal({ locale, open, onClose, prefill }: Props) {
  const copy = getConversionCopy(locale);
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<DemoProjectType>("sales_gallery");
  const [timeline, setTimeline] = useState<DemoTimeline>("1_3_months");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
      trackMarketingEvent("demo_modal_opened", { source: prefill?.source ?? "home" });
    }
    if (!open && el.open) el.close();
  }, [open, prefill?.source]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setStatus("idle");
      return;
    }
    if (prefill?.projectType) setProjectType(prefill.projectType);
    if (prefill?.timeline) setTimeline(prefill.timeline);
    if (prefill?.company) setCompany(prefill.company);
    if (prefill?.note) setNote(prefill.note);
  }, [open, prefill]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const payload = {
        name,
        phone,
        email: email || undefined,
        company,
        locale,
        source: prefill?.source ?? "live_demo_modal",
        interest: "bespoke" as const,
        projectType: "developer",
        message: [
          `Live demo request`,
          `Project type: ${projectType}`,
          `Timeline: ${timeline}`,
          role ? `Role: ${role}` : null,
          company ? `Company: ${company}` : null,
          note ? `Context: ${note}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
        timeline:
          timeline === "urgent"
            ? ("immediate" as const)
            : timeline === "1_3_months"
              ? ("1_month" as const)
              : ("exploring" as const),
      };

      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      trackMarketingEvent("demo_modal_submitted", { projectType, timeline });
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="lux-demo-modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="lux-demo-modal__panel">
        <button type="button" className="lux-demo-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="lux-eyebrow">{copy.ctaDemo}</p>
        <h2 id={titleId} className="lux-display lux-heading mt-2">
          {copy.demo.title}
        </h2>
        <p className="lux-body mt-2 text-sm text-lux-ink-soft">{copy.demo.subtitle}</p>
        {note ? <p className="lux-demo-modal__note mt-3">{note}</p> : null}

        <ol className="lux-demo-modal__steps" aria-hidden>
          {[copy.demo.stepProject, copy.demo.stepTimeline, copy.demo.stepContact].map((label, i) => (
            <li key={label} className={i === step ? "is-active" : i < step ? "is-done" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span> {label}
            </li>
          ))}
        </ol>

        {status === "success" ? (
          <p className="lux-demo-modal__success mt-6">{copy.demo.success}</p>
        ) : (
          <form className="lux-demo-modal__form mt-6" onSubmit={step === 2 ? onSubmit : (e) => e.preventDefault()}>
            {step === 0 ? (
              <fieldset className="lux-demo-modal__fieldset">
                <legend className="sr-only">{copy.demo.stepProject}</legend>
                <div className="lux-demo-modal__choices">
                  {copy.demo.projectTypes.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`lux-demo-modal__choice${projectType === opt.id ? " is-selected" : ""}`}
                      onClick={() => setProjectType(opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {step === 1 ? (
              <fieldset className="lux-demo-modal__fieldset">
                <legend className="sr-only">{copy.demo.stepTimeline}</legend>
                <div className="lux-demo-modal__choices">
                  {copy.demo.timelines.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`lux-demo-modal__choice${timeline === opt.id ? " is-selected" : ""}`}
                      onClick={() => setTimeline(opt.id)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {step === 2 ? (
              <div className="lux-demo-modal__fields">
                <label>
                  <span>{copy.demo.fields.name}</span>
                  <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                </label>
                <label>
                  <span>{copy.demo.fields.company}</span>
                  <input required value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
                </label>
                <label>
                  <span>{copy.demo.fields.role}</span>
                  <input value={role} onChange={(e) => setRole(e.target.value)} autoComplete="organization-title" />
                </label>
                <label>
                  <span>{copy.demo.fields.phone}</span>
                  <input required value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" dir="ltr" />
                </label>
                <label>
                  <span>{copy.demo.fields.email}</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" dir="ltr" />
                </label>
              </div>
            ) : null}

            {status === "error" ? <p className="lux-demo-modal__error">{copy.demo.error}</p> : null}

            <div className="lux-demo-modal__actions">
              {step > 0 ? (
                <button type="button" className="lux-btn-outline" onClick={() => setStep((s) => s - 1)}>
                  {copy.demo.back}
                </button>
              ) : (
                <span />
              )}
              {step < 2 ? (
                <button type="button" className="lux-btn-primary" onClick={() => setStep((s) => s + 1)}>
                  {copy.demo.next}
                </button>
              ) : (
                <button type="submit" className="lux-btn-primary" disabled={status === "loading"}>
                  {status === "loading" ? "…" : copy.demo.submit}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
