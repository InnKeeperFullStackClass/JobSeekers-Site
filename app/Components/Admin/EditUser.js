import React, { useState, useEffect } from "react";

const EditUser = ({ user, onCancel }) => {
  const [editedName, setEditedName] = useState(user.name);

  const handleSaveChanges = () => {
    // Send a request to update the user with the new 'editedName'
    // Example API call:
    // fetch(`/api/users/${user.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify({ name: editedName }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // User updated successfully, handle the response
    //     } else {
    //       // Handle error response
    //     }
    //   })
    //   .catch((error) => console.error(error));

    // For this example, we'll simply log the edited user name
    console.log(`Editing user ${user.id}: ${editedName}`);
    onCancel(); // Close the edit view
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleSaveChanges}>Save Changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditUser;
