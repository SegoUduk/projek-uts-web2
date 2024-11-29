// src/FormApplication.js
import React, { useState } from 'react';
import './FormApplication.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FormApplication() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const Navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowConfirmation(true); // Tampilkan pop-up konfirmasi
    };
  
    const handleConfirm = () => {
      setShowConfirmation(false);
      alert("Lamaran pekerjaan telah dikirim!");
      Navigate("/Jobsearch");
      // Lakukan aksi lain seperti pengiriman form atau redirect
    };
  
    const handleCancel = () => {
      setShowConfirmation(false);
    };

  return (
    <div>
      <Navbar />
      <div className="form-application-container">
        <h2>Isi Lamaran</h2>
        <form className="application-form">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Nama lengkap" />

          <label>No HP</label>
          <input type="text" placeholder="No HP" />

          <label>Alamat Email</label>
          <input type="email" placeholder="Alamat Email" />

          <label>CV</label>
          <input type="file" />

          <div className="form-buttons">
            <button type="button" className="back-button" onClick={() => window.location.href = '/JobSearch'}>Kembali</button>
            <button type="submit" className="apply-button"onClick={handleSubmit}>Lamar Pekerjaan</button>
          </div>
        </form>
      </div>

      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Apakah Anda yakin ingin melamar pekerjaan ini?</p>
            <button onClick={handleConfirm} className="confirm-button">Ya, Lamar</button>
            <button onClick={handleCancel} className="cancel-button">Batal</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default FormApplication;
