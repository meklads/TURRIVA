import { db } from "@/shared/lib/db";
import OpenAI from "openai";
import { env } from "@/shared/lib/env";

const openai = env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: env.OPENAI_API_KEY })
  : null;

type MockStage =
  | "analysis"
  | "scope"
  | "commercial"
  | "assumptions"
  | "intro"
  | "timeline";

export async function regenerateSection(
  proposalId: string,
  section: string
): Promise<{ section: string; success: boolean }> {
  const proposal = await db.proposal.findUnique({ where: { id: proposalId } });
  if (!proposal) throw new Error("Proposal not found");

  const context = `
Project: ${proposal.projectName}
Client: ${proposal.clientName}
Description: ${proposal.description}
Budget: SAR ${proposal.budget}
Payment: ${proposal.paymentType}
`;

  const scopeItems = (proposal.scopeItems ?? []) as any[];

  if (section === "scopeItems") {
    const scopeResult = await callAI(
      "scope",
      "You are a scope of work writer for Saudi construction projects.",
      `Generate scope items for:\n\n${context}\n\nRespond in JSON: { "scopeItems": [{ "id": "unique", "title": "string", "description": "string" }], "deliverables": [{ "id": "unique", "name": "string", "description": "string" }] }`
    );
    const parsed = parseJson<{ scopeItems?: any[]; deliverables?: any[] }>(
      scopeResult,
      {}
    );
    await db.proposal.update({
      where: { id: proposalId },
      data: {
        scopeItems: (parsed.scopeItems ?? []) as any,
        deliverables: (parsed.deliverables ?? proposal.deliverables) as any,
      },
    });
  } else if (section === "commercialTerms") {
    const commercialResult = await callAI(
      "commercial",
      "You are a commercial terms specialist for Saudi contracts.",
      `Generate commercial terms:\n\nBudget: SAR ${proposal.budget}\nPayment: ${proposal.paymentType}\n\nRespond in JSON: { "totalValue": number, "paymentSchedule": [{ "percentage": number, "label": "string" }], "warrantyPeriod": "string", "retention": number | null }`
    );
    const commercialTerms = buildCommercialTerms(
      parseJson(commercialResult, {}),
      proposal.budget
    );
    await db.proposal.update({
      where: { id: proposalId },
      data: { commercialTerms: commercialTerms as any },
    });
  } else if (section === "assumptions" || section === "exclusions") {
    const result = await callAI(
      "assumptions",
      "You are a commercial terms specialist for Saudi contracts.",
      `Generate assumptions and exclusions:\n\nScope: ${scopeItems.map((s: any) => s.title).join(", ")}\n\nRespond in JSON: { "assumptions": ["string"], "exclusions": ["string"] }`
    );
    const parsed = parseJson<{ assumptions?: string[]; exclusions?: string[] }>(
      result,
      {}
    );
    await db.proposal.update({
      where: { id: proposalId },
      data: {
        assumptions: (parsed.assumptions ?? proposal.assumptions) as any,
        exclusions: (parsed.exclusions ?? proposal.exclusions) as any,
      },
    });
  }

  return { section, success: true };
}

