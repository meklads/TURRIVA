import type { Locale } from "@/shared/i18n/locale";
import { getMessages } from "@/shared/i18n";
import { localeDir, localeToBcp47 } from "@/shared/i18n/locale";
import type { ProposalExportData } from "../proposal-export-types";
import { ruwaqBrand } from "../brands/ruwaq.tokens";
import {
  escapeHtml,
  formatAmount,
} from "../proposal-export-utils";

function assetUrl(base: string, path: string): string {
  return `${base.replace(/\/$/, "")}${path}`;
}

function safeHttpUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}

function exportLink(href: string, label: string, color: string): string {
  return `<a href="${escapeHtml(href)}" style="color:${color};text-decoration:none;">${escapeHtml(label)}</a>`;
}

function companyLogoHtml(data: ProposalExportData, bannerDark: boolean): string {
  const logo = safeHttpUrl(data.logoUrl);
  const { colors } = ruwaqBrand;

  if (logo) {
    return `<div style="display:inline-flex;align-items:center;justify-content:center;background:${colors.white};border-radius:10px;padding:8px 12px;max-width:180px;">
      <img src="${escapeHtml(logo)}" alt="" style="max-height:52px;max-width:160px;object-fit:contain;display:block;">
    </div>`;
  }

  if (data.companyName?.trim()) {
    return `<div style="font-size:18px;font-weight:700;color:${bannerDark ? colors.cream : colors.navy};letter-spacing:0.02em;">${escapeHtml(data.companyName.trim())}</div>`;
  }

  return "";
}

