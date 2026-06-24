"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/shared/i18n/context";

type Props = {
  proposalId: string;
  editKey?: string;
};

function mapGenerateError(message: string, fallback: string): string {
  if (
    message.includes("fetch failed") ||
    message.includes("Failed to fetch") ||
    message.includes("NetworkError") ||
    message.includes("Load failed")
  ) {
    return "انقطع الاتصال أثناء التوليد. تحقق من الإنترنت ثم أعد المحاولة.";
  }
  if (
    message.includes("Clause pack not found") ||
    message.includes("CLAUSE_PACK_NOT_FOUND")
  ) {
    return "مكتبة البنود لم تُحمَّل بعد. انتظر دقيقة ثم أعد المحاولة، أو أعد نشر التطبيق.";
  }
  return message || fallback;
}

export function ProposalGenerateRunner({ proposalId, editKey }: Props) {
  const t = useT();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(15);
  const started = useRef(false);

  const runGenerate = useCallback(async () => {
    setError(null);
    setProgress(25);

    const timer = window.setInterval(() => {
      setProgress((p) => (p < 90 ? p + 4 : p));
    }, 2500);

    try {
      const res = await fetch(`/api/proposals/${proposalId}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editKey ? { editKey } : {}),
        credentials: "same-origin",
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      setProgress(100);
      const stripKey = editKey
        ? window.location.pathname
        : `/proposals/${proposalId}`;
      router.replace(stripKey);
      router.refresh();
    } catch (err) {
      const raw = err instanceof Error ? err.message : t.form.errors.generic;
      setError(mapGenerateError(raw, t.form.errors.generic));
      setProgress(0);
    } finally {
      window.clearInterval(timer);
    }
  }, [proposalId, editKey, router, t.form.errors.generic]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void runGenerate();
  }, [runGenerate]);

  if (error) {
    return (
      <div className="app-content-area max-w-xl">
        <div className="ruwaq-form-card">
          <p className="text-sm leading-relaxed text-red-600">{error}</p>
          <button
            type="button"
            onClick={() => void runGenerate()}
            className="btn-ruwaq-primary mt-4"
          >
            {t.errors.retry}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-content-area flex flex-col items-center justify-center py-16">
      <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-ruwaq-cream">
        <div
          className="h-full rounded-full bg-ruwaq-gold transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-ruwaq-navy-soft">
        {progress < 50 ? t.form.generatingAnalyze : t.form.generatingWrite}
      </p>
      <p className="mt-2 text-xs text-ruwaq-navy-soft/70">
        {t.form.generatingWaitHint}
      </p>
    </div>
  );
}
