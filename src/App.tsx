import React from 'react';
import { MessageSquare } from 'lucide-react';
import { DataProvider, useData } from './context/DataContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/customer/HeroSection';
import { ProductCatalog } from './components/customer/ProductCatalog';
import { SolutionFinder } from './components/customer/SolutionFinder';
import { TechnicalDocCenter } from './components/customer/TechnicalDocCenter';
import { ProjectGallery } from './components/customer/ProjectGallery';
import { NewsPortal } from './components/customer/NewsPortal';
import { CustomerInquiryForm } from './components/customer/CustomerInquiryForm';
import { CompanyAbout } from './components/customer/CompanyAbout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { DocPreviewModal } from './components/modals/DocPreviewModal';
import { NewsReaderModal } from './components/modals/NewsReaderModal';
import { AdminAuthModal } from './components/modals/AdminAuthModal';
import { SearchModal } from './components/modals/SearchModal';
import { KomopoxyLogo } from './components/brand/KomopoxyLogo';

const MainContent: React.FC = () => {
  const { activeTab, getWhatsAppUrl, setActiveTab } = useData();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-grow">
        {activeTab === 'HOME' && (
          <div className="space-y-16 pb-16">
            <HeroSection />

            {/* Quick Category Showcase Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                  KLASIFIKASI STANDAR REKAYASA
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  5 Lini Produk Utama KOMOPOXY
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Diformulasikan secara presisi untuk setiap kebutuhan proteksi dan perbaikan konstruksi
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { id: 'KOMOFLOOR', name: 'KOMOFloor', label: 'Epoxy & Urethane Crete', desc: 'Pelapis lantai cleanroom, pabrik, & cold storage' },
                  { id: 'KOMOPROOF', name: 'KOMOProof', label: 'Membran Elastis PU', desc: 'Waterproofing dak beton, balkon, & dinding' },
                  { id: 'KOMOGROUT', name: 'KOMOGrout', label: 'Injeksi Retak & PU Foam', desc: 'Grouting perbaikan retak & penahan bocor aktif' },
                  { id: 'KOMOBOND', name: 'KOMOBond', label: 'Perekat Epoksi Batu & Tile', desc: 'Adhesive ekstra kuat marmer, granit & dinding' },
                  { id: 'KOMOWRAP', name: 'KOMOWrap', label: 'Serat Karbon CFRP', desc: 'Perkuatan balok, kolom, & jembatan tahan gempa' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveTab('PRODUCTS');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 bg-gradient-to-b from-slate-900 to-[#0e1622] border border-slate-800 hover:border-teal-500/60 rounded-3xl cursor-pointer transition shadow-lg hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-teal-400 uppercase tracking-wider">
                        {item.name}
                      </span>
                      <h3 className="font-black text-sm text-white group-hover:text-teal-300 transition">
                        {item.label}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-3 text-[11px] font-bold text-teal-400 flex items-center gap-1">
                      <span>Buka Formulasi ➔</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <SolutionFinder />

            {/* Direct Inquiry Callout on Home */}
            <CustomerInquiryForm />
          </div>
        )}

        {activeTab === 'PRODUCTS' && <ProductCatalog />}
        {activeTab === 'SOLUTIONS' && <SolutionFinder />}
        {activeTab === 'TECH_DATA' && <TechnicalDocCenter />}
        {activeTab === 'PROJECTS' && <ProjectGallery />}
        {activeTab === 'NEWS' && <NewsPortal />}
        {activeTab === 'ABOUT' && <CompanyAbout />}
        {activeTab === 'CONTACT' && <CustomerInquiryForm />}
        {activeTab === 'ADMIN' && <AdminDashboard />}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-950 transition hover:scale-110 flex items-center justify-center group"
        title="Hubungi Sales & Engineer via WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs ml-0 group-hover:ml-2">
          Chat WhatsApp
        </span>
      </a>

      {/* Global Modals */}
      <ProductDetailModal />
      <DocPreviewModal />
      <NewsReaderModal />
      <AdminAuthModal />
      <SearchModal />

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <MainContent />
    </DataProvider>
  );
}
