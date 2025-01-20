import React, { useState, useEffect } from 'react';
import './JobSearch.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobDetail from '../components/JobDetail';
import { getApprovedJobs } from '../api'; // Pastikan API ini tersedia

const JobSearch = () => {
  const [approvedJobs, setApprovedJobs] = useState([]); // State untuk pekerjaan yang disetujui
  const [selectedJob, setSelectedJob] = useState(null); // State untuk pekerjaan yang dipilih
  const [searchKeyword, setSearchKeyword] = useState(''); // Kata kunci pencarian
  const [selectedLocation, setSelectedLocation] = useState(''); // Lokasi filter
  const [selectedJobType, setSelectedJobType] = useState(''); // Jenis pekerjaan filter
  const [selectedWorkSystem, setSelectedWorkSystem] = useState(''); // Sistem kerja filter
  const [isLoading, setIsLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State error

  // Mengambil data pekerjaan yang disetujui dari API
  useEffect(() => {
    const fetchApprovedJobs = async () => {
      try {
        setIsLoading(true); // Mulai loading
        const jobs = await getApprovedJobs(); // Memanggil API
        setApprovedJobs(jobs); // Menyimpan data ke state
        setIsLoading(false); // Selesai loading
      } catch (err) {
        setError('Gagal memuat data pekerjaan.'); // Menangani error
        setIsLoading(false); // Matikan loading
      }
    };

    fetchApprovedJobs();
  }, []);

  const handleApply = (formData) => {
    // Logika untuk menangani aplikasi pekerjaan
    console.log('Applying for job with data:', formData);
  };

  // Filter pekerjaan berdasarkan input pencarian dan filter
  const filteredJobs = approvedJobs.filter((job) => {
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

      {/* Banner */}
      <div className="upload-job-banner">
        <img
          src="/gambar/gambar.jpg"
          alt="Banner Upload Job"
          className="banner-image"
        />
      </div>

      {/* Konten pencarian pekerjaan */}
      <div className="job-search-content">
        <h2 className="search-title">Cari Lowongan Kerja</h2>

        {/* Search dan Filter */}
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

        {/* Daftar Pekerjaan */}
        <div className="job-search-container">
          {isLoading ? ( // Tampilkan loading jika data belum selesai di-load
            <p className="loading-message">Memuat data pekerjaan...</p>
          ) : error ? ( // Tampilkan pesan error jika ada masalah
            <p className="error-message">{error}</p>
          ) : filteredJobs.length > 0 ? (
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

        {/* Detail Pekerjaan */}
        {selectedJob && (
          <div className="job-detail-overlay">
            <div className="job-detail-container">
              <JobDetail
                job={selectedJob}
                onClose={() => setSelectedJob(null)} // Tutup detail
                onApply={handleApply} // Tambahkan onApply
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default JobSearch;