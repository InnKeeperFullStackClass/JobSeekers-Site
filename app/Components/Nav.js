import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logopurpose.svg";

const Nav = () => {
  return (
    <div>
      <div>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
