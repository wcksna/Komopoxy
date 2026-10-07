import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  FileText, 
  Plus, 
  Sparkles, 
  Tag, 
  User 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { NewsArticle } from '../../types';

export const NewsPortal: React.FC = () => {
  const { newsList, setActiveNewsModal, isAdminLoggedIn, setActiveTab } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(newsList.map(n => n.category)))];

  const filteredNews = newsList.filter(
    (n) => activeCategory === 'ALL' || n.category === activeCategory
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Pusat Informasi & Pengetahuan Teknik</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Berita, Inovasi & Panduan Aplikasi Kimia Konstruksi
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Artikel teknis dari tim insinyur material PT. KCCI CHEMTECH INDONESIA
          </p>
        </div>

        {isAdminLoggedIn && (
          <button
            onClick={() => setActiveTab('ADMIN')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Tulis Artikel via Admin</span>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat === 'ALL' ? 'Semua Topik' : cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveNewsModal(article)}
            className="bg-gradient-to-b from-slate-900 to-[#0e1622] border border-slate-800 hover:border-teal-500/60 rounded-3xl overflow-hidden shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="h-44 bg-slate-950 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-85"
                />
                <div className="absolute top-3 left-3 bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <User className="w-3 h-3 text-teal-400" />
                    {article.author.split(' ')[0]}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug group-hover:text-teal-300 transition">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {article.content}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
