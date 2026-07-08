import { generateDesignAfter } from "./design-ai.service";
import { analyzeDesignFurniture } from "./design-furniture.service";
import { analyzeDesignMaterials } from "./design-materials.service";
import {
  buildDisplayPreviewFromBuffer,
  buildWatermarkedPreviewFromBuffer,
} from "./design-preview.service";
import {
  resolveDesignImageMime,
  toDataUrl,
  trySaveDesignBuffer,
  trySaveDesignImageBuffer,
} from "./design-storage";
import { getStyleById, normalizeSpaceType } from "../lib/styles";
import { db } from "@/shared/lib/db";
import { logServerError } from "@/shared/lib/usage-events";

export type DesignGenerateParams = {
  file: File;
  styleId: string;
  spaceType: string;
  roomType: string;
  locale: "ar" | "en";
  ownerKey: string;
  userId?: string | null;
  guestSessionId?: string | null;
  includeAnalysis?: boolean;
};

export type DesignGenerateResult = {
  id: string | null;
  beforeUrl: string;
  afterUrl: string;
  isMock: boolean;
  materials: Awaited<ReturnType<typeof analyzeDesignMaterials>>["materials"];
  materialsAiDetected: boolean;
  furniture: Awaited<ReturnType<typeof analyzeDesignFurniture>>["furniture"];
  furnitureAiDetected: boolean;
};

export async function runDesignGeneration(
  params: DesignGenerateParams
): Promise<DesignGenerateResult> {
  const { file, styleId, roomType, locale, ownerKey, userId, guestSessionId } = params;
  const spaceType = normalizeSpaceType(params.spaceType);

  if (!getStyleById(styleId)) {
    throw new Error("INVALID_STYLE");
  }

  const beforeBuffer = Buffer.from(await file.arrayBuffer());
  let beforeMime: string;
  try {
    beforeMime = resolveDesignImageMime(file, beforeBuffer);
  } catch (error) {
    if (error instanceof Error && error.message === "UNSUPPORTED_TYPE") throw error;
    throw error;
  }

  if (beforeBuffer.length > 8 * 1024 * 1024) {
    throw new Error("FILE_TOO_LARGE");
  }

  const { afterUrl, afterBuffer, isMock } = await generateDesignAfter({
    beforeUrl: toDataUrl(beforeBuffer, beforeMime),
    beforeBuffer,
    styleId,
    spaceType,
    roomType,
    locale,
    userId: ownerKey,
  });

  const [beforePreviewBuffer, previewBuffer] = await Promise.all([
    buildDisplayPreviewFromBuffer(beforeBuffer),
    buildWatermarkedPreviewFromBuffer(afterBuffer),
  ]);
  const beforeDisplayUrl = toDataUrl(beforePreviewBuffer, "image/jpeg");
  const afterDisplayUrl = toDataUrl(previewBuffer, "image/jpeg");

  const storagePrefix = userId ?? guestSessionId ?? ownerKey;
  const [persistedBeforeUrl, persistedAfterUrl] = await Promise.all([
    trySaveDesignImageBuffer(beforeBuffer, beforeMime, storagePrefix),
    trySaveDesignBuffer(previewBuffer, "image/jpeg", `${storagePrefix}-after`),
  ]);

  let materials: DesignGenerateResult["materials"] = [];
  let materialsAiDetected = false;
  let furniture: DesignGenerateResult["furniture"] = [];
  let furnitureAiDetected = false;

  if (params.includeAnalysis !== false) {
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
  }

  let generationId: string | null = null;
  try {
    const generation = await db.designGeneration.create({
      data: {
        userId: userId ?? null,
        guestSessionId: guestSessionId ?? null,
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

  return {
    id: generationId,
    beforeUrl: beforeDisplayUrl,
    afterUrl: afterDisplayUrl,
    isMock,
    materials,
    materialsAiDetected,
    furniture,
    furnitureAiDetected,
  };
}

export function mapGenerationError(error: unknown): { status: number; code: string; detail?: string } {
  const message = error instanceof Error ? error.message : "Unknown error";
  const prismaCode =
    error && typeof error === "object" && "code" in error
      ? String((error as { code: string }).code)
      : null;

  if (prismaCode === "P2021" || prismaCode === "P2022") {
    return { status: 503, code: "SCHEMA_NOT_READY", detail: message };
  }
  if (message === "FILE_TOO_LARGE") return { status: 400, code: "FILE_TOO_LARGE" };
  if (message === "UNSUPPORTED_TYPE") return { status: 400, code: "UNSUPPORTED_TYPE" };
  if (message === "INVALID_STYLE") return { status: 400, code: "INVALID_STYLE" };
  if (message === "FETCH_IMAGE_FAILED") return { status: 500, code: "IMAGE_FETCH_FAILED" };
  if (message === "STORAGE_FAILED") return { status: 500, code: "STORAGE_FAILED" };
  if (message === "OPENAI_NOT_CONFIGURED" || message === "AI_NOT_CONFIGURED") {
    return { status: 503, code: "AI_NOT_CONFIGURED" };
  }
  if (message === "GEMINI_NOT_CONFIGURED") return { status: 503, code: "GEMINI_NOT_CONFIGURED" };
  if (message.startsWith("GEMINI_GENERATION_FAILED")) {
    return {
      status: 502,
      code: "GEMINI_GENERATION_FAILED",
      detail: message.slice("GEMINI_GENERATION_FAILED:".length),
    };
  }
  if (message.startsWith("OPENAI_GENERATION_FAILED")) {
    return {
      status: 502,
      code: "OPENAI_GENERATION_FAILED",
      detail: message.slice("OPENAI_GENERATION_FAILED:".length),
    };
  }
  return { status: 500, code: "GENERIC", detail: message };
}
