import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyAvenoxSection from '@/components/WhyAvenoxSection';
import QualitySection from '@/components/QualitySection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * AVENOX STEEL SERVICES LLC - Premium Corporate Website
 * 
 * Design Philosophy: Premium Industrial Minimalism
 * - Clean lines, precise spacing, organized hierarchy
 * - Steel gray, charcoal, and metallic tones
 * - Ample whitespace emphasizing quality
 * - Smooth, professional animations
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <WhyAvenoxSection />
        <QualitySection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
