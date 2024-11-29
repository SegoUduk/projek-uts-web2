// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email dan Password wajib diisi!');
      return;
    }

    // Reset pesan error dan navigasi jika validasi lolos
    setErrorMessage('');
    navigate('/Home');
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

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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
