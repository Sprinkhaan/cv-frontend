import React, { useEffect, useState } from 'react';
import { fetchPersonalInfo } from '../utils/api';

const Contact = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    fetchPersonalInfo()
      .then(data => setPersonalInfo(data[0]))
      .catch(error => console.error("Error fetching contact info:", error));
  }, []);

  if (!personalInfo) return <p className="text-center text-gray-500">Laden...</p>;

  return (
    <div id="contact" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-lg mt-4">Neem contact met mij op via:</p>
      <div className="mt-4 space-y-2">
        <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`} className="text-blue-500">{personalInfo.email}</a></p>
        <p className="text-gray-700"><strong>Telefoon:</strong> <a href={`tel:${personalInfo.phone}`} className="text-blue-500">{personalInfo.phone}</a></p>
        <p className="text-gray-700"><strong>LinkedIn:</strong> <a href={personalInfo.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">Bekijk profiel</a></p>
      </div>
    </div>
  );
};

export default Contact;
