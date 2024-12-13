import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Data akun admin
  const adminCredentials = {
    email: 'admin@website.com',
    password: 'admin123',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email dan Password wajib diisi!');
      return;
    }

    // Validasi admin
    if (email === adminCredentials.email && password === adminCredentials.password) {
      setErrorMessage('');
      navigate('./admin/pages/BerandaAdmin'); // Arahkan ke BerandaAdmin
    } else {
      // Validasi user biasa
      setErrorMessage('');
      navigate('/home');
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
