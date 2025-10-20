import { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [user, setUser] = useState<any>(null);

  const sections: string[] = [
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

  // Load user on first render
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
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
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        user={user}
        onLoginClick={() => console.log('Login modal open')}
        onLogout={logout}
      />

      <main>
        <motion.div
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection onExploreClick={handleExploreClick} />
        </motion.div>

        <motion.div
          id="about"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <AboutSection />
        </motion.div>

        <motion.div
          id="academics"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <AcademicsSection />
        </motion.div>

        <motion.div
          id="events"
          initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <EventsSection />
        </motion.div>

        <motion.div
          id="results"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ResultsSection />
        </motion.div>

        <motion.div
          id="creativity"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <CreativitySection />
        </motion.div>

        <motion.div
          id="dashboard"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <DashboardSection />
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: ['easeOut'] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}

export default App;
