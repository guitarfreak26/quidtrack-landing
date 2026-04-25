import type { Metadata } from "next";
import Link from "next/link";

import DeleteAccountForm from "./DeleteAccountForm";

export const metadata: Metadata = {
  title: "QuidTrack — Delete Account",
  description: "Request deletion of your QuidTrack account and associated data.",
};

export default function Page() {
  return (
    <main className="delete-account-page">
      <Link href="/" className="legal-back">
        ← QuidTrack
      </Link>

      <section className="delete-hero">
        <p className="eyebrow">Account deletion</p>
        <h1>Delete your QuidTrack account</h1>
        <p>
          Use this form to request deletion of your QuidTrack account, Firebase sync data, and
          associated app records. You can also delete directly inside the Android app from Settings
          → Account → Delete Account.
        </p>
      </section>

      <div className="delete-grid">
        <DeleteAccountForm />

        <aside className="delete-info-card">
          <h2>What gets deleted?</h2>
          <ul>
            <li>Firebase Auth account record</li>
            <li>Firestore sync data under your user ID</li>
            <li>Saved subscriptions, settings, and history stored in sync</li>
            <li>RevenueCat customer record where technically available</li>
          </ul>
          <p>
            Google Play purchase receipts may remain in your Google account. Deleting QuidTrack data
            does not cancel or refund a Google Play purchase.
          </p>
          <p>
            Need help? Email <a href="mailto:support@quidtrack.app">support@quidtrack.app</a>.
          </p>
        </aside>
      </div>
    </main>
  );
}
