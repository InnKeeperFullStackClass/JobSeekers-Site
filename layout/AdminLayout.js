import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Sidebar from "@/app/Components/Sidebar";

import React, { useState } from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
