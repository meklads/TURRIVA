"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
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

const GOLD = "#C9A063";
const GOLD_LIGHT = "#E8D5B5";
const NAVY = "#0F172A";
const CREAM = "#F7F5F2";

function WriteIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20" aria-hidden>
      <ellipse cx="40" cy="68" rx="22" ry="4" fill="#000" fillOpacity="0.12" />
      <rect x="22" y="16" width="36" height="46" rx="5" fill={CREAM} />
      <rect x="22" y="16" width="36" height="46" rx="5" stroke={GOLD} strokeWidth="2" />
      <rect x="28" y="10" width="24" height="8" rx="2" fill={GOLD} fillOpacity="0.35" />
      <path d="M30 30h20M30 38h20M30 46h12" stroke={NAVY} strokeWidth="2.2" strokeLinecap="round" opacity="0.25" />
      <path d="M44 48l12 12" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M46 46l10 10-5 5-10-10 5-5z"
        fill={GOLD}
        fillOpacity="0.3"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="58" cy="24" r="10" fill={GOLD} />
      <text x="58" y="28.5" textAnchor="middle" fill={NAVY} fontSize="13" fontWeight="800">
        3
      </text>
    </svg>
  );
}

function DraftIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20" aria-hidden>
      <ellipse cx="40" cy="68" rx="22" ry="4" fill="#000" fillOpacity="0.12" />
      <path d="M26 18h30l8 8v38H26V18z" fill={CREAM} stroke={GOLD} strokeWidth="2" strokeLinejoin="round" />
      <path d="M56 18v8h8" stroke={GOLD} strokeWidth="2" strokeLinejoin="round" />
      <path d="M34 34h22M34 42h26M34 50h16" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      <circle cx="18" cy="36" r="3" fill={GOLD} />
      <circle cx="18" cy="48" r="3" fill={GOLD_LIGHT} />
      <path
        d="M10 28c0 0 4 6 8 6s8-6 8-6M10 44c0 0 4 6 8 6s8-6 8-6"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path d="M52 54l8-8 6 6-8 8-6-6z" fill={GOLD} fillOpacity="0.45" stroke={GOLD} strokeWidth="1.5" />
      <path d="M58 48l2 2M54 52l2 2" stroke={GOLD_LIGHT} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ExportIllustration() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20" aria-hidden>
      <ellipse cx="40" cy="68" rx="22" ry="4" fill="#000" fillOpacity="0.12" />
      <rect x="24" y="20" width="32" height="42" rx="3" fill={CREAM} stroke={GOLD} strokeWidth="2" />
      <path d="M32 32h16M32 40h12M32 48h18" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      <path d="M36 12v8M32 16h8" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="56" cy="52" r="13" fill={GOLD} />
      <circle cx="56" cy="52" r="13" stroke={GOLD_LIGHT} strokeWidth="2" opacity="0.5" />
      <path
        d="M50 52l4 4 8-8"
        stroke={NAVY}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEP_ICONS = [
  <WriteIllustration key="w" />,
  <DraftIllustration key="d" />,
  <ExportIllustration key="e" />,
];

function FlowConnector({ locale, lit }: { locale: Locale; lit: boolean }) {
  return (
    <div className="ruwaq-hero-flow-connector hidden sm:flex" aria-hidden>
      <svg
        className={`h-3 w-12 transition-colors duration-500 lg:w-16 ${lit ? "text-ruwaq-gold" : "text-white/20"} ${locale === "en" ? "rotate-180" : ""}`}
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

function CheckBadge() {
  return (
    <span className="ruwaq-hero-flow-done" aria-hidden>
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8l3.5 3.5L13 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Interactive 3-step discovery — tap each step to advance; CTA appears at the end. */
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
  /** 0 = awaiting step 1 tap, 3 = all done */
  const [stage, setStage] = useState(0);
  const arrow = locale === "ar" ? "←" : "→";
  const done = stage >= steps.length;

  const handleStepClick = useCallback(
    (index: number) => {
      if (index !== stage || stage >= steps.length) return;
      setStage((s) => s + 1);
    },
    [stage, steps.length]
  );

  const progressPct = (stage / steps.length) * 100;
  const markerIndex = done ? steps.length - 1 : stage;

  return (
    <div className="ruwaq-hero-flow">
      <p className="text-center font-display text-lg font-bold leading-snug tracking-tight text-white sm:text-xl lg:text-[1.4rem]">
        {title}
      </p>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-white/50">{subtitle}</p>
      <p className="ruwaq-hero-flow-intro mx-auto mt-3 text-center text-xs font-semibold text-ruwaq-gold/90 sm:text-sm">
        {tapIntro}
      </p>

      <div className="relative mt-10 sm:mt-12">
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-[3rem] hidden h-px sm:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,160,99,0.2) 20%, rgba(201,160,99,0.2) 80%, transparent)",
          }}
          aria-hidden
        />

        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
          {steps.map((step, i) => {
            const isCurrent = !done && stage === i;
            const isCompleted = stage > i;
            const isLocked = stage < i;

            return (
              <div key={step.label} className="flex w-full max-w-[11rem] flex-col items-center sm:contents">
                <button
                  type="button"
                  disabled={!isCurrent}
                  onClick={() => handleStepClick(i)}
                  className={`ruwaq-hero-flow-step flex w-full flex-col items-center border-0 bg-transparent p-0 text-center sm:w-[8.5rem] lg:w-[10rem] ${isCurrent ? "ruwaq-hero-flow-step-ready cursor-pointer" : isLocked ? "cursor-default opacity-45" : "cursor-default"}`}
                  aria-current={isCurrent ? "step" : undefined}
                  aria-label={`${step.label}: ${step.instruction}`}
                >
                  <div
                    className={`ruwaq-hero-flow-orbit relative transition-all duration-500 ${isCurrent ? "ruwaq-hero-flow-orbit-active ruwaq-hero-flow-orbit-pulse" : ""} ${isCompleted ? "ruwaq-hero-flow-orbit-done" : ""}`}
                  >
                    {STEP_ICONS[i]}
                    {isCompleted ? <CheckBadge /> : null}
                  </div>

                  <p
                    className={`mt-4 font-display text-sm font-bold sm:text-base ${isCurrent ? "text-ruwaq-gold" : isCompleted ? "text-white/70" : "text-white/85"}`}
                  >
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{step.instruction}</p>

                  {isCurrent ? (
                    <span className="ruwaq-hero-flow-tap mt-2">{tapHere}</span>
                  ) : (
                    <p className="mt-2 text-[10px] text-white/30">{step.hint}</p>
                  )}
                </button>

                {i < steps.length - 1 ? (
                  <>
                    <FlowConnector locale={locale} lit={stage > i} />
                    <span
                      className={`text-lg sm:hidden ${stage > i ? "text-ruwaq-gold" : "text-white/25"}`}
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

        <div className="ruwaq-hero-flow-track mx-auto mt-10 max-w-md sm:mt-12 sm:max-w-2xl">
          <div className="relative h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-ruwaq-gold to-ruwaq-gold-light transition-all duration-700 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="relative mt-0 grid grid-cols-3">
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
        className={`mt-9 flex flex-col items-center justify-center gap-2 overflow-hidden transition-all duration-700 sm:mt-10 ${done ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!done}
      >
        <p className="text-center text-sm font-medium text-ruwaq-gold/90">{completeMessage}</p>
        <Link
          href="/proposals/new"
          className="btn-ruwaq-primary px-8 py-3 text-base shadow-lg shadow-ruwaq-gold/25"
        >
          {cta} {arrow}
        </Link>
      </div>
    </div>
  );
}
