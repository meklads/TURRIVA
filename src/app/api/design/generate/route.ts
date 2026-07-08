import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { deductCredit, refundCredit } from "@/modules/design/server/design-credits.service";
import { getStyleById } from "@/modules/design/lib/styles";
import { mapGenerationError, runDesignGeneration } from "@/modules/design/server/design-generate-core";
import { logServerError } from "@/shared/lib/usage-events";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  let userId: string | null = null;
  let creditDeducted = false;

  try {
    const session = await getSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { code: "SIGN_IN_REQUIRED", error: "Sign in required" },
        { status: 401 }
      );
    }
    userId = session.user.id;

    const form = await req.formData();
    const file = form.get("image");
    const styleId = String(form.get("styleId") ?? "");
    const spaceType = String(form.get("spaceType") ?? "interior");
    const roomType = String(form.get("roomType") ?? "villa");
    const locale = String(form.get("locale") ?? "ar") as "ar" | "en";

    if (!(file instanceof File)) {
      return NextResponse.json({ code: "UPLOAD_REQUIRED", error: "No image" }, { status: 400 });
    }

    if (!getStyleById(styleId)) {
      return NextResponse.json({ code: "INVALID_STYLE", error: "Invalid style" }, { status: 400 });
    }

    const deducted = await deductCredit(userId);
    if (!deducted.ok) {
      return NextResponse.json(
        { code: "CREDITS_EXHAUSTED", error: "No credits left" },
        { status: 402 }
      );
    }
    creditDeducted = true;

    const result = await runDesignGeneration({
      file,
      styleId,
      spaceType,
      roomType,
      locale,
      ownerKey: userId,
      userId,
    });

    return NextResponse.json({
      ...result,
      isPreview: true,
      creditsRemaining: deducted.balance,
    });
  } catch (error) {
    if (creditDeducted && userId) {
      try {
        await refundCredit(userId);
      } catch {
        // best-effort
      }
    }
    logServerError("design generate", error);
    const mapped = mapGenerationError(error);
    return NextResponse.json(
      { code: mapped.code, error: "Generation failed", detail: mapped.detail },
      { status: mapped.status }
    );
  }
}
