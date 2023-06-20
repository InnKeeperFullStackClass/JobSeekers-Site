"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logopurpose (1).svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6 relative z-10">
        <div className="flex items-center ">
          <Link href="/" className="flex title-font font-medium items-center">
            <Image className="" src={Logo} alt="logo" width={110} priority />
          </Link>
        </div>
        <button
          className="hamburger-menu ml-auto md:hidden relative z-20"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex flex-col items-start mt-4" : "hidden"
          } absolute top-0 left-0 right-0 bg-white p-4 mt-1 rounded-md shadow-lg z-10 md:static md:flex md:flex-row md:items-center md:mt-0`}
        >
          <Link
            href="/"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="text-black-300 hover:bg-[#006950] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Resources
          </Link>

          <Link
            href="/contact"
            className="text-black-300 hover:bg-[#006950] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact US
          </Link>

          <Link href="/register">
            <button className="text-white bg-[#006950] hover:bg-white hover:text-[#006950] px-3 py-2 rounded-md text-sm font-medium">
              Login/Sign Up
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
