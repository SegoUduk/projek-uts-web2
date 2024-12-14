import React, { useState } from 'react';
import './FormApplication.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FormApplication({ onApply }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cv: null,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Tampilkan pop-up konfirmasi
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    alert('Lamaran pekerjaan telah dikirim!');
    onApply(formData); // Kirim data pelamar ke halaman HistoryUploadJobs
    navigate('/jobsearch');
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <Navbar />
      <div className="form-application-container">
        <h2>Isi Lamaran</h2>
        <form className="application-form" onSubmit={handleSubmit}>
          <label>Nama Lengkap</label>
          <input
            type="text"
            name="name"
            placeholder="Nama lengkap"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>No HP</label>
          <input
            type="text"
            name="phone"
            placeholder="No HP"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Alamat Email</label>
          <input
            type="email"
            name="email"
            placeholder="Alamat Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>CV</label>
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            required
          />

          <div className="form-buttons">
            <button
              type="button"
              className="back-button"
              onClick={() => navigate('/jobsearch')}
            >
              Kembali
            </button>
            <button type="submit" className="apply-button">
              Lamar Pekerjaan
            </button>
          </div>
        </form>
      </div>

      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Apakah Anda yakin ingin melamar pekerjaan ini?</p>
            <button onClick={handleConfirm} className="confirm-button">
              Ya, Lamar
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Batal
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default FormApplication;
