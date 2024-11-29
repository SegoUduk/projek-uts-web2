import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './Privacy.css';

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="privacy-policy-container">
        <h2 className="privacy-title">Kebijakan Privasi</h2>
        <p className="privacy-description">
          Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda menggunakan platform pencarian kerja ini.
        </p>
        <h3>1. Pengumpulan Informasi</h3>
        <p className="privacy-text">
          Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti data pendaftaran, lamaran pekerjaan, atau informasi yang dibagikan di profil Anda. Informasi ini meliputi nama, email, nomor telepon, pengalaman kerja, dan lainnya.
        </p>
        <h3>2. Penggunaan Informasi</h3>
        <p className="privacy-text">
          Informasi yang dikumpulkan digunakan untuk menyediakan layanan terbaik, seperti mencocokkan Anda dengan lowongan pekerjaan, mengirimkan notifikasi terkait aplikasi, dan meningkatkan kualitas platform kami.
        </p>
        <h3>3. Perlindungan Data</h3>
        <p className="privacy-text">
          Kami menggunakan langkah-langkah keamanan teknis dan organisasi untuk melindungi informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
        </p>
        <h3>4. Hak Anda</h3>
        <p className="privacy-text">
          Anda berhak mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja. Hubungi kami jika Anda memerlukan bantuan terkait data Anda.
        </p>
        <button className="back-button" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
