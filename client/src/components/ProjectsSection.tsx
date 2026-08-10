import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'Downtown Office Complex',
      type: 'Commercial',
      location: 'New York, NY',
      scope: 'Structural steel detailing for 25-story office building',
      category: 'commercial',
    },
    {
      id: 2,
      name: 'Industrial Manufacturing Facility',
      type: 'Industrial',
      location: 'Houston, TX',
      scope: 'Complete steel detailing and BIM coordination',
      category: 'industrial',
    },
    {
      id: 3,
      name: 'Regional Distribution Center',
      type: 'Warehouse',
      location: 'Chicago, IL',
      scope: 'Steel frame design and fabrication drawings',
      category: 'industrial',
    },
    {
      id: 4,
      name: 'Medical Research Building',
      type: 'Structural',
      location: 'Boston, MA',
      scope: 'Complex structural steel coordination',
      category: 'structural',
    },
    {
      id: 5,
      name: 'Mixed-Use Development',
      type: 'Commercial',
      location: 'Los Angeles, CA',
      scope: 'Multi-phase steel detailing project',
      category: 'commercial',
    },
    {
      id: 6,
      name: 'Bridge Infrastructure Project',
      type: 'Structural',
      location: 'Seattle, WA',
      scope: 'Steel bridge detailing and connection design',
      category: 'structural',
    },
  ];

  const filters = ['all', 'commercial', 'industrial', 'structural'];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-spacing bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our completed structural steel detailing projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'border-gray-300 text-foreground hover:border-primary'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
                  🏢
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{project.location}</p>

                <p className="text-sm text-foreground mb-4">{project.scope}</p>

                <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
