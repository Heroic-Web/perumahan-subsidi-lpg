'use client';

import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pembeli, Tipe 36',
    content: 'Program subsidi ini sangat membantu saya memiliki rumah sendiri. Harganya terjangkau dan prosesnya jelas. Kualitas rumah juga sangat baik untuk standar subsidi. Sangat merekomendasikan!',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Ibu Rumah Tangga, Tipe 36',
    content: 'Alhamdulillah akhirnya bisa punya rumah untuk keluarga. Cicilan setiap bulan terjangkau, DP-nya juga ringan. Lingkungannya aman dan asri, anak-anak bisa bermain dengan tenang.',
    rating: 5,
  },
  {
    name: 'Ahmad Wijaya',
    role: 'Buruh Pabrik, Tipe 36',
    content: 'Saya hanya buruh, tapi bisa membeli rumah berkat subsidi ini. Timnya sangat membantu menjelaskan semua prosedur dengan sabar. Terima kasih Samara Residence!',
    rating: 5,
  },
  {
    name: 'Eka Putri',
    role: 'Guru Honorer, Tipe 36',
    content: 'Sebagai guru honorer dengan gaji pas-pasan, saya sangat bersyukur ada program seperti ini. Proses cepat, dokumen jelas, dan tim customer service sangat responsif membantu!',
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Cerita Sukses <span className="text-blue-600 dark:text-blue-400">Pembeli Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Dengarkan cerita inspiratif dari keluarga Indonesia yang telah mewujudkan rumah impian mereka
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 sm:p-8 card-hover group transition-all duration-700 bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 ${
                isVisible
                  ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 dark:from-blue-600 dark:to-blue-500 flex items-center justify-center text-lg font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
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
