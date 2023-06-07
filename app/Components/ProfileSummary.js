import React from "react";

const ProfileSummary = ({ name, headline, introduction }) => {
  return (
    <div className="profile-summary">
      <h2>{name}</h2>
      <h3>{headline}</h3>
      <p>{introduction}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfileSummary;
