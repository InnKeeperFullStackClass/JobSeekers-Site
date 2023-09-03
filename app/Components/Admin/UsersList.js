import React, { useState, useEffect } from "react";

const UsersList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch users data from your API or database here
    // Update the 'users' state with the fetched data
    // Example API call:
    // fetch("/api/users")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.error(error));

    // For this example, let's assume 'users' is an array of user objects
    const sampleUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      // Add more user data
    ];
    setUsers(sampleUsers);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <button onClick={() => onEdit(user)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
