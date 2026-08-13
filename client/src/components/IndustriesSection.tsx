import {
  Building2,
  Factory,
  Warehouse,
  Cog,
  Landmark,
  House,
  School,
} from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Office buildings, retail centers, and commercial complexes',
    },
    {
      icon: Factory,
      title: 'Industrial Construction',
      description: 'Manufacturing facilities and industrial plants',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Logistics',
      description: 'Distribution centers and storage facilities',
    },
    {
      icon: Cog,
      title: 'Manufacturing',
      description: 'Production facilities and manufacturing plants',
    },
    {
      icon: Landmark,
      title: 'Infrastructure',
      description: 'Bridges, highways, and public infrastructure',
    },
    {
      icon: House,
      title: 'Residential & Mixed Use',
      description: 'Multi-family buildings and mixed-use developments',
    },
    {
      icon: School,
      title: 'Institutional Buildings',
      description: 'Schools, hospitals, and government buildings',
    },
  ];

  return (
    <section id="industries" className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across diverse sectors and project types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 hover:bg-white"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/8 text-primary shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Icon className="h-8 w-8" strokeWidth={2.1} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>

                <div className="h-1 w-0 bg-primary rounded-full mt-4 group-hover:w-8 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
