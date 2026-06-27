"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    if (!form.current) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      form.current.reset();

      setSuccess("Votre message a été envoyé avec succès !");
    } catch (err: unknown) {
      console.error(err);

      setError(
        "Une erreur est survenue lors de l'envoi du message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rounded-[32px] border border-slate-800 bg-slate-900 p-10"
    >
      <div className="space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition-all duration-300 focus:border-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Adresse e-mail"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition-all duration-300 focus:border-blue-500"
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Votre message..."
          required
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition-all duration-300 focus:border-blue-500"
        />

        {success && (
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
            {success}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Envoi en cours..." : "Envoyer le message"}
        </button>

      </div>
    </form>
  );
}