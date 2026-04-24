import Link from "next/link";

export const metadata = { title: "QuidTrack Terms of Use" };

export default function Page() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">← QuidTrack</Link>
      <h1>Terms of Use</h1>
      <p className="updated">Last updated: 24 April 2026</p>
      <p>QuidTrack is provided as a subscription tracking tool. You remain responsible for checking charges, cancelling services, and verifying reminders. The app does not provide financial advice and does not cancel subscriptions on your behalf.</p>
      <h2>Contact</h2>
      <p>Email <a href="mailto:support@quidtrack.app">support@quidtrack.app</a>.</p>
    </main>
  );
}
