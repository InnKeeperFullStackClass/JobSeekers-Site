import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/joblistings")
      .then((response) => response.json())
      .then((data) => {
        setJobListings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <p>Loading job listings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p>Error loading job listings. Please try again later.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="mt-9 text-3xl text-center">Job Listings</h1>
      <ul>
        {jobListings.map((job) => (
          <motion.li
            key={job.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {job.title}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default JobListingsPage;
