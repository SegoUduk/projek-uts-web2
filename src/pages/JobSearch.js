import React, { useState } from 'react';
import './JobSearch.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobDetail from '../components/JobDetail';

const JobSearch = ({ publishedJobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedWorkSystem, setSelectedWorkSystem] = useState('');

  // Filter pekerjaan berdasarkan input pencarian
  const filteredJobs = publishedJobs.filter((job) => {
    return (
      (searchKeyword === '' || job.title.toLowerCase().includes(searchKeyword.toLowerCase())) &&
      (selectedLocation === '' || job.location === selectedLocation) &&
      (selectedJobType === '' || job.type === selectedJobType) &&
      (selectedWorkSystem === '' || job.workSystem === selectedWorkSystem)
    );
  });

  return (
    <div className="job-search-page">
      <Navbar />

      <div className="upload-job-banner">
        <img
          src="/gambar/gambar.jpg"
          alt="Banner Upload Job"
          className="banner-image"
        />
      </div>
      
      <div className="job-search-content">
        <h2 className="search-title">Cari Lowongan Kerja</h2>

        {/* Search and Filter */}
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Masukkan Kata Kunci"
            className="search-input"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />

          <div className="filter-options">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-select"
            >
              <option value="">Pilih Lokasi</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
            </select>

            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className="filter-select"
            >
              <option value="">Pilih Jenis Pekerjaan</option>
              <option value="HRD">HRD</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>

            <select
              value={selectedWorkSystem}
              onChange={(e) => setSelectedWorkSystem(e.target.value)}
              className="filter-select"
            >
              <option value="">Pilih Sistem Kerja</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </div>

        {/* Job List */}
        <div className="job-search-container">
          <div className="job-list-container">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="job-card"
                  onClick={() => setSelectedJob(job)} // Klik untuk memilih pekerjaan
                >
                  <h3>{job.title}</h3>
                  <p><strong>Perusahaan:</strong> {job.company}</p>
                  <p><strong>Lokasi:</strong> {job.location}</p>
                  <p><strong>Sistem Kerja:</strong> {job.workSystem}</p>
                </div>
              ))
            ) : (
              <p className="no-jobs-message">Tidak ada lowongan kerja yang ditemukan.</p>
            )}
          </div>

          {/* Job Detail */}
          {selectedJob && (
            <div className="job-detail-overlay">
              <div className="job-detail-container">
                <JobDetail
                  job={selectedJob}
                  onClose={() => setSelectedJob(null)} // Tutup detail
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;
