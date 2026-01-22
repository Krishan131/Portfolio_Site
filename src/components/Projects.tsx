import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'LinkUp',
    description: 'Activity first Social Platform with real-time chat and swiping features. Implemented secure authentication, dynamic dashboards, and user profiles.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Krishan131',
    live: null,
    featured: true,
  },
  {
    title: 'MedX',
    description: 'ERP & Retail Support System. Developed ERP modules for inventory, billing, and GST invoice generation. Integrated Google Authentication and automated WhatsApp invoice sharing.',
    tech: ['React.js', 'Node.js', 'SQLite', 'Tailwind CSS'],
    github: 'https://github.com/Krishan131',
    live: null,
    featured: true,
  },
  {
    title: 'Meal Explorer',
    description: 'Recipe Discovery App. Developed a dynamic SPA with country-based meal browsing and instant filtering. Implemented structured API fetching.',
    tech: ['React.js', 'MealDB API'],
    github: 'https://github.com/Krishan131',
    live: null,
    featured: true,
  },
  {
    title: 'Upcoming Project',
    description: 'Something exciting is being built! Stay tuned for updates on my latest full-stack application.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: null,
    live: null,
    featured: false,
  },
];

const FeaturedProject = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-lg p-6 md:p-8 card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <Folder className="w-10 h-10 text-primary" />
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
        <a href={project.github || project.live || '#'} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="skill-tag text-xs">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <h3 className="font-mono text-xl text-center text-foreground mb-8">
                More Projects in the Works...
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <FeaturedProject key={project.title} project={project} index={index} />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
