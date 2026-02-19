import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { PropertyTypes } from '@/components/property-types';
import { Facilities } from '@/components/facilities';
import { Location } from '@/components/location';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { PromoSection } from '@/components/promo-section';
import { LeadForm } from '@/components/lead-form';
import { StickyWhatsAppButton } from '@/components/sticky-whatsapp-button';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <PropertyTypes />
      <Facilities />
      <Location />
      <WhyChooseUs />
      <Testimonials />
      <PromoSection />
      <LeadForm />
      <StickyWhatsAppButton />
      <Footer />
    </main>
  );
}
