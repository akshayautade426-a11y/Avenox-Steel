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
        <div className="mt-16 bg-white rounded-lg p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-muted-foreground">Quality Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
