import type { Locale } from "@/shared/i18n/locale";
import type { ProposalExportData } from "../proposal-export-types";
import { renderRuwaqTemplate } from "./ruwaq.template";

export function renderProposalExportHtml(
  locale: Locale,
  data: ProposalExportData
): string {
  const templateId = data.templateId ?? "ruwaq";

  switch (templateId) {
    case "ruwaq":
      return renderRuwaqTemplate(locale, data);
    case "graphics_house":
      // Second brand template — coming soon; fall back to Ruwaq for now
      return renderRuwaqTemplate(locale, data);
    default:
      return renderRuwaqTemplate(locale, data);
  }
}
