'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { AnimatedSection } from '../components/shared/AnimatedSection';

export const Contact = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/mrrmishra',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mrrmishra/',
      label: 'LinkedIn'
    },
    {
      icon: FaInstagram,
      url: '#',
      label: 'Instagram'
    },
    {
      icon: FaEnvelope,
      url: 'mailto:mrrmishra12@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section className="section-alt w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="py-20">
          <h2 className="text-4xl font-bold mb-8 text-center">Let&apos;s Connect</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                  <social.icon size={24} />
                </div>
                <span className="text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="mailto:mrrmishra12@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Send Email
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}; 