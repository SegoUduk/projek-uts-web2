import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Halaman Pengguna
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import FormApplication from './pages/FormApplication';
import UploadJob from './pages/UploadJob';
import Profil from './pages/Profil';
import Biodata from './pages/Biodata';
import Notification from './pages/Notification';
import HistoriLamaran from './pages/HistoriLamaran';
import HistoryUploadJobs from './pages/HistoryUploadJobs'; // Tambahan Route
import AboutUs from './pages/AboutUs';
import Privacy from './pages/Privacy';
import Kontak from './pages/Kontak';

// Halaman Admin
import BerandaAdmin from './admin/pages/BerandaAdmin';
import ListPage from './admin/pages/ListPage'; // Halaman List baru

// Komponen Umum
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // State untuk lowongan kerja
  const [uploadedJobs, setUploadedJobs] = useState([]); // Lowongan kerja yang di-upload admin
  const [publishedJobs, setPublishedJobs] = useState([]); // Lowongan kerja yang diterima dan dipublikasikan
  const [bannedJobs, setBannedJobs] = useState([]); // Lowongan kerja yang ditolak (dibanned)

  // Fungsi untuk menangani unggahan pekerjaan baru
  const handleJobUpload = (jobData) => {
    setUploadedJobs((prevJobs) => [...prevJobs, jobData]);
  };

  // Fungsi untuk menangani pekerjaan yang dibanned
  const handleJobBan = (jobId) => {
    setBannedJobs((prevJobs) => [...prevJobs, jobId]);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Halaman Pengguna */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobsearch" element={<JobSearch publishedJobs={publishedJobs} />} />
          <Route path="/formapplication" element={<FormApplication />} />
          <Route path="/uploadjob" element={<UploadJob onJobUpload={handleJobUpload} />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/historilamaran" element={<HistoriLamaran />} />
          <Route path="/historyuploadjobs" element={<HistoryUploadJobs />} /> {/* Tambahan Route */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* Halaman Admin */}
          <Route
            path="/admin/pages/BerandaAdmin"
            element={
              <BerandaAdmin
                uploadedJobs={uploadedJobs}
                setUploadedJobs={setUploadedJobs}
                setPublishedJobs={setPublishedJobs}
                handleJobBan={handleJobBan} // Tambahkan fungsi handleJobBan
              />
            }
          />
          <Route
            path="/admin/pages/ListPage"
            element={
              <ListPage publishedJobs={publishedJobs} bannedJobs={bannedJobs} />
            }
          />

          {/* Komponen Umum */}
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;