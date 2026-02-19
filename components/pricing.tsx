'use client';

import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const plans = [
  {
    name: 'Basic',
    price: '3,999,000',
    description: 'Untuk website sederhana',
    features: [
      'Domain gratis 1 tahun',
      'Hosting premium 1 tahun',
      '5 halaman statis',
      'Mobile responsive',
      'SSL certificate',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '7,999,000',
    description: 'Untuk bisnis berkembang',
    featured: true,
    features: [
      'Semua dari Basic +',
      'CMS (Content Management)',
      'Galeri produk unlimited',
      'Newsletter system',
      'SEO optimization',
      'Speed optimization',
      'Phone & email support',
      'Analytics integration',
    ],
  },
  {
    name: 'Premium',
    price: '15,999,000',
    description: 'Untuk enterprise',
    features: [
      'Semua dari Professional +',
      'Custom functionality',
      'E-commerce integration',
      'Payment gateway setup',
      'Advanced security',
      'Database optimization',
      'Priority 24/7 support',
      'Training & consultation',
    ],
  },
];

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Paket <span className="gradient-text">Harga</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Pilih paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-700 ${
                isVisible
                  ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                  : 'opacity-0'
              } ${
                plan.featured
                  ? 'glass-effect border-2 border-accent scale-105 md:scale-110 shadow-2xl shadow-accent/20'
                  : 'glass-effect border border-accent/20 card-hover'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="p-6 sm:p-8">
                {/* Plan Name & Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">
                    Rp {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    (one-time)
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                    plan.featured
                      ? 'btn-glow'
                      : 'border border-accent/30 text-accent hover:bg-accent/5'
                  }`}
                >
                  Pesan Sekarang
                </button>

                {/* Features List */}
                <div className="space-y-3 border-t border-border/30 pt-6">
                  {plan.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect rounded-xl p-6 sm:p-8 border border-accent/20 text-center">
          <p className="text-muted-foreground mb-4">
            Semua paket mencakup free konsultasi dan support after launch. Ada paket custom sesuai kebutuhan Anda?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-accent font-semibold hover:bg-accent/5 transition-all duration-300"
          >
            Hubungi Kami untuk Custom Package
          </a>
        </div>
      </div>
    </section>
  );
}