export async function generateProposalContent(proposalId: string) {
  const proposal = await db.proposal.findUnique({ where: { id: proposalId } });
  if (!proposal) throw new Error("Proposal not found");

  await db.proposal.update({
    where: { id: proposalId },
    data: { status: "generating" },
  });

  try {
    const context = `
Project: ${proposal.projectName}
Client: ${proposal.clientName}
Description: ${proposal.description}
Budget: SAR ${proposal.budget}
Payment: ${proposal.paymentType}
`;

    // === Stage 1: Project Analysis ===
    const analysis = await callAI(
      "analysis",
      "You are a proposal analyst for the Saudi construction industry.",
      `Analyze this Saudi construction project:\n\n${context}`
    );

    // === Stage 2: Scope Generation ===
    const scopeResult = await callAI(
      "scope",
      "You are a scope of work writer for Saudi construction projects.",
      `Generate scope items for:\n\n${context}\nAnalysis: ${analysis}\n\nRespond in JSON: { "scopeItems": [{ "id": "unique", "title": "string", "description": "string" }], "deliverables": [{ "id": "unique", "name": "string", "description": "string" }] }`
    );

    let scopeItems: any[] = [];
    let deliverables: any[] = [];
    const scopeParsed = parseJson<{ scopeItems?: any[]; deliverables?: any[] }>(
      scopeResult,
      {}
    );
    scopeItems = scopeParsed.scopeItems ?? [];
    deliverables = scopeParsed.deliverables ?? [];
    if (scopeItems.length === 0) {
      scopeItems = [
        { id: "1", title: "Project Execution", description: proposal.description },
      ];
    }

    // === Stage 3: Commercial Terms ===
    const commercialResult = await callAI(
      "commercial",
      "You are a commercial terms specialist for Saudi contracts.",
      `Generate commercial terms:\n\nBudget: SAR ${proposal.budget}\nPayment: ${proposal.paymentType}\nScope: ${scopeItems.map((s: any) => s.title).join(", ")}\n\nRespond in JSON: { "totalValue": number, "paymentSchedule": [{ "percentage": number, "label": "string" }], "warrantyPeriod": "string", "retention": number | null }`
    );

    const commercialTerms = buildCommercialTerms(
      parseJson(commercialResult, {}),
      proposal.budget
    );

    // Assumptions & Exclusions
    const assumptionsResult = await callAI(
      "assumptions",
      "You are a commercial terms specialist for Saudi contracts.",
      `Generate assumptions and exclusions:\n\nScope: ${scopeItems.map((s: any) => s.title).join(", ")}\n\nRespond in JSON: { "assumptions": ["string"], "exclusions": ["string"] }`
    );

    const legalParsed = parseJson<{ assumptions?: string[]; exclusions?: string[] }>(
      assumptionsResult,
      {}
    );
    const assumptions: string[] =
      legalParsed.assumptions ?? [
        "Client provides site access during working hours",
        "All materials are available in the Saudi market",
      ];
    const exclusions: string[] =
      legalParsed.exclusions ?? [
        "Structural modifications to walls",
        "External landscaping",
        "Civil defense approvals",
      ];

    // === Stage 4: Timeline ===
    const timelineResult = await callAI(
      "timeline",
      "You are a project scheduler for Saudi construction.",
      `Estimate timeline for:\n\n${context}\nScope: ${scopeItems.map((s: any) => s.title).join(", ")}\n\nRespond in JSON: { "duration": "string", "startDate": null, "endDate": null, "milestones": [{ "name": "string", "date": null }] }`
    );

    const timelineParsed = parseJson<{
      duration?: string;
      startDate?: string | null;
      endDate?: string | null;
      milestones?: { name: string; date: string | null }[];
    }>(timelineResult, {});
    const timeline = {
      duration: timelineParsed.duration ?? "6-8 weeks",
      startDate: timelineParsed.startDate ?? null,
      endDate: timelineParsed.endDate ?? null,
      milestones: timelineParsed.milestones ?? [
        { name: "Project kickoff", date: null },
        { name: "Mid-project review", date: null },
        { name: "Final handover", date: null },
      ],
    };

    // === Stage 5: Assembly ===
    await callAI(
      "intro",
      "You are a proposal assembler.",
      `Write a 2 sentence proposal introduction for:\n\nProject: ${proposal.projectName}\nClient: ${proposal.clientName}\nTotal: SAR ${proposal.budget}`
    );

    await db.proposal.update({
      where: { id: proposalId },
      data: {
        status: "review",
        scopeItems: scopeItems as any,
        deliverables: deliverables as any,
        commercialTerms: commercialTerms as any,
        assumptions: assumptions as any,
        exclusions: exclusions as any,
        timeline: timeline as any,
        confidence: {
          scopeItems: scopeItems.length > 2 ? "high" : "medium",
          deliverables: deliverables.length > 0 ? "medium" : "low",
          timeline: timeline.milestones?.length > 1 ? "medium" : "low",
          commercialTerms: commercialTerms?.paymentSchedule?.length
            ? "high"
            : "medium",
          assumptions: "always_warn",
          exclusions: "always_warn",
        } as any,
      },
    });

    return { success: true, id: proposalId };
  } catch (error) {
    await db.proposal.update({
      where: { id: proposalId },
      data: { status: "draft" },
    });
    throw error;
  }
}

