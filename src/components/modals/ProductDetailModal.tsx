import React from 'react';
import { 
  Award, 
  Check, 
  Download, 
  FileCheck, 
  FileText, 
  MessageSquare, 
  Package, 
  ShieldCheck, 
  Sparkles, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ProductDetailModal: React.FC = () => {
  const { 
    activeProductModal, 
    setActiveProductModal, 
    setActiveDocModal, 
    currentLang, 
    getWhatsAppUrl, 
    companyInfo 
  } = useData();

  if (!activeProductModal) return null;

  const p = activeProductModal;
  const shortDesc = p.shortDesc[currentLang] || p.shortDesc.INA;

  const handleDownloadTds = () => {
    alert(`Mengunduh Technical Data Sheet (TDS) untuk ${p.code} (${p.name}). Berkas PDF tersimpan.`);
  };

  const handleDownloadSds = () => {
    alert(`Mengunduh Safety Data Sheet (SDS / MSDS) untuk ${p.code}.`);
  };

  const handleDownloadTestReport = () => {
    alert(`Mengunduh Laporan Hasil Uji Lab & Sertifikat Uji Mutu Terakreditasi untuk ${p.code} dari ${companyInfo.companyName}.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl text-slate-100 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-950 p-6 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-black text-xs px-3.5 py-1 rounded-lg shadow">
              {p.code}
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                {p.name}
              </h2>
              <span className="text-[11px] text-teal-400 font-bold uppercase">
                {p.category} • {p.appType}
              </span>
            </div>
          </div>
          <button
            onClick={() => setActiveProductModal(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Reference Korean & English box */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 space-y-1">
            <div className="text-xs font-bold text-slate-200">
              {p.descKor}
            </div>
            <div className="text-[11px] text-slate-400">
              {p.descEng}
            </div>
            <div className="inline-flex items-center gap-1.5 bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-bold px-3 py-1 rounded-lg mt-2">
              <Package className="w-3.5 h-3.5" />
              <span>Standar Kemasan Pabrik: {p.packaging}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deskripsi & Fungsi Formulasi:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
              {shortDesc}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Fitur Teknis & Keunggulan Rekayasa:</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {p.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center gap-2 font-medium"
                >
                  <span className="text-teal-400 font-bold">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Download & Test Report Section */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-bold text-slate-300">
              Dokumen Teknis & Pengujian Resmi:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setActiveProductModal(null);
                  setActiveDocModal(p);
                }}
                className="bg-slate-950 hover:bg-slate-800 text-sky-300 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-800 flex items-center gap-1.5 transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Pratinjau TDS Lengkap</span>
              </button>

              <button
                onClick={handleDownloadTds}
                className="bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-800 flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5 text-teal-400" />
                <span>Unduh TDS (PDF)</span>
              </button>

              <button
                onClick={handleDownloadSds}
                className="bg-slate-950 hover:bg-slate-800 text-slate-400 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-800 flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh SDS (K3)</span>
              </button>

              <button
                onClick={handleDownloadTestReport}
                className="bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/60 text-xs font-bold px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition shadow"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hasil Uji Lab / Sertifikat</span>
              </button>
            </div>
          </div>

          {/* Action Callout */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[11px] text-slate-400">
              Diproduksi oleh <strong className="text-white">{companyInfo.companyName}</strong> (NIB: {companyInfo.nib})
            </div>

            <a
              href={getWhatsAppUrl(p.code)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Minta Penawaran Harga via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
