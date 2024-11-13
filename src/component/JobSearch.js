// src/JobSearch.js
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
      <button className="profile-button">Profil</button>
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
    // Add more jobs as needed...
  ];

  return (
    <div>
      <Navbar />

      <div className="job-search-content">
        <img src="https://via.placeholder.com/1500x200" alt="Ilustrasi" className="illustration-image" />
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
            <label><input type="radio" value="Jakarta" checked={selectedLocation === "Jakarta"} onChange={() => setSelectedLocation("Jakarta")} /> Jakarta</label>
            <label><input type="radio" value="Bandung" checked={selectedLocation === "Bandung"} onChange={() => setSelectedLocation("Bandung")} /> Bandung</label>
            <label><input type="radio" value="Surabaya" checked={selectedLocation === "Surabaya"} onChange={() => setSelectedLocation("Surabaya")} /> Surabaya</label>
          </div>

          <div className="filter-group">
            <label>Pekerjaan:</label>
            <label><input type="radio" value="HRD" checked={selectedJobType === "HRD"} onChange={() => setSelectedJobType("HRD")} /> HRD</label>
            <label><input type="radio" value="IT" checked={selectedJobType === "IT"} onChange={() => setSelectedJobType("IT")} /> IT</label>
            <label><input type="radio" value="Marketing" checked={selectedJobType === "Marketing"} onChange={() => setSelectedJobType("Marketing")} /> Marketing</label>
          </div>

          <div className="filter-group">
            <label>Sistem Kerja:</label>
            <label><input type="radio" value="Full Time" checked={selectedWorkSystem === "Full Time"} onChange={() => setSelectedWorkSystem("Full Time")} /> Full Time</label>
            <label><input type="radio" value="Part Time" checked={selectedWorkSystem === "Part Time"} onChange={() => setSelectedWorkSystem("Part Time")} /> Part Time</label>
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
