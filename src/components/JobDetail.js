// src/components/JobDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate untuk berpindah halaman

function JobDetail({ job }) {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  if (!job) return <div className="job-detail-placeholder">Pilih Pekerjaan untuk Melihat Detail</div>;

  const handleApplyClick = () => {
    navigate('/FormApplication'); // Mengarahkan ke halaman FormApplication
  };

  return (
    <div className="job-detail">
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

      {/* Tombol untuk melamar pekerjaan */}
      <button className="apply-button" onClick={handleApplyClick}>
        Lamar Pekerjaan
      </button>
    </div>
  );
}

export default JobDetail;
