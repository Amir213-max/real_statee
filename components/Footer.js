'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const translations = {
    about: { ar: 'من نحن', en: 'About Us' },
    contact: { ar: 'اتصل بنا', en: 'Contact Us' },
    properties: { ar: 'العقارات', en: 'Properties' },
    privacy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
    terms: { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
    tagline: {
      ar: 'مستوحى من البحر الأحمر - ربط مصر والمملكة العربية السعودية',
      en: 'Inspired by the Red Sea - Connecting Egypt & KSA',
    },
  };

  return (
    <footer className={`bg-[#1e1e1e] text-[#efefef] ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo variant="horizontal" dark={true} className="mb-4" />
            <p className="text-[#cfcfcf] text-sm mt-4 leading-relaxed">
              {t(translations.tagline)}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-[#f0cb8e]">{t(translations.about)}</h4>
            <ul className="space-y-3 text-sm text-[#cfcfcf]">
              <li>
                <Link href="/about" className="hover:text-[#f0cb8e] transition-colors">
                  {language === 'ar' ? 'عن الشركة' : 'About Company'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f0cb8e] transition-colors">
                  {language === 'ar' ? 'رؤيتنا ورسالتنا' : 'Vision & Mission'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f0cb8e] transition-colors">
                  {language === 'ar' ? 'فريق العمل' : 'Our Team'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-[#f0cb8e]">{t(translations.properties)}</h4>
            <ul className="space-y-3 text-sm text-[#cfcfcf]">
              <li>
                <Link href="/properties" className="hover:text-[#f0cb8e] transition-colors">
                  {language === 'ar' ? 'جميع العقارات' : 'All Properties'}
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#f0cb8e] transition-colors">
                  {language === 'ar' ? 'عقارات مميزة' : 'Featured Properties'}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-[#f0cb8e]">{t(translations.contact)}</h4>
            <ul className="space-y-3 text-sm text-[#cfcfcf]">
              <li>
                <Link href="/contact" className="hover:text-[#f0cb8e] transition-colors">
                  {t(translations.contact)}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0cb8e] transition-colors">
                  {t(translations.privacy)}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f0cb8e] transition-colors">
                  {t(translations.terms)}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#353535] text-center text-sm text-[#cfcfcf]">
          <p>&copy; {new Date().getFullYear()} Yafel Real Estate. {t(translations.rights)}</p>
        </div>
      </div>
    </footer>
  );
}

