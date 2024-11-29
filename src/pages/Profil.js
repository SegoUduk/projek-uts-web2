// src/Profile.js
import React from 'react';
import './Profil.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          <a href='/HistoryUploadJobs' className="profile-option-buttonn">Histori Unggah Lowongan Kerja</a>
          <a href='/Kontak' className="profile-option-buttonn">Kontak Kami</a>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
