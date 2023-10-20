import React, { useEffect } from "react";
import Link from "next/link";
import {
  FaBullseye,
  FaRegBuilding,
  FaHeartbeat,
  FaCarSide,
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { Convener } from "@/public";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const About = () => {
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
        <div className="mt-10 py-10 md:py-10 text-white bg-gradient-to-b from-[#006950] to-gray-500">
          <h1 className="text-4xl font-bold text-center">
            {" "}
            Empowering Job Seekers
          </h1>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 mt-9 mb-7"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaBullseye className="text-center text-5xl mb-3 text-gray-700" />
            <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl lg:text-xl">
              At Purposeful Path, our vision is to lead the way in guiding job
              seekers toward successful careers. We aspire to redefine career
              expectations and empower you to achieve your dreams.
            </p>
          </div>
          <div
            className="bg-white shadow-lg rounded-lg p-6 text-center"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              <FaRegBuilding className="text-center text-5xl mb-3 text-gray-700" />
              <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl lg:text-xl">
                Our mission is to provide top-quality mentorship and support to
                job seekers. We are committed to your success, offering
                guidance, mentorship, and resources to help you achieve your
                career goals.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaHeartbeat className="text-center text-5xl mb-3 text-gray-700" />
            <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
              Our Values
            </h3>
            <p className="text-lg md:text-xl lg:text-xl">
              Integrity - Upholding the highest ethical standards, fostering
              honesty, transparency, and trust in all our interactions.
            </p>
            <p className="text-lg md:text-xl lg:text-xl">
              Excellence - Pioneering excellence in every facet of our work,
              aiming for supreme service quality and exceeding your
              expectations.
            </p>
            <p className="text-lg md:text-xl lg:text-xl">
              Reliability - Striving to be your unwavering partner, consistently
              providing dependable guidance and support in your job-seeking
              journey.
            </p>
          </div>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaCarSide className="text-center text-5xl mb-3 text-gray-700" />
            <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
              Your Journey
            </h3>
            <p className="text-lg md:text-xl lg:text-xl">
              Your job-seeking journey is a testament to dedication and passion.
              With the right mentorship, you can unlock your true potential and
              achieve your career aspirations.
            </p>
          </div>
        </div>

        <div
          className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <IoMdPeople className="text-center text-5xl mb-3 text-gray-700" />
            <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
              Want to Join Our Journey?
            </h3>
            <p className="text-xl md:text-xl lg:text-xl">
              Explore our current mentorship opportunities and be a part of our
              mission to empower job seekers. Join Purposeful Path and thrive in
              your career journey!
            </p>
            <div className="mt-5">
              <Link href="/mentoring">
                <button className="button px-6 py-3 text-lg">
                  Explore Mentorship
                </button>
              </Link>
            </div>
          </div>
          <div
            className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
              Meet Our Growth Convener
            </h3>
            <div className="mx-auto overflow-hidden">
              <Image
                className="w-64 h-64 mx-auto rounded-full "
                src={Convener}
                alt="Convener"
                priority
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Damilola Obidairo
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                EMBA, CAPM, MNSChE
              </p>
              <div className="bg-gray-100 py-6 px-4 rounded-lg shadow-md">
                <p class="text-gray-700">
                  Damilola is a seasoned business and project development
                  practitioner with a first degree in Chemical Engineering. He
                  brings nearly two decades of experience across various
                  sectors, including Business Development, Project Management,
                  Customer Service, Client Interface Management, and Contract
                  Administration for industries such as Oil & Gas, Telecoms,
                  infrastructure projects, and the emerging Technology Space in
                  West Africa.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  Currently serving as the CEO at 8thGear Partners Ltd, a
                  Venture Studio that provides enterprise services to Start-ups
                  and SMEs undergoing digital transformation. He also delivers
                  project services to partner development agencies globally.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  Throughout his career, Damilola has led teams working with
                  organizations and donor funders, including the Bill and
                  Melinda Gates Foundation, University of California (San
                  Diego), United States Africa Development Fund, Lagos State
                  Employment Trust Fund, State and Federal Government Agencies,
                  as well as corporate entities in Nigeria. He has been
                  responsible for developing opportunities and projects from
                  conceptualization through proposals, negotiation, contract
                  awards, and execution. He has also supervised rigorous impact
                  assessments involving local and international stakeholders.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  His experience with Wennovation Hub/LoftyInc Capital
                  Management exposed him to opportunities supporting start-ups
                  through incubation programs and fundraising from international
                  and local Angels and VCs. He possesses a deep understanding of
                  the Innovation landscape, particularly in Nigeria, where he
                  has built a strong professional network and can manage
                  high-level relationships, especially with Government and
                  International NGOs.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  Damilola earned his first degree in Chemical Engineering in
                  2008 from Lagos State University. He furthered his education
                  with an Executive MBA from Quantic School of Business and
                  Technology, Washington DC, in May 2021. He also holds a
                  Certificate Associate in Project Management from the Project
                  Management Institute, earned in 2011.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  He has received several awards, including a service excellence
                  award from the Lagos Chapter of the Nigerian Society of
                  Chemical Engineers (NSChE), and recognition for community
                  service as Youth President of All Saints Anglican Church,
                  Ikosi. He was also the winner of the Lagos Merck Accelerator
                  2019 cohort for Pronov, a Pharma tech Start-up, where he
                  served as COO.
                </p>
                <p class="text-gray-700 mt-3 mb-3">
                  In his free time, Damilola enjoys watching epic movies,
                  reading extensively, and swimming. He is a guitarist,
                  singer/songwriter, and gardener. He is happily married with
                  two intelligent daughters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
