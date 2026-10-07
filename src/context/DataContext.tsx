import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  CompanyInfo, 
  CustomerInquiry, 
  Language, 
  NewsArticle, 
  Product, 
  ProjectReference 
} from '../types';
import { 
  INITIAL_COMPANY_INFO, 
  INITIAL_INQUIRIES, 
  INITIAL_NEWS, 
  INITIAL_PRODUCTS, 
  INITIAL_PROJECTS 
} from '../data/initialData';

interface DataContextType {
  // Navigation & Language
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;

  // Products
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (originalCode: string, product: Product) => void;
  deleteProduct: (code: string) => void;
  getProductByCode: (code: string) => Product | undefined;

  // Projects
  projects: ProjectReference[];
  addProject: (project: ProjectReference) => void;
  updateProject: (id: string, project: ProjectReference) => void;
  deleteProject: (id: string) => void;

  // News & Articles
  newsList: NewsArticle[];
  addNews: (news: NewsArticle) => void;
  updateNews: (id: string, news: NewsArticle) => void;
  deleteNews: (id: string) => void;

  // Inquiries / Leads (from Customer)
  inquiries: CustomerInquiry[];
  submitInquiry: (inquiry: Omit<CustomerInquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateInquiryStatus: (id: string, status: CustomerInquiry['status'], notes?: string) => void;
  deleteInquiry: (id: string) => void;

  // Company Profile Info
  companyInfo: CompanyInfo;
  updateCompanyInfo: (info: CompanyInfo) => void;

  // Admin Auth
  isAdminLoggedIn: boolean;
  adminEmail: string;
  loginAdmin: (email: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Modals & Navigation triggers
  activeProductModal: Product | null;
  setActiveProductModal: (p: Product | null) => void;
  activeNewsModal: NewsArticle | null;
  setActiveNewsModal: (n: NewsArticle | null) => void;
  activeDocModal: Product | null;
  setActiveDocModal: (p: Product | null) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isAdminAuthModalOpen: boolean;
  setIsAdminAuthModalOpen: (open: boolean) => void;

  // System Utility
  resetToDefault: () => void;
  exportDatabaseJSON: () => string;
  importDatabaseJSON: (jsonStr: string) => boolean;
  getWhatsAppUrl: (contextCodeOrMsg?: string) => string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'komopoxy_products_v3',
  PROJECTS: 'komopoxy_projects_v3',
  NEWS: 'komopoxy_news_v3',
  INQUIRIES: 'komopoxy_inquiries_v3',
  COMPANY: 'komopoxy_company_v3',
  AUTH: 'komopoxy_admin_auth_v3',
  LANG: 'komopoxy_lang_v3'
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLangState] = useState<Language>(() => {
    return (localStorage.getItem(STORAGE_KEYS.LANG) as Language) || 'INA';
  });
  const [activeTab, setActiveTab] = useState<string>('HOME');

  // Products state
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Projects state
  const [projects, setProjects] = useState<ProjectReference[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PROJECTS;
  });

