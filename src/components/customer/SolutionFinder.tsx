import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ArrowRight, 
  Building2, 
  CheckCircle, 
  Droplets, 
  HelpCircle, 
  Layers, 
  Package, 
  ShieldCheck, 
  Sparkles, 
  Wrench 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

interface ProblemCategory {
  key: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  summary: string;
  recommendedCodes: string[];
  workflowSteps: string[];
}

export const SolutionFinder: React.FC = () => {
  const { products, setActiveProductModal, getWhatsAppUrl } = useData();
  const [activeProblemKey, setActiveProblemKey] = useState<string>('CRACK');

  const PROBLEM_CATEGORIES: ProblemCategory[] = [
    {
      key: 'CRACK',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      label: 'Retak Beton & Injeksi Bocor',
      title: 'Injeksi Retak Beton & Penghentian Kebocoran Air Aktif',
      summary: 'Penanganan keretakan struktural dan non-struktural pada balok, kolom, pelat lantai, basement, dan dinding retaining wall. Menggunakan epoksi viskositas rendah untuk merekatkan kembali struktur monolit beton serta busa poliuretan hidrofobik ekspansif untuk menghentikan semburan air aktif.',
      recommendedCodes: ['SDM-100', 'IDM-200', 'UWBM-300', 'SFC-100', 'PK10-60'],
      workflowSteps: [
        'Identifikasi pola retak & bersihkan debu/lumpur dari permukaan celah.',
        'Pasang injector port atau packer mekanis sepanjang jalur retak.',
        'Tutup permukaan retak dengan epoksi sealing paste KOMOGrout SDM-100 / SWM-100.',
        'Suntikkan resin epoksi KOMOGrout IDM-200 secara bertahap atau PU Foam UWBM-300 jika terdapat air.',
        'Setelah kering matang, lepaskan injector dan ratakan permukaan beton.'
      ]
    },
    {
      key: 'FLOOR',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      label: 'Lantai Industri & Cleanroom',
      title: 'Sistem Lantai Higienis, Anti-Debu, Bebas Sambungan & Tahan Panas Ekstrem',
      summary: 'Proteksi lantai industri manufaktur, cleanroom farmasi berstandar cGMP, rumah sakit, laboratorium, gudang logistik, hingga pabrik makanan & minuman (F&B) yang membutuhkan ketahanan cuci uap mendidih serta suhu beku blast freezer.',
      recommendedCodes: ['EP-1000', 'EL-2000', 'EL-2100', 'A-Crete', 'EC-3000'],
      workflowSteps: [
        'Persiapan substrat melalui grinding atau shot-blasting hingga membuka pori beton (CSP 2-3).',
        'Aplikasi primer penetrasi KOMOFloor EP-1000 untuk menutup pori dan memperkuat daya ikat.',
        'Perataan permukaan dan aplikasi self-leveling KOMOFloor EL-2000 (tebal 1-3mm) atau Urethane Crete A-Crete.',
        'Pelapisan akhir topcoat KOMOFloor EL-2100 untuk ketahanan gores optimal dan kilap higienis.',
        'Curing selama 24 jam untuk lalu lintas orang, dan 72 jam untuk forklift beban penuh.'
      ]
    },
    {
      key: 'WATERPROOF',
      icon: <Droplets className="w-4 h-4 text-teal-400" />,
      label: 'Waterproofing Dak & Subterranean',
      title: 'Sistem Pengedap Air Membran Elastis, Polyurea Cepat Kering & Bitumen Bawah Tanah',
      summary: 'Perlindungan anti-bocor total untuk dak atap beton (rooftop), balkon, talang, planter box, dinding luar bangunan, hingga struktur bawah tanah (subterranean) dan retaining wall dari rembesan air tanah.',
      recommendedCodes: ['UB-260', 'UT-300', 'UA-265W', 'BP-200', 'AS-400'],
      workflowSteps: [
        'Pembersihan permukaan dari lumut, debu, dan genangan air; perbaiki retak yang ada.',
        'Aplikasi primer adhesi KOMOProof UP-100.',
        'Pelapisan membran fleksibel KOMOProof UB-260 (elastisitas > 450%) atau Polyurea hand-applied UA-265W.',
        'Aplikasi topcoat pelindung sinar UV KOMOProof UT-300 untuk area dak terbuka yang terpapar matahari.',
        'Uji rendam air (ponding test) selama minimal 24 jam sebelum serah terima.'
      ]
    },
    {
      key: 'STRENGTH',
      icon: <Building2 className="w-4 h-4 text-indigo-400" />,
      label: 'Perkuatan Struktur (CFRP)',
      title: 'Sistem Serat Karbon Komposit (CFRP) untuk Peningkatan Kapasitas Beban & Gempa',
      summary: 'Retrofitting struktur balok, kolom, pelat lantai, dan jembatan tanpa menambah beban mati struktur beton. Menggunakan lembaran carbon fiber searah berkekuatan tarik di atas 3400 MPa dan resin saturasi epoksi khusus.',
      recommendedCodes: ['N200', 'N300', 'CFP-100', 'CFR-200'],
      workflowSteps: [
        'Grinding permukaan beton hingga agregat kasar terlihat dan tumpulkan sudut balok/kolom menjadi radius min 20mm.',
        'Oleskan primer epoksi KOMOWrap CFP-100 untuk meresap ke dalam beton.',
        'Aplikasikan resin impregnasi KOMOWrap CFR-200 lapis pertama.',
        'Tempelkan lembaran serat karbon KOMOWrap N200 / N300, tekan menggunakan roller silinder searah serat.',
        'Lapiskan kembali resin saturasi CFR-200 sebagai lapisan pelindung dan biarkan mengeras sempurna.'
      ]
    },
    {
      key: 'ADHESIVE',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      label: 'Perekat Batu Alam & Granit Tile',
      title: 'Perekat Epoksi Khusus Batu Alam, Granit Berat & Lingkungan Kimia',
      summary: 'Formulasi pasta epoksi thixotropic berdaya lekat ultra kuat untuk pemasangan marmer, granit alam berdimensi besar, cladding fasad vertikal tanpa khawatir melorot, serta pemasangan ubin di area basah dan terendam.',
      recommendedCodes: ['SA-10', 'TA-20', 'TA(1)-30'],
      workflowSteps: [
        'Pastikan permukaan batu/ubin dan substrat beton kering, bersih dari minyak dan serbuk debu.',
        'Campurkan komponen A dan B KOMOBond SA-10 atau TA-20 sesuai perbandingan rasio.',
        'Aplikasikan dengan trowel bergerigi pada bidang belakang batu atau dinding.',
        'Tekan material batu pada posisinya; formula non-sag menjaga batu tidak bergeser turun.',
        'Bersihkan sisa pasta yang meluap sebelum 45 menit waktu pot-life berakhir.'
      ]
    }
  ];

  const currentCategory = PROBLEM_CATEGORIES.find(c => c.key === activeProblemKey) || PROBLEM_CATEGORIES[0];
  const matchedProducts = products.filter(p => currentCategory.recommendedCodes.includes(p.code));

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold px-3.5 py-1 rounded-full">
          <Wrench className="w-3.5 h-3.5 text-teal-400" />
          <span>DIAGNOSIS & MATRIKS SOLUSI REKAYASA</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white">
          Pencari Solusi Material Sesuai Kendala Proyek
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          Pilih jenis pekerjaan atau masalah struktur di bawah ini untuk melihat formulasi rekomendasi KOMOPOXY, alur kerja teknis, dan konsultasi spesifikasi.
        </p>
      </div>

      {/* Problem Category Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 shadow-md">
        {PROBLEM_CATEGORIES.map((cat) => {
          const isActive = cat.key === activeProblemKey;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveProblemKey(cat.key)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition ${
                isActive
                  ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-lg shadow-teal-950/60 font-black'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Diagnostic Detail Panel */}
      <div className="bg-gradient-to-br from-slate-900 via-[#0e1622] to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="space-y-3">
          <div className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Spesifikasi Solusi Rekayasa</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {currentCategory.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            {currentCategory.summary}
          </p>
        </div>

        {/* Recommended Products Grid */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Package className="w-4 h-4 text-sky-400" />
            <span>Formulasi Utama yang Direkomendasikan:</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {matchedProducts.map((prod) => (
              <div
                key={prod.code}
                className="bg-slate-950/90 border border-slate-800 hover:border-teal-500/60 rounded-2xl p-4.5 space-y-3 transition flex flex-col justify-between shadow-sm hover:shadow-lg group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-black text-[11px] px-2.5 py-0.5 rounded shadow">
                      {prod.code}
                    </span>
                    <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                      {prod.packaging}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-xs group-hover:text-teal-300 transition">
                    {prod.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {prod.descKor} / {prod.descEng}
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => setActiveProductModal(prod)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-[11px] font-bold py-2 rounded-xl border border-slate-800 transition flex items-center justify-center gap-1"
                  >
                    <span>Spesifikasi</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <a
                    href={getWhatsAppUrl(prod.code)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-teal-950/70 hover:bg-teal-900/80 text-teal-300 border border-teal-700/50 text-[11px] font-semibold py-1.5 rounded-xl transition flex items-center justify-center gap-1 text-center"
                  >
                    <span>Tanya Stok</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Workflow Steps */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 space-y-4">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Standar Alur Kerja Aplikasi di Lapangan:</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {currentCategory.workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2 relative"
              >
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center font-black text-xs">
                  {idx + 1}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Consultation Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
          <div className="text-xs text-slate-400">
            Perlu survey lapangan atau penghitungan volume kebutuhan?
          </div>
          <a
            href={getWhatsAppUrl(`Halo KOMOPOXY, saya ingin berkonsultasi mengenai solusi: ${currentCategory.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition flex items-center gap-2"
          >
            <span>Konsultasi Solusi Ini ke Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
