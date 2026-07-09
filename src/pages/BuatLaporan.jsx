import React from 'react';
// Import Navbar yang sudah kamu siapkan di folder components
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const BuatLaporan = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        {/* Menyisipkan Navbar User di paling atas halaman */}
        <Navbar />

        <div className="p-8 flex flex-col items-center">
          {/* Title Header */}
          <div className="text-center mb-8 mt-4">
            <h1 className="text-2xl font-bold text-gray-800">Buat Laporan Baru</h1>
            <p className="text-gray-500 text-sm">Laporkan kerusakan fasilitas kampus agar segera kami tangani.</p>
          </div>

          {/* Form Container */}
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <form>
              {/* Lokasi Kerusakan */}
              <div className="mb-6">
                <h3 className="text-blue-800 font-semibold mb-3 flex items-center gap-2">
                   📍 Lokasi Kerusakan
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gedung / Fakultas</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-700 bg-gray-50 outline-none focus:border-blue-500">
                      <option>Pilih Gedung</option>
                      <option>Gedung A</option>
                      <option>Gedung B</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Ruangan</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-400 bg-gray-50 outline-none focus:border-blue-500" disabled>
                      <option>Pilih Gedung Dulu</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Detail Masalah */}
              <div className="mb-6">
                <h3 className="text-blue-800 font-semibold mb-3 flex items-center gap-2">
                   📄 Detail Masalah
                </h3>
                <label className="block text-xs text-gray-600 mb-1">Deskripsi Kerusakan</label>
                <textarea 
                  rows="4" 
                  placeholder="Jelaskan secara rinci kerusakan yang terjadi..."
                  className="w-full border border-gray-300 rounded-md p-3 text-sm text-gray-700 bg-gray-50 outline-none focus:border-blue-500"
                ></textarea>
              </div>

              {/* Bukti Foto */}
              <div className="mb-8">
                <h3 className="text-blue-800 font-semibold mb-3 flex items-center gap-2">
                   📷 Bukti Foto
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center py-10 cursor-pointer hover:bg-gray-100 transition">
                  <span className="text-2xl mb-2">📁</span>
                  <p className="text-sm font-medium text-gray-700">Klik untuk unggah foto</p>
                  <p className="text-xs text-gray-400">Format: JPG, PNG (Max 5MB)</p>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full bg-[#2B4B77] hover:bg-[#1d3557] text-white font-semibold py-3 rounded-lg transition duration-200 shadow-sm"
              >
                KIRIM LAPORAN
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuatLaporan;