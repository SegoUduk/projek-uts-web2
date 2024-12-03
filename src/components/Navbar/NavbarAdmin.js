import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarAdmin.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-menu">
        <button className="menu-item" onClick={() => navigate('/Home')}>
          Beranda
        </button>
        <button className="menu-item" onClick={() => navigate('/List')}>
          List
        </button>
      </div>
      <div className="navbar-logout">
        <button
          className="logout-btn"
          onClick={() => navigate('/')}
        >
          log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
