import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion } from 'framer-motion';

export const Awards = () => {
  const awards = [
    {
      title: 'Excellence in Innovation',
      organization: 'ConvergenSEE India',
      year: '2024',
      icon: '🏆',
      description: 'Recognized for developing innovative data solutions and GPT-powered tools'
    },
    {
      title: 'Top Performer Award',
      organization: 'ConvergenSEE India',
      year: '2023',
      icon: '🌟',
      description: 'Awarded for exceptional leadership and project delivery excellence'
    },
    {
      title: 'Process Optimization Champion',
      organization: 'ConvergenSEE India',
      year: '2022',
      icon: '🎯',
      description: 'Achieved 65% reduction in reporting time through workflow automation'
    }
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all"
              >
                <div className="text-6xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-primary font-medium mb-1">{award.organization}</p>
                <p className="text-sm text-foreground/60 mb-3">{award.year}</p>
                <p className="text-foreground/80 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}; 