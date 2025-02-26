import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const About = () => {
  const personalPassions = [
    { title: 'Bikes', icon: '🏍️', description: 'Exploring the world on two wheels' },
    { title: 'Travel', icon: '✈️', description: 'Discovering new cultures and places' },
    { title: 'Food', icon: '🍳', description: 'Experiencing global cuisines' }
  ];

  const professionalPassions = [
    { title: 'Product Strategy', icon: '🎯', description: 'Building impactful solutions' },
    { title: 'Team Leadership', icon: '👥', description: 'Fostering growth and innovation' },
    { title: 'Innovation', icon: '💡', description: 'Driving creative solutions' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section-alt w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="py-20">
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            {/* Left Side - Personal Passions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {personalPassions.map((passion) => (
                <motion.div
                  key={passion.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 bg-foreground/5 p-6 rounded-xl hover:bg-foreground/10 transition-all transform hover:-translate-x-2"
                >
                  <div className="bg-primary/10 p-4 rounded-full">
                    <span className="text-4xl">{passion.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{passion.title}</h3>
                    <p className="text-foreground/70">{passion.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center - Profile Image */}
            <div className="relative px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-[400px] mx-auto"
                style={{ paddingBottom: '150%' }} // Adjust this value based on your image aspect ratio
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }} 
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute w-[90%] h-[90%] border-2 border-dashed border-primary/30 rounded-[30%]"
                  />
                  <motion.div 
                    animate={{ 
                      rotate: -360,
                      scale: [1.1, 1, 1.1],
                    }} 
                    transition={{ 
                      duration: 15,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute w-[80%] h-[80%] border-2 border-dashed border-primary/20 rounded-[25%]"
                  />
                </div>
                
                {/* Image container */}
                <div className="absolute inset-[10%] overflow-hidden rounded-[20%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent animate-pulse" />
                  <Image
                    src="/dp_image.jpg"
                    alt="Profile Picture"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Side - Professional Passions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {professionalPassions.map((passion) => (
                <motion.div
                  key={passion.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 bg-foreground/5 p-6 rounded-xl hover:bg-foreground/10 transition-all transform hover:translate-x-2"
                >
                  <div className="bg-primary/10 p-4 rounded-full">
                    <span className="text-4xl">{passion.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{passion.title}</h3>
                    <p className="text-foreground/70">{passion.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}; 