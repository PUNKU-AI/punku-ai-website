import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUNKU.AI - Build AI Agents Visually",
  description: "The visual AI workflow builder that transforms how you create intelligent applications. Drag, drop, and deploy powerful AI agents in minutes, not months.",
  keywords: "AI agents, visual workflow, AI automation, LangFlow, no-code AI, RAG, chatbots",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "PUNKU.AI - Build AI Agents Visually",
    description: "Drag, drop, and deploy powerful AI agents in minutes. The visual workflow builder for intelligent applications.",
    type: "website",
    url: "https://punku.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
