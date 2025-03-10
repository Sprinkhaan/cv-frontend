import React, { useEffect, useState } from 'react';
import { fetchPersonalInfo } from '../utils/api';

const HeroSection = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    fetchPersonalInfo()
      .then(data => setPersonalInfo(data[0]))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (!personalInfo) return <p className="text-center text-gray-500">Laden...</p>;

  return (
    <div id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center px-6">
      <h1 className="text-5xl font-bold">{personalInfo.name}</h1>
      <p className="text-lg mt-3">{personalInfo.summary}</p>
      <a href={personalInfo.linkedin} className="mt-4 text-lg bg-white text-blue-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
        LinkedIn Profiel
      </a>
    </div>
  );
};

export default HeroSection;
