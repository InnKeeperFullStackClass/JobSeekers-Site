import React, { useState, useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import UsersList from "@/app/Components/Admin/UsersList";
import CreateUser from "@/app/Components/Admin/CreateUser";
import EditUser from "@/app/Components/Admin/EditUser";

const AdminPage = () => {
  const [view, setView] = useState("list"); // Initial view is the list of users
  const [selectedUser, setSelectedUser] = useState(null); // User selected for editing

  // Handle navigation between views
  const navigate = (newView) => {
    setView(newView);
    setSelectedUser(null); // Clear selected user when navigating to a new view
  };

  return (
    <AdminLayout>
      <div>
        {/* Add navigation buttons or tabs to switch between views */}
        <button onClick={() => navigate("list")}>User List</button>
        <button onClick={() => navigate("create")}>Create User</button>
      </div>

      {/* Render the appropriate view based on the 'view' state */}
      {view === "list" && (
        <UsersList onEdit={(user) => setSelectedUser(user)} />
      )}
      {view === "create" && <CreateUser />}
      {view === "edit" && (
        <EditUser user={selectedUser} onCancel={() => navigate("list")} />
      )}
    </AdminLayout>
  );
};

export default AdminPage;
