import React from "react";
import Footer from "@/app/Components/Footer";
import Sidebar from "@/app/Components/Sidebar";

const JobSeekerLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 bg-gray-100 p-4 mb-7">{children}</main>
      </div>

      <Footer className="mt-7" />
    </div>
  );
};

export default JobSeekerLayout;
