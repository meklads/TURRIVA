"use client";

import { useState } from "react";
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

type Props = { locale: Locale };

function mapCity(value: string): "jeddah" | "makkah" | "other" {
  const v = value.trim().toLowerCase();
  if (/jeddah|jidda|جدة|جده/.test(v)) return "jeddah";
  if (/makkah|mecca|مكة|مكه/.test(v)) return "makkah";
  return "other";
}

export function LuxuryExperienceBriefForm({ locale }: Props) {
  const copy = getExperienceCopy(locale).form;
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [projectType, setProjectType] = useState<ExperienceProjectType>("residential");
  const [needs, setNeeds] = useState<ExperienceNeed[]>([]);
  const [brief, setBrief] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [needError, setNeedError] = useState(false);

  function toggleNeed(need: ExperienceNeed) {
    setNeeds((current) => (current.includes(need) ? current.filter((item) => item !== need) : [...current, need]));
    setNeedError(false);
  }

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

      const message = [
        "Product: Real estate project experience",
        `Role: ${role}`,
        `City: ${city}`,
        `Project type: ${typeLabel}`,
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
          source: "real_estate_experience",
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
      trackMarketingEvent("Lead Submit", { source: "real_estate_experience", projectType: "developer" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const waHref = buildWhatsAppHref(
      locale === "ar"
        ? `مرحباً توريفا — أرسلت ملخص تجربة المشروع العقاري. الشركة: ${company}. الاسم: ${name}.`
        : `Hello Turriva — I submitted a real-estate project experience brief. Company: ${company}. Name: ${name}.`
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

      <fieldset className="mt-6">
        <legend className="lux-funnel__legend">{copy.projectType}</legend>
        <div className="lux-funnel__grid lux-funnel__grid--compact">
          {EXPERIENCE_PROJECT_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              className={`lux-funnel__choice lux-funnel__choice--sm${projectType === type ? " lux-funnel__choice--active" : ""}`}
              onClick={() => setProjectType(type)}
            >
              {copy.projectTypes[type]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="lux-funnel__legend">{copy.needs}</legend>
        <div className="lux-funnel__grid lux-funnel__grid--compact">
          {EXPERIENCE_NEEDS.map((need) => (
            <button
              key={need}
              type="button"
              aria-pressed={needs.includes(need)}
              className={`lux-funnel__choice lux-funnel__choice--sm${needs.includes(need) ? " lux-funnel__choice--active" : ""}`}
              onClick={() => toggleNeed(need)}
            >
              {copy.needLabels[need]}
            </button>
          ))}
        </div>
        {needError ? <p className="lux-funnel__error mt-3">{copy.needError}</p> : null}
      </fieldset>

      <label className="mt-6 block">
        <span className="lux-funnel__legend">{copy.brief}</span>
        <textarea
          rows={4}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder={copy.briefPlaceholder}
          className="lux-input mt-2"
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
