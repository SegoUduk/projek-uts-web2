// src/HistoriLamaran.js
import React from 'react';
import './HistoriLamaran.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




function HistoriLamaran() {
  const applications = [
    {
      jobTitle: "HRD",
      company: "PT Mencari Cinta Sejati",
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
