"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { useConversionActions } from "./luxury-conversion-provider";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Msg = { role: "bot" | "user"; text: string };

type Props = { locale: Locale };

function replyFor(locale: Locale, input: string): { text: string; openDemo?: boolean } {
  const q = input.toLowerCase();
  const isAr = locale === "ar";

  if (/استشارة|meeting|demo|عرض|quote|اقتباس|تواصل|contact|call/.test(q)) {
    return {
      openDemo: true,
      text: isAr
        ? "ممتاز — سأفتح نموذج حجز العرض الحي لالتقاط نوع المشروع والجدول وبيانات التواصل."
        : "Great — I’ll open the live-demo form so we can capture project type, timeline, and contact details.",
    };
  }

  if (/شهر|3 أسابيع|أقل من|weeks|month|سريع|express|delivery|تسليم/.test(q)) {
    return {
      text: isAr
        ? "مسار Express Launch يجهّز مركز بيع / وحدة عرض بنطاق واضح خلال أقل من 3 أسابيع في الحالات المناسبة للمساحة والجدول. للقاعات الأكبر أو التكامل التفاعلي الكامل نوصي بـ Flagship Spatial System."
        : "Express Launch can prepare a sales gallery / show unit on a clear scope in under 3 weeks when area and schedule fit. Larger galleries or full interactive integration usually need the Flagship Spatial System.",
    };
  }

  if (/مخطط|masterplan|حلول|solutions|عروض|packages|باقات|منتجات/.test(q)) {
    return {
      text: isAr
        ? "لدينا ثلاث باقات: Express Launch (إطلاق سريع)، Flagship Spatial System (مجسمات وشاشات وسينما مكانية)، وحلول المبيعات الرقمية عبر منظومة المجموعة عندما يحتاجها المكان. يمكنني فتح الحاسبة أو نموذج العرض الحي حسب احتياجك."
        : "We offer three packages: Express Launch (fast path), Flagship Spatial System (models, screens, spatial cinema), and digital sales tools via the group ecosystem when the room needs them. I can open the calculator or live-demo form next.",
    };
  }

  if (/مجسم|maquette|cgi|touch|شاشة|تفاعلي|interactive/.test(q)) {
    return {
      text: isAr
        ? "ننفّذ الطبقة المكانية (قاعة، وحدة عرض، تجهيز) ونربطها بأدوات التجربة — مجسمات ذكية، شاشات لمس، ومحتوى تفاعلي — عبر منظومة تسامي عندما يخدم الموجز."
        : "We deliver the spatial layer (gallery, show unit, fit-out) and connect experience tools — smart maquettes, touch screens, interactive content — through the Tasami ecosystem when the brief needs them.",
    };
  }

  return {
    text: isAr
      ? "يمكنني المساعدة في جداول الإطلاق، الباقات، أو تجهيز صالة مبيعات. جرّب أحد الاختصارات أو اطلب استشارة مخصصة."
      : "I can help with launch timelines, packages, or sales-gallery setup. Try a quick prompt or ask for a tailored consultation.",
  };
}

export function TurrivaAiAssistant({ locale }: Props) {
  const isAr = locale === "ar";
  const { openDemo } = useConversionActions();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      role: "bot",
      text: isAr
        ? "مرحباً — أنا مستشار مبيعات توريفا. اسأل عن الإطلاق السريع، الباقات، أو اطلب عرضاً حياً."
        : "Hello — I’m the Turriva sales consultant. Ask about fast launch, packages, or request a live demo.",
    },
  ]);

  const chips = useMemo(
    () =>
      isAr
        ? [
            "كيف أجهز صالة مبيعات خلال أقل من شهر؟",
            "ما هي العروض والحلول المتاحة للمخططات العقارية؟",
            "طلب استشارة مخصصة مشروع عقاري",
          ]
        : [
            "How do I ready a sales gallery in under a month?",
            "What packages fit a real-estate masterplan?",
            "Request a tailored project consultation",
          ],
    [isAr]
  );

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function pushUser(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    const answer = replyFor(locale, trimmed);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answer.text }]);
      if (answer.openDemo) {
        openDemo({ source: "ai_assistant", timeline: "urgent" });
      }
    }, 280);
    setInput("");
  }

  function toggle() {
    setOpen((v) => {
      const next = !v;
      if (next) trackMarketingEvent("ai_chat_opened", { locale });
      return next;
    });
  }

  return (
    <div className="lux-ai-assistant" dir={isAr ? "rtl" : "ltr"}>
      {open ? (
        <section className="lux-ai-assistant__panel" aria-label={isAr ? "مستشار توريفا" : "Turriva assistant"}>
          <header className="lux-ai-assistant__head">
            <span className="lux-ai-assistant__pulse" aria-hidden />
            <div>
              <p className="lux-ai-assistant__title">{isAr ? "مستشار توريفا" : "Turriva consultant"}</p>
              <p className="lux-ai-assistant__status">{isAr ? "متصل · يرد فوراً" : "Online · replies instantly"}</p>
            </div>
            <button type="button" className="lux-ai-assistant__x" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </header>

          <div className="lux-ai-assistant__messages" ref={listRef}>
            {messages.map((m, i) => (
              <p key={`${m.role}-${i}`} className={`lux-ai-assistant__bubble lux-ai-assistant__bubble--${m.role}`}>
                {m.text}
              </p>
            ))}
          </div>

          <div className="lux-ai-assistant__chips">
            {chips.map((chip) => (
              <button key={chip} type="button" className="lux-ai-assistant__chip" onClick={() => pushUser(chip)}>
                {chip}
              </button>
            ))}
          </div>

          <form
            className="lux-ai-assistant__form"
            onSubmit={(e) => {
              e.preventDefault();
              pushUser(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isAr ? "اكتب سؤالك…" : "Type your question…"}
              aria-label={isAr ? "رسالة" : "Message"}
            />
            <button type="submit" className="lux-btn-primary">
              {isAr ? "إرسال" : "Send"}
            </button>
          </form>
        </section>
      ) : null}

      <button type="button" className="lux-ai-assistant__fab" onClick={toggle} aria-expanded={open}>
        <span className="lux-ai-assistant__pulse" aria-hidden />
        {isAr ? "اسأل توريفا" : "Ask Turriva"}
      </button>
    </div>
  );
}
