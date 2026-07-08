import { NextRequest, NextResponse } from "next/server";
import {
  canGuestGenerate,
  getOrCreateGuestSession,
  guestCookieOptions,
  GUEST_COOKIE,
  remainingBonusCredits,
} from "@/modules/design/server/design-guest.service";
import { mapGenerationError, runDesignGeneration } from "@/modules/design/server/design-generate-core";
import { db } from "@/shared/lib/db";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  try {
    const guestResult = await getOrCreateGuestSession(req);
    if ("blocked" in guestResult) {
      return NextResponse.json(
        { code: "GUEST_RATE_LIMIT", error: "Daily preview limit reached" },
        { status: 429 }
      );
    }

    const session = guestResult.session;
    const slot = canGuestGenerate(session);

    if (slot === false) {
      return NextResponse.json(
        { code: "GUEST_CREDITS_EXHAUSTED", error: "Complete qualification to unlock more designs" },
        { status: 402 }
      );
    }

    const form = await req.formData();
    const file = form.get("image");
    const styleId = String(form.get("styleId") ?? "");
    const spaceType = String(form.get("spaceType") ?? "interior");
    const roomType = String(form.get("roomType") ?? "living");
    const locale = String(form.get("locale") ?? "ar") as "ar" | "en";

    if (!(file instanceof File)) {
      return NextResponse.json({ code: "UPLOAD_REQUIRED", error: "No image" }, { status: 400 });
    }

    const result = await runDesignGeneration({
      file,
      styleId,
      spaceType,
      roomType,
      locale,
      ownerKey: session.id,
      guestSessionId: session.id,
      includeAnalysis: slot === "preview",
    });

    if (slot === "preview") {
      await db.designGuestSession.update({
        where: { id: session.id },
        data: { previewUsed: true },
      });
    } else {
      await db.designGuestSession.update({
        where: { id: session.id },
        data: { bonusUsed: { increment: 1 } },
      });
    }

    const updated = await db.designGuestSession.findUnique({ where: { id: session.id } });
    const bonusRemaining = updated ? remainingBonusCredits(updated) : 0;

    const response = NextResponse.json({
      ...result,
      isPreview: true,
      guest: {
        previewUsed: true,
        bonusRemaining,
        needsQualification: slot === "preview" && bonusRemaining === 0,
      },
    });

    response.cookies.set(GUEST_COOKIE, session.guestToken, guestCookieOptions());
    return response;
  } catch (error) {
    logServerError("design guest generate", error);
    const mapped = mapGenerationError(error);
    return NextResponse.json(
      { code: mapped.code, error: "Generation failed", detail: mapped.detail },
      { status: mapped.status }
    );
  }
}
