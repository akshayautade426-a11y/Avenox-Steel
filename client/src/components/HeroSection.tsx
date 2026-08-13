import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = () => {
    const subject = encodeURIComponent('Request for Steel Detailing / Estimating Quote');
    const body = encodeURIComponent(
      'Hello Avenox Steel Team,\n\n' +
        'I would like to request a quote for a steel detailing / estimating project.\n\n' +
        'Project Details:\n' +
        '- Project / Scope:\n' +
        '- Location:\n' +
        '- Timeline:\n' +
        '- Estimated Quantity / Material Requirements:\n' +
        '- Any other notes:\n\n' +
        'Please share pricing, scope, and the next steps.\n\n' +
        'Best regards,\n' +
        '[Your Name]\n' +
        '[Company Name]\n' +
        '[Phone Number]\n' +
        '[Email Address]'
    );

    window.location.href = `mailto:estimating@avenoxsteel.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Structural Engineering Hero Background */}
      <div
        className="hero-luxury-background"
        style={{
          backgroundImage: "url('/home-page-strucural-engineering.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container text-center text-white">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Accent Line */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black mb-6 leading-[0.68] tracking-[-0.08em]">
            <span className="block text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.16)] leading-[0.8]">Engineering Steel.</span>
            <span className="mt-5 block text-cyan-400 drop-shadow-[0_0_22px_rgba(34,211,238,0.5)] leading-[0.8]">Building Strength.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-[2rem] text-slate-100/95 mb-10 max-w-5xl mx-auto font-medium leading-[1.15] tracking-[-0.03em]">
            Precision-driven steel detailing and engineering solutions for complex structural projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-sky-500 text-slate-950 hover:bg-sky-400 px-8 py-3.5 text-lg font-bold shadow-[0_0_25px_rgba(14,165,233,0.45)]"
            >
              Explore Our Services
            </Button>
            <Button
              onClick={handleRequestQuote}
              variant="outline"
              className="border-2 border-sky-300 text-sky-100 hover:bg-sky-400/10 px-8 py-3.5 text-lg font-bold shadow-[0_0_18px_rgba(56,189,248,0.25)]"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
          <span className="text-white text-sm font-medium">Scroll to explore</span>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
