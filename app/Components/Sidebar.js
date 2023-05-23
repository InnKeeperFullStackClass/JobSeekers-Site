import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 w-1/4">
      <ul className="p-4 space-y-2">
        <li>
          <Link
            href="/admin/dashboard"
            className="block text-blue-500 font-medium"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/admin/users" className="block hover:text-blue-500">
            Users
          </Link>
        </li>
        <li>
          <Link href="/admin/jobs" className="block hover:text-blue-500">
            Jobs
          </Link>
        </li>
        {/* Add more sidebar links */}
      </ul>
    </aside>
  );
};

export default Sidebar;
