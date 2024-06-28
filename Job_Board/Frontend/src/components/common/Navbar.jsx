import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const renderAuthLinks = () => {
    if (isAuthenticated) {
      return (
        <>
          <Link to="/jobs" className={location.pathname === '/jobs' ? 'active-link' : ''}>Jobs</Link>
          <Link to="/post-job" className={location.pathname === '/post-job' ? 'active-link' : ''}>Post Job</Link>
          <Link to="/employer-dashboard" className={location.pathname === '/employer-dashboard' ? 'active-link' : ''}>Employer Dashboard</Link>
          <Link to="/jobseeker-dashboard" className={location.pathname === '/jobseeker-dashboard' ? 'active-link' : ''}>Job Seeker Dashboard</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className={location.pathname === '/login' ? 'active-link' : ''}>Login</Link>
          <Link to="/signup" className={location.pathname === '/signup' ? 'active-link' : ''}>Signup</Link>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Job Board</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
        {renderAuthLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
