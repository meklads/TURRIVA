export const EXPORT_TEMPLATE_IDS = [
  "ruwaq",
  "ruwaq_executive",
  "graphics_house",
] as const;

export type ExportTemplateId = (typeof EXPORT_TEMPLATE_IDS)[number];

export function parseExportTemplateId(value: unknown): ExportTemplateId {
  if (
    typeof value === "string" &&
    (EXPORT_TEMPLATE_IDS as readonly string[]).includes(value)
  ) {
    return value as ExportTemplateId;
  }
  return "ruwaq";
}
