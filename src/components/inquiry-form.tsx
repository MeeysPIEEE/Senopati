"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";
import { SUBJECT_OPTIONS } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

interface InquiryFormProps {
  source: "kontak" | "unit-bisnis" | "beranda";
  initialSubject?: string;
}

const initialFields = {
  fullName: "",
  company: "",
  email: "",
  whatsapp: "",
  subject: "",
  message: "",
  website: "", // honeypot
};

const inputClass =
  "w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-[14.5px] text-navy-900 placeholder:text-steel-300 outline-none transition-all duration-300 focus:border-gold-400 focus:ring-4 focus:ring-gold-400/15";

const labelClass =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-navy-800";

export default function InquiryForm({ source, initialSubject }: InquiryFormProps) {
  const [fields, setFields] = useState({
    ...initialFields,
    subject: initialSubject ?? "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const set = (key: keyof typeof initialFields, value: string) =>
    setFields((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, source }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Terjadi kendala saat mengirim pesan.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kendala. Silakan coba beberapa saat lagi."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-gold-400/40 bg-gold-50 px-8 py-14 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-500/15">
          <CheckCircle2 className="h-8 w-8 text-gold-600" />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-navy-900">
          Pesan Terkirim
        </h3>
        <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-steel-500">
          Terima kasih, {fields.fullName.split(" ")[0] || "Bapak/Ibu"}. Tim kami
          akan menghubungi Anda maksimal 1×24 jam pada hari kerja.
        </p>
        <button
          onClick={() => {
            setFields({ ...initialFields, subject: initialSubject ?? "" });
            setStatus("idle");
          }}
          className="mt-7 rounded-full border border-navy-900/15 px-6 py-3 text-sm font-bold text-navy-900 transition hover:border-gold-500 hover:text-gold-600"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`nama-${source}`} className={labelClass}>
            Nama Lengkap <span className="text-gold-600">*</span>
          </label>
          <input
            id={`nama-${source}`}
            type="text"
            required
            maxLength={160}
            value={fields.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            placeholder="Nama Anda"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor={`perusahaan-${source}`} className={labelClass}>
            Perusahaan / Instansi
          </label>
          <input
            id={`perusahaan-${source}`}
            type="text"
            maxLength={200}
            value={fields.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="Opsional"
            className={inputClass}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor={`email-${source}`} className={labelClass}>
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id={`email-${source}`}
            type="email"
            required
            maxLength={200}
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="nama@perusahaan.co.id"
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor={`wa-${source}`} className={labelClass}>
            Nomor WhatsApp <span className="text-gold-600">*</span>
          </label>
          <input
            id={`wa-${source}`}
            type="tel"
            required
            maxLength={40}
            value={fields.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
            placeholder="08xx-xxxx-xxxx"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`subjek-${source}`} className={labelClass}>
          Subjek — Pilih Unit Bisnis <span className="text-gold-600">*</span>
        </label>
        <select
          id={`subjek-${source}`}
          required
          value={fields.subject}
          onChange={(e) => set("subject", e.target.value)}
          className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235c6b7d%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10 ${fields.subject ? "" : "text-steel-300"}`}
        >
          <option value="" disabled>
            Pilih kebutuhan Anda…
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="text-navy-900">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`pesan-${source}`} className={labelClass}>
          Pesan <span className="text-gold-600">*</span>
        </label>
        <textarea
          id={`pesan-${source}`}
          required
          rows={5}
          maxLength={4000}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Ceritakan kebutuhan material, volume, atau rencana kerja sama Anda…"
          className={`${inputClass} resize-none leading-relaxed`}
        />
      </div>

      {/* Honeypot — disembunyikan dari pengguna, menjebak bot */}
      <input
        type="text"
        name="website"
        value={fields.website}
        onChange={(e) => set("website", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-navy-900 py-4 text-[15px] font-bold text-paper transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_12px_36px_rgba(10,29,51,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Mengirim…
          </>
        ) : (
          <>
            Kirim Inquiry
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="flex items-center justify-center gap-2 text-center text-[12px] text-steel-400">
        <ShieldCheck className="h-4 w-4 shrink-0 text-gold-500" />
        Data Anda tersimpan aman & hanya digunakan untuk komunikasi bisnis.
      </p>
    </form>
  );
}
