"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CompanyProfile } from "@prisma/client";
import { useT } from "@/shared/i18n/context";

interface Props {
  initial: CompanyProfile | null;
}

export function CompanySettingsForm({ initial }: Props) {
  const t = useT();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    companyName: initial?.companyName ?? "",
    logoUrl: initial?.logoUrl ?? "",
    address: initial?.address ?? "",
    about: initial?.about ?? "",
    crNumber: initial?.crNumber ?? "",
    vatNumber: initial?.vatNumber ?? "",
    phone: initial?.phone ?? "",
    email: initial?.email ?? "",
    website: initial?.website ?? "",
    portfolioUrl: initial?.portfolioUrl ?? "",
    catalogUrl: initial?.catalogUrl ?? "",
  });

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/company/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("save failed");
      router.refresh();
    } catch {
      alert(t.company.saveFailed);
    }
    setSaving(false);
  };

  const inputClass =
    "mt-1 block w-full rounded-lg border border-ruwaq-stone/80 px-3 py-2.5 text-sm shadow-sm focus:border-ruwaq-champagne/50 focus:outline-none focus:ring-4 focus:ring-ruwaq-champagne/10";

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-ruwaq-ink">
          {t.company.sections.identity}
        </h2>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.companyName}
          </label>
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.logoUrl}
          </label>
          <input
            type="url"
            value={form.logoUrl}
            onChange={(e) => update("logoUrl", e.target.value)}
            placeholder={t.company.logoUrlPlaceholder}
            dir="ltr"
            className={inputClass}
          />
          <p className="mt-1 text-xs text-ruwaq-ink-muted">{t.company.logoUrlHint}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.address}
          </label>
          <input
            type="text"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            placeholder={t.company.addressPlaceholder}
            className={inputClass}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ruwaq-ink">
              {t.company.crNumber}
            </label>
            <input
              type="text"
              value={form.crNumber}
              onChange={(e) => update("crNumber", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ruwaq-ink">
              {t.company.vatNumber}
            </label>
            <input
              type="text"
              value={form.vatNumber}
              onChange={(e) => update("vatNumber", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.phone}
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.email}
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </div>
      </section>

      <section className="space-y-4 border-t border-ruwaq-stone/50 pt-6">
        <h2 className="text-sm font-semibold text-ruwaq-ink">
          {t.company.sections.marketing}
        </h2>
        <p className="text-xs text-ruwaq-ink-muted">{t.company.marketingHint}</p>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.about}
          </label>
          <textarea
            value={form.about}
            onChange={(e) => update("about", e.target.value)}
            placeholder={t.company.aboutPlaceholder}
            rows={4}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.website}
          </label>
          <input
            type="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="https://"
            dir="ltr"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.portfolioUrl}
          </label>
          <input
            type="url"
            value={form.portfolioUrl}
            onChange={(e) => update("portfolioUrl", e.target.value)}
            placeholder={t.company.portfolioUrlPlaceholder}
            dir="ltr"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ruwaq-ink">
            {t.company.catalogUrl}
          </label>
          <input
            type="url"
            value={form.catalogUrl}
            onChange={(e) => update("catalogUrl", e.target.value)}
            placeholder={t.company.catalogUrlPlaceholder}
            dir="ltr"
            className={inputClass}
          />
        </div>
      </section>

      <button
        onClick={handleSave}
        disabled={saving}
        className="btn-ruwaq-primary px-6 py-2 disabled:opacity-50"
      >
        {saving ? t.company.saving : t.company.save}
      </button>
    </div>
  );
}
