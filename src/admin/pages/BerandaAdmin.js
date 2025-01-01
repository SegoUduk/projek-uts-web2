import React, { useEffect, useState } from 'react';
import './BerandaAdmin.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';
import JobDetailAdmin from '../components/JobDetailAdmin';
import { getPendingJobs, updateJobStatus, deleteJob } from '../../api'; // Import API functions

function BerandaAdmin({ setPublishedJobs }) {
  const [uploadedJobs, setUploadedJobs] = useState([]); // Jobs yang diunggah pengguna
  const [selectedJob, setSelectedJob] = useState(null); // Job yang dipilih untuk detail
  const [loading, setLoading] = useState(true); // State untuk menandakan loading
  const [error, setError] = useState(null); // State untuk menyimpan error jika ada

  // Mendapatkan data job yang belum disetujui
  useEffect(() => {
    const fetchPendingJobs = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error saat mulai loading
        const response = await getPendingJobs(); // API untuk mendapatkan pending jobs
        setUploadedJobs(response.data); // Pastikan struktur API cocok dengan backend
      } catch (err) {
        console.error('Error fetching pending jobs:', err);
        setError('Gagal memuat data loker. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingJobs();
  }, []);

  const handleViewJob = (job) => {
    setSelectedJob(job);
  };

  const handleAcceptJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'approved'); // Update status menjadi "approved"
      setPublishedJobs((prevJobs) => [...prevJobs, selectedJob]); // Tambahkan ke jobs yang disetujui
      setUploadedJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== selectedJob.id)
      ); // Hapus dari pending jobs
      alert('Loker berhasil diterima dan dipublikasikan!');
      setSelectedJob(null); // Kembali ke daftar pekerjaan
    } catch (error) {
      console.error('Error approving job:', error);
      alert('Gagal menyetujui loker. Silakan coba lagi.');
    }
  };

  const handleRejectJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'rejected'); // Update status menjadi "rejected"
      setUploadedJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== selectedJob.id)
      ); // Hapus dari pending jobs
      alert('Loker berhasil ditolak!');
      setSelectedJob(null); // Kembali ke daftar pekerjaan
    } catch (error) {
      console.error('Error rejecting job:', error);
      alert('Gagal menolak loker. Silakan coba lagi.');
    }
  };

  const handleDeleteJob = async () => {
    try {
      await deleteJob(selectedJob.id); // Hapus job dari backend
      setUploadedJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== selectedJob.id)
      ); // Hapus dari pending jobs
      alert('Loker berhasil dihapus!');
      setSelectedJob(null); // Kembali ke daftar pekerjaan
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Gagal menghapus loker. Silakan coba lagi.');
    }
  };

  const handleBack = () => {
    setSelectedJob(null); // Kembali ke daftar pekerjaan
  };

  return (
    <div className="beranda-admin">
      <NavbarAdmin />
      <div className="content">
        {loading ? (
          <p className="loading-message">Memuat data loker...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : !selectedJob ? (
          <div className="job-list">
            {uploadedJobs.length === 0 ? (
              <p className="empty-message">Tidak ada loker yang tersedia.</p>
            ) : (
              uploadedJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <h3>{job.title}</h3>
                  <p>
                    <strong>Perusahaan:</strong> {job.company}
                  </p>
                  <p>
                    <strong>Lokasi:</strong> {job.location}
                  </p>
                  <p>
                    <strong>Gaji:</strong> {job.salary}
                  </p>
                  <button
                    className="detail-button"
                    onClick={() => handleViewJob(job)}
                  >
                    Lihat Detail
                  </button>
                </div>
              ))
            )}
          </div>
        ) : (
          <JobDetailAdmin
            job={selectedJob}
            onBack={handleBack}
            onAccept={handleAcceptJob}
            onReject={handleRejectJob}
            onDelete={handleDeleteJob}
          />
        )}
      </div>
      <FooterAdmin />
    </div>
  );
}

export default BerandaAdmin;
