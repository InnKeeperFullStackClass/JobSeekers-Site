import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"; // You can customize this icon
import Logo from "../../../public/pplogo.svg";

const AdminHeader = ({ user }) => {
  return (
    <header className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center">
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>

        <div className="flex space-x-2">
          <FaUserCircle className="text-2xl" />
          <span>{user}</span>
          <Link href="/logout" className="text-red-500 hover:text-red-400">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
