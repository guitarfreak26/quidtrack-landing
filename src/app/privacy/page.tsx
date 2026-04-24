import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "QuidTrack — Privacy Policy",
  robots: { index: false, follow: false },
};

const privacyMarkdown = readFileSync(
  join(process.cwd(), "src/content/quidtrack-privacy-policy.md"),
  "utf8"
);

export default function Page() {
  return (
    <main className="legal-page">
      <Link href="/" className="legal-back">
        ← QuidTrack
      </Link>
      <div className="legal-markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{privacyMarkdown}</ReactMarkdown>
      </div>
    </main>
  );
}
