'use client';

import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const projects = [
  {
    id: 1,
    title: 'CV Clothing Store',
    category: 'E-Commerce',
    image: '🛍️',
    description: 'Platform e-commerce untuk toko pakaian online dengan payment gateway terintegrasi',
  },
  {
    id: 2,
    title: 'Medtech Solutions',
    category: 'Healthcare',
    image: '🏥',
    description: 'Aplikasi manajemen klinik dengan sistem appointment online dan rekam medis digital',
  },
  {
    id: 3,
    title: 'Edutrack Academy',
    category: 'Education',
    image: '📚',
    description: 'Platform pembelajaran online dengan fitur live class dan progress tracking',
  },
  {
    id: 4,
    title: 'PropertyPro Realtor',
    category: 'Real Estate',
    image: '🏘️',
    description: 'Portal properti dengan virtual tour 360 dan CRM terintegrasi untuk agen',
  },
];

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Proyek <span className="gradient-text">Terbaru</span> Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Lihat portfolio kami yang menampilkan berbagai proyek sukses dari klien-klien terpercaya
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-effect rounded-xl overflow-hidden card-hover group border border-accent/20 transition-all duration-700 ${
                isVisible
                  ? 'animate-in fade-in slide-in-from-bottom-4 opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center overflow-hidden">
                <div className="text-6xl sm:text-7xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-accent font-semibold hover:bg-accent/5 transition-all duration-300"
          >
            Lihat Semua Proyek
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
