"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logopurpose.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mt-4 mb-4 text-gray-600 body-font">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image src={Logo} alt="logo" width={80} height={80} priority />
          </Link>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-black hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:flex hidden space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-black hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
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
      </div>
    </header>
  );
};

export default Header;
