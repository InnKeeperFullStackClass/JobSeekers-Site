import React, { useState } from "react";

const ResumeUploadForm = ({ onUpload }) => {
  const [resume, setResume] = useState(null);

  const handleUpload = () => {
    // Perform upload logic
    onUpload(resume);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <label htmlFor="resume" className="block font-semibold mb-1">
          Upload Resume
        </label>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="border border-gray-300 rounded-md py-2 px-3 w-full"
        />
      </div>
      <button
        onClick={handleUpload}
        className="btn rounded bg-[#4C9CA6] text-white py-2 px-4"
      >
        Upload
      </button>
    </div>
  );
};

export default ResumeUploadForm;
