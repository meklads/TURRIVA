import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/modules/auth/server/session";
import { isDesignCity } from "@/modules/design/lib/city";
import { isConsultationInterest } from "@/modules/design/lib/consultation-interest";
import { db } from "@/shared/lib/db";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(20),
  message: z.string().max(2000).optional(),
  locale: z.enum(["ar", "en"]).optional(),
  city: z.enum(["jeddah", "makkah", "other"]).optional(),
  interest: z.enum(["execution", "bespoke", "both"]).optional(),
  source: z.string().max(64).optional(),
  projectType: z.string().max(64).optional(),
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

    const { name, phone, message, locale, city, interest, generationId, source, projectType } =
      parsed.data;

    if (city && !isDesignCity(city)) {
      return NextResponse.json({ error: "Invalid city" }, { status: 400 });
    }
    if (interest && !isConsultationInterest(interest)) {
      return NextResponse.json({ error: "Invalid interest" }, { status: 400 });
    }

    await db.consultationLead.create({
      data: {
        name,
        phone,
        message,
        city: city ?? null,
        interest: interest ?? "execution",
        generationId: generationId ?? null,
        locale: locale ?? "ar",
        userId: session?.user?.id ?? null,
        source: source ?? "design_studio",
        projectType: projectType ?? null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logServerError("consultation lead", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
