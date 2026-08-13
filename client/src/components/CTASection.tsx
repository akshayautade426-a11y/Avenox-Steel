import { Button } from '@/components/ui/button';

export default function CTASection() {
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
    <section className="section-spacing bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        )`
      }}></div>

      <div className="container relative z-10 text-center">
        {/* Accent Line */}
        <div className="flex justify-center mb-6">
          <div className="h-1 w-12 bg-white rounded-full"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Have a Steel Project in Mind?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let's discuss your project requirements and find the right detailing and engineering solution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleRequestQuote}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Request a Quote
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
