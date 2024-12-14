import React, { useState } from 'react';
import './UploadJob.css';
import Navbar from '../components/Navbar'; // Pastikan path sesuai
import Footer from '../components/Footer'; // Pastikan path sesuai

function UploadJob({ onJobUpload }) {
  const [formData, setFormData] = useState({
    company: '',
    description: '',
    position: '',
    qualifications: '',
    salary: '',
    workSystem: '',
    location: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      ...formData,
      id: Date.now(),
      status: 'Pending',
      qualifications: formData.qualifications.split(',').map((q) => q.trim()),
    };
    onJobUpload(newJob); // Mengirim data ke komponen induk
    alert('Lowongan kerja berhasil diupload!');
    setFormData({
      company: '',
      description: '',
      position: '',
      qualifications: '',
      salary: '',
      workSystem: '',
      location: '',
    });
  };

  return (
    <div>
      <Navbar />
      {/* Banner dengan gambar */}
      <div className="upload-job-banner">
        <img
          src="/gambar/gambar.jpg"
          alt="Banner Upload Job"
          className="banner-image"
        />
      </div>

      {/* Konten utama */}
      <div className="upload-job-content">
        <h2 className="form-title">Upload Lowongan Kerja</h2>
        <form className="upload-job-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company">Nama Perusahaan:</label>
            <textarea
              id="company"
              className="form-input"
              rows="2"
              value={formData.company}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="description">Deskripsi Singkat Pekerjaan:</label>
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
            <label htmlFor="position">Posisi:</label>
            <textarea
              id="position"
              className="form-input"
              rows="2"
              value={formData.position}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="qualifications">Kualifikasi (pisahkan dengan koma):</label>
            <textarea
              id="qualifications"
              className="form-input"
              rows="3"
              value={formData.qualifications}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="salary">Gaji:</label>
            <input
              type="text"
              id="salary"
              className="form-input"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="workSystem">Sistem Kerja:</label>
            <select
              id="workSystem"
              className="form-input"
              value={formData.workSystem}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Sistem Kerja</option>
              <option value="Fulltime">Full Time</option>
              <option value="Part-time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Alamat:</label>
            <input
              type="text"
              id="location"
              className="form-input"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UploadJob;
