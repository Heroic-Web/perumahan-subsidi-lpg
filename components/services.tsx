'use client';

import { Globe, ShoppingCart, GraduationCap, Activity, Zap, Code2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const services = [
  {
    icon: Globe,
    title: 'Company Profile Website',
    description: 'Website profesional untuk menampilkan profil perusahaan Anda dengan desain yang menarik dan informatif.',
  },
  {
    icon: ShoppingCart,
    title: 'Website Property & Developer',
    description: 'Solusi website khusus untuk agent properti dan developer dengan fitur listing dan virtual tour.',
  },
  {
    icon: GraduationCap,
    title: 'Website Sekolah & Akademik',
    description: 'Platform digital untuk institusi pendidikan dengan fitur admin lengkap dan user friendly.',
  },
  {
    icon: Activity,
    title: 'Website Klinik & Rumah Sakit',
    description: 'Website kesehatan dengan sistem appointment online dan manajemen pasien terintegrasi.',
  },
  {
    icon: Zap,
    title: 'Landing Page Produk',
    description: 'Halaman penjualan yang high-converting dengan strategi marketing yang terbukti efektif.',
  },
  {
    icon: Code2,
    title: 'Custom Web App & SaaS',
    description: 'Aplikasi web custom sesuai kebutuhan bisnis Anda dengan teknologi terkini dan scalable.',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Kami menyediakan berbagai solusi website profesional untuk kebutuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
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
                <div className="mb-6 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
