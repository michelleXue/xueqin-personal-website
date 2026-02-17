import { motion } from 'motion/react';
import type { KeyboardEvent } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

interface ProjectShowcaseProps {
  onProjectClick: (project: Project) => void;
}

export function ProjectShowcase({ onProjectClick }: ProjectShowcaseProps) {
  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    project: Project,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onProjectClick(project);
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Research Projects</h2>
          <p className="text-gray-600 mb-12">
            Tools and frameworks I&apos;m developing to advance software quality
            and accessibility
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onProjectClick(project)}
                onKeyDown={(event) => handleCardKeyDown(event, project)}
                role="button"
                tabIndex={0}
                aria-label={`Open project: ${project.title}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#ccd4e0')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
              >
                <div
                  className="relative h-48 overflow-hidden"
                  style={{ background: 'linear-gradient(to bottom right, #e6eaf0, #f0f2f5)' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Disseminated'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Active Development'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-semibold mb-3 transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#002663')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.overview}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ backgroundColor: '#e6eaf0', color: '#002663' }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
