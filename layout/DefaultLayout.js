import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
