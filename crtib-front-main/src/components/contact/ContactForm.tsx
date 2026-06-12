"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#08AA86] focus:outline-none focus:ring-1 focus:ring-[#08AA86] disabled:opacity-60 transition-colors";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-[#f0fdf9] border border-[#08AA86]/30 px-8 py-12 text-center">
        <CheckCircle className="w-12 h-12 text-[#08AA86]" />
        <h3 className="text-base font-semibold text-[#2F2F2F]">Message envoyé !</h3>
        <p className="text-sm text-gray-600">Nous vous répondrons dans les meilleurs délais.</p>
        <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="mt-2 text-sm text-[#08AA86] underline hover:text-[#068a6c]">
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-600">
            Nom <span className="text-red-400">*</span>
          </label>
          <input type="text" required placeholder="Votre nom" value={form.name} onChange={set("name")} disabled={status === "loading"} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-600">
            Email <span className="text-red-400">*</span>
          </label>
          <input type="email" required placeholder="votre@email.com" value={form.email} onChange={set("email")} disabled={status === "loading"} className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-600">Sujet</label>
        <select value={form.subject} onChange={set("subject")} disabled={status === "loading"} className={inputClass}>
          <option value="">Choisir un sujet…</option>
          <option value="Marchés publics">Marchés publics</option>
          <option value="Performance énergétique">Performance énergétique</option>
          <option value="Construction durable">Construction durable</option>
          <option value="Digitalisation / BIM">Digitalisation / BIM</option>
          <option value="Formation">Formation</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold uppercase tracking-wide text-gray-600">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea required rows={6} placeholder="Votre message…" value={form.message} onChange={set("message")} disabled={status === "loading"}
          className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">Une erreur est survenue. Veuillez réessayer ou nous contacter par email.</p>
      )}

      <button type="submit" disabled={status === "loading"}
        className="flex items-center justify-center gap-2 rounded-md bg-[#08AA86] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60">
        <Send className="w-4 h-4" />
        {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
    </form>
  );
}
