import React from "react";
import Link from "next/link";

import Image from "next/image";
import Profile from "../public/damiportrait(4).jpg";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineWechat } from "react-icons/ai";
import { GrResources } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const JobSeekerLayout = ({ children, user }) => {
  return (
    <div className="md:flex h-screen">
      <nav className="grow md:w-48 shadow-md md:relative bg-[#E6F4F1]  text-black z-[100] flex justify-between">
        <div className="w-full flex flex-col">
          <div className="flex items-center mb-7 mt-3">
            <Link href="/" className="flex title-font font-medium items-center">
              <Image
                className=""
                src="./pplogo.svg"
                alt="logo"
                width={110}
                height={110}
                priority
              />
            </Link>
          </div>
          <ul className="pl-5 pt-5 pb-2 text-zinc-500 md:block grow">
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-3 hover:text-blue-1"
              >
                <AiOutlineHome width={22} />
                <span>Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/posts"
                className="flex gap-3 items-center py-3 hover:text-blue-1"
              >
                <AiOutlineWechat width={22} />
                <span>Forum</span>
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="flex gap-3 items-center py-3 hover:text-blue-1"
              >
                <GrResources width={22} />
                <span>Resources</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
              >
                <MdOutlineSupportAgent width={18} height={27} />
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main w-full flex flex-col">
        <header className="p-4 flex justify-between items-center shadow-md">
          <div className="profile flex items-center gap-2">
            <h2 className="text-3xl text-center  font-bold mb-5 mt-5">
              Welcome {user},
            </h2>
          </div>

          <div className="logout flex gap-2">
            <div className="profile ">
              <Image
                src={Profile}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <button className="text-zinc-600 flex items-center gap-3 hover:text-blue-1">
              <BiLogOut width={15} />
              <span>Logout</span>
            </button>
          </div>
        </header>
        <main className="dashboard__content grow overflow-y-scroll px-8 md:px-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default JobSeekerLayout;
