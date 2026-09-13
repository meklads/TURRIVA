"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/shared/i18n/locale";
import { useConversionActions } from "./luxury-conversion-provider";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Msg = { role: "bot" | "user"; text: string };

type Props = { locale: Locale };

type Reply = { text: string; openDemo?: boolean; timeline?: "urgent" | "1_3_months" | "planning" };

function replyFor(locale: Locale, input: string): Reply {
  const q = input.toLowerCase();
  const isAr = locale === "ar";

  if (/استشارة|meeting|demo|تواصل|contact|call|ناقش|discuss|brief|موجز|عرض سعر|quote/.test(q)) {
    return {
      openDemo: true,
      text: isAr
        ? "حسناً — سأفتح نموذج مناقشة المشروع لنلتقط النطاق والجدول وبيانات التواصل. نرد خلال يوم عمل بخطوة تالية واضحة."
        : "Understood — I’ll open the project discussion form so we can capture scope, timeline, and contact details. We reply within one business day with a clear next step.",
    };
  }

  if (/من أنتم|من هي|what is turriva|who are|تعريف|تموضع|positioning/.test(q)) {
    return {
      text: isAr
        ? "توريفا شركة تنفيذ مكاني وتسليم مادي. نربط التصميم المعتمد بالواقع: تطوير فني، تصنيع، تركيب، وتسليم. بيئات البيع العقاري هي التخصص الرئيسي. تعاقد مع توريفا وحدها؛ والمجموعة تُستدعى عند الحاجة فقط."
        : "Turriva is a spatial execution and physical delivery company. We bridge approved design to reality: technical development, fabrication, installation, and handover. Real estate sales environments are the flagship specialty. Contract Turriva alone; the group joins only when needed.",
    };
  }

  if (/صالة|مبيعات|sales gallery|وحدة عرض|show unit|إطلاق|launch|معرض/.test(q)) {
    return {
      text: isAr
        ? "تخصصنا الرئيسي: صالات البيع ووحدات العرض ومساحات الإطلاق. نملك مسار التسليم من المخططات المعتمدة إلى مساحة جاهزة للافتتاح. هل تريد مناقشة مشروع محدد؟"
        : "Our flagship specialty: sales galleries, show units, and launch spaces. We own the path from approved drawings to an opening-ready space. Want to discuss a specific project?",
      openDemo: /مناقش|discuss|أريد|want|نعم|yes/.test(q) || undefined,
    };
  }

  if (/جدول|موعد|أسبوع|شهر|timeline|weeks|month|عاجل|urgent|سريع|delivery|تسليم/.test(q)) {
    return {
      text: isAr
        ? "الجدول يعتمد على النطاق والاعتمادات وجاهزية الموقع. المشاريع العاجلة تُراجع كمسار أولوية عند ملاءمة المساحة والمخططات. أرسل موعد الجاهزية في نموذج المناقشة لنحدد المسار المناسب."
        : "Timeline depends on scope, approvals, and site readiness. Urgent projects are reviewed as a priority path when area and drawings fit. Share the ready-by date in the discussion form so we can define the right path.",
      openDemo: true,
      timeline: /عاجل|urgent|أسبوع|week/.test(q) ? "urgent" : "1_3_months",
    };
  }

  if (/مجموعة|جرافيكس|graphics|bees|تسامي|group|cgi|فيلم/.test(q)) {
    return {
      text: isAr
        ? "تعاقد مع توريفا للتنفيذ المكاني. جرافيكس هاوس للطبقة البصرية وBees Motion للإطلاق والحملات — تُستدعى فقط حين يحتاجها المشروع. توريفا هي جهة التسليم المادي."
        : "Contract Turriva for spatial execution. Graphics House covers the visual layer and Bees Motion covers launch and campaigns — only when the project needs them. Turriva remains the physical delivery partner.",
    };
  }

  if (/تكلفة|سعر|price|cost|ميزانية|budget/.test(q)) {
    return {
      text: isAr
        ? "التكلفة تتبع النطاق والمخططات والمواد والجدول. لا نرسل سعراً قبل قراءة العمل. شارك نطاقك أو المخططات عبر نموذج المناقشة لنحدد الخطوة التالية."
        : "Cost follows scope, drawings, materials, and timeline. We don’t quote before reading the work. Share your scope or drawings through the discussion form so we can define the next step.",
      openDemo: true,
      timeline: "planning",
    };
  }

  if (/مسار|كيف تعملون|how do you|قدرات|capabilities|تصنيع|تركيب|shop drawing|مخططات/.test(q)) {
    return {
      text: isAr
        ? "مسارنا: تطوير فني (مخططات وكميات وعينات) → تصنيع → تركيب ميداني → تسليم مع إغلاق الملاحظات. العميل يشتري جهة مسؤولة عن تسليم المساحة، لا مقاولين متفرقين."
        : "Our path: technical development (drawings, quantities, samples) → fabrication → site installation → handover with snagging closed. Clients buy accountability for getting the space delivered, not scattered trades.",
    };
  }

  return {
    text: isAr
      ? "يمكنني توضيح تعريف توريفا، بيئات البيع، مسار التنفيذ، الجداول، أو علاقة المجموعة. أو اطلب «ناقش مشروعك» لأفتح النموذج مباشرة."
      : "I can explain what Turriva is, sales environments, the execution path, timelines, or the group relationship. Or say “discuss a project” and I’ll open the form.",
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
        ? "مرحباً — أنا مساعد توريفا. اسأل عن التنفيذ المكاني، بيئات البيع، الجداول، أو اطلب مناقشة مشروعك."
        : "Hello — I’m the Turriva assistant. Ask about spatial execution, sales environments, timelines, or request a project discussion.",
    },
  ]);

  const chips = useMemo(
    () =>
      isAr
        ? ["ما هي توريفا؟", "كيف نجهز صالة مبيعات؟", "ما مسار التنفيذ؟", "ناقش مشروعك"]
        : ["What is Turriva?", "How do we ready a sales gallery?", "What is the execution path?", "Discuss a project"],
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
        openDemo({
          source: "ai_assistant",
          timeline: answer.timeline ?? "1_3_months",
        });
      }
    }, 260);
    setInput("");
    trackMarketingEvent("ai_chat_message", { locale });
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
        <section className="lux-ai-assistant__panel" aria-label={isAr ? "مساعد توريفا" : "Turriva assistant"}>
          <header className="lux-ai-assistant__head">
            <span className="lux-ai-assistant__pulse" aria-hidden />
            <div>
              <p className="lux-ai-assistant__title">{isAr ? "مساعد توريفا" : "Turriva assistant"}</p>
              <p className="lux-ai-assistant__status">
                {isAr ? "تنفيذ مكاني · يرد فوراً" : "Spatial execution · replies instantly"}
              </p>
            </div>
            <button
              type="button"
              className="lux-ai-assistant__x"
              onClick={() => setOpen(false)}
              aria-label={isAr ? "إغلاق" : "Close"}
            >
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
              placeholder={isAr ? "اسأل عن التنفيذ أو بيئات البيع…" : "Ask about delivery or sales environments…"}
              aria-label={isAr ? "رسالة" : "Message"}
            />
            <button type="submit" className="lux-ai-assistant__send">
              {isAr ? "إرسال" : "Send"}
            </button>
          </form>

          <button
            type="button"
            className="lux-ai-assistant__cta"
            onClick={() => openDemo({ source: "ai_assistant_cta" })}
          >
            {isAr ? "ناقش مشروعك" : "Discuss your project"}
          </button>
        </section>
      ) : null}

      <button type="button" className="lux-ai-assistant__fab" onClick={toggle} aria-expanded={open}>
        <span className="lux-ai-assistant__pulse" aria-hidden />
        {isAr ? "اسأل توريفا" : "Ask Turriva"}
      </button>
    </div>
  );
}
