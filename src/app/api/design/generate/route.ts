import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { generateDesignAfter } from "@/modules/design/server/design-ai.service";
import { deductCredit, refundCredit } from "@/modules/design/server/design-credits.service";
import { saveDesignImage } from "@/modules/design/server/design-storage";
import { getStyleById, normalizeSpaceType } from "@/modules/design/lib/styles";
import { analyzeDesignMaterials } from "@/modules/design/server/design-materials.service";
import { analyzeDesignFurniture } from "@/modules/design/server/design-furniture.service";
import { buildWatermarkedPreviewFromBuffer } from "@/modules/design/server/design-preview.service";
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
    const spaceType = normalizeSpaceType(String(form.get("spaceType") ?? "interior"));
    const roomType = String(form.get("roomType") ?? "villa");
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
    const { afterUrl, afterBuffer, isMock } = await generateDesignAfter({
      beforeUrl,
      styleId,
      spaceType,
      roomType,
      locale,
      userId,
    });

    const previewBuffer = await buildWatermarkedPreviewFromBuffer(afterBuffer);
    const previewUrl = await saveDesignBuffer(previewBuffer, "image/jpeg", `${userId}-after`);

    let materials: Awaited<ReturnType<typeof analyzeDesignMaterials>>["materials"] = [];
    let materialsAiDetected = false;
    let furniture: Awaited<ReturnType<typeof analyzeDesignFurniture>>["furniture"] = [];
    let furnitureAiDetected = false;

    try {
      const materialResult = await analyzeDesignMaterials({
        afterUrl: previewUrl,
        styleId,
        spaceType,
        roomType,
        locale,
      });
      materials = materialResult.materials;
      materialsAiDetected = materialResult.isAiDetected;
    } catch (error) {
      logServerError("design materials", error);
    }

    try {
      const furnitureResult = await analyzeDesignFurniture({
        afterUrl: previewUrl,
        styleId,
        spaceType,
        roomType,
        locale,
      });
      furniture = furnitureResult.furniture;
      furnitureAiDetected = furnitureResult.isAiDetected;
    } catch (error) {
      logServerError("design furniture", error);
    }

    let generationId: string | null = null;
    try {
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
          materialsAiDetected,
          furniture: furniture as object,
          furnitureAiDetected,
        },
      });
      generationId = generation.id;
    } catch (error) {
      logServerError("design generation save", error);
    }

    return NextResponse.json({
      id: generationId,
      beforeUrl,
      afterUrl: previewUrl,
      isMock,
      city,
      isPreview: true,
      creditsRemaining: deducted.balance,
      materials,
      materialsAiDetected,
      furniture,
      furnitureAiDetected,
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
