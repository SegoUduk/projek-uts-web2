import React, { useEffect, useState } from 'react';
import './BerandaAdmin.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';
import JobDetailAdmin from '../components/JobDetailAdmin';
import { getPendingJobs, updateJobStatus, deleteJob } from '../../api';

function BerandaAdmin() {
  const [pendingJobs, setPendingJobs] = useState([]); // State untuk daftar pekerjaan pending
  const [selectedJob, setSelectedJob] = useState(null); // Job yang sedang dipilih
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State untuk error

  useEffect(() => {
    // Mendapatkan pekerjaan pending dari API
    const fetchPendingJobs = async () => {
      try {
        setLoading(true);
        const jobs = await getPendingJobs();
        setPendingJobs(jobs); // Mengisi state dengan data jobs
      } catch (err) {
        setError(err.message || 'Gagal memuat data pekerjaan.');
      } finally {
        setLoading(false);
      }
    };

    fetchPendingJobs();
  }, []);

  const handleAcceptJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'approved');
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil disetujui.');
      setSelectedJob(null);
    } catch (err) {
      alert(err.message || 'Gagal menyetujui pekerjaan.');
    }
  };

  const handleRejectJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'rejected');
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil ditolak.');
      setSelectedJob(null);
    } catch (err) {
      alert(err.message || 'Gagal menolak pekerjaan.');
    }
  };

  const handleDeleteJob = async () => {
    try {
      await deleteJob(selectedJob.id);
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil dihapus.');
      setSelectedJob(null);
    } catch (err) {
      alert(err.message || 'Gagal menghapus pekerjaan.');
    }
  };

  return (
    <div className="beranda-admin">
      <NavbarAdmin />
      <div className="content">
        {loading ? (
          <p>Memuat data...</p>
        ) : error ? (
          <p>{error}</p>
        ) : selectedJob ? (
          <JobDetailAdmin
            job={selectedJob}
            onBack={() => setSelectedJob(null)}
            onAccept={handleAcceptJob}
            onReject={handleRejectJob}
            onDelete={handleDeleteJob}
          />
        ) : (
          <div className="job-list">
            {pendingJobs.length === 0 ? (
              <p>Tidak ada pekerjaan yang menunggu persetujuan.</p>
            ) : (
              pendingJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <button onClick={() => setSelectedJob(job)}>Detail</button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <FooterAdmin />
    </div>
  );
}

export default BerandaAdmin;
