import {
  Award,
  BadgeCheck,
  CarFront,
  Coffee,
  Factory,
  Handshake,
  Infinity as InfinityIcon,
  Landmark,
  Layers,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface BusinessUnit {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  short: string;
  paragraphs: string[];
  bullets: string[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    slug: "suku-cadang-mobil",
    index: "01",
    title: "Perdagangan Suku Cadang & Aksesori Mobil",
    tagline: "Otomotif & Aftermarket",
    short: "Supplier grosir suku cadang dan aksesori kendaraan roda empat & niaga dengan jaringan distribusi yang luas.",
    paragraphs: [
      "Kami melayani perdagangan besar suku cadang, komponen, dan aksesori kendaraan roda empat — dari kebutuhan bengkel skala menengah-besar hingga jaringan ritel otomotif. Setiap komponen dikurasi melalui proses seleksi pemasok yang ketat demi menjamin keaslian dan performa.",
      "Dengan manajemen stok terintegrasi dan mitra logistik yang andal, kami memastikan ketersediaan barang serta ketepatan waktu pengiriman ke seluruh wilayah operasional.",
    ],
    bullets: [
      "Suku cadang mesin, kaki-kaki, & kelistrikan",
      "Aksesori & perlengkapan kendaraan niaga",
      "Pengadaan grosir untuk bengkel & jaringan ritel",
      "Manajemen stok & distribusi terjadwal",
    ],
    image: "/images/unit-suku-cadang.jpg",
    imageAlt: "Suku cadang dan komponen otomotif di gudang industri",
    icon: CarFront,
  },
  {
    slug: "logam-skrap",
    index: "02",
    title: "Perdagangan Produk Logam & Skrap",
    tagline: "Metal Trading",
    short: "Penjualan logam setengah jadi, besi/baja bekas, dan material sisa industri (scrap) untuk kebutuhan manufaktur.",
    paragraphs: [
      "Unit usaha ini berfokus pada perdagangan besar produk logam — mulai dari logam setengah jadi hingga besi/baja bekas dan material sisa produksi (scrap). Kami menjembatani kebutuhan industri manufaktur akan pasokan material yang stabil, terukur kualitasnya, dan kompetitif harganya.",
      "Setiap transaksi didukung proses grading dan penimbangan yang transparan, sehingga mitra mendapatkan kepastian mutu maupun volume pada setiap pengiriman.",
    ],
    bullets: [
      "Logam setengah jadi untuk industri manufaktur",
      "Besi & baja bekas hasil sortir berkualitas",
      "Material sisa industri (scrap) terverifikasi",
      "Timbangan & grading yang transparan",
    ],
    image: "/images/unit-logam.jpg",
    imageAlt: "Tumpukan balok baja dan produk logam di gudang",
    icon: Layers,
  },
  {
    slug: "pemulihan-material",
    index: "03",
    title: "Pemulihan Material Logam",
    tagline: "Metal Recovery",
    short: "Jasa pengolahan dan daur ulang scrap logam untuk efisiensi material dan mendukung ekonomi sirkular.",
    paragraphs: [
      "Melalui lini pemulihan material, kami mengolah kembali limbah dan sisa logam menjadi bahan baku bernilai ekonomis. Proses sortir, pemisahan, dan pengolahan dirancang untuk memaksimalkan rendemen material bagi mitra industri.",
      "Lebih dari sekadar efisiensi, unit ini adalah komitmen kami terhadap praktik industri yang lebih berkelanjutan dan ekonomi sirkular di Jawa Tengah.",
    ],
    bullets: [
      "Sortir & pemisahan material logam",
      "Pengolahan scrap menjadi bahan baku siap guna",
      "Efisiensi material & pengurangan limbah",
      "Dukungan nyata ekonomi sirkular",
    ],
    image: "/images/unit-pemulihan.jpg",
    imageAlt: "Crane industri memilah skrap logam di fasilitas daur ulang",
    icon: Recycle,
  },
  {
    slug: "pengolahan-kopi",
    index: "04",
    title: "Pengolahan Kopi",
    tagline: "Agribisnis & Komoditas",
    short: "Pemrosesan komoditas kopi lokal Kendal hingga siap didistribusikan ke pasar grosir dan industri.",
    paragraphs: [
      "Dari tanah Kendal, kami mengolah komoditas kopi lokal melalui proses sortasi, pengeringan, dan penyangraian terkontrol hingga menghasilkan biji kopi siap distribusi. Standar mutu dijaga pada setiap tahap pengolahan.",
      "Unit ini memberdayakan petani lokal sekaligus membuka akses pasar grosir yang lebih luas — membawa kopi Nusantara ke meja industri dan konsumen.",
    ],
    bullets: [
      "Sortasi & pengeringan biji kopi",
      "Penyangraian dengan profil terkontrol",
      "Kemitraan langsung dengan petani lokal Kendal",
      "Distribusi ke pasar grosir & industri",
    ],
    image: "/images/unit-kopi.jpg",
    imageAlt: "Sortir biji kopi di fasilitas pengolahan Kendal",
    icon: Coffee,
  },
  {
    slug: "aktivitas-keuangan",
    index: "05",
    title: "Aktivitas Keuangan & Holding",
    tagline: "Financial Activities",
    short: "Manajemen investasi internal, perdagangan pasar keuangan, dan tata kelola strategis seluruh unit usaha.",
    paragraphs: [
      "Sebagai perusahaan holding, kami menjalankan aktivitas keuangan secara prudent — mulai dari pengelolaan investasi internal dan transaksi di pasar keuangan hingga konsolidasi tata kelola seluruh unit usaha.",
      "Fungsi ini memastikan setiap lini bisnis bertumbuh di atas fondasi finansial yang sehat, transparan, dan akuntabel bagi seluruh pemangku kepentingan.",
    ],
    bullets: [
      "Holding company & tata kelola korporat",
      "Manajemen investasi internal yang prudent",
      "Aktivitas perdagangan di pasar keuangan",
      "Konsolidasi & pengendalian unit usaha",
    ],
    image: "/images/unit-keuangan.jpg",
    imageAlt: "Ruang rapat korporat dengan grafik keuangan",
    icon: Landmark,
  },
];

export const SUBJECT_OPTIONS = [
  ...BUSINESS_UNITS.map((u) => u.title),
  "Kerja Sama Umum / Lainnya",
];

export const STATS = [
  { value: 5, suffix: "", label: "Unit Bisnis Strategis" },
  { value: 4, suffix: "", label: "Sektor Industri Utama" },
  { value: 100, suffix: "%", label: "Legalitas & Kepatuhan" },
  { value: 24, suffix: "", label: "Jam Waktu Respons" },
];

export const STRENGTHS = [
  {
    icon: ShieldCheck,
    title: "Legalitas Jelas",
    text: "Berbadan hukum Perseroan Terbatas resmi dan beroperasi sesuai klasifikasi baku lapangan usaha (KBLI).",
  },
  {
    icon: Handshake,
    title: "Kemitraan Luas",
    text: "Jaringan pemasok, bengkel, pengepul, hingga lembaga keuangan yang terjalin lintas sektor industri.",
  },
  {
    icon: BadgeCheck,
    title: "Kualitas Terjamin",
    text: "Kurasi pemasok dan kontrol mutu berlapis diterapkan pada setiap rantai pasokan unit bisnis.",
  },
  {
    icon: Truck,
    title: "Jangkauan Distribusi",
    text: "Logistik terjadwal dari Kendal menjangkau pasar regional Jawa Tengah dan seluruh Nusantara.",
  },
];

export const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integritas",
    text: "Kejujuran dan kepatuhan menjadi fondasi setiap keputusan dan transaksi perusahaan.",
  },
  {
    icon: Award,
    title: "Profesionalisme",
    text: "Standar kerja korporat diterapkan disiplin di seluruh lini — dari gudang hingga ruang direksi.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    text: "Kami terus memperbarui proses, teknologi, dan model kemitraan untuk menciptakan nilai tambah.",
  },
  {
    icon: InfinityIcon,
    title: "Kemitraan Berkelanjutan",
    text: "Hubungan jangka panjang yang saling menguntungkan dengan mitra, petani, dan komunitas.",
  },
];

export const MISSIONS = [
  {
    icon: Factory,
    title: "Rantai Pasok Andal",
    text: "Menghadirkan rantai pasok suku cadang, produk logam, dan komoditas yang stabil dan berkualitas bagi mitra industri.",
  },
  {
    icon: Recycle,
    title: "Material Berkelanjutan",
    text: "Mengembangkan praktik pemulihan dan daur ulang material yang efisien demi industri yang lebih lestari.",
  },
  {
    icon: Coffee,
    title: "Nilai Tambah Lokal",
    text: "Meningkatkan nilai tambah komoditas Kendal melalui pengolahan kopi berstandar mutu untuk pasar grosir.",
  },
  {
    icon: Landmark,
    title: "Tata Kelola Prudent",
    text: "Menjaga pengelolaan keuangan dan investasi yang transparan, akuntabel, dan bertanggung jawab.",
  },
  {
    icon: Handshake,
    title: "Kemitraan Jangka Panjang",
    text: "Membangun hubungan yang saling menguntungkan dan berkelanjutan dengan prinsip integritas.",
  },
];

export const VISION =
  "Menjadi holding company terpercaya yang menggerakkan roda industri, perdagangan, dan investasi berkelanjutan — dari Kendal, untuk Nusantara.";
