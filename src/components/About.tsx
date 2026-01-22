import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Code2, Rocket } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Terminal, label: '3+ Years Coding' },
    { icon: Code2, label: '50+ GitHub Repos' },
    { icon: Rocket, label: '2 Internships' },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am a Full-stack developer skilled in <span className="text-primary">Java, Node.js, React, and MongoDB</span> with
                hands-on experience building real-world applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have strong fundamentals in <span className="text-primary">Object-Oriented Programming (OOP), backend logic, and authentication</span>.
                I pride myself on my ability to learn fast, work under pressure, and deliver complete solutions end-to-end.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm focused on deepening my knowledge in full-stack development and exploring new technologies
                to build efficient and scalable applications.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-secondary rounded-lg border-2 border-primary/20 overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-6xl font-mono font-bold text-primary/30">AC</div>
                </div>
                <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 text-center card-hover"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-mono text-sm text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
