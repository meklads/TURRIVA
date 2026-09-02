import {
  normalizeSaudiPhone,
  type BudgetRange,
  type Timeline,
} from "@/modules/design/lib/lead-scoring";

export type MarketingProjectType =
  | "villa"
  | "hospitality"
  | "exhibition"
  | "developer"
  | "commercial"
  | "other";

export type MarketingScope = "one_room" | "multiple_rooms" | "full_property" | "batch_units";

export type MarketingLeadInput = {
  projectType: MarketingProjectType;
  executionScope: MarketingScope;
  budget: BudgetRange;
  timeline: Timeline;
  phone: string;
  company?: string;
  email?: string;
};

const PROJECT_SCORES: Record<MarketingProjectType, number> = {
  developer: 30,
  hospitality: 28,
  exhibition: 26,
  commercial: 22,
  villa: 18,
  other: 10,
};

const SCOPE_SCORES: Record<MarketingScope, number> = {
  batch_units: 25,
  full_property: 20,
  multiple_rooms: 14,
  one_room: 8,
};

const BUDGET_SCORES: Record<BudgetRange, number> = {
  under_30k: 5,
  "30_80k": 18,
  "80_200k": 32,
  over_200k: 45,
};

const TIMELINE_SCORES: Record<Timeline, number> = {
  immediate: 28,
  "1_month": 22,
  "3_months": 12,
  exploring: 0,
};

export function scoreMarketingLead(input: MarketingLeadInput): { score: number; qualified: boolean } {
  const phone = normalizeSaudiPhone(input.phone);
  let score =
    PROJECT_SCORES[input.projectType] +
    SCOPE_SCORES[input.executionScope] +
    BUDGET_SCORES[input.budget] +
    TIMELINE_SCORES[input.timeline];

  if (phone) score += 10;
  if (input.company && input.company.trim().length >= 2) score += 8;
  if (input.email && !/@(gmail|googlemail|hotmail|outlook|yahoo|icloud)\./i.test(input.email)) {
    score += 7;
  }

  const lowIntent = input.timeline === "exploring" && input.budget === "under_30k";
  const qualified = Boolean(phone) && score >= 48 && !lowIntent;

  return { score, qualified };
}
