import Link from "next/link";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const title =
    locale === "ar" ? "معاينة تصميم (داخلية)" : "Design preview (internal)";
  const intro =
    locale === "ar"
      ? "أداة معاينة بالذكاء الاصطناعي للفريق والعملاء المدعوين — ليست واجهة الموقع الرئيسية."
      : "An AI preview tool for invited clients and our team — not the public marketing site.";
  return { ...luxuryPageMetadata(locale, title, intro), robots: { index: false, follow: false } };
}

export default async function DesignPreviewInsightsPage() {
  const locale = await getLocale();
  const isAr = locale === "ar";

  return (
    <section className="lux-section">
      <div className="lux-container max-w-2xl text-center">
        <p className="lux-eyebrow">{isAr ? "رؤى · داخلية" : "Insights · internal"}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-6 text-3xl sm:text-4xl">
          {isAr ? "معاينة تصميم بالذكاء الاصطناعي" : "AI design preview"}
        </h1>
        <p className="lux-body mx-auto mt-6 text-sm leading-relaxed">
          {isAr
            ? "هذه الأداة لمعاينة سريعة للمساحة وليست بديلاً عن التشطيب الثابت أو الديكور الإعلاني الذي ننفّذه ميدانياً. للمشاريع الفعلية — تواصل معنا للتشطيب والمقاولات."
            : "This tool is for quick spatial previews — not a substitute for fixed fit-out or exhibition decor we build on site. For real projects, contact us for contracting and decor."}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/design" className="lux-btn-outline-gold">
            {isAr ? "فتح الاستوديو" : "Open studio"}
          </Link>
          <Link href="/contact" className="lux-btn-primary">
            {isAr ? "مشروع تشطيب حقيقي" : "Discuss a real project"}
          </Link>
        </div>
        <p className="mt-8 text-xs text-lux-ink-muted">
          {isAr ? "العودة إلى " : "Back to "}
          <Link href="/" className="text-lux-gold hover:underline">
            {isAr ? "الصفحة الرئيسية" : "homepage"}
          </Link>
        </p>
      </div>
    </section>
  );
}
