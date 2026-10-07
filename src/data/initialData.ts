import { CompanyInfo, NewsArticle, Product, ProjectReference } from '../types';

export const DEFAULT_PRODUCT_IMAGE = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="100%" height="100%" fill="%23131b26"/><rect x="250" y="120" width="300" height="30" rx="6" fill="%231e293b"/><polygon points="260,150 540,150 510,480 290,480" fill="%231e3a5f" stroke="%2338bdf8" stroke-width="4"/><rect x="280" y="240" width="240" height="150" rx="10" fill="%230f172a" opacity="0.95" stroke="%230d8373" stroke-width="2"/><text x="400" y="315" font-family="system-ui,sans-serif" font-size="28" font-weight="900" fill="%23ffffff" text-anchor="middle">KOMOPOXY</text><text x="400" y="348" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="%232dd4bf" text-anchor="middle">KCCI CHEMTECH INDONESIA</text><path d="M 330 120 Q 400 40 470 120" fill="none" stroke="%230d8373" stroke-width="8" stroke-linecap="round"/></svg>';

export const INITIAL_COMPANY_INFO: CompanyInfo = {
  companyName: 'PT. KCCI CHEMTECH INDONESIA',
  brandName: 'KOMOPOXY',
  ceo: 'Jin Yong Choi',
  nib: '8120013101767',
  taglineINA: 'Solusi Kimia Konstruksi Berkinerja Tinggi',
  taglineKOR: '고성능 건설 화학 종합 솔루션',
  taglineENG: 'High-Performance Construction Chemical Solutions',
  email: 'marketing@kccichem.com',
  bsdAddress: 'Duta Indah Iconic Blok C55, Panunggangan Utara, Kec. Pinang, Kota Tangerang',
  bsdTel: '+62-21-5569-5612',
  bsdWa: '+62-852-9080-7577',
  jeparaAddress: 'Pulodarat RT 01 RW 01, Pecangaan, Jepara, Jawa Tengah 59462',
  jeparaTel: '+62-291-751-2706',
  jeparaWa: '+62-812-2980-3932',
  jeparaFax: '+62-291-751-2730',
  operatingHours: 'Senin - Jumat: 08:00 - 17:00 WIB | Sabtu: 08:00 - 13:00 WIB'
};

