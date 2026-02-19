'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function StickyWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '6281234567890';
    const message = encodeURIComponent(
      'Halo Samara Residence, saya tertarik dengan program subsidi rumah Anda. Bisakah saya mendapatkan informasi lebih lanjut?'
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4">
          <button
            onClick={handleWhatsAppClick}
            className="group relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
            title="Chat WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Chat dengan kami
            </div>

            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-green-500/50 dark:bg-green-600/50 animate-pulse"></div>
          </button>
        </div>
      )}
    </>
  );
}
