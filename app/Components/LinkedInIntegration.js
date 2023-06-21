import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";

const LinkedInIntegration = () => {
  const handleSuccess = (response) => {
    // Handle the successful LinkedIn authentication response
    console.log("LinkedIn login success:", response);
  };

  const handleFailure = (error) => {
    // Handle the LinkedIn authentication failure
    console.error("LinkedIn login error:", error);
  };

  return (
    <div>
      <h2>LinkedIn Integration</h2>
      <LinkedIn
        clientId="YOUR_LINKEDIN_CLIENT_ID"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
      >
        <button>Connect with LinkedIn</button>
      </LinkedIn>
    </div>
  );
};

export default LinkedInIntegration;
