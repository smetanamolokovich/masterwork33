import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aituar Abdiluly — Fullstack vývojář",
  description:
    "Fullstack vývojář (Vue / React / NestJS). Webové aplikace na míru, dashboardy a B2B platformy. Praha / Remote.",
  openGraph: {
    title: "Aituar Abdiluly — Fullstack vývojář",
    description:
      "Webové aplikace na míru, dashboardy a B2B platformy — od frontendu po backend.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
