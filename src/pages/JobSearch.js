// src/pages/JobSearch.js
import React, { useState } from 'react';
import './JobSearch.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobList from '../components/JobList'; // Mengimpor JobList
import JobDetail from '../components/JobDetail';

function JobSearch() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedWorkSystem, setSelectedWorkSystem] = useState("");

  return (
    <div>
      <Navbar />

      <div className="job-search-content">
        <img src="/gambar/gambar.jpg" alt="Ilustrasi" className="illustration-image" />
        <h2 className="search-title">Cari Lowongan Kerja</h2>
        <div className="search-container">
          <input type="text" placeholder="Masukkan Kata Kunci" className="search-input" />
          <button className="search-button">
            <img src="https://via.placeholder.com/20" alt="Cari" className="search-icon" />
          </button>
        </div>

        <div className="filter-options">
          <div className="filter-group">
            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="">Pilih Lokasi</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
            </select>
          </div>

          <div className="filter-group">
            <select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)}>
              <option value="">Pilih Pekerjaan</option>
              <option value="HRD">HRD</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="filter-group">
            <select value={selectedWorkSystem} onChange={(e) => setSelectedWorkSystem(e.target.value)}>
              <option value="">Pilih Sistem Kerja</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </div>

        <div className="job-search-container">
          <div className="job-card-list">
            {/* Menggunakan JobList untuk menampilkan pekerjaan */}
            <JobList 
              selectedLocation={selectedLocation}
              selectedJobType={selectedJobType}
              selectedWorkSystem={selectedWorkSystem}
              onSelectJob={setSelectedJob}
            />
          </div>

          <div className="job-detail-container">
            {/* Menampilkan detail pekerjaan yang dipilih */}
            {selectedJob && <JobDetail job={selectedJob} />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default JobSearch;
