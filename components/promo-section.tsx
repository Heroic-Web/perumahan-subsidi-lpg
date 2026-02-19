'use client';

import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Gift, DollarSign, FileText } from 'lucide-react';

const promos = [
  {
    title: 'DP Ringan Mulai',
    description: 'Down payment ringan hanya Rp 5 - 10 juta saja',
    icon: Gift,
    color: 'blue',
  },
  {
    title: 'Cicilan Terjangkau',
    description: 'Cicilan bulanan mulai dari Rp 1 jutaan sesuai kemampuan',
    icon: DollarSign,
    color: 'green',
  },
  {
    title: 'Proses Cepat & Mudah',
    description: 'Persetujuan pembiayaan hingga 3 hari kerja saja',
    icon: FileText,
    color: 'purple',
  },
];

export function PromoSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [daysLeft, setDaysLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft((prev) => (prev > 0 ? prev - 1 : 30));
    }, 86400000); // Update every day

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="promo"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/2 -left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-4 border border-white/30">
            <span className="text-sm text-white font-semibold">Penawaran Terbatas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Program Subsidi Pemerintah
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto text-balance">
            Wujudkan rumah impian keluarga dengan program subsidi dan cicilan yang terjangkau
          </p>

          {/* Countdown */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 text-white font-semibold mt-6">
            <span className="text-2xl font-bold">{daysLeft}</span>
            <span>hari lagi</span>
          </div>
        </div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promos.map((promo, index) => {
            const colorMap: { [key: string]: string } = {
              blue: 'from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500',
              green: 'from-green-400 to-emerald-400 dark:from-green-500 dark:to-emerald-500',
              purple: 'from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500',
            };

            const Icon = promo.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colorMap[promo.color]} rounded-xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-sm text-white/90">{promo.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/90 mb-6 text-lg">
            Jadilah bagian dari ribuan keluarga yang telah memiliki rumah impian mereka
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg hover:shadow-2xl hover:-translate-y-1"
          >
            Konsultasi Gratis Sekarang
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
