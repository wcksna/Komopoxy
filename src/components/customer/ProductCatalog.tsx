import React, { useState } from 'react';
import { 
  Check, 
  ExternalLink, 
  FileText, 
  Filter, 
  MessageSquare, 
  Package, 
  Plus, 
  Search, 
  ShieldCheck, 
  Sparkles, 
  Tag 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ApplicationType, ProductCategory } from '../../types';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    currentLang, 
    setActiveProductModal, 
    getWhatsAppUrl,
    isAdminLoggedIn,
    setActiveTab
  } = useData();

  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [appFilter, setAppFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const CATEGORIES: { id: string; label: string; count: number }[] = [
    { id: 'ALL', label: 'Semua Produk', count: products.length },
    { id: 'KOMOFLOOR', label: 'KOMOFloor', count: products.filter(p => p.category === 'KOMOFLOOR').length },
    { id: 'KOMOPROOF', label: 'KOMOProof', count: products.filter(p => p.category === 'KOMOPROOF').length },
    { id: 'KOMOGROUT', label: 'KOMOGrout / Injeksi', count: products.filter(p => p.category === 'KOMOGROUT').length },
    { id: 'KOMOBOND', label: 'KOMOBond', count: products.filter(p => p.category === 'KOMOBOND').length },
    { id: 'KOMOWRAP', label: 'KOMOWrap / CFRP', count: products.filter(p => p.category === 'KOMOWRAP').length }
  ];

  const APPLICATION_TYPES: { id: string; label: string }[] = [
    { id: 'ALL', label: 'Semua Aplikasi' },
    { id: 'Flooring', label: 'Lantai / Flooring' },
    { id: 'Waterproofing', label: 'Pengedap Air / Waterproofing' },
    { id: 'Concrete Injection', label: 'Injeksi Retak Beton' },
    { id: 'Adhesive', label: 'Perekat / Adhesive' },
    { id: 'Structural Strengthening', label: 'Perkuatan Struktur' }
  ];

  const filteredProducts = products.filter((p) => {
    const matchCat = categoryFilter === 'ALL' || p.category === categoryFilter;
    const matchApp = appFilter === 'ALL' || p.appType === appFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      !q ||
      p.code.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.descKor.toLowerCase().includes(q) ||
      p.descEng.toLowerCase().includes(q) ||
      (p.shortDesc.INA && p.shortDesc.INA.toLowerCase().includes(q));
    return matchCat && matchApp && matchSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-8">
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Package className="w-4 h-4" />
            <span>Katalog Formulasi Lengkap ({products.length} Formulasi)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Katalog Produk Resmi KOMOPOXY
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Spesifikasi formulasi berstandar industri dengan jaminan mutu dan sertifikasi pengujian
          </p>
        </div>

        {isAdminLoggedIn && (
          <button
            onClick={() => setActiveTab('ADMIN')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Kelola / Tambah Produk via Admin</span>
          </button>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 md:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kode produk (EL-2000, IDM-200, N200, UB-260...)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Application Type Select */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-teal-400" />
            <select
              value={appFilter}
              onChange={(e) => setAppFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {APPLICATION_TYPES.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Kategori Lini Produk:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = categoryFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
                      : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Count Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Menampilkan <span className="font-bold text-teal-400">{filteredProducts.length}</span> formulasi dari total {products.length}
        </div>
        {(searchQuery || categoryFilter !== 'ALL' || appFilter !== 'ALL') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setCategoryFilter('ALL');
              setAppFilter('ALL');
            }}
            className="text-teal-400 hover:underline font-semibold"
          >
            Reset Semua Filter
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
          <Package className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">Tidak ada produk yang cocok</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Coba gunakan kata kunci lain seperti nama bahan, kode produk (misal: "EL-2000" atau "UWBM"), atau reset filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => {
            const shortDesc = p.shortDesc[currentLang] || p.shortDesc.INA;
            return (
              <div
                key={p.code}
                className="bg-gradient-to-b from-slate-900 to-[#0e1622] border border-slate-800 hover:border-teal-500/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image / Graphic Banner */}
                  <div className="h-44 bg-slate-950 relative overflow-hidden flex items-center justify-center">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-white text-xs font-black px-3 py-1 rounded-lg shadow-md">
                        {p.code}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-teal-300 border border-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur">
                      📦 {p.packaging}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/30">
                        {p.category}
                      </span>
                      <span className="text-[10px] bg-slate-900 text-slate-400 px-2.5 py-0.5 rounded font-semibold border border-slate-800">
                        {p.appType}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white group-hover:text-teal-300 transition">
                      {p.name}
                    </h3>

                    {/* Korean & English original references */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1">
                      <div className="text-xs font-bold text-slate-200">
                        {p.descKor}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {p.descEng}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {shortDesc}
                    </p>

                    {/* Features Snippet */}
                    <div className="space-y-1 pt-1">
                      {p.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <Check className="w-3 h-3 text-teal-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProductModal(p)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-bold py-3 rounded-xl border border-slate-800 transition flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5 text-teal-400" />
                      <span>Spesifikasi & TDS</span>
                    </button>
                    <a
                      href={getWhatsAppUrl(p.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition shadow flex items-center justify-center shrink-0"
                      title="Tanya stok via WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>

                  {isAdminLoggedIn && (
                    <button
                      onClick={() => {
                        setActiveTab('ADMIN');
                      }}
                      className="w-full text-center text-[10px] text-teal-400 hover:underline font-semibold"
                    >
                      Edit di Dashboard Admin ➔
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
