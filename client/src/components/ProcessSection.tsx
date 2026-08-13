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
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <div className="h-1 w-14 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.05em] text-slate-900">Our Process</h2>
          <p className="text-lg md:text-[1.55rem] text-slate-700 max-w-3xl mx-auto mt-5 leading-relaxed">
            A structured approach to delivering precision steel detailing and engineering solutions.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[90px] h-px bg-slate-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-center mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] border-4 border-white relative z-10">
                      {step.number}
                    </div>
                  </div>

                  <div className="text-center px-4">
                    <h3 className="font-black text-2xl text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative pl-9">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200"></div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-9 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md border-4 border-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
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
