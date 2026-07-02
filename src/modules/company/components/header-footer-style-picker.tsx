"use client";

import { useMemo } from "react";
import { useT, useLocale } from "@/shared/i18n/context";
import {
  HEADER_FOOTER_STYLE_ORDER,
  HEADER_FOOTER_STYLES,
  getHeaderFooterStyle,
  type HeaderFooterStyleId,
} from "@/modules/proposal/export/header-footer-styles";

interface Props {
  value: string;
  onChange: (id: HeaderFooterStyleId) => void;
  companyName: string;
  logoUrl: string;
}

/**
 * Builds a small self-contained HTML doc reusing the EXACT same CSS class
 * names and skin CSS as the real export template (ruwaq.template.ts) —
 * rendered in an iframe so the live preview can never visually drift from
 * what actually gets exported.
 */
function buildPreviewHtml(
  styleId: string,
  companyName: string,
  logoUrl: string,
  dir: "rtl" | "ltr",
  badgeLabel: string,
  companyLabel: string
): string {
  const style = getHeaderFooterStyle(styleId);
  const safeName = companyName.trim() || companyLabel;
  const logo = logoUrl.trim();

  return `<!DOCTYPE html>
<html dir="${dir}">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; }
  .banner {
    background: #F5F5F7;
    padding: 14px 18px 16px;
    color: #1D1D1F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .banner-main { flex: 1; min-width: 0; }
  .banner-badge { font-size: 8px; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A063; font-weight: 700; margin-bottom: 3px; }
  .banner-title { font-size: 14px; font-weight: 700; color: #0F172A; margin: 0; }
  .header-logo-col { flex-shrink: 0; text-align: center; min-width: 48px; }
  .logo-circle {
    width: 34px; height: 34px; border-radius: 50%; background: #fff;
    border: 1.5px dashed #D1D5DB; display: flex; align-items: center;
    justify-content: center; overflow: hidden; margin: 0 auto 3px;
  }
  .logo-circle img { width: 100%; height: 100%; object-fit: contain; padding: 3px; }
  .header-company-name { font-size: 7px; font-weight: 700; color: #0F172A; margin: 0; max-width: 60px; }
  .doc-footer-client {
    border-top: 1px solid #E5E7EB;
    padding: 8px 18px 10px;
    font-size: 8px;
    color: #6E6E73;
    background: #F3F4F6;
  }
  .doc-footer-client > div:first-child { font-weight: 600; color: #0F172A; }
  ${style.css(dir)}
</style>
</head>
<body class="hf-${style.id}">
  <header class="banner">
    <div class="banner-main">
      <div class="banner-badge">${badgeLabel}</div>
      <h1 class="banner-title">${safeName}</h1>
    </div>
    <div class="header-logo-col">
      <div class="logo-circle">${logo ? `<img src="${logo}" alt="">` : ""}</div>
      <p class="header-company-name">${safeName}</p>
    </div>
  </header>
  <footer class="doc-footer-client">
    <div>${safeName}</div>
  </footer>
</body>
</html>`;
}

export function HeaderFooterStylePicker({ value, onChange, companyName, logoUrl }: Props) {
  const t = useT();
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const previewHtml = useMemo(
    () =>
      buildPreviewHtml(
        value,
        companyName,
        logoUrl,
        dir,
        t.company.headerFooter.previewBadge,
        t.company.headerFooter.previewCompanyFallback
      ),
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
