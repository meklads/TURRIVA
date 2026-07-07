"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Building2,
  Home,
  LayoutGrid,
  Sparkles,
  TreePine,
  Upload,
} from "lucide-react";
import { DESIGN_STYLES, ROOM_TYPES, type SpaceType } from "@/modules/design/lib/styles";
import { DesignBeforeAfter } from "./design-before-after";
import { DesignConsultationModal } from "./design-consultation-modal";
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
  const [roomType, setRoomType] = useState("living");
  const [styleId, setStyleId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);

  const rooms = ROOM_TYPES[spaceType];

  const loadCredits = useCallback(async () => {
    const res = await fetch("/api/design/credits");
    if (res.ok) {
      const data = await res.json();
      setCredits(data.signedIn ? data.balance : null);
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
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "SIGN_IN_REQUIRED") setError(messages.errors.signInRequired);
        else if (data.code === "CREDITS_EXHAUSTED") setError(messages.errors.creditsExhausted);
        else setError(messages.errors.generic);
        return;
      }

      setResult({
        beforeUrl: data.beforeUrl,
        afterUrl: data.afterUrl,
        isMock: data.isMock,
        materials: data.materials ?? [],
        materialsAiDetected: data.materialsAiDetected ?? false,
        furniture: data.furniture ?? [],
        furnitureAiDetected: data.furnitureAiDetected ?? false,
      });
      setCredits(data.creditsRemaining);
    } catch {
      setError(messages.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  const creditsLabel =
    credits !== null
      ? messages.studio.creditsLeft.replace("{count}", String(credits))
      : messages.studio.signInForCredits;

  const spaceTabs: { id: SpaceType; label: string; icon: typeof Home }[] = [
    { id: "interior", label: messages.studio.spaceInterior, icon: Home },
    { id: "facade", label: messages.studio.spaceFacade, icon: Building2 },
    { id: "yard", label: messages.studio.spaceYard, icon: TreePine },
  ];

  return (
    <>
      <section id="studio" className="design-studio">
        <div className="design-studio-grid">
          <div className="design-studio-styles">
            <p className="design-studio-section-title">{messages.studio.styleTitle}</p>
            <div className="design-style-grid">
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
          </div>

          <div className="design-studio-sidebar">
            <p className="design-studio-prompt">{messages.studio.prompt}</p>

            <div className="design-space-tabs">
              {spaceTabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`design-space-tab${spaceType === id ? " design-space-tab--active" : ""}`}
                  onClick={() => setSpaceType(id)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>

            <label className="design-studio-section-title mt-3 block">{messages.studio.roomType}</label>
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
              className="design-upload-zone"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files[0];
                if (f) onFile(f);
              }}
            >
              <Upload className="mx-auto h-6 w-6 text-gray-400" />
              <p className="mt-2 text-sm font-medium">{messages.studio.uploadTitle}</p>
              <p className="mt-1 text-xs text-gray-500">{messages.studio.uploadHint}</p>
              <button
                type="button"
                className="design-btn design-btn-dark mt-3"
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

            {previewUrl && (
              <div className="design-upload-preview">
                <img src={previewUrl} alt="" />
              </div>
            )}

            <div
              className={`design-credits-pill mt-4${credits === 0 ? " design-credits-pill--low" : ""}`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {creditsLabel}
            </div>

            {status === "unauthenticated" ? (
              <Link href="/login?callbackUrl=/#studio" className="design-btn design-btn-primary w-full">
                {messages.studio.signInForCredits}
              </Link>
            ) : (
              <button
                type="button"
                className="design-btn design-btn-primary w-full"
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
          </div>
        </div>

        <div className="design-result">
          {loading && (
            <div className="design-generating-overlay">
              <span className="design-spinner" />
              <p>{messages.studio.generating}</p>
            </div>
          )}

          {!loading && result && (
            <>
              <DesignBeforeAfter
                beforeSrc={result.beforeUrl}
                afterSrc={result.afterUrl}
                beforeLabel={messages.studio.before}
                afterLabel={messages.studio.after}
              />
              {result.isMock && <p className="design-mock-notice">{messages.studio.mockNotice}</p>}

              {result.materials.length > 0 && (
                <DesignMaterialsBreakdown
                  materials={result.materials}
                  isAiDetected={result.materialsAiDetected}
                  messages={messages}
                  locale={locale}
                  onRequestQuote={() => setConsultOpen(true)}
                />
              )}

              {result.furniture.length > 0 && (
                <DesignFurnitureFinder
                  afterImageUrl={result.afterUrl}
                  items={result.furniture}
                  isAiDetected={result.furnitureAiDetected}
                  messages={messages}
                  locale={locale}
                  onRequestQuote={() => setConsultOpen(true)}
                />
              )}

              <div className="mt-4 flex flex-wrap gap-2">
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
                  onClick={() => setConsultOpen(true)}
                >
                  {messages.consultation.executionCta}
                </button>
                <button
                  type="button"
                  className="design-btn design-btn-primary"
                  onClick={() => setConsultOpen(true)}
                >
                  {messages.consultation.cta}
                </button>
              </div>
            </>
          )}

          {!loading && !result && (
            <div className="design-generating-overlay min-h-[12rem] text-center">
              <LayoutGrid className="h-10 w-10 text-gray-300" />
              <p className="max-w-sm text-sm">
                {locale === "ar"
                  ? "ارفع صورة واختر نمطاً ثم اضغط توليد التصميم"
                  : "Upload a photo, pick a style, then generate"}
              </p>
            </div>
          )}
        </div>
      </section>

      <DesignConsultationModal
        messages={messages}
        locale={locale}
        open={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
    </>
  );
}
