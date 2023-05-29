import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  // Replace the placeholder profile picture URL with the actual profile picture URL
  const profilePictureUrl = "/../public/Dami Portrait (4).jpg";

  return (
    <aside className="bg-gray-200 w-1/4">
      <div className="p-4">
        <div className="flex items-center justify-center mb-4">
          {/* Display the profile picture */}
          <Image
            src={profilePictureUrl}
            alt="Profile Picture"
            width={80}
            height={80}
            priority
            className="w-16 h-16 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/about"
              className="block text-blue-500 hover:text-blue-700 font-medium"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/joblistings"
              className="block text-blue-500 hover:text-blue-700 font-medium"
            >
              Job Listings
            </Link>
          </li>

          <li>
            <Link
              href="/chatrooms"
              className="block text-blue-500 hover:text-blue-700 font-medium"
            >
              Chat Room
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block text-blue-500 hover:text-blue-700 font-medium"
            >
              Resources
            </Link>
          </li>
          {/* Add more sidebar links */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
