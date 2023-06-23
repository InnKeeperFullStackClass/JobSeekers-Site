import React, { useState } from "react";

const JobApplicationForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let data = {
      name,
      email,
      coverLetter,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setCoverLetter("");
        setSubmitted(true);
      } else {
        console.log("Response failed!");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md py-2 px-3 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="coverLetter" className="block font-semibold mb-1">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            placeholder="Enter your cover letter"
            className="border border-gray-300 rounded-md py-2 px-3 w-full h-32 resize-none"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn rounded bg-[#4C9CA6] text-white py-2 px-4"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Send Message"}
        </button>
        {submitted && (
          <div className="text-green-500">Message submitted successfully!</div>
        )}
      </form>
    </div>
  );
};

export default JobApplicationForm;
