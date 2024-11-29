// src/Register.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2 className='daftar'>Daftar</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Alamat Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>
        
        {/* Kontainer untuk tombol Daftar dan Kembali */}
        <div className="button-group">
          <button type="submit" className="register-button"
          onClick={() => navigate('/Home')}
          >
            Login
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
