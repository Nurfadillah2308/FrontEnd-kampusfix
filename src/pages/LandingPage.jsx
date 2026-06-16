import React from 'react';
import { ShieldAlert, Eye, ShieldCheck, TrendingUp, LogIn, MapPin, MonitorCheck } from 'lucide-react';
// Memanggil komponen sesuai lokasi yang kamu infokan (src/components/)
import NavbarLanding from "../components/NavbarLanding"; 
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans antialiased selection:bg-[#2b5292] selection:text-white">
      
      {/* 1. NAVBAR */}
      <NavbarLanding />

      {/* KONTEN UTAMA LANDING PAGE */}
      <main className="flex-grow">
        
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Teks & Tombol Aksi */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e293b] leading-tight tracking-tight">
              Fasilitas Kampus Rusak? <br />
              <span className="text-[#2b5292]">Laporkan di KampusFix!</span>
            </h1>
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-lg">
              Platform digital untuk mahasiswa UIN Alauddin Makassar dalam menyampaikan aspirasi perbaikan infrastruktur secara transparan dan teratur.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#2b5292] hover:bg-[#1e3a8a] text-white font-bold text-[14px] py-3 px-6 rounded-lg flex items-center gap-2.5 transition-all shadow-md shadow-blue-900/10 cursor-pointer">
                <LogIn size={18} /> Masuk dengan Email UINAM
              </button>
              <button className="bg-[#eff6ff] hover:bg-[#dbeafe] text-[#2b5292] font-semibold text-[14px] py-3 px-6 rounded-lg transition-all cursor-pointer">
                Pelajari Selengkapnya
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Ilustrasi Gedung & Badge */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* Gambar Utama Gedung */}
              <img 
                src="https://washilah.com/wp-content/uploads/2024/07/IMG-20240722-WA0001-scaled.jpg" 
                alt="Gedung Kampus" 
                className="w-full h-[280px] md:h-[350px] object-cover rounded-3xl shadow-xl border border-gray-100"
              />
              {/* Floating Badge (Fasilitas Kampus UINAM Official) */}
              <div className="absolute bottom-[-20px] left-6 bg-white/90 backdrop-blur-md py-3 px-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce-slow">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#2b5292]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium leading-none">Fasilitas Kampus</p>
                  <p className="text-[13px] font-bold text-gray-800">UINAM Official</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ================= KENAPA KAMPUSFIX? ================= */}
        <section className="bg-gray-50/50 py-16 md:py-24 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b]">Kenapa KampusFix?</h2>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-2">Dibuat khusus untuk efisiensi perbaikan fasilitas kampus</p>
            
            {/* Grid 3 Kartu Keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16 text-left">
              {/* Kartu 1: Transparansi */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2b5292] flex items-center justify-center mb-5">
                  <Eye size={20} />
                </div>
                <h3 className="text-[16px] font-bold text-gray-800 mb-2">Transparansi Penuh</h3>
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  Pantau status laporan secara real-time. Anda akan tahu kapan laporan diterima, diproses, hingga selesai diperbaiki oleh tim teknis.
                </p>
              </div>

              {/* Kartu 2: Anti-Spam */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                  <ShieldAlert size={20} />
                </div>
                <h3 className="text-[16px] font-bold text-gray-800 mb-2">Anti-Spam & Valid</h3>
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  Integrasi dengan email institusi @uin-alauddin.ac.id memastikan setiap laporan berasal dari pengguna yang valid dan dapat dipertanggungjawabkan.
                </p>
              </div>

              {/* Kartu 3: Prioritas Upvote */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-[16px] font-bold text-gray-800 mb-2">Prioritas Upvote</h3>
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  Laporan dengan upvote terbanyak akan otomatis menjadi prioritas utama tim fasilitas. Suara kolektif mahasiswa menentukan urgensi perbaikan.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ================= CARA KERJA ================= */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b]">Cara Kerja</h2>
          
          {/* Alur 3 Langkah */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 md:mt-16 relative">
            {/* Langkah 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2b5292] text-white flex items-center justify-center shadow-md">
                <LogIn size={20} />
              </div>
              <h3 className="text-[16px] font-bold text-gray-800">Login UINAM</h3>
              <p className="text-gray-500 text-[13px] max-w-xs leading-relaxed">
                Gunakan email resmi institusi untuk akses instan ke dashboard pelaporan.
              </p>
            </div>

            {/* Langkah 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2b5292] text-white flex items-center justify-center shadow-md">
                <MapPin size={20} />
              </div>
              <h3 className="text-[16px] font-bold text-gray-800">Pilih Lokasi</h3>
              <p className="text-gray-500 text-[13px] max-w-xs leading-relaxed">
                Pilih gedung/area, isi detail laporan, dan unggah foto bukti kerusakan.
              </p>
            </div>

            {/* Langkah 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2b5292] text-white flex items-center justify-center shadow-md">
                <MonitorCheck size={20} />
              </div>
              <h3 className="text-[16px] font-bold text-gray-800">Monitor Status</h3>
              <p className="text-gray-500 text-[13px] max-w-xs leading-relaxed">
                Dapatkan notifikasi progres perbaikan langsung ke perangkat Anda.
              </p>
            </div>
          </div>
        </section>


        {/* ================= BANNER STATISTIK ================= */}
        <section className="bg-[#2b5292] py-12 text-white relative overflow-hidden">
          {/* Efek aksen background samar di dalam banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 gap-8 text-center relative z-10 divide-x divide-white/20">
            {/* Angka Laporan Selesai */}
            <div>
              <p className="text-4xl md:text-5xl font-black tracking-tight">142</p>
              <p className="text-[11px] md:text-[12px] font-bold tracking-wider text-blue-100 uppercase mt-2">
                Laporan Terselesaikan
              </p>
            </div>
            
            {/* Angka Laporan Proses */}
            <div>
              <p className="text-4xl md:text-5xl font-black tracking-tight">12</p>
              <p className="text-[11px] md:text-[12px] font-bold tracking-wider text-blue-100 uppercase mt-2">
                Laporan Diproses
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 3. FOOTER */}
      <Footer />

    </div>
  );
};

export default LandingPage;