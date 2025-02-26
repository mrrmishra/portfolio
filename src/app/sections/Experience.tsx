import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const experiences = [
    {
      title: 'Team Lead – Data Management',
      company: 'ConvergenSEE India',
      period: 'Jan 2023 – Dec 2024',
      description: 'Led cross-functional teams in developing innovative data solutions, including GPT-powered sentiment analysis tools and interactive Power BI dashboards for 15+ brands. Spearheaded the development of comprehensive digital marketing tools and data repositories.',
      technologies: ['Power BI', 'GPT Models', 'SQL', 'AWS', 'API Integration'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: '#2563EB'
    },
    {
      title: 'Data Analyst and Coordinator',
      company: 'ConvergenSEE India',
      period: 'Feb 2021 – Jan 2023',
      description: 'Revolutionized data operations by implementing automated workflows, reducing reporting time by 65%. Developed customized dashboards and scalable reporting solutions for automotive and electronic retail industries.',
      technologies: ['Data Analytics', 'Excel Automation', 'Dashboard Design', 'Process Optimization'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: '#10B981'
    },
    {
      title: 'Sales Intern',
      company: 'Shapoorji Pallonji Real Estate',
      period: 'Apr 2020 – Jun 2020',
      description: 'Drove strategic partner engagement for the Northern Lights Project, focusing on relationship building and lead generation through proactive outreach initiatives.',
      technologies: ['Sales Strategy', 'Partner Management', 'Lead Generation'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: '#8B5CF6'
    }
  ];

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional Journey
            </motion.h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="relative">
            {/* Animated Progress Line */}
            <motion.div 
              className="absolute left-[50%] top-0 w-1 h-full bg-foreground/10 rounded-full"
              style={{ 
                scaleY: scrollYProgress,
                transformOrigin: "top" 
              }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-full bg-primary rounded-full"
                style={{ 
                  height: progress,
                  transformOrigin: "top"
                }}
              />
            </motion.div>

            {/* Experience Items */}
            <div className="relative space-y-24">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content Card */}
                  <motion.div 
                    className={`w-[calc(50%-3rem)] bg-foreground/5 rounded-xl p-6 backdrop-blur-sm
                      ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                    <p className="text-foreground/80 mb-1">{exp.company}</p>
                    <p className="text-sm text-foreground/60 mb-3">{exp.period}</p>
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                          whileHover={{ scale: 1.1 }}
                          style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="relative w-24 flex items-center justify-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-background border-4 flex items-center justify-center"
                      style={{ 
                        borderColor: exp.color,
                        backgroundColor: `${exp.color}10`
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        backgroundColor: exp.color,
                        color: 'white'
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      transition={{
                        rotate: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        },
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      }}
                    >
                      <div className="text-current">
                        {exp.icon}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}; 