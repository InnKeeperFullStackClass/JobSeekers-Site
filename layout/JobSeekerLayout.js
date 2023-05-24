import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Sidebar from "@/app/Components/Sidebar";
import React from "react";

const JobSeekerLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default JobSeekerLayout;
