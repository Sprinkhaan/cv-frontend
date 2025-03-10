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
      <h2 className="text-3xl font-bold">Projecten</h2>
      {projects.length === 0 ? (
        <p className="text-gray-500 mt-4">Nog geen projecten toegevoegd.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {project.link && <a href={project.link} className="text-blue-500 mt-2 block">Bekijk project</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
