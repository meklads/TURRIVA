"use client";

import { useEffect, useState } from "react";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
};

const STORAGE_KEY = "ruwaq_design_welcome_seen";

export function DesignWelcomeModal({ messages }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  const close = (persist = true) => {
    if (persist) localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    document.getElementById("studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!open) return null;

  return (
    <div className="design-modal-overlay" role="dialog" aria-modal="true" onClick={() => close()}>
      <div className="design-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{messages.welcome.title}</h2>
        <p>{messages.welcome.subtitle}</p>
        <div className="design-modal-credits">{messages.welcome.credits}</div>
        <div className="design-modal-actions">
          <button type="button" className="design-btn design-btn-primary w-full" onClick={() => close()}>
            {messages.welcome.start}
          </button>
          <button type="button" className="design-modal-skip" onClick={() => close()}>
            {messages.welcome.skip}
          </button>
        </div>
      </div>
    </div>
  );
}
