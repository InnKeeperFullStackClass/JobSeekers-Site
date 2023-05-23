import React, { useState } from "react";

const JobSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search jobs..."
        className="border p-2 mr-2"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default JobSearch;
