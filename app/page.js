"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import Testimonial from "@/layout/Testimonial";
import Footer from "./Components/Footer";
import HomeHero from "../public/purposefulpathbg.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200, offset: 100 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <header className="bg-gradient-to-b from-[#006950] to-gray-500 text-white py-16 px-4 text-center md:text-left md:flex md:justify-between md:items-center">
        <div className="max-w-xl mx-auto md:mx-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="text-[#00B894]">Purposeful Path</span>
          </h1>
          <p className="text-lg mt-4">
            Make the Best of Life with Impact-Driven Mentorship
          </p>
          <Link href="#courses">
            <button className="mt-6 px-6 py-3 bg-[#00B894] text-white rounded-lg hover:bg-[#007B6E] transition">
              Explore Courses
            </button>
          </Link>
        </div>

        <div className="mt-8 md:mt-0" data-aos="fade-left">
          <Image
            src={HomeHero}
            alt="Purposeful Path"
            priority
            className="w-full max-w-md mx-auto"
          />
        </div>
      </header>

      <section className="px-4 py-10 text-center" data-aos="fade-up">
        <p className="text-gray-700 max-w-3xl mx-auto">
          Are you a young job-seeker or budding entrepreneur? <br />
          <span className="text-[#006950] font-bold">Purposeful Path</span>{" "}
          empowers you with mentorship, knowledge, and skills to thrive.
        </p>
      </section>

      <section className="px-4 py-10 bg-gray-100" id="why">
        <h2
          className="text-3xl font-bold text-center text-[#006950] mb-8"
          data-aos="fade-up"
        >
          Why Choose Purposeful Path?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Expert Mentors",
            "Tailored Guidance",
            "Skill Development",
            "Community Support",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="w-12 h-12 bg-[#006950] text-white flex items-center justify-center rounded-full mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-bold text-xl mb-2 text-[#006950]">{title}</h3>
              <p className="text-gray-600">
                {title === "Expert Mentors" &&
                  "Learn from experienced professionals passionate about mentoring."}
                {title === "Tailored Guidance" &&
                  "Personalized mentorship to match your unique goals."}
                {title === "Skill Development" &&
                  "Sharpen skills beyond academics to achieve real-world success."}
                {title === "Community Support" &&
                  "Connect with like-minded peers for support and growth."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#D2E4D6] py-12 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-[#141414] mb-4">Testimonials</h2>
        <Testimonial />
      </section>

      <section className="bg-gray-100 py-10 px-4 text-center" id="courses">
        <h2 className="text-3xl font-bold text-[#006950] mb-6">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Leadership Mastery",
            "Entrepreneurship Essentials",
            "Career Growth Strategies",
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="font-bold text-xl text-[#006950]">{course}</h3>
              <p className="text-gray-600 mt-2">
                Elevate your skills with expert-led courses designed for impact.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-16 text-white text-center"
        style={{ backgroundImage: "url('/mentoringpic1.jpg')" }}
      >
        <div
          className="bg-black bg-opacity-70 p-8 rounded-lg mx-4 md:mx-auto max-w-2xl"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold">
            Upcoming Event: Virtual Meetup for Founders
          </h3>
          <p className="mt-2">
            Date: 22nd October 2023 | Topic: Innovative Growth Strategies
          </p>
          <Link href="/event-details">
            <button className="mt-4 px-6 py-3 bg-[#00B894] text-white rounded-lg hover:bg-[#007B6E] transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
