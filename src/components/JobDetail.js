import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobDetail.css';

function JobDetail({ job, onClose }) {
  const navigate = useNavigate();

  if (!job) return <p className="no-job">Tidak ada detail pekerjaan untuk ditampilkan.</p>;

  const handleApplyClick = () => {
    navigate('/formapplication', { state: { job } }); // Kirim data job ke FormApplication
  };

  return (
    <div className="job-detail">
      <button className="close-button" onClick={onClose}>Kembali</button>
      <div className="job-detail-content">
        <h3>{job.title}</h3>
        <h4>{job.company}</h4>
        <p><strong>Gaji:</strong> {job.salary}</p>
        <p><strong>Lokasi:</strong> {job.location}</p>
        <p><strong>Sistem Kerja:</strong> {job.workSystem}</p>
        <p><strong>Deskripsi Perusahaan:</strong> {job.description}</p>
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
    </div>
  );
}

export default JobDetail;
