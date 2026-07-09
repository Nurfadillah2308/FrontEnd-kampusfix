import React, { useState } from 'react';
import LayoutMhs from './components/LayoutMhs'; 
import CardLaporan from './components/CardLaporan'; 
import BuatLaporan from './pages/BuatLaporan';
import RiwayatProfil from './pages/RiwayatProfil';
import KelolaLaporan from './pages/admin/KelolaLaporan';
// Silakan buat atau sesuaikan path file Login kamu di bawah ini
// import Login from './pages/Login'; 

function App() {
  // Opsi halaman aktif untuk testing: 'login', 'timeline', 'buat-laporan', 'riwayat', 'admin-kelola'
  const [halamanAktif, setHalamanAktif] = useState('timeline'); 

  const dummyLaporan = [
    {
      id: 1,
      namaPelapor: "Andi Setiawan",
      waktuLapor: "12 Menit yang lalu",
      lokasi: "Lab Multimedia, Gd. C",
      status: "pending",
      deskripsi: "Lampu di area belakang lab mati total sejak pagi tadi.",
      foto: "https://images.unsplash.com/photo-1517520286321-7299b90c7490?q=80&w=600",
      jumlahDukungan: 24,
      komentarAwal: []
    },
    {
      id: 2,
      namaPelapor: "Siti Rahma",
      waktuLapor: "2 Jam yang lalu",
      lokasi: "Ruang Kelas 402, Gd. Utama",
      status: "proses",
      deskripsi: "AC bocor dan mengeluarkan bunyi bising.",
      noteAdmin: "Teknisi AC dalam perjalanan menuju lokasi.",
      foto: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600",
      jumlahDukungan: 8,
      komentarAwal: [{ id: 201, nama: "Budi Santoso", waktu: "1 Jam yang lalu", isi: "Wah untung segera ditangani." }]
    }
  ];

  // Fungsi pembantu untuk merender halaman berdasarkan state
  const renderHalaman = () => {
    switch (halamanAktif) {
      case 'login':
        // Jika file Login sudah ada, return komponennya: <Login />
        return (
          <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-sm w-full text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Masuk ke KampusFix</h2>
              <p className="text-sm text-gray-500 mb-6">Gunakan akun siakad/mahasiswa Anda</p>
              <button 
                onClick={() => setHalamanAktif('timeline')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Simulasi Login Berhasil
              </button>
            </div>
          </div>
        );
      case 'buat-laporan':
        return (
          <LayoutMhs>
            <BuatLaporan />
          </LayoutMhs>
        );
      case 'riwayat':
        return (
          <LayoutMhs>
            <RiwayatProfil />
          </LayoutMhs>
        );
      case 'admin-kelola':
        return <KelolaLaporan />;
      case 'timeline':
      default:
        return (
          <LayoutMhs>
            <div style={{ flexGrow: 1 }}>
              <main className="px-4 py-8 max-w-4xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
                  Timeline Laporan Fasilitas
                </h2>
                
                <div className="space-y-6">
                  {dummyLaporan.map((item) => (
                    <CardLaporan key={item.id} laporan={item} />
                  ))}
                </div>
              </main>
            </div>
          </LayoutMhs>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 🛠️ BAR NAVIGASI DUMMY KHUSUS UNTUK TESTING PINDAH HALAMAN 🛠️ */}
      <div className="bg-gray-800 text-white p-3 flex flex-wrap justify-center gap-4 text-xs font-mono sticky top-0 z-50 shadow-md">
        <span className="font-bold text-yellow-400 mr-2 flex items-center">🚀 Menu Testing:</span>
        
        <button 
          onClick={() => setHalamanAktif('login')} 
          className={`px-3 py-1 rounded ${halamanAktif === 'login' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          0. Halaman Login
        </button>

        <button 
          onClick={() => setHalamanAktif('timeline')} 
          className={`px-3 py-1 rounded ${halamanAktif === 'timeline' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          1. Timeline Utama (Landing)
        </button>
        
        <button 
          onClick={() => setHalamanAktif('buat-laporan')} 
          className={`px-3 py-1 rounded ${halamanAktif === 'buat-laporan' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          2. Buat Laporan
        </button>
        
        <button 
          onClick={() => setHalamanAktif('riwayat')} 
          className={`px-3 py-1 rounded ${halamanAktif === 'riwayat' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          3. Riwayat Laporan (User)
        </button>
        
        <button 
          onClick={() => setHalamanAktif('admin-kelola')} 
          className={`px-3 py-1 rounded ${halamanAktif === 'admin-kelola' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          4. Kelola Laporan (Admin)
        </button>
      </div>

      {/* Render halaman aktif yang dipilih */}
      <div className="flex-1 w-full">
        {renderHalaman()}
      </div>
    </div>
  );
}

export default App;