import React, { useState } from 'react';

function CardLaporan({ laporan }) {
  const [showComments, setShowComments] = useState(false);
  const [komentarList, setKomentarList] = useState(laporan.komentarAwal || []);
  const [inputKomen, setInputKomen] = useState('');

  // Fungsi penentu badge status tanpa emoji (Menggunakan hex warna asli mockup kalian)
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
      case 'menunggu verifikasi':
        return (
          <span className="bg-[#ffdad6] text-[#93000a] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
            Menunggu Verifikasi
          </span>
        );
      case 'proses':
      case 'sedang diproses':
        return (
          <span className="bg-[#ffdf9f] text-[#5c4300] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
            Sedang Diproses
          </span>
        );
      case 'selesai':
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            Selesai
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
            {status}
          </span>
        );
    }
  };

  const handleKirimKomen = (e) => {
    e.preventDefault();
    if (!inputKomen.trim()) return;

    const komenBaru = {
      id: Date.now(),
      nama: 'Dila',
      waktu: 'Baru saja',
      isi: inputKomen
    };

    setKomentarList([...komentarList, komenBaru]);
    setInputKomen('');
  };

  return (
    <article className="bg-white rounded-xl p-5 border border-gray-200 shadow-[0_10px_15px_-3px_rgba(48,87,143,0.08)] max-w-2xl mx-auto mb-6 text-left">
      
      {/* Header Section: Profil Inisial & Status */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar bulat lingkaran dengan inisial huruf pertama nama pelapor */}
          <div className="w-10 h-10 bg-[#4a70a9] text-white rounded-full flex items-center justify-center font-bold uppercase text-sm border border-gray-100 shrink-0">
            {laporan.namaPelapor ? laporan.namaPelapor[0] : 'U'}
          </div>
          <div>
            <p className="font-semibold text-[#1a1c1f] text-sm md:text-base">{laporan.namaPelapor}</p>
            <p className="text-xs text-[#737781]">{laporan.waktuLapor} • {laporan.lokasi}</p>
          </div>
        </div>
        {getStatusBadge(laporan.status)}
      </div>

      {/* Deskripsi Laporan (Rata Kiri Sesuai Desain) */}
      <p className="text-[#434750] text-sm md:text-base leading-relaxed mb-4 text-left">
        {laporan.deskripsi}
      </p>

      {/* Note Catatan Admin (Muncul dinamis jika ada data catatan admin) */}
      {laporan.noteAdmin && (
        <div className="bg-[#ffdf9f]/10 border border-[#ffdf9f]/30 p-3 rounded-lg mb-4 flex gap-3 items-start">
          <span className="material-symbols-outlined text-[#705200] text-[20px]">info</span>
          <div>
            <p className="text-xs font-bold text-[#705200]">Note Admin:</p>
            <p className="text-xs md:text-sm text-[#5c4300] italic">
              "{laporan.noteAdmin}"
            </p>
          </div>
        </div>
      )}

        {/* Logika Layout Foto Dinamis (Otomatis grid sesuai jumlah foto) */}
    {laporan.foto && (
    <div className={`grid gap-2 mb-4 ${
        Array.isArray(laporan.foto) && laporan.foto.length > 1 
        ? (laporan.foto.length > 2 ? 'grid-cols-2' : 'grid-cols-2') 
        : 'grid-cols-1'
    }`}>
        {Array.isArray(laporan.foto) ? (
        laporan.foto.slice(0, 4).map((img, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg bg-gray-100 ${
            laporan.foto.length === 3 && index === 0 ? 'col-span-2 h-48' : 'h-32'
            }`}>
            <img src={img} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
            </div>
        ))
        ) : (
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
            <img src={laporan.foto} alt="Foto Laporan" className="w-full h-full object-cover" />
        </div>
        )}
    </div>
    )}

      {/* Bar Tombol Utama (Tanpa Emoji, Memakai Google Icons) */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <button className="flex items-center gap-2 text-[#30578f] hover:bg-[#d5e3ff]/30 px-3 py-1.5 rounded-lg transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>thumb_up</span>
          <span className="text-xs md:text-sm font-medium">Saya Juga Mengalami</span>
          <span className="bg-[#d5e3ff] text-[#1c477d] px-2 py-0.5 rounded-full text-xs font-bold">{laporan.jumlahDukungan}</span>
        </button>

        <button 
          onClick={() => setShowComments(!showComments)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all active:scale-95 ${showComments ? 'text-[#30578f] bg-[#d5e3ff]/30' : 'text-[#737781] hover:text-[#30578f]'}`}
        >
          <span className="material-symbols-outlined text-[20px]">comment</span>
          <span className="text-xs md:text-sm font-medium">Komentar ({komentarList.length})</span>
        </button>
      </div>

      {/* Bagian Kolom Komentar Internal Langsung (Tanpa pindah halaman) */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
          {/* List Review Komentar */}
          <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
            {komentarList.length === 0 ? (
              <p className="text-center text-xs text-[#737781] py-1">Belum ada komentar.</p>
            ) : (
              komentarList.map((komen) => (
                <div key={komen.id} className="bg-[#f4f3f8] p-3 rounded-lg border border-[#e2e2e7] text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-[#1a1c1f] text-xs">{komen.nama}</span>
                    <span className="text-[10px] text-[#737781]">{komen.waktu}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#434750]">{komen.isi}</p>
                </div>
              ))
            )}
          </div>

          {/* Form Kirim Balasan Komentar */}
          <form onSubmit={handleKirimKomen} className="flex gap-2 pt-1">
            <input 
              type="text" 
              placeholder="Tulis komentar..."
              value={inputKomen}
              onChange={(e) => setInputKomen(e.target.value)}
              className="flex-grow bg-white border border-[#c3c6d1] rounded-lg px-3 py-1.5 text-xs md:text-sm focus:outline-none focus:border-[#30578f] text-left"
            />
            <button 
              type="submit"
              className="bg-[#30578f] text-white px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium active:scale-95 transition-transform shrink-0"
            >
              Kirim
            </button>
          </form>
        </div>
      )}

    </article>
  );
}

export default CardLaporan;