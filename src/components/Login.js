// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  // State untuk input dan error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi wajib isi
    if (!email || !password) {
      setErrorMessage('Email dan Password wajib diisi!');
      return;
    }

    try {
      // Panggil API login
      const response = await loginUser({ email, password });

      // Jika berhasil, arahkan pengguna berdasarkan perannya
      if (response.role === 'admin') {
        navigate('/admin/pages/BerandaAdmin'); // Halaman admin
      } else {
        navigate('/home'); // Halaman user biasa
      }
    } catch (error) {
      // Tangani error dari backend
      setErrorMessage(error.message || 'Login gagal. Cek email dan password Anda.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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

        {/* Pesan Error */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Tombol Login dan Daftar */}
        <div className="button-group">
          <button type="submit" className="auth-btn">
            Login
          </button>
          <button
            type="button"
            className="auth-btn"
            onClick={() => navigate('/register')}
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
