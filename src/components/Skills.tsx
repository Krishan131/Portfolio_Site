import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Rust', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Linux', 'Vim', 'VS Code'],
  },
  {
    title: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Skills & Technologies</h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <h3 className="font-mono text-primary text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-primary">$</span> always learning something new...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
