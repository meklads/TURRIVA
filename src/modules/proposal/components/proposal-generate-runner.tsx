"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { generateWithAI } from "@/modules/proposal/server/proposal.actions";
import { useT } from "@/shared/i18n/context";

type Props = {
  proposalId: string;
  editKey?: string;
};

export function ProposalGenerateRunner({ proposalId, editKey }: Props) {
  const t = useT();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setProgress(30);
      const result = await generateWithAI(proposalId, editKey);
      if (cancelled) return;

      if (!result.success) {
        setError(result.error ?? t.form.errors.generic);
        setProgress(0);
        return;
      }

      setProgress(100);
      router.replace(`/proposals/${proposalId}`);
      router.refresh();
    })();

    return () => {
      cancelled = true;
    };
  }, [proposalId, editKey, router, t.form.errors.generic]);

  if (error) {
    return (
      <div className="app-content-area max-w-xl">
        <div className="ruwaq-form-card">
          <p className="text-sm text-red-600">{error}</p>
          <button
            type="button"
            onClick={() => {
              setError(null);
              setProgress(15);
              void generateWithAI(proposalId, editKey).then((result) => {
                if (result.success) {
                  router.replace(`/proposals/${proposalId}`);
                  router.refresh();
                } else {
                  setError(result.error ?? t.form.errors.generic);
                }
              });
            }}
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
    </div>
  );
}
