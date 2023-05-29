import React, { useEffect, useState } from "react";

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings data from an API or any data source
    // Update the jobListings state with the fetched data
    // For example:
    fetch("/api/joblistings")
      .then((response) => response.json())
      .then((data) => setJobListings(data));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;
