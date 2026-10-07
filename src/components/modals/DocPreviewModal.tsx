import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Download, 
  FileCheck, 
  FileText, 
  Printer, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const DocPreviewModal: React.FC = () => {
  const { activeDocModal, setActiveDocModal, companyInfo } = useData();

  if (!activeDocModal) return null;

  const p = activeDocModal;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    alert(`Mengunduh lembar resmi Technical Data Sheet (TDS) untuk ${p.code} (${p.name}). Berkas PDF tersimpan.`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full shadow-2xl text-slate-100 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Modal Controls */}
        <div className="bg-slate-950 px-6 py-4 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <FileText className="w-4 h-4 text-teal-400" />
            <span>Technical Data Sheet (TDS) Preview: {p.code}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition text-xs flex items-center gap-1 font-semibold"
              title="Cetak Dokumen"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak</span>
            </button>
            <button
              onClick={handleDownloadPdf}
              className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition flex items-center gap-1 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh PDF</span>
            </button>
            <button
              onClick={() => setActiveDocModal(null)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formal Document Sheet Body */}
        <div className="p-6 md:p-10 space-y-6 max-h-[75vh] overflow-y-auto bg-slate-950/40">
          {/* Formal Letterhead */}
          <div className="border-b-2 border-teal-500/40 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white flex items-center gap-2">
                <span className="w-3 h-3 bg-teal-400 rounded-full inline-block"></span>
                KOMOPOXY
              </span>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mt-0.5">
                {companyInfo.companyName}
              </div>
              <div className="text-[11px] text-slate-400">
                NIB: {companyInfo.nib} • Sistem Manajemen Mutu ISO 9001:2015
              </div>
            </div>

            <div className="text-right text-[11px] text-slate-400 space-y-0.5">
              <div className="font-bold text-slate-200">TECHNICAL DATA SHEET (TDS)</div>
              <div>Kode Dokumen: TDS-KCCI-{p.code}</div>
              <div>Tanggal Terbit: 2026-10 / Rev. 04</div>
            </div>
          </div>

          {/* Product Identification */}
          <div className="space-y-1 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-black text-sm px-3 py-0.5 rounded shadow">
                {p.code}
              </span>
              <h2 className="text-lg font-black text-white">{p.name}</h2>
            </div>
            <div className="text-xs text-slate-300 font-semibold pt-1">
              {p.descKor} / {p.descEng}
            </div>
            <div className="text-[11px] text-teal-400 font-bold uppercase">
              Kategori: {p.category} | Aplikasi: {p.appType} | Kemasan: {p.packaging}
            </div>
          </div>

          {/* Technical Specs Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-wider">
              1. Parameter Fisik & Karakteristik Material
            </h4>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold w-1/3">Tipe Basis Kimia</td>
                    <td className="p-3 text-white font-medium">Resin Epoksi / Poliuretan Modifikasi</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Bentuk Fisik & Kemasan</td>
                    <td className="p-3 text-white font-medium">{p.packaging} (Siap Pakai / Dua Komponen)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Berat Jenis (Density)</td>
                    <td className="p-3 text-white font-medium">1.10 - 1.45 kg/liter (sesuai formulasi spesifik)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Kuat Lekat ke Beton (Adhesion)</td>
                    <td className="p-3 text-teal-400 font-bold">&gt; 2.5 N/mm² (Kegagalan kohesif pada beton dasar)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Kuat Tekan (Compressive Strength)</td>
                    <td className="p-3 text-white font-medium">&gt; 70 N/mm² (ASTM C-579 / KS F 4923)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Waktu Buka Campuran (Pot Life)</td>
                    <td className="p-3 text-white font-medium">30 - 45 Menit pada suhu kamar 28°C</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="p-3 text-slate-400 font-semibold">Waktu Kering Sempurna (Full Cure)</td>
                    <td className="p-3 text-white font-medium">7 Hari (Dapat dilalui lalu lintas ringan setelah 24 jam)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Application & Mixing Guide */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-wider">
              2. Petunjuk Pencampuran & Aplikasi di Lapangan
            </h4>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300 leading-relaxed">
              <p>
                <strong>Persiapan Substrat:</strong> Beton dasar harus berumur minimal 28 hari dengan kelembapan di bawah 5%. Permukaan harus bersih dari debu, minyak, oli, dan cat lama menggunakan metode mekanis (diamond grinding / shot-blasting).
              </p>
              <p>
                <strong>Pencampuran:</strong> Aduk Komponen A dan Komponen B secara terpisah, kemudian satukan dan aduk menggunakan mixer elektrik kecepatan rendah (300-500 rpm) selama 3 menit hingga homogen sempurna.
              </p>
              <p>
                <strong>Aplikasi:</strong> Aplikasikan menggunakan roll, kuas, atau trowel bergigi sesuai ketebalan desain. Hindari pengaplikasian saat kondisi hujan atau kelembapan udara di atas 85%.
              </p>
            </div>
          </div>

          {/* Safety & Storage */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-wider">
              3. Keselamatan Kerja (K3) & Penyimpanan
            </h4>
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
              Simpan pada tempat kering dan sejuk dengan suhu 10°C - 30°C, terhindar dari paparan sinar matahari langsung. Masa kedaluwarsa 12 bulan dari tanggal produksi dalam kemasan tersegel utuh. Gunakan APD (sarung tangan karet, kacamata pelindung, dan masker uap organik) selama proses pengadukan.
            </div>
          </div>

          {/* Footer Sign-off */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[11px] text-slate-400">
            <div>
              Dikeluarkan secara resmi oleh Laboratorium Kontrol Mutu <strong>{companyInfo.companyName}</strong>.
            </div>
            <div className="text-teal-400 font-bold">
              Kantor Pemasaran: {companyInfo.bsdWa} | Pabrik: {companyInfo.jeparaWa}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
