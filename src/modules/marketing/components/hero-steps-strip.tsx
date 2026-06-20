"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/shared/i18n/locale";

type Step = { label: string; hint: string };

type Props = {
  title: string;
  subtitle: string;
  steps: readonly Step[];
  cta: string;
  locale: Locale;
};

const GOLD = "#C9A063";
const NAVY = "#0F172A";
const CREAM = "#E6E2DB";

function WriteIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
      <rect x="14" y="10" width="36" height="44" rx="4" fill={CREAM} fillOpacity="0.95" />
      <rect x="14" y="10" width="36" height="44" rx="4" stroke={GOLD} strokeWidth="1.5" />
      <path d="M22 22h24M22 28h24M22 34h16" stroke={NAVY} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M38 38l10 10" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M40 36l8 8-4 4-8-8 4-4z"
        fill={GOLD}
        fillOpacity="0.25"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="18" r="8" fill={GOLD} fillOpacity="0.2" />
      <text x="48" y="22" textAnchor="middle" fill={GOLD} fontSize="11" fontWeight="700">
        3
      </text>
    </svg>
  );
}

function DraftIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
      <path
        d="M18 12h28l6 6v34H18V12z"
        fill={CREAM}
        fillOpacity="0.95"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M46 12v6h6" stroke={GOLD} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 26h16M24 32h20M24 38h12" stroke={NAVY} strokeWidth="1.75" strokeLinecap="round" opacity="0.4" />
      <path
        d="M12 20l4 8-4 8 4 8"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle cx="14" cy="28" r="2" fill={GOLD} />
      <circle cx="14" cy="36" r="2" fill={GOLD} />
      <path
        d="M44 42l6-6 4 4-6 6-4-4z"
        fill={GOLD}
        fillOpacity="0.35"
        stroke={GOLD}
        strokeWidth="1.25"
      />
    </svg>
  );
}

function ExportIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden>
      <path
        d="M16 14h32v36H16V14z"
        fill={CREAM}
        fillOpacity="0.95"
        stroke={GOLD}
        strokeWidth="1.5"
        rx="2"
      />
      <path d="M22 24h20M22 30h14M22 36h18" stroke={NAVY} strokeWidth="1.75" strokeLinecap="round" opacity="0.35" />
      <circle cx="46" cy="44" r="11" fill={GOLD} />
      <path
        d="M41 44l3.5 3.5L51 39"
        stroke={NAVY}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8v6M24 11h8"
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function FlowConnector({ locale }: { locale: Locale }) {
  return (
    <div className="ruwaq-hero-flow-connector hidden sm:flex" aria-hidden>
      <svg
        className={`h-3 w-12 text-ruwaq-gold/50 lg:w-16 ${locale === "en" ? "rotate-180" : ""}`}
        viewBox="0 0 48 12"
        fill="none"
      >
        <path
          d="M2 6h38M34 2l6 4-6 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

/** Frameless 3-step flow — Agoda-inspired, Ruwaq branded. */
export function HeroStepsStrip({ title, subtitle, steps, cta, locale }: Props) {
  const [active, setActive] = useState(0);
  const arrow = locale === "ar" ? "←" : "→";
  const icons = [
    <WriteIllustration key="w" />,
    <DraftIllustration key="d" />,
    <ExportIllustration key="e" />,
  ];

  return (
    <div className="ruwaq-hero-flow">
      <p className="text-center font-display text-lg font-bold leading-snug tracking-tight text-white sm:text-xl lg:text-[1.4rem]">
        {title}
      </p>
      <p className="mx-auto mt-2.5 max-w-lg text-center text-sm leading-relaxed text-white/50">
        {subtitle}
      </p>

      <div className="relative mt-10 sm:mt-12">
        {/* Soft ambient line — not a box */}
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-ruwaq-gold/25 to-transparent sm:block"
          aria-hidden
        />

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-0">
          {steps.map((step, i) => {
            const isActive = active === i;

            return (
              <div key={step.label} className="flex w-full flex-col items-center sm:contents">
                <div
                  role="group"
                  aria-label={step.label}
                  className="ruwaq-hero-flow-step group flex flex-col items-center p-0 text-center sm:w-[7.5rem] lg:w-[9rem]"
                  onMouseEnter={() => setActive(i)}
                >
                  <div
                    className={`ruwaq-hero-flow-orbit transition-all duration-300 ${isActive ? "ruwaq-hero-flow-orbit-active" : ""}`}
                  >
                    {icons[i]}
                  </div>
                  <p
                    className={`mt-4 font-display text-sm font-bold transition-colors duration-300 sm:text-base ${isActive ? "text-ruwaq-gold" : "text-white/90"}`}
                  >
                    {step.label}
                  </p>
                  <p className="mt-0.5 text-xs text-white/45">{step.hint}</p>
                </div>

                {i < steps.length - 1 ? (
                  <>
                    <FlowConnector locale={locale} />
                    <span className="text-ruwaq-gold/40 sm:hidden" aria-hidden>
                      ↓
                    </span>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Progress track — open, no frame */}
        <div className="ruwaq-hero-flow-track mx-auto mt-10 max-w-md sm:mt-12 sm:max-w-xl">
          <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-ruwaq-gold to-ruwaq-gold-light transition-all duration-500 ease-out"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="relative mt-0 grid grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.label} className="flex justify-center">
                <span
                  className={`ruwaq-hero-flow-marker transition-all duration-300 ${active === i ? "ruwaq-hero-flow-marker-active" : "opacity-0"}`}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 flex justify-center sm:mt-10">
        <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base shadow-lg shadow-ruwaq-gold/20">
          {cta} {arrow}
        </Link>
      </div>
    </div>
  );
}
