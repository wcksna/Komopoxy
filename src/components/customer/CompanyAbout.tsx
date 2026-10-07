import React from 'react';
import { 
  Award, 
  Building2, 
  CheckCircle, 
  Factory, 
  Globe2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { KomopoxyLogo } from '../brand/KomopoxyLogo';

export const CompanyAbout: React.FC = () => {
  const { companyInfo, products } = useData();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PROFIL PERUSAHAAN & INTEGRITAS PRODUK</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Tentang PT. KCCI CHEMTECH INDONESIA
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
          Produsen & spesialis kimia konstruksi performa tinggi di bawah merek dagang resmi KOMOPOXY.
        </p>
      </div>

      {/* Main Grid: Narrative & Corporate Card */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Komitmen Kualitas & Standar Internasional</span>
            </h3>
            <p>
              KOMOPOXY adalah merek kimia konstruksi berkinerja tinggi yang dikembangkan dan didistribusikan oleh <strong className="text-white">{companyInfo.companyName}</strong> (CEO: {companyInfo.ceo}, NIB: {companyInfo.nib}).
            </p>
            <p>
              Kami mengkhususkan diri dalam penyediaan formulasi material rekayasa untuk memenuhi standar ketat proyek industri modern, infrastruktur publik, fasilitas kesehatan/farmasi, dan bangunan bertingkat tinggi di seluruh wilayah Indonesia.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm">
              5 Pilar Keunggulan Kimia Konstruksi KOMOPOXY:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>31 Formulasi Teruji</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Meliputi pelapis lantai, waterproofing, injeksi, adhesive, dan serat karbon.
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Sertifikasi Mutu ISO 9001</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Audit kualitas manufaktur berkala dan kendali konsistensi batch produksi.
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5" />
                  <span>Fasilitas Pabrik Jepara</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Kapasitas produksi besar untuk suplai cepat ke berbagai kota di Indonesia.
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-teal-300 text-xs flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Dukungan Ahli Lapangan</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Bimbingan teknis aplikasi, mock-up sampel, dan uji laboratorium mandiri.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Corporate Info Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0e1622] border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex justify-center pb-2">
            <KomopoxyLogo size="lg" layout="vertical" showTagline={true} />
          </div>

          <div className="space-y-1.5 border-b border-slate-800 pb-4">
            <span className="text-[10px] font-black uppercase text-teal-400 tracking-wider">
              Legalitas Badan Usaha
            </span>
            <h3 className="text-lg font-black text-white">
              {companyInfo.companyName}
            </h3>
            <p className="text-xs text-slate-400">
              Merek Resmi: <strong className="text-teal-400">{companyInfo.brandName}</strong>
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex justify-between py-1.5 border-b border-slate-800/80">
              <span className="text-slate-400">Pimpinan / CEO:</span>
              <span className="font-bold text-white">{companyInfo.ceo}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/80">
              <span className="text-slate-400">Nomor Induk Berusaha (NIB):</span>
              <span className="font-bold text-teal-300">{companyInfo.nib}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/80">
              <span className="text-slate-400">Total Formulasi:</span>
              <span className="font-bold text-white">{products.length} Formulasi Resmi</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Email Resmi:</span>
              <span className="font-semibold text-white">{companyInfo.email}</span>
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-800">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-[11px] space-y-1">
              <div className="font-bold text-teal-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Marketing BSD:</span>
              </div>
              <p className="text-slate-400">{companyInfo.bsdAddress}</p>
              <p className="text-slate-300">WA: {companyInfo.bsdWa}</p>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-[11px] space-y-1">
              <div className="font-bold text-cyan-300 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>Pabrik Jepara:</span>
              </div>
              <p className="text-slate-400">{companyInfo.jeparaAddress}</p>
              <p className="text-slate-300">WA: {companyInfo.jeparaWa}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
