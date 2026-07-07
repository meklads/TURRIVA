import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/modules/auth/server/session";
import { generateDesignAfter } from "@/modules/design/server/design-ai.service";
import { deductCredit, refundCredit } from "@/modules/design/server/design-credits.service";
import {
  resolveDesignImageMime,
  toDataUrl,
  trySaveDesignBuffer,
  trySaveDesignImageBuffer,
} from "@/modules/design/server/design-storage";
import { getStyleById, normalizeSpaceType } from "@/modules/design/lib/styles";
import { analyzeDesignMaterials } from "@/modules/design/server/design-materials.service";
import { analyzeDesignFurniture } from "@/modules/design/server/design-furniture.service";
import {
  buildDisplayPreviewFromBuffer,
  buildWatermarkedPreviewFromBuffer,
} from "@/modules/design/server/design-preview.service";
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

    if (!(file instanceof File)) {
      return NextResponse.json({ code: "UPLOAD_REQUIRED", error: "No image" }, { status: 400 });
    }

    if (!getStyleById(styleId)) {
      return NextResponse.json({ code: "INVALID_STYLE", error: "Invalid style" }, { status: 400 });
    }

    const beforeBuffer = Buffer.from(await file.arrayBuffer());
    let beforeMime: string;
    try {
      beforeMime = resolveDesignImageMime(file, beforeBuffer);
    } catch (error) {
      const message = error instanceof Error ? error.message : "UNSUPPORTED_TYPE";
      if (message === "UNSUPPORTED_TYPE") {
        return NextResponse.json({ code: "UNSUPPORTED_TYPE", error: "Unsupported type" }, { status: 400 });
      }
      throw error;
    }

    if (beforeBuffer.length > 8 * 1024 * 1024) {
      return NextResponse.json({ code: "FILE_TOO_LARGE", error: "File too large" }, { status: 400 });
    }

    const deducted = await deductCredit(userId);
    if (!deducted.ok) {
      return NextResponse.json(
        { code: "CREDITS_EXHAUSTED", error: "No credits left" },
        { status: 402 }
      );
    }
    creditDeducted = true;

    const { afterUrl, afterBuffer, isMock } = await generateDesignAfter({
      beforeUrl: toDataUrl(beforeBuffer, beforeMime),
      beforeBuffer,
      styleId,
      spaceType,
      roomType,
      locale,
      userId,
    });

    const [beforePreviewBuffer, previewBuffer] = await Promise.all([
      buildDisplayPreviewFromBuffer(beforeBuffer),
      buildWatermarkedPreviewFromBuffer(afterBuffer),
    ]);
    const beforeDisplayUrl = toDataUrl(beforePreviewBuffer, "image/jpeg");
    const afterDisplayUrl = toDataUrl(previewBuffer, "image/jpeg");

    const [persistedBeforeUrl, persistedAfterUrl] = await Promise.all([
      trySaveDesignImageBuffer(beforeBuffer, beforeMime, userId),
      trySaveDesignBuffer(previewBuffer, "image/jpeg", `${userId}-after`),
    ]);

    let materials: Awaited<ReturnType<typeof analyzeDesignMaterials>>["materials"] = [];
    let materialsAiDetected = false;
    let furniture: Awaited<ReturnType<typeof analyzeDesignFurniture>>["furniture"] = [];
    let furnitureAiDetected = false;

    const analysisAfterUrl = persistedAfterUrl ?? afterDisplayUrl;

    try {
      const materialResult = await analyzeDesignMaterials({
        afterUrl: analysisAfterUrl,
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
        afterUrl: analysisAfterUrl,
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
          beforeUrl: persistedBeforeUrl ?? beforeDisplayUrl,
          afterUrl: persistedAfterUrl ?? afterDisplayUrl,
          afterUrlSource: afterUrl,
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
      beforeUrl: beforeDisplayUrl,
      afterUrl: afterDisplayUrl,
      isMock,
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
    const prismaCode =
      error && typeof error === "object" && "code" in error
        ? String((error as { code: string }).code)
        : null;
    if (prismaCode === "P2021" || prismaCode === "P2022") {
      return NextResponse.json(
        {
          code: "SCHEMA_NOT_READY",
          error: "Design tables missing — redeploy or run prisma db push",
          detail: message,
        },
        { status: 503 }
      );
    }
    if (message === "FILE_TOO_LARGE") {
      return NextResponse.json({ code: "FILE_TOO_LARGE", error: "File too large" }, { status: 400 });
    }
    if (message === "UNSUPPORTED_TYPE") {
      return NextResponse.json({ code: "UNSUPPORTED_TYPE", error: "Unsupported type" }, { status: 400 });
    }
    if (message === "FETCH_IMAGE_FAILED") {
      return NextResponse.json({ code: "IMAGE_FETCH_FAILED", error: "Image processing failed" }, { status: 500 });
    }
    if (message === "STORAGE_FAILED") {
      return NextResponse.json({ code: "STORAGE_FAILED", error: "Storage failed" }, { status: 500 });
    }
    if (message === "OPENAI_NOT_CONFIGURED" || message === "AI_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          code: "AI_NOT_CONFIGURED",
          error: "Design AI is not configured on the server",
        },
        { status: 503 }
      );
    }
    if (message === "GEMINI_NOT_CONFIGURED") {
      return NextResponse.json(
        {
          code: "GEMINI_NOT_CONFIGURED",
          error: "Gemini API key is not configured",
        },
        { status: 503 }
      );
    }
    if (message.startsWith("GEMINI_GENERATION_FAILED")) {
      const detail = message.slice("GEMINI_GENERATION_FAILED:".length) || "Unknown Gemini error";
      return NextResponse.json(
        {
          code: "GEMINI_GENERATION_FAILED",
          error: "Gemini redesign failed",
          detail,
        },
        { status: 502 }
      );
    }
    if (message.startsWith("OPENAI_GENERATION_FAILED")) {
      const detail = message.slice("OPENAI_GENERATION_FAILED:".length) || "Unknown OpenAI error";
      return NextResponse.json(
        {
          code: "OPENAI_GENERATION_FAILED",
          error: "AI redesign failed",
          detail,
        },
        { status: 502 }
      );
    }
    return NextResponse.json(
      {
        code: "GENERIC",
        error: "Generation failed",
        detail: message,
      },
      { status: 500 }
    );
  }
}