export function renderRuwaqTemplate(
  locale: Locale,
  data: ProposalExportData
): string {
  const labels = getMessages(locale).export;
  const dir = localeDir(locale);
  const bcp47 = localeToBcp47(locale);
  const { colors, fonts, footer, assets } = ruwaqBrand;
  const currency = locale === "ar" ? "ريال" : "SAR";
  const docTitle = locale === "ar" ? "عرض سعر" : "Proposal";
  const fontFamily = locale === "ar" ? fonts.arabic : fonts.latin;
  const printBtnPos = dir === "rtl" ? "left: 16px" : "right: 16px";
  const base = data.appBaseUrl;

  const propertyLabels: Record<string, string> = {
    villa: locale === "ar" ? "فيلا" : "Villa",
    apartment: locale === "ar" ? "شقة" : "Apartment",
    office: locale === "ar" ? "مكتب" : "Office",
    retail: locale === "ar" ? "تجاري" : "Retail",
    other: locale === "ar" ? "أخرى" : "Other",
  };

  const isEstimate = data.commercialMode === "estimate_only";
  const displayTotal =
    isEstimate && data.budget <= 0
      ? labels.estimatePending
      : `${formatAmount(data.budget, locale)} ${currency}`;

  const metaRows = [
    [labels.preparedFor, data.clientName],
    data.proposalNumber ? [labels.proposalNumber, data.proposalNumber] : null,
    [labels.date, data.date],
    [labels.validity, data.validityDate],
    data.projectLocation ? [labels.location, data.projectLocation] : null,
    data.propertyType
      ? [labels.propertyType, propertyLabels[data.propertyType] ?? data.propertyType]
      : null,
    data.areaSqm && data.areaSqm > 0
      ? [labels.area, `${formatAmount(data.areaSqm, locale)} ${locale === "ar" ? "م²" : "sqm"}`]
      : null,
  ].filter(Boolean) as [string, string][];

  const identityRows = [
    data.crNumber ? [labels.crNumber, data.crNumber] : null,
    data.vatNumber ? [labels.vatNumber, data.vatNumber] : null,
    data.companyPhone ? [labels.phone, data.companyPhone] : null,
    data.companyEmail ? [labels.email, data.companyEmail] : null,
    data.address ? [labels.address, data.address] : null,
  ].filter(Boolean) as [string, string][];

  const websiteHref = safeHttpUrl(data.website);
  const portfolioHref = safeHttpUrl(data.portfolioUrl);
  const catalogHref = safeHttpUrl(data.catalogUrl);
  const linkItems = [
    websiteHref ? exportLink(websiteHref, labels.websiteLink, colors.gold) : "",
    portfolioHref ? exportLink(portfolioHref, labels.portfolioLink, colors.gold) : "",
    catalogHref ? exportLink(catalogHref, labels.catalogLink, colors.gold) : "",
  ].filter(Boolean);

  const paymentSchedule = Array.isArray(data.commercialTerms?.paymentSchedule)
    ? (data.commercialTerms.paymentSchedule as Record<string, unknown>[])
    : [];

  const paymentRows = paymentSchedule
    .map((m) => {
      const amount =
        typeof m.amount === "number" && m.amount > 0
          ? `${formatAmount(m.amount, locale)} ${currency}`
          : isEstimate
            ? labels.tbd
            : `${formatAmount(m.amount, locale)} ${currency}`;
      return `<tr>
        <td style="padding:10px 14px;border-bottom:1px solid ${colors.cream};">${escapeHtml(m.label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid ${colors.cream};text-align:center;">${escapeHtml(m.percentage)}%</td>
        <td style="padding:10px 14px;border-bottom:1px solid ${colors.cream};text-align:${dir === "rtl" ? "left" : "right"};font-weight:600;">${escapeHtml(amount)}</td>
      </tr>`;
    })
    .join("");

  const milestones = Array.isArray(data.timeline?.milestones)
    ? (data.timeline!.milestones as Record<string, unknown>[])
    : [];

  const sectionTitle = (title: string) =>
    `<h2 style="font-size:17px;font-weight:700;color:${colors.navy};margin:36px 0 14px;padding-bottom:8px;border-bottom:2px solid ${colors.gold};">${escapeHtml(title)}</h2>`;

  const companyLogo = companyLogoHtml(data, true);
  const footerAddress = locale === "ar" ? footer.addressAr : footer.addressEn;
  const footerTagline = locale === "ar" ? footer.taglineAr : footer.taglineEn;
  const platformBranding = data.platformBranding === true;
  const sampleBadge = platformBranding
    ? `<div style="display:inline-block;margin-top:10px;padding:4px 10px;border-radius:6px;background:rgba(201,160,99,0.2);border:1px solid ${colors.gold};font-size:11px;font-weight:600;color:${colors.gold};">${escapeHtml(labels.sampleBadge)}</div>`
    : "";

  const clientFooterLines = [
    data.companyName?.trim(),
    data.address?.trim(),
    data.companyPhone?.trim(),
    data.companyEmail?.trim(),
    data.crNumber ? `${labels.crNumber} ${data.crNumber}` : "",
    data.vatNumber ? `${labels.vatNumber} ${data.vatNumber}` : "",
  ].filter(Boolean);

  const clientFooter =
    clientFooterLines.length > 0
      ? `<footer class="doc-footer-client">
          <div style="font-weight:600;color:${colors.navy};margin-bottom:6px;">${escapeHtml(clientFooterLines[0] ?? "")}</div>
          ${clientFooterLines
            .slice(1)
            .map((line) => `<div style="margin-top:3px;">${escapeHtml(line)}</div>`)
            .join("")}
          <div style="margin-top:10px;opacity:0.7;font-size:10px;">${escapeHtml(labels.footer)}</div>
        </footer>`
      : `<footer class="doc-footer-client doc-footer-minimal">
          <div>${escapeHtml(labels.footer)}</div>
        </footer>`;

  const platformFooter = `<footer class="doc-footer">
      <div>
        <img src="${escapeHtml(assetUrl(base, assets.logoOnDark))}" alt="Ruwaq">
        <div class="doc-footer-tagline">${escapeHtml(footerTagline)}</div>
      </div>
      <div style="text-align:${dir === "rtl" ? "left" : "right"};">
        <div>${escapeHtml(footerAddress)}</div>
        <div style="margin-top:4px;"><a href="https://${footer.website}">${escapeHtml(footer.website)}</a></div>
        <div style="margin-top:6px;opacity:0.75;">${escapeHtml(labels.sampleFooter)}</div>
      </div>
    </footer>`;

  const fontLink = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Montserrat:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">`;

  return `<!DOCTYPE html>
<html dir="${dir}" lang="${locale}">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.projectName)} — ${docTitle}</title>
  ${fontLink}
  <style>
    @media print {
      .no-print { display: none !important; }
      body { margin: 0; }
      .page-wrap { box-shadow: none !important; }
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 24px;
      background: #e5e7eb;
      font-family: ${fontFamily};
      color: ${colors.text};
      direction: ${dir};
      text-align: ${dir === "rtl" ? "right" : "left"};
      line-height: 1.65;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page-wrap {
      max-width: 820px;
      margin: 0 auto;
      background: ${colors.white};
      box-shadow: 0 8px 32px rgba(15,23,42,0.12);
      overflow: hidden;
    }
    .print-btn {
      position: fixed; top: 16px; ${printBtnPos};
      padding: 10px 20px; background: ${colors.gold}; color: ${colors.navy};
      border: none; border-radius: 8px; cursor: pointer; font-size: 14px;
      font-weight: 700; z-index: 10; font-family: inherit;
    }
    .banner {
      background: linear-gradient(135deg, ${colors.navy} 0%, ${colors.navySoft} 100%);
      padding: 28px 32px 24px;
      color: ${colors.cream};
    }
    .banner-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }
    .banner-badge {
      font-size: 11px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${colors.gold};
      font-weight: 700;
      margin-bottom: 8px;
    }
    .banner-title {
      font-size: 26px;
      font-weight: 700;
      color: ${colors.white};
      margin: 0 0 6px;
      line-height: 1.3;
      word-break: break-word;
    }
    .banner-client {
      font-size: 14px;
      color: ${colors.cream};
      opacity: 0.92;
    }
    .banner-accent {
      height: 3px;
      background: linear-gradient(90deg, ${colors.gold}, ${colors.goldLight}, ${colors.gold});
      margin-top: 20px;
    }
    .content { padding: 28px 32px 12px; }
    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 24px;
      background: ${colors.creamBg};
      border: 1px solid ${colors.cream};
      border-radius: 12px;
      padding: 16px 18px;
      margin-bottom: 24px;
      font-size: 13px;
    }
    .meta-grid div { color: ${colors.textMuted}; }
    .meta-grid strong { color: ${colors.navy}; font-weight: 600; }
    .intro {
      font-size: 14px;
      color: ${colors.text};
      line-height: 1.75;
      white-space: pre-wrap;
      margin-bottom: 8px;
      padding: 16px 18px;
      background: ${colors.creamBg};
      border-radius: 10px;
      border-${dir === "rtl" ? "right" : "left"}: 3px solid ${colors.gold};
    }
    .scope-item {
      margin: 14px 0;
      padding: 14px 16px;
      background: ${colors.creamBg};
      border-radius: 10px;
      border: 1px solid ${colors.cream};
    }
    .scope-item h3 {
      font-size: 14px;
      font-weight: 700;
      color: ${colors.navy};
      margin: 0 0 6px;
    }
    .scope-item p {
      font-size: 13px;
      color: ${colors.textMuted};
      margin: 0;
      white-space: pre-wrap;
    }
    table { width: 100%; border-collapse: collapse; margin: 12px 0 20px; }
    th {
      background: ${colors.navy};
      color: ${colors.cream};
      padding: 10px 14px;
      font-size: 12px;
      font-weight: 600;
      text-align: start;
    }
    td { font-size: 13px; color: ${colors.text}; }
    .total-box {
      display: inline-block;
      background: ${colors.navy};
      color: ${colors.white};
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      margin: 8px 0 16px;
    }
    .estimate-banner {
      background: ${colors.estimateBg};
      border: 1px solid ${colors.estimateBorder};
      border-radius: 10px;
      padding: 12px 16px;
      font-size: 13px;
      color: ${colors.estimateText};
      margin: 12px 0;
    }
    ul { padding-inline-start: 20px; margin: 8px 0; }
    li { margin: 8px 0; font-size: 13px; color: ${colors.text}; }
    .signature {
      margin-top: 36px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .signature-box {
      border-top: 2px solid ${colors.gold};
      padding-top: 10px;
      font-size: 13px;
      color: ${colors.textMuted};
      min-height: 72px;
    }
    .doc-footer {
      background: ${colors.navy};
      color: ${colors.cream};
      padding: 20px 32px;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      font-size: 11px;
    }
    .doc-footer img { max-height: 44px; opacity: 0.95; }
    .doc-footer a { color: ${colors.gold}; text-decoration: none; }
    .doc-footer-tagline { color: ${colors.gold}; font-weight: 600; margin-top: 4px; }
    .doc-footer-client {
      border-top: 2px solid ${colors.gold};
      margin-top: 28px;
      padding: 18px 32px 24px;
      font-size: 12px;
      color: ${colors.textMuted};
      background: ${colors.creamBg};
    }
    .doc-footer-minimal {
      text-align: center;
      font-size: 11px;
    }
  </style>
</head>
<body>
  <button class="print-btn no-print" onclick="window.print()">${escapeHtml(labels.savePdf)}</button>
  <div class="page-wrap">
    <header class="banner">
      <div class="banner-top">
        <div style="flex:1;min-width:200px;">
          <div class="banner-badge">${escapeHtml(docTitle)}</div>
          <h1 class="banner-title">${escapeHtml(data.projectName)}</h1>
          <div class="banner-client">${escapeHtml(labels.preparedFor)} ${escapeHtml(data.clientName)}</div>
          ${sampleBadge}
        </div>
        <div style="text-align:${dir === "rtl" ? "left" : "right"};">
          ${companyLogo}
          ${
            data.companyName && data.logoUrl
              ? `<div style="margin-top:8px;font-size:12px;color:${colors.cream};opacity:0.85;">${escapeHtml(data.companyName)}</div>`
              : ""
          }
        </div>
      </div>
      <div class="banner-accent"></div>
    </header>

    <main class="content">
      <div class="meta-grid">
        ${metaRows
          .map(
            ([label, value]) =>
              `<div><strong>${escapeHtml(label)}</strong> ${escapeHtml(value)}</div>`
          )
          .join("")}
        ${
          identityRows.length
            ? identityRows
                .map(
                  ([label, value]) =>
                    `<div><strong>${escapeHtml(label)}</strong> ${escapeHtml(value)}</div>`
                )
                .join("")
            : ""
        }
      </div>
      ${
        linkItems.length
          ? `<div style="font-size:13px;margin-bottom:20px;">${linkItems.join(" · ")}</div>`
          : ""
      }
      ${
        data.introduction
          ? `<div class="intro">${escapeHtml(data.introduction)}</div>`
          : ""
      }
      ${
        data.about?.trim()
          ? `${sectionTitle(labels.aboutUs)}<p style="font-size:14px;color:${colors.textMuted};line-height:1.75;white-space:pre-wrap;margin:0 0 8px;">${escapeHtml(data.about.trim())}</p>`
          : ""
      }

      ${sectionTitle(labels.scopeOfWork)}
      ${data.scopeItems
        .map(
          (item, i) => `<div class="scope-item">
            <h3>${i + 1}. ${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
          </div>`
        )
        .join("")}

      ${
        data.deliverables.length
          ? `${sectionTitle(labels.deliverables)}<ul>${data.deliverables
              .map(
                (d) =>
                  `<li><strong>${escapeHtml(d.name)}</strong> — ${escapeHtml(d.description)}</li>`
              )
              .join("")}</ul>`
          : ""
      }

      ${
        data.timeline
          ? `${sectionTitle(labels.timeline)}
             <p style="font-size:14px;">${escapeHtml(labels.duration)} <strong>${escapeHtml(String(data.timeline.duration ?? "TBD"))}</strong></p>
             ${
               milestones.length
                 ? `<ul>${milestones.map((m) => `<li>${escapeHtml(m.name)}</li>`).join("")}</ul>`
                 : ""
             }`
          : ""
      }

      ${sectionTitle(labels.commercialTerms)}
      ${isEstimate ? `<div class="estimate-banner">${escapeHtml(labels.estimateOnly)}</div>` : ""}
      <div class="total-box">
        ${escapeHtml(labels.total)} ${escapeHtml(displayTotal)}
        ${
          isEstimate && data.budget > 0
            ? ` <span style="font-size:12px;font-weight:500;opacity:0.85;">(${escapeHtml(labels.estimateIndicative)})</span>`
            : ""
        }
      </div>
      <table>
        <thead><tr>
          <th>${escapeHtml(labels.milestone)}</th>
          <th>${escapeHtml(labels.percentage)}</th>
          <th>${escapeHtml(labels.amount)}</th>
        </tr></thead>
        <tbody>${paymentRows}</tbody>
      </table>

      ${
        data.assumptions.length
          ? `${sectionTitle(labels.assumptions)}<ul>${data.assumptions.map((a) => `<li>${escapeHtml(a)}</li>`).join("")}</ul>`
          : ""
      }
      ${
        data.exclusions.length
          ? `${sectionTitle(labels.exclusions)}<ul>${data.exclusions.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}</ul>`
          : ""
      }

      ${sectionTitle(labels.acceptance)}
      <p style="font-size:13px;color:${colors.textMuted};margin-bottom:8px;">${escapeHtml(labels.acceptanceText)}</p>
      <div class="signature">
        <div class="signature-box"><strong style="color:${colors.navy};">${escapeHtml(labels.clientSignature)}</strong><br>${escapeHtml(data.clientName)}</div>
        <div class="signature-box"><strong style="color:${colors.navy};">${escapeHtml(labels.providerSignature)}</strong><br>${escapeHtml(data.companyName ?? "—")}</div>
      </div>
    </main>

    ${platformBranding ? platformFooter : clientFooter}
  </div>
</body>
</html>`;
}
