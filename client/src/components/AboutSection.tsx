import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Structural Steel Detailing',
    '3D Modeling & Visualization',
    'Shop Drawings',
    'Fabrication Drawings',
    'Erection Drawings',
    'Connection Detailing',
    'Engineering Coordination',
    'BIM Coordination',
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-gray-600 font-semibold">Structural Engineering</p>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Accent Line */}
            <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>

            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Precision in Every Detail
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              AVENOX STEEL SERVICES LLC is committed to delivering professional steel detailing and engineering services with a focus on accuracy, constructability, efficiency, and timely project delivery.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Our team combines technical expertise with modern digital workflows to ensure every project meets the highest standards of quality and precision.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
