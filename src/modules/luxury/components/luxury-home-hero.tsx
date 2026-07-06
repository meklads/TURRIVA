import Link from "next/link";
import Image from "next/image";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";
import { LayoutGrid } from "lucide-react";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";

type Props = {
  locale: Locale;
};

export async function LuxuryHomeHero({ locale }: Props) {
  const t = getLuxuryMessages(locale);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <section className="lux-hero">
      <div className="lux-hero-watermark" aria-hidden />
      <div className="lux-hero-grid">
        <div className="lux-hero-left">
          <div className="lux-hero-header-inner">
            <div className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.75rem] lg:h-20">
              <div className="shrink-0 lg:min-w-[210px]">
                <LuxuryBrandLogo href="/" priority />
              </div>
              <LuxuryDesktopNav links={links} />
              <div className="flex shrink-0 items-center justify-end lg:min-w-[160px]">
                <Link href="/workspace" className="lux-btn-workspace">
                  <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
                  {t.nav.workspace}
                </Link>
              </div>
            </div>
            <LuxuryMobileNav links={links} />
          </div>

          <div className="lux-hero-content">
            <div className="max-w-[34rem] lux-reveal">
              <h1 className="lux-display whitespace-pre-line text-[2.125rem] leading-[1.14] sm:text-[2.75rem] lg:text-[3.125rem] lg:leading-[1.12]">
                {t.hero.title}
              </h1>
              <div className="lux-flourish" aria-hidden>
                <span className="lux-flourish-line" />
                <span className="lux-flourish-gem" />
                <span className="lux-flourish-line" />
              </div>
              <p className="lux-body max-w-[30rem] text-[15px] leading-[1.75] sm:text-base">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
                <Link href="#services" className="lux-btn-primary">
                  {t.hero.ctaPrimary}
                </Link>
                <Link href="/our-work" className="lux-btn-outline-gold">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lux-hero-visual">
          <Image
            src="/brand/luxury/hero-mockup.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="lux-hero-visual-fade" aria-hidden />
        </div>
      </div>
    </section>
  );
}
