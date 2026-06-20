"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HeroIconDraft, HeroIconExport, HeroIconWrite } from "@/modules/marketing/components/hero-step-icons";
import type { Locale } from "@/shared/i18n/locale";

type Step = { label: string; instruction: string; hint: string };

function StepIcon({ index }: { index: number }) {
  if (index === 0) return <HeroIconWrite />;
  if (index === 1) return <HeroIconDraft />;
  return <HeroIconExport />;
}

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

/** Vertical card panel — tap each step to advance; CTA reveals at the end. */
export function HeroInteractivePanel({
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

  const handleStepClick = useCallback(
    (index: number) => {
      if (index !== stage || stage >= steps.length) return;
      setStage((s) => s + 1);
    },
    [stage, steps.length]
  );

  return (
    <div className="ruwaq-hero-panel">
      <div className="ruwaq-hero-panel-head">
        <p className="font-display text-base font-bold text-ruwaq-navy sm:text-lg">{title}</p>
        <p className="mt-1 text-xs text-ruwaq-navy-soft/80 sm:text-sm">{subtitle}</p>
        <p className="ruwaq-hero-flow-intro mt-2 text-xs font-semibold text-ruwaq-gold lg:hidden">
          {tapIntro}
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {steps.map((step, i) => {
          const isCurrent = !done && stage === i;
          const isCompleted = stage > i;
          const isLocked = stage < i;

          return (
            <button
              key={step.label}
              type="button"
              disabled={!isCurrent}
              onClick={() => handleStepClick(i)}
              className={`ruwaq-hero-step-card w-full text-start outline-none ${isCurrent ? "ruwaq-hero-step-card-active" : ""} ${isCompleted ? "ruwaq-hero-step-card-done" : ""} ${isLocked ? "ruwaq-hero-step-card-locked" : ""}`}
              aria-current={isCurrent ? "step" : undefined}
            >
              <div className="flex items-center gap-4">
                <div className="ruwaq-hero-step-card-icon shrink-0">
                  <StepIcon index={i} />
                  {isCompleted ? (
                    <span className="ruwaq-hero-step-card-check" aria-hidden>
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
                  ) : (
                    <span className="ruwaq-hero-step-card-num">{i + 1}</span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-bold text-ruwaq-navy">{step.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ruwaq-navy-soft">
                    {step.instruction}
                  </p>
                  {isCurrent ? (
                    <span className="ruwaq-hero-flow-tap mt-2 inline-flex">{tapHere}</span>
                  ) : (
                    <p className="mt-1 text-[10px] text-ruwaq-navy-soft/50">{step.hint}</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="ruwaq-hero-panel-track mt-6">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-ruwaq-navy-soft/60">
          <span>{locale === "ar" ? "التقدم" : "Progress"}</span>
          <span>{Math.round(progressPct)}%</span>
        </div>
        <div className="relative mt-2 h-2 overflow-hidden rounded-full bg-ruwaq-cream">
          <div
            className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-ruwaq-gold to-ruwaq-gold-light transition-all duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-700 ${done ? "mt-5 max-h-36 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!done}
      >
        <div className="rounded-xl bg-ruwaq-navy px-4 py-4 text-center">
          <p className="text-sm font-medium text-ruwaq-gold/95">{completeMessage}</p>
          <Link href="/proposals/new" className="btn-ruwaq-primary mt-3 inline-flex w-full justify-center py-3">
            {cta} {arrow}
          </Link>
        </div>
      </div>
    </div>
  );
}
