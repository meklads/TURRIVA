"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";
import { buildWhatsAppHref } from "@/shared/lib/whatsapp";
import {
  EXPERIENCE_NEEDS,
  EXPERIENCE_PROJECT_TYPES,
  getExperienceCopy,
  type ExperienceNeed,
  type ExperienceProjectType,
} from "../lib/real-estate-experience-copy";

type UnitTypeOption = { id: string; label: string };

type Props = {
  locale: Locale;
  source?: string;
  productLabel?: string;
  initialProjectType?: ExperienceProjectType;
  initialNeeds?: readonly ExperienceNeed[];
  unitTypes?: readonly UnitTypeOption[];
  choiceLegend?: string;
  drawings?: { label: string; yes: string; no: string };
};

function mapCity(value: string): "jeddah" | "makkah" | "other" {
  const v = value.trim().toLowerCase();
  if (/jeddah|jidda|جدة|جده/.test(v)) return "jeddah";
  if (/makkah|mecca|مكة|مكه/.test(v)) return "makkah";
  return "other";
}

export function LuxuryExperienceBriefForm({
  locale,
  source = "real_estate_experience",
  productLabel = "Real estate project experience",
  initialProjectType = "residential",
  initialNeeds = [],
  unitTypes,
  choiceLegend,
  drawings,
}: Props) {
  const copy = getExperienceCopy(locale).form;
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState<ExperienceProjectType>(initialProjectType);
  const [needs, setNeeds] = useState<ExperienceNeed[]>([...initialNeeds]);
  const [unitType, setUnitType] = useState(unitTypes?.[0]?.id ?? "");
  const [hasDrawings, setHasDrawings] = useState<"yes" | "no" | "">("");
  const [brief, setBrief] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [needError, setNeedError] = useState(false);
  const [needsOpen, setNeedsOpen] = useState(false);
  const needsPanelId = useId();
  const needsRootRef = useRef<HTMLDivElement>(null);

  function toggleNeed(need: ExperienceNeed) {
    setNeeds((current) => (current.includes(need) ? current.filter((item) => item !== need) : [...current, need]));
    setNeedError(false);
  }

  useEffect(() => {
    if (!needsOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!needsRootRef.current?.contains(event.target as Node)) setNeedsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNeedsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [needsOpen]);

  const needsSummary =
    needs.length === 0
      ? locale === "ar"
        ? "اختر ما تحتاجه"
        : "Select what you need"
      : needs.map((need) => copy.needLabels[need]).join(locale === "ar" ? "، " : ", ");

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
    if (needs.length === 0) {
      setNeedError(true);
      return;
    }

    setStatus("loading");
    try {
      const attachmentUrl = await uploadFile();
      const typeLabel = copy.projectTypes[projectType];
      const needLabels = needs.map((need) => copy.needLabels[need]).join(", ");
      const workEmail = Boolean(email) && !/@(gmail|googlemail|hotmail|outlook|yahoo|icloud)\./i.test(email);
      const leadScore = 30 + (needs.length >= 3 ? 20 : 14) + 10 + 8 + (workEmail ? 7 : 0);

      const unitLabel = unitTypes?.find((item) => item.id === unitType)?.label;
      const message = [
        `Product: ${productLabel}`,
        `Role: ${role}`,
        `City: ${city}`,
        `Project type: ${typeLabel}`,
        unitLabel ? `Unit: ${unitLabel}` : null,
        drawings && hasDrawings ? `Drawings: ${hasDrawings === "yes" ? drawings.yes : drawings.no}` : null,
        `Needs: ${needLabels}`,
        brief,
        attachmentUrl ? `Attachment: ${attachmentUrl}` : file ? `Attachment: ${file.name} (upload failed)` : null,
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
          company,
          city: mapCity(city),
          locale,
          source,
          interest: "bespoke",
          projectType: "developer",
          executionScope: needs.includes("show_unit") || needs.includes("full_fitout") ? "full_property" : "multiple_rooms",
          area: city,
          message,
          attachmentUrl,
          leadScore,
          qualified: true,
        }),
      });

      if (!res.ok) throw new Error("failed");
      setStatus("success");
      trackMarketingEvent("Lead Submit", { source, projectType: "developer" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const waHref = buildWhatsAppHref(
      locale === "ar"
        ? `مرحباً توريفا، أرسلت ملخصاً عن ${productLabel}. الشركة: ${company}. الاسم: ${name}.`
        : `Hello Turriva, I submitted a brief for ${productLabel}. Company: ${company}. Name: ${name}.`
    );

    return (
      <div className="lux-funnel-success">
        <p>{copy.success}</p>
        <div className="lux-funnel-success__actions">
          <a href={waHref} className="lux-btn-primary" target="_blank" rel="noopener noreferrer">
            {copy.whatsapp}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="lux-funnel">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required value={company} onChange={(e) => setCompany(e.target.value)} placeholder={copy.company} className="lux-input" />
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={copy.name} className="lux-input" />
        <input required value={role} onChange={(e) => setRole(e.target.value)} placeholder={copy.title} className="lux-input" />
        <input required minLength={8} dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={copy.phone} className="lux-input" />
        <input required type="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={copy.email} className="lux-input" />
        <input required value={city} onChange={(e) => setCity(e.target.value)} placeholder={copy.city} className="lux-input" />
      </div>

      {unitTypes && unitTypes.length > 0 ? (
        <label className="lux-funnel__field">
          <span className="lux-funnel__legend">{choiceLegend ?? (locale === "ar" ? "نوع الوحدة" : "Unit type")}</span>
          <select
            required
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            className="lux-input lux-funnel__select"
          >
            {unitTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      {drawings ? (
        <fieldset className="lux-funnel__field">
          <legend className="lux-funnel__legend">{drawings.label}</legend>
          <div className="lux-funnel__grid lux-funnel__grid--compact lux-funnel__grid--pair">
            {(["yes", "no"] as const).map((value) => (
              <button
                key={value}
                type="button"
                className={`lux-funnel__choice lux-funnel__choice--sm${hasDrawings === value ? " lux-funnel__choice--active" : ""}`}
                onClick={() => setHasDrawings(value)}
              >
                {value === "yes" ? drawings.yes : drawings.no}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <label className="lux-funnel__field">
        <span className="lux-funnel__legend">{copy.projectType}</span>
        <select
          required
          value={projectType}
          onChange={(e) => setProjectType(e.target.value as ExperienceProjectType)}
          className="lux-input lux-funnel__select"
        >
          {EXPERIENCE_PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {copy.projectTypes[type]}
            </option>
          ))}
        </select>
      </label>

      <div className="lux-funnel__field" ref={needsRootRef}>
        <span className="lux-funnel__legend" id={`${needsPanelId}-label`}>
          {copy.needs}
        </span>
        <button
          type="button"
          className={`lux-input lux-funnel__select lux-funnel__multi-trigger${needsOpen ? " lux-funnel__multi-trigger--open" : ""}${needError ? " lux-funnel__multi-trigger--error" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={needsOpen}
          aria-controls={needsPanelId}
          aria-labelledby={`${needsPanelId}-label`}
          onClick={() => setNeedsOpen((value) => !value)}
        >
          <span className={needs.length === 0 ? "lux-funnel__multi-placeholder" : undefined}>{needsSummary}</span>
        </button>
        {needsOpen ? (
          <div id={needsPanelId} className="lux-funnel__multi-panel" role="listbox" aria-multiselectable="true">
            {EXPERIENCE_NEEDS.map((need) => {
              const selected = needs.includes(need);
              return (
                <button
                  key={need}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`lux-funnel__multi-option${selected ? " lux-funnel__multi-option--active" : ""}`}
                  onClick={() => toggleNeed(need)}
                >
                  <span className="lux-funnel__multi-check" aria-hidden="true" />
                  {copy.needLabels[need]}
                </button>
              );
            })}
          </div>
        ) : null}
        {needError ? <p className="lux-funnel__error mt-3">{copy.needError}</p> : null}
      </div>

      <label className="lux-funnel__field">
        <span className="lux-funnel__legend">{copy.brief}</span>
        <textarea
          rows={4}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder={copy.briefPlaceholder}
          className="lux-input"
        />
      </label>

      <label className="lux-funnel__file mt-4 block">
        <span className="text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">{copy.file}</span>
        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg,.webp,.dwg,.dxf"
          className="mt-2 block w-full text-sm"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <span className="mt-1 block text-xs text-lux-ink-muted">{file?.name ?? copy.fileHint}</span>
      </label>

      {status === "error" ? (
        <p className="lux-funnel__error mt-4">
          {copy.error}{" "}
          <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`} className="font-semibold underline">
            {TURRIVA_PUBLIC_EMAIL}
          </a>
        </p>
      ) : null}

      <div className="lux-funnel__actions mt-6">
        <button type="submit" className="lux-btn-primary" disabled={status === "loading"}>
          {status === "loading" ? copy.submitting : copy.submit}
        </button>
      </div>
    </form>
  );
}
