import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios'; // Gunakan axios untuk integrasi API

function Register() {
  const navigate = useNavigate();

  // State untuk input dan error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi wajib isi
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage('Semua kolom wajib diisi!');
      return;
    }

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      setErrorMessage('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    try {
      // Panggil API backend untuk register
      const response = await axios.post('http://localhost:4000/api/users/register', {
        name,
        email,
        password,
      });

      // Logging respons untuk debugging
      console.log('Response:', response);

      // Jika berhasil, tampilkan pesan sukses dan arahkan ke halaman login
      if (response.status === 200 || response.status === 201) {
        setErrorMessage('');
        setSuccessMessage('Pendaftaran berhasil! Silakan login.');
        setTimeout(() => navigate('/login'), 2000); // Navigasi ke halaman login setelah 2 detik
      } else {
        setErrorMessage('Gagal mendaftarkan pengguna.');
      }
    } catch (error) {
      // Tampilkan pesan error dari backend
      console.error('Error during registration:', error); // Tambahkan logging
      if (error.response) {
        // Kesalahan dari server
        setErrorMessage(error.response.data.message || 'Terjadi kesalahan pada server!');
      } else if (error.request) {
        // Permintaan dibuat tetapi tidak ada respons
        setErrorMessage('Tidak ada respons dari server. Periksa koneksi Anda.');
      } else {
        // Kesalahan lain
        setErrorMessage('Terjadi kesalahan saat mengirim permintaan.');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="daftar">Daftar</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Pesan Error */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Pesan Sukses */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Kontainer untuk tombol Daftar dan Kembali */}
        <div className="button-group">
          <button type="submit" className="register-button">
            Daftar
          </button>
          <button
            type="button"
            className="back-to-login-button"
            onClick={() => navigate('/login')}
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;