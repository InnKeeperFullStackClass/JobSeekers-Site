import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
