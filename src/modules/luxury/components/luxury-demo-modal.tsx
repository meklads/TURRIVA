"use client";

import Image from "next/image";
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

const DEMO_IMAGE = "/brand/turriva/projects/anan-eskan-gallery.jpg";

function mapProjectType(type: DemoProjectType): string {
  switch (type) {
    case "developer":
      return "developer";
    case "hospitality":
      return "hospitality";
    case "commercial":
      return "commercial";
    case "exhibition":
      return "exhibition";
    case "residential":
      return "villa";
    default:
      return "other";
  }
}

function mapTimeline(timeline: DemoTimeline): "immediate" | "1_month" | "exploring" {
  if (timeline === "urgent") return "immediate";
  if (timeline === "1_3_months") return "1_month";
  return "exploring";
}

export function LuxuryDemoModal({ locale, open, onClose, prefill }: Props) {
  const copy = getConversionCopy(locale);
  const isAr = locale === "ar";
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [step, setStep] = useState(0);
  const [objective, setObjective] = useState("");
  const [projectType, setProjectType] = useState<DemoProjectType>("developer");
  const [timeline, setTimeline] = useState<DemoTimeline>("1_3_months");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const stepLabels = [copy.demo.stepObjective, copy.demo.stepProject, copy.demo.stepTimeline, copy.demo.stepContact];
  const lastStep = 3;
  const progress = ((step + 1) / (lastStep + 1)) * 100;

  function resetForm() {
    setStep(0);
    setObjective("");
    setProjectType("developer");
    setTimeline("1_3_months");
    setName("");
    setCompany("");
    setRole("");
    setPhone("");
    setEmail("");
    setNote("");
    setStatus("idle");
    setErrorDetail("");
  }

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
      trackMarketingEvent("demo_modal_opened", { source: prefill?.source ?? "home" });
      document.body.style.overflow = "hidden";
    }
    if (!open && el.open) {
      el.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, prefill?.source]);

  useEffect(() => {
    if (!open) {
      resetForm();
      return;
    }
    if (prefill?.projectType) setProjectType(prefill.projectType);
    if (prefill?.timeline) setTimeline(prefill.timeline);
    if (prefill?.company) setCompany(prefill.company);
    if (prefill?.note) setNote(prefill.note);
  }, [open, prefill]);

  function canAdvance(): boolean {
    if (step === 0) return objective.trim().length >= 8;
    if (step === 3) return name.trim().length >= 2 && company.trim().length >= 2 && phone.replace(/\D/g, "").length >= 8;
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canAdvance()) return;
    setStatus("loading");
    setErrorDetail("");
    try {
      const cleanPhone = phone.trim();
      const payload = {
        name: name.trim(),
        phone: cleanPhone,
        email: email.trim() || undefined,
        company: company.trim(),
        locale,
        source: prefill?.source ?? "project_brief_modal",
        interest: "execution" as const,
        projectType: mapProjectType(projectType),
        message: [
          "Project discussion",
          objective ? `Brief: ${objective.trim()}` : null,
          `Project type: ${projectType}`,
          `Timeline: ${timeline}`,
          role.trim() ? `Role: ${role.trim()}` : null,
          note.trim() ? `Context: ${note.trim()}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
        timeline: mapTimeline(timeline),
      };

      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || "failed");
      }
      setStatus("success");
      trackMarketingEvent("demo_modal_submitted", { projectType, timeline });
    } catch {
      setStatus("error");
      setErrorDetail(
        isAr
          ? "تعذر الإرسال. تحقق من الاسم والجوال (8 أرقام على الأقل) ثم أعد المحاولة."
          : "Could not submit. Check name and phone (at least 8 digits), then try again."
      );
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="lux-demo-modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="lux-demo-modal__shell" dir={isAr ? "rtl" : "ltr"}>
        <aside className="lux-demo-modal__media" aria-hidden>
          <Image
            src={DEMO_IMAGE}
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="(max-width: 820px) 100vw, 42vw"
            priority={false}
          />
          <div className="lux-demo-modal__media-veil" />
          <div className="lux-demo-modal__media-copy">
            <p className="lux-demo-modal__media-kicker">{copy.heroCapability}</p>
            <p className="lux-demo-modal__media-title">{copy.heroTitle}</p>
            <p className="lux-demo-modal__media-line">{copy.heroPillars}</p>
          </div>
        </aside>

        <div className="lux-demo-modal__panel">
          <button
            type="button"
            className="lux-demo-modal__close"
            onClick={onClose}
            aria-label={isAr ? "إغلاق" : "Close"}
          >
            ×
          </button>

          <p className="lux-eyebrow">{copy.heroCapability}</p>
          <h2 id={titleId} className="lux-display lux-heading mt-2">
            {copy.demo.title}
          </h2>
          <p className="lux-body mt-2 text-sm text-lux-ink-soft">{copy.demo.subtitle}</p>
          {note ? <p className="lux-demo-modal__note mt-3">{note}</p> : null}

          <div className="lux-demo-modal__progress" aria-hidden>
            <span style={{ width: `${progress}%` }} />
          </div>

          <ol className="lux-demo-modal__steps">
            {stepLabels.map((label, i) => (
              <li key={label} className={i === step ? "is-active" : i < step ? "is-done" : undefined}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <em>{label}</em>
              </li>
            ))}
          </ol>

          {status === "success" ? (
            <div className="lux-demo-modal__success mt-6">
              <p>{copy.demo.success}</p>
              <button type="button" className="lux-btn-primary mt-4" onClick={onClose}>
                {isAr ? "إغلاق" : "Close"}
              </button>
            </div>
          ) : (
            <form
              className="lux-demo-modal__form mt-5"
              onSubmit={step === lastStep ? onSubmit : (e) => e.preventDefault()}
            >
              {step === 0 ? (
                <label className="lux-demo-modal__objective">
                  <span>{copy.demo.objectivePrompt}</span>
                  <textarea
                    required
                    rows={4}
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder={copy.demo.objectivePlaceholder}
                  />
                </label>
              ) : null}

              {step === 1 ? (
                <fieldset className="lux-demo-modal__fieldset">
                  <legend className="lux-demo-modal__legend">{copy.demo.stepProject}</legend>
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

              {step === 2 ? (
                <fieldset className="lux-demo-modal__fieldset">
                  <legend className="lux-demo-modal__legend">{copy.demo.stepTimeline}</legend>
                  <div className="lux-demo-modal__choices lux-demo-modal__choices--stack">
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

              {step === 3 ? (
                <div className="lux-demo-modal__fields">
                  <label>
                    <span>{copy.demo.fields.name}</span>
                    <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                  </label>
                  <label>
                    <span>{copy.demo.fields.company}</span>
                    <input
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      autoComplete="organization"
                    />
                  </label>
                  <label>
                    <span>{copy.demo.fields.role}</span>
                    <input value={role} onChange={(e) => setRole(e.target.value)} autoComplete="organization-title" />
                  </label>
                  <label>
                    <span>{copy.demo.fields.phone}</span>
                    <input
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      autoComplete="tel"
                      inputMode="tel"
                      dir="ltr"
                    />
                  </label>
                  <label>
                    <span>{copy.demo.fields.email}</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      dir="ltr"
                    />
                  </label>
                </div>
              ) : null}

              {status === "error" ? (
                <p className="lux-demo-modal__error" role="alert">
                  {errorDetail || copy.demo.error}
                </p>
              ) : null}

              <div className="lux-demo-modal__actions">
                {step > 0 ? (
                  <button type="button" className="lux-btn-outline" onClick={() => setStep((s) => s - 1)}>
                    {copy.demo.back}
                  </button>
                ) : (
                  <span />
                )}
                {step < lastStep ? (
                  <button
                    type="button"
                    className="lux-btn-primary"
                    disabled={!canAdvance()}
                    onClick={() => setStep((s) => s + 1)}
                  >
                    {copy.demo.next}
                  </button>
                ) : (
                  <button type="submit" className="lux-btn-primary" disabled={status === "loading" || !canAdvance()}>
                    {status === "loading" ? (isAr ? "جارٍ الإرسال…" : "Sending…") : copy.demo.submit}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
