import { Award, Zap, Cpu, Shield, Users, TrendingUp } from 'lucide-react';

export default function WhyAvenoxSection() {
  const reasons = [
    {
      icon: Award,
      title: 'Precision',
      description: 'Accurate detailing and documentation designed to reduce errors and rework.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent communication and dependable project delivery on schedule.',
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Modern 3D modeling and BIM-based workflows for superior coordination.',
    },
    {
      icon: Zap,
      title: 'Quality',
      description: 'Every project goes through structured quality checks and verification.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Close coordination with engineers, fabricators, contractors, and teams.',
    },
    {
      icon: TrendingUp,
      title: 'Efficiency',
      description: 'Workflows designed to reduce rework and improve project efficiency.',
    },
  ];

  return (
    <section id="why-avenox" className="section-spacing bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Avenox?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with modern workflows to deliver exceptional results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-primary/10 p-8 text-center shadow-sm md:p-10">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Quality Note
            </div>
            <div className="text-5xl font-black tracking-tight text-primary md:text-7xl">99.8%</div>
            <p className="mt-3 text-base font-medium text-muted-foreground md:text-lg">Quality Accuracy Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
