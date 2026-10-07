export type Language = 'INA' | 'KOR' | 'ENG';

export type ProductCategory = 
  | 'KOMOFLOOR' 
  | 'KOMOPROOF' 
  | 'KOMOGROUT' 
  | 'KOMOBOND' 
  | 'KOMOWRAP';

export type ApplicationType = 
  | 'Flooring' 
  | 'Waterproofing' 
  | 'Concrete Injection' 
  | 'Adhesive' 
  | 'Structural Strengthening';

export interface Product {
  code: string;
  name: string;
  category: ProductCategory;
  appType: ApplicationType;
  packaging: string;
  descKor: string;
  descEng: string;
  shortDesc: {
    INA: string;
    KOR: string;
    ENG: string;
  };
  features: string[];
  image: string;
  featured?: boolean;
}

export interface ProjectReference {
  id: string;
  title: string;
  location: string;
  category: string;
  desc: string;
  date: string;
  image: string;
  areaM2?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  content: string;
  image: string;
  tags?: string[];
}

export interface CustomerInquiry {
  id: string;
  customerName: string;
  companyName?: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedAreaM2?: string;
  productInterest?: string;
  message: string;
  createdAt: string;
  status: 'Baru' | 'Dihubungi' | 'Penawaran' | 'Selesai';
  notes?: string;
}

export interface CompanyInfo {
  companyName: string;
  brandName: string;
  ceo: string;
  nib: string;
  taglineINA: string;
  taglineKOR: string;
  taglineENG: string;
  email: string;
  bsdAddress: string;
  bsdTel: string;
  bsdWa: string;
  jeparaAddress: string;
  jeparaTel: string;
  jeparaWa: string;
  jeparaFax: string;
  operatingHours: string;
}
