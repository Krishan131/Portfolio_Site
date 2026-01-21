import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'CloudSync',
    description: 'A real-time collaborative document editor with WebSocket synchronization, conflict resolution, and offline support. Built with a custom CRDT implementation.',
    tech: ['React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/alexchen/cloudsync',
    live: 'https://cloudsync.demo.com',
    featured: true,
  },
  {
    title: 'ML Image Classifier',
    description: 'Deep learning model for classifying medical images with 94% accuracy. Includes a web interface for healthcare professionals to upload and analyze X-rays.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
    github: 'https://github.com/alexchen/ml-classifier',
    live: null,
    featured: true,
  },
  {
    title: 'DevFlow CLI',
    description: 'A command-line tool that automates common development workflows including Git operations, environment setup, and deployment pipelines.',
    tech: ['Rust', 'Shell', 'GitHub Actions'],
    github: 'https://github.com/alexchen/devflow',
    live: null,
    featured: true,
  },
  {
    title: 'Budget Tracker',
    description: 'Personal finance app with expense categorization, visual analytics, and budget alerts.',
    tech: ['React Native', 'Firebase', 'Chart.js'],
    github: 'https://github.com/alexchen/budget-tracker',
    live: null,
    featured: false,
  },
  {
    title: 'Algorithm Visualizer',
    description: 'Interactive visualizations for sorting, pathfinding, and graph algorithms for educational purposes.',
    tech: ['TypeScript', 'Canvas API', 'React'],
    github: 'https://github.com/alexchen/algo-viz',
    live: 'https://algo-viz.demo.com',
    featured: false,
  },
  {
    title: 'Smart Home Hub',
    description: 'IoT dashboard for controlling and monitoring smart home devices with voice commands.',
    tech: ['Vue.js', 'Python', 'MQTT', 'Raspberry Pi'],
    github: 'https://github.com/alexchen/smart-hub',
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

          <h3 className="font-mono text-xl text-center text-foreground mb-8">
            Other Noteworthy Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
