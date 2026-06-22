import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function TermsPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.site.nav.terms}</p>
      <h1 className="ruwaq-section-title mt-2">{t.pages.terms.title}</h1>
      <p className="mt-2 text-sm text-ruwaq-navy-soft/70">{t.pages.terms.updated}</p>
      <p className="mt-6 text-sm leading-relaxed text-ruwaq-navy-soft">
        {t.pages.terms.intro}
      </p>

      <div className="mt-10 space-y-6">
        {t.pages.terms.sections.map((section) => (
          <section key={section.title} className="border-b border-ruwaq-cream pb-6 last:border-0">
            <h2 className="font-display text-base font-bold text-ruwaq-navy">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-ruwaq-navy-soft">
        {t.pages.terms.contact}{" "}
        <a
          href="mailto:hello@ruwaq.co"
          className="font-semibold text-ruwaq-gold hover:underline"
        >
          hello@ruwaq.co
        </a>
      </p>
    </div>
  );
}
