'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Badge from '@/components/Badge';

export default function PropertyDetailsPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  // Sample property data - replace with actual data fetching
  const property = {
    id: params.id,
    name: language === 'ar' ? 'فيلا فاخرة في الرياض' : 'Luxury Villa in Riyadh',
    description: language === 'ar'
      ? 'فيلا حديثة بتصميم عصري وحدائق واسعة. تتكون من 4 غرف نوم، 3 حمامات، صالة واسعة، مطبخ مجهز بالكامل، وحديقة خاصة. الموقع ممتاز في حي راقي مع إطلالة جميلة.'
      : 'Modern villa with contemporary design and spacious gardens. Features 4 bedrooms, 3 bathrooms, large living room, fully equipped kitchen, and private garden. Excellent location in an upscale neighborhood with beautiful views.',
    price: 'SAR 2,500,000',
    location: 'Riyadh, Al Olaya',
    images: [
      '/assets/brand/images/shutterstock_2256037689.jpg',
      '/assets/brand/images/shutterstock_2209394407.jpg',
      '/assets/brand/images/shutterstock_2558087881.jpg',
      '/assets/brand/images/shutterstock_1996485695.jpg',
    ],
    features: [
      { ar: '4 غرف نوم', en: '4 Bedrooms' },
      { ar: '3 حمامات', en: '3 Bathrooms' },
      { ar: 'صالة واسعة', en: 'Large Living Room' },
      { ar: 'مطبخ مجهز', en: 'Fully Equipped Kitchen' },
      { ar: 'حديقة خاصة', en: 'Private Garden' },
      { ar: 'موقف سيارات', en: 'Parking Space' },
    ],
  };

  const translations = {
    contactAgent: { ar: 'اتصل بالوكيل', en: 'Contact Agent' },
    scheduleViewing: { ar: 'حجز معاينة', en: 'Schedule Viewing' },
    propertyDetails: { ar: 'تفاصيل العقار', en: 'Property Details' },
    features: { ar: 'المميزات', en: 'Features' },
    location: { ar: 'الموقع', en: 'Location' },
    price: { ar: 'السعر', en: 'Price' },
  };

  return (
    <div className={`min-h-screen bg-[#efefef] ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />

      {/* Property Images Gallery */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:col-span-2 h-96 md:h-[600px] relative rounded-2xl overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          {property.images.slice(1, 4).map((img, idx) => (
            <div key={idx} className="h-48 md:h-[290px] relative rounded-xl overflow-hidden">
              <Image
                src={img}
                alt={`${property.name} - ${idx + 2}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* Property Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-3">
                      {property.name}
                    </h1>
                    <p className="text-lg text-[#6D6D6D] flex items-center gap-2">
                      📍 {property.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {property.price}
                  </Badge>
                </div>

                <div className="prose max-w-none">
                  <p className="text-[#6D6D6D] leading-relaxed text-lg mb-8">
                    {property.description}
                  </p>
                </div>

                <div className="border-t border-[#efefef] pt-8">
                  <h2 className="text-2xl font-bold text-[#1e1e1e] mb-6">
                    {t(translations.features)}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 bg-[#efefef] rounded-lg"
                      >
                        <span className="text-[#f0cb8e] text-xl">✓</span>
                        <span className="text-[#1e1e1e] font-medium">
                          {t(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-6">
                  {t(translations.contactAgent)}
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                      className="w-full px-4 py-3 border border-[#cfcfcf] rounded-lg focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      className="w-full px-4 py-3 border border-[#cfcfcf] rounded-lg focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone'}
                      className="w-full px-4 py-3 border border-[#cfcfcf] rounded-lg focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e]"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder={language === 'ar' ? 'رسالتك' : 'Your Message'}
                      className="w-full px-4 py-3 border border-[#cfcfcf] rounded-lg focus:ring-2 focus:ring-[#f0cb8e] focus:border-transparent text-[#1e1e1e]"
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    {t(translations.scheduleViewing)}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

