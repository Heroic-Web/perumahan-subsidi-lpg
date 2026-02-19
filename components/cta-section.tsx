'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-accent/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
        isVisible
          ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
          : 'opacity-0'
      }`}>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance mb-6">
          Siap Meningkatkan{' '}
          <span className="gradient-text">Bisnis Anda?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
          Jangan biarkan kompetitor Anda unggul. Dapatkan website profesional yang akan membawa bisnis Anda ke level selanjutnya. Konsultasi gratis kami siap membantu Anda.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/62xxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center justify-center gap-2"
          >
            Hubungi via WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:info@heroicwebstudio.com"
            className="px-6 py-3 rounded-lg border border-accent/30 text-accent font-semibold hover:bg-accent/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Kirim Email Sekarang
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border/30 space-y-4">
          <p className="text-sm text-muted-foreground">
            Terpercaya oleh lebih dari 50 perusahaan di Indonesia
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Garansi Kepuasan
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Support 24/7
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Teknologi Terkini
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
