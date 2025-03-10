import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-center space-x-6 py-4">
        {['Hero', 'Over Mij', 'Ervaring', 'Vaardigheden', 'Projecten', 'Contact'].map((label, index) => (
          <a
            key={index}
            href={`#${['hero', 'about', 'experience', 'skills', 'projects', 'contact'][index]}`}
            className={`transition-colors duration-300 text-lg font-semibold ${
              activeSection === ['hero', 'about', 'experience', 'skills', 'projects', 'contact'][index] ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-700 hover:text-blue-500'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
