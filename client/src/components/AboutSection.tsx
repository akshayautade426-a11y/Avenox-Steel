import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Structural Steel Detailing',
    '3D Modeling & Visualization',
    'Shop Drawings',
    'Erection Drawings',
    'Connection Design',
    'Engineering Coordination',
    'BIM Coordination',
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_1fr] gap-14 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="aspect-[1.22/1] w-full max-w-[620px] overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/precision.jpg"
                alt="Structural engineering precision"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-xl bg-primary/10 -z-10"></div>
          </div>

          {/* Right: Content */}
          <div className="max-w-[560px] lg:pl-2">
            <div className="h-1 w-14 bg-primary rounded-full mb-6"></div>

            <h2 className="text-4xl md:text-[3.2rem] font-black tracking-[-0.05em] text-slate-900 mb-6 leading-[1.05]">
              Precision in Every Detail
            </h2>

            <p className="text-lg md:text-[1.15rem] text-slate-700 mb-5 leading-[1.7]">
              AVENOX STEEL SERVICES LLC is committed to delivering professional steel detailing and engineering services with a focus on accuracy, constructability, efficiency, and timely project delivery.
            </p>

            <p className="text-base md:text-[1.05rem] text-slate-600 mb-8 leading-[1.7]">
              Our team combines technical expertise with modern digital workflows to ensure every project meets the highest standards of quality and precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
