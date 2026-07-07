import { Sparkles } from "lucide-react";
import { DesignStudio } from "./design-studio";
import { DesignWelcomeModal } from "./design-welcome-modal";
import { DESIGN_STYLES } from "@/modules/design/lib/styles";
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
        <div className="design-container">
          <span className="design-hero-badge">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </span>
          <h1 className="design-hero-title">{t.hero.title}</h1>
          <p className="design-hero-subtitle">{t.hero.subtitle}</p>

          <div className="design-hero-ctas">
            <a href="#studio" className="design-btn design-btn-primary">
              {t.hero.ctaInterior}
            </a>
            <a href="#studio" className="design-btn design-btn-outline">
              {t.hero.ctaFacade}
            </a>
            <a href="#studio" className="design-btn design-btn-outline">
              {t.hero.ctaYard}
            </a>
          </div>

          <div className="design-hero-stats">
            <div>
              <strong>{t.hero.statRating}</strong>
            </div>
            <div>
              <strong>{t.hero.statTime}</strong>
            </div>
            <div>
              <strong>{t.hero.statStyles}</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="design-container">
        <DesignStudio messages={t} locale={locale} />
      </div>

      <section id="how-it-works" className="design-section design-section--alt">
        <div className="design-container">
          <p className="design-eyebrow">{t.howItWorks.eyebrow}</p>
          <h2 className="design-section-title">{t.howItWorks.title}</h2>
          <div className="design-steps">
            {t.howItWorks.steps.map((step, i) => (
              <div key={step.title} className="design-step-card">
                <span className="design-step-num">{i + 1}</span>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="styles" className="design-section">
        <div className="design-container">
          <p className="design-eyebrow">{t.differentiation.eyebrow}</p>
          <h2 className="design-section-title">{t.differentiation.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
            {t.differentiation.subtitle}
          </p>

          <div className="design-diff-grid">
            {t.differentiation.items.map((item) => (
              <div key={item.title} className="design-diff-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {DESIGN_STYLES.map((style) => (
              <a
                key={style.id}
                href="#studio"
                className="design-style-card block"
              >
                <img src={style.preview} alt="" />
                <span>{locale === "ar" ? style.nameAr : style.nameEn}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="design-section design-section--alt">
        <div className="design-container text-center">
          <span className="design-hero-badge">{t.consultation.freeBadge}</span>
          <h2 className="design-section-title mt-4">{t.consultation.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">{t.consultation.subtitle}</p>
          <a href="#studio" className="design-btn design-btn-gold mt-6 inline-flex">
            {t.consultation.submit}
          </a>
        </div>
      </section>
    </>
  );
}
