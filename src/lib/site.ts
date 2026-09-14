export const SITE = {
  name: "PT Senopati Mega Nusantara",
  shortName: "Senopati Mega Nusantara",
  tagline: "Holding Industri, Trading & Investasi",
  domain: "https://www.senopatimeganusantara.co.id",
  description:
    "PT Senopati Mega Nusantara adalah holding company serbaguna di Kendal, Jawa Tengah — perdagangan suku cadang mobil, produk logam & skrap, pemulihan material, pengolahan kopi, dan aktivitas keuangan.",
  address:
    "Jalur Lambat, Jl. Soekarno Hatta No. 377, Desa/Kelurahan Langenharjo, Kec. Kendal, Kab. Kendal, Jawa Tengah 51314",
  addressShort: "Jl. Soekarno Hatta No. 377, Kendal, Jawa Tengah 51314",
  phoneDisplay: "0813-3299-3706",
  phoneIntl: "+6281332993706",
  phoneRaw: "081332993706",
  email: "senopatimeganusantara01@gmail.com",
  hours: ["Senin – Jumat · 08.00 – 17.00 WIB", "Sabtu · 08.00 – 14.00 WIB"],
  mapsEmbed:
    "https://www.google.com/maps?q=Jl.+Soekarno+Hatta+No.+377,+Langenharjo,+Kendal,+Jawa+Tengah+51314&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Soekarno+Hatta+No.+377+Langenharjo+Kendal+Jawa+Tengah+51314",
} as const;

export function waLink(message: string) {
  return `https://wa.me/6281332993706?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Halo PT Senopati Mega Nusantara, saya ingin berkonsultasi mengenai peluang kerja sama."
);

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/visi-misi", label: "Visi & Misi" },
  { href: "/unit-bisnis", label: "Unit Bisnis" },
  { href: "/kontak", label: "Kontak" },
] as const;
