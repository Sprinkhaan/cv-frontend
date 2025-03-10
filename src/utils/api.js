const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchPersonalInfo = async () => {
  const response = await fetch(`${API_BASE_URL}/api/personal-info`);
  return response.json();
};

export const fetchProfileSummary = async () => {
  const response = await fetch(`${API_BASE_URL}/api/profile-summary/1`);
  return response.json();
};

export const fetchWorkExperience = async () => {
  const response = await fetch(`${API_BASE_URL}/api/experience/work-experience`);
  return response.json();
};

export const fetchEducation = async () => {
  const response = await fetch(`${API_BASE_URL}/api/experience/education`);
  return response.json();
};

export const fetchSkills = async () => {
  const response = await fetch(`${API_BASE_URL}/api/experience/skills`);
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  return response.json();
};
