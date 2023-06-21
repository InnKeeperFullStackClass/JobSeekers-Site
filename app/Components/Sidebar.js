import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.aside
      className="bg-[#4EBF85] w-1/4"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      <div className="p-3">
        <div className="flex items-center justify-center mb-4">
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
        </div>
        <div>
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
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="block hover:text-blue-700 font-medium"
            >
              About
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/joblistings"
              className="block hover:text-blue-700 font-medium"
            >
              Job Listings
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/chatrooms"
              className="block hover:text-blue-700 font-medium"
            >
              Chat Room
            </Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/resources"
              className="block hover:text-blue-700 font-medium"
            >
              Resources
            </Link>
          </motion.li>
          {/* Add more sidebar links */}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
