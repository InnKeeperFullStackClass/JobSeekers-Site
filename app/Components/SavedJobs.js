import React from "react";

const SavedJobs = ({ jobs }) => {
  return (
    <div className="saved-jobs">
      <h2>Saved Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;
