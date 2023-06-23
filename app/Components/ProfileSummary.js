import React, { useState } from "react";

import Image from "next/image";

const ProfileSummary = ({ name, headline, introduction }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
          className="mb-2"
        />
        {profilePicture && (
          <div className="flex items-center justify-center">
            <Image
              src={profilePicture}
              alt="Profile Picture"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
          </div>
        )}
      </div>
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <h3 className="text-lg text-gray-600 mb-4">{headline}</h3>
      <p className="text-gray-700">{introduction}</p>
      <button className="btn rounded bg-[#4C9CA6] text-white py-2 px-4 mt-4">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileSummary;
