// src/BerandaAdmin.js
import React, { useState } from 'react';
import './BerandaAdmin.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';

function BerandaAdmin({ uploadedJobs, setUploadedJobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

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

  const handleDeleteJob = (jobToDelete) => {
    const updatedJobs = uploadedJobs.filter((job) => job !== jobToDelete);
    setUploadedJobs(updatedJobs);
    alert('Loker berhasil dihapus!');
    setSelectedJob(null);
  };

  return (
    <div className="beranda-admin">
      <NavbarAdmin />
      <div className="content">
        {!selectedJob ? (
          <div className="job-list">
            {uploadedJobs.length === 0 ? (
              <p>Tidak ada loker yang tersedia.</p>
            ) : (
              uploadedJobs.map((job, index) => (
                <div key={index} className="job-card">
                  <h3>{job.company}</h3>
                  <p><strong>Lokasi:</strong> {job.location}</p>
                  <p><strong>Gaji:</strong> {job.salary}</p>
                  <p><strong>Posisi:</strong> {job.potition}</p>
                  <button className="detail-button" onClick={() => handleViewJob(job)}>Lihat Detail</button>
                  <button className="delete-button" onClick={() => handleDeleteJob(job)}>Hapus</button>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="job-details">
            <h2>{selectedJob.company}</h2>
            <p><strong>Posisi:</strong> {selectedJob.potition}</p>
            <p><strong>Deskripsi:</strong> {selectedJob.description}</p>
            <p><strong>Gaji:</strong> {selectedJob.salary}</p>
            <p><strong>Sistem Kerja:</strong> {selectedJob.workSystem}</p>
            <p><strong>Kualifikasi:</strong> {selectedJob.qualifications}</p>
            <p><strong>Lokasi:</strong> {selectedJob.location}</p>
            <div className="button-group">
              <button className="accept-button" onClick={handleAcceptJob}>Terima</button>
              <button className="ban-button" onClick={handleBanJob}>Ban</button>
              <button className="delete-button" onClick={() => handleDeleteJob(selectedJob)}>Hapus</button>
            </div>
          </div>
        )}
      </div>
      <FooterAdmin />
    </div>
  );
}

export default BerandaAdmin;
