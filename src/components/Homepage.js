import React from 'react';

import '../style/Homepage.css'
const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1 className="hero-title">Digital Recruitment Solution</h1>
        <p className="hero-description">Streamline your hiring process for MNCs</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features-section">
        <div className="feature">
          <i className="fas fa-search feature-icon"></i>
          <h2 className="feature-title">Efficient Candidate Search</h2>
          <p className="feature-description">Find qualified candidates based on location and job roles with our advanced search functionality.</p>
        </div>

        <div className="feature">
          <i className="fas fa-file-alt feature-icon"></i>
          <h2 className="feature-title">Seamless Application Management</h2>
          <p className="feature-description">Manage candidate applications, review resumes, and track the hiring process from a centralized platform.</p>
        </div>

        <div className="feature">
          <i className="fas fa-calendar-check feature-icon"></i>
          <h2 className="feature-title">Automated Scheduling</h2>
          <p className="feature-description">Schedule interviews and send automated notifications to candidates and hiring managers.</p>
        </div>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Benefits of Our Recruitment Solution</h2>

        <div className="benefits">
          <div className="benefit">
            <i className="fas fa-clock benefit-icon"></i>
            <h2 className="feature-title">Time Efficient</h2>
            <p className="benefit-description">Save time and resources with a streamlined hiring process.</p>
          </div>

          <div className="benefit">
            <i className="fas fa-users benefit-icon"></i>
            <h2 className="feature-title">Qualified Candidates</h2>
            <p className="benefit-description">Access a pool of qualified candidates from multiple MNCs.</p>
          </div>

          <div className="benefit">
            <i className="fas fa-chart-line benefit-icon"></i>
            <h2 className="feature-title">Better Quality</h2>
            <p className="benefit-description">Improve the quality of hires and reduce time-to-fill positions.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Homepage;
