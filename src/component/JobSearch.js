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
        <a href="#" className="nav-link">Upload Lowongan Kerja</a>
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
    return (
      <div className="job-detail-placeholder">
        Anda Belum Memilih Lowongan Pekerjaan
      </div>
    );
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

  const jobs = [
    {
      title: "HRD",
      company: "PT Mencari Cinta Sejati",
      salary: "Rp. 3-4 Juta",
      type: "Full Time",
      companyProfile: "PT Mencari Cinta Sejati",
      qualifications: [
        "max 25 tahun",
        "Pendidikan minimal SMK",
        "wajib memiliki motor dan SIM C",
        "Pengalaman dan non pengalaman silahkan melamar",
        "diutamakan domisili Kelapa Gading",
      ],
    },
    {
      title: "OB",
      company: "PT Mencari Cinta Sejati",
      salary: "Rp. 2-3 Juta",
      type: "Part Time",
      companyProfile: "PT Mencari Cinta Sejati",
      qualifications: [
        "min 18 tahun",
        "Pendidikan minimal SMA",
        "Tidak diperlukan pengalaman",
      ],
    },
    {
      title: "Staf IT",
      company: "PT Mencari Cinta Sejati",
      salary: "Rp. 4-6 Juta",
      type: "Full Time",
      companyProfile: "PT Mencari Cinta Sejati",
      qualifications: [
        "Pendidikan minimal D3/S1 Informatika",
        "Pengalaman di bidang IT minimal 1 tahun",
        "Menguasai pemrograman dasar",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="job-search-content">
        <img
          src="https://via.placeholder.com/1500x200"
          alt="Ilustrasi"
          className="illustration-image"
        />
        <h2 className="search-title">Cari Lowongan Kerja</h2>
        <div className="search-container">
          <input type="text" placeholder="Masukkan Kata Kunci" className="search-input" />
          <button className="search-button">
            <img
              src="https://via.placeholder.com/20"
              alt="Cari"
              className="search-icon"
            />
          </button>
        </div>
        <div className="filter-buttons">
          <button className="filter-button">Lokasi</button>
          <button className="filter-button">Pekerjaan</button>
          <button className="filter-button">Sistem Kerja</button>
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
