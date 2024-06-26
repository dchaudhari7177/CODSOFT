import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`/api/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJob();
  }, [jobId]);

  return (
    <div>
      {job ? (
        <>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
