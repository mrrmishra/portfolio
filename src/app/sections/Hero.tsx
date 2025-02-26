import { motion } from 'framer-motion';
import { Background3D } from '../components/Background3D';
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          Rishav Mishra
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-foreground/80"
        >
          Product & Project Manager
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 max-w-lg mx-auto text-foreground/60"
        >
          Driving innovation through strategic product development and 
          collaborative team leadership
        </motion.p>
      </div>
    </section>
  );
}; 