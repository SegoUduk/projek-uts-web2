import React, { useState } from 'react';
import './BerandaAdmin.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';
import JobDetailAdmin from '../components/JobDetailAdmin';

function BerandaAdmin({ uploadedJobs, setUploadedJobs, setPublishedJobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleAcceptJob = () => {
    // Tambahkan job ke PublishedJobs tanpa menghapus dari UploadedJobs
    setPublishedJobs((prevJobs) => {
      if (!prevJobs.some((job) => job === selectedJob)) {
        return [...prevJobs, selectedJob];
      }
      return prevJobs;
    });
    alert('Loker diterima dan dipublikasikan!');
  };

  const handleDeleteJob = () => {
    const updatedJobs = uploadedJobs.filter((job) => job !== selectedJob);
    setUploadedJobs(updatedJobs);
    setSelectedJob(null);
    alert('Loker berhasil dihapus!');
  };

  const handleBack = () => {
    setSelectedJob(null); // Kembali ke daftar pekerjaan
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
                </div>
              ))
            )}
          </div>
        ) : (
          <JobDetailAdmin
            job={selectedJob}
            onBack={handleBack}
            onAccept={handleAcceptJob}
            onDelete={handleDeleteJob}
          />
        )}
      </div>
      <FooterAdmin />
    </div>
  );
}

export default BerandaAdmin;
