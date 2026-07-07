export const CONSULTATION_INTERESTS = ["execution", "bespoke", "both"] as const;
export type ConsultationInterest = (typeof CONSULTATION_INTERESTS)[number];

export function isConsultationInterest(value: string): value is ConsultationInterest {
  return (CONSULTATION_INTERESTS as readonly string[]).includes(value);
}
