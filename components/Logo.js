'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Logo({ 
  variant = 'horizontal', 
  dark = false,
  className = '' 
}) {
  const { language } = useLanguage();
  
  // Logo path based on language
  const getLogoPath = () => {
    if (variant === 'emblem') {
      return '/assets/brand/images/Layer-1.png';
    }
    // Use Arabic logo for Arabic, English logo for English
    return language === 'ar' 
      ? '/assets/logo/ar logo.png'
      : '/assets/logo/en logo.png';
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={getLogoPath()}
        alt="Yafel Real Estate"
        width={variant === 'emblem' ? 60 : 180}
        height={variant === 'emblem' ? 60 : 60}
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}

