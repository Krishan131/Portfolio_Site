import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const educationData = {
  university: 'Stanford University',
  degree: 'B.S. Computer Science',
  duration: '2022 - 2026 (Expected)',
  gpa: '3.9/4.0',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Machine Learning',
    'Distributed Systems',
    'Computer Networks',
    'Database Systems',
    'Operating Systems',
    'Software Engineering',
    'Artificial Intelligence',
  ],
  achievements: [
    "Dean's List - All Quarters",
    'CS Teaching Assistant',
    'Hackathon Winner - TreeHacks 2024',
    'Undergraduate Research Assistant',
  ],
};

const experience = [
  {
    company: 'Google',
    role: 'Software Engineering Intern',
    duration: 'Summer 2024',
    description: 'Worked on the Cloud Platform team, improving infrastructure tooling and reducing deployment time by 40%.',
  },
  {
    company: 'Stripe',
    role: 'Software Engineering Intern',
    duration: 'Summer 2023',
    description: 'Built developer tools for the API team, contributing to the Stripe CLI and SDK improvements.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Education & Experience</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-bold text-foreground">{educationData.university}</h3>
                  <p className="text-primary font-mono text-sm">{educationData.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {educationData.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Award size={14} />
                  GPA: {educationData.gpa}
                </span>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                  <BookOpen size={14} />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.relevantCourses.slice(0, 6).map((course) => (
                    <span key={course} className="skill-tag text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Achievements
              </h3>

              <ul className="space-y-3">
                {educationData.achievements.map((achievement, index) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-0.5">0{index + 1}.</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <h3 className="font-mono text-xl text-foreground mb-6">Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 card-hover relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-mono">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm">{exp.duration}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
