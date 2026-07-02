import {
  HEADER_FOOTER_STYLE_ORDER,
  HEADER_FOOTER_STYLES,
  buildHeaderFooterPreviewHtml,
} from "@/modules/proposal/export/header-footer-styles";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
  title: string;
  subtitle: string;
  badgeLabel: string;
  companyFallback: string;
};

/** Public, read-only showcase — same source of truth as the real picker
 * (Company Settings) and the real PDF export, so what visitors see here is
 * exactly what they'll get. Server-rendered, no client JS needed. */
export function HeaderFooterShowcase({ locale, title, subtitle, badgeLabel, companyFallback }: Props) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="mt-16">
      <h2 className="text-center font-display text-xl font-bold text-ruwaq-navy sm:text-2xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ruwaq-ink-soft">
        {subtitle}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HEADER_FOOTER_STYLE_ORDER.map((id) => {
          const style = HEADER_FOOTER_STYLES[id];
          const name = locale === "ar" ? style.nameAr : style.nameEn;
          const html = buildHeaderFooterPreviewHtml({
            styleId: id,
            companyName: "",
            dir,
            badgeLabel,
            companyFallback,
          });
          return (
            <div
              key={id}
              className="overflow-hidden rounded-xl border border-ruwaq-stone/60 shadow-sm"
            >
              <iframe
                title={name}
                srcDoc={html}
                className="h-[130px] w-full border-0"
                scrolling="no"
              />
              <div className="border-t border-ruwaq-stone/50 px-4 py-2.5 text-center text-xs font-semibold text-ruwaq-ink">
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
