import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Fayiz T V",
  description:
    "A self-taught full-stack developer with 2+ years of experience, building scalable and performant web applications that balance clean code, user experience, and business needs.",
  keywords: [
    "Muhammed Fayiz T V",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammed Fayiz T V" }],
  creator: "Muhammed Fayiz T V",
  publisher: "Muhammed Fayiz T V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Muhammed Fayiz T V - Software Engineer",
    description:
      "A self-taught full-stack developer building scalable and user-focused web applications.",
    siteName: "Muhammed Fayiz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Fayiz T V - Software Engineer",
    description:
      "Full-stack developer specializing in modern web applications.",
  },
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
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={undefined} />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
