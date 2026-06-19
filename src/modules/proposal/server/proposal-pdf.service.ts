import { db } from "@/shared/lib/db";

export async function exportProposalAsPdf(proposalId: string) {
  const proposal = await db.proposal.findUnique({ where: { id: proposalId } });
  if (!proposal) throw new Error("Proposal not found");

  const scopeItems = (proposal.scopeItems ?? []) as any[];
  const commercialTerms = proposal.commercialTerms as any;
  const assumptions = (proposal.assumptions ?? []) as string[];
  const exclusions = (proposal.exclusions ?? []) as string[];

  // Generate proposal number
  const proposalNumber =
    proposal.proposalNumber ??
    `PROP-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;

  // Build HTML for PDF
  const html = buildPdfHtml({
    projectName: proposal.projectName,
    clientName: proposal.clientName,
    proposalNumber,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    scopeItems,
    commercialTerms,
    assumptions,
    exclusions,
    budget: proposal.budget,
  });

  // For MVP, we'll generate PDF client-side using the browser's print
  // In production, this would use Puppeteer on the server
  // For now, save the HTML as a record and let the client render

  // Save document record
  const doc = await db.generatedDocument.create({
    data: {
      proposalId,
      type: "pdf",
      fileUrl: null, // Will be populated when server-side PDF is implemented
      shareToken: null,
    },
  });

  // Update proposal status
  await db.proposal.update({
    where: { id: proposalId },
    data: {
      status: "exported",
      exportedAt: new Date(),
      proposalNumber,
    },
  });

  return {
    url: `/api/proposals/${proposalId}/export/pdf`,
    filename: `${proposal.projectName.replace(/\s+/g, "_")}_Proposal.pdf`,
    proposalNumber,
    documentId: doc.id,
  };
}

function buildPdfHtml(data: {
  projectName: string;
  clientName: string;
  proposalNumber: string;
  date: string;
  scopeItems: any[];
  commercialTerms: any;
  assumptions: string[];
  exclusions: string[];
  budget: number;
}): string {
  const paymentRows = data.commercialTerms?.paymentSchedule
    ?.map(
      (m: any) =>
        `<tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb;">${m.label}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${m.percentage}%</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">SAR ${m.amount?.toLocaleString() ?? "—"}</td>
        </tr>`
    )
    .join("") ?? "";

  return `
<!DOCTYPE html>
<html dir="rtl">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Noto Sans Arabic', system-ui, sans-serif; margin: 40px; color: #1f2937; }
    h1 { font-size: 24px; margin-bottom: 4px; }
    .meta { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
    h2 { font-size: 18px; border-bottom: 2px solid #1a56db; padding-bottom: 8px; margin-top: 32px; }
    .scope-item { margin: 12px 0; }
    .scope-item h3 { font-size: 15px; margin: 0 0 4px 0; }
    .scope-item p { font-size: 13px; color: #4b5563; margin: 0; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th { background: #f3f4f6; padding: 8px 12px; text-align: left; font-size: 13px; }
    td { font-size: 13px; }
    ul { padding-inline-start: 20px; }
    li { margin: 6px 0; font-size: 13px; }
    .total { font-size: 16px; font-weight: bold; margin: 16px 0; }
    .footer { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; }
  </style>
</head>
<body>
  <h1>${data.projectName}</h1>
  <div class="meta">
    <div><strong>Prepared for:</strong> ${data.clientName}</div>
    <div><strong>Proposal #:</strong> ${data.proposalNumber}</div>
    <div><strong>Date:</strong> ${data.date}</div>
  </div>

  <h2>Scope of Work</h2>
  ${data.scopeItems
    .map(
      (item, i) =>
        `<div class="scope-item">
          <h3>${i + 1}. ${item.title}</h3>
          <p>${item.description}</p>
        </div>`
    )
    .join("")}

  <h2>Commercial Terms</h2>
  <div class="total">Total Value: SAR ${data.budget?.toLocaleString() ?? "—"}</div>
  <table>
    <thead>
      <tr><th>Milestone</th><th style="text-align:center;">%</th><th style="text-align:right;">Amount</th></tr>
    </thead>
    <tbody>
      ${paymentRows}
    </tbody>
  </table>

  ${data.assumptions?.length ? `
  <h2>Assumptions</h2>
  <ul>${data.assumptions.map((a) => `<li>${a}</li>`).join("")}</ul>
  ` : ""}

  ${data.exclusions?.length ? `
  <h2>Exclusions</h2>
  <ul>${data.exclusions.map((e) => `<li>${e}</li>`).join("")}</ul>
  ` : ""}

  <div class="footer">
    <p>This proposal was generated with AI assistance. Please review before submitting.</p>
  </div>
</body>
</html>`;
}
