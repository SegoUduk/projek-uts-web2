// src/Notification.js
import React from 'react';
import './Notification.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
