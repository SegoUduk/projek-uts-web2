// src/admin/pages/BerandaAdmin.js
import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';
import './BerandaAdmin.css';

function BerandaAdmin() {
  const [jobs, setJobs] = useState([]);

  // Simulasi fetch data lowongan kerja
  useEffect(() => {
    const fetchJobs = async () => {
      const dummyJobs = [
        {
          id: 1,
          title: 'Software Engineer',
          company: 'Tech Corp',
          location: 'Jakarta',
          jobType: 'Full Time',
          salary: 'Rp 10.000.000 - Rp 15.000.000',
        },
        {
          id: 2,
          title: 'Data Scientist',
          company: 'Data Inc',
          location: 'Bandung',
          jobType: 'Part Time',
          salary: 'Rp 8.000.000 - Rp 12.000.000',
        },
        {
          id: 3,
          title: 'UI/UX Designer',
          company: 'Creative Studio',
          location: 'Surabaya',
          jobType: 'Freelance',
          salary: 'Rp 5.000.000 - Rp 10.000.000',
        },
      ];
      setJobs(dummyJobs);
    };

    fetchJobs();
  }, []);

  return (
    <div className="beranda-admin">
      <NavbarAdmin />

      <div className="content">
        <h2>Daftar Lowongan Kerja</h2>
        <div className="job-cards-container">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Perusahaan:</strong> {job.company}</p>
              <p><strong>Lokasi:</strong> {job.location}</p>
              <p><strong>Jenis Pekerjaan:</strong> {job.jobType}</p>
              <p><strong>Gaji:</strong> {job.salary}</p>
              <button className="detail-btn">Lihat Detail</button>
            </div>
          ))}
        </div>
      </div>

      <FooterAdmin />
    </div>
  );
}

export default BerandaAdmin;
