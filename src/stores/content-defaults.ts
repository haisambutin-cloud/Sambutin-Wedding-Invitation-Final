import type { SiteContent } from "./content-types";
export const DEFAULT_CONTENT: SiteContent = {
  branding: {
    waNumber: "6285111501210",
    waMessage: "Hallo, aku mau diskusi lebih lanjut tentang undangan.",
    siteName: "Sambutin.id",
    metaTitle: "Sambutin.id — Undangan Digital Pernikahan Premium & Elegan",
    metaDescription:
      "Sambutin.id membuat undangan digital pernikahan premium, elegan, dan interaktif. RSVP online, amplop digital, live streaming, dan gratis revisi sampai hari H.",
  },
  nav: [
    { label: "Beranda", href: "#beranda" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Fitur", href: "#fitur" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
  ],
  hero: {
    script: "— mengabadikan kisah cinta",
    title: {
      pre: "Undangan Digital yang ",
      em: "Mengabadikan",
      post: " Kisah Cinta Kalian",
    },
    subtitle:
      "Website undangan pernikahan premium yang elegan, interaktif, dan mudah dibagikan kepada seluruh tamu Anda.",
    primaryCta: "Pesan via WhatsApp",
    secondaryCta: "Lihat Katalog",
    badges: [
      "Unlimited Tamu",
      "All in Fitur Undangan",
      "Custom Nama Tamu",
      "Revisi Sepuasnya",
      "Mobile Friendly",
    ],
  },
  keunggulan: {
    eyebrow: "Keunggulan kami",
    title: { pre: "Mengapa Pasangan Memilih ", em: "Sambut.in?", post: "" },
    subtitle:
      "Kami membantu ribuan pasangan membagikan momen spesial mereka dengan cara yang lebih elegan, praktis, dan berkesan.",
    items: [
      {
        title: "Praktis & Cepat Dibagikan",
        desc: "Bagikan undangan hanya dengan satu link melalui WhatsApp, Instagram, atau media sosial lainnya.",
      },
      {
        title: "Desain Elegan & Beragam",
        desc: "Pilihan desain modern, minimalis, hingga premium yang dapat disesuaikan dengan tema pernikahan.",
      },
      {
        title: "Bebas Custom Nama & Foto",
        desc: "Personalisasi nama tamu, foto prewedding, dan berbagai elemen lainnya sesuai kebutuhan.",
      },
      {
        title: "Harga Terjangkau",
        desc: "Dapatkan undangan digital premium dengan harga yang ramah di kantong.",
      },
      { title: "Proses Mudah", desc: "Proses mudah dan didampingi tim support yang responsif." },
      {
        title: "Gratis Revisi Sampai Hari H",
        desc: "Tidak perlu khawatir jika ada perubahan data atau detail acara.",
      },
      {
        title: "Tools Sebar Undangan Instan",
        desc: "Fitur khusus untuk membantu mengirim undangan ke banyak tamu secara lebih efisien.",
      },
    ],
  },
  fitur: {
    eyebrow: "Fitur unggulan",
    title: { pre: "Semua yang Kamu Butuhkan dalam ", em: "Satu Undangan", post: "" },
    subtitle: "Fitur lengkap untuk membuat pengalaman mengundang menjadi lebih mudah dan berkesan.",
    items: [
      { title: "Bebas Jumlah Tamu", desc: "Undang sebanyak mungkin tamu tanpa batas." },
      {
        title: "Bebas Request Lagu",
        desc: "Pilih musik favorit yang akan diputar di halaman undangan.",
      },
      {
        title: "Ucapan & Doa",
        desc: "Tamu dapat memberikan ucapan dan doa langsung melalui website.",
      },
      {
        title: "Kado Digital & Fisik",
        desc: "Mendukung transfer hadiah digital maupun informasi pengiriman hadiah fisik.",
      },
      {
        title: "Live Streaming",
        desc: "Bagikan momen spesial secara langsung kepada tamu yang berhalangan hadir.",
      },
      { title: "RSVP", desc: "Konfirmasi kehadiran tamu secara otomatis dan lebih terorganisir." },
    ],
  },
    portfolio: {
    eyebrow: "",
    title: { pre: "Katalog ", em: "Undangan", post: "" },
    subtitle:
      "Setiap desain dipilih untuk menyempurnakan momen yang tak terlupakan.",
    cats: ["Semua", "Elegant", "Timeless", "Doodle", "Flowy", "Ethnic"],
    items: [
      {
        title: "ELG-001",
        cat: "Elegant",
        link: "https://sambutin.id/kl-lovely-2/",
        price: "79K",
        priceOriginal: "129K",
      },
      {
        title: "ELG-001",
        cat: "Elegant",
        link: "https://sambutin.id/maroon-hijau/",
        price: "79K",
        priceOriginal: "129K",
      },
      { title: "ELG-005", cat: "Elegant", link: "https://sambutin.id/elegant-3/", price: "79K", priceOriginal: "149K", },
      { title: "ELG-006", cat: "Elegant", link: "https://sambutin.id/elegant-pink/", price: "99K", priceOriginal: "149K", },
      { title: "ELG-007", cat: "Elegant", link: "https://sambutin.id/kl-elegant-2/", price: "99K", priceOriginal: "149K", },
      { title: "ELG-008", cat: "Elegant", link: "https://sambutin.id/kl-pearl/", price: "99K", priceOriginal: "149K", },
    ],
    ctaLabel: "Pesan Undangan Sekarang",
  },

  addon: {
    eyebrow: "Add On",
    title: { pre: "Sesuaikan ", em: "Undanganmu", post: " Sesukamu" },
    subtitle: "Tambahkan layanan ekstra agar undangan digitalmu makin spesial.",
    ticketLabel: "Add On",
    items: [
      { name: "Fast Track", price: "40K - 60K" },
      { name: "Ganti Warna", price: "20K" },
      { name: "Tambah Foto (5)", price: "10K" },
      { name: "Tambah Link", price: "50K" },
      { name: "Masa Aktif", price: "20K - 100K" },
      { name: "Revisi Major", price: "10K - 50K" },
    ],
    note: "Harga sewaktu-waktu dapat berubah. Konsultasikan via WhatsApp untuk penawaran terbaik.",
  },

  process: {
    eyebrow: "",
    title: { pre: "Proses yang Mudah dan ", em: "Cepat", post: "" },
    subtitle: "Empat langkah sederhana, undangan digital impian sudah siap Anda bagikan.",
    steps: [
      {
        n: "01",
        title: "Pilih Template/Konsultasi Langsung",
        desc: "Tentukan undangan digital yang sesuai dengan kebutuhan pernikahan Anda.",
      },
      {
        n: "02",
        title: "Kirim Data",
        desc: "Kirim seluruh data acara, foto, dan preferensi desain melalui form.",
      },
      {
        n: "03",
        title: "Desain & Revisi",
        desc: "Tim kami akan mendesain undangan dan revisi sesuai keinginan Anda.",
      },
      {
        n: "04",
        title: "Undangan Siap",
        desc: "Undangan siap dibagikan via WhatsApp & media sosial lainnya.",
      },
    ],
  },
  testimoni: {
    eyebrow: "Cerita Mereka",
    title: { pre: "Cerita dari Pasangan ", em: "Bahagia", post: "" },
    subtitle: "Ribuan klien sudah mempercayai kami.",
    items: [
      {
        text: "Undangannya cantik banget! Tamu-tamu pada kagum dan banyak yang tanya dibuat di mana. Pelayanannya responsif sekali.",
        name: "Dewi Rahayu",
        meta: "Pernikahan · Nov 2024",
      },
      {
        text: "Sangat membantu! Proses pembuatannya cepat dan hasilnya melebihi ekspektasi saya. Sangat recommended!",
        name: "Budi Santoso",
        meta: "Pernikahan · Okt 2024",
      },
      {
        text: "Lucu banget designnya! Fitur RSVP-nya memudahkan banget hitungan tamu.",
        name: "Siti Aminah",
        meta: "Resepsi · Sep 2024",
      },
      {
        text: "Pelayanan prima, harga terjangkau, hasil memuaskan. Sudah 3x pakai Sambutin.id untuk acara keluarga.",
        name: "Ahmad Fauzi",
        meta: "Akad Nikah · Agu 2024",
      },
    ],
    stats: [
      { icon: "Star", label: "4.9/5 Rating" },
      { icon: "Mail", label: "500+ Undangan" },
      { icon: "Rocket", label: "Respon Cepat" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: { pre: "Pertanyaan yang Sering ", em: "Ditanyakan", post: "" },
    subtitle: "Belum menemukan jawabannya? Hubungi kami langsung via WhatsApp.",
    items: [
      {
        q: "Cara Order?",
        a: {
          type: "list",
          content: [
            "Klik tombol Order yang tersedia",
            "Anda akan diarahkan ke WhatsApp kami",
            "Silakan diskusikan kebutuhan undangan dengan tim admin",
            "Lakukan pembayaran sesuai arahan",
            "Kirimkan form beserta foto yang akan digunakan dalam undangan",
            "Tunggu proses pembuatan hingga undangan selesai",
          ],
        },
      },
      {
        q: "Proses pengerjaan berapa lama?",
        a: {
          type: "text",
          content: `Pengerjaan 3x24 Jam hari kerja, Hari Minggu & Tanggal merah tidak terhitung`,
        },
      },
      {
        q: "Bisa 1 Hari selesai?",
        a: {
          type: "text",
          content: `Bisa, Kita ada layanan prioritas

            Prioritas 24 Jam = + Rp. 40.000
            Prioritas 12 Jam = + Rp. 60.000

            *Pengerjaan menyesuaikan jam operasional
            *Sesuai ketersediaan slot fast track karena kami hanya menerima 3 pemesanan fast track setiap harinya`,
        },
      },
      {
        q: "Apakah bisa revisi?",
        a: {
          type: "text",
          content: `Bisa, Kita kasih FREE Revisi Minor sampai hari H.

            Jika ada Revisi Major (Besar), akan ada tambahan biaya menyesuaikan kesulitan revisi.`,
        },
      },
      {
        q: "Apakah bisa ganti konsep?",
        a: {
          type: "text",
          content: `Desain tidak bisa diubah jika anda sudah melakukan pembayaran sesuai diskusi awal dengan admin.`,
        },
      },
      {
        q: "Berapa batas maksimal foto?",
        a: {
          type: "text",
          content: `Maksimal 10 Foto sudah termauk kebutuhan :
              - Cover
              - Profil Pengantin
              - Background Utama

              Jika ingin ada tambahan foto, dikenakan biaya Rp. 10.000/5 Foto`,
        },
      },
      {
        q: "Bisa tambah video Prewed?",
        a: {
          type: "text",
          content: `Bisa, Jika tanpa foto akan kami hilangkan opsi Gallery.
              Profil akan kami ganti dengan animasi atau foto lain untuk memperindah undanganmu.`,
        },
      },
      {
        q: "Bisa kostum desain?",
        a: {
          type: "text",
          content: `Bisa, untuk harga akan disesuaikan dengan desain yang diubah/dicustom.
              silahkan hubungi admin untuk diskusi.`,
        },
      },
      {
        q: "Bisa dire-schedule?",
        a: {
          type: "text",
          content: `Bisa, Maksimal Revisi 10 Jam sebelum acara.`,
        },
      },
      {
        q: "Berapa banyak tamu yang bisa di undang?",
        a: {
          type: "text",
          content: `Tanpa batas, Kamu bisa kirim ke banyak tamu undangan tanpa batas.
              Kita beri FREE Tools untuk sebar undangan instan`,
        },
      },
      {
        q: "Bisa hapus ucapan yang dikirim tamu?",
        a: {
          type: "text",
          content: `Bisa, penghapusan akan dilakukan oleh tim kami.`,
        },
      },
      {
        q: "Siapa yang isi nama tamu?",
        a: {
          type: "text",
          content: `Nama tamu di isi oleh klien secara mandiri,
              kami kirim tutorial penggunaan tools kirim undangan instan.`,
        },
      },
      {
        q: "Undangan bisa di akses berapa lama?",
        a: {
          type: "text",
          content: `Undangan bisa di akses selama 3 Bulan
              Jika kamu ingin meng-aksesnya lebih lama, akan dikenakan biaya :

              Masa aktif 6 Bulan = + Rp. 20.000
              Masa Aktif 12 Bulan = + Rp. 40.000
              Masa Aktif Selamanya = + Rp. 100.000`,
        },
      },
    ],
  },
  cta: {
    script: "— for your big day",
    title: { pre: "Siap Membuat Undangan Pernikahan yang ", em: "Berkesan?", post: "" },
    description:
      "Konsultasikan kebutuhan pernikahan Anda sekarang juga. Tim kami siap membantu mewujudkan undangan impian Anda.",
    button: "Chat WhatsApp Sekarang",
  },
  kontak: {
    eyebrow: "Kontak",
    title: { pre: "Mari Wujudkan ", em: "Undangan Impian", post: " Anda" },
    subtitle: "Isi formulir di bawah ini, kami akan menghubungi Anda melalui WhatsApp.",
    phone: "+62 851-1150-1210",
    waNote: "WhatsApp 24/7 support",
    location: "Bandung, Indonesia",
  },
  footer: {
    tagline: "Mengabadikan Kisah Cinta dalam Undangan Digital yang Berkesan.",
    email: "hello@sambutin.id",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    waLabel: "+62 851-1150-1210",
  },
}