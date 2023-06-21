import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <p className="mt-4 text-sm">About</p>
          <p className="text-sm">Our Values</p>
          <p className="text-sm">Resources</p>
          <p className="text-sm">Job Listings</p>
          <p className="text-sm">Legal</p>
          <p className="text-sm">Contact</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm">Lagos, Nigeria</p>
        </div>
        <div className="col-span-1">
          <p className="text-sm">
            &copy; 2023 PurposefulPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
