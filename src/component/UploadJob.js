// src/UploadJob.js
import React from 'react';
import './UploadJob.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/Home" className="nav-link">Beranda</a>
        <a href="/jobsearch" className="nav-link">Cari Lowongan Kerja</a>
        <a href="/uploadjob" className="nav-link active">Upload Lowongan Kerja</a>
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

function UploadJob() {
  return (
    <div>
      <Navbar />

      <div className="upload-job-content">
        <img
          src="https://via.placeholder.com/1500x200"
          alt="Ilustrasi"
          className="illustration-image"
        />
        <h2 className="form-title">Upload Lowongan Kerja</h2>

        <form className="upload-job-form">
          <div className="form-group">
            <label htmlFor="companyDescription">Deskripsi Singkat tentang Perusahaan:</label>
            <textarea id="companyDescription" className="form-input" rows="3" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="jobDescription">Deskripsi Singkat tentang Pekerjaan:</label>
            <textarea id="jobDescription" className="form-input" rows="3" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="qualifications">Kualifikasi Pekerjaan:</label>
            <textarea id="qualifications" className="form-input" rows="3" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="salary">Gaji:</label>
            <input type="text" id="salary" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="workSystem">Sistem Kerja:</label>
            <select id="workSystem" className="form-input" required>
              <option value="">Pilih Sistem Kerja</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Lokasi:</label>
            <input type="text" id="location" className="form-input" required />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default UploadJob;
