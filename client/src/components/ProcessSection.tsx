export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Project Understanding',
      description: 'We review project requirements, drawings, and specifications to understand scope.',
    },
    {
      number: '02',
      title: 'Structural Review',
      description: 'Detailed analysis of structural design and coordination with engineering team.',
    },
    {
      number: '03',
      title: '3D Modeling',
      description: 'Creation of comprehensive 3D structural steel models for visualization.',
    },
    {
      number: '04',
      title: 'Detailing & Documentation',
      description: 'Production of detailed shop drawings and fabrication documentation.',
    },
    {
      number: '05',
      title: 'Coordination & QC',
      description: 'Quality checks and coordination with all project stakeholders.',
    },
    {
      number: '06',
      title: 'Final Delivery',
      description: 'Complete project delivery with all documentation and support.',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to delivering precision steel detailing and engineering solutions.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-200"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 border-4 border-white">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-primary"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="absolute -left-8 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md"></div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
