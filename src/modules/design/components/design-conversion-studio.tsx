"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Bath,
  ChefHat,
  Home,
  LayoutGrid,
  Sofa,
  Sun,
  Upload,
  Users,
} from "lucide-react";
import { DESIGN_STYLES } from "@/modules/design/lib/styles";
import {
  CONVERSION_SPACE_PRESETS,
  CONVERSION_STYLE_IDS,
} from "@/modules/design/lib/conversion-presets";
import { DesignBeforeAfter } from "./design-before-after";
import { DesignQualificationFlow } from "./design-qualification-flow";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

type Result = {
  id: string;
  beforeUrl: string;
  afterUrl: string;
};

type FlowPhase = "input" | "result" | "success" | "nurture";

const SPACE_ICONS: Record<string, typeof Home> = {
  living: Sofa,
  bedroom: Home,
  kitchen: ChefHat,
  bathroom: Bath,
  majlis: Users,
  exterior: Sun,
};

export function DesignConversionStudio({ messages, locale }: Props) {
  const c = messages.conversion;
  const fileRef = useRef<HTMLInputElement>(null);

  const [spaceId, setSpaceId] = useState("living");
  const [styleId, setStyleId] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [phase, setPhase] = useState<FlowPhase>("input");
  const [qualifyOpen, setQualifyOpen] = useState(false);
  const [bonusRemaining, setBonusRemaining] = useState(0);

  const spacePreset =
    CONVERSION_SPACE_PRESETS.find((s) => s.id === spaceId) ?? CONVERSION_SPACE_PRESETS[0]!;

  const styles = DESIGN_STYLES.filter((s) =>
    (CONVERSION_STYLE_IDS as readonly string[]).includes(s.id)
  );

  const loadGuestSession = useCallback(async () => {
    const res = await fetch("/api/design/guest/qualify");
    if (!res.ok) return;
    const data = await res.json();
    setBonusRemaining(data.bonusRemaining ?? 0);
  }, []);

  useEffect(() => {
    loadGuestSession();
  }, [loadGuestSession]);

  const onFile = (f: File) => {
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setResult(null);
    setPhase("input");
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

    setLoading(true);
    setError(null);

    const form = new FormData();
    form.append("image", file);
    form.append("styleId", styleId);
    form.append("spaceType", spacePreset.spaceType);
    form.append("roomType", spacePreset.roomType);
    form.append("locale", locale);

    try {
      const res = await fetch("/api/design/guest/generate", { method: "POST", body: form });
      const data = await res.json();

      if (!res.ok) {
        if (data.code === "GUEST_RATE_LIMIT") setError(c.errors.rateLimit);
        else if (data.code === "GUEST_CREDITS_EXHAUSTED") setError(c.errors.noCredits);
        else if (data.code === "AI_NOT_CONFIGURED" || data.code === "GEMINI_NOT_CONFIGURED")
          setError(messages.errors.openaiNotConfigured);
        else if (data.code === "GEMINI_GENERATION_FAILED" || data.code === "OPENAI_GENERATION_FAILED")
          setError(messages.errors.openaiGenerationFailed);
        else setError(messages.errors.generic);
        return;
      }

      setResult({
        id: String(data.id ?? `guest-${Date.now()}`),
        beforeUrl: String(data.beforeUrl),
        afterUrl: String(data.afterUrl),
      });
      setBonusRemaining(data.guest?.bonusRemaining ?? 0);
      setPhase("result");
    } catch {
      setError(messages.errors.generic);
    } finally {
      setLoading(false);
    }
  };

  const onQualifyComplete = ({ qualified, bonusCredits }: { qualified: boolean; bonusCredits: number }) => {
    setQualifyOpen(false);
    setBonusRemaining(bonusCredits);
    setPhase(qualified ? "success" : "nurture");
  };

  const resetForAnother = () => {
    setResult(null);
    setStyleId(null);
    setPhase("input");
    setError(null);
  };

  const spaceLabel = (id: string) => {
    const map: Record<string, string> = {
      living: c.spaces.living,
      bedroom: c.spaces.bedroom,
      kitchen: c.spaces.kitchen,
      bathroom: c.spaces.bathroom,
      majlis: c.spaces.majlis,
      exterior: c.spaces.exterior,
    };
    return map[id] ?? id;
  };

  return (
    <>
      <section id="studio" className="design-studio design-conversion-studio">
        <div className="design-studio-layout">
          <div className="design-studio-canvas">
            {loading && (
              <div className="design-generating-overlay design-studio-canvas__state">
                <span className="design-spinner" />
                <p>{messages.studio.generating}</p>
              </div>
            )}

            {!loading && result && (phase === "result" || phase === "success" || phase === "nurture") && (
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
                <p className="max-w-sm text-sm">{c.emptyHint}</p>
              </div>
            )}
          </div>

          <aside className="design-studio-panel">
            {phase === "input" && (
              <>
                <p className="design-studio-prompt">{c.uploadPrompt}</p>

                <p className="design-studio-section-title">{c.spaceTitle}</p>
                <div className="design-conversion-spaces">
                  {CONVERSION_SPACE_PRESETS.map((preset) => {
                    const Icon = SPACE_ICONS[preset.id] ?? Home;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        className={`design-conversion-space${spaceId === preset.id ? " design-conversion-space--active" : ""}`}
                        onClick={() => setSpaceId(preset.id)}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{spaceLabel(preset.id)}</span>
                      </button>
                    );
                  })}
                </div>

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
                  <p className="mt-1 text-[0.65rem] leading-snug text-gray-500">{c.uploadHint}</p>
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
                  {styles.map((style) => (
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

                <button
                  type="button"
                  className="design-btn design-btn-primary w-full mt-4"
                  disabled={loading}
                  onClick={generate}
                >
                  {loading ? (
                    <>
                      <span className="design-spinner" />
                      {messages.studio.generating}
                    </>
                  ) : (
                    c.generateFree
                  )}
                </button>
              </>
            )}

            {phase === "result" && result && (
              <div className="design-conversion-unlock">
                <p className="design-conversion-unlock__emoji">🎉</p>
                <h3 className="design-conversion-unlock__title">{c.unlockTitle}</h3>
                <p className="design-conversion-unlock__body">{c.unlockBody}</p>
                <button
                  type="button"
                  className="design-btn design-btn-primary w-full"
                  onClick={() => setQualifyOpen(true)}
                >
                  {c.unlockCta}
                </button>
                <p className="design-conversion-unlock__note">{c.unlockNote}</p>
              </div>
            )}

            {phase === "success" && (
              <div className="design-conversion-unlock design-conversion-unlock--success">
                <p className="design-conversion-unlock__emoji">🎉</p>
                <h3 className="design-conversion-unlock__title">{c.successTitle}</h3>
                <p className="design-conversion-unlock__body">{c.successBody}</p>
                <button type="button" className="design-btn design-btn-primary w-full" onClick={resetForAnother}>
                  {c.successCta}
                </button>
                {bonusRemaining > 0 && (
                  <p className="design-conversion-unlock__note">
                    {c.bonusLeft.replace("{count}", String(bonusRemaining))}
                  </p>
                )}
              </div>
            )}

            {phase === "nurture" && (
              <div className="design-conversion-unlock design-conversion-unlock--nurture">
                <h3 className="design-conversion-unlock__title">{c.nurtureTitle}</h3>
                <p className="design-conversion-unlock__body">{c.nurtureBody}</p>
                <button type="button" className="design-btn design-btn-outline w-full" onClick={resetForAnother}>
                  {c.nurtureCta}
                </button>
              </div>
            )}

            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
          </aside>
        </div>

        {phase === "result" && result && (
          <p className="design-preview-notice design-conversion-preview-note">{messages.studio.previewNotice}</p>
        )}
      </section>

      <DesignQualificationFlow
        messages={messages}
        locale={locale}
        open={qualifyOpen}
        generationId={result?.id ?? null}
        onClose={() => setQualifyOpen(false)}
        onComplete={onQualifyComplete}
      />
    </>
  );
}
