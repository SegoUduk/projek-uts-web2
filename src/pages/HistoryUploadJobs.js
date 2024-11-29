import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import './JobHistori.css';

function HistoryUploadJobs() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobsUploaded = [
    {
      id: 1,
      title: "HRD",
      company: "PT Mencari Cinta Sejati",
      location: "Jakarta",
      salary: "Rp. 3-4 Juta",
      applicants: [
        {
          id: 1,
          name: "Ahmad",
          profile: "https://via.placeholder.com/50",
          qualifications: ["Pendidikan minimal SMK", "Pengalaman kerja 2 tahun di HRD", "Mampu bekerja dalam tim"],
          status: "pending",
        },
        {
          id: 2,
          name: "Budi",
          profile: "https://via.placeholder.com/50",
          qualifications: ["Pendidikan minimal D3", "Pengalaman 1 tahun di HR", "Mampu berkomunikasi dengan baik"],
          status: "pending",
        },
      ],
    },
    {
      id: 2,
      title: "IT Support",
      company: "PT Teknologi Cerdas",
      location: "Bandung",
      salary: "Rp. 4-6 Juta",
      applicants: [
        {
          id: 1,
          name: "Siti",
          profile: "https://via.placeholder.com/50",
          qualifications: ["Pendidikan minimal D3 Informatika", "Pengalaman di IT Support", "Menguasai troubleshooting hardware dan software"],
          status: "pending",
        },
      ],
    },
  ];

  const handleAcceptApplicant = (jobId, applicantId) => {
    const updatedJobs = jobsUploaded.map((job) => {
      if (job.id === jobId) {
        const updatedApplicants = job.applicants.map((applicant) => {
          if (applicant.id === applicantId) {
            return { ...applicant, status: "accepted" };
          }
          return applicant;
        });
        return { ...job, applicants: updatedApplicants };
      }
      return job;
    });
    setSelectedJob(updatedJobs.find((job) => job.id === selectedJob.id)); // Perbarui detail pelamar
  };

  const handleRejectApplicant = (jobId, applicantId) => {
    const updatedJobs = jobsUploaded.map((job) => {
      if (job.id === jobId) {
        const updatedApplicants = job.applicants.map((applicant) => {
          if (applicant.id === applicantId) {
            return { ...applicant, status: "rejected" };
          }
          return applicant;
        });
        return { ...job, applicants: updatedApplicants };
      }
      return job;
    });
    setSelectedJob(updatedJobs.find((job) => job.id === selectedJob.id)); // Perbarui detail pelamar
  };

  return (
    <div>
      <Navbar />
      <div className="job-histori-container">
        <h2 className="search-title">Histori Unggah Lowongan Kerja</h2>

        <button className="back-button" onClick={() => window.history.back()}>
          Kembali
        </button>

        <div className="job-histori-content">
          <div className="job-list">
            {jobsUploaded.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>

          {selectedJob && (
            <div className="job-detail-container">
              <h3>{selectedJob.title}</h3>
              <h4>Pelamar:</h4>
              {selectedJob.applicants.length === 0 ? (
                <p>Tidak ada pelamar untuk pekerjaan ini.</p>
              ) : (
                <ul>
                  {selectedJob.applicants.map((applicant) => (
                    <li key={applicant.id}>
                      <div className="applicant-detail">
                        <img
                          src={applicant.profile}
                          alt={applicant.name}
                          className="applicant-profile"
                        />
                        <div>
                          <h5>{applicant.name}</h5>
                          <ul>
                            {applicant.qualifications.map((qual, index) => (
                              <li key={index}>{qual}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="applicant-actions">
                          {applicant.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  handleAcceptApplicant(selectedJob.id, applicant.id)
                                }
                                className="accept-button"
                              >
                                Terima
                              </button>
                              <button
                                onClick={() =>
                                  handleRejectApplicant(selectedJob.id, applicant.id)
                                }
                                className="reject-button"
                              >
                                Tolak
                              </button>
                            </>
                          )}
                          <p>Status: {applicant.status}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HistoryUploadJobs;
