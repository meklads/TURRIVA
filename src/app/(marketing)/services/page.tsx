import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const items = [
    t.services.items.identity,
    t.services.items.design,
    t.services.items.marketing,
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.site.nav.services}</p>
      <h1 className="ruwaq-section-title mt-2">{t.services.title}</h1>
      <p className="mt-3 text-base text-ruwaq-navy-soft">{t.services.subtitle}</p>

      <div className="mt-6 ruwaq-card-accent bg-ruwaq-cream-bg/40 text-sm text-ruwaq-navy">
        {t.services.supportNote}
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="ruwaq-card">
            <h2 className="font-display font-bold text-ruwaq-navy">{item.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ruwaq-navy-soft">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/proposals/new" className="btn-ruwaq-primary">
          {t.services.cta}
        </Link>
        <a href="mailto:hello@turriva.co" className="btn-ruwaq-secondary">
          {t.services.ctaSecondary}
        </a>
      </div>
    </div>
  );
}
