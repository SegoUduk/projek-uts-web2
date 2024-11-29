import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Logo</h2>
        </div>
        <ul className="footer-links">
          <li>
            <a href="/about" className="footer-link">Tentang Kami</a>
          </li>
          <li>
            <a href="/privacy" className="footer-link">Kebijakan Privasi</a>
          </li>
          <li>
            <a href="/contact" className="footer-link">Kontak</a>
          </li>
        </ul>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} P Loker.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
