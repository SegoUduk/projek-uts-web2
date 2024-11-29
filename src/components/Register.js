// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  // State untuk input dan error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validasi wajib isi
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Semua kolom wajib diisi!');
      return;
    }

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      setErrorMessage('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    // Jika validasi berhasil
    setErrorMessage('');
    alert('Pendaftaran berhasil!');
    navigate('/Home');
  };

  return (
    <div className="auth-container">
      <h2 className="daftar">Daftar</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Pesan Error */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Kontainer untuk tombol Daftar dan Kembali */}
        <div className="button-group">
          <button type="submit" className="register-button">
            Daftar
          </button>
          <button
            type="button"
            className="back-to-login-button"
            onClick={() => navigate('/')}
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
