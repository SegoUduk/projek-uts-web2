import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <h2 className="about-title">Tentang Kami</h2>
        <p className="about-description">
          Selamat datang di platform pencarian lowongan kerja kami! Website ini dirancang untuk menghubungkan pencari kerja dengan peluang kerja terbaik yang sesuai dengan keahlian dan minat mereka. 
          Kami berkomitmen untuk menyediakan akses mudah ke berbagai lowongan kerja dari berbagai bidang dan lokasi.
        </p>
        <p className="about-description">
          Dengan fitur unggulan kami, Anda dapat mencari pekerjaan yang sesuai dengan preferensi Anda, melamar pekerjaan secara langsung, dan memantau status lamaran Anda. 
          Selain itu, perusahaan dapat memposting lowongan pekerjaan dan menemukan kandidat terbaik untuk kebutuhan mereka.
        </p>
        <p className="about-description">
          Kami percaya bahwa kesuksesan dimulai dengan langkah pertama, dan platform ini dirancang untuk mempermudah perjalanan karier Anda.
        </p>
        <button className="back-button" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
