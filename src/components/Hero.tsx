import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  // Beginner Note: functional component usually starts with hooks or helper functions
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      // Smooth scrolling is a nice touch for user experience
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // "min-h-screen" makes this section take up at least the full height of the viewing window
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Helper Note: 'motion.div' is from framer-motion library for animations */}
        <motion.div
          initial={{ opacity: 0 }}      // Starting state
          animate={{ opacity: 1 }}      // Ending state
          transition={{ duration: 0.5 }} // How long the animation takes
          className="font-mono text-primary mb-4"
        >
          Hi, my name is
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
        >
          Krishan Kumar Singh.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"
        >
          Full-stack developer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground max-w-xl text-lg mb-8"
        >
          Full-stack developer skilled in <span className="text-primary">Java, Node.js, React</span> and <span className="text-primary">MongoDB</span> with hands-on experience building real-world applications.
        </motion.p>

        {/* Buttons section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a href="/Resume.pdf" target="_blank" className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-6"
        >
          <a
            href="https://github.com/Krishan131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/krishan-kumar-singh-07352224a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:krishannn67@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Floating arrow animation at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="text-muted-foreground hover:text-primary transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
