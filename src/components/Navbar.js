import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/Home">Logo</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/Home" className="nav-link">
            Beranda
          </Link>
        </li>
        <li>
          <Link to="/JobSearch" className="nav-link">
            Cari Lowongan Kerja
          </Link>
        </li>
        <li>
          <Link to="/UploadJob" className="nav-link">
            Upload Lowongan Kerja
          </Link>
        </li>
      </ul>
      <Link to="/Profil" className="navbar-profile-button">
        Profil
      </Link>
    </nav>
  );
}

export default Navbar;
