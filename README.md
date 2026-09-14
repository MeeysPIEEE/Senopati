# PT Senopati Mega Nusantara — Corporate Website

Website profil perusahaan resmi **PT Senopati Mega Nusantara** — holding company serbaguna di Kendal, Jawa Tengah. Dibangun dengan **Next.js (App Router) + Tailwind CSS** untuk frontend yang cepat dan imersif, serta **API Routes + PostgreSQL (Drizzle ORM)** untuk pemrosesan formulir inquiry secara aman.

> Catatan implementasi: PRD awal merekomendasikan React (Vite) + PHP/MySQL. Stack tersebut diadaptasi ke arsitektur fullstack Next.js dengan PostgreSQL agar frontend, API, dan database berada dalam satu codebase yang konsisten, dengan kemampuan yang setara (API kontak RESTful, penyimpanan inquiry, sanitasi input, dan anti-spam).

## Fitur Utama

- **Beranda** — hero slider sinematik, overview perusahaan, grid 5 unit bisnis interaktif, statistik animasi (*Why Choose Us*), dan banner CTA.
- **Tentang Kami** — profil & sejarah, filosofi nama *Senopati Mega Nusantara*, core values, serta legalitas & struktur holding.
- **Visi & Misi** — *vision statement* dengan tipografi besar dan 5 misi strategis dalam kartu bernomor.
- **Unit Bisnis** — 5 blok editorial ber-deep-link (`#suku-cadang-mobil`, `#logam-skrap`, `#pemulihan-material`, `#pengolahan-kopi`, `#aktivitas-keuangan`) lengkap dengan CTA *Minta Penawaran Harga* dan inquiry WhatsApp per unit, plus formulir inquiry bersama.
- **Kontak** — blok info (alamat, telepon/WA, email, jam operasional), formulir inquiry (tersimpan ke database), dan Google Maps interaktif ke Jl. Soekarno Hatta No. 377, Kendal.
- **Global** — navbar responsif dengan menu mobile, footer korporat, tombol WhatsApp mengambang di semua halaman, SEO (meta, Open Graph, sitemap, robots) untuk kata kunci *Trading Logam Kendal*, *Pengolahan Kopi Kendal*, dan *PT Senopati Mega Nusantara*.

## 📋 Prerequisites / Persyaratan Sistem

1. **Node.js** v18.x atau lebih baru (disarankan v20+) & npm.
2. **PostgreSQL** v14+ (lokal atau managed) untuk penyimpanan inquiry.
3. **Visual Studio Code** dengan ekstensi: Tailwind CSS IntelliSense, Prettier, ESLint.

## 🚀 Step-by-Step Installation

### Bagian 1: Setup Database (PostgreSQL)

1. Pastikan PostgreSQL berjalan, lalu buat database:
   ```bash
   createdb db_senopati
   ```
2. Salin file `.env` (atau buat baru) di root proyek dan isi koneksi database:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/db_senopati
   ```
3. Terapkan skema tabel `inquiries` ke database:
   ```bash
   npx drizzle-kit push
   ```

### Bagian 2: Setup Environment Opsional

Notifikasi inquiry ke kanal internal (Slack/Discord/relay email) dapat diaktifkan dengan satu variabel — payload inquiry akan diteruskan secara server-side:

```env
NOTIFY_WEBHOOK_URL=https://hooks.slack.com/services/...
```

Anti-spam bawaan menggunakan **honeypot field + validasi server**. Untuk Google reCAPTCHA v3, tambahkan kunci `RECAPTCHA_SECRET_KEY` dan verifikasi token di `src/app/api/inquiries/route.ts` (titik integrasi sudah ditandai komentar).

### Bagian 3: Menjalankan Frontend

1. Install seluruh dependencies:
   ```bash
   npm install
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Buka `http://localhost:3000` di browser. Website siap di-develop!

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS 4, Plus Jakarta Sans & Instrument Serif |
| Animasi | Framer Motion |
| Ikon | Lucide Icons |
| Backend API | Next.js Route Handlers (RESTful JSON API) |
| Database | PostgreSQL via Drizzle ORM (prepared statements — aman dari SQL Injection) |
| Email/Notifikasi | Webhook server-side via `NOTIFY_WEBHOOK_URL` |

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── page.tsx              # Beranda
│   ├── tentang-kami/         # Profil, filosofi nama, legalitas & holding
│   ├── visi-misi/            # Vision statement & misi strategis
│   ├── unit-bisnis/          # 5 blok unit bisnis + formulir inquiry
│   ├── kontak/               # Info kontak, formulir, peta interaktif
│   └── api/
│       ├── inquiries/        # POST — simpan inquiry ke database
│       └── health/           # Healthcheck database
├── components/               # Navbar, footer, hero slider, form, dll.
├── lib/                      # Konstanta situs & data unit bisnis
└── db/                       # Koneksi PostgreSQL + skema Drizzle
```

## 🔒 Keamanan

- Validasi & sanitasi seluruh input di server (panjang maksimum, format email, nomor telepon, whitelist subjek).
- **Honeypot field** anti-bot pada formulir.
- Drizzle ORM menggunakan prepared statements — kebal SQL Injection.
- Output React ter-escape secara default — perlindungan XSS bawaan.
- HTTPS wajib di production (aktifkan force-HTTPS di platform hosting).

## 📦 Build & Production Deployment

```bash
npm run build       # kompilasi production
npm run start       # jalankan server production (port 3000)
```

Deploy ke platform Node.js apa pun (VPS, Vercel, container), pastikan `DATABASE_URL` mengarah ke PostgreSQL production dan `npx drizzle-kit push` sudah dijalankan terhadap database tersebut.
