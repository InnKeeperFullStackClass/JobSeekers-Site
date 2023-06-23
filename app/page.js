"use client";
import React, { useEffect } from "react";

import DefaultLayout from "@/layout/DefaultLayout";

import Image from "next/image";
import HomeHero from "../public/purposefulpath3.jpg";
// import businessgrowth2 from "../public/businessgrowth2.jpg";
import About from "../public/damiportrait(4).jpg";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home({ user }) {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <DefaultLayout>
      <div>
        <div className="" style={{ animation: "fadeIn 1s ease-in-out" }}>
          <div className="flex flex-col justify-center md:flex-row mt-9">
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

        <div className="mt-7 text-center">
          <p className="text-black md:text-lg">
            Are you a young job-seeker or a budding entrepreneur? Do you feel
            the burning desire to make the best of your life, but find yourself
            in need of guidance and support? Look no further!{" "}
            <span className="text-[#006950] font-bold">Purposeful Path</span> is
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

        <div className="mt-9" data-aos="fade-down" data-aos-delay="400">
          <p className=" text-xl text-center mb-5">
            Here's why PurposefulPath is your perfect companion on this
            transformative journey:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#006950] rounded-full text-white font-bold mb-4">
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
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#006950] rounded-full text-white font-bold mb-4">
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
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#006950] rounded-full text-white font-bold mb-4">
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
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#006950] rounded-full text-white font-bold mb-4">
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
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-[#006950] rounded-full text-white font-bold mb-4">
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
            <div
              className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center mt-7 mx-auto"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {!user ? (
                <>
                  <Link
                    href="/register"
                    className="p-1 px-6 rounded bg-[#0D2C34] text-white border border-blue-500 text-center"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/login"
                    className="p-1 px-6 rounded bg-[#006950] text-white border border-blue-500 text-center"
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
          <div className="mt-7 items-center text-center justify-center animate-fade-in-left">
            {" "}
            <h2 className="text-[#0b2546]  text-3xl font-bold text-gray-800 mb-4 animate-bounce">
              About PurposefulPath's 'Growth Convener'
            </h2>
            <h3 className="text-[#0b2546]  text-2xl font-bold text-gray-800 mb-4 animate-bounce">
              Damilola Obidairo EMBA, CAPM, MNSChE
            </h3>
          </div>
          <div className="mt-9 m-4 mt-7 items-center justify-center animate-fade-in-left">
            <div className="mt-7 w-full  pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-right">
              <Image
                className="w-full"
                src={About}
                alt="about"
                data-aos="fade-down"
                data-aos-delay="400"
                priority
              />
            </div>
            <div className="w-full  pr-5">
              <div>
                <div className="bg-gray-100 py-10 animate-fade-in-right">
                  <p class="text-gray-700 mt-3 mb-3">
                    Damilola is a seasoned business and project development
                    practitioner with a first degree in Chemical Engineering.
                    His multisectoral experience spanning almost two decades
                    hovers around Business Development, Project Management,
                    Customer Service, Client Interface Management and Contract
                    Administration for Oil &amp; Gas, Telecoms, infrastructure
                    projects and ‘the emerging Technology Space in West Africa’.
                    His guiding principles are Integrity, Creativity, Excellence
                    and Continuous learning.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    He is currently the CEO at 8thGear Partners Ltd – a Venture
                    Studio that also provides enterprise services to Start-ups
                    and SMEs that require digital transformation. At 8thGear he
                    also provides project delivery services to partner
                    development agencies, globally.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    In his career, He has had the privilege of leading teams
                    that have worked with organizations and donor funders such
                    as the Bill and Melinda Gates Foundation, University of
                    California (San Diego), United States Africa Development
                    Fund, Lagos State Employment Trust Fund, State and Federal
                    Governments Agencies as well as corporates in Nigeria. He
                    developed most of these opportunities and Projects from
                    conceptualization, through proposals, negotiation and
                    contract awards, to execution. He has also supervised
                    rigorous impact assessments with several local and
                    international stakeholders involved.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    His work with Wennovation Hub/LoftyInc Capital Management
                    exposed him to opportunities to support start-ups through
                    various incubation programs and some handholding towards
                    fundraising from both international and Local Angels and
                    VCs. On the back of this experience, He has an understanding
                    of the Innovation landscape, especially in Nigeria where He
                    has built a sound professional network and can manage
                    high-level relationships, especially with Government and
                    International NGOs.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    His first degree in Chemical Engineering was earned in 2008
                    from Lagos State University. He also earned his Executive
                    MBA with Quantic School of Business and Technology,
                    Washington DC in May 2021. He had earlier also earned his
                    Certificate Associate in Project Management from the Project
                    Management Institute in 2011.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    He has won several meritorious awards on different
                    platforms, some of which are a service excellence award from
                    the Lagos Chapter of the Nigerian Society of Chemical
                    Engineers (NSChE); several awards for community service as
                    Youth President of All Saints Anglican Church, Ikosi and
                    winner of the Lagos Merck Accelerator 2019 cohort for Pronov
                    (a Pharma tech Start-up) as COO.
                  </p>
                  <p class="text-gray-700 mt-3 mb-3">
                    He loves to see epic movies, read widely and swim at
                    leisure. He identifies as a guitarist, singer/songwriter,
                    and gardener. He is happily married with two intelligent
                    daughters.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 mb-7">
            <p className="text-3xl font-bold mt-9 mb-7 text-center ">
              Testimonials
            </p>
            <div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div
                  className="bg-[#0D2C34] text-white p-6 rounded-lg shadow-lg"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <p
                    className="text-lg "
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
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
                <div
                  className="bg-[#0D2C34] text-white p-6 rounded-lg shadow-lg"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <p
                    className="text-lg "
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    "I worked with Dami as my team lead. He led with dedication
                    to his work and inspiration to his team members. Working
                    with him, you would definitely see his zeal to work, gusto,
                    and hands-on approach to problem-solving, team building &
                    leadership. He is motivated and has lots of knowledge in his
                    field." - Tola Oladele
                  </p>
                </div>
                <div
                  className="bg-[#0D2C34] text-white p-6 rounded-lg shadow-lg"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <p
                    className="text-lg"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
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
