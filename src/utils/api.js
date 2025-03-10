export const fetchPersonalInfo = async () => {
  const response = await fetch('http://localhost:8081/api/personal-info');
  return response.json();
};

export const fetchProfileSummary = async () => {
  const response = await fetch('http://localhost:8081/api/profile-summary/1');
  return response.json();
};

export const fetchWorkExperience = async () => {
  const response = await fetch('http://localhost:8081/api/experience/work-experience');
  return response.json();
};

export const fetchEducation = async () => {
  const response = await fetch('http://localhost:8081/api/experience/education');
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch('http://localhost:8081/api/experience/skills');
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch('http://localhost:8081/api/projects');
  return response.json();
};
