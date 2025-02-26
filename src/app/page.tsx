'use client';

import { motion } from 'framer-motion';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Navigation } from './ui/Navigation';
import { ThemeToggle } from './ui/ThemeToggle';
import { Skills } from './sections/Skills';
import { Awards } from './sections/Awards';
import { Sectors } from './sections/Sectors';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
          <Sectors />
          <Awards />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
} 