async function callAI(
  stage: MockStage,
  systemPrompt: string,
  userMessage: string
): Promise<string> {
  if (!openai) {
    return mockResponse(stage, userMessage);
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: 0.7,
    max_tokens: 2000,
    response_format:
      stage !== "analysis" && stage !== "intro"
        ? { type: "json_object" }
        : undefined,
  });

  return response.choices[0]?.message?.content ?? "";
}

function parseJson<T extends Record<string, unknown>>(
  raw: string,
  fallback: T
): T {
  try {
    const cleaned = raw.replace(/```json\n?|\n?```/g, "").trim();
    return { ...fallback, ...JSON.parse(cleaned) };
  } catch {
    return fallback;
  }
}

function buildCommercialTerms(parsed: Record<string, any>, budget: number) {
  if (!parsed.paymentSchedule?.length) {
    return {
      totalValue: budget,
      paymentSchedule: [
        { percentage: 30, label: "Down Payment", amount: Math.round(budget * 0.3) },
        { percentage: 40, label: "On Delivery", amount: Math.round(budget * 0.4) },
        { percentage: 30, label: "After Handover", amount: Math.round(budget * 0.3) },
      ],
      warrantyPeriod: "1 year",
      retention: null,
    };
  }

  const totalValue = parsed.totalValue ?? budget;
  return {
    totalValue,
    paymentSchedule: parsed.paymentSchedule.map((m: any) => ({
      ...m,
      amount: Math.round((totalValue * m.percentage) / 100),
    })),
    warrantyPeriod: parsed.warrantyPeriod ?? "1 year",
    retention: parsed.retention ?? null,
  };
}

function mockResponse(stage: MockStage, userMessage: string): string {
  const budgetMatch = userMessage.match(/SAR (\d+)/);
  const budget = budgetMatch ? parseInt(budgetMatch[1]!, 10) : 100000;

  switch (stage) {
    case "analysis":
      return "Saudi construction project requiring fit-out and finishing work with standard commercial terms.";
    case "scope":
      return JSON.stringify({
        scopeItems: [
          { id: "1", title: "Project Management", description: "Manage all project activities and coordination with client" },
          { id: "2", title: "Execution", description: "Execute the full scope of work as described" },
          { id: "3", title: "Quality Control", description: "Ensure quality standards and final handover" },
        ],
        deliverables: [
          { id: "d1", name: "Completed Works", description: "All scope items completed to specification" },
          { id: "d2", name: "Handover Report", description: "Final project handover documentation" },
        ],
      });
    case "commercial":
      return JSON.stringify({
        totalValue: budget,
        paymentSchedule: [
          { percentage: 30, label: "Down Payment" },
          { percentage: 40, label: "On Delivery" },
          { percentage: 30, label: "After Handover" },
        ],
        warrantyPeriod: "1 year",
        retention: null,
      });
    case "assumptions":
      return JSON.stringify({
        assumptions: [
          "Client provides site access during working hours",
          "Materials are available in the Saudi market",
        ],
        exclusions: [
          "Structural modifications",
          "Government approvals and permits",
        ],
      });
    case "timeline":
      return JSON.stringify({
        duration: "6-8 weeks",
        startDate: null,
        endDate: null,
        milestones: [
          { name: "Project kickoff", date: null },
          { name: "Mid-project review", date: null },
          { name: "Final handover", date: null },
        ],
      });
    case "intro":
      return "Professional proposal prepared for the described project scope.";
  }
}
