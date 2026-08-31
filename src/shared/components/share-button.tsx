"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

type Props = {
  url: string;
  title: string;
  shareLabel: string;
  copyLabel: string;
  copiedLabel: string;
};

export function ShareButton({ url, title, shareLabel, copyLabel, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const absolute = url.startsWith("http") ? url : `${window.location.origin}${url}`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url: absolute });
        return;
      } catch {
        // user cancelled or unsupported
      }
    }

    try {
      await navigator.clipboard.writeText(absolute);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(copyLabel, absolute);
    }
  }

  return (
    <button type="button" onClick={() => void handleShare()} className="lux-btn-outline-gold inline-flex items-center gap-2">
      <Share2 className="h-4 w-4" aria-hidden />
      {copied ? copiedLabel : shareLabel}
    </button>
  );
}
