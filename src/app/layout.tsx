import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuidTrack — Free to try. £4.99 to unlock forever.",
  description: "UK-native recurring outgoings tracker for subscriptions, council tax, rent, mortgage, car finance, energy, broadband, insurance, and more. Start free, no bank logins.",
  icons: { icon: "/assets/a2b5841c-07db-456e-b491-75cfcc80793d.svg" },
  openGraph: {
    title: "QuidTrack — Free to try. £4.99 to unlock forever.",
    description: "Track subscriptions and real UK bills in one place: council tax, rent, mortgage, car finance, energy, broadband, insurance, and more.",
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
