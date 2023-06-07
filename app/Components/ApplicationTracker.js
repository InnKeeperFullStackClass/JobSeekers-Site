import React from "react";

const ApplicationTracker = ({ applications }) => {
  if (!applications || applications.length === 0) {
    return <p>No applications found.</p>;
  }

  return (
    <div>
      <h3>Application Tracker</h3>
      {applications.map((application) => (
        <div key={application.id}>
          <p>{application.jobTitle}</p>
          <p>Status: {application.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicationTracker;
