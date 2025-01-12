import React, { useEffect, useState } from 'react';
import './BerandaAdmin.css';
import NavbarAdmin from '../components/NavbarAdmin';
import FooterAdmin from '../components/FooterAdmin';
import JobDetailAdmin from '../components/JobDetailAdmin';
import { getPendingJobs, updateJobStatus, deleteJobAsAdmin } from '../../api';

function BerandaAdmin() {
  const [pendingJobs, setPendingJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const jobs = await getPendingJobs();
        setPendingJobs(jobs);
      } catch (err) {
        setError(err.message || 'Gagal memuat data pekerjaan.');
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleAcceptJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'approved');
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil disetujui.');
      setSelectedJob(null);
    } catch (err) {
      alert('Gagal menyetujui pekerjaan.');
    }
  };

  const handleRejectJob = async () => {
    try {
      await updateJobStatus(selectedJob.id, 'rejected');
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil ditolak.');
      setSelectedJob(null);
    } catch (err) {
      alert('Gagal menolak pekerjaan.');
    }
  };

  const handleDeleteJob = async () => {
    try {
      await deleteJobAsAdmin(selectedJob.id);
      setPendingJobs((prev) => prev.filter((job) => job.id !== selectedJob.id));
      alert('Pekerjaan berhasil dihapus.');
      setSelectedJob(null);
    } catch (err) {
      alert('Gagal menghapus pekerjaan.');
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
