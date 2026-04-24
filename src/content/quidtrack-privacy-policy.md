# QuidTrack Privacy Policy

**Last updated:** 24 April 2026
**Effective date:** 24 April 2026

## Plain English summary

QuidTrack is designed to keep your most sensitive financial data **on your device**. Bank, PayPal, Emma, and Snoop CSV imports are parsed locally. We never receive your bank statements, PayPal export files, account number, balance, or full transaction history.

QuidTrack is free to download — you can track up to 5 recurring outgoings without paying anything or creating an account with us. If you upgrade to QuidTrack Pro (£4.99 one-time launch price) to unlock unlimited bills, subscriptions, and extra features, Google Play handles the payment. We never see your card details.

The only things we collect directly: your email if you join the iOS waitlist, anonymous app/account identifiers needed for sync, and — if you upgrade to Pro — a purchase record handled by Google Play and RevenueCat. If you enable sync, only the recurring outgoings you choose to save are stored in your private Firebase user area.

If you want the full legal version, keep reading.

---

## 1. Who we are

**Data controller:** ALARA Studios Ltd, a company registered in England and Wales (Company Number 16985196).

**Registered office:** [REGISTERED OFFICE — to be added before launch]

**Contact:** privacy@quidtrack.app

We are the "data controller" under UK GDPR for the limited data described below.

## 2. What data we collect

### 2.1 Data you give us directly

- **Email address** — only if you voluntarily join the iOS launch waitlist on our website. Used solely to email you once when the iOS app is available, plus occasional critical updates (e.g. a security issue). You can unsubscribe at any time.

### 2.2 Data collected by Google Play (only if you upgrade to Pro)

- **Purchase record** — QuidTrack is free to download with a 5-outgoing free tier. If you choose to upgrade to QuidTrack Pro (£4.99 one-time at launch, £9.99 after the first 1,000 customers) to unlock unlimited tracking and extra features, Google Play processes the payment and stores the purchase record against your Google account. We do not receive your card details, name, or address. We receive only an anonymised purchase confirmation so Pro features unlock on your devices. If you stay on the free tier, no purchase record exists. Google's privacy policy governs this data: https://policies.google.com/privacy

### 2.3 Bank, PayPal, Emma, and Snoop CSV import data

- **CSV files are parsed locally on your device.** We never receive, upload, store, or process your bank statements, PayPal Automatic Payments exports, Emma exports, or Snoop exports on our servers.
- **Account numbers, balances, and full transaction histories never leave your phone.**
- QuidTrack extracts recurring payment candidates locally, shows them for review, and immediately discards the raw CSV content after parsing.
- If you choose to add a detected recurring outgoing, only the structured item you selected is saved (name, amount, billing cycle, next payment date, category, notes, and optional links).

### 2.4 Data we deliberately do NOT collect

- Your bank statements or bank login credentials
- Your raw CSV files, account number, balance, or full transaction history
- Analytics, crash reports, or behavioural tracking
- Your name, address, phone number, or date of birth
- Your location

### 2.5 Data stored on your device or in sync

- **Outgoings data, catalogue, preferences** — stored locally on your device.
- **Optional cloud sync** — if you enable sync, your saved recurring outgoings and settings are stored in Firebase Firestore under your anonymous or signed-in user ID. Source CSV data is never synced.
- **On this device only** — you can choose not to use sync. In that mode your saved outgoings remain local to that device.

## 3. Legal basis for processing (UK GDPR Article 6)

- **Email waitlist:** consent (Article 6(1)(a)). You opted in by submitting the form.
- **Pro purchase fulfilment:** contract performance (Article 6(1)(b)). If you upgrade to QuidTrack Pro, we need the purchase record to unlock the Pro features you paid for. Free-tier users are not subject to this processing.
- **Local CSV import:** contract performance (Article 6(1)(b)). Bank, PayPal, Emma, and Snoop CSV parsing is needed to provide the import feature you requested, and happens locally on your device.
- **Optional sync:** contract performance (Article 6(1)(b)). If you enable sync, we store your chosen QuidTrack data so it can appear on your devices.

