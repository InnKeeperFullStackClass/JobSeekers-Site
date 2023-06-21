import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <Link href="/" className="text-sm">
            Home
          </Link>
          <Link href="/" className="text-sm">
            Our Values
          </Link>
          <Link href="/resources" className="text-sm">
            Resources
          </Link>
          <Link href="/joblistings" className="text-sm">
            Job Listings
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
          <Link href="/" className="text-sm">
            Support
          </Link>
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
