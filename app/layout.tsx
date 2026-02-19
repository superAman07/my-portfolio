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

// TODO: Add Bierika @font-face once you have the font files
// For now, headings will fallback to "Arial Black"

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Developer & Creative Designer",
  description:
    "Creative portfolio showcasing full-stack web development projects, skills, and expertise in React, Next.js, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Developer & Creative Designer",
    description:
      "Creative portfolio showcasing full-stack web development projects and skills.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Developer & Creative Designer",
    description:
      "Creative portfolio showcasing full-stack web development projects and skills.",
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