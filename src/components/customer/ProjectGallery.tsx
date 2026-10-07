import React from 'react';
import { 
  Building, 
  Calendar, 
  ExternalLink, 
  MapPin, 
  MessageSquare, 
  Plus, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const ProjectGallery: React.FC = () => {
  const { projects, getWhatsAppUrl, isAdminLoggedIn, setActiveTab } = useData();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-teal-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Building className="w-4 h-4" />
            <span>Referensi Lapangan ({projects.length} Proyek)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Portofolio & Pengalaman Aplikasi Lapangan
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Bukti keandalan formulasi KOMOPOXY pada proyek industri, infrastruktur jembatan, rumah sakit, dan gedung komersial
          </p>
        </div>

        {isAdminLoggedIn && (
          <button
            onClick={() => setActiveTab('ADMIN')}
            className="bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Proyek via Admin</span>
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-gradient-to-b from-slate-900 to-[#0e1622] border border-slate-800 hover:border-teal-500/60 rounded-3xl overflow-hidden shadow-xl transition duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 bg-slate-950 relative overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur">
                  {proj.category}
                </div>
                {proj.areaM2 && (
                  <div className="absolute top-3 right-3 bg-slate-950/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-800">
                    {proj.areaM2}
                  </div>
                )}
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    {proj.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {proj.date}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base leading-snug group-hover:text-teal-300 transition">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={getWhatsAppUrl(`Halo KOMOPOXY, saya tertarik dengan sistem aplikasi pada proyek: ${proj.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-teal-300 hover:text-white text-xs font-bold py-2.5 rounded-xl border border-slate-800 transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Konsultasikan Kebutuhan Serupa</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