## 4. How long we keep your data

- **Waitlist email:** deleted within 30 days of the iOS launch email being sent, or immediately on your unsubscribe request — whichever comes first.
- **Purchase record (Pro upgraders only):** retained as long as Google Play retains it, per Google's policies. We have no separate copy.
- **Raw CSV data:** discarded immediately after local parsing. It is never sent to our servers.
- **On-device data:** retained until you delete the app or clear the data. We cannot delete local-only data for you — it's on your device.
- **Synced data:** retained while your QuidTrack account/sync profile exists. You can request deletion by emailing privacy@quidtrack.app.

## 5. Who we share your data with

We do not sell, rent, or trade your data. Ever.

We share limited data only with the following service providers, strictly to run the product:

| Service | What they receive | Why |
|---|---|---|
| Google Play | Purchase record | Payment processing + licence verification |
| RevenueCat | Anonymous purchase/customer identifier and entitlement status | Pro purchase validation and restore purchases |
| Firebase (Google Cloud) | Anonymous auth ID, synced outgoings/settings if sync is enabled | Authentication, Firestore sync, and server-side entitlement checks |
| Netlify | Waitlist email submissions | Website hosting + form handling |

We do not share data with advertisers, data brokers, analytics companies, or marketing platforms. We do not use Anthropic, OpenAI, or any other AI provider for CSV import in v1.

## 6. International transfers

Netlify, Google Play, RevenueCat, and Firebase/Google Cloud may process data outside the UK (typically the EU or United States). These transfers rely on the UK International Data Transfer Agreement, the EU Standard Contractual Clauses, or equivalent safeguards as published by those providers.

## 7. Your rights under UK GDPR

You have the right to:

- **Access** — request a copy of any personal data we hold (for QuidTrack, that's basically just your waitlist email if you signed up).
- **Rectify** — ask us to correct inaccurate data.
- **Erase** — ask us to delete your data ("right to be forgotten").
- **Restrict or object** to our processing.
- **Portability** — receive your data in a machine-readable format.
- **Export** — request an export of synced QuidTrack data associated with your account.
- **Delete account / sync data** — request deletion of Firebase Auth and Firestore data associated with your account.
- **Withdraw consent** at any time for anything you've opted into.

To exercise any of these, email **privacy@quidtrack.app**. We will respond within 30 days.

You also have the right to complain to the UK Information Commissioner's Office (ICO) at https://ico.org.uk or 0303 123 1113 if you believe we've mishandled your data.

## 8. Children's privacy

QuidTrack is not directed at children under 13 and we do not knowingly collect data from them. If you believe a child has given us data, email us and we will delete it.

## 9. Security

- Waitlist emails are stored on Netlify, encrypted in transit (HTTPS) and at rest.
- Raw CSV imports stay on your device and are not uploaded.
- Synced QuidTrack data is stored in Firebase Firestore and protected by user-scoped access rules.
- We recommend enabling two-factor authentication on your Google / Apple account.

## 10. Not financial advice

QuidTrack is a tracking tool, not financial advice. It can help you see recurring outgoings, but decisions about debt, insurance, credit, mortgages, loans, or what to cancel are yours. For debt help or regulated financial advice, speak to a qualified adviser.

## 11. Changes to this policy

If we make material changes, we'll update the "Last updated" date at the top and — if we've collected your email — send you a notice. Continued use of the app after changes means you accept the updated policy.

## 12. Contact

**General:** hello@quidtrack.app
**Support / refunds:** support@quidtrack.app
**Privacy / UK GDPR requests:** privacy@quidtrack.app
**Response time:** within 7 days for general questions, 30 days for formal UK GDPR requests.

---

*QuidTrack is a product of ALARA Studios Ltd, a company registered in England and Wales (Company Number 16985196).*
