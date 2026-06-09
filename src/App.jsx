import React from 'react';
import AdminDrawer from './pages/admin/AdminDrawer';
import Footer from './components/Footer'; 
import CardLaporan from './components/CardLaporan'; 

function App() {
  // Data dummy laporan tiruan seperti di mockup gambar timeline kalian
  const dummyLaporan = [
  {
    id: 1,
    namaPelapor: "Andi Setiawan",
    waktuLapor: "12 Menit yang lalu",
    lokasi: "Lab Multimedia, Gd. C",
    status: "pending",
    deskripsi: "Lampu di area belakang lab mati total sejak pagi tadi. Kondisi gelap menyulitkan mahasiswa yang praktikum sampai malam.",
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
    deskripsi: "AC bocor dan mengeluarkan bunyi bising. Air menetes tepat di atas meja mahasiswa.",
    noteAdmin: "Teknisi AC dalam perjalanan menuju lokasi. Estimasi perbaikan 1-2 jam.",
    foto: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc9zTwJyxB18DDMtwucQA7KtUAAFkLKC1XgA41wudGEFLcCMiUgYDwKU9s_b-MNXgCYe_l3me88cmymt3es0RsqxBgfy1yArTgAjFfnWbnV8zdYAmwoHHUq7-7stUJ6q7L8vw5r75aXQa56r734eSg5cTUz46CDl_dWYx1kgdQbKRdjsZdnO09CeHBOdAc6MlCD-eDp7QIJud_cnc3Zrcf0whcckvOk9ykyAbP4OG5p9wYsv3GwZ2yGuy9N1jKY3IFNYCbCkuMA9L7",
    jumlahDukungan: 8,
    komentarAwal: [
      { id: 201, nama: "Budi Santoso", waktu: "1 Jam yang lalu", isi: "Wah untung segera ditangani, kelas di sana emang gerah banget pas siang." }
    ]
  },
  {
    id: 3,
    namaPelapor: "Budi Santoso",
    waktuLapor: "Kemarin",
    lokasi: "Lobby Fakultas Teknik",
    status: "selesai",
    deskripsi: "Gagang pintu lobby masuk patah, sulit untuk dibuka dari luar.",
    foto: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWmv7Z9Q7TGAXuvvU-ogFZSdolOlhHIXlPDOOcwqG2RQKqMU7Jblffuh7CwPCB44RYo3_BwU1WBeI-7BF8b7ZRklQ-auTToxXq0C6LSJe9obrO9cupuFSo8p2ZJSmLnB1wPNG1uirdCQebN8ldFjqfqytqQY28S5sL9aP_4TmTUHDbeZsoaJDG2aCXkCCdBeiuXu504VzdPo1qcXHQo5E2oarROEt9j2-wIgj6GT0XmN54V8d2V3q1AanbdhRmPlEfwxYbMLaXBQ7A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7zHeKFvEIqV7h0c9uIfwrkbFbHVNxqFi36uZ78UBHQlmtk7pSOZ8SEo9i_fpyyNOtd4UhZCC4hLYBzQ_Tle-kPG426vIOe3veGbEm9kBDIidelirXulfa3ATrm3Fcgkw7WfJu6W2oKk2XncA8vNUlk0y5C7dJAKsgnpklGXRYGHJk6wibI2ypLIubgRz7v6ac-FKg8Msg0qtZBCP1cdoq_wK53WSrYIxDaBF4132k9irYIEH1TNh-PFT_yPmybR8xOVfmwfLq3jn3"
    ],
    jumlahDukungan: 42,
    komentarAwal: [
      { id: 301, nama: "Andi Setiawan", waktu: "Kemarin", isi: "Mantap gercep tim sarpras!" }
    ]
  }
];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flexGrow: 1 }}>
        {/* Memanggil komponen admin drawer lama */}
        <AdminDrawer />

        {/* 🛠️ PENGERJAAN DILA (FE 2): Area Konten Utama Timeline Laporan */}
        <main className="px-4 py-8 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
            Timeline Laporan Fasilitas
          </h2>
          
          {/* Looping memanggil komponen CardLaporan secara dinamis */}
          {dummyLaporan.map((item) => (
            <CardLaporan key={item.id} laporan={item} />
          ))}
        </main>
      </div>

      <Footer />
      
    </div>
  );
}

export default App;