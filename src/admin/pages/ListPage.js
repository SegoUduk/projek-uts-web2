import React from 'react';
import './ListPage.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';

function ListPage({ publishedJobs, bannedJobs }) {
  return (
    <div className="list-page">
      {/* Navbar */}
      <NavbarAdmin />

      {/* Konten Utama */}
      <div className="content">
        <h2 className="page-title">Daftar Lowongan Kerja</h2>

        {/* Loker Diterima */}
        <div className="job-section">
          <h3 className="section-title">Loker Diterima</h3>
          <div className="job-list">
            {publishedJobs.length > 0 ? (
              publishedJobs.map((job, index) => (
                <div key={index} className="job-card accepted">
                  <h4>{job.company}</h4>
                  <p><strong>Posisi:</strong> {job.potition}</p>
                  <p><strong>Lokasi:</strong> {job.location}</p>
                  <p><strong>Gaji:</strong> {job.salary}</p>
                </div>
              ))
            ) : (
              <p className="empty-message">Tidak ada loker yang diterima.</p>
            )}
          </div>
        </div>

        {/* Loker Ditolak */}
        <div className="job-section">
          <h3 className="section-title">Loker Ditolak</h3>
          <div className="job-list">
            {bannedJobs.length > 0 ? (
              bannedJobs.map((job, index) => (
                <div key={index} className="job-card rejected">
                  <h4>{job.company}</h4>
                  <p><strong>Posisi:</strong> {job.potition}</p>
                  <p><strong>Lokasi:</strong> {job.location}</p>
                  <p><strong>Gaji:</strong> {job.salary}</p>
                </div>
              ))
            ) : (
              <p className="empty-message">Tidak ada loker yang ditolak.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterAdmin />
    </div>
  );
}

export default ListPage;
