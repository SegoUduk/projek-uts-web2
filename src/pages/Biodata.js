// src/Biodata.js
import React, { useState } from 'react';
import './Biodata.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Biodata() {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate('/Profil');
  };

  const handleBack = () => {
    navigate('/Profil');
  };

  return (
    <div>
      <Navbar />

      <div className="biodata-container">
        <h2>Biodata</h2>

        <div className="profile-section">
          <label htmlFor="profile-image-input" className="profile-image-container">
            <img
              src={profileImage || 'https://via.placeholder.com/100'}
              alt="Profile"
              className="profile-image"
            />
            <input
              type="file"
              id="profile-image-input"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <div className="biodata-form">
          <div>
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap" />
          </div>
          <div>
            <label>Alamat</label>
            <input type="text" placeholder="Masukkan alamat" />
          </div>
          <div>
            <label>Tempat Tanggal Lahir</label>
            <input type="text" placeholder="Masukkan tempat tanggal lahir" />
          </div>
          <div>
            <label>Masukkan Keterangan Diri</label>
            <textarea placeholder="Masukkan keterangan diri"></textarea>
          </div>
          <div className="button-group">
          <button onClick={handleSave} className="save-button">Simpan</button>
          <button onClick={handleBack} className="back-button">Kembali</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Biodata;
