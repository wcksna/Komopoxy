import React from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Tag, 
  User, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const NewsReaderModal: React.FC = () => {
  const { activeNewsModal, setActiveNewsModal, getWhatsAppUrl } = useData();

  if (!activeNewsModal) return null;

  const a = activeNewsModal;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl text-slate-100 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-950 p-6 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
              {a.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {a.date}
            </span>
          </div>
          <button
            onClick={() => setActiveNewsModal(null)}
            className="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {a.title}
          </h2>

          <div className="flex items-center gap-2 text-xs text-slate-400 pb-3 border-b border-slate-800">
            <User className="w-4 h-4 text-teal-400" />
            <span>Penulis: <strong className="text-slate-200">{a.author}</strong></span>
          </div>

          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4 font-normal whitespace-pre-line bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
            {a.content}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
            <button
              onClick={() => setActiveNewsModal(null)}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-bold rounded-xl border border-slate-800"
            >
              Tutup Artikel
            </button>
            <a
              href={getWhatsAppUrl(`Halo KOMOPOXY, saya membaca artikel "${a.title}" dan ingin berkonsultasi lebih lanjut.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Diskusi dengan Engineer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
