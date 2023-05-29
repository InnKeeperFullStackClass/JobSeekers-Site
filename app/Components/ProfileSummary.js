import React from "react";

const ProfileSummary = ({ name, profilePicture, headline, introduction }) => {
  return (
    <div className="profile-summary">
      <img src={profilePicture} alt="Profile Picture" />
      <h2>{name}</h2>
      <h3>{headline}</h3>
      <p>{introduction}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfileSummary;
