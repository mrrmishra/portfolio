import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = [
    {
      title: 'Strategic Leadership',
      description: 'Client Engagement, Stakeholder Management, Strategic Planning',
      icon: '🎯'
    },
    {
      title: 'Product Excellence',
      description: 'Product Strategy, Solutions Design, Project Management',
      icon: '💫'
    },
    {
      title: 'Team Development',
      description: 'Team Leadership, Thought Leadership, Collaborative Growth',
      icon: '👥'
    },
    {
      title: 'Data Mastery',
      description: 'Data Analytics, Data Visualization, Insights Generation',
      icon: '📊'
    },
    {
      title: 'Project Management',
      description: 'Timeline Management, Resource Allocation, Risk Mitigation',
      icon: '📋'
    },
    {
      title: 'Marketing Strategy',
      description: 'Organic Growth, Influencer Campaigns, Brand Development',
      icon: '📢'
    },
    {
      title: 'Innovation Leadership',
      description: 'Fresh Ideas, Creative Solutions, Strategic Innovation',
      icon: '💡'
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous Learning, Adaptability, Professional Development',
      icon: '🚀'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Combining strategic vision with execution excellence to drive 
              transformative business outcomes and foster team success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 
                         backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex 
                              items-center justify-center text-4xl transform rotate-12 group-hover:rotate-0 
                              transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-foreground/70 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}; 