import React, { useState } from 'react';
import './JobSearch.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="/Home" className="nav-link">Beranda</a>
        <a href="/jobsearch" className="nav-link active">Cari Lowongan Kerja</a>
        <a href="/uploadjob" className="nav-link">Upload Lowongan Kerja</a>
      </div>
      <a href="/Profil" className="profile-button">Profil</a>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      Footer
    </div>
  );
}

function JobCard({ job, onClick }) {
  return (
    <div className="job-card" onClick={() => onClick(job)}>
      <div className="job-icon">🟠</div>
      <div className="job-info">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
      </div>
    </div>
  );
}

function JobDetail({ job }) {
  if (!job) {
    return <div className="job-detail-placeholder">Anda Belum Memilih Lowongan Pekerjaan</div>;
  }

  return (
    <div className="job-detail">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>Gaji: {job.salary}</p>
      <p>Tipe Pekerjaan: {job.type}</p>
      <h4>Profil Perusahaan</h4>
      <p>{job.companyProfile}</p>
      <h4>Kualifikasi :</h4>
      <ul>
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
      <button className="apply-button" onClick={() => window.location.href = '/FormApplication'}>
        Lamar Pekerjaan
      </button>
    </div>
  );
}

function JobSearch() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedWorkSystem, setSelectedWorkSystem] = useState("");

  const jobs = [
    {
      title: "HRD",
      company: "PT Mencari Cinta Sejati",
      salary: "Rp. 3-4 Juta",
      type: "Full Time",
      companyProfile: "PT Mencari Cinta Sejati",
      qualifications: ["max 25 tahun", "Pendidikan minimal SMK", "wajib memiliki motor dan SIM C", "Pengalaman dan non pengalaman silahkan melamar", "diutamakan domisili Kelapa Gading"],
    },
    // Tambahkan lowongan lain jika diperlukan...
  ];

  return (
    <div>
      <Navbar />

      <div className="job-search-content">
        <img src="gambar.jpg" alt="Ilustrasi" className="illustration-image" />
        <h2 className="search-title">Cari Lowongan Kerja</h2>
        <div className="search-container">
          <input type="text" placeholder="Masukkan Kata Kunci" className="search-input" />
          <button className="search-button">
            <img src="https://via.placeholder.com/20" alt="Cari" className="search-icon" />
          </button>
        </div>

        <div className="filter-options">
          <div className="filter-group">
            <label>Lokasi:</label>
            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="">Pilih Lokasi</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Pekerjaan:</label>
            <select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)}>
              <option value="">Pilih Pekerjaan</option>
              <option value="HRD">HRD</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sistem Kerja:</label>
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
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} onClick={setSelectedJob} />
            ))}
          </div>

          <div className="job-detail-container">
            <JobDetail job={selectedJob} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default JobSearch;
