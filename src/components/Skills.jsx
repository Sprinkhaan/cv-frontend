import React, { useEffect, useState } from 'react';
import { fetchSkills } from '../utils/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills()
      .then(data => setSkills(data))
      .catch(error => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div id="skills" className="py-12 text-center">
      <h2 className="text-3xl font-bold">Vaardigheden</h2>
      <div className="max-w-3xl mx-auto mt-6">
        {skills.map(skill => {
          const levelPercentage = (skill.level.match(/★/g) || []).length * 20;
          return (
            <div key={skill.id} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full transition-all duration-500" style={{ width: `${levelPercentage}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
