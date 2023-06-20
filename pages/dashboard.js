"use client";
import React, { useEffect } from "react";

import ApplicationTracker from "@/app/Components/ApplicationTracker";
import JobSearch from "@/app/Components/JobSearch";
import ProfileSummary from "@/app/Components/ProfileSummary";
import ResumeUploadForm from "@/app/Components/ResumeUploadForm";
import SavedJobs from "@/app/Components/SavedJobs";
import JobSeekerLayout from "@/layout/JobSeekerLayout";

import Aos from "aos";
import "aos/dist/aos.css";

const UserDashboard = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  const handleUpload = (resume) => {
    // Perform upload logic
    console.log("Resume uploaded:", resume);
  };
  return (
    <JobSeekerLayout>
      <div
        className=" bg-[#82A0AA]flex flex-col items-center justify-center h-full px-4"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h1
          className="text-3xl font-semibold mb-8 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Welcome to Your Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-screen-xl">
          <div data-aos="fade-down" data-aos-delay="400">
            <ProfileSummary />
          </div>

          <div data-aos="fade-down" data-aos-delay="400">
            <JobSearch />
          </div>

          <div data-aos="fade-down" data-aos-delay="400">
            <SavedJobs />
          </div>

          <div data-aos="fade-down" data-aos-delay="400">
            <ResumeUploadForm onUpload={handleUpload} />
          </div>

          <div data-aos="fade-down" data-aos-delay="400">
            <ApplicationTracker />
          </div>
        </div>
      </div>
    </JobSeekerLayout>
  );
};

export default UserDashboard;
