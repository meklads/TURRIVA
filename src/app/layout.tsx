import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saudi Proposal OS — Professional proposals in minutes",
  description:
    "Create professional proposals for Saudi construction, engineering, and consulting businesses using AI. Arabic + English. Free to try.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
