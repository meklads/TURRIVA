import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  normalizeSaudiPhone,
  scoreDesignLead,
} from "@/modules/design/lib/lead-scoring";
import {
  getGuestSessionFromRequest,
  guestCookieOptions,
  GUEST_COOKIE,
  remainingBonusCredits,
} from "@/modules/design/server/design-guest.service";
import { db } from "@/shared/lib/db";
import { getSession } from "@/modules/auth/server/session";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  projectType: z.enum(["apartment", "villa", "commercial", "office"]),
  executionScope: z.enum(["one_room", "multiple_rooms", "full_property"]),
  budget: z.enum(["under_30k", "30_80k", "80_200k", "over_200k"]),
  timeline: z.enum(["immediate", "1_month", "3_months", "exploring"]),
  name: z.string().min(2).max(120),
  phone: z.string().min(8).max(20),
  locale: z.enum(["ar", "en"]).optional(),
  generationId: z.string().optional(),
  privacyAccepted: z.literal(true),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getGuestSessionFromRequest(req);
    if (!session) {
      return NextResponse.json({ code: "GUEST_SESSION_REQUIRED" }, { status: 400 });
    }

    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ code: "INVALID_INPUT" }, { status: 400 });
    }

    const data = parsed.data;
    const phone = normalizeSaudiPhone(data.phone);
    if (!phone) {
      return NextResponse.json({ code: "INVALID_PHONE" }, { status: 400 });
    }

    const { score, qualified } = scoreDesignLead({ ...data, phone });
    const bonusCredits = qualified ? 2 : 0;
    const authSession = await getSession();

    await db.designGuestSession.update({
      where: { id: session.id },
      data: {
        projectType: data.projectType,
        executionScope: data.executionScope,
        budget: data.budget,
        timeline: data.timeline,
        name: data.name.trim(),
        phone,
        locale: data.locale ?? "ar",
        leadScore: score,
        qualified,
        bonusCredits,
        bonusUsed: 0,
      },
    });

    await db.consultationLead.create({
      data: {
        name: data.name.trim(),
        phone,
        locale: data.locale ?? "ar",
        userId: authSession?.user?.id ?? null,
        generationId: data.generationId ?? null,
        guestSessionId: session.id,
        projectType: data.projectType,
        executionScope: data.executionScope,
        budget: data.budget,
        timeline: data.timeline,
        leadScore: score,
        qualified,
        interest: "execution",
        source: "design_conversion",
      },
    });

    const response = NextResponse.json({
      success: true,
      qualified,
      bonusCredits,
      bonusRemaining: bonusCredits,
    });

    response.cookies.set(GUEST_COOKIE, session.guestToken, guestCookieOptions());
    return response;
  } catch (error) {
    logServerError("design guest qualify", error);
    return NextResponse.json({ code: "GENERIC" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const session = await getGuestSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({
      hasSession: false,
      previewUsed: false,
      bonusRemaining: 0,
      qualified: null,
    });
  }

  return NextResponse.json({
    hasSession: true,
    previewUsed: session.previewUsed,
    bonusRemaining: remainingBonusCredits(session),
    qualified: session.qualified,
    leadCompleted: Boolean(session.phone),
  });
}
