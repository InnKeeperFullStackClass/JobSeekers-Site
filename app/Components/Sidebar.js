import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="bg-[#4EBF85] w-1/4">
      <div className="p-3">
        {/* <div className="flex items-center justify-center mb-4">
          {profilePicture ? (
            <Image
              src={profilePicture}
              alt="Profile Picture"
              width={80}
              height={80}
              priority
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="relative w-16 h-16 rounded-full bg-gray-300"></div>
          )}
        </div> */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="mb-2"
          />
          {profilePicture && (
            <div className="flex items-center justify-center">
              <Image
                src={profilePicture}
                alt="Profile Picture"
                width={200}
                height={200}
                priority
                className="rounded-full"
              />
            </div>
          )}
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              href="/about"
              className="block  hover:text-blue-700 font-medium"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/joblistings"
              className="block  hover:text-blue-700 font-medium"
            >
              Job Listings
            </Link>
          </li>

          <li>
            <Link
              href="/chatrooms"
              className="block  hover:text-blue-700 font-medium"
            >
              Chat Room
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="block hover:text-blue-700 font-medium"
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
