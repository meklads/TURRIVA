import { NextRequest, NextResponse } from "next/server";
import { db } from "@/shared/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const proposal = await db.proposal.findUnique({
      where: { id: params.id },
    });

    if (!proposal) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let companyName = "";
    if (proposal.userId) {
      const profile = await db.companyProfile.findUnique({
        where: { userId: proposal.userId },
        select: { companyName: true },
      });
      companyName = profile?.companyName ?? "";
    }

    const scopeItems = (proposal.scopeItems ?? []) as any[];
    const deliverables = (proposal.deliverables ?? []) as any[];
    const timeline = proposal.timeline as any;
    const commercialTerms = proposal.commercialTerms as any;
    const assumptions = (proposal.assumptions ?? []) as string[];
    const exclusions = (proposal.exclusions ?? []) as string[];

    let paymentRows = "";
    if (commercialTerms?.paymentSchedule) {
      paymentRows = commercialTerms.paymentSchedule
        .map(
          (m: any) =>
            `<tr>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${m.label}</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:center;">${m.percentage}%</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;text-align:right;">SAR ${(m.amount ?? 0).toLocaleString()}</td>
            </tr>`
        )
        .join("");
    }

    const safeName = proposal.projectName
      .replace(/[—\-]/g, "_")
      .replace(/\s+/g, "_");

    const html = `<!DOCTYPE html>
<html dir="rtl">
<head><meta charset="utf-8">
<title>${proposal.projectName} — Proposal</title>
<style>
  @media print { .no-print { display: none !important; } }
  body { font-family: system-ui, sans-serif; margin:40px; color:#1f2937; }
  h1 { font-size:24px; margin-bottom:4px; }
  .meta { color:#6b7280; font-size:14px; margin-bottom:24px; }
  h2 { font-size:18px; border-bottom:2px solid #1a56db; padding-bottom:8px; margin-top:32px; }
  .scope-item { margin:12px 0; }
  .scope-item h3 { font-size:15px; margin:0 0 4px; }
  .scope-item p { font-size:13px; color:#4b5563; margin:0; }
  table { width:100%; border-collapse:collapse; margin:16px 0; }
  th { background:#f3f4f6; padding:8px 12px; font-size:13px; }
  td { font-size:13px; }
  .total { font-size:16px; font-weight:bold; margin:16px 0; }
  .footer { margin-top:48px; padding-top:16px; border-top:1px solid #e5e7eb; font-size:11px; color:#9ca3af; }
  .print-btn { position:fixed; top:16px; left:16px; padding:10px 20px; background:#1a56db; color:#fff; border:none; border-radius:8px; cursor:pointer; font-size:14px; }
</style></head>
<body>
  <button class="print-btn no-print" onclick="window.print()">📄 Save as PDF</button>
  <h1>${proposal.projectName}</h1>
  <div class="meta">
    <div><strong>Prepared for:</strong> ${proposal.clientName}</div>
    ${companyName ? `<div><strong>Prepared by:</strong> ${companyName}</div>` : ""}
    ${proposal.proposalNumber ? `<div><strong>Proposal #:</strong> ${proposal.proposalNumber}</div>` : ""}
    <div><strong>Date:</strong> ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
  </div>
  <h2>Scope of Work</h2>
  ${scopeItems
    .map(
      (item: any, i: number) =>
        `<div class="scope-item"><h3>${i + 1}. ${item.title}</h3><p>${item.description}</p></div>`
    )
    .join("")}
  ${
    deliverables.length
      ? `<h2>Deliverables</h2><ul>${deliverables
          .map((d: any) => `<li><strong>${d.name}</strong> — ${d.description}</li>`)
          .join("")}</ul>`
      : ""
  }
  ${
    timeline
      ? `<h2>Timeline</h2><p>Duration: ${timeline.duration ?? "TBD"}</p>${
          timeline.milestones?.length
            ? `<ul>${timeline.milestones
                .map((m: any) => `<li>${m.name}</li>`)
                .join("")}</ul>`
            : ""
        }`
      : ""
  }
  <h2>Commercial Terms</h2>
  <div class="total">Total Value: SAR ${(proposal.budget ?? 0).toLocaleString()}</div>
  <table><thead><tr><th>Milestone</th><th>%</th><th>Amount</th></tr></thead><tbody>${paymentRows}</tbody></table>
  ${
    assumptions.length
      ? `<h2>Assumptions</h2><ul>${assumptions
          .map((a: string) => `<li>${a}</li>`)
          .join("")}</ul>`
      : ""
  }
  ${
    exclusions.length
      ? `<h2>Exclusions</h2><ul>${exclusions
          .map((e: string) => `<li>${e}</li>`)
          .join("")}</ul>`
      : ""
  }
  <div class="footer"><p>Generated with AI assistance. Review before submitting.</p></div>
</body></html>`;

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Content-Disposition": `inline; filename="${safeName}_Proposal.html"`,
      },
    });
  } catch (error) {
    console.error("PDF export error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
