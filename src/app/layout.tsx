import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PUNKU.AI - AI Workers for Tours, Activities & Attractions",
  description: "AI workers that actually work. Automate bookings, customer service, and operations for your tour business. Pick pre-built workers or describe what you want.",
  keywords: "AI workers, tour automation, booking automation, tour operators, activities automation, attractions automation, AI for tours",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "PUNKU.AI - AI Workers That Actually Work",
    description: "Automate your tour business with AI workers. Handle bookings, reviews, and operations automatically.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
