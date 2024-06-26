import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Job Board</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/post-job">Post Job</Link>
        <Link to="/employer-dashboard">Employer Dashboard</Link>
        <Link to="/jobseeker-dashboard">Job Seeker Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
