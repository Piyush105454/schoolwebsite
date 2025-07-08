import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import AcademicsSection from './components/sections/AcademicsSection';
import EventsSection from './components/sections/EventsSection';
import ResultsSection from './components/sections/ResultsSection';
import CreativitySection from './components/sections/CreativitySection';
import DashboardSection from './components/sections/DashboardSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    'home',
    'about',
    'academics',
    'events',
    'results',
    'creativity',
    'dashboard',
    'contact'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExploreClick = () => {
    scrollToSection('about');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
      />
      
      <main>
        <motion.div 
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection onExploreClick={handleExploreClick} />
        </motion.div>

        <motion.div 
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>

        <motion.div 
          id="academics"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <AcademicsSection />
        </motion.div>

        <motion.div 
          id="events"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <EventsSection />
        </motion.div>

        <motion.div 
          id="results"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ResultsSection />
        </motion.div>

        <motion.div 
          id="creativity"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CreativitySection />
        </motion.div>

        <motion.div 
          id="dashboard"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DashboardSection />
        </motion.div>

        <motion.div 
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}

export default App;