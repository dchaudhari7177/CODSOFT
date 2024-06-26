import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobSeekerDashboard.css';

const JobSeekerDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/applications');
        if (Array.isArray(response.data)) {
          setApplications(response.data);
        } else {
          setApplications([]); 
        }
      } catch (error) {
        console.error(error);
        setApplications([]); 
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="jobseeker-dashboard">
      <h1 className="animated-title">Job Seeker Dashboard</h1>
      <p className="dashboard-description">View and manage your job applications here.</p>
      <div className="applications-list">
        {applications.length > 0 ? (
          applications.map(application => (
            <div key={application._id} className="application-card">
              <h2>{application.jobTitle}</h2>
              <p>{application.companyName}</p>
              <p>Status: {application.status}</p>
            </div>
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
