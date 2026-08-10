import { CheckCircle } from 'lucide-react';

export default function QualitySection() {
  const features = [
    'Drawing Accuracy',
    'Model Coordination',
    'Constructability',
    'Quality Control',
    'Revision Management',
    'Fabrication Readiness',
    'Project Coordination',
    'Documentation Excellence',
  ];

  return (
    <section className="section-spacing bg-foreground text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        )`
      }}></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Accent Line */}
            <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>

            <h2 className="text-4xl font-bold mb-4">
              Built Around Accuracy.
              <br />
              Designed for Performance.
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Every project we undertake is built on a foundation of precision and performance. We understand that in structural steel engineering, accuracy isn't just a goal—it's a requirement.
            </p>

            <p className="text-base text-gray-400 mb-8">
              Our quality-focused workflows ensure that every drawing, model, and specification meets the highest standards of accuracy and constructability.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📐</div>
                  <p className="text-gray-400 font-semibold">Precision Engineering</p>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
