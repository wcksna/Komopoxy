import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Package, 
  Search, 
  Sparkles, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const SearchModal: React.FC = () => {
  const { 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    products, 
    setActiveProductModal 
  } = useData();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  const q = query.toLowerCase().trim();
  const searchResults = products.filter((p) => {
    if (!q) return true;
    return (
      p.code.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.descKor.toLowerCase().includes(q) ||
      p.descEng.toLowerCase().includes(q) ||
      p.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl text-white animate-in fade-in zoom-in-95 duration-150">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <Search className="w-4 h-4 text-teal-400" />
            <span>Pencarian Cepat Katalog & Dokumen Teknis</span>
          </div>
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ketik kode (EL-2000, UB-260, IDM-200, N200) atau nama material..."
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {searchResults.length === 0 ? (
            <div className="py-8 text-center text-slate-500 text-xs">
              Tidak ada produk yang cocok dengan pencarian "{query}"
            </div>
          ) : (
            searchResults.map((p) => (
              <div
                key={p.code}
                onClick={() => {
                  setIsSearchModalOpen(false);
                  setActiveProductModal(p);
                }}
                className="p-3.5 bg-slate-950/80 hover:bg-slate-800 rounded-2xl cursor-pointer transition flex items-center justify-between border border-slate-800/80 group"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-black text-[11px] px-2.5 py-0.5 rounded shadow">
                      {p.code}
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-teal-300 transition">
                      {p.name}
                    </span>
                    <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {p.packaging}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {p.descKor} / {p.descEng}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-slate-500 group-hover:text-teal-400 text-xs font-semibold">
                  <span className="hidden sm:inline text-[11px]">Lihat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
          <span>Menampilkan {searchResults.length} formulasi</span>
          <span>Tekan ESC untuk menutup</span>
        </div>
      </div>
    </div>
  );
};
