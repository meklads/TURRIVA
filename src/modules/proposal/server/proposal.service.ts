import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";
import { getLocale } from "@/shared/i18n/server";
import {
  validateProposalFields,
  type Locale,
} from "@/shared/i18n/locale";
import { getMessages } from "@/shared/i18n";
import type {
  CreateProposalInput,
  Proposal,
  ScopeItem,
  Deliverable,
  CommercialTerms,
  Timeline,
} from "@/shared/types";

// ─── CREATE ───

export async function createProposal(
  input: CreateProposalInput
): Promise<{ id: string }> {
  let userId: string | null = null;
  try {
    const session = await getSession();
    userId = session?.user?.id ?? null;
  } catch {
    userId = null;
  }

  const locale = await getLocale();
  const localeError = validateProposalFields(
    {
      projectName: input.projectName,
      clientName: input.clientName,
      description: input.description,
    },
    locale
  );
  if (localeError) {
    const t = getMessages(locale);
    throw new Error(t.form.errors[localeError]);
  }

  const proposal = await db.proposal.create({
    data: {
      userId: userId ?? null,
      locale,
      projectName: input.projectName,
      clientName: input.clientName,
      description: input.description,
      budget: input.budget,
      paymentType: input.paymentType,
      status: "draft",
      confidence: {
        scopeItems: "medium" as const,
        deliverables: "medium" as const,
        timeline: "medium" as const,
        commercialTerms: "medium" as const,
        assumptions: "always_warn" as const,
        exclusions: "always_warn" as const,
      },
      reviewedSections: [],
    },
  });

  return { id: proposal.id };
}

// ─── GET ───

export async function getProposal(id: string): Promise<Proposal | null> {
  const p = await db.proposal.findUnique({ where: { id } });
  if (!p) return null;

  const confidence = p.confidence as unknown as Proposal["confidence"];

  return {
    id: p.id,
    userId: p.userId,
    status: p.status as Proposal["status"],
    version: p.version,
    projectName: p.projectName,
    clientName: p.clientName,
    description: p.description,
    budget: p.budget,
    paymentType: p.paymentType as Proposal["paymentType"],
    locale: p.locale === "en" ? "en" : "ar",
    scopeItems: (p.scopeItems ?? []) as unknown as ScopeItem[],
    deliverables: (p.deliverables ?? []) as unknown as Deliverable[],
    timeline: p.timeline as unknown as Timeline | null,
    commercialTerms: p.commercialTerms as unknown as CommercialTerms | null,
    assumptions: (p.assumptions ?? []) as unknown as string[],
    exclusions: (p.exclusions ?? []) as unknown as string[],
    confidence,
    reviewedSections: (p.reviewedSections ?? []) as unknown as string[],
    proposalNumber: p.proposalNumber,
    exportedAt: p.exportedAt?.toISOString() ?? null,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  };
}

// ─── UPDATE FIELD (dot-notation) ───

export async function updateProposalField(
  proposalId: string,
  field: string,
  value: unknown
): Promise<{ success: boolean }> {
  const scalarFields = [
    "projectName",
    "clientName",
    "description",
    "budget",
    "paymentType",
    "status",
  ];

  if (scalarFields.includes(field)) {
    const data: Record<string, unknown> = { [field]: value };

    // Keep commercial total in sync when budget changes
    if (field === "budget" && typeof value === "number") {
      const proposal = await db.proposal.findUnique({
        where: { id: proposalId },
        select: { commercialTerms: true },
      });
      if (proposal?.commercialTerms) {
        const terms = JSON.parse(
          JSON.stringify(proposal.commercialTerms)
        ) as CommercialTerms;
        terms.totalValue = value;
        if (terms.paymentSchedule?.length) {
          terms.paymentSchedule = terms.paymentSchedule.map((m) => ({
            ...m,
            amount: Math.round((value * m.percentage) / 100),
          }));
        }
        data.commercialTerms = terms;
      }
    }

    await db.proposal.update({
      where: { id: proposalId },
      data,
    });
    return { success: true };
  }

  const jsonFields = [
    "scopeItems",
    "deliverables",
    "timeline",
    "commercialTerms",
    "assumptions",
    "exclusions",
    "confidence",
    "reviewedSections",
  ];

  const rootMatch = field.match(/^(\w+)/);
  if (!rootMatch) return { success: false };

  const rootKey = rootMatch[1]!;
  if (!jsonFields.includes(rootKey)) return { success: false };

  const subPath = field.slice(rootKey.length);
  const current = await db.proposal.findUnique({
    where: { id: proposalId },
    select: {
      [rootKey]: true,
      budget: true,
    },
  });
  if (!current) return { success: false };

  const defaultValue =
    rootKey === "assumptions" || rootKey === "exclusions" || rootKey === "scopeItems" || rootKey === "deliverables"
      ? []
      : rootKey === "reviewedSections"
        ? []
        : null;

  let currentData = JSON.parse(
    JSON.stringify(current[rootKey as keyof typeof current] ?? defaultValue)
  );

  if (subPath) {
    currentData = setByPath(currentData, subPath, value);
  } else {
    currentData = value;
  }

  // Recalculate payment amounts when percentage changes
  if (
    rootKey === "commercialTerms" &&
    subPath.includes("paymentSchedule") &&
    subPath.endsWith("percentage")
  ) {
    const terms = currentData as CommercialTerms;
    const budget = current.budget ?? terms.totalValue ?? 0;
    const total = terms.totalValue ?? budget;
    if (terms.paymentSchedule?.length) {
      terms.paymentSchedule = terms.paymentSchedule.map((m) => ({
        ...m,
        amount: Math.round((total * m.percentage) / 100),
      }));
      currentData = terms;
    }
  }

  await db.proposal.update({
    where: { id: proposalId },
    data: { [rootKey]: currentData as any },
  });
  return { success: true };
}

