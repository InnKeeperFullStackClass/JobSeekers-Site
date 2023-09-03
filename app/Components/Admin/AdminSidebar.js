import React from "react";
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa"; // You can customize these icons
import Link from "next/link"; // Use your routing library

const AdminSidebar = () => {
  return (
    <nav className="bg-[#717788] text-white h-screen w-64 flex flex-col">
      <div className="p-4">
        {/* Admin Dashboard Logo */}
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {/* Sidebar Links */}
        <li className="py-3 px-4 hover:bg-blue-700">
          <Link href="/">
            <FaHome className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="py-3 px-4 hover:bg-blue-700">
          <Link href="/users">
            <FaUsers className="mr-2" />
            Users
          </Link>
        </li>
        <li className="py-3 px-4 hover:bg-blue-700">
          <Link href="/settings">
            <FaCog className="mr-2" />
            Settings
          </Link>
        </li>
      </ul>
      <div className="p-4">
        {/* Logout Button */}
        {/* <button className="flex items-center text-red-500 hover:text-red-400">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button> */}
      </div>
    </nav>
  );
};

export default AdminSidebar;
