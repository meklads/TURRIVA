import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { generateDesignAfter } from "@/modules/design/server/design-ai.service";
import { deductCredit, refundCredit } from "@/modules/design/server/design-credits.service";
import { saveDesignImage } from "@/modules/design/server/design-storage";
import { getStyleById } from "@/modules/design/lib/styles";
import type { SpaceType } from "@/modules/design/lib/styles";
import { analyzeDesignMaterials } from "@/modules/design/server/design-materials.service";
import { analyzeDesignFurniture } from "@/modules/design/server/design-furniture.service";
import { buildWatermarkedPreview } from "@/modules/design/server/design-preview.service";
import { saveDesignBuffer } from "@/modules/design/server/design-storage";
import { isDesignCity } from "@/modules/design/lib/city";
import { db } from "@/shared/lib/db";
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
    const spaceType = String(form.get("spaceType") ?? "interior") as SpaceType;
    const roomType = String(form.get("roomType") ?? "living");
    const locale = String(form.get("locale") ?? "ar") as "ar" | "en";
    const cityRaw = String(form.get("city") ?? "");

    if (!(file instanceof File)) {
      return NextResponse.json({ code: "UPLOAD_REQUIRED", error: "No image" }, { status: 400 });
    }

    if (!getStyleById(styleId)) {
      return NextResponse.json({ code: "INVALID_STYLE", error: "Invalid style" }, { status: 400 });
    }

    if (!isDesignCity(cityRaw)) {
      return NextResponse.json({ code: "CITY_REQUIRED", error: "City required" }, { status: 400 });
    }
    const city = cityRaw;

    const deducted = await deductCredit(userId);
    if (!deducted.ok) {
      return NextResponse.json(
        { code: "CREDITS_EXHAUSTED", error: "No credits left" },
        { status: 402 }
      );
    }
    creditDeducted = true;

    const beforeUrl = await saveDesignImage(file, userId);

    const { afterUrl, isMock } = await generateDesignAfter({
      beforeUrl,
      styleId,
      spaceType,
      roomType,
      locale,
      userId,
    });

    const previewBuffer = await buildWatermarkedPreview(afterUrl);
    const previewUrl = await saveDesignBuffer(previewBuffer, "image/jpeg", `${userId}-after`);

    const [{ materials, isAiDetected }, { furniture, isAiDetected: furnitureAi }] =
      await Promise.all([
        analyzeDesignMaterials({ afterUrl: previewUrl, styleId, spaceType, roomType, locale }),
        analyzeDesignFurniture({ afterUrl: previewUrl, styleId, spaceType, roomType, locale }),
      ]);

    const generation = await db.designGeneration.create({
      data: {
        userId,
        spaceType,
        roomType,
        styleId,
        beforeUrl,
        afterUrl: previewUrl,
        afterUrlSource: afterUrl,
        city,
        isMock,
        locale,
        materials: materials as object,
        materialsAiDetected: isAiDetected,
        furniture: furniture as object,
        furnitureAiDetected: furnitureAi,
      },
    });

    return NextResponse.json({
      id: generation.id,
      beforeUrl,
      afterUrl: previewUrl,
      isMock,
      city,
      isPreview: true,
      creditsRemaining: deducted.balance,
      materials,
      materialsAiDetected: isAiDetected,
      furniture,
      furnitureAiDetected: furnitureAi,
    });
  } catch (error) {
    if (creditDeducted && userId) {
      try {
        await refundCredit(userId);
      } catch {
        // best-effort refund
      }
    }
    logServerError("design generate", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    if (message === "FILE_TOO_LARGE") {
      return NextResponse.json({ code: "FILE_TOO_LARGE", error: "File too large" }, { status: 400 });
    }
    if (message === "UNSUPPORTED_TYPE") {
      return NextResponse.json({ code: "UNSUPPORTED_TYPE", error: "Unsupported type" }, { status: 400 });
    }
    if (message === "FETCH_IMAGE_FAILED") {
      return NextResponse.json({ code: "IMAGE_FETCH_FAILED", error: "Image processing failed" }, { status: 500 });
    }
    return NextResponse.json({ code: "GENERIC", error: "Generation failed" }, { status: 500 });
  }
}
