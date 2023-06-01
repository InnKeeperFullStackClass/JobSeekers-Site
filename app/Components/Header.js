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
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex title-font font-medium items-center">
          <Image src={Logo} alt="logo" width={110} height={80} priority />
        </Link>

        <nav className="md:ml-auto flex items-center space-x-4">
          <div className="md:flex hidden space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-black hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-black hover:text-gray-300"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="hamburger-menu md:hidden"
              aria-label="Open Menu"
              onClick={toggleMenu}
            >
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </nav>

        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
