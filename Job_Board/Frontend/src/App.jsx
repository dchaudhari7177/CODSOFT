import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import EmployerLogin from './components/auth/EmployerLogin';
import JobSeekerLogin from './components/auth/JobSeekerLogin';
import EmployerSignup from './components/auth/EmployerSignup';
import JobSeekerSignup from './components/auth/JobSeekerSignup';
import JobList from './components/job/JobList';
import JobDetail from './components/job/JobDetail';
import JobForm from './components/job/JobForm';
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employer-login" element={<EmployerLogin />} />
            <Route path="/jobseeker-login" element={<JobSeekerLogin />} />
            <Route path="/employer-signup" element={<EmployerSignup />} />
            <Route path="/jobseeker-signup" element={<JobSeekerSignup />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
            <Route path="/post-job" element={<JobForm />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
