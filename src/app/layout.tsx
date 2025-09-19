import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Databuddy } from "@databuddy/sdk/react";
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
  title: "Sharemind — An app that tells you what's happening around",
  description: "Sharemind is an app that tells you what's happening around.",
  keywords: [
    "Ora Browser",
    "macOS browser",
    "WebKit browser",
    "native macOS browser",
    "SwiftUI browser",
    "fast browser",
    "secure browser",
    "beautiful browser",
    "minimal browser",
    "clean browser",
    "privacy-first browsing",
    "distraction-free browsing",
    "native experience",
    "tab management",
    "content blocker",
    "Safari alternative",
    "macOS native app",
    "Arc alternative",
    "Arc browser alternative",
    "better than Arc",
    "Arc replacement",
    "Zen alternative",
    "Zen browser alternative",
    "better than Zen",
    "Zen replacement",
    "Dia alternative",
    "Dia browser alternative",
    "better than Dia",
    "Dia replacement",
    "Brave alternative",
    "Chrome alternative",
    "SigmaOS alternative",
    "Firefox alternative",
    "Edge alternative",
    "Vivaldi alternative",
    "Opera alternative",
    "modern browser alternative",
    "productivity browser alternative",
    "aesthetic browser alternative",
  ],
  authors: [{ name: "The Sharemind Team" }],
  creator: "The Sharemind Team",
  publisher: "The Sharemind Team",
  category: "Social",
  classification: "Social Networking Application",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-token",
  // },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sharemind — An app that tells you what's happening around",
    description: "Sharemind is an app that tells you what's happening around.",
    type: "website",
    url: "https://sharemind.app",
    siteName: "Sharemind",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sharemind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharemind — An app that tells you what's happening around",
    description: "Sharemind is an app that tells you what's happening around.",
    creator: "@sharemindapp",
    site: "@sharemindapp",
    images: ["/opengraph-image.png"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
          <Databuddy
            clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID!}
            trackWebVitals
            trackErrors
            enableBatching
          />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                borderRadius: 0,
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