  // News state
  const [newsList, setNewsList] = useState<NewsArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_NEWS;
  });

  // Inquiries state
  const [inquiries, setInquiries] = useState<CustomerInquiry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_INQUIRIES as CustomerInquiry[];
  });

  // Company info state
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPANY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_COMPANY_INFO;
  });

  // Admin Auth state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  });
  const [adminEmail, setAdminEmail] = useState<string>(() => {
    return localStorage.getItem('komopoxy_admin_email') || 'marketing@kccichem.com';
  });

  // Modals state
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [activeNewsModal, setActiveNewsModal] = useState<NewsArticle | null>(null);
  const [activeDocModal, setActiveDocModal] = useState<Product | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState<boolean>(false);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(newsList));
  }, [newsList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(companyInfo));
  }, [companyInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANG, currentLang);
  }, [currentLang]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTH, isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  const setLanguage = (lang: Language) => {
    setCurrentLangState(lang);
  };

  // Products CRUD
  const addProduct = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
  };

  const updateProduct = (originalCode: string, product: Product) => {
    setProducts((prev) =>
      prev.map((item) => (item.code === originalCode ? product : item))
    );
  };

  const deleteProduct = (code: string) => {
    setProducts((prev) => prev.filter((item) => item.code !== code));
  };

  const getProductByCode = (code: string) => {
    return products.find((p) => p.code.toLowerCase() === code.toLowerCase());
  };

  // Projects CRUD
  const addProject = (project: ProjectReference) => {
    setProjects((prev) => [project, ...prev]);
  };

  const updateProject = (id: string, project: ProjectReference) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === id ? project : item))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((item) => item.id !== id));
  };

  // News CRUD
  const addNews = (news: NewsArticle) => {
    setNewsList((prev) => [news, ...prev]);
  };

  const updateNews = (id: string, news: NewsArticle) => {
    setNewsList((prev) =>
      prev.map((item) => (item.id === id ? news : item))
    );
  };

  const deleteNews = (id: string) => {
    setNewsList((prev) => prev.filter((item) => item.id !== id));
  };

  // Inquiries Handlers
  const submitInquiry = (inquiryData: Omit<CustomerInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInquiry: CustomerInquiry = {
      ...inquiryData,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Baru'
    };
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: CustomerInquiry['status'], notes?: string) => {
    setInquiries((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status, notes: notes !== undefined ? notes : item.notes } : item
      )
    );
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
  };

  // Company info
  const updateCompanyInfo = (info: CompanyInfo) => {
    setCompanyInfo(info);
  };

  // Admin Auth
  const loginAdmin = (email: string, pass: string): boolean => {
    if (pass === 'admin123' || pass === 'admin' || pass === 'kcci') {
      setIsAdminLoggedIn(true);
      const chosenEmail = email.trim() || 'marketing@kccichem.com';
      setAdminEmail(chosenEmail);
      localStorage.setItem('komopoxy_admin_email', chosenEmail);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  // Reset to seed data
  const resetToDefault = () => {
    setProducts(INITIAL_PRODUCTS);
    setProjects(INITIAL_PROJECTS);
    setNewsList(INITIAL_NEWS);
    setInquiries(INITIAL_INQUIRIES as CustomerInquiry[]);
    setCompanyInfo(INITIAL_COMPANY_INFO);
  };

  // Backup & Import
  const exportDatabaseJSON = () => {
    const backupObj = {
      version: '3.0',
      exportedAt: new Date().toISOString(),
      companyInfo,
      products,
      projects,
      newsList,
      inquiries
    };
    return JSON.stringify(backupObj, null, 2);
  };

  const importDatabaseJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.products && Array.isArray(parsed.products)) {
        setProducts(parsed.products);
      }
      if (parsed.projects && Array.isArray(parsed.projects)) {
        setProjects(parsed.projects);
      }
      if (parsed.newsList && Array.isArray(parsed.newsList)) {
        setNewsList(parsed.newsList);
      }
      if (parsed.inquiries && Array.isArray(parsed.inquiries)) {
        setInquiries(parsed.inquiries);
      }
      if (parsed.companyInfo && typeof parsed.companyInfo === 'object') {
        setCompanyInfo(parsed.companyInfo);
      }
      return true;
    } catch (e) {
      console.error('Import failed:', e);
      return false;
    }
  };

  // Dynamic WhatsApp URL helper
  const getWhatsAppUrl = (contextCodeOrMsg?: string) => {
    const cleanPhone = companyInfo.bsdWa.replace(/[^0-9]/g, '') || '6285290807577';
    let text = `Halo KOMOPOXY (PT. KCCI CHEMTECH INDONESIA), saya ingin berkonsultasi mengenai produk dan solusi kimia konstruksi.`;
    if (contextCodeOrMsg) {
      if (contextCodeOrMsg.includes(' ')) {
        text = contextCodeOrMsg;
      } else {
        text = `Halo KOMOPOXY, saya tertarik untuk meminta penawaran harga & spesifikasi teknis untuk produk: ${contextCodeOrMsg}`;
      }
    }
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <DataContext.Provider
      value={{
        currentLang,
        setLanguage,
        activeTab,
        setActiveTab,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductByCode,
        projects,
        addProject,
        updateProject,
        deleteProject,
        newsList,
        addNews,
        updateNews,
        deleteNews,
        inquiries,
        submitInquiry,
        updateInquiryStatus,
        deleteInquiry,
        companyInfo,
        updateCompanyInfo,
        isAdminLoggedIn,
        adminEmail,
        loginAdmin,
        logoutAdmin,
        activeProductModal,
        setActiveProductModal,
        activeNewsModal,
        setActiveNewsModal,
        activeDocModal,
        setActiveDocModal,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isAdminAuthModalOpen,
        setIsAdminAuthModalOpen,
        resetToDefault,
        exportDatabaseJSON,
        importDatabaseJSON,
        getWhatsAppUrl
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
