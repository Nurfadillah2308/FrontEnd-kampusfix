import React, { useState } from 'react'; // 1. Kita panggil useState dari React
import { ShieldAlert, Calendar } from 'lucide-react';

const Navbar = () => {
  // 2. Buat state untuk melacak menu mana yang sedang aktif saat ini
  // Default pertama kali adalah 'beranda'
  const [activeMenu, setActiveMenu] = useState('beranda');

  return (
    <nav className="w-full bg-white border-b border-[#eef2f5] sticky top-0 z-[100] px-6 py-3 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* KIRI: Logo & Nama Web */}
        <div className="flex items-center gap-2.5">
          <div className="bg-[#2b5292] w-8 h-8 rounded-lg flex items-center justify-center text-white">
            <ShieldAlert size={19} />
          </div>
          <span className="text-[20px] font-bold text-[#2b5292] tracking-tight">KampusFix</span>
        </div>

        {/* TENGAH: Menu Navigasi Dinamis */}
        <div className="hidden md:flex items-center gap-9">
          
          {/* Tombol Beranda */}
          <button 
            onClick={() => setActiveMenu('beranda')}
            className={`text-[14px] bg-transparent border-none py-1 relative cursor-pointer transition-colors duration-150 font-sans ${
              activeMenu === 'beranda' 
                ? "font-bold text-[#2b5292] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#2b5292] after:bottom-[-20px] after:left-0" 
                : 'font-medium text-[#64748b] hover:text-[#2b5292]'
            }`}
          >
            Beranda
          </button>

          {/* Tombol Riwayat Laporan */}
          <button 
            onClick={() => setActiveMenu('riwayat')}
            className={`text-[14px] bg-transparent border-none py-1 relative cursor-pointer transition-colors duration-150 font-sans ${
              activeMenu === 'riwayat' 
                ? "font-bold text-[#2b5292] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#2b5292] after:bottom-[-20px] after:left-0" 
                : 'font-medium text-[#64748b] hover:text-[#2b5292]'
            }`}
          >
            Riwayat Laporan
          </button>

          {/* Tombol Bantuan */}
          <button 
            onClick={() => setActiveMenu('bantuan')}
            className={`text-[14px] bg-transparent border-none py-1 relative cursor-pointer transition-colors duration-150 font-sans ${
              activeMenu === 'bantuan' 
                ? "font-bold text-[#2b5292] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#2b5292] after:bottom-[-20px] after:left-0" 
                : 'font-medium text-[#64748b] hover:text-[#2b5292]'
            }`}
          >
            Bantuan
          </button>

        </div>

        {/* KANAN: Tombol & Profil */}
        <div className="flex items-center gap-5">
          <button className="bg-[#2b5292] hover:bg-[#1e3a8a] text-white text-[12px] font-bold py-2.5 px-5 rounded-full flex items-center gap-2 transition-all shadow-sm cursor-pointer">
            <span className="text-[16px]">+</span> LAPOR SEKARANG
          </button>

          <div className="flex items-center gap-4 text-[#64748b]">
             <div className="bg-[#f8fafc] p-2 rounded-full cursor-pointer hover:bg-[#eff6ff] transition-colors">
                <Calendar size={18} />
             </div>
             
             <div className="flex items-center gap-2 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60" 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                />
             </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;