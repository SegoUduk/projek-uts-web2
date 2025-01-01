import React from 'react';
import './JobDetailAdmin.css';

function JobDetailAdmin({ job, onBack, onAccept, onReject, onDelete }) {
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
        <strong>Posisi:</strong> {job.title}
      </p>
      <p>
        <strong>Deskripsi:</strong> {job.description}
      </p>
      <p>
        <strong>Sistem Kerja:</strong> {job.work_system}
      </p>
      <p>
        <strong>Status:</strong> {job.status}
      </p>
      <div className="actions">
        <button className="accept-button" onClick={onAccept}>
          Terima Lowongan
        </button>
        <button className="reject-button" onClick={onReject}>
          Tolak Lowongan
        </button>
        <button className="delete-button" onClick={onDelete}>
          Hapus Lowongan
        </button>
        <button className="back-button" onClick={onBack}>
          Kembali ke Daftar
        </button>
      </div>
    </div>
  );
}

export default JobDetailAdmin;
