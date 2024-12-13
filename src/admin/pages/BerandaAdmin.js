import React, { useState } from 'react';
import './BerandaAdmin.css';
import Footer from '../components/FooterAdmin';
import Navbar from '../components/NavbarAdmin';


function BerandaAdmin() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Data Dummy untuk Loker
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      salary: 'Rp 10.000.000 - Rp 15.000.000',
      location: 'Jakarta',
      jobType: 'Fulltime',
      companyProfile: 'Tech Corp is a leading software development company...',
      qualifications: [
        'Bachelor\'s degree in Computer Science or related field',
        'Proficient in JavaScript, React, Node.js',
        'Experience with database management',
      ],
      description: 'Job description for Software Engineer...',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Data Inc',
      salary: 'Rp 8.000.000 - Rp 12.000.000',
      location: 'Bandung',
      jobType: 'Part-time',
      companyProfile: 'Data Inc specializes in data analytics and machine learning solutions...',
      qualifications: [
        'Bachelor\'s degree in Data Science, Statistics, or related field',
        'Proficient in Python and machine learning algorithms',
        'Strong analytical and problem-solving skills',
      ],
      description: 'Job description for Data Scientist...',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      salary: 'Rp 7.000.000 - Rp 10.000.000',
      location: 'Surabaya',
      jobType: 'Freelance',
      companyProfile: 'Creative Studio is a design agency specializing in UI/UX...',
      qualifications: [
        'Experience with design tools like Figma, Sketch, Adobe XD',
        'Strong portfolio of design work',
        'Knowledge of user research and testing methodologies',
      ],
      description: 'Job description for UI/UX Designer...',
    },
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
            <p><strong>Perusahaan:</strong> {selectedJob.company}</p>
            <p><strong>Gaji:</strong> {selectedJob.salary}</p>
            <p><strong>Lokasi:</strong> {selectedJob.location}</p>
            <p><strong>Jenis Pekerjaan:</strong> {selectedJob.jobType}</p>
            <p><strong>Profil Perusahaan:</strong> {selectedJob.companyProfile}</p>
            <p><strong>Kualifikasi:</strong></p>
            <ul>
              {selectedJob.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
