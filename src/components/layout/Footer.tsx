import React from 'react';
import { 
  Building, 
  Building2, 
  ExternalLink, 
  FileText, 
  KeyRound, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { KomopoxyLogo } from '../brand/KomopoxyLogo';

export const Footer: React.FC = () => {
  const { 
    companyInfo, 
    setActiveTab, 
    setIsAdminAuthModalOpen, 
    isAdminLoggedIn,
    products 
  } = useData();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d14] text-white border-t border-slate-800">
      {/* Top Footer Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-sky-950/40 via-slate-900 to-teal-950/40 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-black text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              <span>Butuh Rekomendasi Spesifikasi Material Konstruksi?</span>
            </h3>
            <p className="text-xs text-slate-400">
              Tim engineering PT. KCCI CHEMTECH INDONESIA siap membantu analisa lapangan & kalkulasi volume kebutuhan proyek Anda.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('CONTACT')}
              className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition"
            >
              Konsultasi Proyek Gratis
            </button>
            <button
              onClick={() => handleNav('TECH_DATA')}
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs px-5 py-3 rounded-xl transition"
            >
              Unduh Dokumen TDS & SDS
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
        {/* Brand & Credentials */}
        <div className="space-y-4">
          <div className="cursor-pointer" onClick={() => handleNav('HOME')}>
            <KomopoxyLogo size="sm" layout="horizontal" showTagline={false} />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-black text-teal-400 uppercase tracking-wide">
              {companyInfo.taglineINA}
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              High-Performance Construction Chemical Solutions
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed text-xs">
            Formulasi kimia konstruksi berkinerja tinggi dari <strong className="text-slate-200">{companyInfo.companyName}</strong>. Menyediakan 31 formulasi lengkap untuk flooring, waterproofing, injeksi, adhesive, dan perkuatan struktur.
          </p>
          <div className="space-y-1.5 bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
            <div className="text-teal-400 font-bold text-xs">{companyInfo.companyName}</div>
            <div className="text-[11px] text-slate-400">CEO: <span className="text-slate-200">{companyInfo.ceo}</span></div>
            <div className="text-[11px] text-slate-400">NIB: <span className="text-slate-200">{companyInfo.nib}</span></div>
            <div className="text-[11px] text-slate-400">Total Produk: <span className="text-teal-400 font-bold">{products.length} Formulasi</span></div>
          </div>
        </div>

        {/* Product Series */}
        <div className="space-y-3">
          <div className="font-bold text-slate-200 text-sm uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-400" />
            Lini Produk Utama
          </div>
          <ul className="space-y-2.5 text-slate-400">
            <li>
              <button 
                onClick={() => handleNav('PRODUCTS')}
                className="hover:text-teal-400 transition flex items-center gap-1.5"
              >
                ▪ KOMOFloor (Epoxy Flooring & Urethane Crete)
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('PRODUCTS')}
                className="hover:text-teal-400 transition flex items-center gap-1.5"
              >
                ▪ KOMOProof (PU Membran & Polyurea)
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('PRODUCTS')}
                className="hover:text-teal-400 transition flex items-center gap-1.5"
              >
                ▪ KOMOGrout (Injeksi Epoksi & PU Foam)
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('PRODUCTS')}
                className="hover:text-teal-400 transition flex items-center gap-1.5"
              >
                ▪ KOMOBond (Tile & Stone Adhesive)
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('PRODUCTS')}
                className="hover:text-teal-400 transition flex items-center gap-1.5"
              >
                ▪ KOMOWrap (Carbon Fiber Sheet & Resin)
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <div className="font-bold text-slate-200 text-sm uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-sky-400" />
            Tautan Penting
          </div>
          <ul className="space-y-2.5 text-slate-400">
            <li>
              <button onClick={() => handleNav('PRODUCTS')} className="hover:text-teal-400 transition">
                Katalog Produk Resmi
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('SOLUTIONS')} className="hover:text-teal-400 transition">
                Pencari Solusi Masalah Struktur
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('TECH_DATA')} className="hover:text-teal-400 transition">
                Dokumen TDS, SDS & Sertifikat Lab
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('PROJECTS')} className="hover:text-teal-400 transition">
                Referensi Proyek Lapangan
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('NEWS')} className="hover:text-teal-400 transition">
                Berita Teknis & Panduan Aplikasi
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('ABOUT')} className="hover:text-teal-400 transition">
                Profil PT. KCCI CHEMTECH INDONESIA
              </button>
            </li>
            <li className="pt-2 border-t border-slate-800">
              {isAdminLoggedIn ? (
                <button 
                  onClick={() => handleNav('ADMIN')} 
                  className="text-teal-400 hover:underline font-bold flex items-center gap-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  Buka Dashboard Admin
                </button>
              ) : (
                <button 
                  onClick={() => setIsAdminAuthModalOpen(true)} 
                  className="text-slate-400 hover:text-teal-400 transition flex items-center gap-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5 text-slate-500" />
                  Login Administrator Portal
                </button>
              )}
            </li>
          </ul>
        </div>

        {/* Official Offices */}
        <div className="space-y-3">
          <div className="font-bold text-slate-200 text-sm uppercase tracking-wider flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-emerald-400" />
            Kantor & Pabrik Resmi
          </div>
          <div className="space-y-3 text-slate-400 leading-relaxed text-[11px]">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-white font-bold block mb-1 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-teal-400" />
                BSD Office (Pemasaran):
              </span>
              <p className="text-slate-300">{companyInfo.bsdAddress}</p>
              <p className="mt-1 text-slate-400">Tel: {companyInfo.bsdTel}</p>
              <p className="text-teal-400 font-semibold">HP/WA: {companyInfo.bsdWa}</p>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <span className="text-white font-bold block mb-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                Jepara Office / Factory:
              </span>
              <p className="text-slate-300">{companyInfo.jeparaAddress}</p>
              <p className="mt-1 text-slate-400">Tel: {companyInfo.jeparaTel}</p>
              <p className="text-cyan-400 font-semibold">HP/WA: {companyInfo.jeparaWa}</p>
              <p className="text-slate-400">FAX: {companyInfo.jeparaFax}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#060a0f] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} KOMOPOXY / {companyInfo.companyName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>NIB: {companyInfo.nib}</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Made in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
