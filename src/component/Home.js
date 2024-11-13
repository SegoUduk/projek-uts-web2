// src/Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
      <Link to="/home" className="nav-link">Beranda</Link>
        <Link to="/JobSearch" className="nav-link">Cari Lowongan Kerja</Link>
        <Link to="/UploadJob" className="nav-link">Unggah Lowongan Kerja</Link>
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

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <img
          src="https://via.placeholder.com/1500x200" // Ganti dengan URL gambar asli jika ada
          alt="Ilustrasi"
          className="illustration-image"
        />
        <h2 className="search-title">Cari Lowongan Kerja</h2>
        <div className="search-container">
          <input type="text" placeholder="Cari Lowongan Kerja" className="search-input" />
          <button className="search-button">
            <img
              src="https://via.placeholder.com/20" // Ganti dengan URL ikon pencarian asli jika ada
              alt="Cari"
              className="search-icon"
            />
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
