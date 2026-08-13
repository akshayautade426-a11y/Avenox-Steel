import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [, setLocation] = useLocation();

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

  const handleContactUs = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/precision.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>

      {/* Background Pattern - Geometric Design */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        )`
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Accent Line */}
          <div className="flex justify-center mb-8">
            <div className="h-1 w-16 bg-white rounded-full"></div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Have a Steel Project in Mind?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project requirements and find the right detailing and engineering solution for your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button - Request Quote */}
            <button
              onClick={handleRequestQuote}
              className="group relative px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button - Contact Us */}
            <button
              onClick={handleContactUs}
              className="group relative px-8 py-4 border-3 border-white text-white font-bold text-lg rounded-lg hover:bg-white/15 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Message */}
          <p className="mt-12 text-blue-100 text-sm md:text-base">
            Join hundreds of satisfied clients who trust Avenox Steel for precision engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
