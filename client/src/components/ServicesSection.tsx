import { Zap, Box, FileText, Wrench, Network, Calculator } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: 'Structural Steel Detailing',
      description: 'Detailed and accurate structural steel models and drawings prepared for fabrication and erection.',
    },
    {
      icon: Box,
      title: '3D Steel Modeling',
      description: 'Detailed 3D structural steel modeling for improved coordination and visualization.',
    },
    {
      icon: FileText,
      title: 'Shop Drawings',
      description: 'Fabrication-ready shop drawings with accurate dimensions, connections, and material information.',
    },
    {
      icon: Wrench,
      title: 'Erection Drawings',
      description: 'Clear erection drawings designed to support efficient and safe field installation.',
    },
    {
      icon: Network,
      title: 'Connection Detailing',
      description: 'Detailed structural steel connection design and detailing for practical fabrication and erection.',
    },
    {
      icon: Calculator,
      title: 'BIM Coordination',
      description: '3D coordination to identify clashes and improve communication between project disciplines.',
    },
  ];

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive steel detailing and engineering solutions tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] border border-gray-100 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Accent line on hover */}
                <div className="h-1 w-0 bg-primary rounded-full mt-4 group-hover:w-8 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Structural Design Support</h4>
              <p className="text-muted-foreground">
                Engineering and design support for structural steel projects, ensuring optimal solutions for complex challenges.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Estimation & Material Takeoff</h4>
              <p className="text-muted-foreground">
                Accurate quantity takeoffs and material information to support project planning and procurement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
