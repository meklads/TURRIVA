"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HeroIconDraft, HeroIconExport, HeroIconWrite } from "@/modules/marketing/components/hero-step-icons";
import type { Locale } from "@/shared/i18n/locale";

type Step = { label: string; instruction: string; hint: string };

type Props = {
  title: string;
  subtitle: string;
  tapIntro: string;
  tapHere: string;
  steps: readonly Step[];
  cta: string;
  completeMessage: string;
  locale: Locale;
};

function StepIcon({ index }: { index: number }) {
  if (index === 0) return <HeroIconWrite />;
  if (index === 1) return <HeroIconDraft />;
  return <HeroIconExport />;
}

function FlowArrow({ locale, lit }: { locale: Locale; lit: boolean }) {
  return (
    <div className="ruwaq-hero-flow-connector hidden shrink-0 sm:flex" aria-hidden>
      <svg
        className={`h-3 w-10 transition-colors duration-500 lg:w-14 ${lit ? "text-ruwaq-gold" : "text-slate-300"} ${locale === "en" ? "rotate-180" : ""}`}
        viewBox="0 0 48 12"
        fill="none"
      >
        <path
          d="M2 6h38M34 2l6 4-6 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** Horizontal 3-step flow — tap to advance; CTA after step 3. */
export function HeroStepsStrip({
  title,
  subtitle,
  tapIntro,
  tapHere,
  steps,
  cta,
  completeMessage,
  locale,
}: Props) {
  const [stage, setStage] = useState(0);
  const arrow = locale === "ar" ? "←" : "→";
  const done = stage >= steps.length;
  const progressPct = (stage / steps.length) * 100;
  const markerIndex = done ? steps.length - 1 : stage;

  const handleStepClick = useCallback(
    (index: number) => {
      if (index !== stage || stage >= steps.length) return;
      setStage((s) => s + 1);
    },
    [stage, steps.length]
  );

  return (
    <div className="ruwaq-hero-flow">
      <p className="text-center font-display text-lg font-bold text-ruwaq-navy sm:text-xl">{title}</p>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-ruwaq-navy-soft">{subtitle}</p>
      <p className="ruwaq-hero-flow-intro mx-auto mt-3 text-center text-xs font-semibold text-ruwaq-gold sm:text-sm">
        {tapIntro}
      </p>

      <div className="relative mt-10 sm:mt-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
          {steps.map((step, i) => {
            const isCurrent = !done && stage === i;
            const isCompleted = stage > i;
            const isLocked = stage < i;

            return (
              <div key={step.label} className="flex w-full max-w-[10rem] flex-col items-center sm:contents">
                <button
                  type="button"
                  disabled={!isCurrent}
                  onClick={() => handleStepClick(i)}
                  className={`ruwaq-hero-flow-step flex w-full flex-col items-center border-0 bg-transparent p-0 text-center outline-none sm:w-[8.5rem] lg:w-[9.5rem] ${isCurrent ? "ruwaq-hero-flow-step-ready cursor-pointer" : isLocked ? "cursor-default opacity-40" : "cursor-default"}`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  <div
                    className={`ruwaq-hero-flow-orbit relative transition-all duration-500 ${isCurrent ? "ruwaq-hero-flow-orbit-active" : ""} ${isCompleted ? "ruwaq-hero-flow-orbit-done" : ""}`}
                  >
                    <StepIcon index={i} />
                    {isCompleted ? (
                      <span className="ruwaq-hero-flow-done" aria-hidden>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8l3.5 3.5L13 5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-3 font-display text-sm font-bold sm:text-base ${isCurrent ? "text-ruwaq-gold" : isCompleted ? "text-ruwaq-navy-soft" : "text-ruwaq-navy"}`}
                  >
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ruwaq-navy-soft">{step.instruction}</p>

                  {isCurrent ? (
                    <span className="ruwaq-hero-flow-tap mt-2">{tapHere}</span>
                  ) : (
                    <p className="mt-2 text-[10px] text-slate-400">{step.hint}</p>
                  )}
                </button>

                {i < steps.length - 1 ? (
                  <>
                    <FlowArrow locale={locale} lit={stage > i} />
                    <span
                      className={`text-lg sm:hidden ${stage > i ? "text-ruwaq-gold" : "text-slate-300"}`}
                      aria-hidden
                    >
                      ↓
                    </span>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="ruwaq-hero-flow-track mx-auto mt-10 max-w-md sm:max-w-xl">
          <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-200/80">
            <div
              className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-ruwaq-gold to-ruwaq-gold-light transition-all duration-700 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="relative grid grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.label} className="flex justify-center">
                <span
                  className={`ruwaq-hero-flow-marker transition-all duration-500 ${markerIndex === i ? "ruwaq-hero-flow-marker-active scale-100 opacity-100" : "scale-75 opacity-0"}`}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`mt-8 flex flex-col items-center justify-center gap-2 overflow-hidden transition-all duration-700 sm:mt-10 ${done ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!done}
      >
        <p className="text-center text-sm font-medium text-ruwaq-navy-soft">{completeMessage}</p>
        <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base">
          {cta} {arrow}
        </Link>
      </div>
    </div>
  );
}
