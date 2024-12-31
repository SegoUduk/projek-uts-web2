import React from 'react';
import './JobDetailAdmin.css';

function JobDetailAdmin({ job, onBack, onAccept, onDelete }) {
  return (
    <div className="job-detail-admin">
      <h2>Detail Lowongan Kerja</h2>
      <p>
        <strong>Perusahaan:</strong> {job.company}
      </p>
      <p>
        <strong>Lokasi:</strong> {job.location}
      </p>
      <p>
        <strong>Gaji:</strong> {job.salary}
      </p>
      <p>
        <strong>Posisi:</strong> {job.position}
      </p>
      <p>
        <strong>Deskripsi:</strong> {job.description}
      </p>
      <div className="actions">
        <button className="accept-button" onClick={onAccept}>
          Terima Lowongan
        </button>
        <button className="delete-button" onClick={onDelete}>
          Tolak / Hapus
        </button>
        <button className="back-button" onClick={onBack}>
          Kembali
        </button>
      </div>
    </div>
  );
}

export default JobDetailAdmin;
