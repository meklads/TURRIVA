import { Star } from "lucide-react";
import { DesignStudio } from "./design-studio";
import { DesignWelcomeModal } from "./design-welcome-modal";
import { DesignQualitySection } from "./design-quality-section";
import { DesignRoomShowcase } from "./design-room-showcase";
import { DesignExecutionBanner } from "./design-execution-banner";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
};

export function DesignHomePage({ locale }: Props) {
  const t = getDesignMessages(locale);

  return (
    <>
      <DesignWelcomeModal messages={t} />

      <section className="design-hero">
        <div className="design-container design-container--wide">
          <p className="design-hero-kicker">{t.hero.badge}</p>
          <h1 className="design-hero-title">{t.hero.title}</h1>
          <p className="design-hero-subtitle">{t.hero.subtitle}</p>

          <div className="design-hero-ctas">
            <a href="#studio" className="design-btn design-btn-primary design-btn-lg">
              {t.hero.ctaInterior}
            </a>
            <a href="#studio" className="design-btn design-btn-soft design-btn-lg">
              {t.hero.ctaFacade}
            </a>
            <a href="#studio" className="design-btn design-btn-soft design-btn-lg">
              {t.hero.ctaYard}
            </a>
          </div>

          <div className="design-hero-stats">
            <div className="design-stat">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <div>
                <strong>{t.hero.statRating}</strong>
                <span>{t.hero.statRatingSub}</span>
              </div>
            </div>
            <div className="design-stat">
              <strong>{t.hero.statTime}</strong>
              <span>{t.hero.statTimeSub}</span>
            </div>
            <div className="design-stat">
              <strong>{t.hero.statStyles}</strong>
              <span>{t.hero.statStylesSub}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="design-container design-container--wide">
        <DesignStudio messages={t} locale={locale} />
      </div>

      <DesignQualitySection messages={t} locale={locale} />

      <section id="how-it-works" className="design-section design-section--white">
        <div className="design-container">
          <p className="design-eyebrow">{t.howItWorks.eyebrow}</p>
          <h2 className="design-section-title">{t.howItWorks.title}</h2>
          <div className="design-steps">
            {t.howItWorks.steps.map((step, i) => (
              <div key={step.title} className="design-step-card">
                <span className="design-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DesignRoomShowcase messages={t} locale={locale} />

      <DesignExecutionBanner messages={t} />

      <section className="design-cta-bottom">
        <div className="design-container design-cta-bottom-inner">
          <p className="design-cta-bottom-badge">{t.ctaBottom.badge}</p>
          <h2>{t.ctaBottom.title}</h2>
          <p>{t.ctaBottom.subtitle}</p>
          <a href="#studio" className="design-btn design-btn-primary design-btn-lg design-btn-arrow">
            {t.ctaBottom.cta}
          </a>
          <p className="design-cta-bottom-note">{t.ctaBottom.note}</p>
        </div>
      </section>
    </>
  );
}
