import React from "react";
import Link from "next/link";

const Header = ({ user }) => {
  return (
    <header className="mt-4 mb-4 text-gray-600 body-font max-w-7xl mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <h1 className="text-xl font-bold">*D O M*</h1>
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
              <Link href="/jobs" className="text-black hover:text-gray-300">
                Jobs
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            {!user ? (
              <>
                <Link
                  href="/register"
                  className="p-1 px-6 rounded bg-blue-500 text-white border border-blue-500"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="p-1 px-6 rounded bg-blue-500 text-white border border-blue-500"
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
