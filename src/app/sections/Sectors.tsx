import { AnimatedSection } from '../components/shared/AnimatedSection';
import { motion } from 'framer-motion';
import { FaCar, FaHospital } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { MdFastfood, MdDevices } from 'react-icons/md';
import { HiSignal } from 'react-icons/hi2';

export const Sectors = () => {
  const sectors = [
    {
      name: 'Automobile',
      icon: FaCar,
      description: 'Digital solutions for automotive retail and dealership management'
    },
    {
      name: 'Banking & Finance',
      icon: BsBank2,
      description: 'Risk management and fraud detection systems'
    },
    {
      name: 'Food & Beverages',
      icon: MdFastfood,
      description: 'Digital marketing and analytics solutions'
    },
    {
      name: 'Healthcare',
      icon: FaHospital,
      description: 'Data management and patient experience platforms'
    },
    {
      name: 'Electronic Retail',
      icon: MdDevices,
      description: 'Omnichannel retail solutions and analytics'
    },
    {
      name: 'Telecom',
      icon: HiSignal,
      description: 'Customer experience and service optimization'
    }
  ];

  return (
    <section className="section-alt w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8 text-center">Industry Experience</h2>
          <p className="text-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Delivering innovative solutions across diverse sectors
          </p>
        </AnimatedSection>
      </div>
      
      {/* Full-width container for scrolling content */}
      <div className="relative h-[300px] overflow-hidden w-full">
        <motion.div
          animate={{
            x: [0, -1728], // Width of 6 cards (288px * 6)
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 absolute left-1/2"
        >
          {[...sectors, ...sectors].map((sector, index) => (
            <motion.div
              key={`${sector.name}-${index}`}
              className="w-72 flex-shrink-0 bg-foreground/5 rounded-xl p-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 mb-4 text-primary flex items-center justify-center">
                <sector.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
              <p className="text-foreground/70 text-sm">{sector.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 