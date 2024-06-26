import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        if (Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          setJobs([]); 
        }
      } catch (error) {
        console.error(error);
        setJobs([]); 
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="employer-dashboard">
      <h1 className="animated-title">Employer Dashboard</h1>
      <p className="dashboard-description">Manage your job postings here.</p>
      <div className="jobs-list">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job._id} className="job-card">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p>Applicants: {job.applicants.length}</p>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;
