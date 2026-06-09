"use client";

import { useState, type FormEvent } from "react";

interface NewsletterBlockProps {
  heading: string;
  description?: string | null;
  buttonLabel?: string | null;
}

type FormStatus = "idle" | "loading" | "success" | "error" | "duplicate";

const STATUS_MESSAGES: Record<
  Exclude<FormStatus, "idle" | "loading">,
  string
> = {
  success: "Merci ! Vous êtes maintenant abonné(e) à notre newsletter.",
  error: "Une erreur est survenue. Veuillez réessayer.",
  duplicate: "Cette adresse e-mail est déjà abonnée à notre newsletter.",
};

export function NewsletterBlock({
  heading,
  description,
  buttonLabel,
}: NewsletterBlockProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

  const label = buttonLabel || "S'abonner";
  const feedbackStatus =
    status !== "idle" && status !== "loading" ? status : null;

  return (
    <section className="w-full bg-[#1a365d] py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">{heading}</h2>
        {description && (
          <p className="mb-8 text-base text-blue-200">{description}</p>
        )}

        {status === "success" ? (
          <p className="rounded-md bg-green-100 px-6 py-4 text-sm font-medium text-green-800">
            {STATUS_MESSAGES.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              required
              disabled={status === "loading"}
              className="flex-1 rounded-md border border-transparent bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1a365d] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? "Envoi…" : label}
            </button>
          </form>
        )}

        {feedbackStatus && feedbackStatus !== "success" && (
          <p
            className={`mt-4 text-sm ${feedbackStatus === "duplicate" ? "text-yellow-300" : "text-red-300"}`}
          >
            {STATUS_MESSAGES[feedbackStatus]}
          </p>
        )}
      </div>
    </section>
  );
}