// ─── ADD ITEM TO ARRAY SECTION ───

export async function addProposalItem(
  proposalId: string,
  section: string,
  item: Record<string, unknown>
): Promise<{ id: string }> {
  const current = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { [section]: true },
  });
  if (!current) throw new Error("Proposal not found");

  const arr = (current[section as keyof typeof current] ?? []) as any[];
  const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
  arr.push({ ...item, id });

  await db.proposal.update({
    where: { id: proposalId },
    data: { [section]: arr as any },
  });

  return { id };
}

// ─── REMOVE ITEM FROM ARRAY SECTION ───

export async function removeProposalItem(
  proposalId: string,
  section: string,
  itemId: string
): Promise<{ success: boolean }> {
  const current = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { [section]: true },
  });
  if (!current) return { success: false };

  const arr = (current[section as keyof typeof current] ?? []) as any[];
  const filtered = arr.filter((item: any) => item.id !== itemId);

  await db.proposal.update({
    where: { id: proposalId },
    data: { [section]: filtered as any },
  });

  return { success: true };
}

// ─── MARK SECTION AS REVIEWED ───

export async function markSectionReviewed(
  proposalId: string,
  section: string
): Promise<{ reviewedSections: string[] }> {
  const current = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { reviewedSections: true },
  });
  if (!current) throw new Error("Proposal not found");

  const reviewed = (current.reviewedSections ?? []) as string[];
  if (!reviewed.includes(section)) {
    reviewed.push(section);
  }

  const allSections = [
    "scopeItems",
    "commercialTerms",
    "assumptions",
    "exclusions",
  ];
  const nextStatus =
    allSections.every((s) => reviewed.includes(s)) ? "reviewed" : "review";

  await db.proposal.update({
    where: { id: proposalId },
    data: {
      reviewedSections: reviewed as any,
      status: nextStatus,
    },
  });

  return { reviewedSections: reviewed };
}

// ─── LIST PROPOSALS ───

export async function listUserProposals(userId: string) {
  return db.proposal.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      projectName: true,
      clientName: true,
      status: true,
      createdAt: true,
      updatedAt: true,
      proposalNumber: true,
    },
  });
}

export async function claimProposal(
  proposalId: string,
  userId: string
): Promise<{ success: boolean }> {
  const proposal = await db.proposal.findUnique({
    where: { id: proposalId },
    select: { userId: true },
  });
  if (!proposal) return { success: false };
  if (proposal.userId && proposal.userId !== userId) return { success: false };

  await db.proposal.update({
    where: { id: proposalId },
    data: { userId },
  });
  return { success: true };
}

// ─── HELPERS ───

function tokenizePath(path: string): (string | number)[] {
  const tokens: (string | number)[] = [];
  let i = 0;
  const s = path.startsWith(".") ? path.slice(1) : path;

  while (i < s.length) {
    if (s[i] === "[") {
      const end = s.indexOf("]", i);
      tokens.push(parseInt(s.slice(i + 1, end), 10));
      i = end + 1;
      if (s[i] === ".") i++;
      continue;
    }

    const dot = s.indexOf(".", i);
    const bracket = s.indexOf("[", i);
    let end = s.length;
    if (dot !== -1 && (bracket === -1 || dot < bracket)) end = dot;
    else if (bracket !== -1) end = bracket;

    tokens.push(s.slice(i, end));
    i = end;
    if (s[i] === ".") i++;
  }

  return tokens;
}

function setByPath(data: unknown, path: string, value: unknown): unknown {
  const tokens = tokenizePath(path);
  if (tokens.length === 0) return value;
  return setByTokens(data, tokens, value);
}

function setByTokens(
  data: unknown,
  tokens: (string | number)[],
  value: unknown
): unknown {
  const [head, ...rest] = tokens;
  if (head === undefined) return value;

  if (rest.length === 0) {
    if (typeof head === "number") {
      const arr = Array.isArray(data) ? [...data] : [];
      arr[head] = value;
      return arr;
    }
    return { ...(data as Record<string, unknown>), [head]: value };
  }

  if (typeof head === "number") {
    const arr = Array.isArray(data) ? [...data] : [];
    arr[head] = setByTokens(arr[head], rest, value);
    return arr;
  }

  const obj =
    data && typeof data === "object" && !Array.isArray(data)
      ? { ...(data as Record<string, unknown>) }
      : {};
  obj[head] = setByTokens(obj[head], rest, value);
  return obj;
}
