'use client';

import { useState } from 'react';
import Image from 'next/image';
import GoogleDriveImage from '@/components/GoogleDriveImage';
import { useLanguage } from '@/context/LanguageContext';
import { convertGoogleDriveUrl, isGoogleDriveUrl } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/Cards/ProjectCard';
import Button from '@/components/ui/Button';
import projectsData from '@/data/projects.json';
import destinationsData from '@/data/destinations.json';

export default function Home() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const isRTL = language === 'ar';

  const translations = {
    heroTitle: {
      ar: 'مستوحى من البحر الأحمر',
      en: 'Inspired by the Red Sea',
    },
    heroSubtitle: {
      ar: 'اكتشف أفضل العقارات الفاخرة التي تربط مصر والمملكة العربية السعودية',
      en: 'Discover premium real estate connecting Egypt & Saudi Arabia',
    },
    search: { ar: 'بحث', en: 'Search' },
    allDestinations: { ar: 'جميع الوجهات', en: 'All Destinations' },
    featuredProperties: { ar: 'عقارات مميزة', en: 'Featured Properties' },
    viewAll: { ar: 'عرض الكل', en: 'View All' },
    exploreProperties: { ar: 'استكشف العقارات', en: 'Explore Properties' },
    searchPlaceholder: {
      ar: 'ابحث عن عقارك المثالي...',
      en: 'Search for your perfect property...',
    },
  };

  const featuredProjects = projectsData.slice(0, 6);
  const heroImages = [
    convertGoogleDriveUrl('https://drive.google.com/file/d/1A6PdIvXHPNifZJ6r8DRXj4wpwNr9795p/view?usp=sharing'),
    convertGoogleDriveUrl('https://drive.google.com/file/d/1DC79hQjquKI53xWewYXLI6UosblZWF6j/view?usp=sharing'),
    '/assets/brand/images/shutterstock_2558087881.jpg',
  ];

  return (
    <div className={`min-h-screen bg-[#efefef] ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {isGoogleDriveUrl(heroImages[1]) ? (
            <GoogleDriveImage
              src={heroImages[1]}
              alt="Yafel Real Estate"
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src={heroImages[1]}
              alt="Yafel Real Estate"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e1e]/80 via-[#1e1e1e]/70 to-[#1e1e1e]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#efefef] mb-6 leading-tight animate-fadeInUp">
            {t(translations.heroTitle)}
          </h1>
          <p className="text-xl md:text-2xl text-[#cfcfcf] mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t(translations.heroSubtitle)}
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-4 hover-lift">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(translations.searchPlaceholder)}
                className="flex-1 px-6 py-4 border border-[#cfcfcf] rounded-xl focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e] text-lg"
              />
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="px-6 py-4 border border-[#cfcfcf] rounded-xl focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e] text-lg bg-white"
              >
                <option value="">{t(translations.allDestinations)}</option>
                {destinationsData.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {t({ ar: dest.name_ar, en: dest.name_en })}
                  </option>
                ))}
              </select>
              <Button size="lg" className="whitespace-nowrap">
                {t(translations.search)}
              </Button>
            </div>
          </div>

          <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button variant="secondary" size="lg" className="hover-lift hover-glow">
              {t(translations.exploreProperties)}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t(translations.featuredProperties)}
            subtitle={
              language === 'ar'
                ? 'عقارات فاخرة مختارة بعناية'
                : 'Carefully selected luxury properties'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Button variant="outline" size="lg" className="hover-lift">
              {t(translations.viewAll)}
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e1e1e] to-[#353535] text-[#efefef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-lg text-[#cfcfcf] mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'يافل هي علامة تجارية عقارية فاخرة مستوحاة من جمال البحر الأحمر وروح الاتصال بين مصر والمملكة العربية السعودية. نحن نؤمن ببناء مجتمعات مستدامة وخلق قيمة حقيقية للمستثمرين والمقيمين على حد سواء.'
                  : 'Yafel is a premium real estate brand inspired by the beauty of the Red Sea and the spirit of connection between Egypt and Saudi Arabia. We believe in building sustainable communities and creating real value for both investors and residents.'}
              </p>
              <Button variant="secondary" className="hover-lift">
                {language === 'ar' ? 'تعرف علينا أكثر' : 'Learn More About Us'}
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden animate-scaleIn hover-lift">
              <Image
                src="https://res.cloudinary.com/dqqmswaf7/image/upload/shutterstock_2209394407_uuurxb"
                alt="Yafel Real Estate"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
