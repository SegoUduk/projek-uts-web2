import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './Kontak.css';

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-title">Hubungi Kami</h2>
        <p className="contact-description">
          Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan, jangan ragu untuk menghubungi kami melalui informasi kontak di bawah ini.
        </p>

        <div className="contact-info">
          <h3>Informasi Kontak</h3>
          <p>Email: <a href="ploker@gmail.com">ploker@gmail.com</a></p>
          <p>Telepon: <a href="tel:+621234567890">+62 123 456 7890</a></p>
          <p>Alamat: Jl. Veteran, Surakarta</p>
        </div>

        <div className="contact-form">
          <h3>Formulir Kontak</h3>
          <form>
            <div className="form-group">
              <label>Nama</label>
              <input type="text" placeholder="Masukkan nama Anda" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Masukkan email Anda" required />
            </div>
            <div className="form-group">
              <label>Pesan</label>
              <textarea placeholder="Tulis pesan Anda di sini" required></textarea>
            </div>
            <button type="submit" className="submit-button">Kirim</button>
          </form>
        </div>

        <button className="back-button" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
