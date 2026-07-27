import Link from "next/link";
import Image from "next/image";
import { getLuxuryMessages, LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type PageKey = "interiorDesign" | "construction" | "ourWork" | "about" | "contact";

export function LuxuryInnerPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const t = getLuxuryMessages(locale);
  const content = t.pages[page];

  return (
    <section className="lux-section">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.brand.tagline}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-5 text-3xl sm:mt-6 sm:text-4xl md:text-5xl">{content.title}</h1>
        <p className="lux-body mx-auto mt-6">{content.intro}</p>
      </div>

      {page === "contact" ? (
        <div className="lux-container mt-10 max-w-6xl sm:mt-12 lux-editorial-split lux-editorial-split--reverse lux-contact-split">
          <div className="lux-editorial-media lux-editorial-media--tall lux-contact-media">
            <Image
              src={LUXURY_IMAGES.contact}
              alt=""
              fill
              className="object-contain object-center sm:object-cover sm:object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={92}
              priority
            />
          </div>
          <div className="lux-editorial-copy lux-editorial-copy--panel text-start">
            <form className="mx-auto w-full max-w-md space-y-4 sm:max-w-none">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                  {t.pages.contact.formName}
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                  {t.pages.contact.formEmail}
                </label>
                <input
                  type="email"
                  dir="ltr"
                  className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                  {t.pages.contact.formMessage}
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
                />
              </div>
              <button type="button" className="lux-btn-primary w-full sm:w-auto">
                {t.pages.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="lux-container max-w-3xl text-center">
          <Link href="/contact" className="lux-btn-primary mt-10 inline-flex">
            {t.cta.button}
          </Link>
        </div>
      )}
    </section>
  );
}
