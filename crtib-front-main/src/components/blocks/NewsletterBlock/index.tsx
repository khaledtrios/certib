"use client";

import React, { useState } from "react";
import { type Labels, DEFAULT_LABELS } from "@/lib/labels";

interface NewsletterBlockProps {
  heading: string;
  description?: string | null;
  buttonLabel?: string | null;
  labels?: Labels;
}

type FormStatus = "idle" | "loading" | "success" | "error" | "duplicate";

export function NewsletterBlock({
  heading,
  description,
  buttonLabel,
  labels = DEFAULT_LABELS,
}: NewsletterBlockProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        setStatus("success");
        setEmail("");
        return;
      }

      if (response.status === 409) {
        setStatus("duplicate");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const label = buttonLabel || labels.newsletter_subscribe;
  const feedbackStatus =
    status !== "idle" && status !== "loading" ? status : null;

  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-xl bg-[#08AA86] px-8 py-10">
          <h2 className="mb-2 text-xl font-bold text-white">{heading}</h2>
          {description && (
            <p className="mb-6 text-sm text-white/80">{description}</p>
          )}

          {status === "success" ? (
            <p className="rounded-md bg-white/20 px-5 py-3 text-sm font-medium text-white">
              {labels.newsletter_success}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {labels.newsletter_email_label}
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={labels.newsletter_email_placeholder}
                required
                disabled={status === "loading"}
                className="flex-1 rounded-md border border-transparent bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#08AA86] transition-opacity hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? labels.newsletter_sending : label}
              </button>
            </form>
          )}

          {feedbackStatus && feedbackStatus !== "success" && (
            <p
              className={`mt-4 text-sm ${feedbackStatus === "duplicate" ? "text-yellow-200" : "text-red-200"}`}
            >
              {feedbackStatus === "duplicate" ? labels.newsletter_duplicate : labels.newsletter_error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
