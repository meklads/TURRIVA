// ============================================================
// Canonical Proposal Types — Single Source of Truth
// ============================================================

export type ProposalStatus =
  | "draft"
  | "generating"
  | "review"
  | "reviewed"
  | "exported";

export type ConfidenceLevel = "high" | "medium" | "low" | "always_warn";

export type PaymentType =
  | "milestone_30_40_30"
  | "monthly"
  | "fixed"
  | "custom";

// --- User Input ---

export interface ProposalInput {
  projectName: string;
  clientName: string;
  description: string;
  budget: number;
  paymentType: PaymentType;
}

// --- AI Generated Structures ---

export interface ScopeItem {
  id: string;
  title: string;
  description: string;
}

export interface Deliverable {
  id: string;
  name: string;
  description: string;
}

export interface PaymentMilestone {
  percentage: number;
  label: string;
  amount: number;
}

export interface CommercialTerms {
  totalValue: number;
  paymentSchedule: PaymentMilestone[];
  warrantyPeriod: string;
  retention: number | null;
}

export interface Timeline {
  duration: string;
  startDate: string | null;
  endDate: string | null;
  milestones: { name: string; date: string | null }[];
}

// --- Confidence Map ---

export interface ConfidenceMap {
  scopeItems: ConfidenceLevel;
  deliverables: ConfidenceLevel;
  timeline: ConfidenceLevel;
  commercialTerms: ConfidenceLevel;
  assumptions: ConfidenceLevel;
  exclusions: ConfidenceLevel;
}

// --- Full Proposal ---

export interface Proposal {
  id: string;
  userId: string | null;
  status: ProposalStatus;
  version: number;

  // User input
  projectName: string;
  clientName: string;
  description: string;
  budget: number;
  paymentType: PaymentType;

  // AI generated
  scopeItems: ScopeItem[];
  deliverables: Deliverable[];
  timeline: Timeline | null;
  commercialTerms: CommercialTerms | null;
  assumptions: string[];
  exclusions: string[];

  // Confidence
  confidence: ConfidenceMap;

  // Review
  reviewedSections: string[];

  // Metadata
  proposalNumber: string | null;
  exportedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// --- Server Action Inputs ---

export interface CreateProposalInput {
  projectName: string;
  clientName: string;
  description: string;
  budget: number;
  paymentType: PaymentType;
}

export interface UpdateFieldInput {
  proposalId: string;
  field: string; // dot-notation path: "scopeItems[0].title"
  value: unknown;
}

export interface AddItemInput {
  proposalId: string;
  section: "scopeItems" | "assumptions" | "exclusions" | "deliverables";
  item: Record<string, unknown>;
}

export interface RemoveItemInput {
  proposalId: string;
  section: "scopeItems" | "assumptions" | "exclusions" | "deliverables";
  itemId: string;
}
