import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api'; // Pastikan file API ini sudah benar
import './Login.css';

function Login() {
  const navigate = useNavigate();

  // State untuk input dan pesan error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi input wajib diisi
    if (!email || !password) {
      setErrorMessage('Email dan password wajib diisi!');
      return;
    }

    try {
      // Panggil API login
      const response = await loginUser({ email, password });

      // Logging respons untuk debugging
      console.log('Login response:', response);

      // Ambil peran user dari respons backend
      const userRole = response.user.role;

      if (userRole === 'admin') {
        // Redirect ke dashboard admin
        navigate('/admin/pages/BerandaAdmin');
      } else {
        // Redirect ke halaman user biasa
        navigate('/home');
      }
    } catch (error) {
      // Tangani error dari backend
      console.error('Login error:', error);
      setErrorMessage(
        error?.response?.data?.message || 'Login gagal. Cek email dan password Anda.'
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Input Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Alamat Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Input Password */}
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

        {/* Tombol Login */}
        <div className="button-group">
          <button type="submit" className="auth-btn">
            Login
          </button>

          {/* Tombol Daftar */}
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