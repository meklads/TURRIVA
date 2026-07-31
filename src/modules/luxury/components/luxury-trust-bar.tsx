import { Palette, Factory, HardHat } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const ICONS = {
  design: Palette,
  factory: Factory,
  build: HardHat,
} as const;

export function LuxuryTrustBar({ messages }: { messages: LuxuryMessages }) {
  return (
    <div className="lux-trust-bar" aria-label={messages.hero.servicesLine}>
      <div className="lux-container lux-trust-bar-inner">
        {messages.trustBar.items.map((item) => {
          const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Palette;
          return (
            <div key={item.label} className="lux-trust-bar-item">
              <Icon className="lux-trust-bar-icon" strokeWidth={1.5} aria-hidden />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
