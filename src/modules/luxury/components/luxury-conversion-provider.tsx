"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/shared/i18n/locale";
import type { DemoProjectType, DemoTimeline } from "../lib/conversion-copy";
import { LuxuryDemoModal } from "./luxury-demo-modal";

export type DemoPrefill = {
  projectType?: DemoProjectType;
  timeline?: DemoTimeline;
  company?: string;
  note?: string;
  source?: string;
};

type ConversionContextValue = {
  openDemo: (prefill?: DemoPrefill) => void;
  closeDemo: () => void;
};

const ConversionContext = createContext<ConversionContextValue | null>(null);

export function useConversionActions() {
  const ctx = useContext(ConversionContext);
  if (!ctx) {
    throw new Error("useConversionActions must be used within LuxuryConversionProvider");
  }
  return ctx;
}

/** Safe hook when provider may be absent (e.g. sticky CTA on other pages). */
export function useOptionalConversionActions() {
  return useContext(ConversionContext);
}

type Props = {
  locale: Locale;
  children: ReactNode;
};

export function LuxuryConversionProvider({ locale, children }: Props) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<DemoPrefill | undefined>();

  const openDemo = useCallback((next?: DemoPrefill) => {
    setPrefill(next);
    setOpen(true);
  }, []);

  const closeDemo = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(() => ({ openDemo, closeDemo }), [openDemo, closeDemo]);

  return (
    <ConversionContext.Provider value={value}>
      {children}
      <LuxuryDemoModal locale={locale} open={open} onClose={closeDemo} prefill={prefill} />
    </ConversionContext.Provider>
  );
}
