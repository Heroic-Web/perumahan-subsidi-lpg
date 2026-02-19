'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 bg-card/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">Samara Residence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Perumahan subsidi terpercaya dengan harga terjangkau dan lokasi strategis untuk keluarga Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#property-types" className="text-muted-foreground hover:text-accent transition-colors">
                  Tipe Rumah
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-muted-foreground hover:text-accent transition-colors">
                  Fasilitas
                </a>
              </li>
              <li>
                <a href="#location" className="text-muted-foreground hover:text-accent transition-colors">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Penawaran</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#promo" className="text-muted-foreground hover:text-accent transition-colors">
                  Promo Spesial
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Konsultasi Gratis
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Site Visit
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Skema Pembayaran
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@samaraproperty.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@samaraproperty.com</span>
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Natar, Lampung Selatan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Samara Residence. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>


    </footer>
  );
}
