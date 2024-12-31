import React, { useState } from 'react';
import './UploadJob.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UploadJob() {
  const [formData, setFormData] = useState({
    user_id: 1, // Ubah sesuai user ID dari backend atau token
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    work_system: '', // Sesuaikan dengan backend
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Lowongan kerja berhasil diunggah!');
        setFormData({
          user_id: 1, // Reset user_id
          title: '',
          company: '',
          location: '',
          salary: '',
          description: '',
          work_system: '', // Reset kolom work_system
        });
      } else {
        const errorData = await response.json();
        alert(`Gagal mengunggah lowongan: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error saat mengunggah lowongan:', error);
      alert('Terjadi kesalahan saat mengunggah lowongan kerja.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="upload-job-banner">
        <img
          src="/gambar/gambar.jpg"
          alt="Banner Upload Job"
          className="banner-image"
        />
      </div>

      <div className="upload-job-content">
        <h2 className="form-title">Upload Lowongan Kerja</h2>
        <form className="upload-job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Judul Pekerjaan:</label>
            <input
              type="text"
              id="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Nama Perusahaan:</label>
            <input
              type="text"
              id="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Deskripsi Pekerjaan:</label>
            <textarea
              id="description"
              className="form-input"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="location">Lokasi:</label>
            <input
              type="text"
              id="location"
              className="form-input"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="salary">Gaji:</label>
            <input
              type="number"
              id="salary"
              className="form-input"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          {/* Dropdown untuk work_system */}
          <div className="form-group">
            <label htmlFor="work_system">Sistem Kerja:</label>
            <select
              id="work_system"
              className="form-input"
              value={formData.work_system}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Sistem Kerja</option>
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Mengupload...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UploadJob;
