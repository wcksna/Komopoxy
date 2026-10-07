import React, { useState } from 'react';
import { 
  AlertCircle, 
  ArrowUpDown, 
  Building, 
  Check, 
  Copy, 
  Download, 
  Edit, 
  FileDown, 
  FileText, 
  Inbox, 
  KeyRound, 
  Layers, 
  LogOut, 
  MessageSquare, 
  Package, 
  Phone, 
  Plus, 
  RefreshCw, 
  Save, 
  Search, 
  Settings, 
  ShieldCheck, 
  Trash2, 
  Upload, 
  Users 
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { ApplicationType, CustomerInquiry, NewsArticle, Product, ProductCategory, ProjectReference } from '../../types';

export const AdminDashboard: React.FC = () => {
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    projects,
    addProject,
    updateProject,
    deleteProject,
    newsList,
    addNews,
    updateNews,
    deleteNews,
    inquiries,
    updateInquiryStatus,
    deleteInquiry,
    companyInfo,
    updateCompanyInfo,
    adminEmail,
    logoutAdmin,
    resetToDefault,
    exportDatabaseJSON,
    importDatabaseJSON,
    setActiveProductModal,
    setActiveTab
  } = useData();

  const [activeAdminTab, setActiveAdminTab] = useState<
    'PRODUCTS' | 'INQUIRIES' | 'PROJECTS' | 'NEWS' | 'COMPANY' | 'BACKUP'
  >('PRODUCTS');

  // Products CRUD State
  const [productSearch, setProductSearch] = useState('');
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProductOriginalCode, setEditingProductOriginalCode] = useState<string | null>(null);
  const [productForm, setProductForm] = useState<Product>({
    code: '',
    name: '',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '',
    descKor: '',
    descEng: '',
    shortDesc: { INA: '', KOR: '', ENG: '' },
    features: ['High durability', 'Standard quality'],
    image: '',
    featured: false
  });
  const [featureInput, setFeatureInput] = useState('');

  // Projects CRUD State
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<ProjectReference>({
    id: '',
    title: '',
    location: '',
    category: '',
    desc: '',
    date: 'Oktober 2026',
    image: '',
    areaM2: ''
  });

  // News CRUD State
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState<NewsArticle>({
    id: '',
    title: '',
    category: 'Panduan Rekayasa',
    date: '15 Oktober 2026',
    author: 'Tim Teknis KOMOPOXY',
    content: '',
    image: ''
  });

  // Inquiries Filter State
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState<string>('ALL');
  const [inquirySearch, setInquirySearch] = useState('');

  // Company Info Form State
  const [companyForm, setCompanyForm] = useState(companyInfo);
  const [companySaveSuccess, setCompanySaveSuccess] = useState(false);

  // Backup Import state
  const [jsonImportInput, setJsonImportInput] = useState('');

  // Handlers for Products
  const handleOpenAddProduct = () => {
    setEditingProductOriginalCode(null);
    setProductForm({
      code: '',
      name: '',
      category: 'KOMOFLOOR',
      appType: 'Flooring',
      packaging: '20 kg/Set',
      descKor: '',
      descEng: '',
      shortDesc: { INA: '', KOR: '', ENG: '' },
      features: ['High durability', 'Chemical resistant'],
      image: '',
      featured: false
    });
    setFeatureInput('High durability, Chemical resistant');
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (p: Product) => {
    setEditingProductOriginalCode(p.code);
    setProductForm({ ...p });
    setFeatureInput(p.features.join(', '));
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const codeClean = productForm.code.trim().toUpperCase();
    if (!codeClean || !productForm.name) {
      alert('Mohon isi kode dan nama produk.');
      return;
    }

    const feats = featureInput
      ? featureInput.split(',').map((f) => f.trim()).filter(Boolean)
      : ['High Quality'];

    const finalProduct: Product = {
      ...productForm,
      code: codeClean,
      features: feats,
      image: productForm.image || products[0]?.image || '',
      shortDesc: {
        INA: productForm.shortDesc.INA || `${productForm.name} - Formulasi kimia konstruksi resmi.`,
        KOR: productForm.shortDesc.KOR || `${productForm.descKor} / ${productForm.descEng}`,
        ENG: productForm.shortDesc.ENG || `${productForm.descEng} - High performance chemical formulation.`
      }
    };

    if (editingProductOriginalCode) {
      updateProduct(editingProductOriginalCode, finalProduct);
      alert(`Produk ${codeClean} berhasil diperbarui.`);
    } else {
      if (products.some((p) => p.code.toLowerCase() === codeClean.toLowerCase())) {
        alert(`Kode produk ${codeClean} sudah ada. Gunakan kode lain.`);
        return;
      }
      addProduct(finalProduct);
      alert(`Produk ${codeClean} berhasil ditambahkan ke katalog.`);
    }

    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (code: string) => {
    if (confirm(`Yakin ingin menghapus produk [${code}] dari katalog?`)) {
      deleteProduct(code);
    }
  };

  // Handlers for Projects
  const handleOpenAddProject = () => {
    setEditingProjectId(null);
    setProjectForm({
      id: `proj-${Date.now()}`,
      title: '',
      location: '',
      category: 'KOMOFloor EL-2000',
      desc: '',
      date: 'Oktober 2026',
      image: products[0]?.image || '',
      areaM2: ''
    });
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (proj: ProjectReference) => {
    setEditingProjectId(proj.id);
    setProjectForm({ ...proj });
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.location) {
      alert('Mohon lengkapi judul dan lokasi proyek.');
      return;
    }

    if (editingProjectId) {
      updateProject(editingProjectId, projectForm);
      alert('Proyek berhasil diperbarui.');
    } else {
      addProject(projectForm);
      alert('Proyek baru berhasil ditambahkan.');
    }
    setIsProjectModalOpen(false);
  };

  // Handlers for News
  const handleOpenAddNews = () => {
    setEditingNewsId(null);
    setNewsForm({
      id: `news-${Date.now()}`,
      title: '',
      category: 'Panduan Rekayasa',
      date: 'Oktober 2026',
      author: 'Tim Teknis KOMOPOXY',
      content: '',
      image: products[0]?.image || ''
    });
    setIsNewsModalOpen(true);
  };

  const handleOpenEditNews = (n: NewsArticle) => {
    setEditingNewsId(n.id);
    setNewsForm({ ...n });
    setIsNewsModalOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.content) {
      alert('Mohon lengkapi judul dan isi artikel.');
      return;
    }

    if (editingNewsId) {
      updateNews(editingNewsId, newsForm);
      alert('Artikel berita berhasil diperbarui.');
    } else {
      addNews(newsForm);
      alert('Artikel berita baru berhasil diterbitkan.');
    }
    setIsNewsModalOpen(false);
  };

  // Handlers for Company Info
  const handleSaveCompanyInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyInfo(companyForm);
    setCompanySaveSuccess(true);
    setTimeout(() => setCompanySaveSuccess(false), 3000);
  };

  // Handlers for Backup & Restore
  const handleExportJSON = () => {
    const jsonStr = exportDatabaseJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `komopoxy_backup_${new Date().toISOString().substring(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = () => {
    if (!jsonImportInput.trim()) {
      alert('Tempelkan string JSON cadangan terlebih dahulu.');
      return;
    }
    const ok = importDatabaseJSON(jsonImportInput);
    if (ok) {
      alert('Database berhasil dipulihkan dari data cadangan JSON!');
      setJsonImportInput('');
    } else {
      alert('Format JSON tidak valid atau struktur data tidak cocok.');
    }
  };

  // Filtered Lists for Admin
  const filteredAdminProducts = products.filter((p) => {
    const q = productSearch.toLowerCase();
    return (
      !q ||
      p.code.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const filteredInquiries = inquiries.filter((inq) => {
    const matchStatus = inquiryStatusFilter === 'ALL' || inq.status === inquiryStatusFilter;
    const q = inquirySearch.toLowerCase();
    const matchSearch =
      !q ||
      inq.customerName.toLowerCase().includes(q) ||
      (inq.companyName && inq.companyName.toLowerCase().includes(q)) ||
      inq.phone.includes(q) ||
      inq.message.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const pendingInquiriesCount = inquiries.filter((i) => i.status === 'Baru').length;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-8">
      {/* Admin Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#101926] to-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
        <div className="space-y-1.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              SISTEM MANAJEMEN ADMIN TERINTEGRASI
            </span>
            <span className="text-xs text-slate-400">
              Admin: <strong className="text-white">{adminEmail}</strong>
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Dashboard Kontrol & Informasi Pelanggan
          </h1>
          <p className="text-xs text-slate-400">
            Perbarui data produk katalog, tanggapi permintaan customer, kelola referensi proyek, artikel panduan, dan data kontak kantor resmi secara real-time.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 relative z-10">
          <button
            onClick={() => setActiveTab('HOME')}
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold px-4 py-3 rounded-xl border border-slate-700 transition"
          >
            Lihat Tampilan Customer ➔
          </button>
          <button
            onClick={logoutAdmin}
            className="bg-red-950/70 hover:bg-red-900 text-red-200 border border-red-700/60 text-xs font-bold px-4 py-3 rounded-xl transition flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar Admin</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 flex flex-wrap gap-2 shadow-lg">
        <button
          onClick={() => setActiveAdminTab('PRODUCTS')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'PRODUCTS'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Produk ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('INQUIRIES')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'INQUIRIES'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Inbox className="w-4 h-4" />
          <span>Inquiry Customer ({inquiries.length})</span>
          {pendingInquiriesCount > 0 && (
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-black">
              {pendingInquiriesCount} Baru
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveAdminTab('PROJECTS')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'PROJECTS'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Proyek Lapangan ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('NEWS')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'NEWS'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Berita & Panduan ({newsList.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('COMPANY')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'COMPANY'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Info Perusahaan & Kontak</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('BACKUP')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeAdminTab === 'BACKUP'
              ? 'bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md font-black'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Cadangan & Reset Data</span>
        </button>
      </div>

      {/* TAB 1: PRODUCTS MANAGER */}
      {activeAdminTab === 'PRODUCTS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                placeholder="Cari produk kode/nama..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              onClick={handleOpenAddProduct}
              className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-2 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Formulasi Produk Baru</span>
            </button>
          </div>

          {/* Product Table */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800">
                  <tr>
                    <th className="p-4">Kode</th>
                    <th className="p-4">Nama Produk</th>
                    <th className="p-4">Kategori Lini</th>
                    <th className="p-4">Kemasan</th>
                    <th className="p-4">Deskripsi Korea / Inggris</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredAdminProducts.map((p) => (
                    <tr key={p.code} className="hover:bg-slate-800/40 transition">
                      <td className="p-4 font-black text-teal-400">
                        {p.code}
                      </td>
                      <td className="p-4 font-bold text-white">
                        {p.name}
                      </td>
                      <td className="p-4">
                        <span className="bg-teal-500/10 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded text-[10px] font-semibold">
                          {p.category}
                        </span>
                      </td>
                      <td className="p-4 text-slate-300 font-medium">
                        {p.packaging}
                      </td>
                      <td className="p-4 text-slate-400 max-w-xs truncate">
                        {p.descKor} / {p.descEng}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleOpenEditProduct(p)}
                            className="bg-slate-950 hover:bg-slate-800 text-slate-200 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-slate-800 transition flex items-center gap-1"
                          >
                            <Edit className="w-3 h-3 text-sky-400" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p.code)}
                            className="bg-red-950/70 hover:bg-red-900 text-red-300 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-red-800/50 transition flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INQUIRIES & LEADS MANAGER */}
      {activeAdminTab === 'INQUIRIES' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-400">Filter Status:</span>
              {['ALL', 'Baru', 'Dihubungi', 'Penawaran', 'Selesai'].map((status) => (
                <button
                  key={status}
                  onClick={() => setInquiryStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    inquiryStatusFilter === status
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {status === 'ALL' ? 'Semua' : status}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={inquirySearch}
                onChange={(e) => setInquirySearch(e.target.value)}
                placeholder="Cari nama, PT, no WA..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredInquiries.length === 0 ? (
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-500 text-xs">
                Tidak ada data pesan inquiry customer.
              </div>
            ) : (
              filteredInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black text-white text-sm">
                          {inq.customerName}
                        </h4>
                        {inq.companyName && (
                          <span className="text-xs text-slate-400 font-medium">
                            • {inq.companyName}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Masuk pada: {inq.createdAt}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase border ${
                        inq.status === 'Baru'
                          ? 'bg-red-500/20 text-red-300 border-red-500/40'
                          : inq.status === 'Dihubungi'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : inq.status === 'Penawaran'
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      }`}>
                        {inq.status}
                      </span>

                      {/* Change Status Dropdown */}
                      <select
                        value={inq.status}
                        onChange={(e) =>
                          updateInquiryStatus(
                            inq.id,
                            e.target.value as CustomerInquiry['status']
                          )
                        }
                        className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300"
                      >
                        <option value="Baru">Status: Baru</option>
                        <option value="Dihubungi">Status: Dihubungi</option>
                        <option value="Penawaran">Status: Penawaran</option>
                        <option value="Selesai">Status: Selesai</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Nomor WhatsApp:</span>
                      <span className="font-bold text-teal-400">{inq.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Email:</span>
                      <span className="text-slate-300 font-medium">{inq.email || '-'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Jenis Pekerjaan:</span>
                      <span className="text-white font-medium">{inq.projectType}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Estimasi Luas / Volume:</span>
                      <span className="text-slate-300 font-medium">{inq.estimatedAreaM2 || '-'}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800 leading-relaxed">
                    <span className="text-slate-500 text-[10px] block font-bold uppercase mb-1">
                      Pesan Kebutuhan:
                    </span>
                    {inq.message}
                  </div>

                  {/* Actions for Inquiry */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Halo ${inq.customerName}, kami dari PT. KCCI CHEMTECH INDONESIA (KOMOPOXY) menindaklanjuti permintaan konsultasi/penawaran harga terkait ${inq.projectType}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Hubungi via WhatsApp</span>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm('Hapus pesan inquiry ini?')) {
                          deleteInquiry(inq.id);
                        }
                      }}
                      className="text-slate-500 hover:text-red-400 text-xs font-semibold"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: PROJECTS MANAGER */}
      {activeAdminTab === 'PROJECTS' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white">Kelola Proyek & Portofolio</h3>
              <p className="text-xs text-slate-400">Tambah dokumentasi proyek untuk ditampilkan di halaman referensi.</p>
            </div>
            <button
              onClick={handleOpenAddProject}
              className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Proyek Baru</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-3 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-2">
                  <div className="h-36 bg-slate-950 rounded-2xl overflow-hidden relative">
                    <img src={proj.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded">
                      {proj.category}
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-sm">{proj.title}</h4>
                  <p className="text-[11px] text-slate-400 font-medium">📍 {proj.location} • {proj.date}</p>
                  <p className="text-xs text-slate-300 line-clamp-2">{proj.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-end gap-2">
                  <button
                    onClick={() => handleOpenEditProject(proj)}
                    className="bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Hapus proyek ini?')) deleteProject(proj.id);
                    }}
                    className="bg-red-950/70 hover:bg-red-900 text-red-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-red-800/50"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: NEWS MANAGER */}
      {activeAdminTab === 'NEWS' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white">Kelola Artikel Teknis & Panduan</h3>
              <p className="text-xs text-slate-400">Publikasikan artikel panduan penggunaan material untuk para kontraktor.</p>
            </div>
            <button
              onClick={handleOpenAddNews}
              className="bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Tulis Artikel Baru</span>
            </button>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden divide-y divide-slate-800 shadow-2xl">
            {newsList.map((art) => (
              <div key={art.id} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-800/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                      {art.category}
                    </span>
                    <span className="text-slate-500 text-xs">• {art.date}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{art.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{art.content}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleOpenEditNews(art)}
                    className="bg-slate-950 hover:bg-slate-800 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Hapus artikel ini?')) deleteNews(art.id);
                    }}
                    className="bg-red-950/70 hover:bg-red-900 text-red-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-red-800/50"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: COMPANY INFO EDITOR */}
      {activeAdminTab === 'COMPANY' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-base font-black text-white">
              Pengaturan Informasi Legalitas, Alamat & Kontak Resmi
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Perubahan pada form ini akan langsung diterapkan secara live ke seluruh header, footer, dan form pemesanan customer.
            </p>
          </div>

          {companySaveSuccess && (
            <div className="bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 text-xs font-bold p-4 rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Data perusahaan & kontak berhasil diperbarui di seluruh website!</span>
            </div>
          )}

          <form onSubmit={handleSaveCompanyInfo} className="space-y-5 text-xs">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">Nama Perusahaan Resmi</label>
                <input
                  type="text"
                  value={companyForm.companyName}
                  onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">Pimpinan / CEO</label>
                <input
                  type="text"
                  value={companyForm.ceo}
                  onChange={(e) => setCompanyForm({ ...companyForm, ceo: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">Nomor Induk Berusaha (NIB)</label>
                <input
                  type="text"
                  value={companyForm.nib}
                  onChange={(e) => setCompanyForm({ ...companyForm, nib: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">Email Resmi Pemasaran</label>
                <input
                  type="email"
                  value={companyForm.email}
                  onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-bold text-slate-300">Jam Operasional Kantor</label>
                <input
                  type="text"
                  value={companyForm.operatingHours}
                  onChange={(e) => setCompanyForm({ ...companyForm, operatingHours: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white"
                />
              </div>
            </div>

            {/* BSD Office */}
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3">
              <span className="font-bold text-teal-400 uppercase tracking-wider block">
                🏢 Kantor Pemasaran BSD (Tangerang):
              </span>
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-400">Alamat BSD</label>
                <input
                  type="text"
                  value={companyForm.bsdAddress}
                  onChange={(e) => setCompanyForm({ ...companyForm, bsdAddress: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-400">Telepon BSD</label>
                  <input
                    type="text"
                    value={companyForm.bsdTel}
                    onChange={(e) => setCompanyForm({ ...companyForm, bsdTel: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-400">WhatsApp BSD (Tujuan Inquiry Utama)</label>
                  <input
                    type="text"
                    value={companyForm.bsdWa}
                    onChange={(e) => setCompanyForm({ ...companyForm, bsdWa: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Jepara Factory */}
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-3">
              <span className="font-bold text-cyan-400 uppercase tracking-wider block">
                🏭 Pabrik & Kantor Jepara (Jawa Tengah):
              </span>
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-400">Alamat Pabrik</label>
                <input
                  type="text"
                  value={companyForm.jeparaAddress}
                  onChange={(e) => setCompanyForm({ ...companyForm, jeparaAddress: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                />
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-400">Telepon Jepara</label>
                  <input
                    type="text"
                    value={companyForm.jeparaTel}
                    onChange={(e) => setCompanyForm({ ...companyForm, jeparaTel: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-400">WhatsApp Jepara</label>
                  <input
                    type="text"
                    value={companyForm.jeparaWa}
                    onChange={(e) => setCompanyForm({ ...companyForm, jeparaWa: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-400">FAX</label>
                  <input
                    type="text"
                    value={companyForm.jeparaFax}
                    onChange={(e) => setCompanyForm({ ...companyForm, jeparaFax: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-black text-xs px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan Profil Perusahaan</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 6: BACKUP & RESTORE */}
      {activeAdminTab === 'BACKUP' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-base font-black text-white">
              Cadangan Data (Backup), Pemulihan (Restore) & Standar Pabrik
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Simpan seluruh database produk, inquiry, proyek, dan artikel dalam berkas JSON mandiri untuk dipindahkan atau dicadangkan sewaktu-waktu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Export Section */}
            <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-xs uppercase">
                <Download className="w-4 h-4" />
                <span>1. Unduh Cadangan Database</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ekspor seluruh data katalog ({products.length} produk), pesan pelanggan ({inquiries.length} pesan), dan profil ke file JSON cadangan.
              </p>
              <button
                onClick={handleExportJSON}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 shadow"
              >
                <FileDown className="w-4 h-4" />
                <span>Ekspor File JSON Backup</span>
              </button>
            </div>

            {/* Reset Section */}
            <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                <RefreshCw className="w-4 h-4" />
                <span>2. Reset ke Standar Pabrik Awal</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mengembalikan seluruh 31 produk awal dan data kontak PT. KCCI CHEMTECH INDONESIA ke pengaturan asli jika terjadi kesalahan data.
              </p>
              <button
                onClick={() => {
                  if (confirm('Yakin ingin mereset seluruh database ke standar pabrik?')) {
                    resetToDefault();
                    alert('Data telah dikembalikan ke standar awal pabrik.');
                  }
                }}
                className="w-full bg-amber-950/70 hover:bg-amber-900 text-amber-300 border border-amber-700/60 font-bold text-xs py-3 rounded-xl transition"
              >
                Kembalikan ke Standar Pabrik
              </button>
            </div>
          </div>

          {/* Import Section */}
          <div className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase">
              <Upload className="w-4 h-4" />
              <span>3. Pulihkan dari Kode JSON Cadangan</span>
            </div>
            <textarea
              rows={4}
              value={jsonImportInput}
              onChange={(e) => setJsonImportInput(e.target.value)}
              placeholder="Tempelkan teks JSON cadangan di sini..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-mono"
            />
            <button
              onClick={handleImportJSON}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl border border-slate-700 transition"
            >
              Impor & Pulihkan Data
            </button>
          </div>
        </div>
      )}

      {/* PRODUCT FORM MODAL */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl my-8 overflow-hidden text-white">
            <div className="p-6 bg-slate-950 border-b border-slate-800 flex justify-between items-center">
              <h3 className="font-black text-base flex items-center gap-2">
                <Package className="w-4 h-4 text-teal-400" />
                <span>
                  {editingProductOriginalCode ? `Edit Formulasi: ${editingProductOriginalCode}` : 'Tambah Formulasi Baru'}
                </span>
              </h3>
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 md:p-8 space-y-4 text-xs max-h-[80vh] overflow-y-auto">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Kode Formulasi *</label>
                  <input
                    type="text"
                    required
                    value={productForm.code}
                    onChange={(e) => setProductForm({ ...productForm, code: e.target.value.toUpperCase() })}
                    placeholder="Contoh: EL-2000"
                    disabled={!!editingProductOriginalCode}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 font-bold uppercase text-white disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Nama Produk *</label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="Contoh: KOMOFloor EL-2000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Kategori Lini *</label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as ProductCategory })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  >
                    <option value="KOMOFLOOR">KOMOFloor</option>
                    <option value="KOMOPROOF">KOMOProof</option>
                    <option value="KOMOGROUT">KOMOGrout / Injeksi</option>
                    <option value="KOMOBOND">KOMOBond</option>
                    <option value="KOMOWRAP">KOMOWrap / CFRP</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Kemasan (Packaging) *</label>
                  <input
                    type="text"
                    required
                    value={productForm.packaging}
                    onChange={(e) => setProductForm({ ...productForm, packaging: e.target.value })}
                    placeholder="Contoh: 20 kg/Set, 50 m²"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Jenis Aplikasi</label>
                  <select
                    value={productForm.appType}
                    onChange={(e) => setProductForm({ ...productForm, appType: e.target.value as ApplicationType })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  >
                    <option value="Flooring">Flooring</option>
                    <option value="Waterproofing">Waterproofing</option>
                    <option value="Concrete Injection">Concrete Injection</option>
                    <option value="Adhesive">Adhesive</option>
                    <option value="Structural Strengthening">Structural Strengthening</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Deskripsi Korea</label>
                  <input
                    type="text"
                    value={productForm.descKor}
                    onChange={(e) => setProductForm({ ...productForm, descKor: e.target.value })}
                    placeholder="Contoh: 에폭시 라이닝"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Deskripsi Inggris</label>
                  <input
                    type="text"
                    value={productForm.descEng}
                    onChange={(e) => setProductForm({ ...productForm, descEng: e.target.value })}
                    placeholder="Contoh: EPOXY SELF LEVELING"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Penjelasan Singkat Bahasa Indonesia</label>
                <textarea
                  rows={2}
                  value={productForm.shortDesc.INA}
                  onChange={(e) => setProductForm({
                    ...productForm,
                    shortDesc: { ...productForm.shortDesc, INA: e.target.value }
                  })}
                  placeholder="Deskripsi singkat fungsi dan keunggulan formulasi..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-300">Fitur Utama (Pisahkan dengan tanda koma)</label>
                <input
                  type="text"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  placeholder="Kuat tekan tinggi, Anti-slip, Tahan kimia"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-950 text-slate-300 rounded-xl border border-slate-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-bold rounded-xl shadow"
                >
                  Simpan Formulasi Produk
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT FORM MODAL */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-4 text-white">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm">
                {editingProjectId ? 'Edit Proyek' : 'Tambah Proyek Referensi'}
              </h3>
              <button onClick={() => setIsProjectModalOpen(false)} className="text-slate-400">✕</button>
            </div>
            <form onSubmit={handleSaveProject} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Judul Proyek *</label>
                <input
                  type="text"
                  required
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="Contoh: Lantai Cleanroom Pabrik Farmasi"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Lokasi *</label>
                  <input
                    type="text"
                    required
                    value={projectForm.location}
                    onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })}
                    placeholder="Contoh: Cikarang, Jawa Barat"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Material / Produk</label>
                  <input
                    type="text"
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    placeholder="Contoh: KOMOFloor EL-2000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Deskripsi</label>
                <textarea
                  rows={3}
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-4 py-2 bg-slate-950 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 font-bold rounded-xl text-white"
                >
                  Simpan Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* NEWS FORM MODAL */}
      {isNewsModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 space-y-4 text-white">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm">
                {editingNewsId ? 'Edit Artikel' : 'Tulis Artikel Baru'}
              </h3>
              <button onClick={() => setIsNewsModalOpen(false)} className="text-slate-400">✕</button>
            </div>
            <form onSubmit={handleSaveNews} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Judul Artikel *</label>
                <input
                  type="text"
                  required
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="Contoh: Panduan Injeksi Beton..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Kategori</label>
                  <input
                    type="text"
                    value={newsForm.category}
                    onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-semibold">Penulis</label>
                  <input
                    type="text"
                    value={newsForm.author}
                    onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 mb-1 font-semibold">Konten Artikel *</label>
                <textarea
                  rows={6}
                  required
                  value={newsForm.content}
                  onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewsModalOpen(false)}
                  className="px-4 py-2 bg-slate-950 rounded-xl"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-teal-600 font-bold rounded-xl text-white"
                >
                  Publikasikan Artikel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
