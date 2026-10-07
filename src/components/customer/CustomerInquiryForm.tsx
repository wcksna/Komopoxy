import React, { useState } from 'react';
import { 
  Building, 
  Building2, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Send, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const CustomerInquiryForm: React.FC = () => {
  const { companyInfo, submitInquiry, products, getWhatsAppUrl } = useData();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Lantai Industri (Epoxy / Urethane Crete)');
  const [estimatedAreaM2, setEstimatedAreaM2] = useState('');
  const [productInterest, setProductInterest] = useState('KOMOFloor EL-2000');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !message) {
      alert('Mohon lengkapi Nama, Nomor Telepon/WhatsApp, dan Pesan Inquiry.');
      return;
    }

    submitInquiry({
      customerName: fullName,
      companyName,
      email,
      phone,
      projectType,
      estimatedAreaM2,
      productInterest,
      message
    });

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setEstimatedAreaM2('');
    setMessage('');
    setIsSubmitted(false);
  };

  const formattedWhatsAppText = `Halo KOMOPOXY (PT. KCCI CHEMTECH INDONESIA), saya ingin konsultasi/penawaran harga:
- Nama: ${fullName}
- Perusahaan: ${companyName || '-'}
- Jenis Pekerjaan: ${projectType}
- Luas / Volume: ${estimatedAreaM2 ? `${estimatedAreaM2} m²` : '-'}
- Produk Pilihan: ${productInterest}
- Pesan: ${message}`;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-teal-400 font-bold text-xs uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          <span>KONSULTASI TEKNIS & PERMINTAAN PENAWARAN RESMI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Hubungi Tim Rekayasa Material & Penjualan
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
          Kirimkan detail spesifikasi proyek Anda untuk mendapatkan rekomendasi produk yang tepat, estimasi volume pemakaian, serta penawaran harga resmi (Quotation) dari PT. KCCI CHEMTECH INDONESIA.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: 7 cols */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-white">
                  Permintaan Inquiry Berhasil Dikirim!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Terima kasih <strong className="text-teal-400">{fullName}</strong>. Data permintaan Anda telah masuk ke portal admin tim engineering kami. Kami akan segera menghubungi nomor <strong>{phone}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${companyInfo.bsdWa.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(formattedWhatsAppText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan Langsung via WhatsApp</span>
                </a>
                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-bold px-6 py-3.5 rounded-xl border border-slate-800 transition"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Nama Perusahaan / Kontraktor
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Contoh: PT. Wijaya Konstruksi"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Nomor WhatsApp / Telepon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812-3456-7890"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: procurement@perusahaan.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Kategori Kebutuhan Proyek
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="Lantai Industri (Epoxy / Urethane Crete)">Lantai Industri (Epoxy / Urethane Crete)</option>
                    <option value="Injeksi Retak Beton Struktural">Injeksi Retak Beton Struktural</option>
                    <option value="Penghentian Kebocoran Air Basement (PU Foam)">Penghentian Kebocoran Air Basement (PU Foam)</option>
                    <option value="Waterproofing Dak Atap & Balon">Waterproofing Dak Atap & Balkon</option>
                    <option value="Waterproofing Subterranean Bawah Tanah">Waterproofing Subterranean Bawah Tanah</option>
                    <option value="Perkuatan Struktur Serat Karbon (CFRP)">Perkuatan Struktur Serat Karbon (CFRP)</option>
                    <option value="Perekat Batu Alam / Marmer / Cladding">Perekat Batu Alam / Marmer / Cladding</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-300">
                    Estimasi Luas Area (m²) / Jumlah Titik
                  </label>
                  <input
                    type="text"
                    value={estimatedAreaM2}
                    onChange={(e) => setEstimatedAreaM2(e.target.value)}
                    placeholder="Contoh: 1.500 m² atau 50 titik injeksi"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">
                  Formulasi Produk yang Diminati (Opsional)
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Umum / Konsultasi Pilihan Produk">Umum / Konsultasi Pilihan Produk</option>
                  {products.map((p) => (
                    <option key={p.code} value={`${p.code} - ${p.name}`}>
                      {p.code} - {p.name} ({p.packaging})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">
                  Pesan / Rincian Kondisi Lapangan *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Jelaskan kebutuhan proyek, kendala keretakan/kebocoran, lokasi proyek, atau permintaan penawaran harga..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-black text-xs py-4 rounded-xl shadow-xl transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan Konsultasi & Penawaran</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Info: 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-5 shadow-2xl relative overflow-hidden">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-teal-400 tracking-wider">
                Resmi Berbadan Hukum
              </span>
              <h3 className="text-lg font-black text-white">
                {companyInfo.companyName}
              </h3>
              <p className="text-xs text-slate-400">
                CEO: {companyInfo.ceo} | NIB: {companyInfo.nib}
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300 border-t border-slate-800 pt-4">
              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-teal-400" />
                  <span>Kantor Pemasaran BSD (Tangerang):</span>
                </div>
                <p className="text-slate-400">{companyInfo.bsdAddress}</p>
                <p className="text-slate-400">Tel: {companyInfo.bsdTel}</p>
                <p className="text-teal-400 font-bold">HP/WA: {companyInfo.bsdWa}</p>
              </div>

              <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>Pabrik & Kantor Jepara (Jawa Tengah):</span>
                </div>
                <p className="text-slate-400">{companyInfo.jeparaAddress}</p>
                <p className="text-slate-400">Tel: {companyInfo.jeparaTel}</p>
                <p className="text-cyan-400 font-bold">HP/WA: {companyInfo.jeparaWa}</p>
                <p className="text-slate-400">FAX: {companyInfo.jeparaFax}</p>
              </div>

              <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{companyInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>{companyInfo.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Langsung dengan Marketing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
