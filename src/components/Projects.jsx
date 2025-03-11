import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(error => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div id="projects" className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Projecten</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500 mt-4">Nog geen projecten toegevoegd.</p>
      ) : (
        <div className="project-grid">
          {projects.map(project => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack"><strong>Technologieën:</strong> {project.technologies}</p>
              <span className="view-project">Bekijk project →</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
