import React from "react";

const JobListing = ({ job }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      {/* Add more job details */}
    </div>
  );
};

export default JobListing;
