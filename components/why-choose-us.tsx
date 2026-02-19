'use client';

import { Check, MapPin, Shield, DollarSign, CheckCircle, Home, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const iconMap: { [key: string]: React.ReactNode } = {
  'MapPin': <MapPin className="h-6 w-6" />,
  'Shield': <Shield className="h-6 w-6" />,
  'DollarSign': <DollarSign className="h-6 w-6" />,
  'CheckCircle': <CheckCircle className="h-6 w-6" />,
  'Home': <Home className="h-6 w-6" />,
  'Zap': <Zap className="h-6 w-6" />,
};

const features = [
  {
    title: 'Program Subsidi Pemerintah',
    description: 'Perumahan bersubsidi dengan dukungan program pemerintah untuk masyarakat menengah ke bawah',
    icon: 'DollarSign',
  },
  {
    title: 'Harga Terjangkau',
    description: 'Harga yang sangat kompetitif dengan DP ringan dan cicilan bulanan yang ringan sesuai kemampuan',
    icon: 'CheckCircle',
  },
  {
    title: 'Lokasi Strategis',
    description: 'Lokasi yang baik, dekat dengan sekolah, pasar, transportasi umum, dan fasilitas kesehatan',
    icon: 'MapPin',
  },
  {
    title: 'Lingkungan Aman & Nyaman',
    description: 'Keamanan 24 jam, lingkungan yang bersih, asri, dan ramah untuk seluruh keluarga',
    icon: 'Shield',
  },
  {
    title: 'Legalitas Jelas & Terpercaya',
    description: 'Sertifikat resmi, dokumen lengkap, dan semua prosedur sesuai regulasi pemerintah',
    icon: 'Home',
  },
  {
    title: 'Fasilitas Komunitas Lengkap',
    description: 'Taman bermain anak, area hijau, musholla, balai warga, dan akses jalan yang lebar',
    icon: 'Zap',
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Mengapa Memilih <span className="text-blue-600 dark:text-blue-400">Samara Residence?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Perumahan subsidi terpercaya dengan harga terjangkau, lokasi strategis, dan dukungan pemerintah
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-effect rounded-xl p-6 sm:p-8 card-hover border border-accent/20 group transition-all duration-700 ${
                isVisible
                  ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/15 group-hover:bg-accent/25 transition-colors text-accent">
                    {iconMap[feature.icon] || <Check className="h-5 w-5" />}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
