"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { NavBarItems } from "@/layout/constants";

import { Logo } from "@/public";
import Hamburger from "./HamburgerMenu";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between p-4 bg-white bg-opacity-80 backdrop-blur-md transition-all ease-in-out duration-300 ${
        hasScrolled ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Image src={Logo} alt="logo" width={110} priority />
        </Link>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Hamburger isMenuOpen={isMenuOpen} />
        </button>
      </div>

      <div
        className={`w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-7 mt-4 md:mt-0 items-center">
          {NavBarItems.map((item) => (
            <li key={item.label} className="text-[#111]">
              <Link
                href={item.url}
                className={`hover:text-blue-500 transition-colors duration-300 ${
                  router.pathname === item.url ? "font-bold text-blue-600" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 items-center">
          <Link href="/register">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
