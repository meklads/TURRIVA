/** Rich mini-illustrations for hero interactive steps */

import type { ComponentType } from "react";

const G = "#C9A063";
const GL = "#E8D5B5";
const N = "#0F172A";
const C = "#FAF8F5";

type Props = { className?: string };

export function HeroIconWrite({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden>
      <rect width="96" height="96" rx="20" fill={`url(#write-bg)`} />
      <defs>
        <linearGradient id="write-bg" x1="0" y1="0" x2="96" y2="96">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect x="24" y="22" width="48" height="58" rx="6" fill={C} />
      <rect x="24" y="22" width="48" height="58" rx="6" stroke={G} strokeWidth="2" />
      <rect x="30" y="14" width="36" height="10" rx="3" fill={G} fillOpacity="0.4" />
      <rect x="32" y="34" width="32" height="7" rx="2" fill={G} fillOpacity="0.15" stroke={G} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="32" y="46" width="32" height="7" rx="2" fill={G} fillOpacity="0.15" stroke={G} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="32" y="58" width="20" height="7" rx="2" fill={G} fillOpacity="0.25" stroke={G} strokeWidth="1.5" />
      <path d="M58 62l14 14" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 60l12 12-6 6-12-12 6-6z" fill={G} fillOpacity="0.35" stroke={G} strokeWidth="1.5" />
      <circle cx="72" cy="28" r="11" fill={G} />
      <text x="72" y="33" textAnchor="middle" fill={N} fontSize="14" fontWeight="800">
        3
      </text>
    </svg>
  );
}

export function HeroIconDraft({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden>
      <rect width="96" height="96" rx="20" fill={`url(#draft-bg)`} />
      <defs>
        <linearGradient id="draft-bg" x1="96" y1="0" x2="0" y2="96">
          <stop stopColor="#1a2744" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <path d="M30 20h36l10 10v46H30V20z" fill={C} stroke={G} strokeWidth="2" strokeLinejoin="round" />
      <path d="M66 20v10h10" stroke={G} strokeWidth="2" />
      <path d="M38 40h28M38 50h32M38 60h18" stroke={N} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
      <path
        d="M14 32l6 4-6 4 3 6-6-3-6 3 3-6-6-4 6-4-3-6 6 3 6-3-3 6z"
        fill={G}
        fillOpacity="0.9"
      />
      <circle cx="14" cy="32" r="2" fill={GL} />
      <path d="M68 66l10-10 8 8-10 10-8-8z" fill={G} fillOpacity="0.5" stroke={G} strokeWidth="1.5" />
    </svg>
  );
}

export function HeroIconExport({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden>
      <rect width="96" height="96" rx="20" fill={`url(#export-bg)`} />
      <defs>
        <linearGradient id="export-bg" x1="48" y1="0" x2="48" y2="96">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect x="28" y="24" width="40" height="52" rx="4" fill={C} stroke={G} strokeWidth="2" />
      <path d="M36 38h24M36 48h16M36 58h20" stroke={N} strokeWidth="2" strokeLinecap="round" opacity="0.18" />
      <path d="M44 16v10M40 21h8" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="68" cy="68" r="14" fill={G} />
      <circle cx="68" cy="68" r="14" stroke={GL} strokeWidth="2" opacity="0.6" />
      <path d="M62 68l4 4 8-9" stroke={N} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="34" y="28" width="12" height="4" rx="1" fill={G} fillOpacity="0.3" />
    </svg>
  );
}

export const HERO_STEP_ICONS: ComponentType<Props>[] = [
  HeroIconWrite,
  HeroIconDraft,
  HeroIconExport,
];
