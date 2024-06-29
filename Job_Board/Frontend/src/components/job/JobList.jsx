import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs');
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {error && <p>{error}</p>}
      <ul>
        {Array.isArray(jobs) &&
          jobs.map((job) => (
            <li key={job._id}>
              {job.title}
              {job.description}
              {job.date}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default JobList;
