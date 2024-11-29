// src/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Alamat Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        
        <div className="button-group">
          <button type="submit" className="auth-btn"
          onClick={() => navigate('/Home')}
          >
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
