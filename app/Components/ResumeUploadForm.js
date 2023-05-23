import React, { useState } from "react";

const ResumeUploadForm = ({ onUpload }) => {
  const [resume, setResume] = useState(null);

  const handleUpload = () => {
    // Perform upload logic
    onUpload(resume);
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setResume(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ResumeUploadForm;
