import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { generateDesignAfter } from "@/modules/design/server/design-ai.service";
import { deductCredit } from "@/modules/design/server/design-credits.service";
import { saveDesignImage } from "@/modules/design/server/design-storage";
import { getStyleById } from "@/modules/design/lib/styles";
import type { SpaceType } from "@/modules/design/lib/styles";
import { db } from "@/shared/lib/db";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { code: "SIGN_IN_REQUIRED", error: "Sign in required" },
        { status: 401 }
      );
    }

    const deducted = await deductCredit(session.user.id);
    if (!deducted.ok) {
      return NextResponse.json(
        { code: "CREDITS_EXHAUSTED", error: "No credits left" },
        { status: 402 }
      );
    }

    const form = await req.formData();
    const file = form.get("image");
    const styleId = String(form.get("styleId") ?? "");
    const spaceType = String(form.get("spaceType") ?? "interior") as SpaceType;
    const roomType = String(form.get("roomType") ?? "living");
    const locale = String(form.get("locale") ?? "ar") as "ar" | "en";

    if (!(file instanceof File)) {
      return NextResponse.json({ code: "UPLOAD_REQUIRED", error: "No image" }, { status: 400 });
    }

    if (!getStyleById(styleId)) {
      return NextResponse.json({ code: "INVALID_STYLE", error: "Invalid style" }, { status: 400 });
    }

    const beforeUrl = await saveDesignImage(file, session.user.id);

    const { afterUrl, isMock } = await generateDesignAfter({
      beforeUrl,
      styleId,
      spaceType,
      roomType,
      locale,
    });

    const generation = await db.designGeneration.create({
      data: {
        userId: session.user.id,
        spaceType,
        roomType,
        styleId,
        beforeUrl,
        afterUrl,
        isMock,
        locale,
      },
    });

    return NextResponse.json({
      id: generation.id,
      beforeUrl,
      afterUrl,
      isMock,
      creditsRemaining: deducted.balance,
    });
  } catch (error) {
    logServerError("design generate", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    if (message === "FILE_TOO_LARGE") {
      return NextResponse.json({ code: "FILE_TOO_LARGE", error: "File too large" }, { status: 400 });
    }
    if (message === "UNSUPPORTED_TYPE") {
      return NextResponse.json({ code: "UNSUPPORTED_TYPE", error: "Unsupported type" }, { status: 400 });
    }
    return NextResponse.json({ code: "GENERIC", error: "Generation failed" }, { status: 500 });
  }
}
