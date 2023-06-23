import React, { useState } from "react";

const JobSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Perform search based on keyword and location
    // Display search results
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <label htmlFor="keyword" className="block font-semibold mb-1">
          Keyword
        </label>
        <input
          id="keyword"
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block font-semibold mb-1">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-full"
        />
      </div>
      <button
        onClick={handleSearch}
        className="btn rounded bg-[#4C9CA6] text-white py-2 px-4"
      >
        Search
      </button>
    </div>
  );
};

export default JobSearch;
