"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createProposalAction,
  generateWithAI,
} from "@/modules/proposal/server/proposal.actions";
import type { CommercialMode, PaymentType, PropertyType } from "@/shared/types";
import { useLocale, useT } from "@/shared/i18n/context";
import { validateProposalFields } from "@/shared/i18n/locale";
import {
  OptionalDetailsFields,
  type OptionalDetailsValues,
} from "@/modules/proposal/components/optional-details-fields";
import Link from "next/link";

type Step = "project" | "details" | "generating";

const EMPTY_OPTIONAL: OptionalDetailsValues = {
  projectLocation: "",
  propertyType: "",
  areaSqm: 0,
  durationHint: "",
  specifications: "",
};

export default function NewProposalPage() {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const [step, setStep] = useState<Step>("project");
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [form, setForm] = useState({
    projectName: "",
    clientName: "",
    description: "",
    budget: 0,
    paymentType: "milestone_30_40_30" as PaymentType,
    commercialMode: "fixed_price" as CommercialMode,
    ...EMPTY_OPTIONAL,
  });

  const forward = locale === "ar" ? "←" : "→";
  const backward = locale === "ar" ? "→" : "←";
  const stepSep = locale === "ar" ? "←" : "→";

  const updateField = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateForm = (): boolean => {
    if (!form.projectName.trim() || !form.clientName.trim()) {
      setError(t.form.errors.projectRequired);
      return false;
    }
    if (!form.description.trim()) {
      setError(t.form.errors.descriptionRequired);
      return false;
    }
    const localeError = validateProposalFields(
      {
        projectName: form.projectName,
        clientName: form.clientName,
        description: form.description,
      },
      locale
    );
    if (localeError) {
      setError(t.form.errors[localeError]);
      return false;
    }
    if (
      form.commercialMode === "fixed_price" &&
      (!form.budget || form.budget <= 0)
    ) {
      setError(t.form.errors.budgetRequired);
      return false;
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!validateForm()) return;

    setStep("generating");
    setProgress(10);

    try {
      const created = await createProposalAction({
        projectName: form.projectName,
        clientName: form.clientName,
        description: form.description,
        budget: form.budget,
        paymentType: form.paymentType,
        commercialMode: form.commercialMode,
        projectLocation: form.projectLocation || undefined,
        propertyType: (form.propertyType || undefined) as PropertyType | undefined,
        areaSqm: form.areaSqm > 0 ? form.areaSqm : undefined,
        durationHint: form.durationHint || undefined,
        specifications: form.specifications || undefined,
      });

      if (!created.success) {
        throw new Error(created.error ?? t.form.errors.generic);
      }

      setProgress(40);

      const generated = await generateWithAI(created.id);
      if (!generated.success) {
        throw new Error(generated.error ?? t.form.errors.generic);
      }

      setProgress(100);
      router.push(`/proposals/${created.id}`);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t.form.errors.generic;
      setError(message);
      setStep("details");
    }
  };

  if (step === "generating") {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          {progress < 50 ? t.form.generatingAnalyze : t.form.generatingWrite}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{t.form.title}</h1>
        <p className="mt-1 text-sm text-gray-500">{t.form.subtitle}</p>
        <Link
          href="/templates/sample"
          className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          {t.nav.previewSample} →
        </Link>
      </div>

      <div className="mb-8 flex items-center gap-2 text-sm">
        {(["project", "details"] as const).map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            {i > 0 && <span className="text-gray-300">{stepSep}</span>}
            <span
              className={`rounded-full px-3 py-1 ${
                step === s
                  ? "bg-brand-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {t.form.steps[s]}
            </span>
          </span>
        ))}
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {step === "project" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              {t.form.projectName}
            </label>
            <input
              type="text"
              value={form.projectName}
              onChange={(e) => updateField("projectName", e.target.value)}
              placeholder={t.form.projectNamePlaceholder}
              dir={locale === "ar" ? "rtl" : "ltr"}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              {t.form.clientName}
            </label>
            <input
              type="text"
              value={form.clientName}
              onChange={(e) => updateField("clientName", e.target.value)}
              placeholder={t.form.clientNamePlaceholder}
              dir={locale === "ar" ? "rtl" : "ltr"}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <div className="pt-4">
            <button
              onClick={() => setStep("details")}
              disabled={!form.projectName.trim() || !form.clientName.trim()}
              className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              {t.form.continue} {forward}
            </button>
          </div>
        </div>
      )}

      {step === "details" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              {t.form.description}
            </label>
            <textarea
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder={t.form.descriptionPlaceholder}
              dir={locale === "ar" ? "rtl" : "ltr"}
              rows={5}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              autoFocus
            />
            <p className="mt-1 text-xs text-gray-400">{t.form.descriptionHint}</p>
          </div>

          <OptionalDetailsFields
            open={optionalOpen}
            onToggle={() => setOptionalOpen((v) => !v)}
            values={{
              projectLocation: form.projectLocation,
              propertyType: form.propertyType as PropertyType,
              areaSqm: form.areaSqm,
              durationHint: form.durationHint,
              specifications: form.specifications,
            }}
            onChange={updateField}
            locale={locale}
          />

          <div className="border-t border-gray-100 pt-4">
            <p className="mb-3 text-sm font-medium text-gray-900">
              {t.form.commercialSection}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  {t.form.commercialMode}
                </label>
                <div className="mt-2 space-y-2">
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50/30">
                    <input
                      type="radio"
                      name="commercialMode"
                      value="fixed_price"
                      checked={form.commercialMode === "fixed_price"}
                      onChange={() => updateField("commercialMode", "fixed_price")}
                      className="mt-0.5"
                    />
                    <span className="text-sm text-gray-800">
                      {t.form.commercialModeFixed}
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50/30">
                    <input
                      type="radio"
                      name="commercialMode"
                      value="estimate_only"
                      checked={form.commercialMode === "estimate_only"}
                      onChange={() =>
                        updateField("commercialMode", "estimate_only")
                      }
                      className="mt-0.5"
                    />
                    <span className="text-sm text-gray-800">
                      {t.form.commercialModeEstimate}
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  {t.form.budget}
                </label>
                <input
                  type="number"
                  value={form.budget || ""}
                  onChange={(e) => updateField("budget", Number(e.target.value))}
                  placeholder={t.form.budgetPlaceholder}
                  dir="ltr"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
                {form.commercialMode === "estimate_only" && (
                  <p className="mt-1 text-xs text-gray-500">
                    {t.form.budgetOptional}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  {t.form.paymentStructure}
                </label>
                <select
                  value={form.paymentType}
                  onChange={(e) => updateField("paymentType", e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                >
                  <option value="milestone_30_40_30">
                    {t.form.paymentOptions.milestone_30_40_30}
                  </option>
                  <option value="monthly">{t.form.paymentOptions.monthly}</option>
                  <option value="fixed">{t.form.paymentOptions.fixed}</option>
                  <option value="custom">{t.form.paymentOptions.custom}</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setStep("project")}
              className="rounded-lg border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {backward} {t.form.back}
            </button>
            <button
              onClick={handleGenerate}
              disabled={!form.description.trim()}
              className="rounded-lg bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-50"
            >
              {t.form.generate}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
