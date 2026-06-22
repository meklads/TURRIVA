import type { Locale } from "@/shared/i18n/locale";
import { localeToBcp47 } from "@/shared/i18n/locale";
import { getMessages } from "@/shared/i18n";
import type { ProposalExportData } from "./proposal-export-types";
import { appBaseUrlFromEnv } from "./proposal-export-utils";

export function buildRuwaqSampleExportData(
  locale: Locale,
  baseUrl?: string
): ProposalExportData {
  const bcp47 = localeToBcp47(locale);
  const messages = getMessages(locale);
  const now = new Date();
  const validity = new Date();
  validity.setDate(validity.getDate() + 30);
  const base = (baseUrl ?? appBaseUrlFromEnv()).replace(/\/$/, "");

  const isAr = locale === "ar";

  const clauseItems = [
    {
      category: "compliance",
      categoryLabel: messages.review.clauses.categories.compliance ?? "compliance",
      text: isAr
        ? "يلتزم العميل بأن جميع الأعمال تتوافق مع كود البناء السعودي SBC 1101 للمباني السكنية. لا يتحمل المقاول مسؤولية مخالفات طلبات العميل التي تخرق الكود."
        : "The Client ensures all works comply with Saudi Building Code SBC 1101 for residential buildings. The Contractor is not liable for violations from Client requests that breach the Code.",
      sourceRef: "SBC 1101 — Residential Buildings",
    },
    {
      category: "permits",
      categoryLabel: messages.review.clauses.categories.permits ?? "permits",
      text: isAr
        ? "استخراج رخص البناء والترميم والحفر على عاتق العميل ما لم يُنص صراحة على خلاف ذلك. التأخير البلدي لا يُعد تأخيراً من المقاول."
        : "Building, renovation, and excavation permits are the Client's responsibility unless explicitly stated otherwise. Municipal delay is not contractor delay.",
      sourceRef: "Balady — Municipal Permits",
    },
    {
      category: "vat",
      categoryLabel: messages.review.clauses.categories.vat ?? "vat",
      text: isAr
        ? "الأسعار خاضعة لضريبة القيمة المضافة حيث ينطبق. يلتزم المقاول بإصدار فواتير ضريبية وفق متطلبات هيئة الزكاة والضريبة والجمارك."
        : "Prices are subject to VAT where applicable. The Contractor issues tax invoices per Zakat, Tax and Customs Authority requirements.",
      sourceRef: "ZATCA — VAT Regulations",
    },
    {
      category: "scope_change",
      categoryLabel: messages.review.clauses.categories.scope_change ?? "scope_change",
      text: isAr
        ? "لا يُنفَّذ أي عمل خارج النطاق المعتمد إلا بأمر تغيير مكتوب يحدد التكلفة والمدة. العمل الإضافي الشفهي غير ملزم."
        : "No out-of-scope work without a written change order defining cost and time. Verbal extras are not binding.",
      sourceRef: "FIDIC-inspired — Change Order",
    },
  ];

  return {
    platformBranding: true,
    templateId: "ruwaq",
    appBaseUrl: base,
    projectName: isAr ? "تشطيب فيلا سكنية — حي الملقا" : "Residential villa fit-out — Al Malqa",
    clientName: isAr ? "أ. محمد العتيبي" : "Mr. Mohammed Al-Otaibi",
    companyName: isAr ? "شركة النخيل للتشطيب" : "Al Nakheel Fit-out Co.",
    address: isAr ? "الرياض — حي العليا" : "Riyadh — Al Olaya",
    about: isAr
      ? "مكتب تشطيب عقاري متخصص في المشاريع السكنية والتجارية منذ 2012."
      : "Real estate fit-out firm specializing in residential and commercial projects since 2012.",
    crNumber: "1010456789",
    vatNumber: "310123456700003",
    companyPhone: "+966 50 123 4567",
    companyEmail: "info@alnakheel-fitout.sa",
    website: "https://alnakheel-fitout.sa",
    proposalNumber: "PROP-2026-0142",
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
    boqLines: isAr
      ? [
          { label: "تشطيب ودهان", amount: 340000, percent: 40, category: "finishing", isEstimated: false },
          { label: "أرضيات وبورسلان", amount: 212500, percent: 25, category: "flooring", isEstimated: false },
          { label: "كهرباء وإضاءة", amount: 297500, percent: 35, category: "mep", isEstimated: false },
        ]
      : [
          { label: "Finishing & paint", amount: 340000, percent: 40, category: "finishing", isEstimated: false },
          { label: "Flooring & porcelain", amount: 212500, percent: 25, category: "flooring", isEstimated: false },
          { label: "Electrical & lighting", amount: 297500, percent: 35, category: "mep", isEstimated: false },
        ],
    clauseItems,
    clausePackName: isAr ? "حزمة تشطيب داخلي" : "Interior fit-out pack",
    clausePackVersion: "1.0",
  };
}
