import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-up');

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container">
        <section id="about" className="fade-in-up">
          <AboutMe />
        </section>
        <section id="experience" className="fade-in-up">
          <Experience />
        </section>
        <section id="skills" className="fade-in-up">
          <Skills />
        </section>
        <section id="projects" className="fade-in-up">
          <Projects />
        </section>
        <section id="contact" className="fade-in-up">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
