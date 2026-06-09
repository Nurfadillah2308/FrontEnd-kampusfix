import React from 'react';
import LayoutMhs from './components/LayoutMhs'; // MENAMBAHKAN IMPORT LAYOUT
import CardLaporan from './components/CardLaporan'; 

function App() {
  const dummyLaporan = [
    // ... Data dummy laporan milik Dila tetap dibiarkan di sini ...
    {
      id: 1,
      namaPelapor: "Andi Setiawan",
      waktuLapor: "12 Menit yang lalu",
      lokasi: "Lab Multimedia, Gd. C",
      status: "pending",
      deskripsi: "Lampu di area belakang lab mati total sejak pagi tadi.",
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMoNqZZAmnIpIY3QhOLg139QsXCwHfsK_-O8DNijNdoBHOrQKk6eTIqW3XsLhVANmbitc96Tbbxbjzt-KFUQFlekugaxazYUO-GmmU_qFnkiL_mLFznxj61eQiIIShtXhwp1Xxt0hxpBZwvPamkyCpU5EtGBU2hPBABjxiv5nd8KasL-4r_Cy8VVvSjckBl8434iAjwIDGUvuAZAfz7Cy_SgGmGaukQSNU9NABf4sMV1tLV9ChJ9iZsDur7Jki_ERTL9pa8VIswwi4",
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
      foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc9zTwJyxB18DDMtwucQA7KtUAAFkLKC1XgA41wudGEFLcCMiUgYDwKU9s_b-MNXgCYe_l3me88cmymt3es0RsqxBgfy1yArTgAjFfnWbnV8zdYAmwoHHUq7-7stUJ6q7L8vw5r75aXQa56r734eSg5cTUz46CDl_dWYx1kgdQbKRdjsZdnO09CeHBOdAc6MlCD-eDp7QIJud_cnc3Zrcf0whcckvOk9ykyAbP4OG5p9wYsv3GwZ2yGuy9N1jKY3IFNYCbCkuMA9L7",
      jumlahDukungan: 8,
      komentarAwal: [{ id: 201, nama: "Budi Santoso", waktu: "1 Jam yang lalu", isi: "Wah untung segera ditangani." }]
    }
  ];

  return (
    // Menggunakan LayoutMhs sebagai pembungkus luar utama halaman mahasiswa
    <LayoutMhs>
      
      {/* Seluruh area konten utama milik Dila berada di dalam sini tanpa ada perubahan kode sedikit pun */}
      <div style={{ flexGrow: 1 }}>

        {/* Area Konten Utama Timeline Laporan Umum */}
        <main className="px-4 py-8 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
            Timeline Laporan Fasilitas
          </h2>
          
          {dummyLaporan.map((item) => (
            <CardLaporan key={item.id} laporan={item} />
          ))}
        </main>
        
      </div>

    </LayoutMhs>
  );
}

export default App;