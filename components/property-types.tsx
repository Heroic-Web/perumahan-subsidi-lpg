'use client';

import { ArrowRight, Home, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const propertyTypes = [
  {
    type: 'Type 36',
    priceRange: 'Mulai Rp 160 Juta',
    landArea: '72 m²',
    buildingArea: '36 m²',
    rooms: '2 Kamar',
    features: ['Dapur', 'Kamar Mandi', 'Ruang Tamu', 'Halaman'],
    dpPrice: 'DP: Rp 4 Juta',
    popular: true,
  },
  
];

export function PropertyTypes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="property-types"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Pilihan Tipe <span className="text-blue-600 dark:text-blue-400">Rumah Terjangkau</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Berbagai pilihan tipe rumah dengan harga terjangkau sesuai kebutuhan dan budget keluarga Anda
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {propertyTypes.map((property, index) => (
            <div
              key={index}
              className={`group relative rounded-xl border-2 transition-all duration-300 hover:shadow-xl ${
                property.popular
                  ? 'border-blue-600 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-800 shadow-lg'
                  : 'border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {property.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  Populer
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Type & Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                      {property.type}
                    </h3>
                    <p className="text-sm text-muted-foreground">{property.rooms}</p>
                  </div>
                  <Home className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                </div>

                {/* Divider */}
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"></div>

                {/* Specifications */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Luas Tanah</span>
                    <span className="font-semibold text-foreground">{property.landArea}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Luas Bangunan</span>
                    <span className="font-semibold text-foreground">{property.buildingArea}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">Fasilitas</p>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-lg p-6 mb-6 border border-green-200 dark:border-green-900/50 text-center">
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                    Harga Mulai
                  </p>

                  <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-3">
                    {property.priceRange}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-300 font-semibold">
                    <DollarSign className="w-4 h-4" />
                    <span>{property.dpPrice}</span>
                  </div>
                </div>


                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    property.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600'
                  }`}
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Tertarik? Hubungi kami untuk konsultasi gratis dan informasi detail lebih lanjut
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Hubungi Kami Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
