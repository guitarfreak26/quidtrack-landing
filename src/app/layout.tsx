import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuidTrack — Free to try. £4.99 to unlock forever.",
  description: "UK-native subscription tracking. Start free with manual entry for up to 5 subscriptions, then unlock Pro forever for £4.99 at launch. No bank logins.",
  icons: { icon: "/assets/a2b5841c-07db-456e-b491-75cfcc80793d.svg" },
  openGraph: {
    title: "QuidTrack — Free to try. £4.99 to unlock forever.",
    description: "Free to start. Pay once, track every quid. No bank data required for manual entry.",
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
