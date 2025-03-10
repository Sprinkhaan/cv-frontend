import React, { useEffect, useState } from 'react';
import { fetchProfileSummary } from '../utils/api';

const AboutMe = () => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetchProfileSummary()
      .then(data => setSummary(data.summary))
      .catch(error => console.error("Error fetching summary:", error));
  }, []);

  const summaryParagraphs = summary ? summary.split('\n').map((paragraph, index) => (
    <p key={index} className="text-lg text-gray-700 mb-4">{paragraph}</p>
  )) : <p className="text-lg text-gray-700">Laden...</p>;

  return (
    <div id="about" className="py-12 bg-gray-100 fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Over Mij</h2>
      <div className="max-w-3xl mx-auto px-4 text-left">
        {summaryParagraphs}
      </div>
    </div>
  );
};

export default AboutMe;