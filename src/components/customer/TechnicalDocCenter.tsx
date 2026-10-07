import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  Download, 
  Eye, 
  FileCheck, 
  FileDown, 
  FileText, 
  HelpCircle, 
  Printer, 
  Search, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Product } from '../../types';

export const TechnicalDocCenter: React.FC = () => {
  const { products, setActiveDocModal, getWhatsAppUrl, companyInfo } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [docSearch, setDocSearch] = useState<string>('');

  const filteredDocs = products.filter((p) => {
    const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const q = docSearch.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.code.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.descKor.toLowerCase().includes(q) ||
      p.descEng.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleDownloadSingle = (code: string, type: string) => {
    alert(`Mengunduh dokumen resmi [${type}] untuk formulasi ${code} dari ${companyInfo.companyName}... Berkas PDF tersimpan.`);
  };

  const handleDownloadMasterBundle = () => {
    alert(`Mengunduh Bundle Lengkap Technical Data Sheets & Test Reports (${products.length} Formulasi) KOMOPOXY PT. KCCI CHEMTECH INDONESIA.`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold px-3 py-1 rounded-full">
          <FileCheck className="w-3.5 h-3.5" />
          <span>PUSAT DOKUMEN MUTU & LEGALITAS MATERIAL</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Technical Data Sheet (TDS), SDS & Sertifikat Uji Lab
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
          Seluruh 31 formulasi resmi KOMOPOXY dilengkapi dengan Technical Data Sheet (TDS), Material Safety Data Sheet (SDS), serta sertifikat hasil pengujian laboratorium terakreditasi untuk kebutuhan RKS tender proyek, persetujuan konsultan, dan keselamatan kerja (K3).
        </p>
      </div>

      {/* Master Bundle Download Callout */}
      <div className="bg-gradient-to-r from-sky-950/70 via-slate-900 to-teal-950/70 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
            Master Bundle ({products.length} Produk)
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Unduh Dokumen Lengkap Katalog & Sertifikasi Pengujian (PDF)
          </h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Satu berkas PDF komprehensif berisi lembar data teknis spesifikasi, rasio pencampuran, kuat tekan, daya lekat, dan petunjuk K3.
          </p>
        </div>

        <button
          onClick={handleDownloadMasterBundle}
          className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-black text-xs px-6 py-4 rounded-2xl shadow-xl transition hover:scale-105 shrink-0 flex items-center gap-2 relative z-10"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Master PDF Bundle</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              placeholder="Cari kode formulasi (EL-2000, UB-260, IDM...)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {['ALL', 'KOMOFLOOR', 'KOMOPROOF', 'KOMOGROUT', 'KOMOBOND', 'KOMOWRAP'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat === 'ALL' ? 'Semua Dokumen' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Document List Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400 font-semibold">
          <span>Daftar Formulasi ({filteredDocs.length} Dokumen Tersedia)</span>
          <span className="text-teal-400">Status: Terverifikasi ISO 9001</span>
        </div>

        <div className="divide-y divide-slate-800/80 max-h-[650px] overflow-y-auto">
          {filteredDocs.map((p) => (
            <div
              key={p.code}
              className="p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 hover:bg-slate-800/40 transition"
            >
              {/* Product Info */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-xs shrink-0">
                  PDF
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-extrabold text-white text-xs">
                      {p.code} - {p.name}
                    </span>
                    <span className="bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2 py-0.2 rounded">
                      {p.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({p.packaging})
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {p.descKor} / {p.descEng}
                  </p>
                </div>
              </div>

              {/* Action Buttons for TDS, SDS, and Test Reports */}
              <div className="flex items-center gap-2 flex-wrap w-full lg:w-auto justify-end">
                <button
                  onClick={() => setActiveDocModal(p)}
                  className="bg-slate-950 hover:bg-slate-800 text-slate-200 text-[11px] font-bold px-3 py-2 rounded-xl border border-slate-800 transition flex items-center gap-1.5"
                  title="Lihat Pratinjau Dokumen TDS"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Preview TDS</span>
                </button>

                <button
                  onClick={() => handleDownloadSingle(p.code, 'Technical Data Sheet (TDS)')}
                  className="bg-slate-950 hover:bg-slate-800 text-teal-300 text-[11px] font-bold px-3 py-2 rounded-xl border border-teal-900/60 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download TDS</span>
                </button>

                <button
                  onClick={() => handleDownloadSingle(p.code, 'Safety Data Sheet (SDS)')}
                  className="bg-slate-950 hover:bg-slate-800 text-slate-300 text-[11px] font-semibold px-3 py-2 rounded-xl border border-slate-800 transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                  <span>SDS</span>
                </button>

                <button
                  onClick={() => handleDownloadSingle(p.code, 'Hasil Uji Lab & Sertifikat')}
                  className="bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 text-[11px] font-bold px-3 py-2 rounded-xl transition flex items-center gap-1.5 shadow"
                >
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Test Report Lab</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
