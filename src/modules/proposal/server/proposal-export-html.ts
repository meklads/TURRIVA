export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) =>
    typeof item === "string" ? item : String(item ?? "")
  );
}

export function asObjectList(value: unknown): Record<string, unknown>[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item) => item && typeof item === "object") as Record<
    string,
    unknown
  >[];
}

export function asciiFilename(name: string, fallback = "proposal"): string {
  const cleaned = name
    .replace(/[^\x20-\x7E]/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 80);
  return cleaned || fallback;
}

export function formatSar(amount: unknown): string {
  const n = typeof amount === "number" ? amount : Number(amount ?? 0);
  if (!Number.isFinite(n)) return "0";
  return n.toLocaleString("en-US");
}

export function buildProposalExportHtml(data: {
  projectName: string;
  clientName: string;
  companyName?: string;
  proposalNumber?: string | null;
  date: string;
  scopeItems: Record<string, unknown>[];
  deliverables: Record<string, unknown>[];
  timeline: Record<string, unknown> | null;
  commercialTerms: Record<string, unknown> | null;
  assumptions: string[];
  exclusions: string[];
  budget: number;
}): string {
  const paymentSchedule = Array.isArray(data.commercialTerms?.paymentSchedule)
    ? (data.commercialTerms.paymentSchedule as Record<string, unknown>[])
    : [];

  const paymentRows = paymentSchedule
    .map(
      (m) => `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(m.label)}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:center;">${escapeHtml(m.percentage)}%</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">SAR ${formatSar(m.amount)}</td>
      </tr>`
    )
    .join("");

  const milestones = Array.isArray(data.timeline?.milestones)
    ? (data.timeline!.milestones as Record<string, unknown>[])
    : [];

  return `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.projectName)} — Proposal</title>
  <style>
    @media print { .no-print { display: none !important; } body { margin: 0; } }
    body { font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; margin: 40px; color: #1f2937; }
    h1 { font-size: 24px; margin-bottom: 4px; word-break: break-word; }
    .meta { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
    h2 { font-size: 18px; border-bottom: 2px solid #1a56db; padding-bottom: 8px; margin-top: 32px; }
    .scope-item { margin: 12px 0; }
    .scope-item h3 { font-size: 15px; margin: 0 0 4px; }
    .scope-item p { font-size: 13px; color: #4b5563; margin: 0; white-space: pre-wrap; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th { background: #f3f4f6; padding: 8px 12px; font-size: 13px; text-align: start; }
    td { font-size: 13px; }
    .total { font-size: 16px; font-weight: bold; margin: 16px 0; }
    .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; }
    .print-btn { position: fixed; top: 16px; left: 16px; padding: 10px 20px; background: #1a56db; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; z-index: 10; }
    ul { padding-inline-start: 20px; }
    li { margin: 6px 0; font-size: 13px; }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">Save as PDF — اطبع كـ PDF</button>
  <h1>${escapeHtml(data.projectName)}</h1>
  <div class="meta">
    <div><strong>Prepared for:</strong> ${escapeHtml(data.clientName)}</div>
    ${data.companyName ? `<div><strong>Prepared by:</strong> ${escapeHtml(data.companyName)}</div>` : ""}
    ${data.proposalNumber ? `<div><strong>Proposal #:</strong> ${escapeHtml(data.proposalNumber)}</div>` : ""}
    <div><strong>Date:</strong> ${escapeHtml(data.date)}</div>
  </div>
  <h2>Scope of Work</h2>
  ${data.scopeItems
    .map(
      (item, i) => `<div class="scope-item">
        <h3>${i + 1}. ${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
      </div>`
    )
    .join("")}
  ${
    data.deliverables.length
      ? `<h2>Deliverables</h2><ul>${data.deliverables
          .map(
            (d) =>
              `<li><strong>${escapeHtml(d.name)}</strong> — ${escapeHtml(d.description)}</li>`
          )
          .join("")}</ul>`
      : ""
  }
  ${
    data.timeline
      ? `<h2>Timeline</h2>
         <p>Duration: ${escapeHtml(data.timeline.duration ?? "TBD")}</p>
         ${
           milestones.length
             ? `<ul>${milestones.map((m) => `<li>${escapeHtml(m.name)}</li>`).join("")}</ul>`
             : ""
         }`
      : ""
  }
  <h2>Commercial Terms</h2>
  <div class="total">Total Value: SAR ${formatSar(data.budget)}</div>
  <table>
    <thead><tr><th>Milestone</th><th>%</th><th>Amount</th></tr></thead>
    <tbody>${paymentRows}</tbody>
  </table>
  ${
    data.assumptions.length
      ? `<h2>Assumptions</h2><ul>${data.assumptions.map((a) => `<li>${escapeHtml(a)}</li>`).join("")}</ul>`
      : ""
  }
  ${
    data.exclusions.length
      ? `<h2>Exclusions</h2><ul>${data.exclusions.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}</ul>`
      : ""
  }
  <div class="footer"><p>Generated with AI assistance. Review before submitting.</p></div>
</body>
</html>`;
}
