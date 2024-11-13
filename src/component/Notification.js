// src/Notification.js
import React from 'react';
import './Notification.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/Home" className="nav-link">Beranda</a>
        <a href="/jobsearch" className="nav-link">Cari Lowongan Kerja</a>
        <a href="/uploadjob" className="nav-link">Upload Lowongan Kerja</a>
      </div>
      <a href='/Profil' className="profile-button">Profil</a>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Footer
    </div>
  );
}

function Notification() {
  return (
    <div>
      <Navbar />
      
      <div className="notification-content">
        <h2>Notifikasi</h2>
        <ul className="notification-list">
          <li>Notifikasi 1: Lamaran Anda telah diterima.</li>
          <li>Notifikasi 2: Wawancara dijadwalkan pada 15 November 2024.</li>
          {/* Tambahkan notifikasi lainnya sesuai kebutuhan */}
        </ul>
        
        <button className="back-button" onClick={() => window.location.href = '/Profil'}>
          Kembali
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Notification;
