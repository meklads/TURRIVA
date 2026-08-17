import "@/app/luxury.css";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Turriva",
  url: "https://turriva.com",
  email: "info@turriva.com",
  telephone: "+966502786513",
  description:
    "Specialized spatial execution and physical delivery company delivering interiors, exhibitions, furnishing, fabrication, installation, and turnkey physical experiences.",
  parentOrganization: {
    "@type": "Organization",
    name: "Tasami Group",
    url: "https://www.tasamify.com/",
  },
  areaServed: ["Saudi Arabia", "Oman", "Bahrain", "Egypt"],
  knowsAbout: [
    "Interior execution",
    "Exhibition execution",
    "Spatial execution",
    "Fit-out",
    "Furnishing",
    "Fabrication",
    "Installation",
    "Turnkey physical experiences",
  ],
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lux-shell flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LuxuryHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <LuxuryFooter />
    </div>
  );
}
