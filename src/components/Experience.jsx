import React, { useEffect, useState } from 'react';
import { fetchWorkExperience } from '../utils/api';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    fetchWorkExperience()
      .then(data => setWorkExperience(data))
      .catch(error => console.error("Error fetching experience:", error));
  }, []);

  return (
    <div id="experience" className="py-12 text-center">
      <h2 className="text-3xl font-bold">Werkervaring</h2>
      <VerticalTimeline>
        {workExperience.map((job) => (
          <VerticalTimelineElement
            key={job.id}
            date={job.period}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
          >
            <h3 className="text-xl font-semibold">{job.position}</h3>
            <h4 className="text-gray-500">{job.company}</h4>
            <p>{job.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
