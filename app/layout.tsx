import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SecureLaunch",
    template: "%s | SecureLaunch",
  },

  description:
    "SecureLaunch helps AI startups and SaaS companies build reliable, secure and production-ready AI applications through AI testing, QA automation and DevOps.",

  keywords: [
    "AI Quality Engineering",
    "AI Testing",
    "QA Automation",
    "Playwright",
    "Selenium",
    "DevOps",
    "Anthropic",
    "Claude AI",
  ],

  metadataBase: new URL("https://securelaunch.co.in"),

  openGraph: {
    title: "Build Trusted AI | SecureLaunch",

    description:
      "AI Quality Engineering for startups and SaaS companies.",

    url: "https://securelaunch.co.in",

    siteName: "SecureLaunch",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}