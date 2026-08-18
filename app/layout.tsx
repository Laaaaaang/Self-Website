import type { Metadata } from "next";
import localFont from "next/font/local";

import { SmoothScroll } from "@/components/interactions/smooth-scroll";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const tsukushiMincho = localFont({
  src: "../筑紫明朝体/骨董款 Antique ★★★/FOT-TsukuAntiqueSMinStd-L.ttf",
  variable: "--font-tsukushi-mincho",
  display: "swap",
  adjustFontFallback: "Times New Roman"
});

export const metadata: Metadata = {
  title: "Hidden Structure",
  description: "A personal website for research, systems, photography, and notes on hidden structure."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tsukushiMincho.variable}>
      <body>
        <SmoothScroll />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
