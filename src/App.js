import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <motion.main
      className="text-gray-400 bg-gray-900 body-font"
      initial="hidden"
      animate="show"
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </motion.main>
  );
}
