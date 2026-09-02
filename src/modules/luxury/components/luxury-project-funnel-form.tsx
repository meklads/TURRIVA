"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import type { BudgetRange, Timeline } from "@/modules/design/lib/lead-scoring";
import { getFunnelCopy } from "../lib/contact-intents";
import {
  scoreMarketingLead,
  type MarketingProjectType,
  type MarketingScope,
} from "../lib/marketing-lead-scoring";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import { buildWhatsAppHref } from "@/shared/lib/whatsapp";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";

type Props = {
  locale: Locale;
  source: string;
  initialProjectType?: MarketingProjectType;
  whatsappMessage?: string;
};

const PROJECT_TYPES: MarketingProjectType[] = [
  "villa",
  "hospitality",
  "exhibition",
  "developer",
  "commercial",
  "other",
];
const SCOPES: MarketingScope[] = ["one_room", "multiple_rooms", "full_property", "batch_units"];
const BUDGETS: BudgetRange[] = ["under_30k", "30_80k", "80_200k", "over_200k"];
const TIMELINES: Timeline[] = ["immediate", "1_month", "3_months", "exploring"];

export function LuxuryProjectFunnelForm({ locale, source, initialProjectType, whatsappMessage }: Props) {
  const copy = getFunnelCopy(locale);
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState<MarketingProjectType>(initialProjectType ?? "villa");
  const [executionScope, setExecutionScope] = useState<MarketingScope>("full_property");
  const [budget, setBudget] = useState<BudgetRange>("80_200k");
  const [timeline, setTimeline] = useState<Timeline>("1_month");
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [qualified, setQualified] = useState(false);

  const stepLabels = [copy.steps.project, copy.steps.scope, copy.steps.details, copy.steps.contact];
  const totalSteps = stepLabels.length;

  const previewScore = useMemo(
    () => scoreMarketingLead({ projectType, executionScope, budget, timeline, phone, company, email }),
    [projectType, executionScope, budget, timeline, phone, company, email]
  );

  async function uploadFile(): Promise<string | null> {
    if (!file) return null;
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/leads/attachment", { method: "POST", body });
    if (!res.ok) return null;
    const data = (await res.json()) as { url?: string };
    return data.url ?? null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const attachmentUrl = await uploadFile();
      const { score, qualified: isQualified } = scoreMarketingLead({
        projectType,
        executionScope,
        budget,
        timeline,
        phone,
        company,
        email,
      });

      const payloadMessage = [
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `City: ${city}`,
        `Area/units: ${area}`,
        attachmentUrl ? `Attachment: ${attachmentUrl}` : file ? `Attachment: ${file.name} (upload failed)` : null,
        message,
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/design/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: payloadMessage,
          locale,
          source,
          city: "other",
          interest: projectType === "developer" ? "bespoke" : "execution",
          projectType,
          executionScope,
          budget,
          timeline,
          company,
          area,
          attachmentUrl,
          leadScore: score,
          qualified: isQualified,
        }),
      });

      if (!res.ok) throw new Error("failed");

      setQualified(isQualified);
      setStatus("success");
      trackMarketingEvent("Lead Submit", {
        source,
        projectType,
        qualified: isQualified,
        score,
      });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="lux-funnel-success">
        <p>{copy.success}</p>
        {qualified ? <p className="lux-funnel-success__note">{copy.qualifiedNote}</p> : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="lux-funnel">
      <div className="lux-funnel__progress" aria-hidden>
        {stepLabels.map((label, i) => (
          <span key={label} className={`lux-funnel__dot${i <= step ? " lux-funnel__dot--active" : ""}`} title={label} />
        ))}
      </div>
      <p className="lux-funnel__step-label">{copy.stepOf(step + 1, totalSteps)} · {stepLabels[step]}</p>

      {step === 0 && (
        <div className="lux-funnel__grid">
          {PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              className={`lux-funnel__choice${projectType === type ? " lux-funnel__choice--active" : ""}`}
              onClick={() => setProjectType(type)}
            >
              {copy.projectTypes[type]}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="lux-funnel__grid">
          {SCOPES.map((scope) => (
            <button
              key={scope}
              type="button"
              className={`lux-funnel__choice${executionScope === scope ? " lux-funnel__choice--active" : ""}`}
              onClick={() => setExecutionScope(scope)}
            >
              {copy.scopes[scope]}
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="lux-funnel__fields">
          <label className="lux-funnel__field">
            <span>{copy.areaLabel}</span>
            <input
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={copy.areaPlaceholder}
              className="lux-input"
            />
          </label>
          <fieldset>
            <legend className="lux-funnel__legend">{locale === "ar" ? "الميزانية المتوقعة" : "Expected budget"}</legend>
            <div className="lux-funnel__grid lux-funnel__grid--compact">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`lux-funnel__choice lux-funnel__choice--sm${budget === b ? " lux-funnel__choice--active" : ""}`}
                  onClick={() => setBudget(b)}
                >
                  {copy.budgets[b]}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="lux-funnel__legend">{locale === "ar" ? "الجدول الزمني" : "Timeline"}</legend>
            <div className="lux-funnel__grid lux-funnel__grid--compact">
              {TIMELINES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`lux-funnel__choice lux-funnel__choice--sm${timeline === t ? " lux-funnel__choice--active" : ""}`}
                  onClick={() => setTimeline(t)}
                >
                  {copy.timelines[t]}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}

      {step === 3 && (
        <div className="lux-funnel__fields">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={copy.nameLabel} className="lux-input" />
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder={copy.companyLabel} className="lux-input" />
          <input
            required
            type="email"
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailLabel}
            className="lux-input"
          />
          <input
            required
            dir="ltr"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={copy.phoneLabel}
            className="lux-input"
          />
          <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder={copy.cityLabel} className="lux-input" />
          <label className="lux-funnel__file">
            <span className="text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">{copy.fileLabel}</span>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
              className="mt-2 block w-full text-sm"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <span className="mt-1 block text-xs text-lux-ink-muted">{file?.name ?? copy.fileHint}</span>
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={copy.messageLabel}
            className="lux-input min-h-[5rem]"
          />
        </div>
      )}

      {status === "error" && <p className="lux-funnel__error">{copy.error}</p>}

      <div className="lux-funnel__actions">
        {step > 0 ? (
          <button type="button" className="lux-btn-outline" onClick={() => setStep((s) => s - 1)}>
            {copy.back}
          </button>
        ) : (
          <span />
        )}
        {step < totalSteps - 1 ? (
          <button type="button" className="lux-btn-primary" onClick={() => setStep((s) => s + 1)}>
            {copy.next}
          </button>
        ) : (
          <button type="submit" disabled={status === "loading"} className="lux-btn-primary">
            {status === "loading" ? copy.loading : copy.submit}
          </button>
        )}
      </div>

      {step === totalSteps - 1 && previewScore.qualified ? (
        <p className="lux-funnel__hint">{copy.qualifiedNote}</p>
      ) : null}

      <p className="lux-funnel__alt">
        {locale === "ar" ? "أو تواصل مباشرة:" : "Or contact directly:"}{" "}
        <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`}>{TURRIVA_PUBLIC_EMAIL}</a>
        {" · "}
        <a
          href={buildWhatsAppHref(
            whatsappMessage ??
              (locale === "ar" ? "مرحباً توريفا — أود مناقشة مشروع تنفيذ." : "Hello Turriva — I would like to discuss an execution project.")
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMarketingEvent("WhatsApp Click", { source })}
        >
          WhatsApp
        </a>
      </p>
    </form>
  );
}
