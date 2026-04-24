import Link from "next/link";

export const metadata = { title: "QuidTrack Privacy Policy" };

export default function Page() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">← QuidTrack</Link>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: 24 April 2026</p>
      <p>QuidTrack is built around local-first subscription tracking. We do not sell personal data. Bank CSV imports are processed on your device. If you contact us or join the iOS waitlist, we use your email only to respond or send the relevant launch update.</p>
      <h2>Contact</h2>
      <p>Email <a href="mailto:support@quidtrack.app">support@quidtrack.app</a>.</p>
    </main>
  );
}
