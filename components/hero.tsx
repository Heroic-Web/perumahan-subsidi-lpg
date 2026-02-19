'use client';

import { ArrowRight, Home, DollarSign, FileCheck } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 dark:bg-blue-800/20 rounded-full filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 fade-in">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4 border border-blue-200 dark:border-blue-800">
                <span className="text-sm text-blue-700 dark:text-blue-300 font-semibold">Program Subsidi Pemerintah</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                Rumah Impian dengan Harga{' '}
                <span className="text-blue-600 dark:text-blue-400">Terjangkau</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
                Wujudkan rumah keluarga dengan program subsidi pemerintah. DP ringan, cicilan mudah, dan lokasi strategis di lingkungan yang nyaman dan aman.
              </p>
            </div>

            {/* Benefit Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="px-3 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-800 rounded-lg text-sm font-semibold text-green-700 dark:text-green-300">
                DP Ringan
              </div>
              <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-800 rounded-lg text-sm font-semibold text-blue-700 dark:text-blue-300">
                Cicilan Mudah
              </div>
              <div className="px-3 py-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-800 rounded-lg text-sm font-semibold text-purple-700 dark:text-purple-300">
                Subsidi Pemerintah
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center justify-center gap-2"
              >
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#property-types"
                className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 dark:hover:bg-blue-600"
              >
                Lihat Tipe Rumah
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/30">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <p className="text-sm text-muted-foreground">Rumah Terjual</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">98%</div>
                <p className="text-sm text-muted-foreground">Pembeli Puas</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">1</div>
                <p className="text-sm text-muted-foreground">Tipe Rumah</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-80 sm:h-96 lg:h-full hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl border-2 border-blue-200 dark:border-slate-600 shadow-xl"></div>
            <div className="relative z-10 text-center space-y-8 p-6">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <Home className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Desain Modern</p>
                </div>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Terjangkau</p>
                </div>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <FileCheck className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-foreground">Legal Jelas</p>
                </div>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <ArrowRight className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2 rotate-45" />
                  <p className="text-xs font-semibold text-foreground">Lokasi Bagus</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Pilihan Terbaik untuk Keluarga</p>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">Samara Residence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
