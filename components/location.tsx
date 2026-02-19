'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MapPin, Clock, Landmark, Hospital } from 'lucide-react';

const distances = [
  {
    title: 'Tol Entrance',
    distance: '3 km',
    icon: MapPin,
    description: 'Akses mudah ke jalan tol untuk mobilitas tinggi',
  },
  {
    title: 'Sekolah Negeri dan Swasta',
    distance: '500 m',
    icon: Landmark,
    description: 'Beberapa pilihan sekolah berkualitas di sekitar area',
  },
  {
    title: 'Rumah Sakit',
    distance: '5.5 km',
    icon: Hospital,
    description: 'Fasilitas kesehatan modern tersedia di dekat perumahan',
  },
  {
    title: 'Pusat Perbelanjaan',
    distance: '1 km',
    icon: Clock,
    description: 'Mall dan pusat belanja untuk kebutuhan sehari-hari',
  },
  {
    title: 'Pondok Pesantren',
    distance: '400 km',
    icon: Landmark,
    description: 'Pondok pesantren untuk pendidikan agama yang berkualitas',
  },
  {
    title: 'Puti Minang',
    distance: '2 km',
    icon: MapPin,
    description: 'Pusat kuliner khas Minang yang terkenal di Lampung',
  },
];

export function Location() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="location"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lokasi <span className="text-blue-600 dark:text-blue-400">Strategis & Terjangkau</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Terletak di lokasi yang strategis dengan akses mudah ke sekolah, pasar, dan fasilitas kesehatan
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className={`rounded-2xl overflow-hidden border border-accent/20 transition-all duration-700 ${
            isVisible
              ? 'animate-in fade-in slide-in-from-left-4 opacity-100'
              : 'opacity-0'
          }`}>
            <div className="bg-accent/10 h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033884.9778677912!2d102.90111489374999!3d-5.350911599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cf0015c71cd3%3A0x116f48a8a7e66808!2sSamara%20Residence%20Hajimena!5e0!3m2!1sid!2sid!4v1771465551739!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Distance Info */}
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible
              ? 'animate-in fade-in slide-in-from-right-4 opacity-100'
              : 'opacity-0'
          }`}>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Jarak ke Berbagai Lokasi Penting
              </h3>
              <p className="text-muted-foreground">
                Samara Property berada di posisi strategis dengan jarak yang dekat ke berbagai fasilitas esensial
              </p>
            </div>

            {/* Distance Cards */}
            <div className="space-y-4">
              {distances.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`glass-effect rounded-xl p-6 border border-accent/20 card-hover transition-all duration-700 ${
                      isVisible
                        ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                        : 'opacity-0'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${100 + index * 100}ms` : '0ms',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/15 text-accent flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <span className="text-accent font-bold">
                            {item.distance}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="p-6 glass-effect rounded-xl border border-accent/20">
              <p className="text-sm text-muted-foreground mb-3">
                📍 Alamat: Jl. Pemanggilan, Natar, Lampung, Lampung Selatan
              </p>
              <p className="text-sm text-muted-foreground">
                Hubungi kami untuk mendapatkan informasi lebih detail tentang lokasi dan petunjuk arah ke lokasi proyek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
