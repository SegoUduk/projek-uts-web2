// src/components/JobList.js
import React from 'react';
import JobCard from './JobCard'; // Mengimpor JobCard

const jobs = [
  {
    title: "HRD",
    company: "PT Mencari Cinta Sejati",
    salary: "Rp. 3-4 Juta",
    location: "Jakarta",
    type: "Full Time",
    companyProfile: "PT Mencari Cinta Sejati",
    qualifications: ["max 25 tahun", "Pendidikan minimal SMK", "wajib memiliki motor dan SIM C", "Pengalaman dan non pengalaman silahkan melamar", "diutamakan domisili Kelapa Gading"],
  },
  {
    title: "Software Engineer",
    company: "PT Teknologi Terdepan",
    salary: "Rp. 5-6 Juta",
    location: "Bandung",
    type: "Full Time",
    companyProfile: "PT Teknologi Terdepan",
    qualifications: ["Pendidikan minimal S1 Teknik Informatika", "Pengalaman minimal 2 tahun", "Menguasai JavaScript dan React", "Diutamakan yang berdomisili di Bandung"],
  },
  {title: "Tukang Kebun",
    company: "PT Teknologi Terdepan",
    salary: "Rp. 5-6 Juta",
    location: "Bandung",
    type: "Full Time",
    companyProfile: "PT Teknologi Terdepan",
    qualifications: ["Pendidikan minimal S1 Teknik Perkebunan", "Pengalaman minimal 2 tahun", "Menguasai JavaScript dan React", "Diutamakan yang berdomisili di Bandung"],
  },
];

function JobList({ selectedLocation, selectedJobType, selectedWorkSystem, onSelectJob }) {
  // Menyaring pekerjaan berdasarkan filter yang dipilih
  const filteredJobs = jobs.filter(job => {
    return (
      (selectedLocation ? job.location === selectedLocation : true) &&
      (selectedJobType ? job.type === selectedJobType : true) &&
      (selectedWorkSystem ? job.type === selectedWorkSystem : true)
    );
  });

  return (
    <div className="job-list">
      {filteredJobs.map((job, index) => (
        <JobCard key={index} job={job} onClick={onSelectJob} />
      ))}
    </div>
  );
}

export default JobList;
