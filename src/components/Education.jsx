import React, { useEffect, useState } from 'react';
import { fetchEducation } from '../utils/api';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetchEducation()
      .then(data => setEducation(data))
      .catch(error => console.error("Error fetching education:", error));
  }, []);

  return (
    <div id="education" className="py-12 bg-gray-50 fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Onderwijs</h2>
      <div className="max-w-3xl mx-auto">
        {education.map(edu => (
          <div key={edu.id} className="bg-white shadow-md p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-gray-600 mt-2">{edu.degree}</p>
            <p className="text-gray-500 text-sm mt-1">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;