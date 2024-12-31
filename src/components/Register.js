// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { registerUser } from '../api';

function Register() {
  const navigate = useNavigate();

  // State untuk input dan error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi wajib isi
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Semua kolom wajib diisi!');
      return;
    }

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      setErrorMessage('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    try {
      // Panggil fungsi API untuk register
      const response = await registerUser({ name, email, password });

      // Jika berhasil, tampilkan pesan sukses dan arahkan ke halaman login
      setErrorMessage('');
      setSuccessMessage('Pendaftaran berhasil! Silakan login.');
      setTimeout(() => navigate('../pages/'), 2000); // Navigasi ke halaman login setelah 2 detik
    } catch (error) {
      // Tampilkan pesan error dari backend
      setErrorMessage(error.message || 'Terjadi kesalahan saat mendaftar.');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="daftar">Daftar</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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

        {/* Pesan Sukses */}
        {successMessage && <p className="success-message">{successMessage}</p>}

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
