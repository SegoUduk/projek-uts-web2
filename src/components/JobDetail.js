import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobDetail.css';

function JobDetail({ job, onClose }) {
  const navigate = useNavigate();

  if (!job) return null;

  const handleApplyClick = () => {
    navigate('/formapplication'); // Arahkan ke FormApplication
  };

  return (
    <div className="job-detail">
      <button className="close-button" onClick={onClose}>Kembali</button>
      <h3>{job.title}</h3>
      <h4>{job.company}</h4>
      <p><strong>Gaji:</strong> {job.salary}</p>
      <p><strong>Lokasi:</strong> {job.location}</p>
      <p><strong>Sistem Kerja:</strong> {job.type}</p>
      <p><strong>Kualifikasi:</strong></p>
      <ul>
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
      <button className="apply-button" onClick={handleApplyClick}>
        Lamar Pekerjaan
      </button>
    </div>
  );
}

export default JobDetail;
