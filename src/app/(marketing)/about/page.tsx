import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function AboutPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.site.nav.about}</p>
      <h1 className="ruwaq-section-title mt-2">{t.pages.about.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-ruwaq-navy-soft">
        {t.pages.about.intro}
      </p>

      <div className="mt-10 space-y-6">
        {t.pages.about.sections.map((section) => (
          <section key={section.title} className="ruwaq-card">
            <h2 className="font-display text-lg font-bold text-ruwaq-navy">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {t.pages.about.values.map((value) => (
          <div key={value.title} className="ruwaq-card-accent">
            <h3 className="font-display font-bold text-ruwaq-navy">{value.title}</h3>
            <p className="mt-1 text-sm text-ruwaq-navy-soft">{value.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/proposals/new" className="btn-ruwaq-primary">
          {t.site.nav.startProposal}
        </Link>
      </div>
    </div>
  );
}
