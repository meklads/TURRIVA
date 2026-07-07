"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Building2,
  Home,
  LayoutGrid,
  Sparkles,
  Store,
  Upload,
} from "lucide-react";
import { DESIGN_STYLES, ROOM_TYPES, type SpaceType } from "@/modules/design/lib/styles";
import { DesignBeforeAfter } from "./design-before-after";
import { DesignConsultationModal } from "./design-consultation-modal";
import { DesignBespokeUpsell } from "./design-bespoke-upsell";
import type { ConsultationInterest } from "@/modules/design/lib/consultation-interest";
import { DesignMaterialsBreakdown } from "./design-materials-breakdown";
import { DesignFurnitureFinder } from "./design-furniture-finder";
import type { DetectedMaterial } from "@/modules/design/server/design-materials.service";
import type { DetectedFurniture } from "@/modules/design/server/design-furniture.service";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

type Result = {
  id: string;
  beforeUrl: string;
  afterUrl: string;
  isMock: boolean;
  materials: DetectedMaterial[];
  materialsAiDetected: boolean;
  furniture: DetectedFurniture[];
  furnitureAiDetected: boolean;
};

export function DesignStudio({ messages, locale }: Props) {
  const { data: session, status } = useSession();
  const fileRef = useRef<HTMLInputElement>(null);

  const [spaceType, setSpaceType] = useState<SpaceType>("interior");
  const [roomType, setRoomType] = useState("villa");
  const [styleId, setStyleId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [creditsUnlimited, setCreditsUnlimited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultInterest, setConsultInterest] = useState<ConsultationInterest>("execution");

  const openConsultation = (interest: ConsultationInterest = "execution") => {
    setConsultInterest(interest);
    setConsultOpen(true);
  };

  const rooms = ROOM_TYPES[spaceType];

  const loadCredits = useCallback(async () => {
    const res = await fetch("/api/design/credits");
    if (res.ok) {
      const data = await res.json();
      setCredits(data.signedIn ? data.balance : null);
      setCreditsUnlimited(Boolean(data.unlimited));
    }
  }, []);

  useEffect(() => {
    loadCredits();
  }, [loadCredits, session]);

  useEffect(() => {
    setRoomType(rooms[0]?.id ?? "living");
  }, [spaceType, rooms]);

  const onFile = (f: File) => {
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setResult(null);
    setError(null);
  };

  const generate = async () => {
    if (!file) {
      setError(messages.errors.uploadRequired);
      return;
    }
    if (!styleId) {
      setError(messages.errors.styleRequired);
      return;
    }
    if (!session?.user) {
      setError(messages.errors.signInRequired);
      return;
    }

    setLoading(true);
    setError(null);

    const form = new FormData();
    form.append("image", file);
    form.append("styleId", styleId);
    form.append("spaceType", spaceType);
    form.append("roomType", roomType);
    form.append("locale", locale);

    try {
      const res = await fetch("/api/design/generate", { method: "POST", body: form });
      let data: Record<string, unknown> = {};
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("[design-studio] non-JSON generate response", parseError);
        setError(messages.errors.generic);
        await loadCredits();
        return;
      }

      if (!res.ok) {
        const detail = typeof data.detail === "string" ? data.detail : null;
        if (data.code === "SIGN_IN_REQUIRED") setError(messages.errors.signInRequired);
        else if (data.code === "CREDITS_EXHAUSTED") setError(messages.errors.creditsExhausted);
        else if (data.code === "FILE_TOO_LARGE") setError(messages.errors.fileTooLarge);
        else if (data.code === "UNSUPPORTED_TYPE") setError(messages.errors.unsupportedType);
        else if (data.code === "IMAGE_FETCH_FAILED" || data.code === "STORAGE_FAILED") {
          setError(messages.errors.imageProcessing);
        } else if (data.code === "OPENAI_NOT_CONFIGURED") {
          setError(messages.errors.openaiNotConfigured);
        } else if (data.code === "OPENAI_GENERATION_FAILED") {
          setError(messages.errors.openaiGenerationFailed);
        } else if (detail && process.env.NODE_ENV === "development") {
          setError(detail);
        } else setError(messages.errors.generic);
        await loadCredits();
        return;
      }

      if (!data.afterUrl || !data.beforeUrl) {
        setError(messages.errors.generic);
        await loadCredits();
        return;
      }

      setResult({
        id: String(data.id ?? `local-${Date.now()}`),
        beforeUrl: String(data.beforeUrl),
        afterUrl: String(data.afterUrl),
        isMock: Boolean(data.isMock),
        materials: (data.materials as Result["materials"]) ?? [],
        materialsAiDetected: Boolean(data.materialsAiDetected),
        furniture: (data.furniture as Result["furniture"]) ?? [],
        furnitureAiDetected: Boolean(data.furnitureAiDetected),
      });
      if (typeof data.creditsRemaining === "number") {
        setCredits(data.creditsRemaining);
      }
    } catch (networkError) {
      console.error("[design-studio] generate request failed", networkError);
      setError(messages.errors.generic);
      await loadCredits();
    } finally {
      setLoading(false);
    }
  };

  const creditsLabel = creditsUnlimited
    ? messages.studio.creditsUnlimited
    : credits !== null
      ? messages.studio.creditsLeft.replace("{count}", String(credits))
      : messages.studio.signInForCredits;

  const spaceTabs: {
    id: SpaceType;
    label: string;
    decor: string;
    icon: typeof Home;
  }[] = [
    {
      id: "interior",
      label: messages.studio.spaceInterior,
      decor: messages.studio.decorFixed,
      icon: Home,
    },
    {
      id: "exterior",
      label: messages.studio.spaceExterior,
      decor: messages.studio.decorFixed,
      icon: Building2,
    },
    {
      id: "booth",
      label: messages.studio.spaceBooth,
      decor: messages.studio.decorAdvertising,
      icon: Store,
    },
  ];

  const spacePrompt =
    spaceType === "interior"
      ? messages.studio.promptInterior
      : spaceType === "exterior"
        ? messages.studio.promptExterior
        : messages.studio.promptBooth;

  const uploadHint =
    spaceType === "interior"
      ? messages.studio.uploadHintInterior
      : spaceType === "exterior"
        ? messages.studio.uploadHintExterior
        : messages.studio.uploadHintBooth;

  const projectTypeLabel =
    spaceType === "booth" ? messages.studio.boothType : messages.studio.projectType;

  const emptyHint =
    locale === "ar"
      ? "اختر النوع، ارفع صورة، واختر نمطاً ثم اضغط توليد التصميم"
      : "Pick a type, upload a photo, choose a style, then generate";

  return (
    <>
      <section id="studio" className="design-studio">
        <div className="design-studio-layout">
          <div className="design-studio-canvas">
            {loading && (
              <div className="design-generating-overlay design-studio-canvas__state">
                <span className="design-spinner" />
                <p>{messages.studio.generating}</p>
              </div>
            )}

            {!loading && result && (
              <div className="design-studio-canvas__result">
                <DesignBeforeAfter
                  beforeSrc={result.beforeUrl}
                  afterSrc={result.afterUrl}
                  beforeLabel={messages.studio.before}
                  afterLabel={messages.studio.after}
                  compareHint={messages.studio.compareHint}
                  protectAfter
                  previewBadge={messages.studio.previewBadge}
                />
                {result.isMock && (
                  <p className="design-mock-notice design-mock-notice--inline">{messages.studio.mockNotice}</p>
                )}
              </div>
            )}

            {!loading && !result && previewUrl && (
              <div className="design-studio-canvas__preview">
                <img src={previewUrl} alt="" />
                <span className="design-studio-canvas__preview-label">{messages.studio.before}</span>
              </div>
            )}

            {!loading && !result && !previewUrl && (
              <div className="design-generating-overlay design-studio-canvas__state">
                <LayoutGrid className="h-10 w-10 text-gray-300" />
                <p className="max-w-sm text-sm">{emptyHint}</p>
              </div>
            )}
          </div>

          <aside className="design-studio-panel">
            <p className="design-studio-prompt">{spacePrompt}</p>

            <div className="design-space-tabs">
              {spaceTabs.map(({ id, label, decor, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`design-space-tab${spaceType === id ? " design-space-tab--active" : ""}`}
                  onClick={() => setSpaceType(id)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  <span className="design-space-tab__decor">{decor}</span>
                </button>
              ))}
            </div>

            <label className="design-studio-section-title">{projectTypeLabel}</label>
            <select
              className="design-select"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              {rooms.map((r) => (
                <option key={r.id} value={r.id}>
                  {locale === "ar" ? r.nameAr : r.nameEn}
                </option>
              ))}
            </select>

            <div
              className="design-upload-zone design-upload-zone--compact"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files[0];
                if (f) onFile(f);
              }}
            >
              <Upload className="mx-auto h-5 w-5 text-gray-400" />
              <p className="mt-1.5 text-xs font-medium">{messages.studio.uploadTitle}</p>
              <p className="mt-1 text-[0.65rem] leading-snug text-gray-500">{uploadHint}</p>
              <button
                type="button"
                className="design-btn design-btn-dark mt-2 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  fileRef.current?.click();
                }}
              >
                {messages.studio.uploadButton}
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onFile(f);
                }}
              />
            </div>

            <p className="design-studio-section-title mt-3">{messages.studio.styleTitle}</p>
            <div className="design-style-grid design-style-grid--compact">
              {DESIGN_STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  className={`design-style-card${styleId === style.id ? " design-style-card--active" : ""}`}
                  onClick={() => setStyleId(style.id)}
                >
                  <img src={style.preview} alt="" />
                  <span>{locale === "ar" ? style.nameAr : style.nameEn}</span>
                </button>
              ))}
            </div>

            <div
              className={`design-credits-pill mt-3${!creditsUnlimited && credits === 0 ? " design-credits-pill--low" : ""}${creditsUnlimited ? " design-credits-pill--unlimited" : ""}`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {creditsLabel}
            </div>

            {status === "unauthenticated" ? (
              <Link href="/login?callbackUrl=/#studio" className="design-btn design-btn-primary w-full mt-3">
                {messages.studio.signInForCredits}
              </Link>
            ) : (
              <button
                type="button"
                className="design-btn design-btn-primary w-full mt-3"
                disabled={loading}
                onClick={generate}
              >
                {loading ? (
                  <>
                    <span className="design-spinner" />
                    {messages.studio.generating}
                  </>
                ) : (
                  <>
                    <LayoutGrid className="h-4 w-4" />
                    {messages.studio.generate}
                  </>
                )}
              </button>
            )}

            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
          </aside>
        </div>

        {result && !loading && (
          <div className="design-studio-extras">
            <p className="design-preview-notice">{messages.studio.previewNotice}</p>
            {result.isMock && <p className="design-mock-notice">{messages.studio.mockNotice}</p>}
            <p className="design-execution-notice design-execution-notice--available">
              {messages.studio.executionContact}
            </p>

            <DesignBespokeUpsell
              messages={messages}
              onRequestBespoke={() => openConsultation("bespoke")}
            />

            <div className="design-studio-extras__actions">
              <button
                type="button"
                className="design-btn design-btn-outline"
                onClick={() => {
                  setResult(null);
                  setStyleId(null);
                }}
              >
                {messages.studio.tryAnother}
              </button>
              <button
                type="button"
                className="design-btn design-btn-execution"
                onClick={() => openConsultation("execution")}
              >
                {messages.studio.likeExecutionCta}
              </button>
            </div>

            {(result.materials.length > 0 || result.furniture.length > 0) && (
              <details className="design-studio-details">
                <summary>
                  {locale === "ar" ? "المواد والأثاث المقترحة" : "Suggested materials & furniture"}
                </summary>
                <div className="design-studio-details__body">
                  {result.materials.length > 0 && (
                    <DesignMaterialsBreakdown
                      materials={result.materials}
                      isAiDetected={result.materialsAiDetected}
                      messages={messages}
                      locale={locale}
                      onRequestQuote={() => openConsultation("execution")}
                    />
                  )}
                  {result.furniture.length > 0 && (
                    <DesignFurnitureFinder
                      afterImageUrl={result.afterUrl}
                      items={result.furniture}
                      isAiDetected={result.furnitureAiDetected}
                      messages={messages}
                      locale={locale}
                      onRequestQuote={() => openConsultation("execution")}
                    />
                  )}
                </div>
              </details>
            )}
          </div>
        )}
      </section>

      <DesignConsultationModal
        messages={messages}
        locale={locale}
        open={consultOpen}
        onClose={() => setConsultOpen(false)}
        initialInterest={consultInterest}
        generationId={result?.id ?? null}
      />
    </>
  );
}
