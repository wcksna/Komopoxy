import React from 'react';
import { useData } from '../../context/DataContext';

interface KomopoxyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  layout?: 'horizontal' | 'vertical' | 'icon-only' | 'hero-badge';
  showTagline?: boolean;
  className?: string;
}

export const KomopoxyLogo: React.FC<KomopoxyLogoProps> = ({
  size = 'md',
  layout = 'horizontal',
  showTagline = true,
  className = ''
}) => {
  const { currentLang, companyInfo } = useData();

  const taglines = {
    INA: {
      primary: companyInfo.taglineINA || 'Solusi Kimia Konstruksi Berkinerja Tinggi',
      sub: 'PT. KCCI CHEMTECH INDONESIA • NIB: ' + companyInfo.nib,
      slogan: 'Kekuatan Maksimal • Tahan Cuaca Tropis • Teruji ISO 9001'
    },
    KOR: {
      primary: companyInfo.taglineKOR || '고성능 건설 화학 종합 솔루션',
      sub: 'PT. KCCI CHEMTECH INDONESIA (최진용 대표)',
      slogan: '극대화된 내구성 • 열대 기후 최적화 • ISO 9001 인증'
    },
    ENG: {
      primary: companyInfo.taglineENG || 'High-Performance Construction Chemical Solutions',
      sub: 'PT. KCCI CHEMTECH INDONESIA',
      slogan: 'Maximum Strength • Tropical Climate Proven • ISO 9001 Certified'
    }
  }[currentLang];

  // Dimensions based on size
  const svgDimensions = {
    sm: { width: 140, height: 48, viewBoxH: 110 },
    md: { width: 180, height: 60, viewBoxH: 110 },
    lg: { width: 240, height: 80, viewBoxH: 110 },
    xl: { width: 320, height: 110, viewBoxH: 110 },
    hero: { width: 380, height: 130, viewBoxH: 110 }
  }[size];

  // SVG representation matching the user's uploaded logo_komopoxy.png
  const LogoSVG = (
    <svg
      viewBox="0 0 340 120"
      className="filter drop-shadow-md select-none"
      style={{
        width: '100%',
        maxWidth: `${svgDimensions.width}px`,
        height: 'auto'
      }}
    >
      <defs>
        {/* Royal Blue Gradient for KOMOPOXY text */}
        <linearGradient id="komoBlueBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="35%" stopColor="#2563EB" />
          <stop offset="70%" stopColor="#1E5199" />
          <stop offset="100%" stopColor="#12376E" />
        </linearGradient>

        {/* Teal Shield Gradient */}
        <linearGradient id="tealShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="50%" stopColor="#0D8373" />
          <stop offset="100%" stopColor="#065F53" />
        </linearGradient>

        {/* Komodo Skin Gradient */}
        <linearGradient id="komodoSkinGrad" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#5A524C" />
          <stop offset="30%" stopColor="#433D38" />
          <stop offset="70%" stopColor="#2E2A27" />
          <stop offset="100%" stopColor="#1B1917" />
        </linearGradient>

        {/* Claws Gradient */}
        <linearGradient id="talonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Tongue Gradient */}
        <linearGradient id="tongueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>

      {/* 1. GREEN/TEAL SHIELD OUTLINE (Behind Komodo Dragon) */}
      <polygon
        points="90,14 250,14 220,102 170,116 120,102"
        fill="none"
        stroke="url(#tealShieldGrad)"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* 2. KOMODO DRAGON HEAD, NECK & TORSO */}
      <g id="komodo-dragon">
        {/* Dragon Torso & Neck */}
        <path
          d="M 125,48 C 122,32 135,16 156,11 C 178,6 205,12 216,25 C 224,20 238,24 242,34 C 235,46 215,48 200,46 C 188,54 162,54 138,48 Z"
          fill="url(#komodoSkinGrad)"
          stroke="#18181B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Snout and Brow Ridge */}
        <path
          d="M 132,32 C 128,26 138,18 152,15 C 168,12 186,16 195,24"
          fill="none"
          stroke="#716B66"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Fierce Eye */}
        <ellipse cx="152" cy="20" rx="3.5" ry="3" fill="#FBBF24" />
        <circle cx="151.5" cy="20" r="1.5" fill="#000000" />
        {/* Brow shadow */}
        <path d="M 148,16 Q 155,16 158,19" fill="none" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />

        {/* Snout Nostril */}
        <ellipse cx="132" cy="28" rx="2" ry="1.2" fill="#18181B" />

        {/* Open Mouth Jaw & Teeth */}
        <path
          d="M 130,34 Q 142,35 156,33 Q 164,32 168,36"
          fill="none"
          stroke="#18181B"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Upper teeth */}
        <path d="M 138,34 L 140,37 L 142,34 M 145,34 L 147,37 L 149,34 M 153,33 L 155,36 L 157,33" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

        {/* Flicking Forked Tongue */}
        <path
          d="M 133,36 Q 124,38 120,44 Q 115,47 112,44 M 120,44 Q 118,50 115,53"
          fill="none"
          stroke="url(#tongueGrad)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Scales & Muscle Highlights */}
        <path d="M 170,28 Q 185,32 205,36" fill="none" stroke="#524C46" strokeWidth="2" strokeLinecap="round" />
        <path d="M 175,36 Q 190,40 210,44" fill="none" stroke="#3A3531" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 3. FRONT LEGS & CLAWS GRIPPING ONTO TEXT */}
      <g id="dragon-claws">
        {/* Left Forearm */}
        <ellipse cx="140" cy="52" rx="12" ry="8" fill="url(#komodoSkinGrad)" stroke="#18181B" strokeWidth="2" />
        {/* Left Talons (Gripping on 'M') */}
        <path d="M 131,50 Q 128,58 126,64" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 138,51 Q 138,60 138,66" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 145,51 Q 148,60 151,64" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 126,64 L 125,66 M 138,66 L 138,68 M 151,64 L 153,66" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

        {/* Right Forearm */}
        <ellipse cx="205" cy="52" rx="12" ry="8" fill="url(#komodoSkinGrad)" stroke="#18181B" strokeWidth="2" />
        {/* Right Talons (Gripping on 'P') */}
        <path d="M 196,51 Q 193,60 191,64" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 203,51 Q 203,60 203,66" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 210,51 Q 213,60 216,64" stroke="url(#talonGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 191,64 L 189,66 M 203,66 L 203,68 M 216,64 L 218,66" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* 4. "KOMOPOXY" BOLD ARCHED WORDMARK */}
      {/* Outer thick royal blue drop contour */}
      <text
        x="170"
        y="96"
        textAnchor="middle"
        fill="none"
        stroke="#1E5199"
        strokeWidth="15"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{
          fontFamily: "'Impact', 'Arial Black', 'Montserrat', sans-serif",
          fontSize: '52px',
          fontWeight: 900,
          letterSpacing: '-1.5px'
        }}
      >
        KOMOPOXY
      </text>

      {/* Deep blue inner edge contour */}
      <text
        x="170"
        y="96"
        textAnchor="middle"
        fill="none"
        stroke="#0F3870"
        strokeWidth="10"
        strokeLinejoin="round"
        style={{
          fontFamily: "'Impact', 'Arial Black', 'Montserrat', sans-serif",
          fontSize: '52px',
          fontWeight: 900,
          letterSpacing: '-1.5px'
        }}
      >
        KOMOPOXY
      </text>

      {/* Main Crisp White Lettering */}
      <text
        x="170"
        y="96"
        textAnchor="middle"
        fill="#FFFFFF"
        style={{
          fontFamily: "'Impact', 'Arial Black', 'Montserrat', sans-serif",
          fontSize: '52px',
          fontWeight: 900,
          letterSpacing: '-1.5px'
        }}
      >
        KOMOPOXY
      </text>
    </svg>
  );

  if (layout === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{LogoSVG}</div>;
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2 ${className}`}>
        <div className="flex justify-center">{LogoSVG}</div>
        {showTagline && (
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-black tracking-wider text-teal-400 uppercase">
              {taglines.primary}
            </div>
            <div className="text-[11px] text-slate-400 font-semibold tracking-wide">
              {taglines.sub}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (layout === 'hero-badge') {
    return (
      <div className={`flex flex-col items-start space-y-3 ${className}`}>
        <div className="flex items-center gap-3">
          {LogoSVG}
        </div>
        {showTagline && (
          <div className="space-y-1 pl-1 border-l-2 border-teal-500/60">
            <div className="text-xs sm:text-sm font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-white uppercase">
              {taglines.primary}
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              {taglines.slogan}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default: Horizontal Layout
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="shrink-0">{LogoSVG}</div>
      {showTagline && (
        <div className="hidden sm:flex flex-col justify-center">
          <span className="text-[11px] lg:text-xs font-black tracking-wider text-teal-400 uppercase leading-snug">
            {taglines.primary}
          </span>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
            {companyInfo.companyName}
          </span>
        </div>
      )}
    </div>
  );
};
