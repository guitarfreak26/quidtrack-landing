"use client";

import { FormEvent, useState } from "react";

const DEFAULT_DELETE_ACCOUNT_FUNCTION_URL =
  "https://europe-west2-quidtrack-b6ff1.cloudfunctions.net/requestAccountDeletion";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const endpoint =
    process.env.NEXT_PUBLIC_DELETE_ACCOUNT_FUNCTION_URL ?? DEFAULT_DELETE_ACCOUNT_FUNCTION_URL;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !confirmed) {
      setSubmitState("error");
      setErrorMessage("Enter your account email and tick the confirmation box.");
      return;
    }

    setSubmitState("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reason,
          confirmed,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not submit the request.");
      }

      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? `${error.message} Email support@quidtrack.app and we will handle it manually.`
          : "Could not submit the request. Email support@quidtrack.app and we will handle it manually."
      );
    }
  }

  if (submitState === "success") {
    return (
      <div className="delete-success" role="status">
        <h2>Request received</h2>
        <p>
          We&apos;ve received your request. Your account and all associated data will be deleted
          within 30 days.
        </p>
        <p>
          If we need to verify anything, we&apos;ll contact you at the email address you provided.
        </p>
      </div>
    );
  }

  return (
    <form className="delete-form" onSubmit={handleSubmit}>
      <label>
        Account email
        <input
          autoComplete="email"
          inputMode="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          type="email"
          value={email}
        />
      </label>

      <label>
        Reason (optional)
        <textarea
          name="reason"
          onChange={(event) => setReason(event.target.value)}
          placeholder="Tell us why you're leaving, if you want to."
          rows={5}
          value={reason}
        />
      </label>

      <label className="delete-checkbox">
        <input
          checked={confirmed}
          name="confirmed"
          onChange={(event) => setConfirmed(event.target.checked)}
          required
          type="checkbox"
        />
        <span>
          I understand this requests deletion of my QuidTrack account and associated data.
        </span>
      </label>

      {submitState === "error" ? <p className="delete-error">{errorMessage}</p> : null}

      <button className="btn-pill delete-submit" disabled={submitState === "submitting"} type="submit">
        {submitState === "submitting" ? "Submitting…" : "Request account deletion"}
      </button>
    </form>
  );
}
