import React from "react";
import "./JobCard.css";

function JobCard({ job, onClick }) {
  return (
    <div className="job-card" onClick={() => onClick(job)}>
      <div className="job-icon">🟠</div>
      <div className="job-info">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p className="job-salary">{job.salary}</p>
      </div>
    </div>
  );
}

export default JobCard;
