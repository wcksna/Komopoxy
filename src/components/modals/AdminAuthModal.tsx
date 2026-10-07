import React, { useState } from 'react';
import { 
  AlertCircle, 
  Eye, 
  EyeOff, 
  KeyRound, 
  Lock, 
  Mail, 
  ShieldCheck, 
  X 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const AdminAuthModal: React.FC = () => {
  const { 
    isAdminAuthModalOpen, 
    setIsAdminAuthModalOpen, 
    loginAdmin, 
    setActiveTab, 
    companyInfo 
  } = useData();

  const [emailInput, setEmailInput] = useState('marketing@kccichem.com');
  const [passInput, setPassInput] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isAdminAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const success = loginAdmin(emailInput, passInput);
    if (success) {
      setIsAdminAuthModalOpen(false);
      setActiveTab('ADMIN');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setErrorMsg('Password salah! Silakan gunakan passkey: admin123');
    }
  };

  const handleUseDemoCreds = () => {
    setEmailInput('marketing@kccichem.com');
    setPassInput('admin123');
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl text-white animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-500/15 border border-teal-500/30 rounded-2xl text-teal-400">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Login Admin Portal</h3>
              <p className="text-[11px] text-slate-400">{companyInfo.companyName}</p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminAuthModalOpen(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="bg-red-950/80 border border-red-700/60 p-3 rounded-xl text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="font-bold text-slate-300">Email Administrator</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="marketing@kccichem.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-slate-300">Password / Passkey</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                placeholder="Masukkan password admin"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 flex items-center justify-between gap-2">
            <div className="text-[11px] text-slate-400">
              Passkey default: <code className="text-teal-400 font-bold">admin123</code>
            </div>
            <button
              type="button"
              onClick={handleUseDemoCreds}
              className="text-[10px] text-teal-400 hover:underline font-bold"
            >
              Isi Otomatis
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
          >
            <span>Masuk ke Dashboard Admin ➔</span>
          </button>
        </form>
      </div>
    </div>
  );
};
