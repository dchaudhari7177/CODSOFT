import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Home.css';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      {isAuthenticated ? (
        <>
          <header className="home-header">
            <h1 className="animated-title">Welcome to the Job Board</h1>
            <p className="home-description">Find your dream job or post job opportunities.</p>
          </header>
          <section className="home-info">
            <div className="info-card">
              <h2>For Job Seekers</h2>
              <p>Browse job listings and apply to positions that match your skills and interests. Stay updated with the latest job openings in your field.</p>
            </div>
            <div className="info-card">
              <h2>For Employers</h2>
              <p>Post job opportunities and manage applications from potential candidates. Find the best talent to join your team.</p>
            </div>
          </section>
        </>
      ) : (
        <div className="home-login-signup">
          <h1 className="animated-title">Welcome to the Job Board</h1>
          <p>Please log in or sign up to access more features.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
