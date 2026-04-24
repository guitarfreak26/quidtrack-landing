import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuidTrack — Track every quid. Cancel what you don't.",
  description: "The UK subscription tracker built for people tired of paying monthly fees to track monthly fees. £4.99 one-time. No bank logins. On Google Play.",
  icons: { icon: "/assets/a2b5841c-07db-456e-b491-75cfcc80793d.svg" },
  openGraph: {
    title: "QuidTrack — Track every quid. Cancel what you don't.",
    description: "UK-native subscription tracking. Pay once, track every quid.",
    url: "https://quidtrack.app",
    siteName: "QuidTrack",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-mode="dark" data-accent="purple">
      <body>{children}</body>
    </html>
  );
}
