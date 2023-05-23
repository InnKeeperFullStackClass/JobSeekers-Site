import React, { useState } from "react";

const TestimonialSubmissionForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");

  const handleSubmit = () => {
    // Perform form submission logic
    onSubmit({ name, testimonial });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Testimonial"
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TestimonialSubmissionForm;
