import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Vishwakarma — Full-Stack Developer & Creative Designer",
  description:
    "Portfolio of Aman Vishwakarma — a Full-Stack Developer and UI/UX Designer from Lucknow, India. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Aman Vishwakarma",
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Aman Vishwakarma" }],
  openGraph: {
    title: "Aman Vishwakarma — Full-Stack Developer & Creative Designer",
    description:
      "Portfolio of Aman Vishwakarma — a Full-Stack Developer and UI/UX Designer specializing in React, Next.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Aman Vishwakarma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Vishwakarma — Full-Stack Developer & Creative Designer",
    description:
      "Portfolio of Aman Vishwakarma — a Full-Stack Developer and UI/UX Designer specializing in React, Next.js, and modern web technologies.",
    creator: "@superAman_7",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang= "en" >
      <body className={ `${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased` }>
        { children }
      </body>
    </html>
  );
}