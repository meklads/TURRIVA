import Link from "next/link";
import type { Locale } from "@/shared/i18n/locale";

type Step = { label: string; hint: string };

type Props = {
  title: string;
  subtitle: string;
  steps: readonly Step[];
  cta: string;
  locale: Locale;
};

function StepIcon({ kind }: { kind: 1 | 2 | 3 }) {
  const cls = "h-7 w-7 sm:h-8 sm:w-8";
  if (kind === 1) {
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="7" y="5" width="18" height="22" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M11 11h10M11 15h10M11 19h6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19 19l4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === 2) {
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 4l2.2 6.8H25l-5.5 4 2.1 6.8L16 17.6l-5.6 4 2.1-6.8-5.5-4h6.8L16 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 26c2-1.5 4.5-1.5 8-1.5s6 .5 8 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M9 6h14a2 2 0 012 2v16l-5-3-5 3-5-3-5 3V8a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M13 12h6M13 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.65"
      />
      <circle cx="22" cy="22" r="5" fill="currentColor" className="text-ruwaq-gold" />
      <path
        d="M20 22l1.5 1.5L24 20"
        stroke="#0F172A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowArrow({ locale }: { locale: Locale }) {
  return (
    <div className="ruwaq-hero-step-arrow hidden shrink-0 sm:flex" aria-hidden>
      <svg
        className={`h-5 w-10 text-ruwaq-gold/75 ${locale === "en" ? "rotate-180" : ""}`}
        viewBox="0 0 40 16"
        fill="none"
      >
        <path
          d="M4 8h30M10 3l-6 5 6 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Hero strip — 3 steps with icons, drives trial. */
export function HeroStepsStrip({ title, subtitle, steps, cta, locale }: Props) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <div className="ruwaq-hero-steps">
      <p className="text-center font-display text-lg font-bold leading-snug text-white sm:text-xl lg:text-[1.35rem]">
        {title}
      </p>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-white/55">{subtitle}</p>

      <div className="mt-8 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-4 sm:contents">
            <div className="ruwaq-hero-step flex flex-1 flex-col items-center text-center sm:flex-initial">
              <div className="ruwaq-hero-step-ring">
                <span className="ruwaq-hero-step-num">{i + 1}</span>
                <div className="ruwaq-hero-step-icon text-ruwaq-gold">
                  <StepIcon kind={(i + 1) as 1 | 2 | 3} />
                </div>
              </div>
              <p className="mt-3 font-display text-sm font-bold text-white">{step.label}</p>
              <p className="mt-0.5 text-xs font-medium text-ruwaq-gold/90">{step.hint}</p>
            </div>
            {i < steps.length - 1 ? (
              <>
                <FlowArrow locale={locale} />
                <span className="text-center text-lg text-ruwaq-gold/50 sm:hidden" aria-hidden>
                  ↓
                </span>
              </>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/proposals/new"
          className="group inline-flex items-center gap-2 rounded-full border border-ruwaq-gold/40 bg-ruwaq-gold/10 px-6 py-2.5 text-sm font-bold text-ruwaq-gold backdrop-blur-sm transition-all hover:border-ruwaq-gold hover:bg-ruwaq-gold hover:text-ruwaq-navy"
        >
          {cta} {arrow}
        </Link>
      </div>
    </div>
  );
}
