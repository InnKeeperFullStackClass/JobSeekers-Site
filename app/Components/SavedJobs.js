import React from "react";

const SavedJobs = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <p>No saved jobs found.</p>;
  }

  return (
    <div>
      <h3>Saved Jobs</h3>
      {jobs.map((job) => (
        <div key={job.id}>
          <p>{job.title}</p>
          <button onClick={() => removeSavedJob(job.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;
