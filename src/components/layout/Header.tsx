import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Globe, 
  KeyRound, 
  LogOut, 
  Mail, 
  Menu, 
  MessageSquare, 
  Phone, 
  Search, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Language } from '../../types';
import { KomopoxyLogo } from '../brand/KomopoxyLogo';

export const Header: React.FC = () => {
  const { 
    currentLang, 
    setLanguage, 
    activeTab, 
    setActiveTab, 
    companyInfo, 
    isAdminLoggedIn, 
    logoutAdmin,
    setIsAdminAuthModalOpen,
    setIsSearchModalOpen,
    getWhatsAppUrl,
    inquiries
  } = useData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pendingInquiriesCount = inquiries.filter(i => i.status === 'Baru').length;

  const navLabels = {
    INA: {
      home: 'BERANDA',
      products: 'PRODUK',
      solutions: 'SOLUSI',
      techData: 'DATA TEKNIS & SERTIFIKAT',
      projects: 'PROYEK',
      news: 'BERITA & PANDUAN',
      about: 'TENTANG KAMI',
      contact: 'HUBUNGI KAMI',
      admin: 'ADMIN PORTAL',
      tagline: companyInfo.taglineINA
    },
    KOR: {
      home: '홈',
      products: '제품',
      solutions: '솔루션',
      techData: '기술 자료 & 시험성적서',
      projects: '시공 실적',
      news: '기술 뉴스',
      about: '회사 소개',
      contact: '문의하기',
      admin: '관리자 포털',
      tagline: companyInfo.taglineKOR
    },
    ENG: {
      home: 'HOME',
      products: 'PRODUCTS',
      solutions: 'SOLUTIONS',
      techData: 'TECH DATA & CERTS',
      projects: 'PROJECTS',
      news: 'NEWS & GUIDES',
      about: 'ABOUT US',
      contact: 'CONTACT',
      admin: 'ADMIN PORTAL',
      tagline: companyInfo.taglineENG
    }
  }[currentLang];

  const navItems = [
    { id: 'HOME', label: navLabels.home },
    { id: 'PRODUCTS', label: navLabels.products },
    { id: 'SOLUTIONS', label: navLabels.solutions },
    { id: 'TECH_DATA', label: navLabels.techData },
    { id: 'PROJECTS', label: navLabels.projects },
    { id: 'NEWS', label: navLabels.news },
    { id: 'ABOUT', label: navLabels.about },
    { id: 'CONTACT', label: navLabels.contact }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0b1017] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white font-extrabold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {companyInfo.companyName}
            </span>
            <span className="text-slate-400 text-[11px] font-medium hidden lg:inline">
              NIB: {companyInfo.nib}
            </span>
            <span className="text-slate-500 hidden md:inline">
              | {navLabels.tagline}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-[11px] text-slate-300 flex-wrap justify-center">
            <a 
              href={`tel:${companyInfo.bsdWa.replace(/[^0-9+]/g, '')}`} 
              className="hover:text-teal-400 flex items-center gap-1 transition"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span>BSD: {companyInfo.bsdWa}</span>
            </a>
            <a 
              href={`tel:${companyInfo.jeparaWa.replace(/[^0-9+]/g, '')}`} 
              className="hover:text-teal-400 flex items-center gap-1 transition hidden sm:flex"
            >
              <Building2 className="w-3 h-3 text-cyan-400" />
              <span>Jepara: {companyInfo.jeparaWa}</span>
            </a>
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="hover:text-teal-400 flex items-center gap-1 transition hidden md:flex"
            >
              <Mail className="w-3 h-3 text-slate-400" />
              <span>{companyInfo.email}</span>
            </a>

            {/* ADMIN ACCESS BUTTON */}
            {isAdminLoggedIn ? (
              <div className="flex items-center gap-1.5 bg-teal-950/80 text-teal-300 border border-teal-600/60 rounded-lg px-2.5 py-0.5">
                <button
                  onClick={() => handleNavClick('ADMIN')}
                  className="font-bold flex items-center gap-1 hover:underline text-[11px]"
                >
                  <KeyRound className="w-3 h-3 text-teal-400" />
                  <span>Admin Portal</span>
                  {pendingInquiriesCount > 0 && (
                    <span className="bg-red-600 text-white font-black text-[9px] px-1.5 py-0.2 rounded-full">
                      {pendingInquiriesCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={logoutAdmin}
                  title="Logout Admin"
                  className="hover:text-red-400 transition ml-1"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAdminAuthModalOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-teal-400 hover:text-white px-2.5 py-1 rounded-lg border border-slate-700 font-bold transition flex items-center gap-1 text-[11px]"
              >
                <KeyRound className="w-3 h-3" />
                <span>Login Admin</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* STICKY MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-[#0e1622]/95 backdrop-blur-xl border-b border-slate-800 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-3">
          
          {/* BRAND LOGO WITH KOMODO DRAGON & TAGLINE */}
          <div 
            onClick={() => handleNavClick('HOME')}
            className="cursor-pointer group shrink-0 transition-transform duration-200 hover:scale-[1.02]"
            title="KOMOPOXY — Solusi Kimia Konstruksi Berkinerja Tinggi"
          >
            <KomopoxyLogo size="md" layout="horizontal" showTagline={true} />
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-bold tracking-tight whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-xl transition ${
                    isActive 
                      ? 'bg-gradient-to-r from-sky-900/60 to-teal-900/60 text-teal-300 border border-teal-500/50 shadow-md font-black' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            {isAdminLoggedIn && (
              <button
                onClick={() => handleNavClick('ADMIN')}
                className={`px-3 py-2 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'ADMIN'
                    ? 'bg-teal-600 text-white font-black shadow-lg'
                    : 'bg-teal-950/60 text-teal-300 border border-teal-700/60 hover:bg-teal-900/80'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>KELOLA ADMIN</span>
                {pendingInquiriesCount > 0 && (
                  <span className="bg-red-500 text-white font-extrabold text-[10px] px-1.5 py-0.2 rounded-full">
                    {pendingInquiriesCount}
                  </span>
                )}
              </button>
            )}
          </nav>

          {/* RIGHT UTILITIES & LANGUAGE SELECTOR */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition border border-slate-800 flex items-center gap-1.5 text-xs font-semibold"
              title="Cari Produk atau Dokumen (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-teal-400" />
              <span className="hidden lg:inline text-slate-400 text-[11px]">Cari (Ctrl+K)</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs font-bold">
              {(['INA', 'KOR', 'ENG'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded-lg transition ${
                    currentLang === lang 
                      ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-sm font-extrabold' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-teal-950 transition hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

          {/* MOBILE TOGGLES */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
              title="Search"
            >
              <Search className="w-4 h-4 text-teal-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-800 bg-[#0e1622] px-4 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-bold uppercase flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-teal-400" />
                Bahasa / Language / 언어
              </span>
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs font-bold">
                {(['INA', 'KOR', 'ENG'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      currentLang === lang 
                        ? 'bg-teal-600 text-white font-extrabold' 
                        : 'text-slate-400'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-3 rounded-xl text-xs font-bold transition ${
                    activeTab === item.id 
                      ? 'bg-gradient-to-r from-sky-700 to-teal-700 text-white shadow' 
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {isAdminLoggedIn ? (
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('ADMIN')}
                  className="w-full bg-teal-600 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>DASHBOARD ADMIN ({inquiries.length} Inquiries)</span>
                </button>
              </div>
            ) : (
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminAuthModalOpen(true);
                  }}
                  className="w-full bg-slate-900 border border-slate-700 text-teal-400 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Login Admin Portal</span>
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};
