import type { CommercialMode } from "@/shared/types";
import type { Locale } from "@/shared/i18n/locale";

export type ProposalExportData = {
  projectName: string;
  clientName: string;
  companyName?: string;
  logoUrl?: string;
  address?: string;
  about?: string;
  website?: string;
  portfolioUrl?: string;
  catalogUrl?: string;
  crNumber?: string;
  vatNumber?: string;
  companyPhone?: string;
  companyEmail?: string;
  proposalNumber?: string | null;
  introduction?: string | null;
  date: string;
  validityDate: string;
  scopeItems: Record<string, unknown>[];
  deliverables: Record<string, unknown>[];
  timeline: Record<string, unknown> | null;
  commercialTerms: Record<string, unknown> | null;
  assumptions: string[];
  exclusions: string[];
  budget: number;
  commercialMode: CommercialMode;
  projectLocation?: string;
  propertyType?: string;
  areaSqm?: number;
  appBaseUrl: string;
  templateId?: "ruwaq" | "graphics_house";
  /** When true, shows Ruwaq platform branding (sample preview only). */
  platformBranding?: boolean;
};
