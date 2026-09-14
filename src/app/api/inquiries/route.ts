import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { SUBJECT_OPTIONS } from "@/lib/data";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SOURCES = ["kontak", "unit-bisnis", "beranda"];

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function fail(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return fail("Format permintaan tidak valid.");
  }

  // Honeypot anti-spam: bot yang mengisi field tersembunyi dibalas sukses
  // tanpa menyimpan apa pun ke database.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = clean(body.fullName, 160);
  const company = clean(body.company, 200);
  const email = clean(body.email, 200).toLowerCase();
  const whatsapp = clean(body.whatsapp, 40);
  const subjectRaw = clean(body.subject, 120);
  const message = clean(body.message, 4000);
  const sourceRaw = clean(body.source, 60);
  const source = SOURCES.includes(sourceRaw) ? sourceRaw : "kontak";

  if (!fullName || fullName.length < 2) {
    return fail("Nama lengkap wajib diisi dengan benar.");
  }
  if (!EMAIL_RE.test(email)) {
    return fail("Alamat email tidak valid.");
  }
  const digits = whatsapp.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 16) {
    return fail("Nomor WhatsApp tidak valid.");
  }
  const subject = SUBJECT_OPTIONS.includes(subjectRaw)
    ? subjectRaw
    : "Kerja Sama Umum / Lainnya";
  if (message.length < 10) {
    return fail("Pesan terlalu singkat — jelaskan kebutuhan Anda (min. 10 karakter).");
  }

  try {
    await db.insert(inquiries).values({
      fullName,
      company: company || null,
      email,
      whatsapp,
      subject,
      message,
      source,
      status: "baru",
    });
  } catch (error) {
    console.error("[inquiries] gagal menyimpan:", error);
    return fail(
      "Sistem sedang sibuk. Silakan coba lagi atau hubungi kami via WhatsApp.",
      500
    );
  }

  // Notifikasi opsional: jika NOTIFY_WEBHOOK_URL di-set (Slack/Discord/relay
  // email internal), payload inquiry diteruskan ke sana secara server-side.
  const hook = process.env.NOTIFY_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `Inquiry baru (${subject}) dari ${fullName} <${email}> — WA: ${whatsapp}`,
        }),
      });
    } catch (error) {
      console.error("[inquiries] notifikasi webhook gagal:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
