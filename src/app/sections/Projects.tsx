import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: 'Digital Marketing Integration Hub',
      description: 'Developed and deployed a comprehensive digital marketing tool integrating multi-platform data. Streamlined campaign management, ticketing, budgeting, and reporting for enterprise-to-local brands on a unified interface.',
      technologies: ['System Architecture', 'API Integration', 'Workflow Optimization', 'Enterprise Solutions'],
      image: '/marketing-hub.jpg',
      link: '#',
      category: 'Product Management'
    },
    {
      title: 'Banking Fraud Management System',
      description: 'Led the design and implementation of an ORM and online fraud management solution for a leading private bank in India. Integrated customer feedback analysis with advanced security protocols.',
      technologies: ['Security Systems', 'Risk Management', 'Customer Analytics', 'Banking Solutions'],
      image: '/fraud-management.jpg',
      link: '#',
      category: 'Analytics'
    },
    {
      title: 'Enterprise Data Repository',
      description: 'Architected a centralized data repository with robust backend capabilities, featuring SQL scripting, API integration, and dynamic filtering. Deployed on AWS using RDS and EC2 for scalable performance.',
      technologies: ['AWS', 'SQL', 'ETL Pipeline', 'Cloud Architecture'],
      image: '/data-repository.jpg',
      link: '#',
      category: 'Research'
    }
  ];

  return (
    <section className="section-alt w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="py-20">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Showcasing my journey in product management, strategic development, and market analysis
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-foreground/5 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-primary/10 relative">
                  {/* You can add project images here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">{getProjectIcon(project.category)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'Product Management':
      return '🚀';
    case 'Analytics':
      return '📊';
    case 'Research':
      return '🔍';
    default:
      return '💡';
  }
}; 