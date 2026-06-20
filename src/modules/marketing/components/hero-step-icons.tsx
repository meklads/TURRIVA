import type { ReactNode } from "react";

/** Soft flat icons — Agoda-style simplicity for hero steps */

type Props = { className?: string };

const palettes = [
  { bg: "#EEF4FF", accent: "#3B6FD9", stroke: "#94B4E8" },
  { bg: "#FDF6EC", accent: "#C9A063", stroke: "#E8D5B5" },
  { bg: "#EDFAF3", accent: "#2D9B6A", stroke: "#9FD4B8" },
] as const;

function palette(i: number) {
  return palettes[i] ?? palettes[0];
}

export function HeroIconWrite({ className = "h-12 w-12" }: Props) {
  const c = palette(0);
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <rect x="16" y="12" width="32" height="40" rx="4" fill="white" stroke={c.stroke} strokeWidth="1.5" />
      <path d="M22 22h20M22 28h20M22 34h12" stroke={c.accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M38 38l8 8" stroke={c.accent} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="48" cy="18" r="8" fill={c.accent} />
      <text x="48" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="800">
        3
      </text>
    </svg>
  );
}

export function HeroIconDraft({ className = "h-12 w-12" }: Props) {
  const c = palette(1);
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path d="M18 14h28l6 6v32H18V14z" fill="white" stroke={c.stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M46 14v6h6" stroke={c.stroke} strokeWidth="1.5" />
      <path d="M24 28h18M24 34h22M24 40h10" stroke={c.accent} strokeWidth="1.75" strokeLinecap="round" opacity="0.45" />
      <path
        d="M12 24l3 5-3 5 2 4-4-2-4 2 2-4-3-5 3-5-2-4 4 2 4-2-2 4z"
        fill={c.accent}
        opacity="0.9"
      />
    </svg>
  );
}

export function HeroIconExport({ className = "h-12 w-12" }: Props) {
  const c = palette(2);
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <rect x="18" y="16" width="28" height="36" rx="3" fill="white" stroke={c.stroke} strokeWidth="1.5" />
      <path d="M26 28h12M26 34h8M26 40h14" stroke={c.accent} strokeWidth="1.75" strokeLinecap="round" opacity="0.4" />
      <circle cx="46" cy="46" r="10" fill={c.accent} />
      <path d="M41 46l3.5 3.5L51 41" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const HERO_STEP_PALETTES = palettes;

export function HeroStepIconWrap({ index, children }: { index: number; children: ReactNode }) {
  const c = palette(index);
  return (
    <div
      className="ruwaq-hero-step-circle"
      style={{ backgroundColor: c.bg }}
    >
      {children}
    </div>
  );
}
