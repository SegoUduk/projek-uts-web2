import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import halaman pengguna
import Login from './components/Login.js';
import Register from './components/Register.js';
import Home from './pages/Home.js';
import JobSearch from './pages/JobSearch.js';
import FormApplication from './pages/FormApplication.js';
import UploadJob from './pages/UploadJob.js';
import Profil from './pages/Profil.js';
import Biodata from './pages/Biodata.js';
import Notification from './pages/Notification.js';
import HistoriLamaran from './pages/HistoriLamaran.js';
import AboutUs from './pages/AboutUs.js';
import Privacy from './pages/Privacy.js';
import Kontak from './pages/Kontak.js';

// Import halaman admin
import BerandaAdmin from './admin/pages/BerandaAdmin.js';
import HistoryUploadJobs from './pages/HistoryUploadJobs.js';

// Import komponen umum
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import JobCard from './components/JobCard.js';
import JobDetail from './components/JobDetail.js';
import JobList from './components/JobList.js';
import NavbarAdmin from './admin/components/NavbarAdmin.js';

function App() {
  // State untuk menyimpan daftar pekerjaan yang di-upload
  const [uploadedJobs, setUploadedJobs] = useState([]);

  // Fungsi untuk menambahkan pekerjaan baru ke daftar pekerjaan
  const handleJobUpload = (jobData) => {
    setUploadedJobs((prevJobs) => [...prevJobs, jobData]);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/JobSearch" element={<JobSearch />} />
          <Route path="/FormApplication" element={<FormApplication />} />
          <Route path="/UploadJob" element={<UploadJob onJobUpload={handleJobUpload} />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Biodata" element={<Biodata />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/HistoriLamaran" element={<HistoriLamaran />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Kontak" element={<Kontak />} />

          {/* Komponen Standalone */}
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/JobCard" element={<JobCard />} />
          <Route path="/JobDetail" element={<JobDetail />} />
          <Route path="/JobList" element={<JobList />} />
          <Route path="/HistoryUploadJobs" element={<HistoryUploadJobs />} />

          {/* Halaman Admin */}
          <Route
            path="/admin/pages/BerandaAdmin"
            element={<BerandaAdmin uploadedJobs={uploadedJobs} setUploadedJobs={setUploadedJobs} />
          }
          />
          <Route path="/admin/components/NavbarAdmin" element={<NavbarAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
