import React from 'react';
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Clock, 
  FileDown, 
  Flame, 
  Layers, 
  MessageSquare, 
  ShieldCheck, 
  Wrench 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { KomopoxyLogo } from '../brand/KomopoxyLogo';

export const HeroSection: React.FC = () => {
  const { 
    companyInfo, 
    currentLang, 
    setActiveTab, 
    products, 
    getWhatsAppUrl, 
    setActiveDocModal 
  } = useData();

  const heroCopy = {
    INA: {
      badge: 'Formulasi Resmi PT. KCCI CHEMTECH INDONESIA',
      title: 'Solusi Kimia Konstruksi Berdaya Tahan Tinggi & Teruji Mutu ISO',
      subtitle: `Sistem terlengkap epoxy flooring, elastomeric waterproofing, injeksi beton & sealing kebocoran, perekat batu alam/granit, serta perkuatan serat karbon (CFRP) dengan kekuatan dan presisi rekayasa modern.`,
      ctaPrimary: 'Lihat Katalog Produk',
      ctaSecondary: 'Konsultasi Rekayasa Material',
      techButton: 'Unduh Berkas Data Teknis (TDS & SDS)',
      statProducts: `${products.length} Formulasi`,
      statProductsDesc: 'Lengkap Siap Suplai',
      statIso: 'ISO 9001',
      statIsoDesc: 'Kendali Mutu Pabrik',
      statSupport: 'Dukungan Teknis',
      statSupportDesc: 'Konsultasi Lapangan'
    },
    KOR: {
      badge: 'PT. KCCI CHEMTECH INDONESIA 정품 제형',
      title: '신뢰할 수 있는 고성능 건설 화학 종합 솔루션',
      subtitle: `에폭시 바닥재, 고탄성 우레탄/폴리우레아 방수재, 균열 주입 및 씰링제(KOMOGrout), 고강도 접착제(KOMOBond), 탄소섬유 보강재(KOMOWrap) 정품 제품군을 제공합니다.`,
      ctaPrimary: '전체 제품 카탈로그 보기',
      ctaSecondary: '현장 기술 상담',
      techButton: '기술 자료집(TDS & SDS) 다운로드',
      statProducts: `${products.length}종 제형`,
      statProductsDesc: '정품 라인업 구비',
      statIso: 'ISO 9001',
      statIsoDesc: '엄격한 품질 관리',
      statSupport: '기술 지원',
      statSupportDesc: '현장 맞춤 컨설팅'
    },
    ENG: {
      badge: 'Official Formulation of PT. KCCI CHEMTECH INDONESIA',
      title: 'High-Performance Construction Chemical Solutions',
      subtitle: `Complete range of epoxy flooring, elastomeric waterproofing, concrete injection & leak sealing, tile/stone adhesives, and carbon fiber (CFRP) structural strengthening.`,
      ctaPrimary: 'Explore Products Catalog',
      ctaSecondary: 'Technical Consultation',
      techButton: 'Download Technical Data (TDS & SDS)',
      statProducts: `${products.length} Formulations`,
      statProductsDesc: 'Full Range in Stock',
      statIso: 'ISO 9001',
      statIsoDesc: 'Quality Controlled',
      statSupport: 'Field Support',
      statSupportDesc: 'Engineering Guidance'
    }
  }[currentLang];

  const floorCount = products.filter(p => p.category === 'KOMOFLOOR').length;
  const proofCount = products.filter(p => p.category === 'KOMOPROOF').length;
  const groutCount = products.filter(p => p.category === 'KOMOGROUT').length;
  const bondCount = products.filter(p => p.category === 'KOMOBOND').length;
  const wrapCount = products.filter(p => p.category === 'KOMOWRAP').length;

  return (
    <section className="relative min-h-[85vh] bg-[#0c131d] flex items-center overflow-hidden border-b border-slate-800">
      {/* Dynamic Background Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[130px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 lg:py-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Logo & Tagline Header in Hero */}
          <div className="space-y-3">
            <KomopoxyLogo size="xl" layout="hero-badge" showTagline={true} />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.18] pt-2">
            {heroCopy.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {heroCopy.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => {
                setActiveTab('PRODUCTS');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-extrabold text-sm px-7 py-4 rounded-2xl shadow-xl shadow-teal-950 transition hover:scale-105 flex items-center gap-2"
            >
              <span>{heroCopy.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setActiveTab('CONTACT');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm px-6 py-4 rounded-2xl transition shadow flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-teal-400" />
              <span>{heroCopy.ctaSecondary}</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('TECH_DATA');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-slate-400 hover:text-teal-300 transition flex items-center gap-1.5 px-3 py-2"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>{heroCopy.techButton}</span>
            </button>
          </div>

          {/* Key Metrics / Credibility */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-slate-800/80 max-w-2xl">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                {heroCopy.statProducts}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                {heroCopy.statProductsDesc}
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-teal-400">
                {heroCopy.statIso}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                {heroCopy.statIsoDesc}
              </div>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                24/7
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                {heroCopy.statSupportDesc}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Catalog Quick Box */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                Daftar Formulasi Resmi
              </span>
              <span className="text-[11px] font-extrabold bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2.5 py-0.5 rounded-full">
                {products.length} TOTAL
              </span>
            </div>

            {/* Series Quick List with live counts */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div 
                onClick={() => setActiveTab('PRODUCTS')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 cursor-pointer transition border border-slate-800/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="font-semibold text-white">KOMOFloor Series</span>
                </div>
                <span className="font-bold text-teal-300 text-xs">{floorCount} Items</span>
              </div>

              <div 
                onClick={() => setActiveTab('PRODUCTS')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 cursor-pointer transition border border-slate-800/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="font-semibold text-white">KOMOProof Series</span>
                </div>
                <span className="font-bold text-teal-300 text-xs">{proofCount} Items</span>
              </div>

              <div 
                onClick={() => setActiveTab('PRODUCTS')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 cursor-pointer transition border border-slate-800/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-semibold text-white">KOMOGrout / Injeksi</span>
                </div>
                <span className="font-bold text-teal-300 text-xs">{groutCount} Items</span>
              </div>

              <div 
                onClick={() => setActiveTab('PRODUCTS')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 cursor-pointer transition border border-slate-800/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="font-semibold text-white">KOMOBond Series</span>
                </div>
                <span className="font-bold text-teal-300 text-xs">{bondCount} Items</span>
              </div>

              <div 
                onClick={() => setActiveTab('PRODUCTS')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 cursor-pointer transition border border-slate-800/60"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold text-white">KOMOWrap CFRP</span>
                </div>
                <span className="font-bold text-teal-300 text-xs">{wrapCount} Items</span>
              </div>
            </div>

            {/* Quick Action in Card */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Cepat via WhatsApp</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 text-center pt-1">
              Pabrik: Pecangaan, Jepara | Pemasaran: BSD Tangerang
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
