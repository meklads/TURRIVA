"use client";

import { useMemo } from "react";
import { useT, useLocale } from "@/shared/i18n/context";
import {
  HEADER_FOOTER_STYLE_ORDER,
  HEADER_FOOTER_STYLES,
  buildHeaderFooterPreviewHtml,
  type HeaderFooterStyleId,
} from "@/modules/proposal/export/header-footer-styles";

interface Props {
  value: string;
  onChange: (id: HeaderFooterStyleId) => void;
  companyName: string;
  logoUrl: string;
}

export function HeaderFooterStylePicker({ value, onChange, companyName, logoUrl }: Props) {
  const t = useT();
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const previewHtml = useMemo(
    () =>
      buildHeaderFooterPreviewHtml({
        styleId: value,
        companyName,
        logoUrl,
        dir,
        badgeLabel: t.company.headerFooter.previewBadge,
        companyFallback: t.company.headerFooter.previewCompanyFallback,
      }),
    [value, companyName, logoUrl, dir, t]
  );

  return (
    <div>
      <label className="block text-sm font-medium text-ruwaq-ink">
        {t.company.headerFooter.title}
      </label>
      <p className="mt-1 text-xs text-ruwaq-ink-muted">{t.company.headerFooter.hint}</p>

      {/* Live preview */}
      <div className="mt-3 overflow-hidden rounded-xl border border-ruwaq-stone/70 shadow-sm">
        <iframe
          key={value}
          title="header-footer-preview"
          srcDoc={previewHtml}
          className="h-[150px] w-full border-0"
          scrolling="no"
        />
      </div>

      {/* Swatch grid */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
        {HEADER_FOOTER_STYLE_ORDER.map((id) => {
          const style = HEADER_FOOTER_STYLES[id];
          const selected = value === id;
          const name = locale === "ar" ? style.nameAr : style.nameEn;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`group flex flex-col items-center gap-1.5 rounded-lg border p-2 text-center transition-colors ${
                selected
                  ? "border-ruwaq-gold ring-2 ring-ruwaq-gold/30"
                  : "border-ruwaq-stone/60 hover:border-ruwaq-stone"
              }`}
            >
              <span
                className="block h-8 w-full rounded-md"
                style={{
                  background: `linear-gradient(135deg, ${style.swatch[0]} 55%, ${style.swatch[1]} 55%)`,
                }}
              />
              <span className="text-[11px] font-medium leading-tight text-ruwaq-ink">
                {name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
