"use client";

import type { PropertyType } from "@/shared/types";
import { useT } from "@/shared/i18n/context";

export interface OptionalDetailsValues {
  projectLocation: string;
  propertyType: PropertyType;
  areaSqm: number;
  durationHint: string;
  specifications: string;
}

interface Props {
  open: boolean;
  onToggle: () => void;
  values: OptionalDetailsValues;
  onChange: (field: keyof OptionalDetailsValues, value: string | number) => void;
  locale: "ar" | "en";
}

export function OptionalDetailsFields({
  open,
  onToggle,
  values,
  onChange,
  locale,
}: Props) {
  const t = useT();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-start text-sm font-medium text-gray-800"
      >
        <span>{t.form.optionalDetails.title}</span>
        <span className="text-gray-400">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="space-y-3 border-t border-gray-200 px-4 pb-4 pt-3">
          <p className="text-xs text-gray-500">{t.form.optionalDetails.hint}</p>

          <div>
            <label className="block text-xs font-medium text-gray-700">
              {t.form.optionalDetails.location}
            </label>
            <input
              type="text"
              value={values.projectLocation}
              onChange={(e) => onChange("projectLocation", e.target.value)}
              placeholder={t.form.optionalDetails.locationPlaceholder}
              dir={dir}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t.form.optionalDetails.propertyType}
              </label>
              <select
                value={values.propertyType}
                onChange={(e) =>
                  onChange("propertyType", e.target.value as PropertyType)
                }
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              >
                <option value="">{t.form.optionalDetails.propertyTypeNone}</option>
                <option value="villa">{t.form.optionalDetails.propertyTypes.villa}</option>
                <option value="apartment">
                  {t.form.optionalDetails.propertyTypes.apartment}
                </option>
                <option value="office">{t.form.optionalDetails.propertyTypes.office}</option>
                <option value="retail">{t.form.optionalDetails.propertyTypes.retail}</option>
                <option value="other">{t.form.optionalDetails.propertyTypes.other}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700">
                {t.form.optionalDetails.areaSqm}
              </label>
              <input
                type="number"
                value={values.areaSqm || ""}
                onChange={(e) => onChange("areaSqm", Number(e.target.value))}
                placeholder={t.form.optionalDetails.areaSqmPlaceholder}
                dir="ltr"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700">
              {t.form.optionalDetails.duration}
            </label>
            <input
              type="text"
              value={values.durationHint}
              onChange={(e) => onChange("durationHint", e.target.value)}
              placeholder={t.form.optionalDetails.durationPlaceholder}
              dir={dir}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700">
              {t.form.optionalDetails.specifications}
            </label>
            <textarea
              value={values.specifications}
              onChange={(e) => onChange("specifications", e.target.value)}
              placeholder={t.form.optionalDetails.specificationsPlaceholder}
              dir={dir}
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
