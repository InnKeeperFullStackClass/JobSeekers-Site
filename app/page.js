import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
import HomeHero from "../public/PurposefulPath 2.jpg";
import Link from "next/link";

export default function Home({ user }) {
  return (
    <DefaultLayout>
      <div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl text-white">
                Welcome to the PurposefulPath Platform, where dreams become
                reality and purposeful careers and businesses are born!
              </p>
              <p className="text-white">
                Make the Best of Life with Impact-Driven Mentorship
              </p>
            </div>
          </div>
          <Image
            src={HomeHero}
            alt="homehero"
            className="max-w-full opacity-40"
            priority
          />
        </div>

        <div className="mt-7 text-center">
          <p className="text-black md:text-lg">
            Are you a young job-seeker or a budding entrepreneur? Do you feel
            the burning desire to make the best of your life, but find yourself
            in need of guidance and support? Look no further!{" "}
            <span className="text-[#008000] font-bold">Purposeful Path</span> is
            here to empower you with the knowledge, skills, and mentorship
            necessary to thrive in today's dynamic world.
          </p>
          <p className="mt-4 md:text-lg text-black">
            We understand that the journey towards a fulfilling career can be
            daunting. The path is rarely linear, and the challenges can seem
            insurmountable. But we believe that with the right mentorship and
            guidance, you have the power to overcome any obstacle and unlock
            your true potential.
          </p>
        </div>

        <div className="mt-9">
          <p className=" text-xl text-center mb-5">
            Here's why PurposefulPath is your perfect companion on this
            transformative journey:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-[#008000] rounded-full text-white font-bold mb-4">
                1
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Expert Mentors:</span> Our platform
                boasts a carefully curated network of experienced mentors who
                have successfully navigated the professional landscape. They
                have walked the path you aspire to traverse and are eager to
                share their wisdom with you. Our mentors are not only
                accomplished professionals but also passionate about nurturing
                the next generation of talent. They will provide you with the
                insights, strategies, and support you need to excel.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-[#008000] rounded-full text-white font-bold mb-4">
                2
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Tailored Guidance: </span>We
                understand that each individual's aspirations and challenges are
                unique. That's why we offer personalized mentorship tailored to
                your specific goals and ambitions. Whether you're seeking
                guidance on job search strategies, interview preparation, career
                pivots, or launching your own venture, our mentors will provide
                program referrals, targeted advice and actionable steps to
                propel you forward.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-[#008000] rounded-full text-white font-bold mb-4">
                3
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Skill Development: </span>At
                PurposefulPaths, we believe that true success goes beyond mere
                knowledge. From communication and leadership skills to financial
                literacy and problem-solving, our resources are curated to
                bridge the gap between academic/technical skills and real-world
                success.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-[#008000] rounded-full text-white font-bold mb-4">
                4
              </div>
              <p className="text-gray-700">
                <span className="font-bold">Inspiring Community: </span>Surround
                yourself with a community of ambitious and like-minded
                individuals who share your passion for making a difference.
                Connect with fellow job-seekers, entrepreneurs, and mentors who
                understand your journey and can provide valuable insights and
                support. Collaborate, network, and inspire one another as you
                collectively shape a better future.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center w-10 h-10 bg-[#008000] rounded-full text-white font-bold mb-4">
                5
              </div>
              <p className="text-gray-700">
                <span className="font-bold">
                  Empowering Resources for Impact:
                </span>{" "}
                Access a wealth of resources, articles, and thought-provoking
                content to ignite your inspiration and deepen your understanding
                of the professional world. Stay updated on the latest industry
                trends, emerging opportunities, and innovative strategies that
                will give you a competitive edge. Our resources are designed to
                keep you ahead of the curve and equip you with the knowledge to
                seize every opportunity.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center mt-9">
            <p className="text-lg text-black">
              Unleash your potential. Embrace your dreams. Sign up now and
              embark on a transformative mentorship journey with PurposefulPath.
            </p>
            <p className="mt-4 text-lg text-black">
              Together, we will make the best of life!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center mt-7 mx-auto">
              {!user ? (
                <>
                  <Link
                    href="/register"
                    className="p-1 px-6 rounded bg-[#008000] text-white border border-blue-500 text-center"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="p-1 px-6 rounded bg-[#008000] text-white border border-blue-500 text-center"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <div className="flex gap-2">
                  <Link
                    href="/Dashboard"
                    className="p-2 px-4 rounded bg-blue-500 text-white"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-2xl font-bold mt-9 mb-7 text-center ">
              Testimonials
            </p>
            <div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-[#008000] text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg ">
                    "Working with Damilola was quite an interesting one. I was
                    at a very critical point in my life when our paths crossed
                    and I'll always be grateful for that opportunity. There
                    wasn't a dull moment from top-notch deliverables and
                    emphasizing the outsider's perspective in any given task
                    informed my diligence while working with him. Thanks for all
                    you do for me. I recommend Damilola because you can rest
                    assured of a healthy work-life balance and fulfillment in
                    career achievement "- Adebanjo Adeniji
                  </p>
                </div>
                <div className="bg-[#008000] text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg ">
                    "I worked with Dami as my team lead. He led with dedication
                    to his work and inspiration to his team members. Working
                    with him, you would definitely see his zeal to work, gusto,
                    and hands-on approach to problem-solving, team building &
                    leadership. He is motivated and has lots of knowledge in his
                    field." - Tola Oladele
                  </p>
                </div>
                <div className="bg-[#008000] text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg">
                    "You rarely come across standout talents like Damilola,
                    although he is technically my manager, rarely does it feel
                    that way. He is focused on being a great coach and a mentor.
                    He understands that great leadership requires more than
                    delegation, it is about equipping and inspiring the team to
                    create a safe environment where they can be themselves and
                    where their opinions matter." - Olayemi Obademi MBA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