export const INITIAL_PRODUCTS: Product[] = [
  // 1. KOMOWrap Series (4 Items)
  {
    code: 'N200',
    name: 'KOMOWrap N200',
    category: 'KOMOWRAP',
    appType: 'Structural Strengthening',
    packaging: '50 m²',
    descKor: '탄소섬유 200g',
    descEng: 'CARBON FIBER 200G',
    shortDesc: {
      INA: 'Serat Karbon (Carbon Fiber) 200g/m² untuk perkuatan struktur beton, balok, pelat, dan kolom dengan kekuatan tarik luar biasa.',
      KOR: '탄소섬유 200g / CARBON FIBER 200G - 롤 규격 50 m²',
      ENG: 'Unidirectional carbon fiber sheet 200g/m² for structural strengthening of concrete beams, slabs, and columns.'
    },
    features: ['High tensile strength (> 3400 MPa)', 'Lightweight composite wrap', 'Corrosion & fatigue resistant', 'Ideal for flexural and shear strengthening'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'N300',
    name: 'KOMOWrap N300',
    category: 'KOMOWRAP',
    appType: 'Structural Strengthening',
    packaging: '50 m²',
    descKor: '탄소섬유 300g',
    descEng: 'CARBON FIBER 300G',
    shortDesc: {
      INA: 'Serat Karbon 300g/m² tipe heavy-duty untuk kapasitas beban tinggi, jembatan, dermaga, dan retrofitting tahan gempa.',
      KOR: '탄소섬유 300g / CARBON FIBER 300G - 롤 규격 50 m²',
      ENG: 'Heavy-duty 300g/m² carbon fiber sheet for elevated load upgrading, bridges, and seismic retrofitting.'
    },
    features: ['Superior modulus of elasticity', 'Extreme tensile capacity', 'Low structural added dead-load', 'Long service lifespan'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'CFP-100',
    name: 'KOMOWrap CFP-100',
    category: 'KOMOWRAP',
    appType: 'Structural Strengthening',
    packaging: '15 kg/Set',
    descKor: '탄소섬유 프라이머',
    descEng: 'CARBON FIBER PRIMER',
    shortDesc: {
      INA: 'Primer epoksi khusus substrat beton berpori sebelum pemasangan lembaran serat karbon KOMOWrap untuk ikatan rekat maksimal.',
      KOR: '탄소섬유 프라이머 / CARBON FIBER PRIMER - 포장 15 kg/Set',
      ENG: 'Specialized epoxy primer formulated for concrete substrates prior to carbon sheet wrapping.'
    },
    features: ['High substrate penetration', 'Strong inter-coat bond', 'Moisture sealing layer', 'Easy 2-component mixing'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'CFR-200',
    name: 'KOMOWrap CFR-200',
    category: 'KOMOWRAP',
    appType: 'Structural Strengthening',
    packaging: '15 kg/Set',
    descKor: '탄소섬유 함침레진',
    descEng: 'CARBON FIBER RESIN',
    shortDesc: {
      INA: 'Resin epoksi saturasi/impregnasi berperforma tinggi untuk merekatkan dan memadatkan serat karbon KOMOWrap ke beton.',
      KOR: '탄소섬유 함침레진 / CARBON FIBER RESIN - 포장 15 kg/Set',
      ENG: 'High performance epoxy saturating resin engineered for impregnating and bonding carbon fiber sheets.'
    },
    features: ['High adhesive resin matrix', 'Excellent fiber wetting action', 'Zero shrinkage curing', 'Extended pot-life for field application'],
    image: DEFAULT_PRODUCT_IMAGE
  },

  // 2. KOMOBond Series (3 Items)
  {
    code: 'SA-10',
    name: 'KOMOBond SA-10',
    category: 'KOMOBOND',
    appType: 'Adhesive',
    packaging: '10 kg/Set',
    descKor: '석재용 에폭시 접착제',
    descEng: 'STONE ADHESIVE EPOXY BOND',
    shortDesc: {
      INA: 'Perekat epoksi berbentuk pasta untuk batu alam, marmer, granit, dan cladding vertikal dengan daya rekat ekstra kuat anti-merosot.',
      KOR: '석재용 에폭시 접착제 / STONE ADHESIVE EPOXY BOND - 포장 10 kg/Set',
      ENG: 'Thixotropic epoxy paste adhesive for natural stone, marble, granite, and vertical façade bonding.'
    },
    features: ['Non-sag thixotropic formula', 'Ultra-high shear bond strength', 'Weather & water resistant', 'Suitable for heavy stone slabs without anchoring slips'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'TA-20',
    name: 'KOMOBond TA-20',
    category: 'KOMOBOND',
    appType: 'Adhesive',
    packaging: '10 kg/Set',
    descKor: '타일용 에폭시 접착제',
    descEng: 'TILE ADHESIVE EPOXY BOND',
    shortDesc: {
      INA: 'Perekat epoksi 2-komponen untuk ubin keramik, granit tile, dan porselen pada area basah, kolam renang, dan lingkungan kimia agresif.',
      KOR: '타일용 에폭시 접착제 / TILE ADHESIVE EPOXY BOND - 포장 10 kg/Set',
      ENG: 'Two-component epoxy tile adhesive designed for heavy duty ceramic and porcelain tiling in wet and chemical zones.'
    },
    features: ['100% waterproof and chemical resistant', 'High initial grab & bonding', 'Vibration resistance', 'No slump on walls'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'TA(1)-30',
    name: 'KOMOBond TA(1)-30',
    category: 'KOMOBOND',
    appType: 'Adhesive',
    packaging: '10 kg/Set',
    descKor: '1액형 아크릴 타일접착제',
    descEng: 'TILE ADHESIVE EPOXY BOND 1 COMPONENT',
    shortDesc: {
      INA: 'Perekat keramik dan porselen 1-komponen siap pakai berbasis pasta akrilik polimer modifikasi untuk dinding internal dan partisi gypsum.',
      KOR: '1액형 아크릴 타일접착제 / TILE ADHESIVE 1 COMPONENT - 포장 10 kg/Set',
      ENG: 'Ready-to-use 1-component modified acrylic adhesive paste for wall tiles and gypsum partition installations.'
    },
    features: ['Ready to use (Single component)', 'Easy trowel application', 'Flexibility for lightweight drywalls', 'Eco-friendly and low odor'],
    image: DEFAULT_PRODUCT_IMAGE
  },

  // 3. KOMOGrout / Injection Series (10 Items)
  {
    code: 'SDM-100',
    name: 'KOMOGrout SDM-100',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '10 kg/Set',
    descKor: '건식씰링제',
    descEng: 'DRY TYPE EPOXY SEALING BOND',
    shortDesc: {
      INA: 'Bahan penutup (sealing) epoksi pasta tipe kering untuk menutup permukaan retak beton dan memasang nipel injector sebelum injeksi.',
      KOR: '건식씰링제 / DRY TYPE EPOXY SEALING BOND - 포장 10 kg/Set',
      ENG: 'Dry-type epoxy sealing bond for crack surface capping and injector mounting prior to pressure injection.'
    },
    features: ['Thixotropic paste (no sag)', 'Fast strength development', 'High tensile and bond adhesion', 'Simple 1:1 mixing ratio'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'SWM-100',
    name: 'KOMOGrout SWM-100',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '10 kg/Set',
    descKor: '습식씰링제',
    descEng: 'WET TYPE EPOXY SEALING BOND',
    shortDesc: {
      INA: 'Bahan sealing epoksi khusus substrat beton lembap/basah untuk penyegelan retak air sebelum injeksi cairan grouting.',
      KOR: '습식씰링제 / WET TYPE EPOXY SEALING BOND - 포장 10 kg/Set',
      ENG: 'Wet-type epoxy sealing bond specially formulated for damp or moisture-bearing concrete surfaces.'
    },
    features: ['Bonds securely to damp concrete', 'Displaces surface moisture', 'High mechanical strength', 'Resistant to hydraulic pressure'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'SFC-100',
    name: 'KOMOGrout SFC-100',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '10 kg/Set',
    descKor: '속건형 씰링제',
    descEng: 'FAST CURING TYPE EPOXY SEALING BOND',
    shortDesc: {
      INA: 'Bahan sealing epoksi cepat kering (Fast Curing) untuk penanganan darurat kebocoran dan penyelesaian retak dalam waktu singkat.',
      KOR: '속건형 씰링제 / FAST CURING TYPE EPOXY SEALING BOND - 포장 10 kg/Set',
      ENG: 'Fast-curing epoxy sealing bond for rapid capping and urgent crack repairs under strict time limits.'
    },
    features: ['Ultra-fast cure (< 60 minutes)', 'Rapid pressure resistance', 'High rigidity', 'Minimizes downtime for emergency maintenance'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'IDM-200',
    name: 'KOMOGrout IDM-200',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '15 kg/Set',
    descKor: '건식주입제 (저점도 LV, 중점도 MV, 고점도 HV)',
    descEng: 'DRY TYPE EPOXY INJECTION',
    shortDesc: {
      INA: 'Cairan injeksi epoksi struktural tipe kering, tersedia viskositas Rendah (LV), Sedang (MV), dan Tinggi (HV) untuk penetrasi retak mikro hingga rongga lebar.',
      KOR: '건식주입제 (저점도(LV), 중점도(MV), 고점도(HV)) / DRY TYPE EPOXY INJECTION - 포장 15 kg/Set',
      ENG: 'Dry-type structural epoxy injection resin available in Low (LV), Medium (MV), and High (HV) viscosity for concrete crack restoration.'
    },
    features: ['Multiple viscosities (LV/MV/HV)', 'Penetrates hairline cracks < 0.2mm', 'Zero shrinkage during cure', 'Restores monolith structure'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'IWM-200',
    name: 'KOMOGrout IWM-200',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '15 kg/Set',
    descKor: '습식주입제',
    descEng: 'WET TYPE EPOXY INJECTION',
    shortDesc: {
      INA: 'Cairan injeksi epoksi khusus untuk retak beton dalam kondisi basah, lembap, atau terendam air tanpa kehilangan daya rekat.',
      KOR: '습식주입제 / WET TYPE EPOXY INJECTION - 포장 15 kg/Set',
      ENG: 'Wet-type epoxy injection resin engineered for water-bearing cracks and damp concrete repair.'
    },
    features: ['Cures reliably in wet cracks', 'High structural strength', 'Water displacement chemistry', 'Prevents re-cracking'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'UWBM-300',
    name: 'KOMOGrout UWBM-300',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: '15 kg/Set',
    descKor: '폴리우레탄 발포지수제',
    descEng: 'POLYURETHANE FOAM INJEKSI SISTEM',
    shortDesc: {
      INA: 'Cairan injeksi Polyurethane Foam hidrofobik yang bereaksi spontan dengan air dan mengembang hingga 30 kali untuk menghentikan semburan kebocoran aktif.',
      KOR: '폴리우레탄 발포지수제 / POLYURETHANE FOAM INJEKSI SISTEM - 포장 15 kg/Set',
      ENG: 'Water-reactive hydrophobic polyurethane expanding foam injection system for instant leak-stopping.'
    },
    features: ['Rapid expansion up to 30x', 'Instantly stops high-pressure water gushes', 'Flexible elastomeric foam cell', 'Safe for basement & tunnel waterproofing'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'SG-50',
    name: 'KOMOGrout SG-50',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: 'Set (Injector)',
    descKor: '저압 고무줄주사기 50cc',
    descEng: 'SYRINGE INJEKTOR 50cc',
    shortDesc: {
      INA: 'Alat injektor bertekanan rendah tipe syringe 50cc menggunakan tarikan elastis konstan untuk penetrasi epoksi sempurna ke retak halus.',
      KOR: '저압 고무줄주사기 50cc / SYRINGE INJEKTOR 50cc',
      ENG: 'Low-pressure rubber-band syringe injector 50cc for precision structural crack resin feeding.'
    },
    features: ['Continuous low-pressure delivery', 'Transparent graduated cylinder', 'Prevents air entrapment', 'Easy mounting with SDM-100'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'SS-30',
    name: 'KOMOGrout SS-30',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: 'Set (Injector)',
    descKor: '반자동 리인펙터 30cc',
    descEng: 'REINJEKTOR SPRING 30cc',
    shortDesc: {
      INA: 'Injektor semi-otomatis bertekanan pegas stainless 30cc untuk perbaikan retak beton presisi dengan aliran terkendali.',
      KOR: '반자동 리인펙터 30cc / REINJEKTOR SPRING 30cc',
      ENG: 'Semi-automatic spring-loaded re-injector 30cc for continuous epoxy feeding into micro-cracks.'
    },
    features: ['Spring-driven steady force', 'Durable reusable cylinder', 'Controlled uniform flow', 'Ideal for overhead and vertical repairs'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'PK10-60',
    name: 'KOMOGrout PK10-60',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: 'Box (Packer)',
    descKor: '고압주입 패커 10mm-60mm',
    descEng: 'PACKER 10-60',
    shortDesc: {
      INA: 'Packer mekanik injeksi tekanan tinggi ukuran 10mm x 60mm untuk pekerjaan grouting epoksi dan PU foam pada dinding dan lantai beton.',
      KOR: '고압주입 패커 10mm-60mm / PACKER 10-60',
      ENG: 'High-pressure mechanical injection packer 10mm x 60mm for high pressure epoxy and PU grouting.'
    },
    features: ['High pressure non-leak seal', 'Heavy-duty steel alloy', 'Quality expansion rubber collar', 'Integrated ball check valve'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'PK10-80',
    name: 'KOMOGrout PK10-80',
    category: 'KOMOGROUT',
    appType: 'Concrete Injection',
    packaging: 'Box (Packer)',
    descKor: '고압주입 패커 10mm-80mm',
    descEng: 'PACKER 10-80',
    shortDesc: {
      INA: 'Packer mekanik injeksi tekanan tinggi panjang ukuran 10mm x 80mm khusus untuk struktur beton tebal, dam, retaining wall, dan pondasi.',
      KOR: '고압주입 패커 10mm-80mm / PACKER 10-80',
      ENG: 'Long high-pressure injection packer 10mm x 80mm engineered for deep concrete structures and retaining walls.'
    },
    features: ['Deep structural anchoring', 'Withstands extreme pressure (> 300 bar)', 'Anti-blowout rubber sleeve', 'Rust resistant zinc-coating'],
    image: DEFAULT_PRODUCT_IMAGE
  },

  // 4. KOMOFloor Series (9 Items)
  {
    code: 'EP-1000',
    name: 'KOMOFloor EP-1000',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '16 kg/Set',
    descKor: '침투형 에폭시 프라이머',
    descEng: 'EPOXY PRIMER',
    shortDesc: {
      INA: 'Primer epoksi penetrasi tinggi untuk meresap ke dalam pori beton, mengunci debu, dan memastikan daya rekat kuat lapisan cat selanjutnya.',
      KOR: '침투형 에폭시 프라이머 / EPOXY PRIMER - 포장 16 kg/Set',
      ENG: 'High-penetration epoxy primer for sealing concrete pores and enhancing topcoat adhesion.'
    },
    features: ['Deep concrete pore penetration', 'Dust binding & surface hardening', 'Solvent-based high adhesion', 'Essential base for all epoxy floorings'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'EL-2000',
    name: 'KOMOFloor EL-2000',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '24 kg/Set',
    descKor: '에폭시 라이닝 (후막형, 중/상도겸용)',
    descEng: 'EPOXY SELF LEVELING',
    shortDesc: {
      INA: 'Epoksi Self-Leveling lapis tebal (1-3mm) untuk lantai cleanroom farmasi, rumah sakit, laboratorium, dan pabrik elektronik dengan hasil mulus tanpa sambungan.',
      KOR: '에폭시 라이닝 (후막형, 중/상도겸용) / EPOXY SELF LEVELING - 포장 24 kg/Set',
      ENG: 'Heavy-duty self-leveling epoxy lining (thick film, mid/topcoat combo) for industrial & cleanroom floors.'
    },
    features: ['High-build self-leveling finish', 'Mirror-like seamless surface', 'High impact & chemical resistance', 'Dust-free and hygienic standard'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'EL-2100',
    name: 'KOMOFloor EL-2100',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '20 kg/Set',
    descKor: '에폭시 라이닝 (후막형, 상도용)',
    descEng: 'EPOXY SELF LEVELING TOP COAT',
    shortDesc: {
      INA: 'Topcoat epoksi lining lapis tebal khusus untuk lapisan akhir permukaan lantai dengan ketahanan gores dan kilap istimewa.',
      KOR: '에폭시 라이닝 (후막형, 상도용) / EPOXY SELF LEVELING TOP COAT - 포장 20 kg/Set',
      ENG: 'High-build self-leveling epoxy topcoat formulated for sanitary finish and superior scratch resistance.'
    },
    features: ['High gloss surface finish', 'Scratch and abrasion resistant', 'UV stable for indoor installations', 'Easy to sanitize and clean'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'ETL-2000',
    name: 'KOMOFloor ETL-2000',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '16 kg/Set',
    descKor: '에폭시 라이닝 투명 (후막형, 중/상도겸용)',
    descEng: 'EPOXY TRANSPARENT SELF LEVELING',
    shortDesc: {
      INA: 'Epoksi Self-Leveling Transparan bening sejernih kristal untuk lantai dekoratif, lantai 3D, metallic epoxy, dan sistem pasir silika ekspos.',
      KOR: '에폭시 라이닝 투명 (후막형, 중/상도겸용) / EPOXY TRANSPARENT SELF LEVELING - 포장 16 kg/Set',
      ENG: 'Crystal-clear transparent self-leveling epoxy lining for decorative quartz and 3D floor aesthetics.'
    },
    features: ['Crystal-clear transparency', 'Non-yellowing formulation', 'High mechanical clarity', 'Seamless decorative gloss'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'EC-3000',
    name: 'KOMOFloor EC-3000',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '20 kg/Set',
    descKor: '에폭시 코팅 (박막형, 상도용)',
    descEng: 'EPOXY COATING',
    shortDesc: {
      INA: 'Cat Epoksi Coating tipe tipis (Thin Film) ekonomis untuk proteksi lantai gudang logistik, koridor, ruang genset, dan area parkir.',
      KOR: '에폭시 코팅 (박막형, 상도용) / EPOXY COATING - 포장 20 kg/Set',
      ENG: 'Thin-film protective epoxy coating topcoat for light to medium traffic industrial floors.'
    },
    features: ['Economic roll-on application', 'Dust-proofing & oil resistant', 'Good chemical resistance', 'Available in diverse industrial colors'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'EM-200',
    name: 'KOMOFloor EM 200',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '24 kg/Set',
    descKor: '컬러레진몰탈',
    descEng: 'EPOXY COLOR RESIN MORTAR',
    shortDesc: {
      INA: 'Mortar epoksi resin berwarna berkekuatan tekan tinggi untuk perbaikan lantai rusak parah, ramp tanjakan forklift, dan area beban ekstra berat.',
      KOR: '컬러레진몰탈 / EPOXY COLOR RESIN MORTAR - 포장 24 kg/Set',
      ENG: 'Heavy-duty colored epoxy resin mortar system for floor patch repairs and high impact ramps.'
    },
    features: ['Extreme compressive strength (> 80 MPa)', 'High impact & vibration resistance', 'Pre-blended colored quartz matrix', 'Fast traffic turnaround'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'EM-300',
    name: 'KOMOFloor EM 300',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '16 kg/Set',
    descKor: '투명레진몰탈',
    descEng: 'EPOXY TRANSPARENT RESIN MORTAR',
    shortDesc: {
      INA: 'Mortar epoksi transparan yang dirancang khusus untuk memunculkan keindahan alami butiran pasir kuarsa warna pilihan arsitek.',
      KOR: '투명레진몰탈 (혼합규사의 색상을 자연스럽게 표현가능) / EPOXY TRANSPARENT RESIN MORTAR - 포장 16 kg/Set',
      ENG: 'Transparent resin mortar system designed to naturally express colored silica sand aggregates.'
    },
    features: ['Transparent high-clarity binder', 'Natural silica aggregate texture', 'High wear resistance', 'Anti-slip surface profile'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'Epo-Crete',
    name: 'KOMOFloor Epo-Crete',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '31.4 kg/Set',
    descKor: '에폭시 유부기 크리트',
    descEng: 'EPOXY CRETE',
    shortDesc: {
      INA: 'Sistem Epoxy Cementitious Crete 3-komponen untuk lantai dengan kelembapan tinggi (damp concrete) dan penghalang uap air tanah (moisture barrier).',
      KOR: '에폭시 유부기 크리트 / EPOXY CRETE - 포장 31.4 kg/Set',
      ENG: 'Three-component epoxy-cementitious screed for high moisture concrete substrates.'
    },
    features: ['Moisture barrier screed (up to 10% moisture)', 'Thermal shock resistance', 'Heavy loading capacity', 'Self-smoothing flow'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'A-Crete',
    name: 'KOMOFloor A-Crete',
    category: 'KOMOFLOOR',
    appType: 'Flooring',
    packaging: '21 kg/Set',
    descKor: '폴리우레탄 유부기 크리트',
    descEng: 'URETHANE CRETE',
    shortDesc: {
      INA: 'Sistem Polyurethane Crete tahan kejutan suhu ekstrem (-40°C hingga +120°C), pembersihan uap air panas (steam cleanable) untuk pabrik F&B, dairy, dan cold storage.',
      KOR: '폴리우레탄 유부기 크리트 / URETHANE CRETE - 포장 21 kg/Set',
      ENG: 'Heavy-duty polyurethane crete flooring engineered for extreme thermal shock in food plants.'
    },
    features: ['Extreme thermal shock resistance (-40°C to +120°C)', 'Steam cleanable surface', 'Antimicrobial & non-tainting', 'Immune to organic acids and hot fats'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },

  // 5. KOMOProof Series (8 Items)
  {
    code: 'UP-100',
    name: 'KOMOProof UP-100',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '17 kg/Set',
    descKor: '1액형 우레탄 프라이머',
    descEng: 'URETHANE WATERPROOF BODYCOAT',
    shortDesc: {
      INA: 'Primer poliuretan 1-komponen berdaya resap tinggi untuk dak beton sebelum pengaplikasian membran waterproofing poliuretan KOMOProof.',
      KOR: '1액형 우레탄 프라이머 / URETHANE WATERPROOF BODYCOAT - 포장 17 kg/Set',
      ENG: 'Single-component polyurethane primer formulated for deep concrete slab penetration.'
    },
    features: ['Deep substrate penetration', 'Enhances PU waterproofing adhesion', 'Ready-to-use single component', 'Quick surface drying'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'UB-260',
    name: 'KOMOProof UB-260',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '20 kg/Set',
    descKor: '2액형 우레탄 연질 방수제',
    descEng: 'URETHANE WATERPROOF BODYCOAT',
    shortDesc: {
      INA: 'Membran waterproofing Polyurethane 2-komponen fleksibel berkekuatan elastisitas tinggi (> 450%) untuk dak atap beton (rooftop), balkon, dan podium.',
      KOR: '2액형 우레탄 연질 방수제 / URETHANE WATERPROOF BODYCOAT - 포장 20 kg/Set',
      ENG: 'Two-component flexible elastomeric polyurethane waterproofing membrane bodycoat.'
    },
    features: ['Ultra-high elasticity (> 450%)', 'Superior crack-bridging capability', 'Seamless waterproof barrier', 'Durable under tropical weather'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'UB-202',
    name: 'KOMOProof UB-202',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '20 kg/Set',
    descKor: '2액형 고탄성 우레탄 실란트',
    descEng: 'URETHANE WATERPROOF BODYCOAT WALL',
    shortDesc: {
      INA: 'Sealant dan pelapis waterproofing poliuretan elastisitas tinggi 2-komponen khusus untuk dinding vertikal, parapet, dan sudut pertemuan dak.',
      KOR: '2액형 고탄성 우레탄 실란트 / URETHANE WATERPROOF BODYCOAT WALL - 포장 20 kg/Set',
      ENG: 'Two-component high-elasticity polyurethane sealant and wall waterproofing coat.'
    },
    features: ['Vertical wall non-sag formulation', 'High elastic recovery', 'Weatherproofing joint seal', 'Water-tight flexible barrier'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'UT-300',
    name: 'KOMOProof UT-300',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '24 kg/Set',
    descKor: '2액형 탑코트 고탄성 우레탄 실란트',
    descEng: 'URETHANE WATERPROOF TOPCOAT',
    shortDesc: {
      INA: 'Topcoat pelindung poliuretan 2-komponen tahan sinar UV dan cuaca ekstrem untuk lapisan paling luar pelindung membran waterproofing KOMOProof UB-260.',
      KOR: '2액형 탑코트 고탄성 우레탄 실란트 / URETHANE WATERPROOF TOPCOAT - 포장 24 kg/Set',
      ENG: 'Two-component UV-resistant polyurethane topcoat for outdoor exposed waterproofing protection.'
    },
    features: ['Superior UV and weatherability resistance', 'Non-chalking, non-yellowing', 'High abrasion & foot-traffic durability', 'Maintains vibrant finish'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'UA-265W',
    name: 'KOMOProof UA-265W',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '14 kg/Set',
    descKor: '2액형 폴리우레아 핸디타입 중도',
    descEng: 'POLYUREA WATERPROOF BODYCOAT',
    shortDesc: {
      INA: 'Membran Polyurea 2-komponen tipe manual (Handy/Roller-applied) berteknologi tinggi dengan kecepatan pengeringan kilat dan ketahanan abrasi tertinggi.',
      KOR: '2액형 폴리우레아 핸디타입 중도 / POLYUREA WATERPROOF BODYCOAT - 포장 14 kg/Set',
      ENG: 'Two-component handy-type polyurea waterproof bodycoat offering fast curing and extreme toughness.'
    },
    features: ['Hand-applied polyurea (no expensive spray machine needed)', 'Rapid curing (< 2 hours rain-ready)', 'Superior tensile & tear strength', 'High chemical immunity'],
    image: DEFAULT_PRODUCT_IMAGE,
    featured: true
  },
  {
    code: 'AP-200',
    name: 'KOMOProof AP-200',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '18 kg/Set',
    descKor: '1액형 수용성 아크릴 방수제',
    descEng: 'ACRYLIC ELASTIC WATERPROOF',
    shortDesc: {
      INA: 'Cat pelapis pengedap air elastomerik berbasis akrilik ramah lingkungan (water-based) 1-komponen dengan daya pantul panas matahari untuk dinding luar dan talang.',
      KOR: '1액형 수용성 아크릴 방수제 / ACRYLIC ELASTIC WATERPROOF - 포장 18 kg/Set',
      ENG: 'Single-component water-based acrylic elastomeric coating for roof & wall waterproofing.'
    },
    features: ['Water-based eco-friendly formula', 'High solar reflectance (cool roof)', 'Easy brush or roller application', 'Flexible elastic membrane'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'BP-200',
    name: 'KOMOProof BP-200',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '17 kg/Set',
    descKor: '1액형 수용성 아스팔트 방수제',
    descEng: 'ONECOAT BITUMEN WATERPROOF',
    shortDesc: {
      INA: 'Pelapis emulsi bitumen karet 1-komponen berbasis air untuk pondasi bawah tanah (subterranean), retaining wall, planter box, dan ground water tank.',
      KOR: '1액형 수용성 아스팔트 방수제 / ONECOAT BITUMEN WATERPROOF - 포장 17 kg/Set',
      ENG: 'One-coat water-based rubberized bitumen emulsion waterproof coating for underground foundations.'
    },
    features: ['Subterranean damp-proofing barrier', 'Strong adhesion to green concrete', 'Forms seamless rubbery elastomeric skin', 'Cost-effective underground protection'],
    image: DEFAULT_PRODUCT_IMAGE
  },
  {
    code: 'AS-400',
    name: 'KOMOProof AS-400',
    category: 'KOMOPROOF',
    appType: 'Waterproofing',
    packaging: '10 kg/Set',
    descKor: '1액형 수용성 발수제 (벽체, 벽돌용)',
    descEng: 'WATER REPELLENT',
    shortDesc: {
      INA: 'Cairan penolak air (water repellent silane-siloxane) transparan yang meresap tanpa mengubah warna alami batu alam, bata ekspos, dan fasad beton arsitektural.',
      KOR: '1액형 수용성 발수제 (벽체, 벽돌용) / WATER REPELLENT - 포장 10 kg/Set',
      ENG: 'Transparent water repellent silane/siloxane liquid for exposed brick, stone, and exterior masonry walls.'
    },
    features: ['Invisible water barrier (hydrophobic)', 'Permeable to water vapor (breathable)', 'Prevents efflorescence & fungus', 'Long-lasting UV protection'],
    image: DEFAULT_PRODUCT_IMAGE
  }
];

export const INITIAL_PROJECTS: ProjectReference[] = [
  {
    id: 'proj-01',
    title: 'Pelapisan Lantai Cleanroom Pabrik Farmasi Bio-Tech',
    location: 'Kawasan Industri GIIC Cikarang, Jawa Barat',
    category: 'KOMOFloor EL-2000 (Self Leveling 2mm)',
    desc: 'Pekerjaan pelapisan lantai epoksi higienis seluas 4.200 m² dengan standar cGMP farmasi, tahan bahan kimia sterilisasi, dan bebas sambungan debu.',
    date: 'Oktober 2026',
    image: DEFAULT_PRODUCT_IMAGE,
    areaM2: '4.200 m²'
  },
  {
    id: 'proj-02',
    title: 'Injeksi Tekanan Tinggi & Penutupan Rembesan Basement Mall',
    location: 'Jakarta Barat, DKI Jakarta',
    category: 'KOMOGrout UWBM-300 & IDM-200',
    desc: 'Penghentian semburan air aktif di basement lantai B3 menggunakan sistem kombinasi PU Foam Expanding UWBM-300 dan injeksi epoksi struktural IDM-200.',
    date: 'Agustus 2026',
    image: DEFAULT_PRODUCT_IMAGE,
    areaM2: '650 Titik Injeksi'
  },
  {
    id: 'proj-03',
    title: 'Retrofitting & Perkuatan Lentur Balok Jembatan Tol (CFRP)',
    location: 'Jawa Tengah',
    category: 'KOMOWrap N300 & CFR-200',
    desc: 'Peningkatan kapasitas beban lalu lintas berat pada balok girder beton pracetak jembatan bentang 35 meter menggunakan 3 lapis serat karbon KOMOWrap N300.',
    date: 'Juli 2026',
    image: DEFAULT_PRODUCT_IMAGE,
    areaM2: '1.800 m²'
  },
  {
    id: 'proj-04',
    title: 'Waterproofing Dak Beton & Helipad Rumah Sakit',
    location: 'Tangerang, Banten',
    category: 'KOMOProof UB-260 & UT-300 (Topcoat UV)',
    desc: 'Aplikasi sistem waterproofing membran elastis poliuretan KOMOProof UB-260 lapis ganda dengan topcoat pelindung UV UT-300 tahan cuaca tropis.',
    date: 'Mei 2026',
    image: DEFAULT_PRODUCT_IMAGE,
    areaM2: '3.100 m²'
  },
  {
    id: 'proj-05',
    title: 'Lantai Tahan Thermal Shock Pabrik Pengolahan Makanan Beku',
    location: 'Semarang, Jawa Tengah',
    category: 'KOMOFloor A-Crete (Urethane Crete)',
    desc: 'Pemasangan lantai Urethane Crete ketebalan 6mm yang tahan cuci uap mendidih (+100°C) serta suhu ruang pembeku blast freezer (-30°C).',
    date: 'Maret 2026',
    image: DEFAULT_PRODUCT_IMAGE,
    areaM2: '2.500 m²'
  }
];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'Panduan Praktis Pemilihan Viskositas Epoksi Injeksi KOMOGrout IDM-200 (LV vs MV vs HV)',
    category: 'Panduan Rekayasa',
    date: '14 September 2026',
    author: 'Tim Teknis PT. KCCI CHEMTECH INDONESIA',
    content: `Dalam perbaikan retak beton struktural, pemilihan viskositas cairan epoksi injeksi sangat menentukan keberhasilan perbaikan.

KOMOGrout IDM-200 hadir dalam tiga grade spesifik:
1. Low Viscosity (LV): Viskositas sangat encer (kurang dari 200 mPa.s), ditujukan khusus untuk retak rambut/mikro dengan celah di bawah 0.2 mm. Cairan ini mampu meresap secara kapiler hingga ke kedalaman struktur beton terdalam.
2. Medium Viscosity (MV): Pilihan universal untuk retak standar dengan lebar celah 0.2 mm hingga 1.5 mm. Memberikan keseimbangan sempurna antara kemudahan penetrasi dan retensi material di dalam celah.
3. High Viscosity (HV): Viskositas kental untuk retak lebar (> 1.5 mm) atau retak pada sambungan beton ekspansi vertikal agar resin tidak mengalir tumpah sebelum proses pemadatan sempurna.

Sebelum proses injeksi, pastikan permukaan luar retak disegel secara rapat menggunakan KOMOGrout SDM-100 (tipe kering) atau SWM-100 (jika beton dalam keadaan lembap). Hubungi tim ahli kami untuk simulasi teknis gratis di lokasi proyek Anda.`,
    image: DEFAULT_PRODUCT_IMAGE,
    tags: ['Injeksi Beton', 'KOMOGrout', 'Retak Struktural', 'Panduan']
  },
  {
    id: 'news-02',
    title: 'Solusi Lantai Bebas Bakteri & Tahan Thermal Shock pada Industri F&B dengan KOMOFloor A-Crete',
    category: 'Aplikasi Material',
    date: '28 Agustus 2026',
    author: 'Divisi Flooring PT. KCCI CHEMTECH INDONESIA',
    content: `Industri makanan dan minuman (F&B) serta cold storage memiliki tantangan lingkungan yang paling berat bagi lantai beton konvensional. Tumpahan minyak panas, asam organik, benturan drum, serta pembersihan menggunakan air panas bertekanan tinggi (steam cleaning) sering kali menyebabkan epoksi standar mengelupas (delaminasi).

KOMOFloor A-Crete (Polyurethane Cementitious Crete) dirancang khusus dengan koefisien ekspansi termal yang mirip dengan beton dasar. Sistem ini tahan terhadap fluktuasi suhu ekstrem dari -40°C hingga +120°C, memiliki permukaan anti-slip yang aman bagi pekerja, serta sertifikasi food-grade yang mencegah pertumbuhan bakteri Salmonella dan Listeria.`,
    image: DEFAULT_PRODUCT_IMAGE,
    tags: ['Flooring Industri', 'Urethane Crete', 'F&B', 'Cleanroom']
  },
  {
    id: 'news-03',
    title: 'Pembaruan Sertifikasi Mutu ISO 9001:2015 & Uji Laboratorium Terakreditasi Seluruh 31 Formulasi KOMOPOXY',
    category: 'Berita Perusahaan',
    date: '10 Juli 2026',
    author: 'Manajemen PT. KCCI CHEMTECH INDONESIA',
    content: `PT. KCCI CHEMTECH INDONESIA (NIB: 8120013101767) dengan bangga mengumumkan keberhasilan audit kepatuhan mutu dan perpanjangan sertifikasi ISO 9001:2015 untuk fasilitas manufaktur kami di Jepara serta pusat distribusi BSD Tangerang.

Seluruh 31 formulasi produk KOMOPOXY — mulai dari KOMOFloor, KOMOProof, KOMOGrout, KOMOBond, hingga sistem perkuatan serat karbon KOMOWrap — telah lulus pengujian parameter fisik, kekuatan tekan, daya lekat tarik, dan ketahanan cuaca di laboratorium pengujian independen. Hal ini menegaskan komitmen kami sebagai mitra terpercaya bagi para kontraktor utama, konsultan perencana, dan pemilik proyek di seluruh Indonesia.`,
    image: DEFAULT_PRODUCT_IMAGE,
    tags: ['Sertifikasi', 'ISO 9001', 'Uji Laboratorium', 'KCCI Chemtech']
  }
];

export const INITIAL_INQUIRIES = [
  {
    id: 'inq-101',
    customerName: 'Budi Santoso',
    companyName: 'PT. Wijaya Konstruksi Mandiri',
    email: 'budi.santoso@wkm.co.id',
    phone: '+6281234567890',
    projectType: 'Lantai Pabrik Farmasi (Cleanroom)',
    estimatedAreaM2: '3500',
    productInterest: 'KOMOFloor EL-2000 & EP-1000',
    message: 'Mohon info ketersediaan stok EL-2000 untuk pengiriman ke Cikarang dan minta penawaran harga resmi beserta TDS & Test Report.',
    createdAt: '2026-10-05 09:30',
    status: 'Penawaran' as const,
    notes: 'Sudah dihubungi via WhatsApp, penawaran harga sudah dikirimkan.'
  },
  {
    id: 'inq-102',
    customerName: 'Hendra Gunawan',
    companyName: 'CV. Multi Karya Teknik',
    email: 'hendra.gunawan@multikarya.com',
    phone: '+6281398765432',
    projectType: 'Injeksi Retak Basement Hotel',
    estimatedAreaM2: '150 Titik',
    productInterest: 'KOMOGrout UWBM-300 & IDM-200',
    message: 'Ada semburan air di basement hotel di Jakarta Barat, butuh packer dan PU foam mengembang cepat.',
    createdAt: '2026-10-06 14:15',
    status: 'Baru' as const,
    notes: 'Perlu follow-up penentuan estimasi kebutuhan kaleng.'
  }
];
