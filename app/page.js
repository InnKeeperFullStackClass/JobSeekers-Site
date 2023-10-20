"use client";
import React, { useEffect } from "react";

import Image from "next/image";
import HomeHero from "../public/purposefulpathbg.png";

import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Testimonial from "@/layout/Testimonial";
import Footer from "./Components/Footer";

export default function Home({ user }) {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className=" mx-auto mt-9   py-10 md:py-10">
        <div className="mb-12" style={{ animation: "fadeIn 1s ease-in-out" }}>
          <div className=" py-10 md:py-10 text-white bg-gradient-to-b from-[#006950] to-gray-500 flex flex-col justify-center md:flex-row mt-9">
            <div className="md:w-1/2  md:mt-0">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Welcome to the Purposeful Path Platform
              </h1>
              <p className="text-lg md:text-xl mt-4">
                Make the Best of Life with Impact-Driven Mentorship
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <Image className="max-w-md " src={HomeHero} alt="logo" priority />
            </div>
          </div>
        </div>

        <section className="mb-12 text-center">
          <p className="text-lg text-gray-700">
            Are you a young job-seeker or a budding entrepreneur? Do you feel
            the burning desire to make the best of your life, but find yourself
            in need of guidance and support? Look no further!{" "}
            <span className="text-[#006950] font-bold">Purposeful Path</span> is
            here to empower you with the knowledge, skills, and mentorship
            necessary to thrive in today's dynamic world.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            We understand that the journey towards a fulfilling career can be
            daunting. The path is rarely linear, and the challenges can seem
            insurmountable. But we believe that with the right mentorship and
            guidance, you have the power to overcome any obstacle and unlock
            your true potential.
          </p>
        </section>

        <section>
          <div className="mb-12">
            <h4 className="mb-7 text-3xl text-center text-[#006950] font-bold mb-5">
              Why PurposefulPath ?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div
                className="bg-[#F77200] rounded-lg p-6 shadow-md"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#006950] font-bold mb-4">
                  1
                </div>

                <p className="text-white">
                  <span className="font-bold">Expert Mentors:</span> Our
                  platform boasts a carefully curated network of experienced
                  mentors who have successfully navigated the professional
                  landscape. They have walked the path you aspire to traverse
                  and are eager to share their wisdom with you. Our mentors are
                  not only accomplished professionals but also passionate about
                  nurturing the next generation of talent. They will provide you
                  with the insights, strategies, and support you need to excel.
                </p>
              </div>

              <div
                className="bg-[#007DBA] rounded-lg p-6 shadow-md"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#006950] font-bold mb-4">
                  2
                </div>

                <p className="text-white">
                  <span className="font-bold">Tailored Guidance: </span>We
                  understand that each individual's aspirations and challenges
                  are unique. That's why we offer personalized mentorship
                  tailored to your specific goals and ambitions. Whether you're
                  seeking guidance on job search strategies, interview
                  preparation, career pivots, or launching your own venture, our
                  mentors will provide program referrals, targeted advice, and
                  actionable steps to propel you forward.
                </p>
              </div>

              <div
                className="bg-[#FF4155] rounded-lg p-6 shadow-md"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#006950] font-bold mb-4">
                  3
                </div>

                <p className="text-white">
                  <span className="font-bold">Skill Development: </span>At
                  PurposefulPaths, we believe that true success goes beyond mere
                  knowledge. From communication and leadership skills to
                  financial literacy and problem-solving, our resources are
                  curated to bridge the gap between academic/technical skills
                  and real-world success.
                </p>
              </div>

              <div
                className="bg-[#8A3FEE] rounded-lg p-6 shadow-md"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#006950] font-bold mb-4">
                  4
                </div>

                <p className="text-white">
                  <span className="font-bold">Community Support:</span> Our
                  vibrant community of jobseekers and budding entrepreneurs is
                  here to provide you with peer support and collaborative
                  opportunities. Share your experiences, learn from others, and
                  grow together on your journey to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonialsection  mx-auto bg-[#D2E4D6]">
          <div className="py-12">
            <div className="mx-auto mb-5 text-center">
              <h4 className="text-2xl text-[#141414] font-bold">
                Dont just take Our Word for it...
              </h4>

              <div>
                <Testimonial />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-6 rounded-lg shadow-lg text-center mb-12 mt-9 mb-9">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left">
              <h3 className="text-3xl md:text-3xl font-bold mb-4">
                Featured Courses
              </h3>
              <p className="text-gray-700">
                Discover our carefully curated courses designed to help you
                achieve your career and personal development goals. Each course
                is crafted to provide you with valuable insights and practical
                knowledge.
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured Course 1 */}
              <div className="bg-blue-200 rounded-lg p-6 shadow-md">
                <h4 className="text-[#006950] font-bold">Course Title 1</h4>
                <p className="text-gray-700">
                  Brief description of the course.
                </p>
              </div>
              {/* Featured Course 2 */}
              <div className="bg-blue-200 rounded-lg p-6 shadow-md">
                <h4 className="text-[#006950] font-bold">Course Title 2</h4>
                <p className="text-gray-700">
                  Brief description of the course.
                </p>
              </div>
              {/* Featured Course 3 */}
              <div className="bg-blue-200 rounded-lg p-6 shadow-md">
                <h4 className="text-[#006950] font-bold">Course Title 3</h4>
                <p className="text-gray-700">
                  Brief description of the course.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/mentoringpic1.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-70 py-16">
            <div className="container mx-auto text-white p-6 rounded-lg shadow-lg text-center mb-12">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="">
                <div className="bg-[#006950]rounded-full w-max-xs p-6 shadow-md">
                  <h4 className="text-white font-bold">
                    Virtual Meet up for Founders
                  </h4>
                  <p className="text-white">Date: 22nd, October, 2023.</p>
                  <p className="text-white">Topic: [Insert Topic]</p>
                  <a href="/event-details" className="text-[#007DBA]">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg text-center mb-12">
          <h3 className="text-xl font-bold mb-4">Latest Blog Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Blog Post 1 */}
            <div className="bg-[#667C73] rounded-lg p-6 shadow-md">
              <h4 className="text-white font-bold">Blog Post Title 1</h4>
              <p className="text-white">Published on: [Insert Date]</p>
              <p className="text-white">Author: [Author Name]</p>
              <a href="/blog/post-1" className="text-[#007DBA]">
                Read More
              </a>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-[#667C73] rounded-lg p-6 shadow-md">
              <h4 className="text-white font-bold">Blog Post Title 2</h4>
              <p className="text-white">Published on: [Insert Date]</p>
              <p className="text-white">Author: [Author Name]</p>
              <a href="/blog/post-2" className="text-[#F77200]">
                Read More
              </a>
            </div>
          </div>
        </section>
        <section className="bg-[#006950] text-white p-6 rounded-lg shadow-lg text-center mb-12">
          <p className="text-lg">
            Unleash your potential. Embrace your dreams. Sign up now and embark
            on a transformative mentorship journey with PurposefulPath.
          </p>
          <p className="mt-4 text-lg">
            Together, we will make the best of life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center mt-7 mx-auto">
            {!user ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <button className="bg-white text-[#006950] hover:bg-[#006950] hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                    Sign Up
                  </button>
                </Link>
                <span className="text-white">or</span>
                <Link href="/login">
                  <button className="bg-[#717788] hover:bg-[#006950] hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                    Sign In
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link href="/dashboard">
                  <button className="bg-[#006950] hover:bg-white hover:text-[#006950] px-4 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
