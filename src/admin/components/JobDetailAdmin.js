// src/components/JobDetailAdmin.js
import React from 'react';
import './JobDetailAdmin.css';

function JobDetailAdmin({ job, onBack, onAccept, onDelete }) {
  if (!job) return null;

  return (
    <div className="job-detail-admin">
      <h2>{job.company}</h2>
      <p><strong>Posisi:</strong> {job.potition}</p>
      <p><strong>Deskripsi:</strong> {job.description}</p>
      <p><strong>Gaji:</strong> {job.salary}</p>
      <p><strong>Sistem Kerja:</strong> {job.workSystem}</p>
      <p><strong>Kualifikasi:</strong> {job.qualifications}</p>
      <p><strong>Lokasi:</strong> {job.location}</p>
      <div className="button-group">
        <button className="back-button" onClick={onBack}>Kembali</button>
        <button className="accept-button" onClick={onAccept}>Terima</button>
        <button className="delete-button" onClick={onDelete}>Hapus</button>
      </div>
    </div>
  );
}

export default JobDetailAdmin;
