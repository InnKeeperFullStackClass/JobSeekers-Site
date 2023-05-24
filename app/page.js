import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
import HomeHero from "../public/mentoringpic1.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        <div>
          <nav className="mt-7 mb-7">
            <div className="flex justify-end">
              <ul className="flex gap-3">
                <li>
                  <Link
                    href="/jobseeker"
                    className="nav-link shadow-lg  text-black "
                  >
                    Job Seeker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="nav-link shadow-lg  text-black "
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="nav-link shadow-lg  text-black">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="relative">
          <Image src={HomeHero} alt="homehero" className="max-w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex">
            <div className="w-1/2 bg-gray-500 bg-opacity-50 flex items-center justify-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold">Box 1 Title</h2>
                <p>Box 1 Description</p>
                <button className="bg-blue text-white px-4 py-2 mt-2 rounded">
                  Button 1
                </button>
              </div>
            </div>
            <div className="w-1/2 bg-gray-500 bg-opacity-50 flex items-center justify-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold">Box 2 Title</h2>
                <p>Box 2 Description</p>
                <button className="bg-blue text-white px-4 py-2 mt-2 rounded">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 mb-7">
          <p className="text-3xl mb-7 text-center">
            The choice is yours, we’ve got you covered
          </p>
          <div className="flex">
            <div className="w-1/2 pr-3">
              <img src="/mentorpic5.jpg" alt="home1" />
            </div>
            <div className="w-1/2 pr-3">
              <div className="flex flex-col gap-4">
                <div className="card shadow-lg text-2xl">
                  <p className="text-red">Hire remote Talent</p>
                  <p className="text-black">let us connect you</p>
                </div>
                <div className="card shadow-lg text-2xl">
                  <p className="text-red">Hire remote Talent</p>
                  <p className="text-black">let us connect you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </DefaultLayout>
  );
}
