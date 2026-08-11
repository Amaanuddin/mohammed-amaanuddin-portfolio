import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Mohammed Amaanuddin Parvez — Senior Backend & AI Engineer",
    description:
      "Senior backend engineer building production AI systems, scalable SaaS platforms, and cloud-native products.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Mohammed Amaanuddin Parvez — Senior Backend & AI Engineer",
      description: "Backend systems that make AI useful.",
      type: "website",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Mohammed Amaanuddin Parvez — Backend systems that make AI useful." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mohammed Amaanuddin Parvez — Senior Backend & AI Engineer",
      description: "Backend systems that make AI useful.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
