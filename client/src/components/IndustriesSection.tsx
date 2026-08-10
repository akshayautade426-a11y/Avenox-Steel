export default function IndustriesSection() {
  const industries = [
    {
      icon: '🏢',
      title: 'Commercial Construction',
      description: 'Office buildings, retail centers, and commercial complexes',
    },
    {
      icon: '🏭',
      title: 'Industrial Construction',
      description: 'Manufacturing facilities and industrial plants',
    },
    {
      icon: '📦',
      title: 'Warehousing & Logistics',
      description: 'Distribution centers and storage facilities',
    },
    {
      icon: '⚙️',
      title: 'Manufacturing',
      description: 'Production facilities and manufacturing plants',
    },
    {
      icon: '🌉',
      title: 'Infrastructure',
      description: 'Bridges, highways, and public infrastructure',
    },
    {
      icon: '🏘️',
      title: 'Residential & Mixed Use',
      description: 'Multi-family buildings and mixed-use developments',
    },
    {
      icon: '🏫',
      title: 'Institutional Buildings',
      description: 'Schools, hospitals, and government buildings',
    },
  ];

  return (
    <section id="industries" className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across diverse sectors and project types.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{industry.description}</p>

              {/* Accent line */}
              <div className="h-1 w-0 bg-primary rounded-full mt-4 group-hover:w-8 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
