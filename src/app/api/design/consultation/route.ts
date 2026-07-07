import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/modules/auth/server/session";
import { isDesignCity } from "@/modules/design/lib/city";
import { db } from "@/shared/lib/db";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(20),
  message: z.string().max(2000).optional(),
  locale: z.enum(["ar", "en"]).optional(),
  city: z.enum(["jeddah", "makkah", "other"]).optional(),
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

    const { name, phone, message, locale, city, generationId } = parsed.data;

    if (city && !isDesignCity(city)) {
      return NextResponse.json({ error: "Invalid city" }, { status: 400 });
    }

    await db.consultationLead.create({
      data: {
        name,
        phone,
        message,
        city: city ?? null,
        generationId: generationId ?? null,
        locale: locale ?? "ar",
        userId: session?.user?.id ?? null,
        source: "design_studio",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logServerError("consultation lead", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
