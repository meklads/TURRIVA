export type ProjectType = "apartment" | "villa" | "commercial" | "office";
export type ExecutionScope = "one_room" | "multiple_rooms" | "full_property";
export type BudgetRange = "under_30k" | "30_80k" | "80_200k" | "over_200k";
export type Timeline = "immediate" | "1_month" | "3_months" | "exploring";

export type QualificationInput = {
  projectType: ProjectType;
  executionScope: ExecutionScope;
  budget: BudgetRange;
  timeline: Timeline;
  name: string;
  phone: string;
};

const PROJECT_SCORES: Record<ProjectType, number> = {
  villa: 25,
  commercial: 25,
  apartment: 15,
  office: 15,
};

const SCOPE_SCORES: Record<ExecutionScope, number> = {
  full_property: 20,
  multiple_rooms: 15,
  one_room: 10,
};

const BUDGET_SCORES: Record<BudgetRange, number> = {
  under_30k: 5,
  "30_80k": 20,
  "80_200k": 35,
  over_200k: 45,
};

const TIMELINE_SCORES: Record<Timeline, number> = {
  immediate: 30,
  "1_month": 25,
  "3_months": 15,
  exploring: 0,
};

export function normalizeSaudiPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("05")) return digits;
  if (digits.length === 12 && digits.startsWith("9665")) return `0${digits.slice(3)}`;
  if (digits.length === 9 && digits.startsWith("5")) return `0${digits}`;
  return null;
}

export function scoreDesignLead(input: QualificationInput): { score: number; qualified: boolean } {
  const phone = normalizeSaudiPhone(input.phone);
  let score =
    PROJECT_SCORES[input.projectType] +
    SCOPE_SCORES[input.executionScope] +
    BUDGET_SCORES[input.budget] +
    TIMELINE_SCORES[input.timeline];

  if (phone) score += 10;

  const lowIntent = input.timeline === "exploring" && input.budget === "under_30k";
  const qualified = Boolean(phone) && score >= 50 && !lowIntent;

  return { score, qualified };
}
