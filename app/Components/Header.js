import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logopurpose.svg";

const Header = ({ user }) => {
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
          <div className="flex gap-3">
            {!user ? (
              <>
                <Link
                  href="/register"
                  className="p-1 px-6 rounded bg-[#008000] text-white border border-blue-500"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="p-1 px-6 rounded bg-[#008000] text-white border border-blue-500"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/Dashboard"
                  className="p-2 px-4 rounded bg-blue-500 text-white"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
