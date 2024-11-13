// src/Profile.js
import React from 'react';
import './Profil.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/Home" className="nav-link">Beranda</a>
        <a href="/jobsearch" className="nav-link">Cari Lowongan Kerja</a>
        <a href="/UploadJob" className="nav-link">Upload Lowongan Kerja</a>
      </div>
      <button className="profile-button">Profil</button>
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

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <div className="profile-content">
        <img
          src="gambar.jpg"
          alt="Ilustrasi"
          className="illustration-image"
        />
        
        <h2 className="profile-title">Profil Saya</h2>
        
        <div className="profile-options">
          <button className="profile-option-button"onClick={() => navigate('/biodata')}>Biodata</button>
          <a href="/notification" className="profile-option-buttonn">Notifikasi</a>
          <a href="/HistoriLamaran" className="profile-option-buttonn">Histori Lamaran</a>
          <button className="profile-option-button">Histori Unggah Lowongan Kerja</button>
          <button className="profile-option-button">Kontak Kami</button>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
