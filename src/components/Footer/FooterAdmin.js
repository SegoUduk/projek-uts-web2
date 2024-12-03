import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterAdmin.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-logo">Logo</p>

        <div className="footer-links">
          <button
            className="footer-link"
            onClick={() => navigate('/TentangKami')}
          >
            Tentang Kami
          </button>
          <button
            className="footer-link"
            onClick={() => navigate('/KebijakanPrivasi')}
          >
            Kebijakan Privasi
          </button>
          <button
            className="footer-link"
            onClick={() => navigate('/Kontak')}
          >
            Kontak
          </button>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Website Lowongan Kerja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
