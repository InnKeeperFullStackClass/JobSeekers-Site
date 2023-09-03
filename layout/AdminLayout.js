import React from "react";
import Footer from "@/app/Components/Footer";
import AdminSidebar from "@/app/Components/Admin/AdminSidebar";
import AdminHeader from "@/app/Components/Admin/AdminHeader";

const AdminLayout = ({ children, user }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader user={user} />
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
