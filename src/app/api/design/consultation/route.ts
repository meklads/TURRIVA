import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/modules/auth/server/session";
import { isDesignCity } from "@/modules/design/lib/city";
import { isConsultationInterest } from "@/modules/design/lib/consultation-interest";
import type { BudgetRange, Timeline } from "@/modules/design/lib/lead-scoring";
import { db } from "@/shared/lib/db";
import { sendLeadNotification } from "@/shared/lib/email/send-lead-notification";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

const budgetSchema = z.enum(["under_30k", "30_80k", "80_200k", "over_200k"]);
const timelineSchema = z.enum(["immediate", "1_month", "3_months", "exploring"]);

const bodySchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(20),
  email: z.string().email().max(200).optional(),
  message: z.string().max(8000).optional(),
  locale: z.enum(["ar", "en"]).optional(),
  city: z.enum(["jeddah", "makkah", "other"]).optional(),
  interest: z.enum(["execution", "bespoke", "both"]).optional(),
  source: z.string().max(64).optional(),
  projectType: z.string().max(64).optional(),
  executionScope: z.string().max(64).optional(),
  budget: budgetSchema.optional(),
  timeline: timelineSchema.optional(),
  company: z.string().max(200).optional(),
  area: z.string().max(200).optional(),
  attachmentUrl: z.string().max(500).optional(),
  leadScore: z.number().int().min(0).max(200).optional(),
  qualified: z.boolean().optional(),
  generationId: z.string().cuid().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const {
      name,
      phone,
      email,
      message,
      locale,
      city,
      interest,
      generationId,
      source,
      projectType,
      executionScope,
      budget,
      timeline,
      company,
      area,
      attachmentUrl,
      leadScore,
      qualified,
    } = parsed.data;

    if (city && !isDesignCity(city)) {
      return NextResponse.json({ error: "Invalid city" }, { status: 400 });
    }
    if (interest && !isConsultationInterest(interest)) {
      return NextResponse.json({ error: "Invalid interest" }, { status: 400 });
    }

    const enrichedMessage = [
      message,
      company ? `Company: ${company}` : null,
      area ? `Area/units: ${area}` : null,
      budget ? `Budget: ${budget}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      executionScope ? `Scope: ${executionScope}` : null,
      attachmentUrl ? `Attachment: ${attachmentUrl}` : null,
      leadScore != null ? `Lead score: ${leadScore}` : null,
      qualified != null ? `Qualified: ${qualified ? "yes" : "no"}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await db.consultationLead.create({
      data: {
        name,
        phone,
        message: enrichedMessage || message,
        city: city ?? null,
        interest: interest ?? "execution",
        generationId: generationId ?? null,
        locale: locale ?? "ar",
        userId: session?.user?.id ?? null,
        source: source ?? "design_studio",
        projectType: projectType ?? null,
        executionScope: executionScope ?? null,
        budget: (budget as BudgetRange | undefined) ?? null,
        timeline: (timeline as Timeline | undefined) ?? null,
        leadScore: leadScore ?? null,
        qualified: qualified ?? null,
      },
    });

    const emailSent = await sendLeadNotification({
      name,
      phone,
      email,
      message: enrichedMessage || message,
      locale,
      city,
      interest,
      source,
      projectType: company ? `${projectType ?? ""} · ${company}` : projectType,
    }).catch((err) => {
      logServerError("lead notification email", err);
      return false;
    });

    return NextResponse.json({ success: true, emailSent, qualified: qualified ?? false, leadScore: leadScore ?? null });
  } catch (error) {
    logServerError("consultation lead", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
