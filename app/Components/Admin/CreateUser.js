import React, { useState } from "react";

const CreateUser = () => {
  const [userName, setUserName] = useState("");

  const handleCreateUser = () => {
    // Send a request to create a new user with the 'userName'
    // Example API call:
    // fetch("/api/users", {
    //   method: "POST",
    //   body: JSON.stringify({ name: userName }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // User created successfully, handle the response
    //     } else {
    //       // Handle error response
    //     }
    //   })
    //   .catch((error) => console.error(error));

    // For this example, we'll simply log the user name
    console.log(`Creating user: ${userName}`);
    setUserName(""); // Clear the input field
  };

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create</button>
    </div>
  );
};

export default CreateUser;
