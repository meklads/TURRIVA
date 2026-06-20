import type { Locale } from "@/shared/i18n/locale";
import { localeToBcp47 } from "@/shared/i18n/locale";
import type { ProposalExportData } from "./proposal-export-types";
import { appBaseUrlFromEnv } from "./proposal-export-utils";

export function buildRuwaqSampleExportData(
  locale: Locale,
  baseUrl?: string
): ProposalExportData {
  const bcp47 = localeToBcp47(locale);
  const now = new Date();
  const validity = new Date();
  validity.setDate(validity.getDate() + 30);

  const isAr = locale === "ar";

  return {
    platformBranding: true,
    templateId: "ruwaq",
    appBaseUrl: baseUrl ?? appBaseUrlFromEnv(),
    projectName: isAr ? "تشطيب فيلا سكنية — حي الملقا" : "Residential villa fit-out — Al Malqa",
    clientName: isAr ? "أ. محمد العتيبي" : "Mr. Mohammed Al-Otaibi",
    companyName: isAr ? "شركة النخيل للتشطيب" : "Al Nakheel Fit-out Co.",
    address: isAr ? "الرياض — حي العليا" : "Riyadh — Al Olaya",
    about: isAr
      ? "مكتب تشطيب عقاري متخصص في المشاريع السكنية والتجارية منذ 2012."
      : "Real estate fit-out firm specializing in residential and commercial projects since 2012.",
    crNumber: "1010XXXXXX",
    vatNumber: "3XXXXXXXXXXXXX3",
    companyPhone: "+966 5X XXX XXXX",
    companyEmail: "info@example.com",
    website: "https://example.com",
    proposalNumber: "PROP-001",
    introduction: isAr
      ? "يسرنا تقديم عرضنا لتشطيب فيلتكم السكنية وفق المواصفات المتفق عليها، مع الالتزام بمعايير الجودة والجدول الزمني المرفق."
      : "We are pleased to submit our proposal for your villa fit-out in line with the agreed specifications, quality standards, and timeline below.",
    date: now.toLocaleDateString(bcp47, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    validityDate: validity.toLocaleDateString(bcp47, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    projectLocation: isAr ? "الرياض — حي الملقا" : "Riyadh — Al Malqa",
    propertyType: "villa",
    areaSqm: 450,
    commercialMode: "fixed_price",
    budget: 850000,
    scopeItems: isAr
      ? [
          {
            title: "أعمال التكسية والدهان",
            description: "تجهيز الأسطح، معالجة العيوب، دهان داخلي بمواد معتمدة.",
          },
          {
            title: "أعمال الأرضيات",
            description: "تركيب بورسلان وباركيه حسب المخططات المعتمدة.",
          },
          {
            title: "أعمال الكهرباء والإضاءة",
            description: "تمديدات، لوحات، إنارة ديكورية، نقاط شبكة وكاميرات.",
          },
        ]
      : [
          {
            title: "Finishing & painting",
            description: "Surface prep, defect treatment, interior paint with approved materials.",
          },
          {
            title: "Flooring",
            description: "Porcelain and parquet installation per approved drawings.",
          },
          {
            title: "Electrical & lighting",
            description: "Wiring, panels, decorative lighting, network and camera points.",
          },
        ],
    deliverables: isAr
      ? [
          {
            name: "مخطط تنفيذي",
            description: "نسخة PDF معتمدة قبل بدء التنفيذ",
          },
          {
            name: "تسليم مرحلي",
            description: "محاضر استلام لكل مرحلة رئيسية",
          },
        ]
      : [
          {
            name: "Execution drawings",
            description: "Approved PDF set before work starts",
          },
          {
            name: "Phased handover",
            description: "Signed acceptance for each major phase",
          },
        ],
    timeline: {
      duration: isAr ? "14 أسبوعاً" : "14 weeks",
      milestones: isAr
        ? [{ name: "التصميم والتوريد" }, { name: "التنفيذ" }, { name: "التسليم النهائي" }]
        : [{ name: "Design & procurement" }, { name: "Execution" }, { name: "Final handover" }],
    },
    commercialTerms: {
      paymentSchedule: [
        { label: isAr ? "دفعة مقدمة" : "Advance", percentage: 30, amount: 255000 },
        { label: isAr ? "عند التسليم" : "On delivery", percentage: 40, amount: 340000 },
        { label: isAr ? "بعد الاستلام" : "After acceptance", percentage: 30, amount: 255000 },
      ],
    },
    assumptions: isAr
      ? [
          "توفير صلاحية الدخول للموقع خلال ساعات العمل.",
          "جاهزية الموقع للتشطيب دون أعمال إنشائية إضافية.",
        ]
      : [
          "Site access during working hours.",
          "Site ready for fit-out without additional structural work.",
        ],
    exclusions: isAr
      ? [
          "الموافقات البلدية والرسوم الحكومية.",
          "الأثاث والمفروشات.",
        ]
      : ["Municipality approvals and government fees.", "Furniture and furnishings."],
  };
}
