import React, { useState } from 'react';
import './BerandaAdmin.css';
import Navbar from '../../components/Navbar/NavbarAdmin.js';
import Footer from '../../components/Footer/FooterAdmin.js';

function BerandaAdmin() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Data Dummy untuk Loker
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Jakarta', description: 'Job description for Software Engineer...' },
    { id: 2, title: 'Data Scientist', company: 'Data Inc', location: 'Bandung', description: 'Job description for Data Scientist...' },
    { id: 3, title: 'UI/UX Designer', company: 'Creative Studio', location: 'Surabaya', description: 'Job description for UI/UX Designer...' },
  ];

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleAcceptJob = () => {
    alert('Loker diterima!');
    setSelectedJob(null);
  };

  const handleBanJob = () => {
    alert('Loker dibanned!');
    setSelectedJob(null);
  };

  return (
    <div className="beranda-admin">
      <Navbar />

      <div className="content">
        {!selectedJob ? (
          <div className="job-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card" onClick={() => handleViewJob(job)}>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="job-details">
            <h2>{selectedJob.title}</h2>
            <p><strong>Company:</strong> {selectedJob.company}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p>{selectedJob.description}</p>
            <div className="button-group">
              <button className="accept-btn" onClick={handleAcceptJob}>Terima</button>
              <button className="ban-btn" onClick={handleBanJob}>Ban</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default BerandaAdmin;
