/** Light-theme mini illustrations for hero steps */

const G = "#C9A063";
const GL = "#E8D5B5";
const N = "#0F172A";
const SILVER = "#EEF1F5";
const WHITE = "#FFFFFF";

type Props = { className?: string };

export function HeroIconWrite({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <rect width="80" height="80" rx="18" fill={SILVER} />
      <rect x="20" y="18" width="40" height="48" rx="5" fill={WHITE} stroke="#D1D9E6" strokeWidth="1.5" />
      <rect x="26" y="12" width="28" height="8" rx="2" fill={G} fillOpacity="0.35" />
      <rect x="26" y="30" width="28" height="6" rx="2" fill={SILVER} stroke="#D1D9E6" strokeWidth="1" />
      <rect x="26" y="40" width="28" height="6" rx="2" fill={SILVER} stroke="#D1D9E6" strokeWidth="1" />
      <rect x="26" y="50" width="18" height="6" rx="2" fill={GL} fillOpacity="0.4" stroke={G} strokeWidth="1.25" />
      <path d="M52 54l10 10" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M54 52l8 8-4 4-8-8 4-4z" fill={G} fillOpacity="0.25" stroke={G} strokeWidth="1.25" />
      <circle cx="62" cy="26" r="9" fill={G} />
      <text x="62" y="30" textAnchor="middle" fill={WHITE} fontSize="12" fontWeight="800">
        3
      </text>
    </svg>
  );
}

export function HeroIconDraft({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <rect width="80" height="80" rx="18" fill={SILVER} />
      <path d="M24 20h32l8 8v36H24V20z" fill={WHITE} stroke="#D1D9E6" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M56 20v8h8" stroke="#D1D9E6" strokeWidth="1.5" />
      <path d="M32 36h22M32 44h26M32 52h14" stroke={N} strokeWidth="1.75" strokeLinecap="round" opacity="0.18" />
      <path
        d="M14 28l5 3-5 3 2.5 5-5-2.5-5 2.5 2.5-5-5-3 5-3-2.5-5 5 2.5 5-2.5-2.5 5z"
        fill={G}
        fillOpacity="0.85"
      />
      <path d="M54 58l8-8 5 5-8 8-5-5z" fill={GL} fillOpacity="0.5" stroke={G} strokeWidth="1.25" />
    </svg>
  );
}

export function HeroIconExport({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <rect width="80" height="80" rx="18" fill={SILVER} />
      <rect x="22" y="22" width="36" height="46" rx="4" fill={WHITE} stroke="#D1D9E6" strokeWidth="1.5" />
      <path d="M30 34h20M30 42h14M30 50h18" stroke={N} strokeWidth="1.75" strokeLinecap="round" opacity="0.16" />
      <path d="M38 14v8M34 18h8" stroke={G} strokeWidth="2" strokeLinecap="round" />
      <circle cx="58" cy="58" r="12" fill={G} />
      <path d="M53 58l3.5 3.5L63 53" stroke={WHITE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
