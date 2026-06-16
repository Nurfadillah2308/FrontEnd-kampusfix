import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#f3f7fb] flex flex-col items-center justify-between py-12 px-4 font-sans antialiased selection:bg-[#2b5292] selection:text-white">
      
      {/* ================= HEADER BRANDING ================= */}
      <div className="text-center mt-2 space-y-1">
        <h1 className="text-[34px] font-bold text-[#2b5292] tracking-normal leading-none">
          KampusFix
        </h1>
        <p className="text-[#64748b] text-[13px] font-medium tracking-normal mt-2">
          Sistem Pelaporan Fasilitas Kampus Terpadu
        </p>
      </div>

      {/* ================= CARD FORM CONTAINER ================= */}
      <div className="w-full max-w-[440px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#e2e8f0]/40 p-8 md:p-9 my-6">
        
        <div className="text-center">
          <h2 className="text-[21px] font-bold text-[#1e293b] tracking-tight">
            Selamat Datang
          </h2>
          <p className="text-[#94a3b8] text-[12px] mt-1 font-normal">
            Silakan masuk menggunakan akun universitas Anda.
          </p>
        </div>

        {/* Box Peringatan Kuning Eksklusif */}
        <div className="mt-5 bg-[#fffdf5] border border-dashed border-[#fcd34d] rounded-lg p-3 flex items-start gap-2.5">
          <div className="w-4 h-4 rounded-full border border-[#d97706] flex items-center justify-center text-[#d97706] text-[10px] font-bold shrink-0 mt-0.5">
            !
          </div>
          <p className="text-[11px] text-[#b45309] leading-relaxed font-normal text-left">
            Pendaftaran eksklusif wajib menggunakan email resmi kampus berakhiran <span className="font-semibold">@uin-alauddin.ac.id</span>
          </p>
        </div>

        {/* INPUT FIELDS (LABEL RATA KIRI - TEXT INPUT RATA KIRI) */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          
          {/* Kelompok: Email */}
          <div className="flex flex-col items-start space-y-1.5 w-full">
            <label className="text-[12.5px] font-semibold text-[#475569] text-left pl-1">
              Email Kampus
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@uin-alauddin.ac.id"
              className="w-full bg-[#f8fafc] text-[#334155] text-[13px] px-3.5 py-3 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#2b5292] focus:bg-white transition-colors placeholder:text-[#cbd5e1] text-left"
              required
            />
          </div>

          {/* Kelompok: Password */}
          <div className="flex flex-col items-start space-y-1.5 w-full">
            <label className="text-[12.5px] font-semibold text-[#475569] text-left pl-1">
              Kata Sandi
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#f8fafc] text-[#334155] text-[13px] px-3.5 py-3 rounded-xl border border-[#e2e8f0] focus:outline-none focus:border-[#2b5292] focus:bg-white transition-colors placeholder:text-[#cbd5e1] text-left"
              required
            />
          </div>

          {/* Opsi Ingat Saya (Custom Checkbox) & Lupa Sandi */}
          <div className="flex items-center justify-between text-[11.5px] px-1 pt-1">
            <label className="flex items-center gap-2 text-[#94a3b8] cursor-pointer font-normal select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="appearance-none w-4 h-4 rounded border border-[#cbd5e1] bg-white checked:bg-[#2b5292] checked:border-[#2b5292] transition-all cursor-pointer relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[5px] after:top-[2px] after:w-[4px] after:h-[8px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
              />
              Ingat saya
            </label>
            <a href="#" className="text-[#2b5292] font-semibold hover:underline">
              Lupa Sandi?
            </a>
          </div>

          {/* Tombol Utama */}
          <button
            type="submit"
            className="w-full bg-[#2b5292] hover:bg-[#224175] text-white font-semibold text-[13.5px] py-3 rounded-xl transition-colors mt-2 shadow-sm cursor-pointer text-center"
          >
            Masuk
          </button>
        </form>

        {/* Pembatas Teks ATAU */}
        <div className="relative flex items-center justify-center my-6">
          <div className="w-full border-b border-[#f1f5f9]"></div>
          <span className="absolute bg-white px-3 text-[10px] font-semibold text-[#94a3b8] tracking-widest">
            ATAU
          </span>
        </div>

        {/* Tombol Google Auth */}
        <button
          type="button"
          className="w-full border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] font-medium text-[12.5px] py-2 px-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors bg-white cursor-pointer"
        >
          {/* Kotak Ikon Google */}
          <div className="w-5 h-5 bg-[#f1f5f9] rounded flex items-center justify-center shrink-0">
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.14-3.14C17.44 1.68 14.94 1 12 1 7.24 1 3.2 3.74 1.28 7.72l3.79 2.94C5.97 7.04 8.75 5.04 12 5.04z"
              />
              <path
                fill="#4285F4"
                d="M23.48 12.27c0-.82-.07-1.61-.21-2.38H12v4.51h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.38-4.88 3.38-8.52z"
              />
              <path
                fill="#FBBC05"
                d="M5.07 14.66c-.25-.73-.39-1.5-.39-2.3s.14-1.57.39-2.3L1.28 7.12C.46 8.79 0 10.65 0 12.62s.46 3.83 1.28 5.5l3.79-2.96z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-3.96 1.09-3.25 0-6.03-2-6.93-5.02l-3.79 2.94C3.2 20.26 7.24 23 12 23z"
              />
            </svg>
          </div>
          Masuk dengan Google
        </button>

        {/* Link Daftar */}
        <div className="text-center text-[12.5px] text-[#64748b] mt-6 font-normal">
          Belum punya akun?{' '}
          <a href="#" className="text-[#2b5292] font-bold hover:underline ml-0.5">
            Daftar Sekarang
          </a>
        </div>

      </div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="flex items-center justify-center gap-5 text-[11px] text-[#94a3b8] font-normal tracking-normal mb-1">
        <a href="#" className="hover:text-[#475569] transition-colors">Bantuan</a>
        <a href="#" className="hover:text-[#475569] transition-colors">Kebijakan Privasi</a>
        <a href="#" className="hover:text-[#475569] transition-colors">Ketentuan Layanan</a>
      </div>

    </div>
  );
};

export default Login;