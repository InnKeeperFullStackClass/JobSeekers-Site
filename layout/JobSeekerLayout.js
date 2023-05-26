import React from "react";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Sidebar from "@/app/Components/Sidebar";

const JobSeekerLayout = ({ children }) => {
  return (
    <div className=" min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row flex-1">
        <Sidebar className="w-1/5" />

        <main className="flex-1 bg-gray-100 px-4 py-8">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default JobSeekerLayout;
