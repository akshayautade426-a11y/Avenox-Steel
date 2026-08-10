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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Luxury Steel Blueprint Animation */}
      <div className="hero-luxury-background">
        <svg
          className="luxury-svg"
          viewBox="0 0 1400 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="fineGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255, 255, 255, 0.03)"
                strokeWidth="1"
              />
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="rgba(56, 189, 248, 0.03)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="steelMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#fineGrid)" />

          <g className="beam-structure" stroke="url(#steelMetallic)" strokeWidth="1.5" strokeLinecap="round">
            <path className="beam-draw" d="M 200 600 L 200 150 L 1200 150 L 1200 600" />
            <path className="beam-draw" style={{ animationDelay: '1s' }} d="M 200 150 L 700 380 L 1200 150" />
            <path className="beam-draw" style={{ animationDelay: '2s' }} d="M 200 380 L 1200 380" />
            <path
              className="beam-draw"
              style={{ animationDelay: '2.5s' }}
              d="M 620 280 L 780 280 M 620 480 L 780 480 M 700 280 L 700 480"
              strokeWidth="2.5"
            />
            <path
              className="beam-draw"
              style={{ animationDelay: '3s' }}
              d="M 610 270 L 790 270 M 610 490 L 790 490"
              strokeWidth="1"
            />
          </g>

          <line className="laser-scan" x1="150" y1="380" x2="1250" y2="380" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />

          <circle cx="200" cy="150" className="glow-point" fill="#38bdf8" />
          <circle cx="1200" cy="150" className="glow-point" fill="#38bdf8" />
          <circle cx="700" cy="380" className="glow-point" fill="#f59e0b" style={{ animationDelay: '1s' }} />
          <circle cx="200" cy="600" className="glow-point" fill="#38bdf8" />
          <circle cx="1200" cy="600" className="glow-point" fill="#38bdf8" />
        </svg>
      </div>

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
          <div className="flex justify-center mb-6">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Engineering Steel.
            <br />
            <span className="text-primary">Building Strength.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Precision-driven steel detailing and engineering solutions for complex structural projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-lg"
            >
              Explore Our Services
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
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
