'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Building2, Shield, Flower, Trees, 
  Church, Zap, Wifi, Heart
} from 'lucide-react';

const facilities = [
  {
    name: 'One Gate System',
    description: 'Sistem akses satu pintu utama untuk keamanan maksimal',
    icon: Building2,
  },
  {
    name: 'Security 24 Jam',
    description: 'Penjaga keamanan professional siap melayani sepanjang waktu',
    icon: Shield,
  },
  {
    name: 'Taman Bermain',
    description: 'Taman bermain anak dengan alat permainan yang aman dan modern',
    icon: Flower,
  },
  {
    name: 'Area Hijau',
    description: 'Ruang terbuka hijau untuk rekreasi keluarga dan aktivitas outdoor',
    icon: Trees,
  },
  {
    name: 'Musholla',
    description: 'Fasilitas ibadah yang nyaman untuk seluruh penghuni',
    icon: Church,
  },
  {
    name: 'Akses Jalan Lebar',
    description: 'Jalan akses yang lebar memudahkan sirkulasi kendaraan dan mobilitas',
    icon: Zap,
  },
  {
    name: 'Internet & TV Kabel',
    description: 'Koneksi internet berkecepatan tinggi dan layanan TV kabel tersedia',
    icon: Wifi,
  },
  {
    name: 'Lingkungan Ramah Keluarga',
    description: 'Komunitas yang solid dan lingkungan yang mendukung kehidupan keluarga',
    icon: Heart,
  },
];

export function Facilities() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="facilities"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Fasilitas <span className="text-blue-600 dark:text-blue-400">Komunitas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Fasilitas lengkap untuk mendukung kehidupan sehari-hari keluarga Anda
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={index}
                className={`group glass-effect rounded-xl p-6 border border-accent/20 card-hover text-center transition-all duration-700 ${
                  isVisible
                    ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                    : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-accent/15 group-hover:bg-accent/25 transition-colors">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {facility.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
