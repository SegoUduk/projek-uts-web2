// src/HistoriLamaran.js
import React from 'react';
import './HistoriLamaran.css';



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

function HistoriLamaran() {
  const applications = [
    {
      jobTitle: "HRD",
      company: "PT Mencari Cinta Sejatisss",
      date: "12 November 2024",
      status: "Diterima",
    },
    {
      jobTitle: "Marketing",
      company: "PT Sahabat Dunia",
      date: "10 November 2024",
      status: "Menunggu Respon",
    },
    {
      jobTitle: "IT Support",
      company: "PT Teknologi Masa Depan",
      date: "8 November 2024",
      status: "Ditolak",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="histori-container">
        <h2>Histori Lamaran</h2>
        <div className="application-list">
          {applications.map((application, index) => (
            <div key={index} className="application-item">
              <h3>{application.jobTitle}</h3>
              <p>{application.company}</p>
              <p>Tanggal: {application.date}</p>
              <p>Status: {application.status}</p>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => window.location.href = '/Profil'}>
          Kembali
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default HistoriLamaran;
