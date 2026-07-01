import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";

import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { identity } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz"],
});

const siteUrl = "https://aadityapai.vercel.app";
const title = `${identity.name}, ${identity.title}`;
const description =
  "Aaditya Pai is an ML researcher specializing in LLM agent security: prompt injection, unsafe tool use, and policy enforcement across multi-step agent workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s, ${identity.name}`,
  },
  description,
  keywords: [
    "Aaditya Pai",
    "LLM agent security",
    "prompt injection",
    "AI security research",
    "machine learning researcher",
    "adversarial robustness",
    "Columbia Data Science",
  ],
  authors: [{ name: identity.name }],
  creator: identity.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: identity.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Set the theme before paint to avoid a flash of the wrong mode.
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
