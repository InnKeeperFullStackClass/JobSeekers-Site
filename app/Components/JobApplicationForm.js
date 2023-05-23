import React, { useState } from "react";

const JobApplicationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = () => {
    // Perform form submission logic
    onSubmit({ name, email, coverLetter });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Cover Letter"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JobApplicationForm;
