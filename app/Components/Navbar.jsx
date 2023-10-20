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
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed container top-0 w-full flex flex-col md:flex-row items-center justify-between p-4  bg-white transition-all ease-in-out duration-300 ${
        hasScrolled ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className=" container flex items-center justify-between">
        <Link href="/" className="flex title-font gap-2 font-medium">
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Hamburger isMenuOpen={isMenuOpen} />
        </button>
      </div>

      <ul
        className={`container items-center flex flex-col md:flex-row gap-4 md:gap-7 mt-2 md:mt-0 ${
          !isMenuOpen ? "hidden md:flex" : ""
        }`}
      >
        {NavBarItems.map((item) => (
          <li key={item.label} className="text-[#111] sm:mb-3 ">
            <Link
              href={item.url}
              className={router.pathname === item.url ? "active-link" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`md:flex md:flex-row sm:gap-4 sm:flex-col mt-2 sm:mb-4 sm:mt-5 md:mt-0 items-center ${
          !isMenuOpen ? "hidden md:flex" : ""
        }`}
      >
        <div className="login mb-2 md:mb-0   sm:mb-5"></div>
        <Link href="/register">
          <button className="button ml-4 md:mt-0 sm:mt-2">Get Started</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
